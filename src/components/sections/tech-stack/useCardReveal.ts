'use client';

import type { RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import { createCardReveal } from './cardReveal';

type Props = {
  gridRef: RefObject<HTMLDivElement | null>;
};

export default function useCardReveal({ gridRef }: Props) {
  useGSAP(
    () => {
      const grid = gridRef.current;
      if (!grid) return;

      const cards = Array.from(
        grid.querySelectorAll<HTMLElement>('[data-tech-reveal]'),
      );
      if (cards.length === 0) return;
      const animation = createCardReveal(cards);
      if (!animation) return;

      return () => {
        animation.kill();
      };
    },
    {
      scope: gridRef,
    },
  );
}
