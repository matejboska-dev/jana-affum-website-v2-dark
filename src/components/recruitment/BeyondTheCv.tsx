import React from 'react';

const questions = [
  {
    num: '01',
    title: 'What is genuinely driving this move?',
    desc: 'Are they reacting to temporary frustration in their current team, or moving toward a calculated strategic next step? Disentangling short-term irritation from genuine, durable career motivation.',
    outcome: 'Eliminates candidates who get cold feet at offer stage.',
  },
  {
    num: '02',
    title: 'What does mutual success look like in months 3, 6, and 12?',
    desc: 'Surface interviews focus on past achievements. We interrogate expected pace, required autonomy, team communication styles, and the exact deliverables that define a successful first year.',
    outcome: 'Prevents post-hire expectation mismatches and early friction.',
  },
  {
    num: '03',
    title: 'How do they navigate high-stakes ambiguity & friction?',
    desc: 'Testing how they handle pressure, cross-functional roadblocks, and differing opinions in executive rooms. Not through hypothetical interview scripts, but grounded in their actual conflict-resolution patterns.',
    outcome: 'Ensures the candidate has the emotional maturity to lead.',
  },
  {
    num: '04',
    title: 'What would their current employer have to offer for them to stay?',
    desc: 'Counter-offers derail 40% of standard agency placements. We rigorously stress-test the psychological ties to their current company, salary benchmarks, and unspoken emotional reservations before you invest your board’s time.',
    outcome: 'Guards against counter-offer surprises and wasted recruitment cycles.',
  },
];

export default function BeyondTheCv() {
  return (
    <div id="beyond-the-cv" className="section-light-bg" style={{ padding: '96px 0', background: '#FAF7F0' }}>
      <div className="base-container w-container">
        <div className="section-title-wrap">
          <div
            className="case-study-badge"
            style={{
              marginBottom: '12px',
              background: '#FFFFFF',
              color: 'var(--gold-deep)',
              border: '1px solid rgba(211,175,101,0.3)',
            }}
          >
            Deeper Assessment
          </div>
          <h2 className="flex-title" style={{ justifyContent: 'center' }}>
            <span className="h2-span">Beyond the CV:</span> Four questions standard interviews miss
          </h2>
          <p className="item-description-gray" style={{ maxWidth: '720px', margin: '14px auto 0 auto', textAlign: 'center' }}>
            A strong resume tells you where someone was. It tells you very little about how they will perform in your specific culture, under your specific constraints, with your specific team.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginTop: '48px',
          }}
        >
          {questions.map((q) => (
            <div
              key={q.num}
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(211,175,101,0.2)',
                borderRadius: '16px',
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 16px rgba(36,30,20,0.04)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '32px',
                  fontWeight: 700,
                  color: 'var(--gold-deep)',
                  opacity: 0.8,
                  marginBottom: '14px',
                  lineHeight: 1,
                }}
              >
                {q.num}
              </div>
              <h3
                style={{
                  fontSize: 'var(--t-card)',
                  lineHeight: 'var(--lh-head)',
                  color: 'var(--text-dark)',
                  marginBottom: '14px',
                }}
              >
                {q.title}
              </h3>
              <p
                style={{
                  fontSize: 'var(--t-meta)',
                  lineHeight: 'var(--lh-body)',
                  color: 'var(--par-color)',
                  marginBottom: '20px',
                  flexGrow: 1,
                }}
              >
                {q.desc}
              </p>
              <div
                style={{
                  background: 'rgba(211,175,101,0.1)',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  borderLeft: '3px solid var(--gold-deep)',
                }}
              >
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold-deep)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '2px' }}>
                  Hiring Impact
                </span>
                <span style={{ fontSize: '13px', color: 'var(--text-dark)', lineHeight: 1.4 }}>
                  {q.outcome}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Financial cost of bad hire note */}
        <div
          style={{
            marginTop: '48px',
            background: '#FFFFFF',
            border: '1px solid rgba(211,175,101,0.25)',
            borderRadius: '16px',
            padding: '32px 36px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ flex: '1 1 500px' }}>
            <h4 style={{ fontSize: 'var(--t-subhead)', color: 'var(--text-dark)', margin: '0 0 8px 0' }}>
              The real cost of a wrong hire is €30,000+ before fees
            </h4>
            <p style={{ margin: 0, fontSize: 'var(--t-body)', color: 'var(--par-color)', lineHeight: 'var(--lh-body)' }}>
              For a role paying €120,000 annually, three months of false start represents €30,000 in direct salary alone — plus lost strategic momentum, onboarding drain, and management disruption. Deep qualification is risk insurance.
            </p>
          </div>
          <div>
            <a href="#hiring-inquiry" className="primary-button w-button">
              Discuss your hiring requirements
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
