import type { Transition, Variants } from 'framer-motion';

import {
  PROJECT_CARD_ENTRANCE_DELAY_STEP,
  PROJECT_CARD_ENTRANCE_DURATION,
  PROJECT_CARD_ENTRANCE_EASE,
  PROJECT_CARD_ENTRANCE_MAX_DELAY,
  PROJECT_CARD_ENTRANCE_Y,
  PROJECT_CARD_HOVER_ROTATE_X,
  PROJECT_CARD_HOVER_ROTATE_Y,
  PROJECT_CARD_HOVER_SCALE,
  PROJECT_FLOAT_DELAY_STEP,
  PROJECT_FLOAT_DURATION,
  PROJECT_FLOAT_DURATION_STEP,
  PROJECT_TECH_CHIP_HOVER_SCALE,
  PROJECT_TECH_CHIP_HOVER_Y,
} from './project.constants';

// Card entrance
export const CARD_ENTRANCE: Variants = {
  hidden: {
    opacity: 0,
    y: PROJECT_CARD_ENTRANCE_Y,
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: PROJECT_CARD_ENTRANCE_DURATION,
      delay: Math.min(
        index * PROJECT_CARD_ENTRANCE_DELAY_STEP,
        PROJECT_CARD_ENTRANCE_MAX_DELAY,
      ),
      ease: PROJECT_CARD_ENTRANCE_EASE,
    },
  }),
};

export const CARD_HOVER = {
  rotateY: PROJECT_CARD_HOVER_ROTATE_Y,
  rotateX: PROJECT_CARD_HOVER_ROTATE_X,
  scale: PROJECT_CARD_HOVER_SCALE,
} as const;

export const TECH_CHIP_HOVER = {
  scale: PROJECT_TECH_CHIP_HOVER_SCALE,
  y: PROJECT_TECH_CHIP_HOVER_Y,
} as const;

export function getFloatTransition(index: number): Transition {
  return {
    duration: PROJECT_FLOAT_DURATION + index * PROJECT_FLOAT_DURATION_STEP,

    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',

    delay: index * PROJECT_FLOAT_DELAY_STEP,
  };
}
