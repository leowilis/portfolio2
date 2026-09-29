'use client';

import { motion } from 'framer-motion';
import { CountUp } from '@/src/animations';
import {
  STAT_CARD_HOVER_DURATION,
  STAT_CARD_HOVER_SCALE,
  STAT_CARD_HOVER_Y,
} from './constants';

type StatCardProps = {
  value: number;
  label: string;
  suffix?: string;
};

export default function Statcard({ value, label, suffix = '' }: StatCardProps) {
  return (
    <motion.article
      whileHover={{
        y: STAT_CARD_HOVER_Y,
        scale: STAT_CARD_HOVER_SCALE,
      }}
      transition={{
        duration: STAT_CARD_HOVER_DURATION,
      }}
      className='group relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-blue-500/10 bg-blue-500/5 p-5 transition-colors duration-300 hover:border-blue-500/30'
    >
      {/* Top Glow */}
      <div
        aria-hidden='true'
        className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent'
      />

      <CountUp
        to={value}
        suffix={suffix}
        className='text-2xl font-semibold text-blue-400'
      />

      <p className='mt-1 text-[9px] font-black uppercase tracking-[2px] text-white/40 transition-colors duration-300 group-hover:text-white/50'>
        {label}
      </p>
    </motion.article>
  );
}
