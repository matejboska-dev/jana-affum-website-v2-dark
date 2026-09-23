'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import s from './SiteChrome.module.css';

const KEY = 'ja-cookie-notice';

/** Technical-cookies notice. The site sets no analytics or marketing cookies, so this informs rather than asks. */
export default function CookieBar() {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY);
      if (!stored) {
        setShow(true);
      }
    } catch {
      setShow(true);
    }
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    if (!show || !ref.current) { root.style.removeProperty('--cookie-h'); return; }
    root.style.setProperty('--cookie-h', `${ref.current.offsetHeight + 12}px`);
    return () => { root.style.removeProperty('--cookie-h'); };
  }, [show]);
  if (!show) return null;
  function accept() {
    try { localStorage.setItem(KEY, 'dismissed'); } catch { /* storage unavailable: the notice simply shows again next visit */ }
    setShow(false);
  }
  return <div ref={ref} className={s.cookie} role="region" aria-label="Cookie notice">
    <p>This site uses only technical cookies. No tracking, no ads. <Link href="/cookies">Details</Link></p>
    <button type="button" onClick={accept}>Understood</button>
  </div>;
}
