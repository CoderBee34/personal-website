'use client';

import { Navigation } from '@/components/layout/Navigation';
import { useActiveSection } from '@/hooks/useActiveSection';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const { activeSection, scrollToSection } = useActiveSection('home');

  return (
    <>
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      {children}
    </>
  );
}
