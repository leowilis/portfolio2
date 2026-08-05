'use client';

import { useEffect, useState, useTransition } from 'react';
import { HERO_ROLES } from './hero.data';
import {
  HERO_TYPEWRITER_DELETE_SPEED,
  HERO_TYPEWRITER_HOLD_DURATION,
  HERO_TYPEWRITER_TYPE_SPEED,
} from './constants';

export default function HeroTypewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    const currentRole = HERO_ROLES[roleIndex];

    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, displayed.length + 1));
      }, HERO_TYPEWRITER_TYPE_SPEED);
    } else if (!deleting && displayed.length === currentRole.length) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, HERO_TYPEWRITER_HOLD_DURATION);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, displayed.length - 1));
      }, HERO_TYPEWRITER_DELETE_SPEED);
    } else {
      startTransition(() => {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % HERO_ROLES.length);
      });
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex, startTransition]);

  return (
    <div className='mb-6 flex h-8 items-center justify-center text-base font-medium text-white/45 md:text-lg'>
      <span className='min-w-0'>{displayed}</span>

      <span aria-hidden='true' className='ml-1 text-violet-300'>
        |
      </span>
    </div>
  );
}
