import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Props {
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

export default function ProjectModalNavigation({
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}: Props) {
  return (
    <div className='mt-8 flex items-center justify-between gap-4 w-full select-none text-left p-0.5'>
      <button
        type='button'
        onClick={onPrevious}
        disabled={!hasPrevious}
        aria-label='Navigate Previous'
        className='group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-xs font-bold text-neutral-200 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-white/10 disabled:hover:bg-white/[0.03] disabled:hover:text-neutral-200 outline-none focus-visible:ring-1 focus-visible:ring-purple-500 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0e0e13] active:scale-98 cursor-pointer'
      >
        <ArrowLeft
          size={14}
          className='transition-transform group-hover:-translate-x-0.5 shrink-0 text-current'
          aria-hidden='true'
        />
        <span>Previous Project</span>
      </button>

      <button
        type='button'
        onClick={onNext}
        disabled={!hasNext}
        aria-label='Navigate Next'
        className='group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-xs font-bold text-neutral-200 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-white/10 disabled:hover:bg-white/[0.03] disabled:hover:text-neutral-200 outline-none focus-visible:ring-1 focus-visible:ring-purple-500 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0e0e13] active:scale-98 cursor-pointer'
      >
        <span>Next Project</span>
        <ArrowRight
          size={14}
          className='transition-transform group-hover:translate-x-0.5 shrink-0 text-current'
          aria-hidden='true'
        />
      </button>
    </div>
  );
}
