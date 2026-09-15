import React from 'react';
import LogoMarquee from '@/components/LogoMarquee';

export default function RecruitmentHero() {
  return (
    <div id="recruitment-hero" className="banner-1" style={{ minHeight: 'auto', paddingBottom: '40px' }}>
      <div className="top-banner-cover">
        <div className="right-circle"></div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="right-img"
          src="/images/jana-recruitment-search.jpg"
          alt="Jana Affum - International Executive Search"
          loading="eager"
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
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
                Executive Search &amp; Talent Advisory
              </div>
              <h1 className="banner-1-title" style={{ fontSize: 'clamp(34px, 4.5vw, 56px)' }}>
                You do not need more CVs.{' '}
                <span className="h1-span">You need greater certainty.</span>
              </h1>
              <div className="banner-par-wrap">
                <p className="new-banner-text">
                  Boutique international recruitment and executive search for high-growth tech companies,
                  founders, and talent leaders. Specializing in hard-to-reach senior talent across
                  Data, AI, Cloud, Cybersecurity, and Software Leadership.
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
                  10+ years in international recruitment • Thousands of career conversations • Across borders and cultures
                </p>
              </div>
              <div className="button-con" style={{ marginTop: '28px' }}>
                <div className="no-srink-btn">
                  <a href="#hiring-inquiry" className="primary-button hero-v2-cta-primary w-button">
                    Tell me about the role you need to fill
                  </a>
                </div>
                <div className="link-wrap">
                  <a
                    href="#the-coaching-edge"
                    className="cta-pill-secondary"
                  >
                    <span>How the coaching edge works</span>
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

      {/* Focus specializations strip */}
      <div className="base-container w-container" style={{ marginTop: '36px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
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
              Primary Practice Areas
            </span>
            <p style={{ margin: 0, fontSize: 'var(--t-meta)', color: 'var(--text-dark)', fontWeight: 600 }}>
              Data &amp; Analytics &bull; Applied AI &bull; Cloud Architecture
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
              Seniority &amp; Scope
            </span>
            <p style={{ margin: 0, fontSize: 'var(--t-meta)', color: 'var(--text-dark)', fontWeight: 600 }}>
              Cybersecurity &bull; Engineering Leads &bull; VP &amp; C-Level Tech Roles
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
              Geography
            </span>
            <p style={{ margin: 0, fontSize: 'var(--t-meta)', color: 'var(--text-dark)', fontWeight: 600 }}>
              Czech Republic &bull; Switzerland &bull; Across Europe &amp; Global Remote
            </p>
          </div>
        </div>
      </div>

      {/* Text-only Trust Strip */}
      <div
        className="social-proof-strip"
        style={{
          background: '#FAF7F0',
          border: '1px solid rgba(211,175,101,0.2)',
          borderRadius: '16px',
          padding: '22px 20px',
          marginTop: '20px',
        }}
      >
        <div className="base-container w-container" style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '10px' }}>
            <span
              style={{
                fontSize: 'var(--t-label)',
                fontWeight: 700,
                color: 'var(--gold-deep)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--ls-label)',
              }}
            >
              EXPERIENCE WITH GLOBAL ENTERPRISES &amp; HIRING PARTNERS
            </span>
          </div>
          <LogoMarquee />
          <p
            style={{
              fontSize: '13px',
              color: 'var(--par-color)',
              margin: '6px auto 0 auto',
              maxWidth: '640px',
              lineHeight: 1.5,
              fontWeight: 400,
            }}
          >
            Direct employment, advisory, and international agency mandates across Europe, North
            America, Australia, and Africa. Conversations in Czech or English.
          </p>
        </div>
      </div>
    </div>
  );
}
