import { memo } from 'react';

interface WindowHeaderProps {
  title: string;
}

function WindowHeader({ title }: WindowHeaderProps) {
  return (
    <div className='relative z-10 mb-6 flex items-center border-b border-border bg-card backdrop-blur-xl px-5 py-3 '>
      <div className='flex items-center gap-2'>
        <span
          aria-hidden='true'
          className='h-3 w-3 rounded-full bg-danger'
        />
        <span
          aria-hidden='true'
          className='h-3 w-3 rounded-full bg-warning'
        />
        <span
          aria-hidden='true'
          className='h-3 w-3 rounded-full bg-success'
        />
      </div>
      <h3 className='absolute left-1/2 -translate-x-1/2 text-xs font-medium tracking-wide text-muted-foreground'>
        {title}
      </h3>
    </div>
  );
}

export default memo(WindowHeader);
