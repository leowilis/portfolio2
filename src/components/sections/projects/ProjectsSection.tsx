'use client';

import { useSyncExternalStore } from 'react';
import { StaggerContainer } from '@/src/animations';
import MobileProjectCard from './MobileProjectCard';
import ProjectsHeader from './ProjectsHeader';
import ProjectsScene from './ProjectsScene';
import { MOBILE_BREAKPOINT } from './project.constants';
import { PROJECTS } from './project.data';

const MOBILE_QUERY = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`;

function subscribeToMobileQuery(callback: () => void) {
  const mediaQuery = window.matchMedia(MOBILE_QUERY);
  mediaQuery.addEventListener('change', callback);
  return () => {
    mediaQuery.removeEventListener('change', callback);
  };
}

function getMobileSnapshot() {
  return window.matchMedia(MOBILE_QUERY).matches;
}

function getMobileServerSnapshot() {
  return false;
}

function useIsMobile() {
  return useSyncExternalStore(
    subscribeToMobileQuery,
    getMobileSnapshot,
    getMobileServerSnapshot,
  );
}

export default function ProjectsSection() {
  const isMobile = useIsMobile();

  return (
    <section
      id='projects'
      aria-labelledby='projects-heading'
      className='relative overflow-hidden py-30 sm:py-32'
    >
      <StaggerContainer>
        <ProjectsHeader />
      </StaggerContainer>

      {isMobile ? (
        <div className='mx-auto mt-12 flex max-w-lg flex-col gap-6 px-6'>
          {PROJECTS.map((project, index) => (
            <MobileProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      ) : (
        <ProjectsScene />
      )}
    </section>
  );
}
