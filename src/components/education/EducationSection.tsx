'use client';

import EducationCard from './EducationCard';
import EducationHeader from './EducationHeader';
import { EDUCATION_DATA } from './education.data';

export default function EducationSection() {
  return (
    <section
      id='education'
      aria-labelledby='education-section-title'
      className='relative w-full py-24 sm:py-32 lg:py-40 bg-transparent'
    >
      <div className='mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12'>
        <span id='education-section-title' className='sr-only'>
          Education & Certifications
        </span>
        <EducationHeader />

        <div className='space-y-8 mt-12 md:mt-16'>
          {EDUCATION_DATA.map((education) => (
            <EducationCard key={education.id} education={education} />
          ))}
        </div>
      </div>
    </section>
  );
}
