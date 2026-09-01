import HeroAmbientGlow from './HeroAmbientGlow';
import HeroAvailability from './HeroAvailability';
import HeroContent from './HeroContent';
import HeroMouseGlow from './HeroMouseGlow';
import HeroScrollIndicator from './HeroScrollIndicator';

export default function HeroSection() {
  return (
    <section
      aria-label='Hero'
     className='relative flex h-full min-h-screen flex-col items-center justify-center'
    >
      <HeroAmbientGlow />

      <HeroMouseGlow />

      <HeroContent />

      <HeroAvailability />

      <HeroScrollIndicator />
    </section>
  );
}
