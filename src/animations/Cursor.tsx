'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const SPRING = {
  stiffness: 380,
  damping: 32,
  mass: 0.5,
};

export default function Cursor() {
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, SPRING);
  const y = useSpring(mouseY, SPRING);

  useEffect(() => {
    if ('ontouchstart' in window) return;

    const move = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      if (!visible) {
        setVisible(true);
      }
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', leave);
    window.addEventListener('mouseenter', enter);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', leave);
      window.removeEventListener('mouseenter', enter);
    };
  }, [mouseX, mouseY, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Ring */}
      <motion.div
        style={{
          x,
          y,
        }}
        className='pointer-events-none fixed left-0 top-0 z-[9998]'
      >
        <div
          className='
            h-10
            w-10
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-violet-400/70
          '
        />
      </motion.div>

      {/* Dot */}
      <motion.div
        style={{
          x,
          y,
        }}
        className='pointer-events-none fixed left-0 top-0 z-[9999]'
      >
        <div
          className='
            h-2
            w-2
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-violet-400
          '
        />
      </motion.div>
    </>
  );
}
