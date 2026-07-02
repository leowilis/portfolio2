import ScrollScene from '@/src/animations/ScrollScene';
import AboutSection from '@/src/components/sections/about/AboutSection';
import HeroSection from '@/src/components/sections/hero/HeroSection';

export default function Home() {
  return (
    <ScrollScene>
      <HeroSection />
      <AboutSection />
    </ScrollScene>
  );
}