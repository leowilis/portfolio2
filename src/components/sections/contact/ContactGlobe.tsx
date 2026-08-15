'use client';

import GlobeScene from './globe/GlobeScene';

export default function ContactGlobe() {
  return (
    <div className='relative h-[360px] w-full sm:h-[480px] lg:h-[600px] overflow-visible select-none'>
      <GlobeScene />
    </div>
  );
}
