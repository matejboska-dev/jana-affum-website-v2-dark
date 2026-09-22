'use client';
import { useEffect, useRef, useState } from 'react';
import s from './SiteChrome.module.css';

const KEY = 'ja-cookie-notice';
const EXPIRY_MS = 365 * 24 * 60 * 60 * 1000; // 12 months (365 days)

/** Technical-cookies notice. The site sets no analytics or marketing cookies, so this informs rather than asks. */
export default function CookieBar() {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY);
      if (!stored) {
        setShow(true);
        return;
      }
      const timestamp = Number(stored);
      if (!timestamp || isNaN(timestamp) || Date.now() - timestamp > EXPIRY_MS) {
        localStorage.removeItem(KEY);
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
    try { localStorage.setItem(KEY, String(Date.now())); } catch { /* storage unavailable: the notice simply shows again next visit */ }
    setShow(false);
  }
  return <div ref={ref} className={s.cookie} role="region" aria-label="Cookie notice">
    <p>This site uses only technical cookies. No tracking, no ads. <a href="/cookies">Details</a></p>
    <button type="button" onClick={accept}>Understood</button>
  </div>;
}
