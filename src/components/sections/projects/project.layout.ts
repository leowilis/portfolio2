import { ProjectLayout } from './project.type';

interface LayoutOptions {
  index: number;
  activeIndex: number;
  total: number;
}

// Active project
const CENTER_LAYOUT: ProjectLayout = {
  x: 0,
  y: -20,
  z: 280,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  opacity: 1,
  blur: 0,
  isCenter: true,
  zIndex: 30,
};

// Adjacent projects
const SIDE_LEFT_LAYOUT: ProjectLayout = {
  x: -470,
  y: 15,
  z: 60,
  rotateX: 0,
  rotateY: 16,
  scale: 0.86,
  opacity: 0.9,
  blur: 1,
  isCenter: false,
  zIndex: 20,
};

const SIDE_RIGHT_LAYOUT: ProjectLayout = {
  x: 470,
  y: 15,
  z: 60,
  rotateX: 0,
  rotateY: -16,
  scale: 0.86,
  opacity: 0.9,
  blur: 1,
  isCenter: false,
  zIndex: 20,
};

// Background projects
const FAR_LEFT_LAYOUT: ProjectLayout = {
  x: -860,
  y: 45,
  z: -180,
  rotateX: 0,
  rotateY: 24,
  scale: 0.72,
  opacity: 0.18,
  blur: 4,
  isCenter: false,
  zIndex: 10,
};

const FAR_RIGHT_LAYOUT: ProjectLayout = {
  x: 860,
  y: 45,
  z: -180,
  rotateX: 0,
  rotateY: -24,
  scale: 0.72,
  opacity: 0.18,
  blur: 4,
  isCenter: false,
  zIndex: 10,
};

const HIDDEN_LAYOUT: ProjectLayout = {
  x: 0,
  y: 80,
  z: -500,
  rotateX: 0,
  rotateY: 0,
  scale: 0.55,
  opacity: 0,
  blur: 8,
  isCenter: false,
  zIndex: 0,
};

export function getProjectLayout({
  index,
  activeIndex,
  total,
}: LayoutOptions): ProjectLayout {
  let offset = index - activeIndex;

  if (offset > total / 2) {
    offset -= total;
  }

  if (offset < -total / 2) {
    offset += total;
  }

  switch (offset) {
    case -2:
      return { ...FAR_LEFT_LAYOUT };

    case -1:
      return { ...SIDE_LEFT_LAYOUT };

    case 0:
      return { ...CENTER_LAYOUT };

    case 1:
      return { ...SIDE_RIGHT_LAYOUT };

    case 2:
      return { ...FAR_RIGHT_LAYOUT };

    default:
      const direction = offset > 0 ? 1 : -1;
      const distance = Math.abs(offset);

      return {
        ...HIDDEN_LAYOUT,
        x: direction * (980 + (distance - 2) * 260),
        y: 60,
        z: -400,
        rotateY: direction > 0 ? -28 : 28,
        scale: 0.55,
        opacity: 0,
        blur: 8,
      };
  }
}
