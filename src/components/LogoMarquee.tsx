import React from 'react';

const logos = [
  { name: 'IBM', src: '/images/logos/ibm.svg' },
  { name: 'GoodCall', src: '/images/logos/goodcall.png' },
  { name: 'Facebook', src: '/images/logos/facebook.png' },
  { name: 'Deutsche Börse', src: '/images/logos/deutsche-boerse.svg' },
  { name: 'Nestlé', src: '/images/logos/nestle.png' },
  { name: 'Sitecore', src: '/images/logos/sitecore.png' },
  { name: 'Tietoevry', src: '/images/logos/tietoevry.png' },
  { name: 'Deliver-IT Switzerland', src: '/images/logos/deliver-it.svg' },
  { name: 'Arthur Hunt', src: '/images/logos/arthur-hunt.png' },
  { name: 'STADA', src: '/images/logos/stada.png' },
  { name: 'Rohde & Schwarz', src: '/images/logos/rohde-schwarz.png' },
];

export default function LogoMarquee() {
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {logos.map((logo) => (
          <div className="marquee-item" key={logo.name}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="marquee-logo" src={logo.src} alt={logo.name} loading="lazy" />
          </div>
        ))}
        {logos.map((logo) => (
          <div className="marquee-item" key={`dup-${logo.name}`} aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="marquee-logo" src={logo.src} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
