'use client';

import { Children, type ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ScrollSceneProps {
  children: ReactNode;
}

export default function ScrollScene({ children }: ScrollSceneProps) {
  const ref = useRef<HTMLDivElement>(null);
  const sections = Children.toArray(children);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Hero
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.94]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // About
  const aboutY = useTransform(scrollYProgress, [0, 0.25], [80, 0]);
  const aboutRadius = useTransform(scrollYProgress, [0, 0.02], [40, 0]);
  const aboutScale = useTransform(scrollYProgress, [0, 0.25], [0.98, 1]);
  const aboutOpacity = useTransform(scrollYProgress, [0, 0.01], [0.6, 1]);

  return (
    <div ref={ref} className='relative w-full max-w-full overflow-x-clip'>
      {/* Hero */}
      <motion.div
        style={{
          scale: heroScale,
          opacity: heroOpacity,
          willChange: 'transform, opacity',
        }}
        className='sticky top-0 h-[100svh] w-full overflow-hidden'
      >
        {sections[0]}
      </motion.div>

      {/* About */}
      <motion.div
        style={{
          y: aboutY,
          scale: aboutScale,
          opacity: aboutOpacity,
          borderTopLeftRadius: aboutRadius,
          borderTopRightRadius: aboutRadius,
          willChange: 'transform, opacity',
        }}
        className='relative z-20 -mt-28 w-full max-w-full overflow-hidden bg-transparent'
      >
        {sections[1]}
      </motion.div>

      {/* Projects */}
      {sections[2] && (
        <div className='relative z-30 w-full max-w-full'>{sections[2]}</div>
      )}

      {/* Tech Stack */}
      {sections[3] && (
        <div className='relative z-40 w-full max-w-full'>{sections[3]}</div>
      )}

      {/* Education */}
      {sections[4] && (
        <div className='relative z-50 w-full max-w-full'>{sections[4]}</div>
      )}

      {/* Contact */}
      {sections[5] && (
        <div className='relative z-60 w-full max-w-full'>{sections[5]}</div>
      )}
    </div>
  );
}
