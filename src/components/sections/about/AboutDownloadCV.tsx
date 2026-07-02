export default function AboutDownloadCV() {
  return (
    <div className='flex justify-center md:justify-start'>
      <a
        href='/cv-leo-wilis.pdf'
        target='_blank'
        rel='noopener noreferrer'
        className='
          mt-2
          inline-flex
          items-center
          gap-2
          rounded-lg
          border
          border-white/15
          px-5
          py-3
          text-sm
          text-white/45
          transition-all
          duration-300
          hover:scale-[1.03]
          hover:border-violet-500/40
          hover:text-violet-300
          active:scale-95
        '
      >
        Download CV
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='15'
          height='15'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
          <polyline points='7 10 12 15 17 10' />
          <line x1='12' y1='15' x2='12' y2='3' />
        </svg>
      </a>
    </div>
  );
}
