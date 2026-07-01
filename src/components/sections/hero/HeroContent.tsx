import HeroButtons from './HeroButtons';
import HeroDescription from './HeroDescription';
import HeroHeading from './HeroHeading';
import HeroTypewriter from './HeroTypewriter';

export default function HeroContent() {
  return (
    <div className='flex flex-col items-center text-center'>
      <HeroHeading name='Leonardo Wilis' />

      <HeroTypewriter />

      <HeroDescription />

      <HeroButtons />
    </div>
  );
}
