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
  z: 260,
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
  x: -420,
  y: 30,
  z: 40,
  rotateX: 0,
  rotateY: 18,
  scale: 0.82,
  opacity: 0.55,
  blur: 0,
  isCenter: false,
  zIndex: 20,
};

const SIDE_RIGHT_LAYOUT: ProjectLayout = {
  x: 420,
  y: 30,
  z: 40,
  rotateX: 0,
  rotateY: -18,
  scale: 0.82,
  opacity: 0.55,
  blur: 0,
  isCenter: false,
  zIndex: 20,
};

const HIDDEN_LAYOUT: ProjectLayout = {
  x: 0,
  y: 0,
  z: -900,
  rotateX: 0,
  rotateY: 0,
  scale: 0.6,
  opacity: 0,
  blur: 0,
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
    case -1:
      return SIDE_LEFT_LAYOUT;

    case 0:
      return CENTER_LAYOUT;

    case 1:
      return SIDE_RIGHT_LAYOUT;

    default:
      return HIDDEN_LAYOUT;
  }
}
