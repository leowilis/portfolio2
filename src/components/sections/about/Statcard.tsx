'use client';

import { useInView } from '@/src/hooks/useInView';

type StatCardProps = {
  value: string;
  label: string;
  delay: number;
};

export function StatCard({ value, label, delay }: StatCardProps) {
  const { ref, inView } = useInView(0.3);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-violet-500/[0.1] bg-violet-500/[0.05] p-5 transition-all duration-700 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      }`}
    >
      {/* Top shimmer line */}
      <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent' />
      <span className='text-2xl font-semibold text-violet-400'>{value}</span>
      <span className='mt-1 text-[9px] tracking-[2px] text-white/30 uppercase'>
        {label}
      </span>
    </div>
  );
}
