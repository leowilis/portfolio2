const TECH_STACK = ['React', 'Next.js', 'TypeScript'];

export default function HeroVisual() {
  return (
    <div className='relative flex w-full items-center justify-center md:justify-end'>
      <div className='relative w-full max-w-md'>
        <div
          aria-hidden='true'
          className='absolute -inset-6 rounded-[2rem] bg-blue-500/[0.08] blur-3xl'
        />

        <div className='relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-sm'>
          <div className='flex items-center justify-between border-b border-white/[0.07] pb-4'>
            <div className='flex items-center gap-2'>
              <span className='h-2.5 w-2.5 rounded-full bg-blue-400' />
              <span className='text-sm font-medium text-white/70'>
                Frontend Development
              </span>
            </div>

            <span className='text-xs text-white/35'>01</span>
          </div>

          <div className='space-y-5 py-8'>
            <div>
              <p className='text-xs font-medium uppercase tracking-[0.2em] text-blue-400/80'>
                Building
              </p>

              <p className='mt-3 max-w-sm text-2xl font-semibold tracking-tight text-white sm:text-3xl'>
                Modern interfaces with clean architecture.
              </p>
            </div>

            <div className='space-y-3'>
              <div className='h-2 w-full rounded-full bg-white/[0.06]'>
                <div className='h-full w-[88%] rounded-full bg-blue-400/70' />
              </div>

              <div className='h-2 w-[76%] rounded-full bg-white/[0.06]' />
              <div className='h-2 w-[64%] rounded-full bg-white/[0.06]' />
            </div>
          </div>

          <div className='flex flex-wrap gap-2 border-t border-white/[0.07] pt-4'>
            {TECH_STACK.map((technology) => (
              <span
                key={technology}
                className='rounded-full border border-blue-400/15 bg-blue-400/[0.05] px-3 py-1.5 text-xs font-medium text-blue-200/80'
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
