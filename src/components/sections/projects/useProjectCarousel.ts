'use client';

import {
  type PanInfo,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  DRAG_LIMIT,
  DRAG_THRESHOLD,
  PROJECT_CAROUSEL_CAMERA_Z,
  PROJECT_CAROUSEL_ROTATE_X,
  PROJECT_CAROUSEL_ROTATE_Y,
  PROJECT_CAROUSEL_SPRING_DAMPING,
  PROJECT_CAROUSEL_SPRING_MASS,
  PROJECT_CAROUSEL_SPRING_STIFFNESS,
} from './project.constants';

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
    stiffness: PROJECT_CAROUSEL_SPRING_STIFFNESS,
    damping: PROJECT_CAROUSEL_SPRING_DAMPING,
    mass: PROJECT_CAROUSEL_SPRING_MASS,
  });

  const rotateY = useTransform(
    springX,
    [-DRAG_LIMIT, DRAG_LIMIT],
    [PROJECT_CAROUSEL_ROTATE_Y, -PROJECT_CAROUSEL_ROTATE_Y],
  );

  const rotateX = useTransform(
    springX,
    [-DRAG_LIMIT, DRAG_LIMIT],
    [-PROJECT_CAROUSEL_ROTATE_X, PROJECT_CAROUSEL_ROTATE_X],
  );

  const cameraZ = useTransform(
    springX,
    [-DRAG_LIMIT, 0, DRAG_LIMIT],
    [PROJECT_CAROUSEL_CAMERA_Z, 0, PROJECT_CAROUSEL_CAMERA_Z],
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
