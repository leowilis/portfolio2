'use client';

import { motion } from 'framer-motion';

import {
  HERO_AVAILABILITY_DOT_DURATION,
  HERO_AVAILABILITY_DOT_OPACITY,
  HERO_AVAILABILITY_DOT_SCALE,
  HERO_AVAILABILITY_EASE_OUT_EXPO,
  HERO_AVAILABILITY_REVEAL_DELAY,
  HERO_AVAILABILITY_REVEAL_DURATION,
  HERO_AVAILABILITY_REVEAL_Y,
} from './constants';

export default function HeroAvailability() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: HERO_AVAILABILITY_REVEAL_Y,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: HERO_AVAILABILITY_REVEAL_DELAY,
        duration: HERO_AVAILABILITY_REVEAL_DURATION,
        ease: HERO_AVAILABILITY_EASE_OUT_EXPO,
      }}
      className='mt-12'
    >
      <div className='inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.04] px-4 py-2 backdrop-blur-md'>
        <span className='relative flex h-2 w-2'>
          <motion.span
            animate={{
              scale: HERO_AVAILABILITY_DOT_SCALE,
              opacity: HERO_AVAILABILITY_DOT_OPACITY,
            }}
            transition={{
              duration: HERO_AVAILABILITY_DOT_DURATION,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className='absolute inset-0 rounded-full bg-emerald-400'
          />
          <span className='relative h-2 w-2 rounded-full bg-emerald-400' />
        </span>
        <span className='text-sm font-medium text-violet-200/80'>
          Available for work
        </span>
      </div>
    </motion.div>
  );
}
