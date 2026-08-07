'use client';

import type { RefObject } from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import {
  GRID_PARALLAX_MAX_X,
  GRID_PARALLAX_MAX_Y,
  GRID_PARALLAX_DURATION,
} from './constants';

type Props = {
  gridRef: RefObject<HTMLDivElement | null>;
};

export default function useGridParallax({ gridRef }: Props) {
  useEffect(() => {
    const grid = gridRef.current;

    if (!grid) return;

    const cards = Array.from(
      grid.querySelectorAll<HTMLElement>('[data-tech-card]'),
    );

    if (cards.length === 0) return;

    const move = (e: MouseEvent) => {
      const rect = grid.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      cards.forEach((card, index) => {
        const factor = (index % 4) + 1;

        gsap.to(card, {
          x: x * GRID_PARALLAX_MAX_X * factor,
          y: y * GRID_PARALLAX_MAX_Y * factor,
          duration: GRID_PARALLAX_DURATION,
          overwrite: true,
          ease: 'power2.out',
        });
      });
    };

    const leave = () => {
      gsap.to(cards, {
        x: 0,
        y: 0,
        duration: GRID_PARALLAX_DURATION,
        overwrite: true,
        ease: 'power2.out',
      });
    };

    grid.addEventListener('mousemove', move);
    grid.addEventListener('mouseleave', leave);

    return () => {
      grid.removeEventListener('mousemove', move);
      grid.removeEventListener('mouseleave', leave);

      gsap.killTweensOf(cards);
    };
  }, [gridRef]);
}
