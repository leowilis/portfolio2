'use client';

import { OrbitControls } from '@react-three/drei';
import { GLOBE_CONFIG, GLOBE_RADIUS } from './globe.config';

export default function GlobeControls() {
  return (
    <OrbitControls
      enablePan={false}
      enableZoom={false}
      enableDamping
      dampingFactor={0.06}
      rotateSpeed={0.45}
      autoRotate={GLOBE_CONFIG.autoRotate}
      autoRotateSpeed={GLOBE_CONFIG.autoRotateSpeed}
      minDistance={GLOBE_RADIUS * 2.8}
      maxDistance={GLOBE_RADIUS * 2.8}
      minPolarAngle={Math.PI * 0.28}
      maxPolarAngle={Math.PI * 0.72}
    />
  );
}
