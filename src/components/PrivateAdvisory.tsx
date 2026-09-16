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
              <span className="h2-span">A consequential decision,</span> and no one you can
              think out loud with
            </h2>
            <p className="why-statement">
              Staying, leaving, negotiating, or a completely different path: several
              possibilities are competing for your attention, and each one carries a different
              risk to what you have built. These are not thoughts you can safely share with your
              team, your partner, or your boss.
            </p>
            <p className="why-body">
              You need a confidential space to weigh the options with someone who understands
              what the market will actually bear, not just what feels brave. That is what this
              conversation is for: private, direct, and grounded in ten years of watching how
              these decisions really play out.
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
                src="/images/WhatsApp-Image-2026-09-04-at-15.37.20.jpeg"
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
