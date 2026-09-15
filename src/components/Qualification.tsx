import React from 'react';

export default function Qualification() {
  return (
    <div
      id="fit"
      className="section-light-bg"
      style={{ padding: '96px 0 0 0', position: 'relative', overflow: 'hidden' }}
    >
      <div className="base-container w-container" style={{ position: 'relative' }}>
        <div className="section-title-wrap">
          <div className="fit-eyebrow-wrap">
            <span className="fit-eyebrow-badge">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              Clear Boundaries
            </span>
          </div>
          <h2 id="who-this-is-for" className="flex-title" style={{ justifyContent: 'center' }}>
            <span className="h2-span">Honestly:</span> who this is for &mdash; and who it isn’t
          </h2>
          <p
            className="item-description-gray"
            style={{ margin: '12px auto 0 auto', maxWidth: '640px', textAlign: 'center' }}
          >
            Coaching only works when the fit is exact. Here is where my hiring-side experience
            creates real leverage, and where I will point you somewhere else.
          </p>
        </div>

        <div className="fit-main-wrap">
          <div className="fit-content-col">
            <div className="fit-columns-grid">
              {/* Column 1: This is for you */}
              <div className="fit-column">
                <h3 className="fit-column-heading">This is for you if:</h3>
                <div className="fit-points-list">
                  <div className="fit-point-item">
                    <div className="fit-point-header">
                      <div className="fit-point-icon fit-point-icon--yes">
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
                      </div>
                      <h4 className="fit-point-title">Decade+ in corporate</h4>
                    </div>
                    <p className="fit-point-desc">
                      You are 10+ years into a corporate career, you’ve hit a ceiling or
                      crossroads, and the work no longer moves you.
                    </p>
                  </div>

                  <div className="fit-point-item">
                    <div className="fit-point-header">
                      <div className="fit-point-icon fit-point-icon--yes">
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
                      </div>
                      <h4 className="fit-point-title">Protecting what you earned</h4>
                    </div>
                    <p className="fit-point-desc">
                      You want out, but not at the cost of the salary, title, and financial
                      security you spent years building.
                    </p>
                  </div>

                  <div className="fit-point-item">
                    <div className="fit-point-header">
                      <div className="fit-point-icon fit-point-icon--yes">
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
                      </div>
                      <h4 className="fit-point-title">Recruiter reality check</h4>
                    </div>
                    <p className="fit-point-desc">
                      You want an unvarnished evaluation from someone who has actually sat on
                      hiring committees and knows what the market pays.
                    </p>
                  </div>

                  <div className="fit-point-item">
                    <div className="fit-point-header">
                      <div className="fit-point-icon fit-point-icon--yes">
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
                      </div>
                      <h4 className="fit-point-title">Data-backed roadmap</h4>
                    </div>
                    <p className="fit-point-desc">
                      You want a concrete transition plan and clear timeline rather than vague
                      motivational theory.
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 2: This is not for you */}
              <div className="fit-column">
                <h3 className="fit-column-heading">This is not for you if:</h3>
                <div className="fit-points-list">
                  <div className="fit-point-item">
                    <div className="fit-point-header">
                      <div className="fit-point-icon fit-point-icon--no">
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
                      </div>
                      <h4 className="fit-point-title">Clinical care or therapy</h4>
                    </div>
                    <p className="fit-point-desc">
                      You are seeking psychological therapy, psychiatric care, or crisis
                      intervention. Coaching is career strategy, not clinical care.
                    </p>
                  </div>

                  <div className="fit-point-item">
                    <div className="fit-point-header">
                      <div className="fit-point-icon fit-point-icon--no">
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
                      </div>
                      <h4 className="fit-point-title">Flattering reassurance</h4>
                    </div>
                    <p className="fit-point-desc">
                      You want comfortable validation rather than an honest, unvarnished read of
                      what the hiring market will actually pay.
                    </p>
                  </div>

                  <div className="fit-point-item">
                    <div className="fit-point-header">
                      <div className="fit-point-icon fit-point-icon--no">
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
                      </div>
                      <h4 className="fit-point-title">Guaranteed recruitment</h4>
                    </div>
                    <p className="fit-point-desc">
                      You expect an immediate headhunting placement. Headhunting is my separate
                      corporate recruitment practice.
                    </p>
                  </div>

                  <div className="fit-point-item">
                    <div className="fit-point-header">
                      <div className="fit-point-icon fit-point-icon--no">
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
                      </div>
                      <h4 className="fit-point-title">Overnight shortcuts</h4>
                    </div>
                    <p className="fit-point-desc">
                      You are looking for quick hacks without doing the real, deliberate
                      strategic positioning work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA button */}
        <div className="fit-cta-wrap">
          <a href="#booking" className="primary-button w-button">
            Book a 20-minute conversation
          </a>
        </div>

        {/* Right side: Jana cutout photo */}
        <div className="fit-photo-col">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/jana-fit.png"
            alt="Jana Affum - Honest Fit Assessment"
            className="fit-photo-img"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
