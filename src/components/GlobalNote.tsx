import React from 'react';

export default function GlobalNote() {
  return (
    <section id="global" className="global-impact-section">
      <div className="base-container w-container" style={{ maxWidth: '1240px' }}>
        <div className="global-impact-grid">
          {/* Left Photo Column */}
          <div className="global-photo-col global-photo-col--left">
            {/* Peru School Initiative (Landscape) */}
            <figure className="global-photo-card landscape">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/impact-peru-school.jpg"
                alt="School-building and education initiative in Peru"
                className="global-photo-img"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="global-photo-caption">Peru &middot; School Initiative</figcaption>
            </figure>
          </div>

          {/* Center Column: Narrative & Book Impact Card */}
          <div className="global-content">
            <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: '14px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                Global reach &amp; social impact
              </span>
            </div>

            <h2 className="global-title">
              <span className="h2-span">Purpose beyond business:</span> where opportunity meets human development
            </h2>

            <p className="global-narrative">
              Beyond recruitment and coaching, Jana is open to selected international
              partnerships where people, education, opportunity, and cross-cultural
              collaboration meet. This includes long-term support for children&apos;s
              welfare and education projects in Ghana, a school-building initiative in Peru,
              and work at the intersection of diplomacy and international development.
            </p>

            {/* Direct Impact / Book proceeds card */}
            <div className="global-book-card">
              <div className="global-book-icon-wrap" aria-hidden="true">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <div className="global-book-content">
                <span className="global-book-tag">Author Giving Commitment</span>
                <p className="global-book-text">
                  All proceeds from the print edition of her book,{' '}
                  <strong>
                    <em>AI Meets Recruitment</em>
                  </strong>
                  , directly support the education and welfare of a child in Ghana.
                </p>
              </div>
            </div>

            {/* Topic / Initiative list */}
            <ul className="global-pillars">
              <li className="global-pillar-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z" />
                  <circle cx="12" cy="9.5" r="2.4" />
                </svg>
                Ghana &middot; Child Welfare &amp; Schooling
              </li>
              <li className="global-pillar-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z" />
                  <circle cx="12" cy="9.5" r="2.4" />
                </svg>
                Peru &middot; School Building Initiative
              </li>
              <li className="global-pillar-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <path d="M12 3a13 13 0 0 1 3.4 9 13 13 0 0 1-3.4 9 13 13 0 0 1-3.4-9A13 13 0 0 1 12 3z" />
                </svg>
                Cross-Cultural Diplomacy
              </li>
            </ul>
          </div>

          {/* Right Photo Column */}
          <div className="global-photo-col global-photo-col--right">
            {/* Classroom in Ghana (Landscape) */}
            <figure className="global-photo-card landscape">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/impact-ghana-school.jpg"
                alt="Jana Affum with students at St. Anne's Catholic School in Ghana"
                className="global-photo-img"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="global-photo-caption">Ghana &middot; St. Anne&apos;s School</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

