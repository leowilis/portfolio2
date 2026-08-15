'use client';

import { Html, Line } from '@react-three/drei';
import { useMemo } from 'react';
import {
  GLOBE_MARKER_COLOR,
  GLOBE_MARKER_GLOW_COLOR,
  GLOBE_MARKER_GLOW_OPACITY,
  GLOBE_MARKER_GLOW_SIZE,
  GLOBE_MARKER_LABEL_DISTANCE_FACTOR,
  GLOBE_MARKER_LABEL_POSITION,
  GLOBE_MARKER_LINE_COLOR,
  GLOBE_MARKER_LINE_OPACITY,
  GLOBE_MARKER_LINE_WIDTH,
  GLOBE_MARKER_OFFSET,
  GLOBE_MARKER_SIZE,
} from '../constants';
import { GLOBE_RADIUS } from './globe.config';
import { MEDAN } from './globe.data';
import { latLngToVector3 } from './globe.utils';

export default function GlobeMarker() {
  const position = useMemo(
    () =>
      latLngToVector3(MEDAN.lat, MEDAN.lng, GLOBE_RADIUS + GLOBE_MARKER_OFFSET),
    [],
  );

  const labelPosition = useMemo<[number, number, number]>(
    () => GLOBE_MARKER_LABEL_POSITION,
    [],
  );

  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[GLOBE_MARKER_SIZE, 24, 24]} />
        <meshBasicMaterial color={GLOBE_MARKER_COLOR} toneMapped={false} />
      </mesh>

      <mesh>
        <sphereGeometry args={[GLOBE_MARKER_GLOW_SIZE, 24, 24]} />
        <meshBasicMaterial
          color={GLOBE_MARKER_GLOW_COLOR}
          transparent
          opacity={GLOBE_MARKER_GLOW_OPACITY}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>

      <Line
        points={[[0, 0, 0], labelPosition]}
        color={GLOBE_MARKER_LINE_COLOR}
        transparent
        opacity={GLOBE_MARKER_LINE_OPACITY}
        lineWidth={GLOBE_MARKER_LINE_WIDTH}
      />

      <Html
        position={labelPosition}
        center
        occlude={false}
        distanceFactor={GLOBE_MARKER_LABEL_DISTANCE_FACTOR}
        zIndexRange={[100, 0]}
        style={{
          pointerEvents: 'none',
        }}
      >
        <div className='whitespace-nowrap select-none'>
          <div className='flex items-center gap-2'>
            <span className='h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_10px_rgba(196,181,253,0.9)]' />
            <span className='text-[9px] font-bold uppercase tracking-[0.28em] text-neutral-100'>
              Leo&apos;s base
            </span>
          </div>

          <div className='ml-3.5 mt-1 text-[8px] font-semibold uppercase tracking-[0.2em] text-neutral-400'>
            Medan, Indonesia
          </div>
        </div>
      </Html>
    </group>
  );
}
