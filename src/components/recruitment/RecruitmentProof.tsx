import React from 'react';

const testimonials = [
  {
    name: 'George Bakkeren',
    role: 'Founder & Owner, Deliver-IT Switzerland',
    image: '/images/testimonials/george-bakkeren.jpg',
    tag: 'Client Perspective',
    quote:
      'Jana combines professionalism with genuine care for both clients and candidates. She is highly proactive, communicates clearly, and always follows through. I highly recommend her services.',
  },
  {
    name: 'Danica Miller',
    role: 'Global Senior Manager TA, STADA Arzneimittel AG',
    image: '/images/testimonials/danica-miller.png',
    tag: 'Enterprise Talent Lead',
    quote:
      'You are one of our LinkedIn Superusers! Active for 158 days, viewed 1,394 profiles, sent 1,113 InMails. These numbers illustrate your dedication to finding the right talent.',
  },
  {
    name: 'Zoltan Erdely',
    role: 'Senior NetDevOps Engineer',
    image: '/images/testimonials/zoltan-erdely.png',
    tag: 'Placed Candidate',
    quote:
      'Jana was instrumental in helping me secure my new role. She acted as a true career partner and followed up after every interview stage. I cannot recommend Jana highly enough.',
  },
];

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
              Case Study &bull; Executive Search
            </span>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
              Cross-Border Tech Role &bull; Switzerland
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
            <strong>The Challenge:</strong> A Switzerland-based tech firm needed a niche hybrid cloud and automation lead. Passive candidates at this level were already well-compensated, shielded by counter-offers, and wary of lengthy multi-stage interview panels across different timezones.
          </p>
          <p
            style={{
              fontSize: 'var(--t-body)',
              lineHeight: 'var(--lh-body)',
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '0',
            }}
          >
            <strong>The Coaching-Informed Intervention:</strong> Through deep 1-on-1 career mapping before presentation, Jana prepared the candidate for the exact boardroom expectations. Structured post-interview debriefs after each round prevented candidate anxiety from turning into detachment. When the final offer landed, expectations were already aligned — resulting in an immediate signature, zero counter-offer wobble, and successful probation completion.
          </p>
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
            <div
              key={idx}
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
                <p
                  style={{
                    fontSize: 'var(--t-body)',
                    lineHeight: 'var(--lh-body)',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontStyle: 'italic',
                    marginBottom: '24px',
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.image}
                  alt={t.name}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '1px solid var(--primary)',
                  }}
                  loading="lazy"
                />
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
          ))}
        </div>
      </div>
    </section>
  );
}
