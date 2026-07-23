'use client';

import {
  type PanInfo,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useCallback, useState } from 'react';

import { DRAG_LIMIT, DRAG_THRESHOLD } from './project.constants';

interface UseProjectCarouselOptions {
  total: number;
}

// Controls the interactive 3D project carousel.
export default function useProjectCarousel({
  total,
}: UseProjectCarouselOptions) {
  // Initial active project
  const initialIndex = total > 0 ? Math.floor(total / 2) : 0;
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  // Raw drag position
  const dragX = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);

  // Smoothed drag motion
  const springX = useSpring(dragX, {
    stiffness: 110,
    damping: 20,
    mass: 0.7,
  });

  // Stage rotation
  const rotateY = useTransform(springX, [-DRAG_LIMIT, DRAG_LIMIT], [28, -28]);
  const rotateX = useTransform(springX, [-DRAG_LIMIT, DRAG_LIMIT], [-2, 2]);

  // Camera zoom
  const cameraZ = useTransform(
    springX,
    [-DRAG_LIMIT, 0, DRAG_LIMIT],
    [-80, 0, -80],
  );

  const nextProject = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const previousProject = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Drag position
  const handleDrag = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      setIsDragging(true);
      dragX.set(dragX.get() + info.delta.x);
    },
    [dragX],
  );

  // Handle drag release
  const handleDragEnd = useCallback(() => {
    const totalOffsetDistance = dragX.get();

    if (totalOffsetDistance <= -DRAG_THRESHOLD) {
      nextProject();
    } else if (totalOffsetDistance >= DRAG_THRESHOLD) {
      previousProject();
    }

    dragX.set(0);

    setTimeout(() => {
      setIsDragging(false);
    }, 150);
  }, [dragX, nextProject, previousProject]);

  return {
    activeIndex,
    setActiveIndex,
    rotateX,
    rotateY,
    cameraZ,
    handleDrag,
    handleDragEnd,
    nextProject,
    previousProject,
    isDragging,
  };
}
