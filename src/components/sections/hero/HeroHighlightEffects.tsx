'use client';

import { motion, MotionValue } from 'framer-motion';
import HeroParticles from './HeroParticles';
import {
  BORDER_DURATION,
  BORDER_ROTATION,
  CARD_RADIUS,
  SHINE_DURATION,
} from './constants';

type Props = {
  spotlight: MotionValue<string>;
};

export default function HeroHighlightEffects({ spotlight }: Props) {
  return (
    <>
      <HeroParticles />

      {/* Animated Border */}
      <div
        className='pointer-events-none absolute inset-0 overflow-hidden p-px'
        style={{
          borderRadius: CARD_RADIUS,
        }}
      >
        <motion.div
          animate={{ rotate: BORDER_ROTATION }}
          transition={{
            duration: BORDER_DURATION,
            repeat: Infinity,
            ease: 'linear',
          }}
          className='absolute inset-[-150%] bg-[conic-gradient(from_180deg,transparent,rgba(139,92,246,.9),transparent,rgba(255,255,255,.18),transparent)]'
        />

        <div
          className='absolute inset-[1px] bg-[#0b0b11]/95 backdrop-blur-2xl'
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
        className='pointer-events-none absolute inset-[1px] z-10'
      />

      {/* Shine */}
      <div
        className='pointer-events-none absolute inset-y-0 -left-1/2 z-20 w-1/2 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-[700px]'
        style={{
          transitionDuration: `${SHINE_DURATION}ms`,
        }}
      />
    </>
  );
}
