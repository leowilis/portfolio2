'use client';

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { useEffect } from 'react';

import {
  HERO_MOUSE_GLOW_OPACITY,
  HERO_MOUSE_GLOW_SIZE,
  HERO_MOUSE_GLOW_SPRING,
} from './constants';

export default function HeroMouseGlow() {
  const mouseX = useMotionValue(-HERO_MOUSE_GLOW_SIZE);
  const mouseY = useMotionValue(-HERO_MOUSE_GLOW_SIZE);
  const springX = useSpring(mouseX, HERO_MOUSE_GLOW_SPRING);
  const springY = useSpring(mouseY, HERO_MOUSE_GLOW_SPRING);
  const background = useMotionTemplate`
    radial-gradient(
      ${HERO_MOUSE_GLOW_SIZE}px circle at ${springX}px ${springY}px,
      rgba(139, 92, 246, ${HERO_MOUSE_GLOW_OPACITY}),
      transparent 70%
    )
  `;

  useEffect(() => {
    // High-performance direct window layout pointer coordinate tracker
    const handleMove = (event: WindowEventMap['mousemove']) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      aria-hidden='true'
      className='pointer-events-none fixed inset-0 z-0 select-none overflow-hidden'
    >
      <motion.div
        className='absolute inset-0'
        style={{
          background,
          transform: 'translateZ(0)',
        }}
      />
    </div>
  );
}
