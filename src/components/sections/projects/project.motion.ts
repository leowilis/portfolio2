import type { Transition, Variants } from 'framer-motion';

// Initial card appearance
export const CARD_ENTRANCE: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      delay: Math.min(index * 0.06, 0.3),
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// Featured card hover
export const CARD_HOVER = {
  rotateY: 2,
  rotateX: -2,
  scale: 1.015,
} as const;

// Tech chip hover
export const TECH_CHIP_HOVER = {
  scale: 1.05,
  y: -2,
};

// FLoating animation
export function getFloatTransition(index: number): Transition {
  return {
    duration: 5.5 + index * 0.4,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',
    delay: index * 0.25,
  };
}
