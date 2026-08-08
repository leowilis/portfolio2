import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ClientProviders from '@/src/components/layout/ClientProviders';
import MainNavbar from '@/src/components/layout/Navbar';
import ScrollRestorationScript from '@/src/components/ScrollRestoration/ScrollRestorationScript';
import ScrollRestoration from '@/src/components/ScrollRestoration/ScrollRestoration';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Leonardo Wilis | Frontend Developer',
  description: 'Portfolio of Leonardo Wilis, Frontend Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className='min-h-full flex flex-col'>
        <ClientProviders>
          <MainNavbar />
          <ScrollRestorationScript />
          <ScrollRestoration />
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
