import type { ReactNode } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import s from './LegalPage.module.css';

export const legalUpdated = '22 September 2026';

const legalLinks = [
  { href: '/privacy', label: 'Privacy & GDPR' },
  { href: '/candidate-privacy', label: 'Candidate GDPR' },
  { href: '/cookies', label: 'Cookie Policy' },
  { href: '/terms', label: 'Website Terms' },
];

export function TableWrap({ children }: { children: ReactNode }) {
  return <div className={s.tableWrap}>{children}</div>;
}

export default function LegalPage({
  title,
  intro,
  updated = legalUpdated,
  currentPath,
  children,
}: {
  title: string;
  intro?: string;
  updated?: string;
  currentPath?: string;
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main id="main-content" className={s.page}>
        <div className="base-container w-container">
          <article className={s.article}>
            <span className="eyebrow">Legal &amp; Compliance</span>
            <nav className={s.legalNav} aria-label="Legal documents">
              {legalLinks.map((item) => {
                const isActive = currentPath === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${s.legalNavLink} ${isActive ? s.legalNavLinkActive : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <h1>{title}</h1>
            {intro && <p className={s.lead}>{intro}</p>}
            <p className={s.meta}>Last updated: {updated}</p>
            {children}
            <div className={s.legalBottomNav}>
              <span className={s.legalBottomLabel}>All legal documents</span>
              <div className={s.legalBottomLinks}>
                {legalLinks.map((item) => {
                  const isActive = currentPath === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`${s.legalBottomLink} ${isActive ? s.legalBottomLinkActive : ''}`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
