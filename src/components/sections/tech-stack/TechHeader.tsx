'use client';

import { forwardRef } from 'react';
import type { RefObject } from 'react';
import {
  TECH_BADGE_MARGIN_BOTTOM,
  TECH_BADGE_TRACKING,
  TECH_DESCRIPTION_MAX_WIDTH,
  TECH_HEADER_MARGIN_BOTTOM,
  TECH_HEADER_MAX_WIDTH,
  TECH_HEADER_PERSPECTIVE,
  TECH_HEADER_TITLE_PERSPECTIVE,
} from './constants';

type Props = {
  badgeRef: RefObject<HTMLParagraphElement | null>;
  titleRef: RefObject<HTMLHeadingElement | null>;
  outlineRef: RefObject<HTMLSpanElement | null>;
  descriptionRef: RefObject<HTMLParagraphElement | null>;
};

const TechHeader = forwardRef<HTMLDivElement, Props>(function TechHeader(
  { badgeRef, titleRef, outlineRef, descriptionRef },
  ref,
) {
  return (
    <div
      ref={ref}
      className='relative mx-auto text-center select-none'
      style={{
        maxWidth: TECH_HEADER_MAX_WIDTH,
        marginBottom: TECH_HEADER_MARGIN_BOTTOM,
        perspective: TECH_HEADER_PERSPECTIVE,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Badge */}
      <p
        ref={badgeRef}
        className='text-xs font-extrabold uppercase tracking-[0.45em] text-violet-400'
        style={{
          marginBottom: TECH_BADGE_MARGIN_BOTTOM,
          letterSpacing: TECH_BADGE_TRACKING,
        }}
      >
        SYSTEM ARCHITECTURE
      </p>

      {/* Title */}
      <h2
        ref={titleRef}
        className='relative flex flex-col items-center justify-center'
        style={{
          perspective: TECH_HEADER_TITLE_PERSPECTIVE,
          transformStyle: 'preserve-3d',
        }}
      >
        <span className='relative z-20 block text-[clamp(6rem,9vw,7rem)] font-black uppercase leading-none tracking-[-0.08em] text-white'>
          TECH
        </span>

        <span
          ref={outlineRef}
          className='tech-outline absolute left-1/2 top-full block -translate-x-1/2 font-black uppercase leading-none tracking-[-0.08em] will-change-transform'
          style={{
            fontSize: 'clamp(5rem,10vw,9rem)',
            marginTop: '-1rem',
          }}
        >
          ECOSYSTEM
        </span>
      </h2>

      {/* Description */}
      <p
        ref={descriptionRef}
        className='mx-auto mt-15 max-w-3xl text-sm font-medium leading-relaxed text-neutral-400 sm:text-base md:mt-31'
        style={{
          maxWidth: TECH_DESCRIPTION_MAX_WIDTH,
        }}
      >
        Technologies I use to build modern, scalable and high-performance web
        applications.
      </p>
    </div>
  );
});

TechHeader.displayName = 'TechHeader';

export default TechHeader;
