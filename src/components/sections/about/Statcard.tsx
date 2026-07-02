'use client';

import { motion } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
}

const variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <motion.div
      variants={variants}
      transition={{
        duration: 0.45,
      }}
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      className='
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-violet-500/10
        bg-violet-500/[0.05]
        p-6
      '
    >
      {/* Top Line */}

      <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent' />

      {/* Glow */}

      <div className='absolute inset-0 bg-violet-500/0 transition-all duration-500 group-hover:bg-violet-500/[0.04]' />

      <div className='relative z-10 flex flex-col items-center'>
        <span className='text-3xl font-bold text-violet-400'>{value}</span>

        <span className='mt-2 text-[10px] uppercase tracking-[2px] text-white/35'>
          {label}
        </span>
      </div>
    </motion.div>
  );
}
