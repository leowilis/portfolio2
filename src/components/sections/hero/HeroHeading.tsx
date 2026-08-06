import { ScrambleText } from '../../ui/Scrambletext';
import { HERO_NAME, HERO_TITLE } from './hero.data';

export default function HeroHeading() {
  return (
    <header className='flex flex-col items-center text-center select-none'>
      <span className='mb-5 text-[11px] font-black uppercase tracking-[0.45em] text-white/40 sm:text-xs'>
        {HERO_TITLE}
      </span>

      <h1 className='text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem]'>
        I&apos;m{' '}
        <span className='inline-block min-w-[200px] text-left sm:min-w-[300px]'>
          <ScrambleText
            text={HERO_NAME}
            className='text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 font-extrabold'
            loopEvery={8000}
          />
        </span>
      </h1>
    </header>
  );
}
