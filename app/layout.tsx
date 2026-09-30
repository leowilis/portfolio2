import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Footer from '@/src/components/layout/Footer';
import Navbar from '@/src/components/layout/Navbar';
import StructuredData from '@/src/components/seo/StructuredData';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

const SITE_URL = 'https://leonardo-wilis-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Leonardo Wilis — Frontend Developer',
    template: '%s — Leonardo Wilis',
  },

  description:
    'Leonardo Wilis is a frontend developer focused on building fast, accessible, and maintainable web experiences with modern frontend technologies.',

  applicationName: 'Leonardo Wilis Portfolio',

  authors: [
    {
      name: 'Leonardo Wilis',
      url: SITE_URL,
    },
  ],

  creator: 'Leonardo Wilis',

  keywords: [
    'Leonardo Wilis',
    'Frontend Developer',
    'Frontend Developer Indonesia',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Web Developer',
  ],

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Leonardo Wilis',
    title: 'Leonardo Wilis — Frontend Developer',
    description:
      'Frontend developer focused on building fast, accessible, and maintainable web experiences.',
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
    title: 'Leonardo Wilis — Frontend Developer',
    description:
      'Frontend developer focused on building fast, accessible, and maintainable web experiences.',
    images: ['/og-image.png'],
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
      className={`${inter.variable} ${jetBrainsMono.variable} dark`}
    >
      <body className='min-h-screen bg-background font-sans text-foreground antialiased'>
        <StructuredData />
        <Navbar />
        <main className='min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
