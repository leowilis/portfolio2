export default function AboutHeader() {
  return (
    <header className='mx-auto mb-12 max-w-3xl text-center sm:mb-16'>
      <p className='font-mono text-xs uppercase tracking-[0.2em] text-primary'>
        About Me
      </p>

      <h2
        id='about-heading'
        className='mt-4 text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-[-0.035em] text-foreground'
      >
        Building thoughtful digital experiences.
      </h2>

      <p className='mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-foreground-secondary sm:text-base'>
        A frontend developer focused on clean architecture, responsive
        interfaces, and products that are practical to use.
      </p>
    </header>
  );
}
