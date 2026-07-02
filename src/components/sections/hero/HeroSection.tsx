import HeroAvailability from './HeroAvailability';
import HeroContent from './HeroContent';
import HeroScrollIndicator from './HeroScrollIndicator';
import HeroTechStack from './HeroTechStack';

export default function HeroSection() {
  return (
    <section className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6'>
      <HeroContent />
      <HeroTechStack />
      <HeroAvailability />
      <HeroScrollIndicator />
    </section>
  );
}
