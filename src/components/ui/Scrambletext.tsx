'use client';

import { useEffect, useRef } from 'react';

type ScrambleTextProps = {
  text: string;
  className?: string;
  chars?: string;
  revealDelayPerChar?: number;
  frameInterval?: number;
  loopEvery?: number;
};

const DEFAULT_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export function ScrambleText({
  text,
  className = '',
  chars = DEFAULT_CHARS,
  revealDelayPerChar = 2,
  frameInterval = 45,
  loopEvery = 0,
}: ScrambleTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const frameRef = useRef(0);
  const visibleRef = useRef(false);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;
    let cancelled = false;

    const clearTimer = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const totalFrames = text.length * revealDelayPerChar + 15;

    const step = () => {
      if (cancelled || !visibleRef.current) {
        clearTimer();
        return;
      }

      const frame = frameRef.current;
      let output = '';

      for (let i = 0; i < text.length; i += 1) {
        const character = text[i];

        if (character === ' ') {
          output += ' ';
          continue;
        }

        const revealFrame = i * revealDelayPerChar;

        if (frame >= revealFrame + 10) {
          output += character;
        } else if (frame >= revealFrame) {
          output += chars[Math.floor(Math.random() * chars.length)];
        } else {
          output += '\u00A0';
        }
      }
      element.textContent = output;
      frameRef.current += 1;

      if (frameRef.current < totalFrames) {
        timeoutRef.current = setTimeout(step, frameInterval);

        return;
      }

      if (loopEvery > 0) {
        timeoutRef.current = setTimeout(() => {
          timeoutRef.current = null;

          if (!cancelled && visibleRef.current) {
            frameRef.current = 0;
            step();
          }
        }, loopEvery);
        return;
      }
      timeoutRef.current = null;
    };

    const start = () => {
      if (cancelled || !visibleRef.current) return;
      clearTimer();
      frameRef.current = 0;
      step();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          start();
        } else {
          clearTimer();
        }
      },
      {
        threshold: 0,
      },
    );
    observer.observe(element);
    element.textContent = text;

    return () => {
      cancelled = true;
      clearTimer();
      observer.disconnect();
    };
  }, [text, chars, revealDelayPerChar, frameInterval, loopEvery]);

  return (
    <span ref={textRef} className={className}>
      {text}
    </span>
  );
}
