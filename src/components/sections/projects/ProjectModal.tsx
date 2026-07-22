'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Project } from './project.type';
import { useEffect } from 'react';
import ProjectModalContent from './ProjectModalContent';

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
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  return (
    <AnimatePresence mode='wait'>
      {project && (
        <motion.div
          className='fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-lg'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{
              duration: 0.25,
            }}
            onClick={(e) => e.stopPropagation()}
            className='w-full max-w-6xl rounded-3xl border border-white/10 bg-primary-foreground p-10'
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
