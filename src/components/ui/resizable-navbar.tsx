'use client';

import { cn } from '@/src/lib/utils';
import { IconMenu2, IconX } from '@tabler/icons-react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'motion/react';
import Link from 'next/link';
import React, { useRef, useState } from 'react';

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

type NavItem = {
  name: string;
  link: string;
};

interface NavItemsProps {
  items: readonly NavItem[];
  className?: string;
  onItemClick?: (item: NavItem) => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
}

type NavbarButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'dark' | 'gradient';
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 60);
  });

  return (
    <motion.div
      ref={ref}
      className={cn(
        'sticky inset-x-0 top-4 z-[100] w-full px-4 sm:px-6',
        className,
      )}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return child;
        }

        return React.cloneElement(
          child as React.ReactElement<{ visible?: boolean }>,
          { visible },
        );
      })}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        maxWidth: visible ? '960px' : '1180px',
        y: visible ? 4 : 0,
        backgroundColor: visible
          ? 'rgba(10, 8, 16, 0.72)'
          : 'rgba(10, 8, 16, 0)',
        borderColor: visible
          ? 'rgba(139, 92, 246, 0.18)'
          : 'rgba(139, 92, 246, 0)',
        boxShadow: visible
          ? '0 10px 40px rgba(0,0,0,0.35), 0 0 30px rgba(139,92,246,0.06)'
          : '0 0 0 rgba(0,0,0,0)',
        backdropFilter: visible ? 'blur(18px)' : 'blur(0px)',
      }}
      transition={{
        type: 'spring',
        stiffness: 180,
        damping: 28,
        mass: 0.7,
      }}
      className={cn(
        'relative z-[100] mx-auto hidden w-full flex-row items-center justify-between rounded-full border px-4 py-2.5 lg:flex',
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'absolute inset-0 hidden items-center justify-center gap-1 lg:flex',
        className,
      )}
    >
      {items.map((item, idx) => {
        const isHovered = hovered === idx;

        return (
          <Link
            key={item.name}
            href={item.link}
            onMouseEnter={() => setHovered(idx)}
            onClick={() => onItemClick?.(item)}
            className='relative rounded-full px-4 py-2 text-sm font-medium text-white/55 transition-colors duration-200 hover:text-white'
          >
            {isHovered && (
              <motion.span
                layoutId='navbar-hover'
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 30,
                }}
                className='absolute inset-0 -z-10 rounded-full ring-1 ring-violet-400/10'
              />
            )}

            <span className='relative z-10'>{item.name}</span>
          </Link>
        );
      })}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        y: visible ? 4 : 0,
        backgroundColor: visible
          ? 'rgba(10, 8, 16, 0.78)'
          : 'rgba(10, 8, 16, 0.25)',
        borderColor: visible
          ? 'rgba(139, 92, 246, 0.18)'
          : 'rgba(255,255,255,0.06)',
        boxShadow: visible
          ? '0 10px 35px rgba(0,0,0,0.3)'
          : '0 0 0 rgba(0,0,0,0)',
        backdropFilter: 'blur(16px)',
      }}
      transition={{
        type: 'spring',
        stiffness: 180,
        damping: 28,
      }}
      className={cn(
        'relative z-[100] mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col rounded-2xl border px-3 py-2 lg:hidden',
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div className={cn('flex w-full items-center justify-between', className)}>
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            height: 0,
            y: -8,
          }}
          animate={{
            opacity: 1,
            height: 'auto',
            y: 0,
          }}
          exit={{
            opacity: 0,
            height: 0,
            y: -8,
          }}
          transition={{
            duration: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={cn(
            'absolute inset-x-0 top-[calc(100%+0.5rem)] z-[110] overflow-hidden rounded-2xl border border-violet-400/15 bg-[#0a0810]/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl',
            className,
          )}
        >
          <div className='relative z-[120] flex flex-col gap-1'>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type='button'
      onClick={onClick}
      aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={isOpen}
      className='flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition-colors hover:border-violet-400/30 hover:bg-violet-500/10'
    >
      {isOpen ? (
        <IconX className='h-5 w-5' />
      ) : (
        <IconMenu2 className='h-5 w-5' />
      )}
    </button>
  );
};

// Logo
export const NavbarLogo = () => {
  return (
    <Link
      href='#home'
      className='relative z-20 mr-4 flex items-center gap-2.5 px-3 py-1'
    >
      <div className='relative h-10 w-9 flex-shrink-0'>
        <div className='absolute bottom-0 right-0 h-[30px] w-[30px] rounded-[9px] bg-purple-900' />
        <div className='absolute left-0 top-1 flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-violet-500'>
          <span className='text-[11px] font-bold tracking-widest text-white'>
            LW
          </span>
        </div>
      </div>

      {/* Name */}
      <span className='text-lg font-extrabold tracking-tight text-white'>
        Leonardo Wilis
      </span>
    </Link>
  );
};

export const NavbarButton = ({
  href,
  children,
  className,
  variant = 'primary',
  onClick,
}: NavbarButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5';

  const variantStyles = {
    primary:
      'bg-white text-black shadow-[0_8px_25px_rgba(255,255,255,0.08)] hover:bg-violet-400 hover:text-white hover:shadow-[0_8px_30px_rgba(139,92,246,0.25)]',

    secondary:
      'border border-white/10 bg-white/[0.03] text-white hover:border-violet-400/30 hover:bg-violet-500/10',

    dark: 'bg-black text-white',

    gradient:
      'bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 text-white shadow-[0_8px_30px_rgba(139,92,246,0.2)] hover:shadow-[0_10px_35px_rgba(139,92,246,0.3)]',
  };

  const classes = cn(baseStyles, variantStyles[variant], className);

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type='button' className={classes}>
      {children}
    </button>
  );
};
