'use client';

import type { RefObject } from 'react';
import { useEffect } from 'react';
import { gsap } from '@/src/lib/gsap';
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
      grid.querySelectorAll<HTMLElement>('[data-tech-parallax]'),
    );

    if (cards.length === 0) return;

    const move = (event: MouseEvent) => {
      const rect = grid.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      cards.forEach((card, index) => {
        const factor = (index % 4) + 1;

        gsap.to(card, {
          x: x * GRID_PARALLAX_MAX_X * factor,
          y: y * GRID_PARALLAX_MAX_Y * factor,
          duration: GRID_PARALLAX_DURATION,
          overwrite: 'auto',
          ease: 'power2.out',
          force3D: true,
        });
      });
    };

    const leave = () => {
      gsap.to(cards, {
        x: 0,
        y: 0,
        duration: GRID_PARALLAX_DURATION,
        overwrite: 'auto',
        ease: 'power2.out',
        force3D: true,
      });
    };

    grid.addEventListener('mousemove', move, {
      passive: true,
    });

    grid.addEventListener('mouseleave', leave, {
      passive: true,
    });

    return () => {
      grid.removeEventListener('mousemove', move);
      grid.removeEventListener('mouseleave', leave);
      gsap.killTweensOf(cards);
    };
  }, [gridRef]);
}
