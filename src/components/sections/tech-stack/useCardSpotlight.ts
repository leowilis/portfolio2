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

    const updateCoordinates = (
      clientX: number,
      clientY: number,
    ) => {
      const rect = card.getBoundingClientRect();

      setX(clientX - rect.left);
      setY(clientY - rect.top);
    };

    const handleMouseMove = (event: MouseEvent) => {
      updateCoordinates(
        event.clientX,
        event.clientY,
      );
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];

      if (!touch) return;

      updateCoordinates(
        touch.clientX,
        touch.clientY,
      );
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