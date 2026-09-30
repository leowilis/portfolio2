import HeroAvailability from './HeroAvailability';
import HeroButtons from './HeroButtons';
import HeroDescription from './HeroDescription';
import HeroHeading from './HeroHeading';

export default function HeroContent() {
  return (
    <div className='relative z-10 flex w-full max-w-2xl flex-col items-center text-center'>
      <HeroHeading />

      <div className='mt-6'>
        <HeroDescription />
      </div>

      <div className='mt-8'>
        <HeroButtons />
      </div>

      <div className='mt-7'>
        <HeroAvailability />
      </div>
    </div>
  );
}
