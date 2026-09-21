'use client';
import { useState } from 'react';
import { Button, Kicker } from './ServiceShared';
import s from './services.module.css';

export default function ServiceFaq({ items, note, number, about }: { items: string[][]; note?: string; number?: string; about: string }) {
  const [open, setOpen] = useState<number | null>(null);
  return <section id="faq" className={`${s.sec} ${s.cream}`} aria-labelledby="faq-heading"><div className="base-container w-container">
    <div className="section-head">
      {number && <Kicker n={number}>Questions</Kicker>}
      <h2 id="faq-heading"><span className="h2-span">Frequently asked</span> questions about {about}</h2>
      <p className="item-description-gray">Something else on your mind? <Button variant="link">Ask me directly</Button></p>
    </div>
    <div className="faq-accordion-wrap"><div className="faq-accordion">{items.map(([q, a], i) => {
      const isOpen = open === i;
      return <div key={q} className={`faq-item ${isOpen ? 'active' : ''}`}>
        <button className="faq-question" type="button" aria-expanded={isOpen} aria-controls={`faq-a-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
          <span>{q}</span>
          <div className="faq-icon-wrap" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
        </button>
        <div id={`faq-a-${i}`} className="faq-answer" aria-hidden={!isOpen}><p>{a}</p></div>
      </div>;
    })}</div></div>
    {note && <p className={s.notice}>{note}</p>}
  </div></section>;
}
