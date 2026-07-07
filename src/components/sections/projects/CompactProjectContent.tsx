import type { Project } from './project.type';

interface Props {
  project: Project;
}

export default function CompactProjectContent({ project }: Props) {
  return (
    <div className='absolute bottom-0 w-full bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent p-5'>
      <h3 className='text-lg font-semibold tracking-tight text-white/75'>
        {project.title}
      </h3>
    </div>
  );
}
