'use client';

import React, { useState, useEffect } from 'react';
import FullscreenMobileMenu from './FullscreenMobileMenu';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu on Esc or window resize, and track scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth > 991) setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`nav-fixed-menu w-nav ${scrolled ? 'nav-scrolled' : 'nav-at-top'}`} role="banner">
      <div className="white-nav-bg"></div>
      <div className="nav-hero-container w-container">
        <div className="menu-item-wrapper">
          <a
            href="/"
            className="brand-logo-2 w-nav-brand"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/jana-logo-mark.png"
              alt="Jana Affum logo"
              height={44}
              className="logo-consultant-w"
              style={{ display: 'block', width: 'auto' }}
            />
            <span
              className="brand-name-text"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: '20px',
                letterSpacing: '0.02em',
                color: 'var(--text-dark)',
                transition: 'color 0.35s ease',
              }}
            >
              Jana Affum
            </span>
          </a>

          <nav
            role="navigation"
            className="nav-menu-2 w-nav-menu"
            aria-label="Main navigation"
          >
            <div className="nav-menu-shadow-overlay-4">
              <div className="tablet-menu-4">
                <button
                  type="button"
                  className="close-menu-button-3 w-nav-button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation"
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/63c155ba2b5c7835ff19d720_x_icon.webp"
                    alt="Close navigation"
                    className="nav-close-icon-3"
                  />
                </button>
              </div>
              <div className="dropdown-menu-3">
                <div className="top-tablet-menu-3">
                  <div className="border-wrap-3">
                    <div className="nav-dropdown-item">
                      <a
                        href="/"
                        className="dropdown-header-item w-inline-block"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <p className="nav-intro-item-2">Home</p>
                      </a>
                    </div>
                    <div className="nav-dropdown-item">
                      <a
                        href="/recruitment"
                        className="dropdown-header-item w-inline-block"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <p className="nav-intro-item-2">Recruitment</p>
                      </a>
                    </div>
                    <div className="nav-dropdown-item">
                      <a
                        href="/coaching"
                        className="dropdown-header-item w-inline-block"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <p className="nav-intro-item-2">Coaching</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="login-tablet-wrap">
                  <div className="btn-wrap-tablet">
                    <a
                      href="https://calendly.com/janaaffum/15min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="new-primary-button w-button"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Book a private conversation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div className="btn-wrap">
            <a href="https://calendly.com/janaaffum/15min" target="_blank" rel="noopener noreferrer" className="new-primary-button w-button">
              Book a private conversation
            </a>
          </div>

          <button
            type="button"
            className="menu-button-3 w-nav-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open navigation"
            aria-expanded={mobileMenuOpen}
            aria-controls="fullscreen-mobile-navigation"
            aria-haspopup="dialog"
            style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
          >
            <div className="wrapper-item-home-2">
              <div className="nav-line-white-2"></div>
              <div className="line-white-2"></div>
            </div>
          </button>
        </div>
      </div>
      <FullscreenMobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
