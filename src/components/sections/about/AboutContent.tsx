'use client';

import AboutBio from './AboutBio';
import AboutDetails from './AboutDetails';

export default function AboutContent() {
  return (
    <div className='grid items-start gap-16 md:grid-cols-2'>
      <AboutBio />
      <AboutDetails />
    </div>
  );
}
