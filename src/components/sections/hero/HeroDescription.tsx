import { HERO_DESCRIPTION } from './hero.data';

export default function HeroDescription() {
  return (
    <p className='mb-8 max-w-xl text-sm font-medium leading-relaxed text-white/45 sm:text-base lg:mb-10 lg:max-w-2xl lg:text-[17px]'>
      {HERO_DESCRIPTION.split('Leonardo Wilis').map((part, index, array) => (
        <span key={index}>
          {part}

          {index < array.length - 1 && (
            <span className='font-semibold text-white/70'>Leonardo Wilis</span>
          )}
        </span>
      ))}
    </p>
  );
}
