import { ProjectLayout } from './project.type';
import { HIDDEN_CARD_OFFSET } from './project.constants';

interface LayoutOptions {
  index: number;
  activeIndex: number;
}

// Active project
const CENTER_LAYOUT: ProjectLayout = {
  x: 0,
  y: -10,
  z: 220,
  rotateX: 2,
  rotateY: 0,
  scale: 1,
  opacity: 1,
  blur: 0,
  isCenter: true,
  zIndex: 30,
};

// Adjacent projects
const SIDE_LEFT_LAYOUT: ProjectLayout = {
  x: -620,
  y: 70,
  z: -260,
  rotateX: 6,
  rotateY: 18,
  scale: 0.82,
  opacity: 0.45,
  blur: 2,
  isCenter: false,
  zIndex: 20,
};

const SIDE_RIGHT_LAYOUT: ProjectLayout = {
  x: 620,
  y: 70,
  z: -260,
  rotateX: 6,
  rotateY: -18,
  scale: 0.82,
  opacity: 0.45,
  blur: 2,
  isCenter: false,
  zIndex: 20,
};

// Background projects
const FAR_LEFT_LAYOUT: ProjectLayout = {
  x: -1120,
  y: 120,
  z: -700,
  rotateX: 8,
  rotateY: 28,
  scale: 0.55,
  opacity: 0.18,
  blur: 4,
  isCenter: false,
  zIndex: 10,
};

const FAR_RIGHT_LAYOUT: ProjectLayout = {
  x: 1120,
  y: 120,
  z: -700,
  rotateX: 8,
  rotateY: -28,
  scale: 0.55,
  opacity: 0.18,
  blur: 4,
  isCenter: false,
  zIndex: 10,
};

const HIDDEN_LAYOUT: ProjectLayout = {
  x: 0,
  y: 180,
  z: -1000,
  rotateX: 10,
  rotateY: 0,
  scale: 0.4,
  opacity: 0,
  blur: 6,
  isCenter: false,
  zIndex: 0,
};

export function getProjectLayout({
  index,
  activeIndex,
}: LayoutOptions): ProjectLayout {
  const offset = index - activeIndex;

  switch (offset) {
    case -2:
      return FAR_LEFT_LAYOUT;

    case -1:
      return SIDE_LEFT_LAYOUT;

    case 0:
      return CENTER_LAYOUT;

    case 1:
      return SIDE_RIGHT_LAYOUT;

    case 2:
      return FAR_RIGHT_LAYOUT;

    default:
      const direction = offset > 0 ? 1 : -1;
      const distance = Math.abs(offset);

      return {
        ...HIDDEN_LAYOUT,

        x: direction * (1120 + (distance - 2) * 420),
        y: 120 + (distance - 2) * 30,
        z: -700 - (distance - 2) * 180,
        rotateY: direction > 0 ? -30 : 30,
        scale: Math.max(0.25, 0.55 - (distance - 2) * 0.08),
        opacity: 0,
        blur: 6,
        zIndex: 0,
      };
  }
}
