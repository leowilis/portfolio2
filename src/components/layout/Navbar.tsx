'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';

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

const navItems = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Skills', link: '#skills' },
  { name: 'Education', link: '#education' },
  { name: 'Contact', link: '#contact' },
] as const;

export default function MainNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleHomeNavigation = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      closeMobileMenu();

      // Remove any active smooth/hash navigation.
      window.history.replaceState(null, '', '#home');

      // Force the document back to the beginning.
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
    },
    [closeMobileMenu],
  );

  return (
    <Navbar>
      {/* Desktop */}
      <NavBody>
        <NavbarLogo />

        <NavItems items={navItems} />

        <NavbarButton
          href="#contact"
          variant="primary"
        >
          Hire Me
        </NavbarButton>
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />

          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => {
              setIsMobileMenuOpen((previous) => !previous);
            }}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen}>
          {navItems.map((item) => {
            const isHome = item.link === '#home';

            return (
              <Link
                key={item.name}
                href={item.link}
                onClick={isHome ? handleHomeNavigation : closeMobileMenu}
                className="group relative z-[120] block w-full rounded-xl px-4 py-3 text-base font-medium text-white/70 transition-colors hover:bg-violet-500/10 hover:text-white"
              >
                <span className="flex items-center justify-between">
                  <span>{item.name}</span>

                  <span className="text-violet-400 opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </span>
              </Link>
            );
          })}

          <NavbarButton
            href="#contact"
            variant="primary"
            onClick={closeMobileMenu}
            className="mt-2 w-full"
          >
            Hire Me
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}