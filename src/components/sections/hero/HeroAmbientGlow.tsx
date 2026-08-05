'use client';

import { motion } from 'framer-motion';
import {
  HERO_AMBIENT_GLOW_ANIMATION_OPACITY,
  HERO_AMBIENT_GLOW_BLUR,
  HERO_AMBIENT_GLOW_DURATION,
  HERO_AMBIENT_GLOW_OPACITY,
  HERO_AMBIENT_GLOW_SCALE,
  HERO_AMBIENT_GLOW_SIZE,
} from './constants';

export default function HeroAmbientGlow() {
  return (
    <motion.div
      aria-hidden='true'
      className='pointer-events-none absolute left-1/2 top-[42%] -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600'
      style={{
        width: HERO_AMBIENT_GLOW_SIZE,
        height: HERO_AMBIENT_GLOW_SIZE,
        filter: `blur(${HERO_AMBIENT_GLOW_BLUR}px)`,
      }}
      animate={{
        scale: HERO_AMBIENT_GLOW_SCALE,
        opacity: HERO_AMBIENT_GLOW_ANIMATION_OPACITY.map(
          (value) => value * HERO_AMBIENT_GLOW_OPACITY,
        ),
      }}
      transition={{
        duration: HERO_AMBIENT_GLOW_DURATION,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}
