import SkillsGrid from './SkillsGrid';
import SkillsHeader from './SkillsHeader';

export default function SkillsSection() {
  return (
    <section
      id='skills'
      aria-labelledby='skills-section-title'
      className='relative w-full py-24 sm:py-32 lg:py-40'
    >
      <div className='mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12'>
        <SkillsHeader />

        <div className='mt-12 md:mt-16'>
          <SkillsGrid />
        </div>
      </div>
    </section>
  );
}
