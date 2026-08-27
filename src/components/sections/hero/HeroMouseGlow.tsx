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
      circle ${HERO_MOUSE_GLOW_SIZE}px at ${springX}px ${springY}px,
      rgba(139, 92, 246, ${HERO_MOUSE_GLOW_OPACITY}) 0%,
      rgba(139, 92, 246, 0.18) 35%,
      rgba(139, 92, 246, 0.06) 55%,
      transparent 72%
    )
  `;

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    window.addEventListener('mousemove', handleMove, {
      passive: true,
    });
    return () => {
      window.removeEventListener('mousemove', handleMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden='true'
      className='pointer-events-none fixed inset-0 z-0 select-none overflow-hidden'
      style={{
        background,
        willChange: 'background',
      }}
    />
  );
}
