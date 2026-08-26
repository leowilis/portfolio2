'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

import {
  PROJECT_MODAL_ACTIVE_OPACITY,
  PROJECT_MODAL_ACTIVE_SCALE,
  PROJECT_MODAL_BACKDROP_DURATION,
  PROJECT_MODAL_ENTER_SCALE,
  PROJECT_MODAL_ENTER_Y,
  PROJECT_MODAL_EXIT_SCALE,
  PROJECT_MODAL_EXIT_Y,
  PROJECT_MODAL_FOCUS_TAB_INDEX,
  PROJECT_MODAL_SPRING_DAMPING,
  PROJECT_MODAL_SPRING_MASS,
  PROJECT_MODAL_SPRING_STIFFNESS,
} from './project.constants';
import ProjectModalContent from './ProjectModalContent';
import type { Project } from './project.type';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

export default function ProjectModal({
  project,
  onClose,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          onClose();
          break;

        case 'ArrowRight':
          if (hasNext) {
            event.preventDefault();
            onNext();
          }
          break;

        case 'ArrowLeft':
          if (hasPrevious) {
            event.preventDefault();
            onPrevious();
          }
          break;

        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, onNext, onPrevious, hasNext, hasPrevious]);

  // Scroll lock + focus management
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocusedElement =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      modalRef.current?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;

      if (previousFocusedElement?.isConnected) {
        previousFocusedElement.focus();
      }
    };
  }, [project]);

  return (
    <AnimatePresence mode='wait'>
      {project && (
        <motion.div
          className='fixed inset-0 z-999 flex items-center justify-center bg-black/80 px-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: PROJECT_MODAL_ACTIVE_OPACITY }}
          exit={{ opacity: 0 }}
          transition={{
            duration: PROJECT_MODAL_BACKDROP_DURATION,
            ease: 'easeInOut',
          }}
          onClick={onClose}
          style={{
            willChange: 'opacity',
          }}
        >
          <motion.div
            ref={modalRef}
            role='dialog'
            aria-modal='true'
            aria-labelledby='project-modal-title'
            tabIndex={PROJECT_MODAL_FOCUS_TAB_INDEX}
            initial={{
              opacity: 0,
              scale: PROJECT_MODAL_ENTER_SCALE,
              y: PROJECT_MODAL_ENTER_Y,
            }}
            animate={{
              opacity: PROJECT_MODAL_ACTIVE_OPACITY,
              scale: PROJECT_MODAL_ACTIVE_SCALE,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: PROJECT_MODAL_EXIT_SCALE,
              y: PROJECT_MODAL_EXIT_Y,
            }}
            transition={{
              type: 'spring',
              stiffness: PROJECT_MODAL_SPRING_STIFFNESS,
              damping: PROJECT_MODAL_SPRING_DAMPING,
              mass: PROJECT_MODAL_SPRING_MASS,
            }}
            onClick={(event) => event.stopPropagation()}
            className='min-h-[450px] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-[0_40px_120px_rgba(0,0,0,.55)] outline-none'
            style={{
              willChange: 'transform, opacity',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
            }}
          >
            <ProjectModalContent
              project={project}
              onNext={onNext}
              onPrevious={onPrevious}
              hasNext={hasNext}
              hasPrevious={hasPrevious}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
