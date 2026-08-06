import type { Project } from './project.type';

interface CompactProjectContentProps {
  project: Project;
}

export default function CompactProjectContent({
  project,
}: CompactProjectContentProps) {
  return (
    <figcaption className='absolute inset-x-0 bottom-0 select-none bg-gradient-to-t from-black/95 via-black/80 to-transparent p-5 pt-12'>
      <h3 className='line-clamp-1 text-lg font-bold tracking-tight text-white sm:text-xl'>
        {project.title}
      </h3>
    </figcaption>
  );
}
