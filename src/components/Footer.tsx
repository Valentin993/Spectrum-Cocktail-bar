import React from 'react';

interface FooterProps {
  setActiveTab: (tab: 'mixology' | 'menu' | 'reservations') => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0c0f0d] px-6 py-12 md:py-16 md:px-12" id="main-footer">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand Signoff */}
        <button
          onClick={() => setActiveTab('mixology')}
          className="font-serif text-3xl font-extrabold tracking-widest text-primary focus:outline-none cursor-pointer hover:text-accent transition-colors duration-300"
          id="footer-logo"
        >
          SPECTRUM
        </button>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs font-semibold tracking-wider text-ivory/60" id="footer-links">
          <a
            href="#instagram"
            className="hover:text-accent transition-colors duration-200"
            id="link-instagram"
            onClick={(e) => e.preventDefault()}
          >
            Instagram
          </a>
          <a
            href="#facebook"
            className="hover:text-accent transition-colors duration-200"
            id="link-facebook"
            onClick={(e) => e.preventDefault()}
          >
            Facebook
          </a>
          <a
            href="#privacy"
            className="hover:text-accent transition-colors duration-200"
            id="link-privacy"
            onClick={(e) => e.preventDefault()}
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="hover:text-accent transition-colors duration-200"
            id="link-terms"
            onClick={(e) => e.preventDefault()}
          >
            Terms of Service
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-ivory/40 font-sans tracking-wide" id="footer-copyright">
          © {currentYear} SPECTRUM. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
