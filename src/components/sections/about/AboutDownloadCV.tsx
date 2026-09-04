import { Download } from 'lucide-react';

export default function AboutDownloadCV() {
  return (
    <div className='flex justify-center md:justify-start'>
      <a
        href='/cv/cv-leo-wilis.pdf'
        download
        className='group mt-2 inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm text-white/45 transition-all duration-300 hover:scale-[1.02] hover:border-violet-500/40 hover:text-violet-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60'
      >
        <span>Download CV</span>

        <Download
          aria-hidden='true'
          size={14}
          className='transition-transform duration-300 group-hover:translate-y-0.5'
        />
      </a>
    </div>
  );
}
