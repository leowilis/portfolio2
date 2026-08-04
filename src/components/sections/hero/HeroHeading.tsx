import { ScrambleText } from '../../ui/Scrambletext';
import { HERO_NAME, HERO_TITLE } from './hero.data';

export default function HeroHeading() {
  return (
    <header className='flex flex-col items-center'>
      <span className='mb-5 text-[12px] font-extrabold uppercase tracking-[0.45em] text-white/40 sm:text-xs'>
        {HERO_TITLE}
      </span>

      <h1 className='text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem]'>
        I&apos;m{' '}
        <ScrambleText
          text={HERO_NAME}
          className='text-violet-400'
          loopEvery={8000}
        />
      </h1>
    </header>
  );
}
