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
        How I approach frontend engineering.
      </h2>

      <p className='mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-foreground-secondary sm:text-base'>
        I care about building interfaces that are clear to use, reliable in
        real-world conditions, and maintainable as a product evolves.
      </p>
    </header>
  );
}
