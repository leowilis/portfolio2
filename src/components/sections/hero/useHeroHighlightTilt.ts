'use client';

import {
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion';
import { MouseEvent, useRef } from 'react';

import {
  CARD_PERSPECTIVE,
  CARD_ROTATE_X,
  CARD_ROTATE_Y,
  SPOTLIGHT_SIZE,
} from './constants';

export default function useHeroHighlightTilt() {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const spotlight = useMotionTemplate`
    radial-gradient(
      ${SPOTLIGHT_SIZE}px circle at ${mouseX}px ${mouseY}px,
      rgba(139,92,246,.18),
      transparent 70%
    )
  `;

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    rotateY.set(
      (x / rect.width - 0.5) * CARD_ROTATE_Y,
    );

    rotateX.set(
      (y / rect.height - 0.5) * -CARD_ROTATE_X,
    );
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return {
    cardRef,
    spotlight,
    rotateX,
    rotateY,
    handleMove,
    handleLeave,
    perspective: CARD_PERSPECTIVE,
  };
}