import React from 'react';
import Link from 'next/link';

export default function PrivateAdvisory() {
  return (
    <div
      id="private-advisory"
      className="section-light-bg"
      style={{ padding: '96px 0' }}
    >
      <div className="base-container w-container">
        <div className="private-advisory-block">
          <div className="why-content">
            <span className="eyebrow">Private coaching &amp; thinking partnership</span>
            <h2 className="flex-title" style={{ textAlign: 'left' }}>
              <span className="h2-span">A consequential decision,</span> and no space to think it
              through clearly
            </h2>
            <p className="why-statement">
              Staying, leaving, negotiating, or choosing a completely different path: several
              possibilities may be competing for your attention, and each carries a different risk
              to what you have built. Some decisions are difficult to explore openly with
              colleagues, managers, or others personally involved in the outcome.
            </p>
            <p className="why-body">
              You need a confidential space to weigh the options with someone who understands
              what the market will actually bear, not just what feels brave. That is what this
              conversation is for: private, direct, and grounded in ten years of seeing how career
              decisions play out in the real world.
            </p>
            <div className="link-wrap">
              <Link href="/coaching" className="cta-pill-button">
                <span>Explore private coaching</span>
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

          <div className="private-advisory-photo-col">
            <div className="private-advisory-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/jana-private-advisory-portrait.jpg"
                alt="Jana Affum - Private Coaching Advisory & Thinking Partnership"
                loading="lazy"
                style={{ objectPosition: 'center center' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
