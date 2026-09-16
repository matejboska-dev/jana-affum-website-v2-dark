import React from 'react';

const stats = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M15.6 8.4l-2.1 5.1-5.1 2.1 2.1-5.1 5.1-2.1z"></path>
      </svg>
    ),
    number: '10+',
    label: 'Years of international recruitment across Europe & beyond.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    ),
    number: '1,000s',
    label: 'Career conversations evaluating motivation, readiness & fit.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9"></circle>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <path d="M12 3a13 13 0 0 1 0 18 13 13 0 0 1 0-18z"></path>
      </svg>
    ),
    number: '9',
    label: 'Countries of direct, advisory & agency hiring mandates.',
  },
];

export default function StatStrip() {
  return (
    <div className="section" style={{ paddingTop: '56px', paddingBottom: '56px' }}>
      <div className="base-container w-container">
        <div className="stat-strip">
          {stats.map((stat) => (
            <div className="stat-strip-item" key={stat.label}>
              <div className="stat-strip-icon">{stat.icon}</div>
              <div className="stat-strip-number">{stat.number}</div>
              <p className="stat-strip-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
