'use client';

import { useSyncExternalStore } from 'react';
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from './project.constants';

// Tablet viewport range
const TABLET_QUERY = `(min-width: ${MOBILE_BREAKPOINT}px) and (max-width: ${TABLET_BREAKPOINT}px)`;

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') {
    return () => {};
  }
  const mediaQuery = window.matchMedia(TABLET_QUERY);
  mediaQuery.addEventListener('change', callback);

  return () => {
    mediaQuery.removeEventListener('change', callback);
  };
}

function getSnapshot(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  return window.matchMedia(TABLET_QUERY).matches;
}

function getServerSnapshot(): boolean {
  return false;
}

export default function useIsTablet(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
