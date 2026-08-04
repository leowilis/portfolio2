import HeroAvailability from './HeroAvailability';
import HeroContent from './HeroContent';
import HeroScrollIndicator from './HeroScrollIndicator';

export default function HeroSection() {
  return (
    <section className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16 pb-10 lg:pt-24'>
      <HeroContent />

      <div className='mt-12'>
        <HeroAvailability />
      </div>

      <div className='mt-16'>
        <HeroScrollIndicator />
      </div>
    </section>
  );
}
