'use client';

import { motion, type Variants } from 'framer-motion';

type Segment = {
  text: string;
  className?: string;
};

type TextRevealProps = {
  text: Segment[];
  className?: string;
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const word: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: 'blur(8px)',
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
};

export default function TextReveal({
  text,
  className,
}: TextRevealProps) {
  return (
    <motion.h2
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.5,
      }}
      className={className}
    >
      {text.map((segment, segmentIndex) =>
        segment.text.split(' ').map((wordText, wordIndex) => (
          <motion.span
            key={`${segmentIndex}-${wordIndex}`}
            variants={word}
            className={`inline-block mr-[0.25em] ${segment.className ?? ''}`}
          >
            {wordText}
          </motion.span>
        )),
      )}
    </motion.h2>
  );
}