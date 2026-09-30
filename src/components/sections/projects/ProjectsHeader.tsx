export default function ProjectsHeader() {
  return (
    <header className='mx-auto mb-12 max-w-3xl text-center sm:mb-16'>
      <p className='font-mono text-xs uppercase tracking-[0.2em] text-primary'>
        Selected Works
      </p>

      <h2
        id='projects-heading'
        className='mt-4 text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-[-0.035em] text-foreground'
      >
        Featured Projects
      </h2>

      <p className='mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-foreground-secondary sm:text-base'>
        A selection of products and applications I&apos;ve designed and built
        with a strong focus on performance, clean architecture, and user
        experience.
      </p>
    </header>
  );
}
