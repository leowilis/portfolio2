'use client';

import { useEffect, useMemo, useState } from 'react';
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
  isMedan?: boolean;
};

type GlobeMaterial = {
  color: {
    set: (color: string) => void;
  };
  emissive: {
    set: (color: string) => void;
  };
  emissiveIntensity: number;
  shininess: number;
};

type ThreeGlobeInstance = import('three-globe').default;

const getArcStartLat = (data: unknown) => (data as GlobeArc).startLat;
const getArcStartLng = (data: unknown) => (data as GlobeArc).startLng;
const getArcEndLat = (data: unknown) => (data as GlobeArc).endLat;
const getArcEndLng = (data: unknown) => (data as GlobeArc).endLng;
const getArcAltitude = (data: unknown) => (data as GlobeArc).arcAlt;
const getArcColor = (data: unknown) => (data as GlobeArc).color;
const getPointLat = (data: unknown) => (data as GlobePoint).lat;
const getPointLng = (data: unknown) => (data as GlobePoint).lng;
const getPointColor = (data: unknown) => (data as GlobePoint).color;
const getPointRadius = (data: unknown) => {
  const point = data as GlobePoint;
  return point.isMedan ? GLOBE_CONFIG.pointSize : GLOBE_DEFAULT_POINT_RADIUS;
};
const getPointAltitude = (data: unknown) => {
  const point = data as GlobePoint;
  return point.isMedan
    ? GLOBE_MEDAN_POINT_ALTITUDE
    : GLOBE_DEFAULT_POINT_ALTITUDE;
};

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

  const globePoints = useMemo<GlobePoint[]>(
    () => [
      {
        lat: MEDAN.lat,
        lng: MEDAN.lng,
        color: GLOBE_MEDAN_POINT_COLOR,
        isMedan: true,
      },

      ...GLOBE_ARCS.map((arc) => ({
        lat: arc.endLat,
        lng: arc.endLng,
        color: arc.color,
      })),

      ...GLOBE_ARCS.map((arc) => ({
        lat: arc.startLat,
        lng: arc.startLng,
        color: arc.color,
      })),
    ],
    [],
  );

  useEffect(() => {
    if (!globe) return;

    const material = globe.globeMaterial() as unknown as GlobeMaterial;

    // Globe material
    material.color.set(GLOBE_CONFIG.globeColor);
    material.emissive.set(GLOBE_CONFIG.emissive);
    material.emissiveIntensity = GLOBE_CONFIG.emissiveIntensity;
    material.shininess = GLOBE_CONFIG.shininess;

    // COUNTRY POLYGONS
    globe
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(GLOBE_HEX_POLYGON_RESOLUTION)
      .hexPolygonMargin(GLOBE_HEX_POLYGON_MARGIN)
      .hexPolygonColor(() => GLOBE_CONFIG.polygonColor)
      .showAtmosphere(true)
      .atmosphereColor(GLOBE_CONFIG.atmosphereColor)
      .atmosphereAltitude(GLOBE_CONFIG.atmosphereAltitude);

    // CONNECTION ARCS
    globe
      .arcsData(GLOBE_ARCS)
      .arcStartLat(getArcStartLat)
      .arcStartLng(getArcStartLng)
      .arcEndLat(getArcEndLat)
      .arcEndLng(getArcEndLng)
      .arcAltitude(getArcAltitude)
      .arcColor(getArcColor)
      .arcStroke(GLOBE_CONFIG.arcStroke)
      .arcDashLength(GLOBE_CONFIG.arcLength)
      .arcDashGap(GLOBE_CONFIG.arcGap)
      .arcDashAnimateTime(GLOBE_CONFIG.arcTime);
      
    // POINTS
    globe
      .pointsData(globePoints)
      .pointLat(getPointLat)
      .pointLng(getPointLng)
      .pointColor(getPointColor)
      .pointRadius(getPointRadius)
      .pointAltitude(getPointAltitude)
      .pointsMerge(true);

    return () => {
      globe.arcsData([]);
      globe.pointsData([]);
      globe.hexPolygonsData([]);
      globe.ringsData([]);
    };
  }, [globe, globePoints]);

  if (!globe) {
    return null;
  }

  return (
    <group scale={GLOBE_RENDER_SCALE}>
      <primitive object={globe} />

      <GlobeMarker />

      <GlobeRings globe={globe} />
    </group>
  );
}
