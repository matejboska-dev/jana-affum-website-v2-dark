'use client';

import React, { useState } from 'react';

const faqs = [
  {
    q: 'How is this different from a standard recruitment agency?',
    a: 'Many traditional agencies focus primarily on matching keywords to a CV. I bring ten years of hiring intelligence and a coaching-trained ear to every search, exploring what genuinely motivates a candidate to move, where expectations may diverge, and what could weaken their commitment after receiving an offer. You receive a small, thoroughly vetted shortlist — not a stack of CVs to sort through yourself.',
  },
  {
    q: 'Do you work internationally?',
    a: 'Yes. I work with clients across Europe and worldwide, including international and remote mandates. My recruitment experience spans multiple industries and functions, including technology, finance, healthcare, sales, marketing, and leadership roles. Conversations run in Czech or English depending on what works for you.',
  },
  {
    q: 'How does coaching with a former recruiter differ from traditional career coaching?',
    a: 'Many career coaches work primarily with coaching frameworks. I complement these with ten years of international recruitment experience and first-hand insight into how hiring decisions are made. Our work is grounded in how decision-makers evaluate experienced professionals, how the market values their expertise, and how to position and communicate their track record effectively.',
  },
  {
    q: 'What happens during the free 15-minute fit call? Is there really no pitch?',
    a: 'There is zero pitch and zero pressure. We spend fifteen minutes evaluating your situation, where you feel stuck, and what move you are considering. If coaching is a fit and can solve your problem, I explain how we would work together. If it is not what you need, I will tell you directly and point you toward better resources.',
  },
  {
    q: 'Can I participate in coaching while still employed in my full-time corporate role?',
    a: 'Yes. The majority of my clients are currently in demanding senior corporate positions. All sessions and async messaging are strictly confidential, flexible around busy schedules, and designed to map out a safe transition plan without risking your current employment or reputation.',
  },
  {
    q: 'How do I know if I need career transition coaching versus therapy or medical leave?',
    a: 'Coaching supports personal and professional decision-making, greater clarity, meaningful change, and navigating important transitions. It is not psychotherapy, psychiatric treatment, medical care, or crisis support. If you are experiencing significant emotional distress or concerns about your mental or physical health, please seek support from a qualified healthcare professional.',
  },
  {
    q: 'What if I decide during coaching that I want to stay in corporate?',
    a: "That is a completely successful outcome. Strategic clarity often reveals that the career itself isn't the problem, but rather specific boundaries, compensation misalignment, or internal positioning. The goal is to give you certainty and leverage, whether you choose to transition or stay.",
  },
  {
    q: 'How are sessions conducted and what is the typical structure?',
    a: 'All sessions take place one-to-one via video call. The structure is tailored to your situation and may range from a single 60-minute intensive to a multi-session coaching programme. For career-focused engagements, our work may include clarifying your strengths and direction, evaluating your market positioning, refining your CV and LinkedIn profile, interview preparation, and agreed email or WhatsApp support between sessions.',
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
