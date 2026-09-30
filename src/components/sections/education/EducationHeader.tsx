export default function EducationHeader() {
  return (
    <header className='max-w-2xl'>
      <div className='flex items-center gap-3'>
        <span aria-hidden='true' className='h-px w-8 bg-[#3B82F6]' />

        <p className='font-mono text-xs uppercase tracking-[0.2em] text-[#60A5FA]'>
          Education & Certifications
        </p>
      </div>

      <h2
        id='education-section-title'
        className='mt-5 text-3xl font-semibold tracking-[-0.03em] text-[#F5F7FA] sm:text-4xl lg:text-5xl'
      >
        Education
        <span className='block text-[#6F7B89]'>and professional training.</span>
      </h2>

      <p className='mt-5 max-w-xl text-base leading-7 text-[#A8B2BF]'>
        A focused foundation in frontend development built through structured
        learning, practical work, and hands-on projects.
      </p>
    </header>
  );
}
