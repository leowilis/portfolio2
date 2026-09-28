'use client';

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{ position: 'relative', zIndex: 1 }}
      className='flex min-h-full flex-col'
    >
      {children}
    </div>
  );
}
