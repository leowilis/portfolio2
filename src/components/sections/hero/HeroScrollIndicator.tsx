'use client';

import { motion } from 'framer-motion';

export default function HeroScrollIndicator() {
  return (
    <div className='absolute bottom-8 left-1/2 -translate-x-1/2'>
      <div className='flex flex-col items-center gap-3'>
        <span className='text-[10px] tracking-[0.45em] text-white/30'>
          SCROLL
        </span>

        <div className='relative h-20 w-px overflow-hidden bg-white/10'>
          <motion.div
            className='absolute left-0 h-8 w-full rounded-full bg-gradient-to-b from-violet-400 via-violet-300 to-white'
            animate={{
              y: [-35, 90],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>
    </div>
  );
}
