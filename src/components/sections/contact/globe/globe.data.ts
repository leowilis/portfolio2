export const MEDAN = {
  lat: 3.5952,
  lng: 98.6722,
};

export type GlobeArc = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export const GLOBE_ARCS: GlobeArc[] = [
  // 01 — Medan → Tokyo
  {
    order: 1,
    startLat: MEDAN.lat,
    startLng: MEDAN.lng,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.24,
    color: '#a78bfa',
  },

  // 02 — Medan → Seoul
  {
    order: 2,
    startLat: MEDAN.lat,
    startLng: MEDAN.lng,
    endLat: 37.5665,
    endLng: 126.978,
    arcAlt: 0.2,
    color: '#8b5cf6',
  },

  // 03 — Medan → Singapore
  {
    order: 3,
    startLat: MEDAN.lat,
    startLng: MEDAN.lng,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.13,
    color: '#c4b5fd',
  },

  // 04 — Medan → Dubai
  {
    order: 4,
    startLat: MEDAN.lat,
    startLng: MEDAN.lng,
    endLat: 25.2048,
    endLng: 55.2708,
    arcAlt: 0.27,
    color: '#a78bfa',
  },

  // 05 — Medan → London
  {
    order: 5,
    startLat: MEDAN.lat,
    startLng: MEDAN.lng,
    endLat: 51.5074,
    endLng: -0.1278,
    arcAlt: 0.38,
    color: '#8b5cf6',
  },

  // 06 — Medan → Paris
  {
    order: 6,
    startLat: MEDAN.lat,
    startLng: MEDAN.lng,
    endLat: 48.8566,
    endLng: 2.3522,
    arcAlt: 0.4,
    color: '#c4b5fd',
  },

  // 07 — Medan → New York
  {
    order: 7,
    startLat: MEDAN.lat,
    startLng: MEDAN.lng,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.48,
    color: '#a78bfa',
  },

  // 08 — Medan → San Francisco
  {
    order: 8,
    startLat: MEDAN.lat,
    startLng: MEDAN.lng,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.5,
    color: '#8b5cf6',
  },

  // 09 — Medan → Sydney
  {
    order: 9,
    startLat: MEDAN.lat,
    startLng: MEDAN.lng,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.3,
    color: '#a78bfa',
  },

  // 10 — Medan → São Paulo
  {
    order: 10,
    startLat: MEDAN.lat,
    startLng: MEDAN.lng,
    endLat: -23.5505,
    endLng: -46.6333,
    arcAlt: 0.45,
    color: '#c4b5fd',
  },

  // 11 — Medan → Jakarta
  {
    order: 11,
    startLat: MEDAN.lat,
    startLng: MEDAN.lng,
    endLat: -6.2088,
    endLng: 106.8456,
    arcAlt: 0.11,
    color: '#a78bfa',
  },

  // 12 — Medan → Bali
  {
    order: 12,
    startLat: MEDAN.lat,
    startLng: MEDAN.lng,
    endLat: -8.4095,
    endLng: 115.1889,
    arcAlt: 0.14,
    color: '#8b5cf6',
  },

  // 13 — Medan → Bangkok
  {
    order: 13,
    startLat: MEDAN.lat,
    startLng: MEDAN.lng,
    endLat: 13.7563,
    endLng: 100.5018,
    arcAlt: 0.16,
    color: '#c4b5fd',
  },

  // 14 — Medan → Hong Kong
  {
    order: 14,
    startLat: MEDAN.lat,
    startLng: MEDAN.lng,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.2,
    color: '#a78bfa',
  },

  // 15 — Medan → Mumbai
  {
    order: 15,
    startLat: MEDAN.lat,
    startLng: MEDAN.lng,
    endLat: 19.076,
    endLng: 72.8777,
    arcAlt: 0.23,
    color: '#8b5cf6',
  },

  // 16 — Medan → Cairo
  {
    order: 16,
    startLat: MEDAN.lat,
    startLng: MEDAN.lng,
    endLat: 30.0444,
    endLng: 31.2357,
    arcAlt: 0.32,
    color: '#c4b5fd',
  },

  // 17 — Medan → Istanbul
  {
    order: 17,
    startLat: MEDAN.lat,
    startLng: MEDAN.lng,
    endLat: 41.0082,
    endLng: 28.9784,
    arcAlt: 0.36,
    color: '#a78bfa',
  },

  // 18 — Medan → Toronto
  {
    order: 18,
    startLat: MEDAN.lat,
    startLng: MEDAN.lng,
    endLat: 43.6532,
    endLng: -79.3832,
    arcAlt: 0.48,
    color: '#8b5cf6',
  },

  // 19 — Medan → Los Angeles
  {
    order: 19,
    startLat: MEDAN.lat,
    startLng: MEDAN.lng,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.5,
    color: '#c4b5fd',
  },

  // 20 — Medan → Melbourne
  {
    order: 20,
    startLat: MEDAN.lat,
    startLng: MEDAN.lng,
    endLat: -37.8136,
    endLng: 144.9631,
    arcAlt: 0.34,
    color: '#a78bfa',
  },
];
