import { HERO_TECH_STACK } from './hero.data';

export default function HeroTechStack() {
  return (
    <div className="mt-14 flex flex-wrap justify-center gap-2">
      {HERO_TECH_STACK.map((tech) => (
        <span
          key={tech}
          className="
            rounded-full
            border border-white/10
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
          "
        >
          {tech}
        </span>
      ))}
    </div>
  );
}