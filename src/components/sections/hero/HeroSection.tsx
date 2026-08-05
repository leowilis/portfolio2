import HeroAmbientGlow from './HeroAmbientGlow';
import HeroAvailability from './HeroAvailability';
import HeroContent from './HeroContent';
import HeroMouseGlow from './HeroMouseGlow';
import HeroScrollIndicator from './HeroScrollIndicator';

export default function HeroSection() {
  return (
    <section className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16 pb-10 lg:pt-24'>
      <HeroAmbientGlow />

      <HeroMouseGlow />

      <HeroContent />

      <HeroAvailability />

      <HeroScrollIndicator />
    </section>
  );
}
