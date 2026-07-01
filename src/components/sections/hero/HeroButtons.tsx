export default function HeroButtons() {
  return (
    <div className='flex items-center gap-3'>
      <a
        href='#projects'
        className='rounded-lg bg-violet-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:bg-violet-500 active:scale-95'
      >
        View Projects →
      </a>

      <a
        href='#contact'
        className='rounded-lg border border-white/15 px-6 py-3 text-sm text-white/50 transition-all duration-300 hover:border-violet-400/40 hover:text-white hover:scale-[1.03] active:scale-95'
      >
        Contact Me
      </a>
    </div>
  );
}
