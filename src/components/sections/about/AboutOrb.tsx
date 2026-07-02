'use client';

import { motion } from 'framer-motion';

export default function AboutOrb() {
  return (
    <div className='flex flex-col items-center gap-10'>
      <div className='relative h-[120px] w-[120px]'>
        {/* Glow */}

        <div className='absolute inset-0 rounded-full bg-violet-500/20 blur-3xl' />

        {/* Outer Ring */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
          className='absolute inset-[-32px] rounded-full border border-violet-500/30'
        />

        {/* Inner Ring */}

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
          className='absolute inset-[-18px] rounded-full border border-violet-500/40'
        />

        {/* Core */}

        <motion.div
          animate={{
            rotateY: 360,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
          className='
            absolute
            inset-0
            flex
            items-center
            justify-center
            rounded-full
            border
            border-violet-500/40
            bg-violet-500/10
            backdrop-blur-sm
          '
        >
          <span className='text-3xl font-bold text-violet-400'>LW</span>
        </motion.div>
      </div>

      <div className='text-center'>
        <p className='text-sm font-semibold text-white/80'>Leonardo Wilis</p>

        <p className='mt-1 text-xs uppercase tracking-[2px] text-white/30'>
          Frontend Developer
        </p>

        <div className='mt-4 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1'>
          <span className='relative flex h-2 w-2'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400' />

            <span className='relative inline-flex h-2 w-2 rounded-full bg-green-400' />
          </span>

          <span className='text-[10px] uppercase tracking-wider text-green-400'>
            Open to Work
          </span>
        </div>
      </div>
    </div>
  );
}
