import React from 'react';
import Link from 'next/link';

export default function ForCompanies() {
  return (
    <div id="for-companies" className="section" style={{ padding: '90px 0' }}>
      <div className="base-container w-container">
        <div className="recruitment-offramp-card">
          <div className="recruitment-offramp-content">
            <span className="eyebrow">For companies hiring key talent</span>
            <h2 className="recruitment-offramp-title">
              A critical vacancy is a{' '}
              <span className="h2-span" style={{ color: 'var(--primary)', fontStyle: 'italic' }}>
                decision, not a stack of CVs.
              </span>
            </h2>
            <p className="recruitment-offramp-desc">
              The talent you actually need is hard to reach and rarely applying. Every extra
              week the role sits open raises the decision risk: momentum lost, a team stretched
              thin, and pressure to settle. My boutique search practice builds one considered
              shortlist, evaluated for fit and motivation as well as skill, so the choice in
              front of you is a safe one.
            </p>
            <div className="link-wrap">
              <Link href="/recruitment" className="cta-pill-button">
                <span>Start a hiring conversation</span>
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
              </Link>
            </div>
          </div>
          <div className="recruitment-offramp-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/jana-companies-advisory.png"
              alt="Jana Affum - International Recruitment"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
