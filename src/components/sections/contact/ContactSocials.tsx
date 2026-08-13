import { forwardRef } from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/leowilis',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/leonardo-wilis-dev/',
    icon: FaLinkedinIn,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/code.leonardo/',
    icon: FaInstagram,
  },
];

const ContactSocials = forwardRef<HTMLDivElement>(
  function ContactSocials(_, ref) {
    return (
      <div
        ref={ref}
        className='mt-24 flex flex-col gap-8 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-end sm:justify-between lg:mt-32 select-none'
      >
        <div>
          <p className='text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-semibold'>
            Find me online
          </p>

          <div className='mt-5 flex items-center gap-3'>
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target='_blank'
                rel='noreferrer'
                aria-label={label}
                className='group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-zinc-400 transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-violet-400 outline-none focus-visible:ring-2 focus-visible:ring-violet-400'
              >
                <Icon
                  size={17}
                  className='transition-transform duration-300 group-hover:scale-110'
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  },
);

ContactSocials.displayName = 'ContactSocials';

export default ContactSocials;
