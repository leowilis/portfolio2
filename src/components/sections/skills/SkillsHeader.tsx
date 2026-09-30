export default function SkillsHeader() {
  return (
    <header className='max-w-2xl'>
      <div className='flex items-center gap-3'>
        <span aria-hidden='true' className='h-px w-8 bg-[#3B82F6]' />

        <p className='font-mono text-xs uppercase tracking-[0.2em] text-[#60A5FA]'>
          Technical Skills
        </p>
      </div>

      <h2
        id='skills-section-title'
        className='mt-5 text-3xl font-semibold tracking-[-0.03em] text-[#F5F7FA] sm:text-4xl lg:text-5xl'
      >
        Tools I use to build
        <span className='block text-[#6F7B89]'>modern web experiences.</span>
      </h2>

      <p className='mt-5 max-w-xl text-base leading-7 text-[#A8B2BF]'>
        A practical frontend toolkit focused on building maintainable, scalable,
        and accessible web applications.
      </p>
    </header>
  );
}
