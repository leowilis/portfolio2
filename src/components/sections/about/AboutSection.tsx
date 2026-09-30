import AboutContent from './AboutContent';
import AboutHeader from './AboutHeader';

export default function AboutSection() {
  return (
    <section
      id='about'
      aria-labelledby='about-heading'
      className='relative overflow-hidden py-20 sm:py-24 lg:py-32'
    >
      <div className='mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10'>
        <AboutHeader />
        <AboutContent />
      </div>
    </section>
  );
}
