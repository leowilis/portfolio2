'use client';

import { useCallback, useState } from 'react';
import {
  PROJECT_DIRECTION_NEXT,
  PROJECT_DIRECTION_PREVIOUS,
  PROJECT_STAGE_MAX_WIDTH,
} from './project.constants';
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
    changeProject(PROJECT_DIRECTION_NEXT);
  }, [changeProject]);

  const handlePrevious = useCallback(() => {
    changeProject(PROJECT_DIRECTION_PREVIOUS);
  }, [changeProject]);

  const handleClose = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const hasMultipleProjects = PROJECTS.length > 1;

  return (
    <>
      <section className='relative min-h-[900px] w-full select-none overflow-x-hidden bg-transparent py-12'>
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
        onClose={handleClose}
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasNext={hasMultipleProjects}
        hasPrevious={hasMultipleProjects}
      />
    </>
  );
}
