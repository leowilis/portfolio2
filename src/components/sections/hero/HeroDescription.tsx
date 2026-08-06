'use client';

import { HERO_DESCRIPTION } from './hero.data';

export default function HeroDescription() {
  const contentText = HERO_DESCRIPTION ?? '';
  const targetName = 'Leonardo Wilis';

  return (
    <p className='max-w-xl text-sm font-medium leading-relaxed text-neutral-400 select-none text-center tracking-normal break-words sm:text-base sm:leading-relaxed lg:max-w-2xl lg:text-[17px]'>
      {contentText.split('Leonardo Wilis').map((part, index, array) => {
        const isLastSegment = index === array.length - 1;
        return (
          <span key={`desc-part-${index}-${part.slice(0, 5)}`}>
            {part}
            {!isLastSegment && (
              <strong className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-300 tracking-tight'>
                {targetName}
              </strong>
            )}
          </span>
        );
      })}
    </p>
  );
}
