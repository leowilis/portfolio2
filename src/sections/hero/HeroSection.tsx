import HeroContent from './HeroContent';
import HeroVisual from './HeroVisual';

export default function HeroSection() {
  return (
    <section
      id='home'
      aria-labelledby='hero-title'
      className='relative flex min-h-svh w-full items-center overflow-hidden'
    >
      <div className='mx-auto grid w-full grid-cols-1 items-center gap-12 px-5 py-28 sm:px-8 md:grid-cols-2 md:gap-14 lg:gap-20 lg:px-10'>
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
}
