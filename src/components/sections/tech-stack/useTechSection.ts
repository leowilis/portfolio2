'use client';

import type { RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import { createTechSectionTimeline } from './techSection';

type Params = {
  sectionRef: RefObject<HTMLElement | null>;
  badgeRef: RefObject<HTMLParagraphElement | null>;
  titleRef: RefObject<HTMLHeadingElement | null>;
  outlineRef: RefObject<HTMLSpanElement | null>;
  descriptionRef: RefObject<HTMLParagraphElement | null>;
  gridRef: RefObject<HTMLDivElement | null>;
  sceneRef: RefObject<HTMLDivElement | null>;
};

export default function useTechSection({
  sectionRef,
  badgeRef,
  titleRef,
  outlineRef,
  descriptionRef,
  gridRef,
  sceneRef,
}: Params) {
  useGSAP(
    () => {
      const section = sectionRef.current;
      const badge = badgeRef.current;
      const title = titleRef.current;
      const outline = outlineRef.current;
      const description = descriptionRef.current;
      const grid = gridRef.current;
      const scene = sceneRef.current;

      if (
        !section ||
        !badge ||
        !title ||
        !outline ||
        !description ||
        !grid ||
        !scene
      ) {
        return;
      }

      const timeline = createTechSectionTimeline({
        section,
        badge,
        title,
        outline,
        description,
        grid,
        scene,
      });

      return () => {
        timeline?.kill();
      };
    },
    {
      scope: sectionRef,
    },
  );
}
