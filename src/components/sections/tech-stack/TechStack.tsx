'use client';

import { useRef } from 'react';

import TechGrid from './TechGrid';
import TechHeader from './TechHeader';
import useTechSection from './useTechSection';

import { SCENE_PERSPECTIVE } from './constants';

export default function TechStack() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLParagraphElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const outlineRef = useRef<HTMLSpanElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  const gridRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<HTMLDivElement | null>(null);

  useTechSection({
    sectionRef,
    badgeRef,
    titleRef,
    outlineRef,
    descriptionRef,
    gridRef,
    sceneRef,
  });

  return (
  <section ref={sectionRef}>
    <div className="container mx-auto px-6">
      <div
        ref={sceneRef}
        id="tech-scene"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <TechHeader
          ref={headerRef}
          badgeRef={badgeRef}
          titleRef={titleRef}
          outlineRef={outlineRef}
          descriptionRef={descriptionRef}
        />

        <div
          ref={gridRef}
          className="mt-8 md:mt-10"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          <TechGrid />
        </div>
      </div>
    </div>
  </section>
);
}
