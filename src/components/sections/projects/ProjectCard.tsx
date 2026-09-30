import Image from 'next/image';
import type { Project } from '@/src/types/project';
import ProjectLinks from './ProjectLinks';
import TechList from './TechList';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <article
      className={[
        'group overflow-hidden rounded-2xl border border-border bg-surface',
        'transition-[border-color,background-color,box-shadow] duration-300',
        'hover:border-border-strong hover:bg-surface-hover hover:shadow-elevated',
        featured ? 'lg:col-span-2' : '',
      ].join(' ')}
    >
      <div
        className={[
          'relative overflow-hidden border-b border-border-subtle bg-background-subtle',
          featured ? 'aspect-[16/8]' : 'aspect-[16/10]',
        ].join(' ')}
      >
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes={
            featured
              ? '(min-width: 1024px) 840px, 100vw'
              : '(min-width: 640px) 50vw, 100vw'
          }
          className='object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]'
        />

        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent'
        />
      </div>

      <div className='flex flex-col p-5 sm:p-6'>
        <div className='flex items-start justify-between gap-4'>
          <div className='min-w-0'>
            <p className='font-mono text-[11px] uppercase tracking-[0.16em] text-primary'>
              {featured ? 'Featured Project' : 'Project'}
            </p>

            <h3 className='mt-2 text-xl font-semibold tracking-[-0.02em] text-foreground sm:text-2xl'>
              {project.title}
            </h3>
          </div>

          <span
            aria-hidden='true'
            className='shrink-0 font-mono text-xs text-foreground-muted'
          >
            {String(project.id).padStart(2, '0')}
          </span>
        </div>

        <p className='mt-4 max-w-2xl text-sm leading-relaxed text-foreground-secondary sm:text-base'>
          {project.description}
        </p>

        <div className='mt-5'>
          <TechList technologies={project.technologies} />
        </div>

        <ProjectLinks demo={project.demo} github={project.github} />
      </div>
    </article>
  );
}
