'use client';

import { useEffect, useState } from 'react';

import { StaggerContainer } from '@/src/animations';

import MobileProjectCard from './MobileProjectCard';
import ProjectsHeader from './ProjectsHeader';
import ProjectsScene from './ProjectsScene';

import { PROJECTS } from './project.data';
import { MOBILE_BREAKPOINT } from './project.constants';

export default function ProjectsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkViewport() {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    }
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => {
      window.removeEventListener('resize', checkViewport);
    };
  }, []);

  const mobileProjects = PROJECTS.map((project, index) => (
    <MobileProjectCard key={project.id} project={project} index={index} />
  ));

  return (
    <section id='projects' className='relative overflow-hidden py-32'>
      <StaggerContainer>
        <ProjectsHeader />
      </StaggerContainer>

      {isMobile ? (
        <div className='mx-auto mt-12 max-w-lg flex flex-col gap-6 px-6'>
          {mobileProjects}
        </div>
      ) : (
        <ProjectsScene />
      )}
    </section>
  );
}
