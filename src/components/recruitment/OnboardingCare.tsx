import React from 'react';

export default function OnboardingCare() {
  return (
    <div id="onboarding-care" className="section" style={{ padding: '96px 0', background: '#FFFFFF' }}>
      <div className="base-container w-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '56px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Narrative */}
          <div>
            <div
              className="case-study-badge"
              style={{
                marginBottom: '14px',
                background: 'rgba(211,175,101,0.15)',
                color: 'var(--gold-deep)',
                border: '1px solid rgba(211,175,101,0.3)',
              }}
            >
              Post-Placement Protection
            </div>
            <h2 className="banner-1-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', marginBottom: '18px' }}>
              Onboarding Care:{' '}
              <span className="h1-span" style={{ fontStyle: 'italic' }}>
                Protecting your investment in months 1 to 3
              </span>
            </h2>
            <p className="item-description-gray" style={{ marginBottom: '20px' }}>
              Most recruitment mandates end on contract signature. But senior placements are rarely lost on technical ability — they fail due to early communication disconnects, unspoken cultural friction, or unmanaged role ambiguities in the first 90 days.
            </p>
            <p className="dark-text" style={{ fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)', color: 'var(--par-color)', marginBottom: '28px' }}>
              With Onboarding Care, Jana stays actively engaged through structured check-ins with both the candidate and your hiring executive. We detect small misalignments before they compound, ensuring the senior hire you worked hard to secure actually integrates, delivers, and stays.
            </p>
            <div className="link-wrap">
              <a href="#hiring-inquiry" className="cta-pill-button">
                <span>Ask about onboarding support</span>
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

          {/* Right Column: 3-Stage Timeline Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div
              style={{
                background: '#FAF7F0',
                border: '1px solid rgba(211,175,101,0.25)',
                borderRadius: '16px',
                padding: '24px 28px',
                borderLeft: '4px solid var(--gold-deep)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h4 style={{ margin: 0, fontSize: 'var(--t-card)', color: 'var(--text-dark)' }}>
                  Day 30 &bull; Early Pulse &amp; Alignment
                </h4>
                <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold-deep)', letterSpacing: '0.06em' }}>
                  Month 1
                </span>
              </div>
              <p style={{ margin: 0, fontSize: 'var(--t-meta)', color: 'var(--par-color)', lineHeight: 'var(--lh-body)' }}>
                Independent conversations with both candidate and hiring manager. Resolving initial tooling, onboarding, or team communication speed bumps while they are still effortless to fix.
              </p>
            </div>

            <div
              style={{
                background: '#FAF7F0',
                border: '1px solid rgba(211,175,101,0.25)',
                borderRadius: '16px',
                padding: '24px 28px',
                borderLeft: '4px solid var(--gold-deep)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h4 style={{ margin: 0, fontSize: 'var(--t-card)', color: 'var(--text-dark)' }}>
                  Day 60 &bull; Autonomy &amp; Velocity Check
                </h4>
                <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold-deep)', letterSpacing: '0.06em' }}>
                  Month 2
                </span>
              </div>
              <p style={{ margin: 0, fontSize: 'var(--t-meta)', color: 'var(--par-color)', lineHeight: 'var(--lh-body)' }}>
                Assessing delivery momentum against the 60-day roadmap. Ensuring cross-functional expectations are crystal clear and the candidate feels equipped to lead.
              </p>
            </div>

            <div
              style={{
                background: '#FAF7F0',
                border: '1px solid rgba(211,175,101,0.25)',
                borderRadius: '16px',
                padding: '24px 28px',
                borderLeft: '4px solid var(--gold-deep)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h4 style={{ margin: 0, fontSize: 'var(--t-card)', color: 'var(--text-dark)' }}>
                  Day 90 &bull; Probation &amp; Long-Term Lock-in
                </h4>
                <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold-deep)', letterSpacing: '0.06em' }}>
                  Month 3
                </span>
              </div>
              <p style={{ margin: 0, fontSize: 'var(--t-meta)', color: 'var(--par-color)', lineHeight: 'var(--lh-body)' }}>
                Facilitating probation closure with zero surprises. Solidifying mutual commitment and transitioning the leader into long-term strategic execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
