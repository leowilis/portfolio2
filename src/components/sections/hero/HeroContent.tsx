import HeroAvailability from './HeroAvailability';
import HeroButtons from './HeroButtons';
import HeroDescription from './HeroDescription';
import HeroHeading from './HeroHeading';
import HeroHighlights from './HeroHighlights';
import HeroTypewriter from './HeroTypewriter';

export default function HeroContent() {
  return (
    <div className='relative z-10 flex w-full max-w-2xl flex-col justify-center'>
      <div className='flex w-full flex-col items-start text-left'>
        <HeroHeading />

        <div className='mt-5 md:mt-6'>
          <HeroTypewriter />
        </div>

        <div className='mt-5 max-w-xl md:mt-6'>
          <HeroDescription />
        </div>

        <div className='mt-7 md:mt-8'>
          <HeroButtons />
        </div>

        <div className='mt-8 md:mt-10'>
          <HeroHighlights />
        </div>

        <div className='mt-7'>
          <HeroAvailability />
        </div>
      </div>
    </div>
  );
}
