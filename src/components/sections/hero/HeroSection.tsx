import HeroAmbientGlow from './HeroAmbientGlow';
import HeroAvailability from './HeroAvailability';
import HeroContent from './HeroContent';
import HeroMouseGlow from './HeroMouseGlow';
import HeroScrollIndicator from './HeroScrollIndicator';

export default function HeroSection() {
  return (
    <section
      aria-label='Hero'
      className='relative flex min-h-[49svh] flex-col items-center justify-center overflow-hidden px-5 py-24 sm:px-6 sm:py-28 lg:py-20'
    >
      <HeroAmbientGlow />

      <HeroMouseGlow />

      <HeroContent />

      <HeroAvailability />

      <HeroScrollIndicator />
    </section>
  );
}
