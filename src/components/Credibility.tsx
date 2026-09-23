import React from 'react';

export default function Credibility() {
  return (
    <div id="credibility" className="credibility-section">
      <div className="base-container w-container">
        <div className="credibility-grid">
          <div className="credibility-photos">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/jana-sitting-prague.jpg"
              alt="Jana Affum in Prague"
              className="credibility-photo tall credibility-photo-col--offset"
              loading="lazy"
            />
          </div>

          <div>
            <span className="eyebrow">In her own words</span>
            <p className="credibility-quote">
              &ldquo;After ten years in international recruitment, I understand how experience is
              evaluated behind the scenes. I bring that perspective to your career &mdash; helping
              you recognise your value, communicate it clearly, and make your next move with
              confidence.&rdquo;
            </p>
            <div className="credibility-signature">
              <span className="credibility-signature-mark">Jana Affum</span>
              <span className="credibility-signature-role">
                Certified Business &amp; Life Coach &middot; 10+ Years International Recruitment
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
