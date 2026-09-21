import type { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import s from './LegalPage.module.css';

export const legalUpdated = '21 September 2026';

export default function LegalPage({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return <>
    <Navbar/>
    <main id="main-content" className={s.page}>
      <div className="base-container w-container"><article className={s.article}>
        <span className="eyebrow">Legal</span>
        <h1>{title}</h1>
        <p className={s.lead}>{intro}</p>
        <p className={s.meta}>Last updated {legalUpdated}</p>
        {children}
      </article></div>
    </main>
    <Footer/>
  </>;
}
