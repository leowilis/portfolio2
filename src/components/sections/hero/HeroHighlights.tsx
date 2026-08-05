'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { type MouseEvent, useRef } from 'react';
import { HERO_HIGHLIGHTS } from './hero.data';
import HeroHighlightCard from './HeroHightlightCard';
import HeroParticles from './HeroParticles';

import {
  BORDER_DURATION,
  BORDER_ROTATION,
  CARD_PERSPECTIVE,
  CARD_RADIUS,
  CARD_REVEAL_DELAY,
  CARD_REVEAL_DURATION,
  CARD_REVEAL_Y,
  CARD_ROTATE_X,
  CARD_ROTATE_Y,
  CARD_FLOAT_DURATION,
  CARD_FLOAT_Y,
  EASE_OUT_EXPO,
  SHINE_DURATION,
  SHINE_SKEW,
  SPOTLIGHT_COLOR,
  SPOTLIGHT_SIZE,
} from './constants';

export default function HeroHighlights() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlight = useMotionTemplate`
    radial-gradient(
      ${SPOTLIGHT_SIZE}px circle at ${mouseX}px ${mouseY}px,
      ${SPOTLIGHT_COLOR},
      transparent 70%
    )
  `;
  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    const rotateY = (x / rect.width - 0.5) * CARD_ROTATE_Y;
    const rotateX = (y / rect.height - 0.5) * -CARD_ROTATE_X;
    cardRef.current.style.transform = `
      perspective(${CARD_PERSPECTIVE}px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  }

  function handleLeave() {
    if (!cardRef.current) return;

    cardRef.current.style.transform = `
      perspective(${CARD_PERSPECTIVE}px)
      rotateX(0deg)
      rotateY(0deg)
    `;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: CARD_REVEAL_Y,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: CARD_REVEAL_DELAY,
        duration: CARD_REVEAL_DURATION,
        ease: EASE_OUT_EXPO,
      }}
      className='mt-14 w-full max-w-4xl'
    >
      <motion.div
        animate={{
          y: CARD_FLOAT_Y,
        }}
        transition={{
          duration: CARD_FLOAT_DURATION,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div
          ref={cardRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className='group relative overflow-hidden bg-white/[0.04] backdrop-blur-2xl transition-transform duration-300 will-change-transform'
          style={{
            borderRadius: CARD_RADIUS,
            transformStyle: 'preserve-3d',
          }}
        >
          <HeroParticles />

          {/* Animated Border */}
          <div
            className='pointer-events-none absolute inset-0 overflow-hidden p-px'
            style={{
              borderRadius: CARD_RADIUS,
            }}
          >
            <motion.div
              animate={{
                rotate: BORDER_ROTATION,
              }}
              transition={{
                duration: BORDER_DURATION,
                ease: 'linear',
                repeat: Infinity,
              }}
              className='absolute inset-[-150%] bg-[conic-gradient(from_180deg,transparent,rgba(139,92,246,.9),transparent,rgba(255,255,255,.2),transparent)]'
            />

            <div
              className='absolute inset-px bg-black/85 backdrop-blur-2xl'
              style={{
                borderRadius: `calc(${CARD_RADIUS} - 1px)`,
              }}
            />
          </div>

          {/* Spotlight */}
          <motion.div
            style={{
              background: spotlight,
              borderRadius: `calc(${CARD_RADIUS} - 1px)`,
            }}
            className='pointer-events-none absolute inset-px z-10'
          />

          {/* Shine */}
          <div
            className='pointer-events-none absolute inset-y-0 -left-1/2 z-20 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-[1000ms] group-hover:translate-x-[700px]'
            style={{
              transform: `skewX(${SHINE_SKEW})`,
              transitionDuration: `${SHINE_DURATION}ms`,
            }}
          />

          {/* Highlights */}
          <div className='relative z-30 grid grid-cols-3'>
            {HERO_HIGHLIGHTS.map((item, index) => (
              <HeroHighlightCard
                key={item.label}
                item={item}
                index={index}
                total={HERO_HIGHLIGHTS.length}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
