interface HeroHeadingProps {
  name: string;
}

export default function HeroHeading({ name }: HeroHeadingProps) {
  return (
    <>
      <div className='mb-4 text-xs font-bold uppercase tracking-[4px] text-white/40'>
        Frontend Developer
      </div>

      <h1 className='mb-4 text-5xl font-semibold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl'>
        I&apos;m <span className='text-violet-400'>{name}</span>
      </h1>
    </>
  );
}
