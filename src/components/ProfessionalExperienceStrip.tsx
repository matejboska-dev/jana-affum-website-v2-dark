import React from 'react';

export default function ProfessionalExperienceStrip() {
  return (
    <div className="hero-v2-trust-strip" aria-label="Selected Professional Experience">
      <div className="base-container w-container">
        <div className="hero-v2-experience-inner">
          <span className="hero-v2-trust-label">SELECTED PROFESSIONAL EXPERIENCE</span>
          <p className="hero-v2-experience-text">
            Over more than ten years in international recruitment, I have supported hiring projects
            through direct employment, independent consulting, RPO assignments, and international
            agency partnerships.
          </p>
          <p className="hero-v2-experience-subtext">
            You can find a detailed overview of my professional experience, responsibilities, and the
            organisations I have worked with on LinkedIn.
          </p>
          <div className="hero-v2-experience-cta">
            <a
              href="https://www.linkedin.com/in/jana-affum-0aa979197/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-v2-linkedin-btn"
              aria-label="View Jana Affum's professional experience on LinkedIn (opens in a new tab)"
            >
              <svg
                className="linkedin-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.85 0-1.54-.69-1.54-1.54s.69-1.54 1.54-1.54a1.54 1.54 0 0 1 1.54 1.54c0 .85-.69 1.54-1.54 1.54m1.4 9.74v-8.37H5.06v8.37h2.8z" />
              </svg>
              <span>View My Professional Experience</span>
              <svg
                className="arrow-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
