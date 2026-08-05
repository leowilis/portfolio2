'use client';

import { motion } from 'framer-motion';
import {
  HERO_SCROLL_BOUNCE_DURATION,
  HERO_SCROLL_BOUNCE_Y,
  HERO_SCROLL_EASE_OUT_EXPO,
  HERO_SCROLL_REVEAL_DELAY,
  HERO_SCROLL_REVEAL_DURATION,
  HERO_SCROLL_REVEAL_Y,
} from './constants';

export default function HeroScrollIndicator() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: HERO_SCROLL_REVEAL_Y,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: HERO_SCROLL_REVEAL_DELAY,
        duration: HERO_SCROLL_REVEAL_DURATION,
        ease: HERO_SCROLL_EASE_OUT_EXPO,
      }}
      className='absolute bottom-22 left-1/2 -translate-x-1/2 md:bottom-30'
    >
      <a
        href='#about'
        aria-label='Scroll to about section'
        className='group flex flex-col items-center gap-2'
      >
        <span className='text-[10px] font-medium uppercase tracking-[0.3em] text-white/30 transition-colors duration-300 group-hover:text-white/60'>
          Scroll
        </span>

        <motion.span
          animate={{
            y: HERO_SCROLL_BOUNCE_Y,
          }}
          transition={{
            duration: HERO_SCROLL_BOUNCE_DURATION,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className='h-8 w-px bg-gradient-to-b from-white/40 to-transparent'
        />
      </a>
    </motion.div>
  );
}
