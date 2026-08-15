'use client';

import { useEffect, useMemo, useState } from 'react';
import { Color } from 'three';
import countries from '@/src/data/globe.json';
import {
  GLOBE_CONFIG,
  GLOBE_RADIUS,
  GLOBE_HEX_POLYGON_MARGIN,
  GLOBE_HEX_POLYGON_RESOLUTION,
  GLOBE_MEDAN_POINT_COLOR,
  GLOBE_MEDAN_POINT_ALTITUDE,
  GLOBE_DEFAULT_POINT_RADIUS,
  GLOBE_DEFAULT_POINT_ALTITUDE,
  GLOBE_RENDER_SCALE,
} from './globe.config';
import { GLOBE_ARCS, MEDAN } from './globe.data';
import GlobeMarker from './GlobeMarker';
import GlobeRings from './GlobeRings';

type GlobeArc = (typeof GLOBE_ARCS)[number];

type GlobePoint = {
  lat: number;
  lng: number;
  color: string;
};

type GlobeMaterial = {
  color: Color;
  emissive: Color;
  emissiveIntensity: number;
  shininess: number;
};

type ThreeGlobeInstance = import('three-globe').default;

export default function Globe() {
  const [globe, setGlobe] = useState<ThreeGlobeInstance | null>(null);

  useEffect(() => {
    let cancelled = false;

    const loadGlobe = async () => {
      const { default: ThreeGlobe } = await import('three-globe');
      if (cancelled) return;

      const instance = new ThreeGlobe();
      instance.scale.setScalar(GLOBE_RADIUS / 100);
      setGlobe(instance);
    };
    void loadGlobe();

    return () => {
      cancelled = true;
    };
  }, []);

  const destinationPoints = useMemo<GlobePoint[]>(
    () =>
      GLOBE_ARCS.map((arc) => ({
        lat: arc.endLat,
        lng: arc.endLng,
        color: arc.color,
      })),
    [],
  );

  const globePoints = useMemo<GlobePoint[]>(
    () => [
      {
        lat: MEDAN.lat,
        lng: MEDAN.lng,
        color: GLOBE_MEDAN_POINT_COLOR,
      },
      ...destinationPoints,
      ...GLOBE_ARCS.map((arc) => ({
        lat: arc.startLat,
        lng: arc.startLng,
        color: arc.color,
      })),
    ],
    [destinationPoints],
  );

  useEffect(() => {
    if (!globe) return;

    const material = globe.globeMaterial() as unknown as GlobeMaterial;
    material.color = new Color(GLOBE_CONFIG.globeColor);
    material.emissive = new Color(GLOBE_CONFIG.emissive);
    material.emissiveIntensity = GLOBE_CONFIG.emissiveIntensity;
    material.shininess = GLOBE_CONFIG.shininess;

    // MAP / COUNTRY POLYGONS
    globe
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(GLOBE_HEX_POLYGON_RESOLUTION)
      .hexPolygonMargin(GLOBE_HEX_POLYGON_MARGIN)
      .hexPolygonColor(() => GLOBE_CONFIG.polygonColor)
      .showAtmosphere(true)
      .atmosphereColor(GLOBE_CONFIG.atmosphereColor)
      .atmosphereAltitude(GLOBE_CONFIG.atmosphereAltitude);

    // CONNECTION LINES
    globe
      .arcsData(GLOBE_ARCS)
      .arcStartLat((data: unknown) => {
        return (data as GlobeArc).startLat;
      })
      .arcStartLng((data: unknown) => {
        return (data as GlobeArc).startLng;
      })
      .arcEndLat((data: unknown) => {
        return (data as GlobeArc).endLat;
      })
      .arcEndLng((data: unknown) => {
        return (data as GlobeArc).endLng;
      })
      .arcAltitude((data: unknown) => {
        return (data as GlobeArc).arcAlt;
      })
      .arcColor((data: unknown) => {
        return (data as GlobeArc).color;
      })
      .arcStroke(GLOBE_CONFIG.arcStroke)
      .arcDashLength(GLOBE_CONFIG.arcLength)
      .arcDashGap(GLOBE_CONFIG.arcGap)
      .arcDashAnimateTime(GLOBE_CONFIG.arcTime);

    // POINTS
    globe
      .pointsData(globePoints)
      .pointLat((data: unknown) => {
        return (data as GlobePoint).lat;
      })
      .pointLng((data: unknown) => {
        return (data as GlobePoint).lng;
      })
      .pointColor((data: unknown) => {
        return (data as GlobePoint).color;
      })
      .pointRadius((data: unknown) => {
        const point = data as GlobePoint;
        const isMedan = point.lat === MEDAN.lat && point.lng === MEDAN.lng;
        return isMedan ? GLOBE_CONFIG.pointSize : GLOBE_DEFAULT_POINT_RADIUS;
      })
      .pointAltitude((data: unknown) => {
        const point = data as GlobePoint;
        const isMedan = point.lat === MEDAN.lat && point.lng === MEDAN.lng;
        return isMedan
          ? GLOBE_MEDAN_POINT_ALTITUDE
          : GLOBE_DEFAULT_POINT_ALTITUDE;
      })
      .pointsMerge(true);

    return () => {
      globe.arcsData([]);
      globe.pointsData([]);
      globe.hexPolygonsData([]);
      globe.ringsData([]);
    };
  }, [globe, globePoints]);

  if (!globe) return null;

  return (
    <group scale={GLOBE_RENDER_SCALE}>
      <primitive object={globe} />
      <GlobeMarker />
      <GlobeRings globe={globe} />
    </group>
  );
}
