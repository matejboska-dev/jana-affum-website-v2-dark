'use client';
import { useEffect, useState } from 'react';
import s from './SiteChrome.module.css';

/** Slim mobile booking bar: appears after the hero, hides again once the contact section is on screen. */
export default function StickyBook() {
  const [past, setPast] = useState(false);
  const [atContact, setAtContact] = useState(false);
  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > Math.max(480, window.innerHeight * 0.7));
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const target = document.getElementById('booking');
    const io = target ? new IntersectionObserver(([e]) => setAtContact(e.isIntersecting), { threshold: 0.1 }) : null;
    if (target) io?.observe(target);
    return () => { window.removeEventListener('scroll', onScroll); io?.disconnect(); };
  }, []);
  const show = past && !atContact;
  return <a className={s.sticky} data-show={show} href="https://calendly.com/janaaffum/15min" target="_blank" rel="noopener noreferrer" tabIndex={show ? 0 : -1} aria-hidden={!show}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    <span>Book a free 15-minute call</span>
  </a>;
}
