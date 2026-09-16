import React from 'react';

export default function WhyJana() {
  return (
    <div
      id="why-jana"
      className="section"
      style={{ padding: '96px 0', borderTop: '1px solid rgba(211,175,101,0.2)' }}
    >
      <div className="base-container w-container">
        <div className="why-block">
          <div className="why-portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/jana-cafe.jpg"
              alt="Jana Affum - International Recruiter & Coach"
              loading="lazy"
              decoding="async"
              style={{ objectPosition: 'center 20%' }}
            />
            <div className="why-portrait-badge">
              <div className="why-portrait-badge-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <p className="why-portrait-badge-text">
                <strong>10+ Years International Search</strong>
                Certified Business &amp; Life Coach
              </p>
            </div>
          </div>

          <div className="why-content">
            <span className="eyebrow">The recruiter advantage</span>
            <h2 className="flex-title" style={{ textAlign: 'left' }}>
              <span className="h2-span">Why me:</span> ten years on the other side of the table
            </h2>
            <p className="why-statement">
              In ten years of international recruitment I have led thousands of career
              conversations, placed senior professionals across multiple countries, and sat on
              the hiring side of decisions that shaped people&apos;s futures.
            </p>
            <p className="why-body">
              Every one of those conversations was a hiring decision about whether someone fit a
              role, and what companies would actually pay them. That is the lens I bring to
              coaching: not what you hope your experience is worth, but what I have watched it
              be worth in real boardroom negotiations.
            </p>
            <p className="why-body">
              I am a certified business and life coach, and I still recruit. My advice is grounded
              in what is actually happening in the market today — not in theory.
            </p>
            <p className="why-body">
              Before recruitment, my path ran through international business and diplomacy, and a
              life rebuilt across three continents. That is where the deep listening comes from:
              not a script, but having sat in enough different rooms to know how ambition and
              risk actually sound.
            </p>

            <div className="why-badges-row">
              <div className="why-pill">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>10+ Years International Search</span>
              </div>
              <div className="why-pill">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Certified Business &amp; Life Coach</span>
              </div>
              <div className="why-pill">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Active Recruiter Intelligence</span>
              </div>
              <div className="why-pill">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>International Business &amp; Diplomacy</span>
              </div>
            </div>

            <div className="link-wrap">
              <a href="#booking" className="cta-pill-button">
                <span>Book a 20-minute conversation</span>
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
