import type { FocusItem } from './focus.data';

interface FocusCardProps {
  item: FocusItem;
}

export default function FocusCard({ item }: FocusCardProps) {
  return (
    <article className='group relative overflow-hidden rounded-2xl border border-[#1B2532] bg-[#0C1016] p-6 transition-colors duration-300 hover:border-[#2A3848] hover:bg-[#111720] sm:p-7'>
      <div
        aria-hidden='true'
        className='absolute left-0 top-0 h-px w-12 bg-[#3B82F6] transition-[width] duration-300 group-hover:w-20'
      />

      <div className='flex gap-5'>
        <span
          aria-hidden='true'
          className='pt-1 font-mono text-xs font-medium tracking-[0.16em] text-[#60A5FA]'
        >
          {item.number}
        </span>

        <div className='min-w-0'>
          <h3 className='text-lg font-semibold tracking-[-0.015em] text-[#F5F7FA]'>
            {item.title}
          </h3>

          <p className='mt-3 text-sm leading-6 text-[#6F7B89] transition-colors duration-300 group-hover:text-[#A8B2BF]'>
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
}
