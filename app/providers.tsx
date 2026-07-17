'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import MatrixRain from '@/components/MatrixRain';
import Nav from '@/components/Nav';
import { LangProvider } from '@/contexts/LangContext';

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LangProvider>
          {/* Global background effects */}
          <MatrixRain />
          <div className="crt-overlay" />
          <div className="vignette" />

          {/* Navigation Layer */}
          <Nav />

          {/* Content Layer */}
          <main className="relative z-10 w-full min-h-screen">
            {children}
          </main>

          <Toaster />
        </LangProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}