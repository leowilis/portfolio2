'use client';

import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavItems,
} from '@/src/components/ui/resizable-navbar';

import { useState } from 'react';

const navItems = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Skills', link: '#skills' },
  { name: 'Education', link: '#education' },
  { name: 'Contact', link: '#contact' },
];

export default function MainNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop */}
      <NavBody>
        <NavbarLogo />

        <NavItems
          items={navItems}
          onItemClick={() => setIsMobileMenuOpen(false)}
        />

        <NavbarButton href='#contact' variant='primary'>
          Hire Me
        </NavbarButton>
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />

          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className='group w-full rounded-xl px-4 py-3 text-base font-medium text-white/70 transition-colors hover:bg-violet-500/10 hover:text-white'
            >
              <span className='flex items-center justify-between'>
                {item.name}

                <span className='text-violet-400 opacity-0 transition-opacity group-hover:opacity-100'>
                  →
                </span>
              </span>
            </a>
          ))}

          <NavbarButton
            href='#contact'
            variant='primary'
            onClick={() => setIsMobileMenuOpen(false)}
            className='mt-2 w-full'
          >
            Hire Me
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
