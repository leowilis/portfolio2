'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import {
  HERO_AMBIENT_GLOW_ANIMATION_OPACITY,
  HERO_AMBIENT_GLOW_DURATION,
  HERO_AMBIENT_GLOW_OPACITY,
  HERO_AMBIENT_GLOW_SCALE,
  HERO_AMBIENT_GLOW_SIZE,
} from './constants';

export default function HeroAmbientGlow() {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    amount: 0,
  });

  const opacity = HERO_AMBIENT_GLOW_ANIMATION_OPACITY.map(
    (value) => value * HERO_AMBIENT_GLOW_OPACITY,
  );

  return (
    <motion.div
      ref={ref}
      aria-hidden='true'
      className='pointer-events-none absolute left-1/2 top-[42%] -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full'
      style={{
        width: HERO_AMBIENT_GLOW_SIZE,
        height: HERO_AMBIENT_GLOW_SIZE,
        background:
          'radial-gradient(circle, rgba(124, 58, 237, 0.85) 0%, rgba(124, 58, 237, 0.35) 35%, rgba(124, 58, 237, 0.08) 60%, transparent 75%)',
        willChange: 'transform, opacity',
      }}
      animate={
        isInView
          ? {
              scale: HERO_AMBIENT_GLOW_SCALE,
              opacity,
            }
          : {
              scale: 1,
              opacity: 0,
            }
      }
      transition={{
        duration: HERO_AMBIENT_GLOW_DURATION,
        repeat: isInView ? Infinity : 0,
        ease: 'easeInOut',
      }}
    />
  );
}
