import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import s from './not-found.module.css';

export const metadata: Metadata = {
  title: 'Page not found | Jana Affum',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" className={s.main}>
        <div className={s.glow} aria-hidden="true" />
        <div className={s.grain} aria-hidden="true" />
        <div className={s.inner}>
          <span className={s.eyebrow}>Error 404</span>
          <p className={s.code} aria-hidden="true">
            <span className={s.digit}>4</span>
            <span className={`${s.digit} ${s.zero}`}>0</span>
            <span className={s.digit}>4</span>
          </p>
          <h1 className={s.title}>
            Even the best search <em>comes up empty</em> sometimes.
          </h1>
          <p className={s.lead}>
            This page has moved, or never existed. Let&rsquo;s get you back to something that does.
          </p>
          <div className={s.actions}>
            <Link href="/" className={s.primary}>Back to home</Link>
            <Link href="/recruitment" className={s.ghost}>Recruitment</Link>
            <Link href="/coaching" className={s.ghost}>Coaching</Link>
          </div>
          <div className={s.rule} aria-hidden="true" />
          <p className={s.hint}>Still lost? janaaffum@gmail.com</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
