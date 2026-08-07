'use client';

import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import ProgressBar from './ProgressBar';
import type { TechItem } from './types';
import useCardSpotlight from './useCardSpotlight';
import useCardTilt from './useCardTilt';

import {
  CARD_BORDER_GLOW_ALPHA,
  CARD_BORDER_GLOW_BLUR,
  CARD_BORDER_GLOW_FADE,
  CARD_BORDER_GLOW_OPACITY,
  CARD_BORDER_GLOW_SIZE,
  CARD_SPOTLIGHT_FADE,
  CARD_SPOTLIGHT_OPACITY,
  CARD_SPOTLIGHT_SIZE,
  EASE_OUT_EXPO,
  TECH_CARD_ACCENT_DURATION,
  TECH_CARD_ACTIVE_OPACITY,
  TECH_CARD_BORDER,
  TECH_CARD_BORDER_HOVER,
  TECH_CARD_GRID_COLOR,
  TECH_CARD_GRID_OPACITY,
  TECH_CARD_GRID_SIZE,
  TECH_CARD_HEIGHT,
  TECH_CARD_HOVER_DURATION,
  TECH_CARD_HOVER_SHADOW,
  TECH_CARD_HOVER_Y,
  TECH_CARD_ICON_DURATION,
  TECH_CARD_ICON_IMAGE_SIZE,
  TECH_CARD_ICON_SCALE,
  TECH_CARD_RADIUS,
  TECH_CARD_SHADOW,
  TECH_ICON_SIZE,
} from './constants';

type Props = {
  tech: TechItem;
};

const TechCard = forwardRef<HTMLDivElement, Props>(function TechCard(
  { tech },
  ref,
) {
  const [hovered, setHovered] = useState(false);
  const localRef = useRef<HTMLDivElement>(null);

  const Icon = tech.icon;

  useCardTilt({
    cardRef: localRef,
  });

  useCardSpotlight({
    cardRef: localRef,
  });

  useImperativeHandle(ref, () => localRef.current as HTMLDivElement);

  return (
    <motion.article
      ref={localRef}
      data-tech-card
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{
        y: TECH_CARD_HOVER_Y,
      }}
      transition={{
        duration: TECH_CARD_HOVER_DURATION,
        ease: EASE_OUT_EXPO,
      }}
      className='group relative h-full w-full overflow-hidden bg-black/30 p-7'
      style={
        {
          '--mouse-x': '50%',
          '--mouse-y': '50%',
          minHeight: TECH_CARD_HEIGHT,
          borderRadius: TECH_CARD_RADIUS,
          border: `1px solid ${
            hovered ? TECH_CARD_BORDER_HOVER : TECH_CARD_BORDER
          }`,
          boxShadow: hovered ? TECH_CARD_HOVER_SHADOW : TECH_CARD_SHADOW,
          transformStyle: 'preserve-3d',
        } as React.CSSProperties
      }
    >
      {/* Border Glow */}
      <motion.div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 rounded-[inherit]'
        animate={{
          opacity: hovered ? CARD_BORDER_GLOW_OPACITY : 0,
        }}
        transition={{
          duration: TECH_CARD_HOVER_DURATION,
        }}
        style={{
          filter: `blur(${CARD_BORDER_GLOW_BLUR}px)`,
          background: `
            radial-gradient(
              ${CARD_BORDER_GLOW_SIZE}px circle
              at var(--mouse-x) var(--mouse-y),
              rgba(139, 92, 246, ${CARD_BORDER_GLOW_ALPHA}),
              transparent ${CARD_BORDER_GLOW_FADE}
            )
          `,
        }}
      />

      {/* Spotlight */}
      <motion.div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 rounded-[inherit]'
        animate={{
          opacity: hovered ? TECH_CARD_ACTIVE_OPACITY : 0,
        }}
        transition={{
          duration: TECH_CARD_HOVER_DURATION,
        }}
        style={{
          background: `
            radial-gradient(
              ${CARD_SPOTLIGHT_SIZE}px circle
              at var(--mouse-x) var(--mouse-y),
              rgba(139, 92, 246, ${CARD_SPOTLIGHT_OPACITY}),
              transparent ${CARD_SPOTLIGHT_FADE}
            )
          `,
        }}
      />

      {/* Accent Line */}
      <motion.div
        aria-hidden='true'
        className='absolute left-0 top-0 h-px bg-violet-500'
        animate={{
          width: hovered ? '100%' : 0,
        }}
        transition={{
          duration: TECH_CARD_ACCENT_DURATION,
        }}
      />

      {/* Grid */}
      <motion.div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
        animate={{
          opacity: hovered ? TECH_CARD_GRID_OPACITY : 0,
        }}
        transition={{
          duration: TECH_CARD_HOVER_DURATION,
        }}
        style={{
          backgroundImage: `
            linear-gradient(
              ${TECH_CARD_GRID_COLOR} 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              ${TECH_CARD_GRID_COLOR} 1px,
              transparent 1px
            )
          `,
          backgroundSize: `${TECH_CARD_GRID_SIZE}px ${TECH_CARD_GRID_SIZE}px`,
        }}
      />

      {/* Header */}
      <div className='relative z-10 flex items-start justify-between'>
        <motion.div
          aria-hidden='true'
          animate={{
            scale: hovered ? TECH_CARD_ICON_SCALE : 1,
          }}
          transition={{
            duration: TECH_CARD_ICON_DURATION,
          }}
          className='flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm'
          style={{
            width: TECH_ICON_SIZE,
            height: TECH_ICON_SIZE,
          }}
        >
          <Icon
            size={TECH_CARD_ICON_IMAGE_SIZE}
            className='text-white transition-colors duration-300'
            aria-hidden='true'
          />
        </motion.div>

        <span className='select-none text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-600'>
          {tech.system}
        </span>
      </div>

      {/* Content */}
      <div className='relative z-10 mt-10'>
        <h3 className='text-3xl font-bold tracking-tight text-white'>
          {tech.name}
        </h3>

        <p className='mt-2 text-sm uppercase tracking-[0.18em] text-zinc-500'>
          {tech.category}
        </p>
      </div>

      {/* Progress */}
      <div className='relative z-10'>
        <ProgressBar value={tech.level} hovered={hovered} />
      </div>
    </motion.article>
  );
});

TechCard.displayName = 'TechCard';

export default TechCard;
