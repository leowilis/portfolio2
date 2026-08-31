'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const NEON_PURPLE = new THREE.Vector3(0.259, 0.133, 0.969);
const SHADER_POINTS = 26;
const CURVE_POINTS = 80;
const CURVE_LERP = 0.5;
const RADIUS_1 = 3;
const RADIUS_2 = 5;
const GLOW_INTENSITY = 1.2;
const SLEEP_RADIUS_X = 100;
const SLEEP_RADIUS_Y = 100;
const SLEEP_TIME_COEF_X = 0.0025;
const SLEEP_TIME_COEF_Y = 0.0025;
const WORLD_WIDTH = 2;

const VERTEX_SHADER = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  // Signed distance to a quadratic bezier, from https://www.shadertoy.com/view/MlKcDD
  float sdBezier(vec2 pos, vec2 A, vec2 B, vec2 C) {
    vec2 a = B - A;
    vec2 b = A - 2.0 * B + C;
    vec2 c = a * 2.0;
    vec2 d = A - pos;
    float kk = 1.0 / dot(b, b);
    float kx = kk * dot(a, b);
    float ky = kk * (2.0 * dot(a, a) + dot(d, b)) / 3.0;
    float kz = kk * dot(d, a);
    float res = 0.0;
    float p = ky - kx * kx;
    float p3 = p * p * p;
    float q = kx * (2.0 * kx * kx - 3.0 * ky) + kz;
    float h = q * q + 4.0 * p3;

    if (h >= 0.0) {
      h = sqrt(h);
      vec2 x = (vec2(h, -h) - q) / 2.0;
      vec2 uv = sign(x) * pow(abs(x), vec2(1.0 / 3.0));
      float t = clamp(uv.x + uv.y - kx, 0.0, 1.0);
      vec2 qos = d + (c + b * t) * t;
      res = length(qos);
    } else {
      float z = sqrt(-p);
      float v = acos(q / (p * z * 2.0)) / 3.0;
      float m = cos(v);
      float n = sin(v) * 1.732050808;
      vec3 t = clamp(vec3(m + m, -n - m, n - m) * z - kx, 0.0, 1.0);
      vec2 qos = d + (c + b * t.x) * t.x;
      float dis = dot(qos, qos);
      res = dis;
      qos = d + (c + b * t.y) * t.y;
      dis = dot(qos, qos);
      res = min(res, dis);
      qos = d + (c + b * t.z) * t.z;
      dis = dot(qos, qos);
      res = min(res, dis);
      res = sqrt(res);
    }

    return res;
  }

  uniform vec2 uRatio;
  uniform vec2 uSize;
  uniform vec2 uPoints[SHADER_POINTS];
  uniform vec3 uColor;
  varying vec2 vUv;

  uniform float uGlowIntensity;

  void main() {
    vec2 pos = (vUv - 0.5) * uRatio;

    vec2 c = (uPoints[0] + uPoints[1]) / 2.0;
    vec2 cPrev;
    float dist = 10000.0;

    for (int i = 0; i < SHADER_POINTS - 1; i++) {
      cPrev = c;
      c = (uPoints[i] + uPoints[i + 1]) / 2.0;
      dist = min(dist, sdBezier(pos, cPrev, uPoints[i], c));
    }
    dist = max(0.0, dist);

    float glow = pow(uSize.y / dist, uGlowIntensity);

    vec3 col = vec3(0.0);
    col += 10.0 * vec3(smoothstep(uSize.x, 0.0, dist));
    col += glow * uColor;

    // Tone mapping, same as the source shader
    col = 1.0 - exp(-col);
    col = pow(col, vec3(0.4545));

    // Sharper falloff than the color itself, so faint haze doesn't
    // stay opaque enough to dim whatever sits behind the cursor
    float alpha = clamp(pow(max(max(col.r, col.g), col.b), 1.6), 0.0, 1.0);

    gl_FragColor = vec4(col, alpha);
  }
`;

export default function NeonCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const canvas = canvasRef.current;

    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera();
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: true,
    });

    const curvePoints = Array.from(
      { length: CURVE_POINTS },
      () => new THREE.Vector2(),
    );
    const curve = new THREE.SplineCurve(curvePoints);

    const uniforms = {
      uRatio: { value: new THREE.Vector2() },
      uSize: { value: new THREE.Vector2() },
      uPoints: {
        value: Array.from({ length: SHADER_POINTS }, () => new THREE.Vector2()),
      },
      uColor: { value: NEON_PURPLE },
      uGlowIntensity: { value: GLOW_INTENSITY },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      defines: { SHADER_POINTS },
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      transparent: true,
    });
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let isActive = false;

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      uniforms.uSize.value.set(RADIUS_1, RADIUS_2);

      if (width >= height) {
        uniforms.uRatio.value.set(1, height / width);
        uniforms.uSize.value.multiplyScalar(1 / width);
      } else {
        uniforms.uRatio.value.set(width / height, 1);
        uniforms.uSize.value.multiplyScalar(1 / height);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const normalizedX = (x / rect.width) * 2 - 1;
      const normalizedY = -(y / rect.height) * 2 + 1;

      curvePoints[0].set(
        0.5 * normalizedX * uniforms.uRatio.value.x,
        0.5 * normalizedY * uniforms.uRatio.value.y,
      );

      isActive = true;
    };
    const handlePointerLeave = () => {
      isActive = false;
    };

    let animationFrameId = 0;

    const animate = (time: number) => {
      for (let i = 1; i < CURVE_POINTS; i += 1) {
        curvePoints[i].lerp(curvePoints[i - 1], CURVE_LERP);
      }

      for (let i = 0; i < SHADER_POINTS; i += 1) {
        curve.getPoint(i / (SHADER_POINTS - 1), uniforms.uPoints.value[i]);
      }

      if (!isActive) {
        const worldPerPixel = WORLD_WIDTH / window.innerWidth;
        const angleX = time * SLEEP_TIME_COEF_X;
        const angleY = time * SLEEP_TIME_COEF_Y;

        curvePoints[0].set(
          SLEEP_RADIUS_X * worldPerPixel * Math.cos(angleX),
          SLEEP_RADIUS_Y * worldPerPixel * Math.sin(angleY),
        );
      }
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    resize();

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    });
    window.addEventListener('pointerleave', handlePointerLeave);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden='true'
      className='pointer-events-none fixed inset-0'
    />
  );
}
