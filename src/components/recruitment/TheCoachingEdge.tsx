import React from 'react';

export default function TheCoachingEdge() {
  return (
    <div id="the-coaching-edge" className="section radius-top" style={{ padding: '96px 0', background: '#FFFFFF' }}>
      <div className="base-container w-container">
        <div className="section-title-wrap">
          <div
            className="case-study-badge"
            style={{
              marginBottom: '12px',
              background: 'rgba(211,175,101,0.15)',
              color: 'var(--gold-deep)',
              border: '1px solid rgba(211,175,101,0.3)',
            }}
          >
            The Methodology
          </div>
          <h2 className="flex-title" style={{ justifyContent: 'center' }}>
            <span className="h2-span">The Coaching Edge:</span> Where headhunting meets deep qualification
          </h2>
          <p className="item-description-gray" style={{ maxWidth: '740px', margin: '14px auto 0 auto', textAlign: 'center' }}>
            Most agencies sell candidate access. Access is a commodity. The bottleneck in senior hiring is
            predictability — knowing whether a top-tier candidate is genuinely ready to transition, thrive, and stay.
          </p>
        </div>

        {/* Comparison grid: Standard Agency vs Coaching-Informed Search */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            marginTop: '48px',
          }}
        >
          {/* Card 1: Standard Agency */}
          <div
            style={{
              background: '#FAF7F0',
              border: '1px solid rgba(36,30,20,0.12)',
              borderRadius: '20px',
              padding: '40px 36px',
            }}
          >
            <div
              style={{
                fontSize: 'var(--t-label)',
                fontWeight: 700,
                color: 'var(--par-color)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--ls-label)',
                marginBottom: '16px',
              }}
            >
              Standard Headhunting Model
            </div>
            <h3 style={{ fontSize: 'var(--t-subhead)', lineHeight: 'var(--lh-head)', color: 'var(--text-dark)', marginBottom: '20px' }}>
              Volume, keywords &amp; transaction speed
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: '#d32f2f', fontWeight: 700, fontSize: '18px', lineHeight: 1 }}>&times;</span>
                <p style={{ margin: 0, fontSize: 'var(--t-body)', color: 'var(--par-color)', lineHeight: 'var(--lh-body)' }}>
                  <strong>Flooding the pipeline:</strong> Sending 20+ keyword-matched profiles, outsourcing the qualification burden back to your hiring managers.
                </p>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: '#d32f2f', fontWeight: 700, fontSize: '18px', lineHeight: 1 }}>&times;</span>
                <p style={{ margin: 0, fontSize: 'var(--t-body)', color: 'var(--par-color)', lineHeight: 'var(--lh-body)' }}>
                  <strong>Surface-level vetting:</strong> Relying on CV bullet points and scripted screening calls that miss hidden hesitations and counter-offer vulnerabilities.
                </p>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: '#d32f2f', fontWeight: 700, fontSize: '18px', lineHeight: 1 }}>&times;</span>
                <p style={{ margin: 0, fontSize: 'var(--t-body)', color: 'var(--par-color)', lineHeight: 'var(--lh-body)' }}>
                  <strong>Drop-off after placement:</strong> The engagement ends when the invoice is settled, leaving you alone if onboarding frictions arise in month two.
                </p>
              </li>
            </ul>
          </div>

          {/* Card 2: The Coaching-Informed Edge */}
          <div
            style={{
              background: 'var(--text-dark)',
              color: '#FFFFFF',
              border: '1px solid rgba(211,175,101,0.3)',
              borderRadius: '20px',
              padding: '40px 36px',
              position: 'relative',
              boxShadow: '0 12px 32px rgba(36,30,20,0.12)',
            }}
          >
            <div
              style={{
                fontSize: 'var(--t-label)',
                fontWeight: 700,
                color: 'var(--primary)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--ls-label)',
                marginBottom: '16px',
              }}
            >
              The Coaching-Informed Approach
            </div>
            <h3 style={{ fontSize: 'var(--t-subhead)', lineHeight: 'var(--lh-head)', color: '#FFFFFF', marginBottom: '20px' }}>
              Depth, candid insight &amp; high certainty
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '18px', lineHeight: 1 }}>&#10003;</span>
                <p style={{ margin: 0, fontSize: 'var(--t-body)', color: 'rgba(255,255,255,0.85)', lineHeight: 'var(--lh-body)' }}>
                  <strong>Curated shortlist of 3–5 finalists:</strong> Every candidate is evaluated in depth. You only spend leadership time interviewing people who meet both the technical bar and the human criteria.
                </p>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '18px', lineHeight: 1 }}>&#10003;</span>
                <p style={{ margin: 0, fontSize: 'var(--t-body)', color: 'rgba(255,255,255,0.85)', lineHeight: 'var(--lh-body)' }}>
                  <strong>Psychological &amp; motivational alignment:</strong> As a certified executive coach, Jana uncovers what actually drives the candidate, tests counter-offer risk, and verifies exit readiness before you make an offer.
                </p>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '18px', lineHeight: 1 }}>&#10003;</span>
                <p style={{ margin: 0, fontSize: 'var(--t-body)', color: 'rgba(255,255,255,0.85)', lineHeight: 'var(--lh-body)' }}>
                  <strong>Integrated Onboarding Care:</strong> Active support during the critical first 90 days to ensure alignment, clear communication, and lasting performance.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Quote banner */}
        <div
          style={{
            marginTop: '48px',
            background: 'rgba(211,175,101,0.08)',
            borderLeft: '4px solid var(--gold-deep)',
            borderRadius: '0 12px 12px 0',
            padding: '28px 32px',
          }}
        >
          <p
            style={{
              fontSize: 'var(--t-lede)',
              fontStyle: 'italic',
              color: 'var(--text-dark)',
              margin: '0 0 8px 0',
              lineHeight: 'var(--lh-head)',
            }}
          >
            &ldquo;Senior passive professionals rarely respond to pushy sales pitches. They open up to a trusted
            peer who understands executive career strategy, cross-border complexity, and the real stakes of a life move.&rdquo;
          </p>
          <span style={{ fontSize: 'var(--t-meta)', fontWeight: 600, color: 'var(--gold-deep)' }}>
            Jana Affum &mdash; Certified Executive Coach &amp; Senior Recruiter
          </span>
        </div>
      </div>
    </div>
  );
}
