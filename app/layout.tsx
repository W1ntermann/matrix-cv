import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  metadataBase: new URL('https://hembatiuk.dev'),
  title: 'Bohdan Hembatiuk Portfolio',
  description: 'Bohdan Hembatiuk — Full Stack Developer. C# / .NET, React, Next.js, TypeScript.',
  icons: {
    icon: '/favicon.jpg',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Bohdan Hembatiuk Portfolio',
    description: 'Bohdan Hembatiuk — Full Stack Developer. C# / .NET, React, Next.js, TypeScript.',
    url: 'https://hembatiuk.dev',
    siteName: 'Bohdan Hembatiuk Portfolio',
    type: 'website',
    images: [
      {
        url: '/OG - image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bohdan Hembatiuk Portfolio',
    description: 'Bohdan Hembatiuk — Full Stack Developer. C# / .NET, React, Next.js, TypeScript.',
    images: ['/OG - image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}