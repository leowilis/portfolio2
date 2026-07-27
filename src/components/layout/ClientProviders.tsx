'use client';
import Cursor from '@/src/animations/Cursor';
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
      <Cursor />
      <div
        style={{ position: 'relative', zIndex: 1 }}
        className='flex flex-col min-h-full'
      >
        {children}
      </div>
    </>
  );
}
