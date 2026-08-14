'use client';

import { GLOBE_LIGHTS } from '../constants';

export default function GlobeLights() {
  return (
    <>
      <directionalLight
        position={GLOBE_LIGHTS.KEY.POSITION}
        intensity={GLOBE_LIGHTS.KEY.INTENSITY}
        color={GLOBE_LIGHTS.KEY.COLOR}
      />

      <directionalLight
        position={GLOBE_LIGHTS.FILL.POSITION}
        intensity={GLOBE_LIGHTS.FILL.INTENSITY}
        color={GLOBE_LIGHTS.FILL.COLOR}
      />

      <pointLight
        position={GLOBE_LIGHTS.ACCENT.POSITION}
        intensity={GLOBE_LIGHTS.ACCENT.INTENSITY}
        color={GLOBE_LIGHTS.ACCENT.COLOR}
      />
    </>
  );
}
