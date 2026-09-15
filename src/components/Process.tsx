import React from 'react';

export default function Process() {
  return (
    <div id="process" className="section" style={{ padding: '96px 0 0 0' }}>
      <div className="base-container w-container">
        <div className="clarity-section-wrap">
          <div className="clarity-header">
            <h2 className="clarity-title">
              <span className="clarity-title-gold">Get clarity</span> in three steps
            </h2>
            <div className="clarity-sparkle-divider">
              <span></span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="#9A7420"
                aria-hidden="true"
              >
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"></path>
              </svg>
              <span></span>
            </div>
            <p className="clarity-subtext">
              A transparent, low-friction path from corporate crossroads to a clear, actionable
              transition strategy.
            </p>
          </div>

          <div className="clarity-main-layout">
            {/* Left: Jana pointing right */}
            <div className="clarity-photo-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/jana-pointing-right.png"
                alt="Jana Affum pointing to step process"
                className="clarity-photo-img"
                loading="lazy"
              />
            </div>

            {/* Right: three-step flow + CTA */}
            <div className="clarity-cards-col">
              <div className="clarity-flow-container">
                {/* Step 1 */}
                <div className="clarity-flow-step">
                  <div className="clarity-node-wrap">
                    <div className="clarity-node-circle">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                        <line x1="8" y1="3" x2="8" y2="7"></line>
                        <line x1="16" y1="3" x2="16" y2="7"></line>
                      </svg>
                    </div>
                    <div className="clarity-node-badge">1</div>
                  </div>
                  <h3 className="clarity-flow-title">Book a 20-minute call</h3>
                  <p className="clarity-flow-desc">
                    No form marathon, pick a slot that suits you. In one short conversation, we
                    explore your situation and see if we are a natural fit.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="clarity-flow-step">
                  <div className="clarity-node-wrap">
                    <div className="clarity-node-circle">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M15.6 8.4l-2.1 5.1-5.1 2.1 2.1-5.1 5.1-2.1z"></path>
                      </svg>
                    </div>
                    <div className="clarity-node-badge">2</div>
                  </div>
                  <h3 className="clarity-flow-title">We map where you actually are</h3>
                  <p className="clarity-flow-desc">[PLACEHOLDER: what happens in session one]</p>
                </div>

                {/* Step 3 */}
                <div className="clarity-flow-step">
                  <div className="clarity-node-wrap">
                    <div className="clarity-node-circle">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 21V4"></path>
                        <path d="M5 4h11l-2.2 3.5L16 11H5"></path>
                      </svg>
                    </div>
                    <div className="clarity-node-badge">3</div>
                  </div>
                  <h3 className="clarity-flow-title">You leave with a next step, not a feeling</h3>
                  <p className="clarity-flow-desc">
                    [PLACEHOLDER: what the client walks away with]
                  </p>
                </div>
              </div>

              <div className="clarity-cta-row">
                <a href="#booking" className="clarity-gold-btn">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                    <line x1="8" y1="3" x2="8" y2="7"></line>
                    <line x1="16" y1="3" x2="16" y2="7"></line>
                  </svg>
                  <span>Book a 20-minute conversation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
