import { CTA_SOCIALS } from './cta.data';

export default function CTASocials() {
  return (
    <div className='border-t border-[#1B2532] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0'>
      <p className='text-[10px] font-semibold uppercase tracking-[0.32em] text-[#6F7B89]'>
        Find me elsewhere
      </p>

      <ul aria-label='Social media profiles' className='mt-5 space-y-4'>
        {CTA_SOCIALS.map((social) => (
          <li key={social.name}>
            <a
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
              className='group inline-flex items-center gap-3 text-sm text-[#A8B2BF] outline-none transition-colors duration-300 hover:text-[#F5F7FA] focus-visible:text-[#F5F7FA]'
            >
              <span
                aria-hidden='true'
                className='h-px w-5 bg-[#2A3848] transition-all duration-300 group-hover:w-8 group-hover:bg-blue-500'
              />

              <span>{social.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
