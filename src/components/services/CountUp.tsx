'use client';
import { useEffect, useRef, useState } from 'react';

/** Counts up once when scrolled into view. Server render and reduced motion show the final figure. */
export default function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    setValue(0);
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / 1500, 1);
        setValue(Math.round(to * (1 - Math.pow(2, -10 * t))));
        if (t < 1) frame = requestAnimationFrame(tick); else setValue(to);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(frame); };
  }, [to]);
  return <span ref={ref}>{value.toLocaleString('en-US')}{suffix}</span>;
}
