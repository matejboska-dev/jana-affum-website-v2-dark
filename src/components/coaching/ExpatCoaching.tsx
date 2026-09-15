import React from 'react';

export default function ExpatCoaching() {
  return (
    <div id="expat-coaching" className="section" style={{ padding: '96px 0', background: '#FFFFFF' }}>
      <div className="base-container w-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '56px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Context & Narrative */}
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
              Expat &amp; Global Professionals
            </div>
            <h2 className="banner-1-title" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', marginBottom: '18px' }}>
              English-speaking executive coaching in Prague{' '}
              <span className="h1-span" style={{ fontStyle: 'italic' }}>
                for international careers.
              </span>
            </h2>
            <p className="item-description-gray" style={{ marginBottom: '20px' }}>
              Relocating for an international assignment, managing cross-border teams, or building a life
              outside your home country brings distinct pressures that standard corporate coaching often misses.
            </p>
            <p className="dark-text" style={{ fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)', color: 'var(--par-color)', marginBottom: '24px' }}>
              With personal experience founding a business in the United States, managing high-stakes international
              mandates across Europe and Africa, and living in Prague, Jana provides a confidential, culturally
              nuanced thinking partnership for expats, diplomats, and international tech executives.
            </p>

            <div className="link-wrap">
              <a href="#coaching-inquiry" className="cta-pill-button">
                <span>Discuss expat career coaching in Prague</span>
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

          {/* Right Column: 3 Pillars of Expat Coaching */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              style={{
                background: '#FAF7F0',
                border: '1px solid rgba(211,175,101,0.25)',
                borderRadius: '16px',
                padding: '28px',
              }}
            >
              <h4 style={{ margin: '0 0 10px 0', fontSize: 'var(--t-card)', color: 'var(--text-dark)' }}>
                Cross-Cultural Executive Dynamics
              </h4>
              <p style={{ margin: 0, fontSize: 'var(--t-meta)', color: 'var(--par-color)', lineHeight: 'var(--lh-body)' }}>
                Decoding implicit communication styles, corporate hierarchy norms, and negotiation rituals in Central European, Swiss, and global matrix environments.
              </p>
            </div>

            <div
              style={{
                background: '#FAF7F0',
                border: '1px solid rgba(211,175,101,0.25)',
                borderRadius: '16px',
                padding: '28px',
              }}
            >
              <h4 style={{ margin: '0 0 10px 0', fontSize: 'var(--t-card)', color: 'var(--text-dark)' }}>
                Career &amp; Life Transitions Abroad
              </h4>
              <p style={{ margin: 0, fontSize: 'var(--t-meta)', color: 'var(--par-color)', lineHeight: 'var(--lh-body)' }}>
                Whether moving to the Czech Republic, contemplating a repatriation leap, or transitioning from corporate expat packages to independent consulting.
              </p>
            </div>

            <div
              style={{
                background: '#FAF7F0',
                border: '1px solid rgba(211,175,101,0.25)',
                borderRadius: '16px',
                padding: '28px',
              }}
            >
              <h4 style={{ margin: '0 0 10px 0', fontSize: 'var(--t-card)', color: 'var(--text-dark)' }}>
                Dual-Language Fluency &amp; Discretion
              </h4>
              <p style={{ margin: 0, fontSize: 'var(--t-meta)', color: 'var(--par-color)', lineHeight: 'var(--lh-body)' }}>
                Available fully in native-level English or Czech. In-person sessions in central Prague or high-touch video consultations across European timezones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
