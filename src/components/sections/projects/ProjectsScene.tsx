'use client';

import { useCallback, useEffect, useState } from 'react';

import { PROJECT_STAGE_MAX_WIDTH } from './project.constants';
import { PROJECTS } from './project.data';
import ProjectIndicator from './ProjectIndicator';
import ProjectModal from './ProjectModal';
import ProjectStage from './ProjectStage';
import type { Project } from './project.type';
import useProjectCarousel from './useProjectCarousel';

export default function ProjectsScene() {
  const carousel = useProjectCarousel({
    total: PROJECTS.length,
  });

  const { activeIndex, setActiveIndex } = carousel;

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProject = useCallback(
    (project: Project) => {
      const index = PROJECTS.findIndex((item) => item.id === project.id);

      if (index === -1) return;

      setActiveIndex(index);
      setSelectedProject(project);
    },
    [setActiveIndex],
  );

  const changeProject = useCallback(
    (direction: 1 | -1) => {
      if (!selectedProject) return;

      const nextIndex =
        (activeIndex + direction + PROJECTS.length) % PROJECTS.length;

      setActiveIndex(nextIndex);
      setSelectedProject(PROJECTS[nextIndex]);
    },
    [activeIndex, selectedProject, setActiveIndex],
  );

  const handleNext = useCallback(() => {
    changeProject(1);
  }, [changeProject]);

  const handlePrevious = useCallback(() => {
    changeProject(-1);
  }, [changeProject]);

  useEffect(() => {
    if (!selectedProject) return;

    function handleKeyDown(event: KeyboardEvent) {
      switch (event.key) {
        case 'ArrowRight':
          event.preventDefault();
          handleNext();
          break;

        case 'ArrowLeft':
          event.preventDefault();
          handlePrevious();
          break;

        default:
          break;
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, handleNext, handlePrevious]);

  return (
    <>
      <section className='relative min-h-[900px] w-full overflow-x-hidden bg-transparent py-12 select-none'>
        <div
          className='mx-auto w-full px-4'
          style={{
            maxWidth: PROJECT_STAGE_MAX_WIDTH,
          }}
        >
          <div className='flex w-full flex-col items-center'>
            <ProjectStage {...carousel} onProjectOpen={openProject} />

            <div className='mt-10 w-full shrink-0'>
              <ProjectIndicator
                total={PROJECTS.length}
                activeIndex={activeIndex}
                onSelect={setActiveIndex}
              />
            </div>
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasNext={PROJECTS.length > 1}
        hasPrevious={PROJECTS.length > 1}
      />
    </>
  );
}
