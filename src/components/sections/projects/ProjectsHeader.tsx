import { TextReveal, FadeIn } from '@/src/animations';

export default function ProjectsHeader() {
  return (
    <div className='mb-20 flex flex-col items-center text-center'>
      <FadeIn>
        <p className='mb-3 text-xs font-bold uppercase tracking-[4px] text-white/40'>
          Featured Projects
        </p>
      </FadeIn>

      <TextReveal
        className='text-3xl font-semibold tracking-tight md:text-4xl'
        text={[
          {
            text: 'Selected work crafted with',
            className: 'text-white',
          },
          {
            text: 'performance and passion.',
            className: 'text-violet-400',
          },
        ]}
      />

      <FadeIn>
        <p className='mt-6 max-w-2xl text-white/45'>
          A collection of projects focused on performance, clean architecture,
          and delightful user experience.
        </p>
      </FadeIn>
    </div>
  );
}
