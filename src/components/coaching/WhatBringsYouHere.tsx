import React from 'react';

const scenarios = [
  {
    tag: 'The Crossroads',
    title: 'Successful on paper, but the compass has shifted',
    desc: 'You have spent 10 to 15 years building the title, the salary, and the reputation. By external metrics you have arrived. Yet the daily work no longer moves you, and continuing on autopilot feels increasingly costly.',
    context: '“I have a good role and objectively I am doing well, but I know I cannot continue like this. I just do not know what the next chapter looks like yet.”',
  },
  {
    tag: 'The High-Stakes Dilemma',
    title: 'Carrying a major decision with no one to talk to',
    desc: 'You cannot discuss exit thoughts, executive burnout, or organizational friction with your colleagues, your board, or your team. You need a discreet thinking partner completely untangled from your internal corporate politics.',
    context: 'A private space to test ideas, weigh trade-offs, and speak plainly without damaging your professional standing.',
  },
  {
    tag: 'The Calculated Leap',
    title: 'Planning a career transition without gambling your security',
    desc: 'You want out of corporate exhaustion, but you refuse to sacrifice the financial foundation you worked hard to build. You need an honest market reality check to know what your experience is actually worth outside the org chart.',
    context: 'Evaluating realistic compensation, financial runway, and positioning before you hand in your notice.',
  },
  {
    tag: 'Cross-Border Complexity',
    title: 'International relocation or redefining your identity abroad',
    desc: 'Adapting to a new country, navigating Central European or Swiss business culture, or managing an international career across borders. Finding your footing in a new market without losing your core strengths.',
    context: 'English-speaking executive guidance grounded in cross-cultural fluency and global business acumen.',
  },
];

export default function WhatBringsYouHere() {
  return (
    <div id="what-brings-you-here" className="section-light-bg" style={{ padding: '96px 0', background: '#FAF7F0' }}>
      <div className="base-container w-container">
        <div className="section-title-wrap">
          <div
            className="case-study-badge"
            style={{
              marginBottom: '12px',
              background: '#FFFFFF',
              color: 'var(--gold-deep)',
              border: '1px solid rgba(211,175,101,0.3)',
            }}
          >
            Client Situations
          </div>
          <h2 className="flex-title" style={{ justifyContent: 'center' }}>
            <span className="h2-span">What might bring you here?</span>
          </h2>
          <p className="item-description-gray" style={{ maxWidth: '720px', margin: '14px auto 0 auto', textAlign: 'center' }}>
            Coaching is not for fixing broken careers. It is for accomplished professionals and leaders facing moments where the next move requires greater clarity, courage, and strategic certainty.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginTop: '48px',
          }}
        >
          {scenarios.map((s, idx) => (
            <div
              key={idx}
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(211,175,101,0.2)',
                borderRadius: '16px',
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 16px rgba(36,30,20,0.04)',
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'var(--gold-deep)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  display: 'block',
                  marginBottom: '12px',
                }}
              >
                {s.tag}
              </span>
              <h3
                style={{
                  fontSize: 'var(--t-card)',
                  lineHeight: 'var(--lh-head)',
                  color: 'var(--text-dark)',
                  marginBottom: '14px',
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 'var(--t-meta)',
                  lineHeight: 'var(--lh-body)',
                  color: 'var(--par-color)',
                  marginBottom: '20px',
                  flexGrow: 1,
                }}
              >
                {s.desc}
              </p>
              <div
                style={{
                  background: 'rgba(211,175,101,0.08)',
                  borderRadius: '10px',
                  padding: '14px 16px',
                  borderLeft: '3px solid var(--gold-deep)',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: '13px',
                    fontStyle: 'italic',
                    color: 'var(--text-dark)',
                    lineHeight: 1.45,
                  }}
                >
                  {s.context}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transitional banner */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ fontSize: 'var(--t-lede)', color: 'var(--text-dark)', marginBottom: '16px', fontStyle: 'italic' }}>
            &ldquo;Sometimes, one question is enough to interrupt the familiar. What do you actually want to do?&rdquo;
          </p>
          <a href="#coaching-inquiry" className="primary-button w-button">
            Tell me what you are navigating
          </a>
        </div>
      </div>
    </div>
  );
}
