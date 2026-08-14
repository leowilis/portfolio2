'use client';

import { useEffect } from 'react';
import ThreeGlobe from 'three-globe';

import { GLOBE_CONFIG } from './globe.config';
import { MEDAN } from './globe.data';

type GlobeRing = {
  lat: number;
  lng: number;
};

interface GlobeRingsProps {
  globe: ThreeGlobe;
}

export default function GlobeRings({ globe }: GlobeRingsProps) {
  useEffect(() => {
    const rings: GlobeRing[] = [
      {
        lat: MEDAN.lat,
        lng: MEDAN.lng,
      },
    ];

    globe
      .ringsData(rings)
      .ringColor(() => '#a78bfa')
      .ringMaxRadius(3)
      .ringPropagationSpeed(1.8)
      .ringRepeatPeriod(GLOBE_CONFIG.arcTime * GLOBE_CONFIG.arcLength);

    return () => {
      globe.ringsData([]);
    };
  }, [globe]);

  return null;
}
