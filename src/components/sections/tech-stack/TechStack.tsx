'use client';

import { useRef } from 'react';
import TechGrid from './TechGrid';
import TechHeader from './TechHeader';
import useTechSection from './useTechSection';
import { SCENE_PERSPECTIVE, TECH_SECTION_MARGIN_TOP } from './constants';

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const outlineRef = useRef<HTMLSpanElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useTechSection({
    sectionRef,
    sceneRef,
    badgeRef,
    titleRef,
    outlineRef,
    descriptionRef,
    gridRef,
  });

  return (
    <section
      ref={sectionRef}
      id='tech-stack'
      aria-labelledby='tech-heading-title'
      className='relative overflow-hidden'
    >
      <div
        className='container mx-auto px-6'
        style={{
          perspective: SCENE_PERSPECTIVE,
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          ref={sceneRef}
          id='tech-scene'
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
            style={{
              marginTop: TECH_SECTION_MARGIN_TOP,
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
