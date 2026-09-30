import EducationCard from './EducationCard';
import EducationHeader from './EducationHeader';
import { EDUCATION_DATA } from './education.data';

export default function EducationSection() {
  return (
    <section
      id='education'
      aria-labelledby='education-section-title'
      className='relative w-full py-24 sm:py-32 lg:py-40'
    >
      <div className='mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12'>
        <EducationHeader />

        <div className='mt-12 space-y-6 md:mt-16'>
          {EDUCATION_DATA.map((education) => (
            <EducationCard key={education.id} education={education} />
          ))}
        </div>
      </div>
    </section>
  );
}
