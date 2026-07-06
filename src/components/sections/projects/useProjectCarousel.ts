'use client';

import {
  type PanInfo,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useState } from 'react';

import { DRAG_LIMIT, DRAG_THRESHOLD } from './project.constants';

interface UseProjectCarouselOptions {
  total: number;
}

export default function useProjectCarousel({
  total,
}: UseProjectCarouselOptions) {
  const [activeIndex, setActiveIndex] = useState(Math.floor(total / 2));

  // Raw drag position
  const dragX = useMotionValue(0);

  // Smoothed drag motion
  const springX = useSpring(dragX, {
    stiffness: 110,
    damping: 20,
    mass: 0.7,
  });

  // Stage rotation
  const rotateY = useTransform(springX, [-DRAG_LIMIT, DRAG_LIMIT], [28, -28]);
  const rotateX = useTransform(springX, [-DRAG_LIMIT, DRAG_LIMIT], [-2, 2]);

  // Camera Zoom
  const cameraZ = useTransform(
    springX,
    [-DRAG_LIMIT, 0, DRAG_LIMIT],
    [-80, 0, -80],
  );

  function handleDrag(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) {
    dragX.set(info.offset.x);
  }

  function handleDragEnd() {
    const offset = dragX.get();

    if (offset <= -DRAG_THRESHOLD) {
      setActiveIndex((prev) => Math.min(prev + 1, total - 1));
    } else if (offset >= DRAG_THRESHOLD) {
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }

    dragX.set(0);
  }

  return {
    activeIndex,
    setActiveIndex,
    rotateX,
    rotateY,
    cameraZ,
    handleDrag,
    handleDragEnd,
  };
}
