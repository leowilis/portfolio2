'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

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
  // ESC
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  // Scroll Lock
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className='fixed inset-0 z-999 flex items-center justify-center bg-black/70 backdrop-blur-md px-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.25,
            ease: 'easeInOut',
          }}
          onClick={onClose}
        >
          <motion.div
            role='dialog'
            aria-modal='true'
            aria-labelledby='project-modal-title'
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 24,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              y: 12,
            }}
            transition={{
              type: 'spring',
              stiffness: 280,
              damping: 26,
              mass: 0.9,
            }}
            onClick={(event) => event.stopPropagation()}
            className='w-full max-w-6xl min-h-[450px] overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-[0_40px_120px_rgba(0,0,0,.55)]'
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
