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

const SPRING_CONFIG = {
  stiffness: 140,
  damping: 25,
  mass: 0.25,
};

export default function ScrollScene({ children }: ScrollSceneProps) {
  const ref = useRef<HTMLDivElement>(null);
  const sections = Children.toArray(children);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const progress = useSpring(scrollYProgress, SPRING_CONFIG);

  // Hero
  const heroScale = useTransform(progress, [0, 0.3], [1, 0.94]);
  const heroOpacity = useTransform(progress, [0, 0.3], [1, 0]);
  const heroBlur = useTransform(progress, [0, 0.1], [0, 24]);
  const heroFilter = useMotionTemplate`blur(${heroBlur}px)`;

  // About
  const aboutY = useTransform(progress, [0, 0.25], [80, 0]);
  const aboutRadius = useTransform(progress, [0, 0], [40, 0]);
  const aboutScale = useTransform(progress, [0, 0.25], [0.98, 1]);
  const aboutOpacity = useTransform(progress, [0, 0.01], [0.6, 1]);

  return (
    <div ref={ref}>
      {/* Hero */}
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

      {/* About */}
      <motion.div
        style={{
          y: aboutY,
          scale: aboutScale,
          opacity: aboutOpacity,
          borderTopLeftRadius: aboutRadius,
          borderTopRightRadius: aboutRadius,
        }}
        className='relative z-20 -mt-28 overflow-hidden bg-transparent'
      >
        {sections[1]}
      </motion.div>

      {/* Projects */}
      {sections[2] && <div className='relative z-30'>{sections[2]}</div>}

      {/* Tech Stack */}
      {sections[3] && <div className='relative z-40'>{sections[3]}</div>}

      {/* Education */}
      {sections[4] && <div className='relative z-50'>{sections[4]}</div>}

      {/* Contact */}
      {sections[5] && <div className='relative z-[60]'>{sections[5]}</div>}
    </div>
  );
}
