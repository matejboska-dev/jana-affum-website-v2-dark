import React from 'react';
import Link from 'next/link';
import LogoMarquee from '@/components/LogoMarquee';

export default function Hero() {
  return (
    <div id="hero" className="hero-v2-wrapper">
      <div className="hero-v2-card">

        {/* Background Watermark Typography */}
        <div className="hero-v2-bg-text-layer" aria-hidden="true">
          <div className="hero-v2-bg-name">JANA AFFUM</div>
        </div>

        {/* Center / Right Cutout Person Image */}
        <div className="hero-v2-person-wrapper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/jana-affum-hero.png"
            alt="Jana Affum - International Recruiter & Private Coach"
            className="hero-v2-person-img"
            loading="eager"
          />
        </div>

        {/* Main Body: Left Content + Bottom Right Glass Cards */}
        <div className="hero-v2-body">
          <div className="hero-v2-content-left">
            <div className="hero-v2-eyebrow">
              <span>10+ Years In International Recruitment</span>
              <span>Private Coaching For Pivotal Decisions</span>
            </div>

            <h1 className="hero-v2-title">
              Make the people decisions that shape{' '}
              <span className="h1-span">what comes next.</span>
            </h1>

            <p className="hero-v2-lead">
              International recruitment for companies hiring pivotal talent. Private coaching
              for leaders and professionals navigating pivotal change.
            </p>

            <div className="hero-v2-actions">
              <Link href="/recruitment" className="primary-button hero-v2-cta-primary">
                I need to hire
              </Link>

              <Link href="/coaching" className="hero-v2-cta-secondary">
                <span>I am considering change</span>
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

          {/* Two Floating Glassmorphism Stat Cards */}
          <div className="hero-v2-stats-wrapper">
            <div className="hero-v2-glass-card">
              <div className="hero-v2-stat-number">10+</div>
              <div className="hero-v2-stat-label">Years International Search</div>
              <div className="hero-v2-stat-desc">
                Direct mandates across Europe, North America &amp; Australia.
              </div>
            </div>

            <div className="hero-v2-glass-card">
              <div className="hero-v2-stat-number">1,000s</div>
              <div className="hero-v2-stat-label">Career Conversations</div>
              <div className="hero-v2-stat-desc">
                Deep evaluation of candidate motivation &amp; leadership fit.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Strip in matching Dark Luxury Aesthetic */}
      <div className="hero-v2-trust-strip">
        <div className="base-container w-container">
          <span className="hero-v2-trust-label">
            EXPERIENCE WITH GLOBAL ENTERPRISES &amp; HIRING PARTNERS
          </span>
          <LogoMarquee />
          <p className="hero-v2-trust-meta">
            Direct employment, advisory, and international agency mandates across Europe, North
            America, Australia, and Africa. Conversations in Czech or English.
          </p>
        </div>
      </div>
    </div>
  );
}
