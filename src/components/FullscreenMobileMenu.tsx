'use client';

import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { usePathname, useRouter } from 'next/navigation';
import s from './FullscreenMobileMenu.module.css';

const destinations = [
  { href: '/', label: 'Home', note: 'The bigger picture' },
  { href: '/recruitment', label: 'Recruitment', note: 'Find your next person' },
  { href: '/coaching', label: 'Coaching', note: 'Find your next chapter' },
];

export default function FullscreenMobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const previousOverflow = useRef<string | null>(null);
  const pendingDestination = useRef<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    return () => {
      if (previousOverflow.current !== null) document.documentElement.style.overflow = previousOverflow.current;
    };
  }, []);

  useEffect(() => {
    const modal = dialog.current;
    if (!mounted || !modal) return;
    let frame = 0;
    let timer: ReturnType<typeof setTimeout>;
    if (open) {
      pendingDestination.current = null;
      if (!modal.open) {
        previousFocus.current = document.activeElement as HTMLElement;
        previousOverflow.current = document.documentElement.style.overflow;
        document.documentElement.style.overflow = 'hidden';
        modal.showModal();
        closeButton.current?.focus({ preventScroll: true });
      }
      // Let the initial closed pose paint before the reveal begins.
      frame = requestAnimationFrame(() => { frame = requestAnimationFrame(() => setVisible(true)); });
    } else if (modal.open) {
      setVisible(false);
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      timer = setTimeout(() => {
        modal.close();
        if (previousOverflow.current !== null) {
          document.documentElement.style.overflow = previousOverflow.current;
          previousOverflow.current = null;
        }
        previousFocus.current?.focus({ preventScroll: true });
        const destination = pendingDestination.current;
        pendingDestination.current = null;
        if (destination?.startsWith('#')) {
          const target = document.getElementById(destination.slice(1));
          if (target) {
            history.pushState(null, '', destination);
            const oldTabIndex = target.getAttribute('tabindex');
            target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
            target.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth', block: 'start' });
            target.addEventListener('blur', () => {
              if (oldTabIndex === null) target.removeAttribute('tabindex');
              else target.setAttribute('tabindex', oldTabIndex);
            }, { once: true });
          }
        } else if (destination) router.push(destination);
      }, reduced ? 0 : 420);
    }
    return () => { cancelAnimationFrame(frame); clearTimeout(timer); };
  }, [open, mounted, router]);

  function navigate(event: MouseEvent<HTMLAnchorElement>, destination: string) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    pendingDestination.current = destination;
    onClose();
  }

  if (!mounted) return null;
  return createPortal(
    <dialog ref={dialog} id="fullscreen-mobile-navigation" className={`${s.overlay} ${visible ? s.visible : ''}`} aria-label="Main navigation" onCancel={event => { event.preventDefault(); onClose(); }}>
      <div className={s.atmosphere} aria-hidden="true"/>
      <div className={s.inner}>
        <div className={s.top}>
          <a className={s.brand} href="/" onClick={event => navigate(event, '/')} aria-label="Jana Affum home"><img src="/images/jana-logo-mark.png" alt="" width="40" height="44"/><span>Jana Affum</span></a>
          <button ref={closeButton} type="button" className={s.close} onClick={onClose} aria-label="Close navigation"><span>Close</span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"><path d="m5 5 14 14M19 5 5 19"/></svg></button>
        </div>
        <div className={s.main}>
          <p className={s.eyebrow}>Your next chapter starts here</p>
          <nav className={s.links} aria-label="Mobile navigation">
            {destinations.map((item, index) => <a key={item.href} className={s.link} style={{ '--index': index } as React.CSSProperties} href={item.href} aria-current={pathname === item.href ? 'page' : undefined} onClick={event => navigate(event, item.href)}>
              <span className={s.number}>0{index + 1}</span><span className={s.linkWords}><span className={s.linkTitle}>{item.label}</span><span className={s.linkNote}>{item.note}</span></span><svg className={s.arrow} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg>
            </a>)}
          </nav>
        </div>
        <div className={s.bottom}>
          <a className={s.cta} href="https://calendly.com/janaaffum/15min" target="_blank" rel="noopener noreferrer"><span>Let’s have a conversation</span><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6"/></svg></a>
          <p className={s.callNote}>15 minutes. Complimentary. No obligation.</p>
          <div className={s.footer}><a href="mailto:janaaffum@gmail.com">janaaffum@gmail.com</a><span>English / Czech</span></div>
        </div>
      </div>
    </dialog>, document.body,
  );
}
