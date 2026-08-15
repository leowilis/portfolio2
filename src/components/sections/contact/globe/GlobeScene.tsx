'use client';

import { Canvas } from '@react-three/fiber';
import type { CSSProperties } from 'react';
import {
  GLOBE_ALPHA,
  GLOBE_ANTIALIAS,
  GLOBE_CAMERA_FAR,
  GLOBE_CAMERA_FOV,
  GLOBE_CAMERA_NEAR,
  GLOBE_CAMERA_POSITION,
  GLOBE_CANVAS_DESKTOP_SIZE,
  GLOBE_CANVAS_DPR_MAX,
  GLOBE_CANVAS_DPR_MIN,
  GLOBE_CANVAS_MOBILE_SIZE,
  GLOBE_CANVAS_PERFORMANCE_MIN,
  GLOBE_CANVAS_TABLET_SIZE,
  GLOBE_POWER_PREFERENCE,
} from '../constants';
import Globe from './Globe';
import GlobeControls from './GlobeControls';
import GlobeLights from './GlobeLights';

const globeSizeVariables = {
  '--globe-mobile-size': `${GLOBE_CANVAS_MOBILE_SIZE}px`,
  '--globe-tablet-size': `${GLOBE_CANVAS_TABLET_SIZE}px`,
  '--globe-desktop-size': `${GLOBE_CANVAS_DESKTOP_SIZE}px`,
} as CSSProperties;

export default function GlobeScene() {
  return (
    <div
      className='relative h-(--globe-mobile-size) w-(--globe-mobile-size) shrink-0 overflow-vis sm:h-(--globe-tablet-size) sm:w-[var(--globe-tablet-si lg:h-(--globe-desktop-size) lg:w-(--globe-desktop-size)'
      style={globeSizeVariables}
    >
      <Canvas
        className='absolute! inset-0! h-full! w-full!'
        dpr={[GLOBE_CANVAS_DPR_MIN, GLOBE_CANVAS_DPR_MAX]}
        performance={{
          min: GLOBE_CANVAS_PERFORMANCE_MIN,
        }}
        camera={{
          position: GLOBE_CAMERA_POSITION,
          fov: GLOBE_CAMERA_FOV,
          near: GLOBE_CAMERA_NEAR,
          far: GLOBE_CAMERA_FAR,
        }}
        gl={{
          antialias: GLOBE_ANTIALIAS,
          alpha: GLOBE_ALPHA,
          powerPreference: GLOBE_POWER_PREFERENCE,
        }}
      >
        <Globe />
        <GlobeLights />
        <GlobeControls />
      </Canvas>
    </div>
  );
}
