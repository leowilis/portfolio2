'use client';

import { useEffect, useRef } from 'react';

// Constants
const PARTICLE_COUNT = 60;
const PARTICLE_MIN_RADIUS = 1;
const PARTICLE_MAX_RADIUS = 1.5;
const PARTICLE_SPEED = 0.5;
const PARTICLE_CONNECTION_DISTANCE = 100;
const PARTICLE_CONNECTION_DISTANCE_SQUARED =
  PARTICLE_CONNECTION_DISTANCE * PARTICLE_CONNECTION_DISTANCE;
const PARTICLE_COLOR = 'rgba(127,119,221,0.7)';
const PARTICLE_CONNECTION_COLOR = 'rgba(127,119,221,';
const PARTICLE_CONNECTION_OPACITY = 0.15;
const PARTICLE_LINE_WIDTH = 0.5;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

function createParticles(width: number, height: number): Particle[] {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * PARTICLE_SPEED,
    vy: (Math.random() - 0.5) * PARTICLE_SPEED,
    radius:
      Math.random() * (PARTICLE_MAX_RADIUS - PARTICLE_MIN_RADIUS) +
      PARTICLE_MIN_RADIUS,
  }));
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let animationFrameId = 0;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = createParticles(canvas.width, canvas.height);
    };

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
        }

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = PARTICLE_COLOR;
        context.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const otherParticle = particles[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared >= PARTICLE_CONNECTION_DISTANCE_SQUARED) {
            continue;
          }
          const distance = Math.sqrt(distanceSquared);
          const opacity =
            PARTICLE_CONNECTION_OPACITY *
            (1 - distance / PARTICLE_CONNECTION_DISTANCE);

          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(otherParticle.x, otherParticle.y);
          context.strokeStyle = `${PARTICLE_CONNECTION_COLOR}${opacity})`;
          context.lineWidth = PARTICLE_LINE_WIDTH;
          context.stroke();
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden='true'
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
