'use client';

import type { RefObject } from 'react';
import { useEffect } from 'react';
import { gsap } from '@/src/lib/gsap';

type Props = {
  cardRef: RefObject<HTMLDivElement | null>;
};

export default function useCardSpotlight({ cardRef }: Props) {
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const setX = gsap.quickSetter(card, '--mouse-x', 'px');
    const setY = gsap.quickSetter(card, '--mouse-y', 'px');

    const updateCoordinates = (clientX: number, clientY: number) => {
      const rect = card.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      setX(x);
      setY(y);
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateCoordinates(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];

      if (touch) {
        updateCoordinates(touch.clientX, touch.clientY);
      }
    };

    card.addEventListener('mousemove', handleMouseMove, {
      passive: true,
    });

    card.addEventListener('touchmove', handleTouchMove, {
      passive: true,
    });

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('touchmove', handleTouchMove);
    };
  }, [cardRef]);
}
