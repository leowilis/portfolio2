import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import ClientProviders from '@/src/components/layout/ClientProviders';
import MainNavbar from '@/src/components/layout/Navbar';
import ScrollRestoration from '@/src/components/ScrollRestoration/ScrollRestoration';
import PageLoader from '@/src/components/loading/PageLoader';
import Footer from '@/src/components/layout/Footer';
import StructuredData from '@/src/components/seo/StructuredData';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://leonardo-wilis-portfolio.vercel.app'),

  title: {
    default: 'Leonardo Wilis | Frontend Developer',
    template: '%s | Leonardo Wilis',
  },

  description:
    'Leonardo Wilis is a Frontend Developer focused on building modern, responsive, and high-performance web experiences.',

  keywords: [
    'Leonardo Wilis',
    'Frontend Developer',
    'Frontend Engineer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Web Developer',
  ],

  authors: [
    {
      name: 'Leonardo Wilis',
    },
  ],

  creator: 'Leonardo Wilis',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Leonardo Wilis | Frontend Developer',
    description:
      'Frontend Developer focused on modern, responsive, and high-performance web experiences.',
    siteName: 'Leonardo Wilis',
    url: 'https://leonardo-wilis-portfolio.vercel.app',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Leonardo Wilis — Frontend Developer',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Leonardo Wilis | Frontend Developer',
    description:
      'Frontend Developer focused on modern, responsive, and high-performance web experiences.',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className='min-h-full flex flex-col bg-background text-foreground'>
        <ClientProviders>
          <StructuredData />
          <PageLoader />
          <MainNavbar />
          <ScrollRestoration />

          <main className='flex-1'>{children}</main>

          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
