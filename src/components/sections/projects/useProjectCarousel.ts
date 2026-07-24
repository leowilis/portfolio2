'use client';

import {
  type PanInfo,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

import { DRAG_LIMIT, DRAG_THRESHOLD } from './project.constants';

interface UseProjectCarouselOptions {
  total: number;
}

// Controls the interactive 3D project carousel.
export default function useProjectCarousel({
  total,
}: UseProjectCarouselOptions) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragX = useMotionValue(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const springX = useSpring(dragX, {
    stiffness: 180,
    damping: 24,
    mass: 0.5,
  });

  const rotateY = useTransform(springX, [-DRAG_LIMIT, DRAG_LIMIT], [28, -28]);
  const rotateX = useTransform(springX, [-DRAG_LIMIT, DRAG_LIMIT], [-2, 2]);
  const cameraZ = useTransform(
    springX,
    [-DRAG_LIMIT, 0, DRAG_LIMIT],
    [-80, 0, -80],
  );

  const nextProject = useCallback(() => {
    if (total <= 1) return;

    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const previousProject = useCallback(() => {
    if (total <= 1) return;

    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleDrag = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      setIsDragging(true);
      const x = Math.max(-DRAG_LIMIT, Math.min(DRAG_LIMIT, info.offset.x));
      dragX.set(x);
    },
    [dragX],
  );

  const handleDragEnd = useCallback(() => {
    const offset = dragX.get();

    if (offset <= -DRAG_THRESHOLD) {
      nextProject();
    } else if (offset >= DRAG_THRESHOLD) {
      previousProject();
    }
    dragX.set(0);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsDragging(false);
    }, 150);
  }, [dragX, nextProject, previousProject]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

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
