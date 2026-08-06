export const PARTICLES = [
  { size: 4, left: 8, top: 18, duration: 5.2, delay: 0.2 },
  { size: 3, left: 17, top: 72, duration: 6.4, delay: 1.1 },
  { size: 5, left: 28, top: 34, duration: 7.1, delay: 0.5 },
  { size: 3, left: 39, top: 82, duration: 5.8, delay: 1.7 },
  { size: 4, left: 47, top: 22, duration: 6.8, delay: 0.8 },
  { size: 3, left: 56, top: 64, duration: 5.4, delay: 1.4 },
  { size: 5, left: 64, top: 12, duration: 7.4, delay: 0.3 },
  { size: 3, left: 73, top: 46, duration: 6.1, delay: 1.9 },
  { size: 4, left: 81, top: 76, duration: 5.6, delay: 0.7 },
  { size: 3, left: 91, top: 28, duration: 7.0, delay: 1.2 },

  // Additional network nodes
  { size: 3, left: 13, top: 48, duration: 6.2, delay: 0.6 },
  { size: 4, left: 34, top: 58, duration: 5.7, delay: 1.3 },
  { size: 3, left: 68, top: 38, duration: 6.7, delay: 0.9 },
  { size: 4, left: 88, top: 58, duration: 5.9, delay: 1.6 },
] as const;

// Movement
export const PARTICLE_INITIAL_OPACITY = 0.92;
export const PARTICLE_INITIAL_SCALE = 0.8;
export const PARTICLE_MOVE_X: [number, number, number] = [-5, 5, -5];
export const PARTICLE_MOVE_Y = [-8, 8, -8];
export const PARTICLE_OPACITY: [number, number, number] = [38, 22, 54];
export const PARTICLE_EASE = 'easeInOut' as const;

// Connections
export const PARTICLE_CONNECTIONS = [
  [0, 1],
  [0, 10],
  [1, 3],
  [1, 11],
  [2, 4],
  [2, 11],
  [3, 9],
  [3, 11],
  [4, 6],
  [4, 12],
  [5, 8],
  [5, 11],
  [5, 12],
  [6, 9],
  [6, 12],
  [7, 10],
  [7, 12],
  [7, 13],
  [8, 9],
  [8, 13],
  [10, 11],
  [11, 12],
  [12, 13],
] as const;

export const PARTICLE_LINE_OPACITY = 0.18;
export const PARTICLE_LINE_HOVER_OPACITY = 0.45;
export const PARTICLE_LINE_WIDTH = 0.7;
export const PARTICLE_LINE_HOVER_WIDTH = 1;
export const PARTICLE_LINE_PULL = 18;

// Glow
export const PARTICLE_GLOW_SIZE = 10;
export const PARTICLE_GLOW_BLUR = 2;
export const PARTICLE_GLOW_COLOR = 'rgba(167,139,250,0.9)';
export const PARTICLE_GLOW_OPACITY: [number, number, number] = [0.2, 0.7, 0.2];
export const PARTICLE_GLOW_SCALE: [number, number, number] = [0.8, 1.25, 0.8];
export const PARTICLE_GLOW_DURATION = 2.5;
