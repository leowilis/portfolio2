import Magnetic from '@/src/animations/Magnetic';
import { ArrowRight, Mail } from 'lucide-react';

export default function HeroButtons() {
  return (
    <div className='relative z-20 flex w-full shrink-0 flex-wrap items-center justify-center gap-3 select-none text-left p-0.5'>
      <Magnetic>
        <a
          href='#projects'
          className='group inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-sm outline-none transition-all duration-200 hover:bg-blue-500 hover:shadow-blue-500/20 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-98'
        >
          <span>View Projects</span>
          <ArrowRight
            size={14}
            className='shrink-0 text-current transition-transform duration-200 group-hover:translate-x-0.5'
            aria-hidden='true'
          />
        </a>
      </Magnetic>

      <Magnetic>
        <a
          href='#contact'
          className='group inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-bold text-neutral-400 shadow-xs outline-none transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/5 hover:text-white focus-visible:ring-2 focus-visible:ring-blue-500/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-95'
        >
          Contact Me
          <Mail
            size={14}
            className='shrink-0 text-current transition-transform duration-200 group-hover:translate-x-0.5'
            aria-hidden='true'
          />
        </a>
      </Magnetic>
    </div>
  );
}
