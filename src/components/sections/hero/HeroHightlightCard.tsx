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
      className='relative flex flex-col justify-center min-w-0 px-4 py-6 text-center sm:px-6 sm:py-8'
    >
      {!isLastItem && (
        <div
          className='absolute right-0 top-1/2 hidden w-px -translate-y-1/2 bg-white/10 sm:block'
          style={{
            height: `${DIVIDER_HEIGHT}px`,
            opacity: DIVIDER_OPACITY,
          }}
        />
      )}

      <div className='min-w-0 w-full overflow-hidden'>
        <div className='truncate text-2xl font-bold tracking-tight text-white sm:text-3xl md:whitespace-nowrap'>
          {typeof item.value === 'number' ? (
            <>
              <CountUp end={item.value} duration={COUNT_UP_DURATION} />
              <span className='ml-0.5 text-white font-medium'>
                {item.suffix}
              </span>
            </>
          ) : (
            item.value
          )}
        </div>

        <p
          className='mt-1.5 break-words text-[9px] font-extrabold uppercase tracking-[0.18em] text-gray-200 sm:text-[10px] sm:tracking-[0.22em]'
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
