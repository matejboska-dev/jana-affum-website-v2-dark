'use client';
import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import s from './services.module.css';

/** Fades content up once as it scrolls into view. Content stays visible without JS and under reduced motion. */
export default function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
    el.dataset.reveal = 'pending';
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.dataset.reveal = 'in'; io.disconnect(); }
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`${s.reveal} ${className}`} style={{ '--d': `${delay}ms` } as CSSProperties}>{children}</div>;
}
