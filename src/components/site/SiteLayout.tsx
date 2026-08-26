import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

type Page = 'home' | 'shop' | 'about' | 'contact';

export function SiteLayout({ children, current }: { children: ReactNode; current?: Page }) {
  return (
    <>
      <Header current={current} />
      {children}
      <Footer />
    </>
  );
}
