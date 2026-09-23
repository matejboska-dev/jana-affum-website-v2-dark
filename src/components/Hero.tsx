import React from 'react';
import Link from 'next/link';
import ProfessionalExperienceStrip from '@/components/ProfessionalExperienceStrip';

export default function Hero() {
  return (
    <div id="hero" className="hero-v2-wrapper">
      <div className="hero-v2-card">

        {/* Background Watermark Typography */}
        <div className="hero-v2-bg-text-layer" aria-hidden="true">
          <div className="hero-v2-bg-name">
            <svg
              className="hero-v2-bg-j"
              viewBox="33 261 740 927"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M439 421Q405 421 377 413Q349 405 323 395Q297 385 270.50 377Q244 369 213 369Q184 369 167.50 384.50Q151 400 152 429Q152 460 176.50 479.50Q201 499 251 505Q251 505 250 514.50Q249 524 249 524Q207 519 172.50 504Q138 489 117 461Q96 433 96 391Q95 334 129 297.50Q163 261 229 261Q266 261 295 271.50Q324 282 349 297Q374 312 399 327.50Q424 343 453 353.50Q482 364 519 364Q563 364 604.50 353.50Q646 343 691 323Q712 291 732 274Q752 257 767 270Q779 280 766 297Q753 314 700 334Q623 391 576 484Q529 577 499 693L437 935Q420 1003 385 1060.50Q350 1118 295 1153Q240 1188 160 1188Q125 1188 96 1181Q67 1174 50.50 1158.50Q34 1143 33 1119Q32 1091 52 1070Q72 1049 108 1049Q135 1049 154 1063Q173 1077 173 1102Q174 1124 160 1140.50Q146 1157 123 1168Q131 1169 138 1170.50Q145 1172 153 1172Q187 1172 210 1151Q233 1130 249 1093.50Q265 1057 278.50 1008.50Q292 960 307 905L352 738Q373 663 404 605.50Q435 548 476.50 502.50Q518 457 568 418.50Q618 380 674 342Q640 355 611 369Q582 383 555 394.50Q528 406 499.50 413.50Q471 421 439 421" />
            </svg>ana Affum
          </div>
        </div>

        {/* Main Body: Left Content + Person Image + Bottom Right Glass Cards */}
        <div className="hero-v2-body">
          <div className="hero-v2-content-left">
            <div className="hero-v2-eyebrow">
              <span>10+ Years In International Recruitment</span>
              <span>Private Coaching For Important Decisions</span>
            </div>

            <h1 className="hero-v2-title">
              Make the people decisions that shape{' '}
              <span className="h1-span">what comes next.</span>
            </h1>

            <p className="hero-v2-lead">
              International recruitment for companies hiring key talent. Private coaching
              for leaders, professionals and internationals navigating change.
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
                Evaluating candidate motivation, readiness &amp; fit.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Professional Experience */}
      <ProfessionalExperienceStrip />
    </div>
  );
}
