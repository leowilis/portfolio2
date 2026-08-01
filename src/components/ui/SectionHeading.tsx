'use client';

import { motion } from 'framer-motion';

type SectionHeadingProps = {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={[
        'max-w-3xl select-none w-full flex flex-col shrink-0',
        isCenter ? 'text-center items-center mx-auto' : 'text-left items-start',
      ].join(' ')}
    >
      {badge && (
        <span className='inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-violet-300'>
          {badge}
        </span>
      )}

      <h2
        className={[
          'text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl max-w-2xl leading-tight',
          isCenter ? 'mt-5' : 'mt-3',
        ].join(' ')}
      >
        {title}
      </h2>

      {description && (
        <p className='mt-4 text-sm leading-relaxed text-neutral-400 font-medium whitespace-pre-line break-words max-w-xl sm:text-base sm:leading-relaxed'>
          {description}
        </p>
      )}
    </motion.div>
  );
}
