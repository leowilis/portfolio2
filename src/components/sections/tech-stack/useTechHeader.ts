'use client';

import type { RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import { createTechHeaderTimeline } from './techHeader';

type Props = {
  wrapperRef: RefObject<HTMLDivElement | null>;
};

export default function useTechHeader({ wrapperRef }: Props) {
  useGSAP(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const tl = createTechHeaderTimeline({
      wrapper,
    });

    return () => {
      tl?.kill();
    };
  }, []);
}
