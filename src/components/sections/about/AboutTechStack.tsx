import { TECHS } from './about.data';

export default function AboutTechStack() {
  return (
    <div className='flex flex-wrap gap-2 pt-2'>
      {TECHS.map((tech) => (
        <span
          key={tech}
          className='
            rounded-full
            border
            border-white/10
            bg-white/5
            px-3
            py-1
            text-[11px]
            text-white/30
            transition-all
            duration-300
            hover:border-violet-500/40
            hover:bg-violet-500/10
            hover:text-violet-300
          '
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
