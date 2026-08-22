import gsap from 'gsap';

import {
  GRID_FLOAT_Y,
  HEADER_DESCRIPTION_OPACITY,
  HEADER_DESCRIPTION_Y,
  HEADER_OUTLINE_OPACITY,
  HEADER_TITLE_ROTATION,
  MATRIX_FLOAT_ROTATE,
  MATRIX_FLOAT_X,
  MATRIX_FLOAT_Y,
  SCENE_END_ROTATE_X,
  SCENE_END_ROTATE_Y,
  SCENE_END_Z,
  SCENE_ROTATE_X,
  SCENE_ROTATE_Y,
  SCENE_Z,
  TECH_SCRUB,
  TECH_SECTION_END,
  TECH_SECTION_START,
  TECH_TITLE_FLOAT_SCALE,
  TECH_TITLE_FLOAT_Y,
  TECH_Z,
} from './constants';

type Params = {
  section: HTMLElement;
  badge: HTMLElement;
  title: HTMLElement;
  outline: HTMLElement;
  description: HTMLElement;
  grid: HTMLElement;
  scene: HTMLElement;
};

export function createTechSectionTimeline({
  section,
  badge,
  title,
  outline,
  description,
  grid,
  scene,
}: Params) {
  if (!section || !scene || !title || !outline || !description || !grid) {
    return null;
  }

  const timeline = gsap.timeline({
    defaults: {
      ease: 'none',
    },

    scrollTrigger: {
      trigger: section,
      start: TECH_SECTION_START,
      end: TECH_SECTION_END,
      scrub: TECH_SCRUB,
      invalidateOnRefresh: true,
    },
  });

  // Scene
  timeline.fromTo(
    scene,
    {
      rotateX: SCENE_ROTATE_X,
      rotateY: SCENE_ROTATE_Y,
      z: SCENE_Z,
      transformOrigin: 'center center',
      force3D: true,
    },
    {
      rotateX: SCENE_END_ROTATE_X,
      rotateY: SCENE_END_ROTATE_Y,
      z: SCENE_END_Z,
      force3D: true,
    },
    0,
  );

  // Badge
  if (badge) {
    timeline.set(
      badge,
      {
        y: 0,
        opacity: 1,
      },
      0,
    );
  }

  // Tech Title
  timeline.to(
    title,
    {
      y: TECH_TITLE_FLOAT_Y,
      scale: TECH_TITLE_FLOAT_SCALE,
      rotateX: HEADER_TITLE_ROTATION,
      z: TECH_Z,
      transformOrigin: 'center center',
      force3D: true,
    },
    0,
  );

  // Ecosystem
  timeline.to(
    outline,
    {
      y: MATRIX_FLOAT_Y,
      x: MATRIX_FLOAT_X,
      rotateY: MATRIX_FLOAT_ROTATE,
      opacity: HEADER_OUTLINE_OPACITY,
      z: 0,
      force3D: true,
    },
    0,
  );

  // Description
  timeline.to(
    description,
    {
      y: HEADER_DESCRIPTION_Y,
      opacity: HEADER_DESCRIPTION_OPACITY,
      force3D: true,
    },
    0,
  );

  // Grid
  timeline.to(
    grid,
    {
      y: GRID_FLOAT_Y,
      z: 0,
      force3D: true,
    },
    0,
  );

  return timeline;
}
