import HeroContent from './HeroContent';
import HeroVisual from './HeroVisual';

const HeroSection = () => {
  return (
    <section
      id='home'
      aria-labelledby='hero-title'
      className='relative flex min-h-screen items-center overflow-hidden pb-20 pt-32 md:pb-24 md:pt-36'
    >
      <div
        className='pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_45%,rgba(37,99,235,0.10),transparent_32%)]'
        aria-hidden='true'
      />

      <div className='mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 md:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)] md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.9fr)] lg:gap-16 lg:px-10'>
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
};

export default HeroSection;
