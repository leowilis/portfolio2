'use client';

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { type MouseEvent } from 'react';

import {
  HERO_MOUSE_GLOW_BLUR,
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

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  }

  return (
    <div
      aria-hidden='true'
      className='pointer-events-none fixed inset-0 z-0'
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className='absolute inset-0'
        style={{
          background,
          filter: `blur(${HERO_MOUSE_GLOW_BLUR}px)`,
        }}
      />
    </div>
  );
}
