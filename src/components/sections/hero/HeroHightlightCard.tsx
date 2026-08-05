'use client';

import CountUp from 'react-countup';
import { motion } from 'framer-motion';

import type { HeroHighlight } from './hero-hightlight.types';

import {
  CARD_ITEM_HOVER_Y,
  CARD_ITEM_TRANSITION_DURATION,
  COUNT_UP_DURATION,
  DIVIDER_HEIGHT,
  DIVIDER_OPACITY,
  EASE_OUT_EXPO,
  HIGHLIGHT_LABEL_OPACITY,
  HIGHLIGHT_LABEL_TRACKING,
} from './constants';

interface HeroHighlightCardProps {
  item: HeroHighlight;
  index: number;
  total: number;
}

export default function HeroHighlightCard({
  item,
  index,
  total,
}: HeroHighlightCardProps) {
  const isLastItem = index === total - 1;

  return (
    <motion.div
      whileHover={{
        y: CARD_ITEM_HOVER_Y,
      }}
      transition={{
        duration: CARD_ITEM_TRANSITION_DURATION,
        ease: EASE_OUT_EXPO,
      }}
      className='relative min-w-0 px-2 py-5 text-center sm:px-6 sm:py-7'
    >
      {!isLastItem && (
        <div
          className='absolute right-0 top-1/2 hidden h-8 w-px -translate-y-1/2 bg-white/10 sm:block'
          style={{
            height: `${DIVIDER_HEIGHT}px`,
            opacity: DIVIDER_OPACITY,
          }}
        />
      )}

      <div className='min-w-0'>
        <div className='whitespace-nowrap text-xl font-semibold tracking-tight text-white sm:text-3xl'>
          {typeof item.value === 'number' ? (
            <>
              <CountUp end={item.value} duration={COUNT_UP_DURATION} />
              {item.suffix}
            </>
          ) : (
            item.value
          )}
        </div>

        <p
          className='mt-1 whitespace-nowrap text-[8px] font-medium uppercase tracking-[0.16em] text-white/40 sm:text-[10px] sm:tracking-[0.22em]'
          style={{
            letterSpacing: HIGHLIGHT_LABEL_TRACKING,
            opacity: HIGHLIGHT_LABEL_OPACITY,
          }}
        >
          {item.label}
        </p>
      </div>
    </motion.div>
  );
}
