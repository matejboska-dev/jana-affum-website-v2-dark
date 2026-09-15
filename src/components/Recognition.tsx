import React from 'react';

export default function Recognition() {
  return (
    <div id="the-difference" className="section radius-bottom" style={{ padding: '90px 0' }}>
      <div className="base-container w-container">
        <div className="section-head">
          <span className="eyebrow">The hiring problem</span>
          <h2 id="you-need-greater-certainty">
            <span className="h2-span">You do not need more CVs.</span> You need greater certainty.
          </h2>
          <p className="item-description-gray">
            The real cost of a wrong hire at senior level is not the recruitment fee. It is three
            months of salary, management time, lost momentum, and starting over.
          </p>
        </div>

        {/* Frustration Cards / Comparison Layout */}
        <div className="home-1-services">
          <div
            className="home-1-service-img"
            style={{ backgroundImage: "url('/images/jana-about.png')" }}
          ></div>

          <div className="home-1-services-text">
            {/* Card 1 */}
            <div className="item-wrapper-home-1">
              <div className="home-1-service-title">
                <div className="check-icon">
                  <svg
                    width="14"
                    height="14"
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
                <h3 className="h3-green-text">Flooded with irrelevant CVs</h3>
              </div>
              <p className="dark-text">
                Inbound applications and agency shortlists full of candidates who look right on
                paper but lack the depth, motivation, or cultural fit your team needs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="item-wrapper-home-1">
              <div className="home-1-service-title">
                <div className="check-icon">
                  <svg
                    width="14"
                    height="14"
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
                <h3 className="h3-green-text">Hidden candidate motivations</h3>
              </div>
              <p className="dark-text">
                The best people are not actively looking. When they do engage, surface-level
                interviews miss whether they are truly ready to move or just testing the market.
              </p>
            </div>

            {/* Card 3 */}
            <div className="item-wrapper-home-1">
              <div className="home-1-service-title">
                <div className="check-icon">
                  <svg
                    width="14"
                    height="14"
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
                <h3 className="h3-green-text">Slow decisions, lost candidates</h3>
              </div>
              <p className="dark-text">
                By the time your process reaches a decision, the candidate you wanted has accepted
                somewhere else. Speed and certainty win talent.
              </p>
            </div>

            <div className="link-wrap" style={{ marginTop: '8px' }}>
              <a href="#booking" className="cta-pill-button">
                <span>Let&apos;s discuss what is slowing your hiring down</span>
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
  );
}
