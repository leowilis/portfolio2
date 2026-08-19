export const GLOBE_CONFIG = {
  globeColor: '#171225',
  polygonColor: '#8b7bb8',
  atmosphereColor: '#a78bfa',
  atmosphereAltitude: 0.08,
  emissive: '#281840',
  emissiveIntensity: 0.55,
  shininess: 0.8,
  pointSize: 0.7,
  arcStroke: 0.22,
  arcLength: 0.45,
  arcGap: 1.8,
  arcTime: 2200,
  autoRotate: true,
  autoRotateSpeed: 0.35,
  markerColor: '#c4b5fd',
} as const;

// Globe
export const GLOBE_RADIUS = 90;
export const GLOBE_HEX_POLYGON_RESOLUTION = 2;
export const GLOBE_HEX_POLYGON_MARGIN = 0.65;
export const GLOBE_MEDAN_POINT_COLOR = '#c4b5fd';
export const GLOBE_MEDAN_POINT_ALTITUDE = 0.015;
export const GLOBE_DEFAULT_POINT_ALTITUDE = 0.012;
export const GLOBE_DEFAULT_POINT_RADIUS = 0.65;
export const GLOBE_RENDER_SCALE = (GLOBE_RADIUS / 100) * 0.92;
