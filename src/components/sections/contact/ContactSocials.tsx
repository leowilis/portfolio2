import { forwardRef } from 'react';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/leowilis',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/leonardo-wilis-dev/',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/code.leonardo/',
  },
];

const ContactSocials = forwardRef<HTMLDivElement>(
  function ContactSocials(_, ref) {
    return (
      <div
        ref={ref}
        className='mt-24 select-none border-t border-white/[0.08] pt-8 lg:mt-32'
      >
        <p className='text-[10px] font-semibold uppercase tracking-[0.4em] text-zinc-500'>
          Find me elsewhere
        </p>

        <ul
          aria-label='Social media profiles'
          className='mt-5 flex flex-wrap items-center gap-x-7 gap-y-3'
        >
          {socials.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={label}
                className='text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-400 outline-none transition-colors duration-300 hover:text-violet-400 focus-visible:text-violet-400'
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  },
);

ContactSocials.displayName = 'ContactSocials';

export default ContactSocials;
