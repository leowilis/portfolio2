'use client';

import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { Children, type ReactNode, useRef } from 'react';

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

  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 25,
    mass: 0.25,
  });

  // Hero
  const heroScale = useTransform(progress, [0, 0.3], [1, 0.94]);
  const heroOpacity = useTransform(progress, [0, 0.3], [1, 0]);
  const heroBlur = useTransform(progress, [0, 0.3], [0, 12]);
  const heroFilter = useMotionTemplate`blur(${heroBlur}px)`;

  // About
  const aboutY = useTransform(progress, [0, 0.3], [180, 0]);
  const aboutRadius = useTransform(progress, [0, 0.3], [40, 0]);

  return (
    <div ref={ref} className='min-h-screen'>
      {/* HERO */}

      <motion.div
        style={{
          scale: heroScale,
          opacity: heroOpacity,
          filter: heroFilter,
        }}
        className='sticky top-0 h-screen overflow-hidden'
      >
        {sections[0]}
      </motion.div>

      {/* ABOUT */}

      <motion.div
        style={{
          y: aboutY,
          borderTopLeftRadius: aboutRadius,
          borderTopRightRadius: aboutRadius,
        }}
        className='relative z-20 overflow-hidden bg-transparent'
      >
        {sections[1]}
      </motion.div>

      {/* PROJECTS */}

      {sections[2] && <div className='relative z-30'>{sections[2]}</div>}

      {/* SKILLS */}

      {sections[3] && <div className='relative z-40'>{sections[3]}</div>}

      {/* CONTACT */}

      {sections[4] && <div className='relative z-50'>{sections[4]}</div>}
    </div>
  );
}
