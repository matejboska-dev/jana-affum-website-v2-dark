'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

const slides = [
  {
    badge: 'Exit strategy',
    title: 'Leave without the panic',
    desc: 'Break free from corporate exhaustion and golden handcuffs with a calculated, low-risk financial runway.',
    image: '/images/coaching-burnout-card.jpg',
  },
  {
    badge: 'Market reality check',
    title: 'Pivot with actual data',
    desc: 'Test whether your next move pays what you need before you hand in your notice, backed by 10 years of hiring intelligence.',
    image: '/images/coaching-career-card.jpg',
  },
  {
    badge: 'Recruiter advantage',
    title: 'Stand out to decision makers',
    desc: 'Position your track record, beat the LinkedIn algorithms, and negotiate your compensation with confidence.',
    image: '/images/coaching-cv-card.jpg',
  },
];

export default function Offer() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Autoplay
  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide]);

  const handleMouseEnter = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(nextSlide, 5000);
  };

  return (
    <div id="coaching" className="section radius-top" style={{ padding: '96px 0' }}>
      <div className="base-container w-container">
        <div className="section-title-wrap">
          <h2 id="coaching-focus" className="flex-title">
            <span className="h2-span">Coaching:</span> Clarity and strategy for your next move
          </h2>
          <p className="item-description-gray">
            A structured, confidential space to evaluate your real market value, overcome
            corporate burnout, and build a concrete transition roadmap.
          </p>
        </div>

        {/* Big Card: Main Coaching Overview */}
        <div className="home-5-services-block-wrapper">
          <div
            style={{ backgroundImage: "url('/images/jana-coaching.jpg')" }}
            className="home-5-big-one-round-corners"
          ></div>
          <div className="home-5-services-overlay">
            <div className="case-study-badge" style={{ marginBottom: '12px' }}>
              1-on-1 private coaching
            </div>
            <h3
              style={{
                fontSize: 'var(--t-subhead)',
                lineHeight: 'var(--lh-head)',
                letterSpacing: 'var(--ls-head)',
                marginBottom: '14px',
                color: 'var(--text-dark)',
              }}
            >
              Navigate your crossroads with real insight
            </h3>
            <p
              className="paragraph-home-4"
              style={{
                color: 'var(--par-color)',
                fontSize: 'var(--t-body)',
                lineHeight: 'var(--lh-body)',
                marginBottom: '24px',
                maxWidth: 'var(--measure)',
              }}
            >
              One-on-one career coaching for professionals at a crossroads. Available as a single 60-minute intensive, a
              comprehensive transition programme, or ongoing bi-weekly advisory. Every
              engagement delivers concrete outputs: honest skills assessment, market reality
              check, positioning strategy, and a clear plan forward.
            </p>
            <div className="link-wrap">
              <a href="#booking" className="cta-pill-button">
                <span>Book a 15-minute conversation</span>
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
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Coaching Slider */}
      <div
        className="coaching-slider-fullwidth"
        style={{ marginTop: '40px' }}
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="coaching-slider-track"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          {slides.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                className={`coaching-slide ${isActive ? 'active' : ''}`}
                key={idx}
                style={{
                  cursor: 'pointer',
                  opacity: isActive ? 1 : 0.75,
                  transform: isActive ? 'scale(1.02)' : 'scale(0.98)',
                  transition: 'all 0.4s ease',
                }}
                onClick={() => setCurrentIndex(idx)}
              >
                <a href="#booking" className="coaching-slide-link" style={{ display: 'block' }}>
                  <div className="coaching-slide-card">
                    <div
                      className="coaching-slide-img"
                      style={{ backgroundImage: `url('${slide.image}')` }}
                    ></div>
                    <div className="coaching-slide-gradient"></div>
                    <div className="coaching-slide-content">
                      <span className="pillar-badge">{slide.badge}</span>
                      <h3 className="coaching-slide-title">{slide.title}</h3>
                      <p className="coaching-slide-desc">{slide.desc}</p>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          className="coaching-slider-arrow coaching-slider-arrow-left"
          onClick={prevSlide}
          aria-label="Previous slide"
          type="button"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/6564e2fb7f15cb1c966d21c0_Vector%2011.webp"
            alt="Previous"
            className="slider-arrow-2"
          />
        </button>
        <button
          className="coaching-slider-arrow coaching-slider-arrow-right"
          onClick={nextSlide}
          aria-label="Next slide"
          type="button"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/6564e2f94f64a387443d7e9f_Vector%206.webp"
            alt="Next"
            className="slider-arrow-2"
          />
        </button>
      </div>
    </div>
  );
}
