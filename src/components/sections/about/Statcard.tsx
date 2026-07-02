'use client';

import { motion } from 'framer-motion';
import { CountUp } from '@/src/animations';

type StatCardProps = {
  value: number;
  label: string;
  suffix?: string;
};

export default function Statcard({
  value,
  label,
  suffix = '',
}: StatCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-violet-500/10 bg-violet-500/5 p-5 transition-colors duration-300 hover:border-violet-500/30"
    >
      {/* Top Glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <CountUp
        to={value}
        suffix={suffix}
        className="text-2xl font-semibold text-violet-400"
      />

      <span className="mt-1 text-[9px] uppercase tracking-[2px] text-white/30 transition-colors duration-300 group-hover:text-white/50">
        {label}
      </span>
    </motion.div>
  );
}