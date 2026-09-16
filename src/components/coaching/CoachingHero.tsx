import React from 'react';

export default function CoachingHero() {
  return (
    <div id="coaching-hero" className="banner-1" style={{ minHeight: 'auto', paddingBottom: '40px' }}>
      <div className="top-banner-cover">
        <div className="right-circle"></div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="right-img"
          src="/images/jana-fit.png"
          alt="Jana Affum - Private Coach & Thinking Partner"
          loading="eager"
          style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
        />
        <div className="base-container">
          <div className="flex-content">
            <div className="left-content">
              <div
                className="case-study-badge"
                style={{
                  alignSelf: 'flex-start',
                  marginBottom: '16px',
                  background: 'rgba(211,175,101,0.15)',
                  color: 'var(--gold-deep)',
                  border: '1px solid rgba(211,175,101,0.3)',
                }}
              >
                Private Coaching &bull; Thinking Partnership
              </div>
              <h1 className="banner-1-title" style={{ fontSize: 'clamp(34px, 4.5vw, 56px)' }}>
                For leaders and professionals navigating{' '}
                <span className="h1-span">change.</span>
              </h1>
              <div className="banner-par-wrap">
                <p className="new-banner-text">
                  A confidential thinking partnership for professionals at a career
                  crossroads, expats, and founders. Coaching grounded in ten years of
                  deciding who gets hired and how the market actually values talent.
                </p>
                <p
                  style={{
                    fontSize: 'var(--t-meta)',
                    lineHeight: 'var(--lh-meta)',
                    color: 'var(--par-color)',
                    marginTop: '14px',
                    marginBottom: 0,
                    fontWeight: 400,
                    maxWidth: 'var(--measure)',
                  }}
                >
                  Certified Business &amp; Life Coach &bull; NLP Practitioner &bull; 10+ Years International Recruitment
                </p>
              </div>
              <div className="button-con" style={{ marginTop: '28px' }}>
                <div className="no-srink-btn">
                  <a href="#coaching-inquiry" className="primary-button hero-v2-cta-primary w-button">
                    Book a complimentary 20-minute conversation
                  </a>
                </div>
                <div className="link-wrap">
                  <a
                    href="#what-brings-you-here"
                    className="cta-pill-secondary"
                  >
                    <span>What might bring you here</span>
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
        </div>
      </div>

      {/* Trust pill strip */}
      <div className="base-container w-container" style={{ marginTop: '36px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            background: '#FAF7F0',
            border: '1px solid rgba(211,175,101,0.25)',
            borderRadius: '16px',
            padding: '24px 28px',
          }}
        >
          <div>
            <span
              style={{
                fontSize: 'var(--t-label)',
                fontWeight: 700,
                color: 'var(--gold-deep)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--ls-label)',
                display: 'block',
                marginBottom: '6px',
              }}
            >
              Selective Practice
            </span>
            <p style={{ margin: 0, fontSize: 'var(--t-meta)', color: 'var(--text-dark)', fontWeight: 600 }}>
              Limited concurrent clients &bull; Personal and focused advisory
            </p>
          </div>
          <div>
            <span
              style={{
                fontSize: 'var(--t-label)',
                fontWeight: 700,
                color: 'var(--gold-deep)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--ls-label)',
                display: 'block',
                marginBottom: '6px',
              }}
            >
              The Recruiter Advantage
            </span>
            <p style={{ margin: 0, fontSize: 'var(--t-meta)', color: 'var(--text-dark)', fontWeight: 600 }}>
              Real hiring market intelligence &bull; Not textbook theory
            </p>
          </div>
          <div>
            <span
              style={{
                fontSize: 'var(--t-label)',
                fontWeight: 700,
                color: 'var(--gold-deep)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--ls-label)',
                display: 'block',
                marginBottom: '6px',
              }}
            >
              Language &amp; Format
            </span>
            <p style={{ margin: 0, fontSize: 'var(--t-meta)', color: 'var(--text-dark)', fontWeight: 600 }}>
              English &amp; Czech &bull; Prague in-person or global video
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
