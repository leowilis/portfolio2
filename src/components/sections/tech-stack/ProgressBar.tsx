'use client';

import { motion } from 'framer-motion';
import {
  PROGRESS_BAR_DURATION,
  PROGRESS_BAR_EASE,
  PROGRESS_HEIGHT,
  PROGRESS_VALUE_DURATION,
  PROGRESS_VALUE_HIDDEN_X,
} from './constants';

type ProgressBarProps = {
  value: number;
  hovered: boolean;
};

export default function ProgressBar({ value, hovered }: ProgressBarProps) {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className='mt-6 select-none'>
      {/* Progress bar */}
      <div
        role='progressbar'
        aria-label='Technology capacity'
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ height: PROGRESS_HEIGHT }}
        className='relative overflow-hidden rounded-full bg-white/10'
      >
        <motion.div
          aria-hidden='true'
          className='absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-violet-600 to-purple-500'
          initial={false}
          animate={{
            width: hovered ? `${clampedValue}%` : 0,
          }}
          transition={{
            duration: PROGRESS_BAR_DURATION,
            ease: PROGRESS_BAR_EASE,
          }}
        />
      </div>

      {/* Progress information */}
      <div className='mt-3 flex items-center justify-between min-h-[18px]'>
        <span className='text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 sm:text-[11px]'>
          Capacity
        </span>

        <motion.span
          initial={false}
          animate={{
            opacity: hovered ? 1 : 0,
            x: hovered ? 0 : PROGRESS_VALUE_HIDDEN_X,
          }}
          transition={{
            duration: PROGRESS_VALUE_DURATION,
            ease: 'easeOut',
          }}
          className='text-xs font-bold text-violet-500'
          aria-hidden={!hovered}
        >
          {clampedValue}%
        </motion.span>
      </div>
    </div>
  );
}
