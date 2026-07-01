'use client';

import { useEffect, useState, useTransition } from 'react';
import { HERO_ROLES } from './hero.data';

export default function HeroTypewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    const current = HERO_ROLES[roleIndex];

    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 40);
    } else {
      startTransition(() => {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % HERO_ROLES.length);
      });
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <div className='mb-6 flex h-8 items-center gap-1 text-base text-white/40 md:text-lg'>
      <span>{displayed}</span>

      <span className='animate-pulse text-violet-300'>|</span>
    </div>
  );
}
