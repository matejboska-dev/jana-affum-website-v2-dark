import React from 'react';
import Link from 'next/link';

export default function Signposts() {
  return (
    <div id="services" className="section" style={{ padding: '96px 0' }}>
      <div className="base-container w-container">
        <div className="section-title-wrap">
          <h2 className="flex-title" style={{ justifyContent: 'center' }}>
            <span className="h2-span">Two paths,</span> one trusted partner
          </h2>
          <p
            className="item-description-gray"
            style={{ margin: '12px auto 0 auto', textAlign: 'center' }}
          >
            Whether you are building a team or rethinking your own direction, the work begins with one honest conversation.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '32px',
            flexWrap: 'wrap',
          }}
        >
          {/* Card 1: For Companies */}
          <div
            style={{
              backgroundColor: '#FAF7F0',
              border: '1px solid rgba(211,175,101,0.25)',
              borderRadius: '20px',
              padding: '48px 40px',
              flex: '1 1 420px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              className="case-study-badge"
              style={{ alignSelf: 'flex-start', marginBottom: '16px' }}
            >
              International Recruitment & Search
            </div>
            <h3
              style={{
                fontSize: 'var(--t-subhead)',
                lineHeight: 'var(--lh-head)',
                color: 'var(--text-dark)',
                marginTop: 0,
                marginBottom: '16px',
              }}
            >
              Find and assess hard-to-reach talent with greater depth
            </h3>
            <p
              style={{
                fontSize: 'var(--t-body)',
                lineHeight: 'var(--lh-body)',
                color: 'var(--par-color)',
                marginBottom: '32px',
              }}
            >
              A boutique, coaching-informed recruitment practice for companies hiring key technology and leadership roles across Europe and beyond. Fewer candidates, deeper insight, better decisions.
            </p>
            <div className="link-wrap" style={{ marginTop: 'auto' }}>
              <Link
                href="/recruitment"
                className="cta-pill-button"
              >
                <span>Explore recruitment</span>
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
              </Link>
            </div>
          </div>

          {/* Card 2: For Individuals */}
          <div
            style={{
              backgroundColor: 'var(--text-dark)',
              border: '1px solid rgba(211,175,101,0.25)',
              borderRadius: '20px',
              padding: '48px 40px',
              flex: '1 1 420px',
              color: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              className="case-study-badge"
              style={{
                color: 'var(--primary)',
                alignSelf: 'flex-start',
                marginBottom: '16px',
              }}
            >
              Private Coaching & Thinking Partnership
            </div>
            <h3
              style={{
                fontSize: 'var(--t-subhead)',
                lineHeight: 'var(--lh-head)',
                color: '#FFFFFF',
                marginTop: 0,
                marginBottom: '16px',
              }}
            >
              Gain a discreet thinking partner for an important decision
            </h3>
            <p
              style={{
                fontSize: 'var(--t-body)',
                lineHeight: 'var(--lh-body)',
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '32px',
              }}
            >
              For leaders and professionals navigating career transitions, cross-cultural moves, or moments where the familiar path no longer fits. A confidential space to think out loud with someone who knows how the market works.
            </p>
            <div className="link-wrap" style={{ marginTop: 'auto' }}>
              <Link
                href="/coaching"
                className="cta-pill-button"
              >
                <span>Explore coaching</span>
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
