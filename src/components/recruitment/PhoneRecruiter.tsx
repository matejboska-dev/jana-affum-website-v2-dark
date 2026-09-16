import React from 'react';

export default function PhoneRecruiter() {
  return (
    <div id="phone-a-recruiter" className="section" style={{ padding: '80px 0', background: '#FAF7F0' }}>
      <div className="base-container w-container">
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            background: '#FFFFFF',
            border: '1px solid rgba(211,175,101,0.3)',
            borderRadius: '20px',
            padding: '48px 44px',
            boxShadow: '0 8px 24px rgba(36,30,20,0.06)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--gold-deep)',
                display: 'inline-block',
              }}
            ></span>
            <span
              style={{
                fontSize: 'var(--t-label)',
                fontWeight: 700,
                color: 'var(--gold-deep)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--ls-label)',
              }}
            >
              For Recruiters &amp; Talent Leaders
            </span>
          </div>

          <h3
            style={{
              fontSize: 'var(--t-subhead)',
              lineHeight: 'var(--lh-head)',
              color: 'var(--text-dark)',
              marginBottom: '16px',
            }}
          >
            Phone a Recruiter &bull; Confidential Mentoring
          </h3>

          <p
            style={{
              fontSize: 'var(--t-body)',
              lineHeight: 'var(--lh-body)',
              color: 'var(--par-color)',
              marginBottom: '16px',
            }}
          >
            Sometimes you do not need an agency — you need an experienced, objective second opinion.
            For boutique recruitment founders, independent headhunters, and in-house TA leads who want
            a discreet sounding board without internal corporate politics.
          </p>

          <p
            style={{
              fontSize: 'var(--t-body)',
              lineHeight: 'var(--lh-body)',
              color: 'var(--par-color)',
              marginBottom: '28px',
            }}
          >
            Whether unblocking a stalled search, diagnosing why candidate engagement has slowed,
            or pressure-testing a complex international package negotiation — 60 minutes of unvarnished advice
            grounded in ten years of international recruitment.
          </p>

          <div className="link-wrap">
            <a href="#hiring-inquiry" className="cta-pill-button">
              <span>Discuss recruitment mentoring</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
