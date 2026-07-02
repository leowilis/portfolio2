'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/src/animations/FadeIn';

type StatCardProps = {
  value: string;
  label: string;
  delay?: number;
};

export default function Statcard({
  value,
  label,
  delay = 0,
}: StatCardProps) {
  return (
    <FadeIn delay={delay * 0.1}>
      <motion.div
        whileHover={{
          y: -4,
          scale: 1.02,
        }}
        transition={{
          duration: 0.25,
        }}
        className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-violet-500/10 bg-violet-500/5 p-5"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

        <span className="text-2xl font-semibold text-violet-400">
          {value}
        </span>

        <span className="mt-1 text-[9px] uppercase tracking-[2px] text-white/30">
          {label}
        </span>
      </motion.div>
    </FadeIn>
  );
}