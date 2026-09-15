import React from 'react';

export default function RiskReversal() {
  return (
    <div id="risk-reversal" className="section" style={{ padding: '96px 0' }}>
      <div className="base-container w-container">
        <div className="section-title-wrap">
          <h2 id="zero-sales-traps" className="flex-title" style={{ justifyContent: 'center' }}>
            <span className="h2-span">Zero sales traps:</span> What the 20-minute call actually is
          </h2>
          <p className="item-description-gray" style={{ margin: '12px auto 0 auto' }}>
            I hate aggressive sales pitches as much as you do. Here is my upfront commitment
            before you pick a slot.
          </p>
        </div>

        <div className="risk-reversal-wrap">
          <div className="risk-reversal-grid">
            {/* Card IS */}
            <div className="risk-card risk-card--is">
              <div className="risk-card-head">
                <div
                  className="fit-panel-badge"
                  style={{ background: 'var(--primary)', color: 'var(--green)' }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="risk-card-title">What this call IS:</h3>
              </div>
              <ul role="list" className="risk-list">
                <li className="risk-item">
                  <span className="fit-mark fit-mark--yes">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <p>A direct, 1-on-1 confidential conversation with Jana Affum.</p>
                </li>
                <li className="risk-item">
                  <span className="fit-mark fit-mark--yes">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <p>
                    An honest assessment of whether the move you are considering is realistic
                    before you jump.
                  </p>
                </li>
                <li className="risk-item">
                  <span className="fit-mark fit-mark--yes">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <p>
                    A mutual fit-check: if coaching is not what you need, I will tell you
                    upfront.
                  </p>
                </li>
                <li className="risk-item">
                  <span className="fit-mark fit-mark--yes">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <p>You leave with clear next steps and options, whether we work together or not.</p>
                </li>
              </ul>
            </div>

            {/* Card IS NOT */}
            <div className="risk-card risk-card--not">
              <div className="risk-card-head">
                <div
                  className="fit-panel-badge"
                  style={{ background: 'rgba(36,30,20,0.08)', color: 'var(--par-color)' }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                  </svg>
                </div>
                <h3 className="risk-card-title">What this call is NOT:</h3>
              </div>
              <ul role="list" className="risk-list">
                <li className="risk-item">
                  <span className="fit-mark fit-mark--no">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                    </svg>
                  </span>
                  <p>A high-pressure sales pitch or pushy closing script.</p>
                </li>
                <li className="risk-item">
                  <span className="fit-mark fit-mark--no">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                    </svg>
                  </span>
                  <p>Generic motivational platitudes or superficial cheerleading.</p>
                </li>
                <li className="risk-item">
                  <span className="fit-mark fit-mark--no">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                    </svg>
                  </span>
                  <p>Any commitment or contract requirement to buy anything.</p>
                </li>
                <li className="risk-item">
                  <span className="fit-mark fit-mark--no">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                    </svg>
                  </span>
                  <p>A bait-and-switch where someone other than Jana shows up.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Anti-Pitch Guarantee Box */}
          <div className="anti-pitch-box">
            <div className="anti-pitch-icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="anti-pitch-text">
              <h4>My Anti-Pitch Guarantee</h4>
              <p>
                Honesty is my sales mechanism. If coaching is not what you need right now, I
                will tell you upfront and point you toward better alternatives. No guilt, no
                follow-up harassment, no pressure.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '44px' }}>
            <a href="#booking" className="primary-button w-button">
              Book a 20-minute conversation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
