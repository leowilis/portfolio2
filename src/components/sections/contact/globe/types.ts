export type GlobeArc = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeMarker = {
  lat: number;
  lng: number;
  color: string;
};

export type GlobeConfig = {
  globeColor: string;
  polygonColor: string;
  atmosphereColor: string;
  atmosphereAltitude: number;
  emissive: string;
  emissiveIntensity: number;
  shininess: number;
  pointSize: number;
  arcTime: number;
  arcLength: number;
  arcGap: number;
  arcStroke: number;
  ringPropagationSpeed: number;
  ringRepeatPeriod: number;
  autoRotate: boolean;
  autoRotateSpeed: number;
};
