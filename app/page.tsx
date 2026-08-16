import ScrollScene from '@/src/animations/ScrollScene';
import AboutSection from '@/src/components/sections/about/AboutSection';
import ContactSection from '@/src/components/sections/contact/ContactSection';
import EducationSection from '@/src/components/sections/education/EducationSection';
import HeroSection from '@/src/components/sections/hero/HeroSection';
import ProjectsSection from '@/src/components/sections/projects/ProjectsSection';
import TechStack from '@/src/components/sections/tech-stack';

export default function Home() {
  return (
    <main className='w-full relative'>
      <ScrollScene>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TechStack />
        <EducationSection />
        <ContactSection />
      </ScrollScene>
    </main>
  );
}
