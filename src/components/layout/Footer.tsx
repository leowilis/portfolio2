'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className='relative w-full border-t border-white/10 bg-transparent select-none'>
      {/* Full-width divider */}
      <motion.div
        initial={{
          opacity: 0,
          y: 12,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: '-20px 0px',
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className='mx-auto grid w-full max-w-[1100px] grid-cols-2 items-start px-6 py-8 sm:px-10 lg:px-0'
      >
        {/* LEFT */}
        <div>
          <p className='text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400'>
            © 2026 Leonardo Wilis
          </p>

          <p className='mt-2 text-xs font-medium text-neutral-400'>
            Frontend Developer
          </p>
        </div>

        {/* RIGHT */}
        <div className='flex flex-col items-end text-right'>
          <div className='flex items-center gap-2'>
            <span
              aria-hidden='true'
              className='h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400'
            />
            <span className='text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-300'>
              Available for work
            </span>
          </div>
          <p className='mt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-400'>
            Medan, Indonesia
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
