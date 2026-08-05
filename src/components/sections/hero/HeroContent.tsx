import HeroButtons from './HeroButtons';
import HeroDescription from './HeroDescription';
import HeroHeading from './HeroHeading';
import HeroHighlights from './HeroHighlights';
import HeroTypewriter from './HeroTypewriter';

export default function HeroContent() {
  return (
    <section
      role='region'
      aria-label='Introduction summary banner showcase'
      className='flex w-full max-w-4xl flex-col items-center justify-center text-center select-none mx-auto px-4 py-8 md:py-12 lg:py-16 shrink-0 relative z-10 animate-in fade-in duration-300'
    >
      <div className='flex flex-col items-center text-center w-full space-y-5 md:space-y-6 lg:space-y-7'>
        <HeroHeading />

        <HeroTypewriter />

        <HeroDescription />

        <HeroButtons />

        <HeroHighlights />
      </div>
    </section>
  );
}
