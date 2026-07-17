import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Bohdan Hembatiuk Portfolio',
  description: 'Bohdan Hembatiuk — Full Stack Developer. C# / .NET, React, Next.js, TypeScript.',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Bohdan Hembatiuk Portfolio',
    description: 'Bohdan Hembatiuk — Full Stack Developer. C# / .NET, React, Next.js, TypeScript.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bohdan Hembatiuk Portfolio',
    description: 'Bohdan Hembatiuk — Full Stack Developer. C# / .NET, React, Next.js, TypeScript.',
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