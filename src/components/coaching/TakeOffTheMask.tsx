import React from 'react';

export default function TakeOffTheMask() {
  return (
    <div id="take-off-the-mask" className="section-light-bg" style={{ padding: '96px 0', background: '#FAF7F0' }}>
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
            Confidential Partnership
          </div>
          <h2 className="flex-title" style={{ justifyContent: 'center' }}>
            <span className="h2-span">A space where you can</span> take off the mask
          </h2>
          <p className="item-description-gray" style={{ maxWidth: '720px', margin: '14px auto 0 auto', textAlign: 'center' }}>
            In corporate leadership, you are constantly expected to project confidence, have answers, and protect your team. Here is a room where you do not have to perform.
          </p>
        </div>

        {/* 2-Column: For You vs Not For You */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            marginTop: '48px',
          }}
        >
          {/* Column 1: This is for you */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(211,175,101,0.25)',
              borderRadius: '20px',
              padding: '40px 36px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <span
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'rgba(34,139,34,0.12)',
                  color: '#2e7d32',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '14px',
                }}
              >
                &#10003;
              </span>
              <h3 style={{ margin: 0, fontSize: 'var(--t-subhead)', color: 'var(--text-dark)' }}>
                This is for you if:
              </h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ fontSize: 'var(--t-body)', color: 'var(--par-color)', lineHeight: 'var(--lh-body)' }}>
                <strong>You want unvarnished honesty:</strong> You do not need superficial cheerleading. You want an objective, senior perspective backed by actual hiring reality.
              </li>
              <li style={{ fontSize: 'var(--t-body)', color: 'var(--par-color)', lineHeight: 'var(--lh-body)' }}>
                <strong>You carry high-impact decisions:</strong> Resignations, international moves, stepping into executive leadership, or transitioning to founder status.
              </li>
              <li style={{ fontSize: 'var(--t-body)', color: 'var(--par-color)', lineHeight: 'var(--lh-body)' }}>
                <strong>You value total discretion:</strong> All conversations are held in strict professional confidence under international coaching ethics.
              </li>
            </ul>
          </div>

          {/* Column 2: This is NOT for you */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(36,30,20,0.12)',
              borderRadius: '20px',
              padding: '40px 36px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <span
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'rgba(211,47,47,0.1)',
                  color: '#d32f2f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '14px',
                }}
              >
                &times;
              </span>
              <h3 style={{ margin: 0, fontSize: 'var(--t-subhead)', color: 'var(--text-dark)' }}>
                This is not for you if:
              </h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ fontSize: 'var(--t-body)', color: 'var(--par-color)', lineHeight: 'var(--lh-body)' }}>
                <strong>You expect quick overnight formulas:</strong> Real career positioning and executive clarity require deliberate reflection and work.
              </li>
              <li style={{ fontSize: 'var(--t-body)', color: 'var(--par-color)', lineHeight: 'var(--lh-body)' }}>
                <strong>You want a guaranteed placement:</strong> Coaching is private executive advisory. Headhunting is my separate corporate practice.
              </li>
              <li style={{ fontSize: 'var(--t-body)', color: 'var(--par-color)', lineHeight: 'var(--lh-body)' }}>
                <strong>You are seeking clinical mental healthcare:</strong> Coaching is career strategy and life transition support, not psychotherapy or crisis care.
              </li>
            </ul>
          </div>
        </div>

        {/* Required Medical & Clinical Disclaimer Box */}
        <div
          style={{
            marginTop: '40px',
            background: 'rgba(36,30,20,0.04)',
            border: '1px solid rgba(36,30,20,0.1)',
            borderRadius: '12px',
            padding: '20px 24px',
            textAlign: 'center',
            maxWidth: 'var(--measure-wide)',
            margin: '40px auto 0 auto',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 'var(--t-meta)',
              color: 'var(--par-color)',
              lineHeight: 'var(--lh-meta)',
            }}
          >
            <strong>Professional Boundary Notice:</strong> Executive and private coaching focuses on career strategy, leadership decision-making, and professional transitions. It is not psychological, psychiatric, medical, or psychotherapeutic treatment and does not replace medical diagnosis, therapy, or crisis intervention.
          </p>
        </div>
      </div>
    </div>
  );
}
