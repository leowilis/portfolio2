'use client';

import dynamic from 'next/dynamic';

const ParticlesBackground = dynamic(
  () => import('@/src/components/ui/ParticlesBackground'),
  { ssr: false },
);

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ParticlesBackground />

      <div
        style={{ position: 'relative', zIndex: 1 }}
        className='flex min-h-full flex-col'
      >
        {children}
      </div>
    </>
  );
}
