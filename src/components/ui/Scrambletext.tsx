'use client';
import { useEffect, useRef, useState } from 'react';

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
  const [display, setDisplay] = useState(text);
  const frameRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  useEffect(() => {
    function step() {
      const frame = frameRef.current;
      let output = '';

      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          output += ' ';
          continue;
        }
        const revealFrame = i * revealDelayPerChar;
        if (frame >= revealFrame + 10) {
          output += text[i];
        } else if (frame >= revealFrame) {
          output += chars[Math.floor(Math.random() * chars.length)];
        } else {
          output += '\u00A0';
        }
      }

      setDisplay(output);
      frameRef.current += 1;

      const totalFrames = text.length * revealDelayPerChar + 15;
      if (frameRef.current < totalFrames) {
        timeoutRef.current = setTimeout(step, frameInterval);
      } else if (loopEvery > 0) {
        timeoutRef.current = setTimeout(() => {
          frameRef.current = 0;
          step();
        }, loopEvery);
      }
    }

    step();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return <span className={className}>{display}</span>;
}
