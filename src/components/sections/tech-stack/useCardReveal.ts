'use client';

import type { RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import { createCardReveal } from './cardReveal';

type Props = {
  cardRefs: RefObject<HTMLDivElement[]>;
};

export default function useCardReveal({ cardRefs }: Props) {
  useGSAP(() => {
    const cards = cardRefs.current;
    if (cards.length === 0) return;
    const animation = createCardReveal(cards);
    if (!animation) return;
    return () => {
      animation.kill();
    };
  }, []);
}
