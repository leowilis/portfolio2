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

    const getColumnCount = () => {
      const computedStyle = window.getComputedStyle(grid);
      const columns = computedStyle
        .getPropertyValue('grid-template-columns')
        .split(' ')
        .filter(Boolean);

      return columns.length || 1;
    };

    let columnCount = getColumnCount();

    const updateColumnCount = () => {
      columnCount = getColumnCount();
    };

    const handleMove = (clientX: number, clientY: number) => {
      const rect = grid.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;

      cards.forEach((card, index) => {
        const columnPosition = index % columnCount;
        const rowPosition = Math.floor(index / columnCount);
        const depthFactor = ((columnPosition + rowPosition) % 3) + 1.2;

        gsap.to(card, {
          x: x * GRID_PARALLAX_MAX_X * depthFactor,
          y: y * GRID_PARALLAX_MAX_Y * depthFactor,
          duration: GRID_PARALLAX_DURATION,
          overwrite: 'auto',
          force3D: true,
        });
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];

      if (touch) {
        handleMove(touch.clientX, touch.clientY);
      }
    };

    const leave = () => {
      gsap.to(cards, {
        x: 0,
        y: 0,
        duration: GRID_PARALLAX_DURATION,
        overwrite: 'auto',
        force3D: true,
      });
    };

    grid.addEventListener('mousemove', onMouseMove, {
      passive: true,
    });

    grid.addEventListener('mouseleave', leave, {
      passive: true,
    });

    grid.addEventListener('touchmove', onTouchMove, {
      passive: true,
    });

    grid.addEventListener('touchend', leave, {
      passive: true,
    });

    grid.addEventListener('touchcancel', leave, {
      passive: true,
    });

    window.addEventListener('resize', updateColumnCount);

    return () => {
      grid.removeEventListener('mousemove', onMouseMove);
      grid.removeEventListener('mouseleave', leave);
      grid.removeEventListener('touchmove', onTouchMove);
      grid.removeEventListener('touchend', leave);
      grid.removeEventListener('touchcancel', leave);
      window.removeEventListener('resize', updateColumnCount);
      gsap.killTweensOf(cards);
    };
  }, [gridRef]);
}
