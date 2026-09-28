import HeroContent from './HeroContent';
import HeroVisual from './HeroVisual';

export default function HeroSection() {
  return (
    <section
      id='home'
      aria-labelledby='hero-title'
      className='relative flex min-h-svh w-full items-center overflow-hidden'
    >
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 -z-10'
      >
        <div className='absolute left-[15%] top-[20%] h-72 w-72 rounded-full bg-blue-500/[0.06] blur-3xl' />
        <div className='absolute bottom-[10%] right-[10%] h-80 w-80 rounded-full bg-blue-400/[0.05] blur-3xl' />
      </div>

      <div className='mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-28 sm:px-8 md:grid-cols-2 md:gap-14 md:py-32 lg:gap-20 lg:px-10'>
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
}
