export default function HeroAvailability() {
  return (
    <div>
      <div
        role='status'
        aria-label='Current employment availability'
        className='inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.04] px-3.5 py-2 text-blue-100/80 md:px-4'
      >
        <span
          aria-hidden='true'
          className='h-2 w-2 rounded-full bg-emerald-400'
        />

        <span className='text-xs font-bold uppercase tracking-wide md:text-sm'>
          Available for work
        </span>
      </div>
    </div>
  );
}
