'use client';

import React, { useState } from 'react';

interface TestimonialItem {
  name: string;
  role: string;
  image?: string;
  tag: string;
  quote: string[];
  moreQuote?: string[];
  isAnonymous?: boolean;
}

const testimonials: TestimonialItem[] = [
  {
    name: 'George Bakkeren',
    role: 'Founder & Owner, Deliver-IT Switzerland',
    image: '/images/testimonials/george-bakkeren.jpg',
    tag: 'Client Perspective',
    quote: [
      'I have had the pleasure of working closely with Jana and can confidently say that she is one of the most dedicated recruiters I have met. Jana combines professionalism with genuine care for both clients and candidates. She is highly proactive, communicates clearly, and always follows through on her commitments. Her ability to build relationships and identify the right talent is exceptional.',
    ],
    moreQuote: [
      'What I appreciate most is her integrity and determination. She invests the time to understand people, provides valuable guidance, and consistently goes the extra mile to achieve successful outcomes. Jana is not only an excellent recruiter but also a trusted partner who truly cares about helping people advance their careers. I highly recommend her services.',
    ],
  },
  {
    name: 'Danica Miller',
    role: 'Global Senior Manager Talent Acquisition & Employer Branding, STADA Arzneimittel AG',
    image: '/images/testimonials/danica-miller.png',
    tag: 'Enterprise Talent Lead',
    quote: [
      'Dear Jana,',
      'Congratulations! You are one of our LinkedIn Superusers! Looking at the data for the past 8 months, you have been active for an astonishing 158 days, viewed 1394 profiles, sent 1113 InMails out of which 297 were accepted. These are some amazing numbers that illustrate your dedication to finding the right talent for STADA and raising the bar, so thank you for that!',
    ],
  },
  {
    name: 'Senior Infrastructure Specialist',
    role: 'Hybrid Cloud & Automation · International Placement',
    tag: 'Placed Candidate · Confidential (NDA)',
    quote: [
      'Jana was instrumental in helping me secure my new role. She acted as a true career partner and followed up after every interview stage. I cannot recommend Jana highly enough.',
    ],
    isAnonymous: true,
  },
];

function TestimonialCard({ t }: { t: TestimonialItem }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(211, 175, 101, 0.2)',
        borderRadius: '16px',
        padding: '32px 28px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <span
          style={{
            fontSize: '11px',
            fontWeight: 700,
            color: 'var(--primary)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            display: 'block',
            marginBottom: '14px',
          }}
        >
          {t.tag}
        </span>
        <div
          style={{
            fontSize: 'var(--t-body)',
            lineHeight: 'var(--lh-body)',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {t.quote.map((para, pIdx) => {
            const isSalutation = para === 'Dear Jana,';
            const isFirstQuotePara = !isSalutation && (pIdx === 0 || t.quote[0] === 'Dear Jana,');
            const isLastVisiblePara = pIdx === t.quote.length - 1 && (!t.moreQuote || !expanded);

            return (
              <p
                key={pIdx}
                style={{
                  margin: 0,
                  fontStyle: isSalutation ? 'normal' : 'italic',
                  color: isSalutation ? 'rgba(255, 255, 255, 0.75)' : 'rgba(255, 255, 255, 0.9)',
                }}
              >
                {isFirstQuotePara ? '\u201C' : ''}
                {para}
                {isLastVisiblePara ? '\u201D' : ''}
              </p>
            );
          })}

          {t.moreQuote && expanded && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {t.moreQuote.map((para, pIdx) => {
                const isLast = pIdx === t.moreQuote!.length - 1;
                return (
                  <p key={pIdx} style={{ margin: 0, fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.9)' }}>
                    {para}
                    {isLast ? '\u201D' : ''}
                  </p>
                );
              })}
            </div>
          )}

          {t.moreQuote && (
            <div style={{ marginTop: '4px' }}>
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '4px 0',
                  color: 'var(--primary)',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  letterSpacing: '0.02em',
                  transition: 'opacity 0.2s ease',
                  fontStyle: 'normal',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                <span>{expanded ? 'Show less' : 'Read more'}</span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease',
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px' }}>
        {t.isAnonymous ? (
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(211, 175, 101, 0.15)',
              border: '1px solid var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary)',
              flexShrink: 0,
            }}
            aria-label="Identity protected under NDA"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={t.image}
            alt={t.name}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '1px solid var(--primary)',
              flexShrink: 0,
            }}
            loading="lazy"
          />
        )}
        <div>
          <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF' }}>
            {t.name}
          </div>
          <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.3 }}>
            {t.role}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RecruitmentProof() {
  return (
    <section id="recruitment-proof" className="section-reviews" style={{ padding: '96px 0' }}>
      <div className="base-container w-container">
        <div className="section-title-wrap large">
          <div
            className="case-study-badge"
            style={{
              marginBottom: '14px',
              background: 'rgba(211,175,101,0.2)',
              color: 'var(--primary)',
              border: '1px solid rgba(211,175,101,0.3)',
            }}
          >
            Track Record &amp; Evidence
          </div>
          <h2 id="client-stories" className="h2-hero-title-white">
            <span className="h2-span light">Proven outcomes:</span> How partners evaluate our work
          </h2>
          <p className="item-description-white" style={{ maxWidth: '680px', margin: '14px auto 0 auto' }}>
            Direct references from founders, enterprise talent leaders, and senior engineers placed in mission-critical roles.
          </p>
        </div>

        {/* Featured Case Study Card */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(211, 175, 101, 0.25)',
            borderRadius: '20px',
            padding: '44px 40px',
            maxWidth: '820px',
            margin: '0 auto 64px auto',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
            <span
              style={{
                fontSize: 'var(--t-label)',
                fontWeight: 700,
                color: 'var(--primary)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--ls-label)',
              }}
            >
              Case Study &bull; International Search
            </span>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
              Cross-Border Tech Role &bull; Confidential (NDA)
            </span>
          </div>

          <h3
            style={{
              fontSize: 'var(--t-subhead)',
              lineHeight: 'var(--lh-head)',
              color: '#FFFFFF',
              marginBottom: '16px',
            }}
          >
            Securing a senior infrastructure lead in a 5-round international process
          </h3>
          <p
            style={{
              fontSize: 'var(--t-body)',
              lineHeight: 'var(--lh-body)',
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '20px',
            }}
          >
            <strong>The Challenge:</strong> A European tech enterprise needed a niche hybrid cloud and automation lead. Passive candidates at this level were already well-compensated, shielded by counter-offers, and wary of lengthy multi-stage interview panels across different timezones.
          </p>
          <p
            style={{
              fontSize: 'var(--t-body)',
              lineHeight: 'var(--lh-body)',
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '24px',
            }}
          >
            <strong>The Coaching-Informed Intervention:</strong> Through deep 1-on-1 career mapping before presentation, Jana prepared the candidate for the exact boardroom expectations. Structured post-interview debriefs after each round prevented candidate anxiety from turning into detachment. When the final offer landed, expectations were already aligned — resulting in an immediate signature, zero counter-offer wobble, and successful probation completion.
          </p>

          {/* Anonymized Candidate Verification / Reference */}
          <div
            style={{
              borderTop: '1px solid rgba(211, 175, 101, 0.25)',
              paddingTop: '20px',
              marginTop: '8px',
            }}
          >
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '10px',
              }}
            >
              Candidate Perspective &bull; Anonymized (NDA Protected)
            </div>
            <blockquote
              style={{
                fontSize: '15px',
                lineHeight: '1.6',
                color: 'rgba(255, 255, 255, 0.95)',
                fontStyle: 'italic',
                margin: '0 0 10px 0',
                paddingLeft: '16px',
                borderLeft: '2px solid var(--primary)',
              }}
            >
              &ldquo;Jana was instrumental in helping me secure my new role. She acted as a true career partner and followed up after every interview stage. I cannot recommend Jana highly enough.&rdquo;
            </blockquote>
            <div
              style={{
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.65)',
                paddingLeft: '18px',
              }}
            >
              &mdash; Senior Infrastructure Specialist &bull; Placed Candidate (Identity protected under NDA)
            </div>
          </div>
        </div>

        {/* 3 Testimonials Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
