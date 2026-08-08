'use client';

import { useLayoutEffect } from 'react';

export default function ScrollRestoration() {
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const savedScrollY = sessionStorage.getItem('scroll-y');

    if (savedScrollY !== null) {
      window.scrollTo(0, Number(savedScrollY));
    }

    const saveScrollPosition = () => {
      sessionStorage.setItem('scroll-y', String(window.scrollY));
    };

    window.addEventListener('scroll', saveScrollPosition, {
      passive: true,
    });

    window.addEventListener('beforeunload', saveScrollPosition);

    return () => {
      window.removeEventListener('scroll', saveScrollPosition);
      window.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, []);

  return null;
}
