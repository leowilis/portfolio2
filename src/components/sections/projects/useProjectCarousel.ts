'use client';

import {
  type PanInfo,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useCallback, useState } from 'react';

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

export default function useProjectCarousel({
  total,
}: UseProjectCarouselOptions) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const dragX = useMotionValue(0);

  const springX = useSpring(dragX, {
    stiffness: PROJECT_CAROUSEL_SPRING_STIFFNESS,
    damping: PROJECT_CAROUSEL_SPRING_DAMPING,
    mass: PROJECT_CAROUSEL_SPRING_MASS,
  });

  /*
   * 3D camera rotation
   *
   * Dragging left/right subtly rotates the scene
   * and creates the feeling of moving a physical carousel.
   */
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

  /*
   * Camera depth
   *
   * The scene slightly pulls back while dragging
   * and returns smoothly to its resting position.
   */
  const cameraZ = useTransform(
    springX,
    [-DRAG_LIMIT, 0, DRAG_LIMIT],
    [PROJECT_CAROUSEL_CAMERA_Z, 0, PROJECT_CAROUSEL_CAMERA_Z],
  );

  const nextProject = useCallback(() => {
    if (total <= 1) return;

    setActiveIndex((currentIndex) => {
      return (currentIndex + 1) % total;
    });
  }, [total]);

  const previousProject = useCallback(() => {
    if (total <= 1) return;

    setActiveIndex((currentIndex) => {
      return (currentIndex - 1 + total) % total;
    });
  }, [total]);

  /*
   * Start dragging.
   *
   * This is intentionally separated from onDrag so
   * React state is not touched on every pointer movement.
   */
  const handleDragStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  /*
   * Update the visual drag position.
   *
   * Clamping keeps the camera transformation predictable
   * even when the user drags aggressively.
   */
  const handleDrag = useCallback(
    (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const x = Math.max(-DRAG_LIMIT, Math.min(DRAG_LIMIT, info.offset.x));

      dragX.set(x);
    },
    [dragX],
  );

  /*
   * End dragging.
   *
   * The final offset determines whether the carousel
   * advances or returns to the current project.
   */
  const handleDragEnd = useCallback(
    (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const offsetX = Math.max(
        -DRAG_LIMIT,
        Math.min(DRAG_LIMIT, info.offset.x),
      );

      if (offsetX <= -DRAG_THRESHOLD) {
        nextProject();
      } else if (offsetX >= DRAG_THRESHOLD) {
        previousProject();
      }

      /*
       * Reset the visual drag state.
       *
       * springX handles the return animation,
       * so we don't manually animate the camera.
       */
      dragX.set(0);

      /*
       * Keep the drag flag alive briefly so the click event
       * generated immediately after a drag cannot open a card.
       */
      window.setTimeout(() => {
        setIsDragging(false);
      }, 120);
    },
    [dragX, nextProject, previousProject],
  );


  return {
    activeIndex,
    setActiveIndex,
    rotateX,
    rotateY,
    cameraZ,
    handleDragStart,
    handleDrag,
    handleDragEnd,
    nextProject,
    previousProject,
    isDragging,
  };
}
