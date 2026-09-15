'use client';

import React, { useState } from 'react';

const faqs = [
  {
    q: 'How is this different from a standard recruitment agency?',
    a: 'Most agencies match keywords on a CV. I bring ten years of hiring intelligence and a coaching-trained ear to every search: understanding what genuinely drives a candidate to move, where expectations might diverge, and what could weaken their commitment after an offer. You receive a small, thoroughly vetted shortlist, not a stack of CVs to sort through yourself.',
  },
  {
    q: 'Do you recruit outside the Czech Republic?',
    a: 'Yes. My search work spans the Czech Republic, Switzerland, and clients across Europe, alongside international and remote mandates. I specialize in Data, AI, Cloud, Cybersecurity, and Software leadership roles, and conversations run in Czech or English depending on what works for your team.',
  },
  {
    q: 'How does coaching with a former recruiter differ from traditional career coaching?',
    a: 'Most career coaches work from theoretical frameworks or life-coaching models. Because I spent ten years on the hiring side of the table managing executive IT recruitment across 9 countries, our work is backed by real hiring intelligence: how decision-makers evaluate senior talent, what the market actually pays, and how to position your track record to negotiate maximum compensation.',
  },
  {
    q: 'What happens during the free 20-minute fit call? Is there really no pitch?',
    a: 'There is zero pitch and zero pressure. We spend twenty minutes evaluating your situation, where you feel stuck, and what move you are considering. If coaching is a fit and can solve your problem, I explain how we would work together. If it is not what you need, I will tell you directly and point you toward better resources.',
  },
  {
    q: 'Can I participate in coaching while still employed in my full-time corporate role?',
    a: 'Yes. The majority of my clients are currently in demanding senior corporate positions. All sessions and async messaging are strictly confidential, flexible around executive schedules, and designed to map out a safe transition plan without risking your current employment or reputation.',
  },
  {
    q: 'How do I know if I need career transition coaching versus therapy or medical leave?',
    a: 'Coaching focuses on career strategy, market value, executive decision-making, and navigating professional transitions. It is not psychotherapy, psychiatric care, or clinical crisis support. If you are experiencing clinical depression or severe medical exhaustion, healthcare professionals must come first.',
  },
  {
    q: 'What if I decide during coaching that I want to stay in corporate?',
    a: "That is a completely successful outcome. Strategic clarity often reveals that the career itself isn't the problem, but rather specific boundaries, compensation misalignment, or internal positioning. The goal is to give you certainty and leverage, whether you choose to transition or stay.",
  },
  {
    q: 'How are sessions conducted and what is the typical structure?',
    a: 'All sessions take place 1-on-1 via secure video call. Depending on your format (single 60-minute intensive or multi-session transition programme), we conduct skills audits, market reality checks, CV & LinkedIn overhauls, and interview preparation, with ongoing async WhatsApp/email support between calls.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div id="faq" className="section-light-bg" style={{ padding: '96px 0' }}>
      <div className="base-container w-container">
        <div className="section-head">
          <span className="eyebrow">Questions</span>
          <h2 id="faq-heading" className="flex-title">
            <span className="h2-span">Frequently</span> asked questions
          </h2>
          <p className="item-description-gray">
            Direct answers about hiring, coaching, confidentiality, and fit.
          </p>
        </div>

        <div className="faq-accordion-wrap">
          <div className="faq-accordion" id="faqAccordion">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div className={`faq-item ${isOpen ? 'active' : ''}`} key={idx}>
                  <button
                    className="faq-question"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggle(idx)}
                  >
                    <span>{faq.q}</span>
                    <div className="faq-icon-wrap" aria-hidden="true">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                          transform: isOpen ? 'rotate(45deg)' : 'none',
                          transition: 'transform 0.25s ease',
                        }}
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                  </button>
                  <div
                    className="faq-answer"
                    style={{
                      maxHeight: isOpen ? '400px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.35s ease',
                    }}
                  >
                    <p>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
