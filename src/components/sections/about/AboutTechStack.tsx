import { TECHS } from './about.data';

export default function AboutTechStack() {
  return (
    <section aria-labelledby='tech-stack-heading' className='pt-2'>
      <h2 id='tech-stack-heading' className='sr-only'>
        Technology Stack
      </h2>

      <ul className='flex flex-wrap gap-2'>
        {TECHS.map((tech) => (
          <li key={tech}>
            <span className='rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/30 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-300'>
              {tech}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
