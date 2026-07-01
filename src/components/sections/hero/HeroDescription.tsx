import { HERO_DESCRIPTION } from './hero.data';

export default function HeroDescription() {
  return (
    <p className='mb-10 max-w-lg text-md leading-relaxed text-white/40 md:text-base'>
      {HERO_DESCRIPTION.split('Leonardo Wilis').map((part, index, array) => (
        <span key={index}>
          {part}

          {index < array.length - 1 && (
            <span className='font-bold text-white/70'>Leonardo Wilis</span>
          )}
        </span>
      ))}
    </p>
  );
}
