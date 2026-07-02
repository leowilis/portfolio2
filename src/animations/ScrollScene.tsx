'use client';

import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ScrollSceneProps {
  children: [ReactNode, ReactNode];
}

export default function ScrollScene({ children }: ScrollSceneProps) {
  const ref = useRef<HTMLDivElement>(null);

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
    <div
      ref={ref}
      className="relative h-[220vh]"
    >
      {/* HERO */}
      <motion.div
        style={{
          scale: heroScale,
          opacity: heroOpacity,
          filter: heroFilter,
        }}
        className="sticky top-0 h-screen"
      >
        {children[0]}
      </motion.div>

      {/* ABOUT */}
      <motion.div
        style={{
          y: aboutY,
          borderTopLeftRadius: aboutRadius,
          borderTopRightRadius: aboutRadius,
        }}
        className="
          relative
          z-20
          min-h-screen
          overflow-hidden
          bg-transparent
        "
      >
        {children[1]}
      </motion.div>
    </div>
  );
}