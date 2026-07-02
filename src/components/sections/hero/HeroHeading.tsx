import { HERO_NAME, HERO_TITLE } from './hero.data';

export default function HeroHeading() {
  return (
    <>
      <div className="mb-4 text-xs font-bold uppercase tracking-[4px] text-white/40">
        {HERO_TITLE}
      </div>

      <h1 className="mb-4 text-5xl font-semibold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
        I&apos;m <span className="text-violet-400">{HERO_NAME}</span>
      </h1>
    </>
  );
}