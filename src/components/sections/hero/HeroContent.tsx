import HeroButtons from './HeroButtons';
import HeroDescription from './HeroDescription';
import HeroHeading from './HeroHeading';
import HeroHighlights from './HeroHighlights';
import HeroTypewriter from './HeroTypewriter';

export default function HeroContent() {
  return (
    <div className='flex w-full max-w-5xl -translate-y-4 flex-col items-center text-center lg:-translate-y-12 lg:scale-[1.06]'>
      <HeroHeading />

      <HeroTypewriter />

      <HeroDescription />

      <HeroButtons />

      <HeroHighlights />
    </div>
  );
}
