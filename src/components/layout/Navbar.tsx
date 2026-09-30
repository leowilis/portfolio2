'use client';

import { useRef, useState } from 'react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const;

const MOBILE_MENU_ID = 'mobile-navigation';

export default function MainNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuToggleRef = useRef<HTMLButtonElement>(null);

  const closeMobileMenu = () => {
    mobileMenuToggleRef.current?.focus();
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((isOpen) => !isOpen);
  };

  return (
    <header className='fixed inset-x-0 top-0 z-50'>
      <nav
        aria-label='Main navigation'
        className='border-b border-border-subtle bg-background/85 backdrop-blur-xl'
      >
        <div className='mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:h-[72px] lg:px-10'>
          {/* Logo */}
          <a
            href='#home'
            aria-label='Leonardo Wilis — Home'
            onClick={closeMobileMenu}
            className='group flex items-center gap-3'
          >
            <span className='flex size-8 items-center justify-center rounded-md border border-border-strong bg-surface text-xs font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:border-primary group-hover:text-primary'>
              LW
            </span>

            <span className='hidden text-sm font-medium tracking-tight text-foreground sm:block'>
              Leonardo Wilis
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className='hidden items-center gap-8 md:flex'>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className='relative py-2 text-sm font-medium text-foreground-muted transition-colors duration-200 hover:text-foreground focus-visible:text-foreground'
              >
                {item.label}
              </a>
            ))}

            <a
              href='#contact'
              className='inline-flex h-10 items-center justify-center rounded-[10px] bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors duration-200 hover:bg-primary-hover focus-visible:outline-none'
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            ref={mobileMenuToggleRef}
            type='button'
            aria-label={
              isMobileMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls={MOBILE_MENU_ID}
            onClick={toggleMobileMenu}
            className='flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors duration-200 hover:border-border-strong hover:bg-surface-hover md:hidden'
          >
            <span className='sr-only'>
              {isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            </span>

            <span className='flex w-4 flex-col gap-1.5' aria-hidden='true'>
              <span
                className={`block h-px w-full bg-current transition-transform duration-200 ${
                  isMobileMenuOpen ? 'translate-y-[4px] rotate-45' : ''
                }`}
              />

              <span
                className={`block h-px w-full bg-current transition-opacity duration-200 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />

              <span
                className={`block h-px w-full bg-current transition-transform duration-200 ${
                  isMobileMenuOpen ? '-translate-y-[4px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id={MOBILE_MENU_ID}
          aria-hidden={!isMobileMenuOpen}
          className={`overflow-hidden border-t border-border-subtle bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden ${
            isMobileMenuOpen
              ? 'max-h-[420px] opacity-100'
              : 'pointer-events-none max-h-0 opacity-0'
          }`}
        >
          <div className='mx-auto max-w-[1280px] px-5 py-4 sm:px-8'>
            <div className='flex flex-col'>
              <a
                href='#home'
                onClick={closeMobileMenu}
                className='rounded-lg px-3 py-3 text-sm font-medium text-foreground-muted transition-colors duration-200 hover:bg-surface hover:text-foreground'
              >
                Home
              </a>

              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className='rounded-lg px-3 py-3 text-sm font-medium text-foreground-muted transition-colors duration-200 hover:bg-surface hover:text-foreground'
                >
                  {item.label}
                </a>
              ))}

              <a
                href='#contact'
                onClick={closeMobileMenu}
                className='mt-3 inline-flex h-11 items-center justify-center rounded-[10px] bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors duration-200 hover:bg-primary-hover'
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
