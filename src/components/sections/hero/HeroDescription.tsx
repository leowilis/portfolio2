'use client';

import { HERO_DESCRIPTION } from './hero.data';

export default function HeroDescription() {
  const contentText = HERO_DESCRIPTION ?? '';

  return (
    <p className='max-w-xl text-sm font-medium leading-relaxed text-neutral-400 select-none text-center tracking-normal break-words sm:text-base sm:leading-relaxed lg:max-w-2xl lg:text-[17px]'>
      {contentText.split('Leonardo Wilis').map((part, index, array) => {
        const isLastSegment = index === array.length - 1;

        return (
          <span key={`desc-fragment-${index}`}>
            {part}

            {!isLastSegment && (
              <strong className='font-extrabold text-neutral-200 tracking-tight'>
                Leonardo Wilis
              </strong>
            )}
          </span>
        );
      })}
    </p>
  );
}
