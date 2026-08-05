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
] as const;

export const PARTICLE_INITIAL_OPACITY = 0.2;
export const PARTICLE_INITIAL_SCALE = 0.8;
export const PARTICLE_MOVE_Y = [-8, 8, -8];
export const PARTICLE_MOVE_X = [-5, 5, -5];
export const PARTICLE_OPACITY = [0.15, 0.5, 0.15];
export const PARTICLE_EASE = 'easeInOut' as const;
