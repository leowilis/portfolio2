'use client';

import type { RefObject } from 'react';
import { useEffect } from 'react';

import { gsap } from '@/src/lib/gsap';

import {
  CARD_MAX_ROTATE_X,
  CARD_MAX_ROTATE_Y,
  CARD_TILT_DURATION,
} from './constants';

type Props = {
  cardRef: RefObject<HTMLDivElement | null>;
};

export default function useCardTilt({ cardRef }: Props) {
  useEffect(() => {
    const card = cardRef.current;

    if (!card) return;

    const handleMove = (clientX: number, clientY: number) => {
      const rect = card.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * CARD_MAX_ROTATE_Y;
      const rotateX = -(y - 0.5) * CARD_MAX_ROTATE_X;

      gsap.to(card, {
        rotateX,
        rotateY,
        duration: CARD_TILT_DURATION,
        overwrite: 'auto',
        force3D: true,
      });
    };

    const onMouseMove = (event: MouseEvent) => {
      handleMove(event.clientX, event.clientY);
    };

    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];

      if (!touch) return;

      handleMove(touch.clientX, touch.clientY);
    };

    const reset = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: CARD_TILT_DURATION,
        overwrite: 'auto',
        force3D: true,
      });
    };

    card.addEventListener('mousemove', onMouseMove, {
      passive: true,
    });

    card.addEventListener('mouseleave', reset, {
      passive: true,
    });

    card.addEventListener('touchmove', onTouchMove, {
      passive: true,
    });

    card.addEventListener('touchend', reset, {
      passive: true,
    });

    card.addEventListener('touchcancel', reset, {
      passive: true,
    });

    return () => {
      card.removeEventListener('mousemove', onMouseMove);
      card.removeEventListener('mouseleave', reset);
      card.removeEventListener('touchmove', onTouchMove);
      card.removeEventListener('touchend', reset);
      card.removeEventListener('touchcancel', reset);

      gsap.killTweensOf(card);
    };
  }, [cardRef]);
}
