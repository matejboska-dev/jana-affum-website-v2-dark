'use client';
import { useState } from 'react';

const chevron = { width: 13, height: 13, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

/** Homepage-style testimonial card with a clamped quote and a Read more toggle; the author is anonymous (NDA). */
export default function QuoteCard({ quote, name, role, image }: { quote: string; name: string; role: string; image?: string }) {
  const [open, setOpen] = useState(false);
  return <div className="card quote-card">
    <div className="quote-mark" aria-hidden="true">&ldquo;</div>
    <div className="quote-text" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div className={open ? undefined : 'quote-text-clamped'} style={{ whiteSpace: 'pre-line', color: 'rgba(255, 255, 255, 0.85)' }}>{quote}</div>
      <div style={{ marginTop: 4 }}>
        <button type="button" aria-expanded={open} onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', padding: '4px 0', color: 'var(--primary)', fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, letterSpacing: '0.02em' }}>
          <span>{open ? 'Show less' : 'Read more'}</span>
          <svg {...chevron} aria-hidden="true" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}><polyline points="6 9 12 15 18 9"/></svg>
        </button>
      </div>
    </div>
    <div className="quote-author">
      {image
        // eslint-disable-next-line @next/next/no-img-element
        ? <img src={image} loading="lazy" alt={name} className="quote-avatar"/>
        : <div className="quote-avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(211, 175, 101, 0.15)', border: '1px solid var(--primary)', color: 'var(--primary)', flexShrink: 0 }} aria-label="Identity protected under NDA">
          <svg {...chevron} width={20} height={20} strokeWidth={1.8}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>}
      <div><h4 className="quote-name">{name}</h4><p className="quote-role">{role}</p></div>
    </div>
  </div>;
}
