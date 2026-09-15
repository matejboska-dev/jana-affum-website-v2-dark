import React from 'react';

export default function CoachingProof() {
  return (
    <section id="coaching-proof" className="section-reviews" style={{ padding: '96px 0' }}>
      <div className="base-container w-container">
        <div className="section-title-wrap large">
          <div
            className="case-study-badge"
            style={{
              marginBottom: '14px',
              background: 'rgba(211,175,101,0.2)',
              color: 'var(--primary)',
              border: '1px solid rgba(211,175,101,0.3)',
            }}
          >
            Client Experience
          </div>
          <h2 id="client-stories" className="h2-hero-title-white">
            <span className="h2-span light">Confidential impact:</span> What clients say
          </h2>
          <p className="item-description-white" style={{ maxWidth: '680px', margin: '14px auto 0 auto' }}>
            Because our work touches sensitive corporate positions, board negotiations, and personal crossroads, most engagements remain strictly private.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div
          style={{
            maxWidth: '740px',
            margin: '0 auto 48px auto',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(211, 175, 101, 0.25)',
            borderRadius: '20px',
            padding: '44px 40px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(18px, 1.8vw, 22px)',
              lineHeight: '1.6',
              color: '#FFFFFF',
              fontStyle: 'italic',
              marginBottom: '28px',
            }}
          >
            &ldquo;Jana rocks! She is both intellectually sound and passionate about her work.
            Also she is humble and respectful of others, a person I highly respect and recommend.&rdquo;
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/testimonials/brian-piper.jpg"
              alt="Brian S. Piper"
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid var(--primary)',
              }}
              loading="lazy"
            />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '17px', fontWeight: 700, color: '#FFFFFF' }}>
                Brian S. Piper
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)' }}>
                Executive Client &bull; International Business
              </div>
            </div>
          </div>
        </div>

        {/* Anti-pitch Guarantee Band */}
        <div
          style={{
            maxWidth: '740px',
            margin: '0 auto',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '16px',
            padding: '28px 32px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(211, 175, 101, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', color: '#FFFFFF' }}>
              The Anti-Pitch Commitment
            </h4>
            <p style={{ margin: 0, fontSize: 'var(--t-meta)', color: 'rgba(255,255,255,0.75)', lineHeight: 'var(--lh-body)' }}>
              Honesty is the foundation of this work. If private coaching is not what you need right now,
              Jana will tell you directly on your initial call and suggest more appropriate paths. No follow-up pressure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
