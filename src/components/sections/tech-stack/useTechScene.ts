'use client';

import type { RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/src/lib/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  SCENE_ROTATE_X,
  SCENE_ROTATE_Y,
  SCENE_Z,
  SCENE_END_ROTATE_X,
  SCENE_END_ROTATE_Y,
  SCENE_END_Z,
  TECH_SECTION_START,
  TECH_SECTION_END,
  TECH_SCRUB,
  SCENE_PERSPECTIVE,
} from './constants';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  sectionRef: RefObject<HTMLElement | null>;
  sceneRef: RefObject<HTMLDivElement | null>;
};

export default function useTechScene({ sectionRef, sceneRef }: Props) {
  useGSAP(
    () => {
      const section = sectionRef.current;
      const scene = sceneRef.current;

      if (!section || !scene) return;

      gsap.fromTo(
        scene,
        {
          rotateX: SCENE_ROTATE_X,
          rotateY: SCENE_ROTATE_Y,
          z: SCENE_Z,
          transformPerspective: SCENE_PERSPECTIVE || 1200,
          transformOrigin: 'center center',
        },
        {
          rotateX: SCENE_END_ROTATE_X,
          rotateY: SCENE_END_ROTATE_Y,
          z: SCENE_END_Z,
          ease: 'none',
          force3D: true,
          scrollTrigger: {
            trigger: section,
            start: TECH_SECTION_START,
            end: TECH_SECTION_END,
            scrub: TECH_SCRUB,
            invalidateOnRefresh: true,
          },
        },
      );
    },
    {
      dependencies: [sectionRef, sceneRef],
      scope: sectionRef,
    },
  );
}
