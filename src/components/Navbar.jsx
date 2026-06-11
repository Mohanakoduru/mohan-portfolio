import React, { useState, useEffect } from 'react';
import { profile, navLinks } from '../data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen
          ? 'py-4'
          : isScrolled
          ? 'py-3 bg-[#07060d]/70 backdrop-blur-md border-b border-white/5'
          : 'py-6 bg-transparent'
      }`}
      style={isOpen ? { background: 'var(--accent)' } : undefined}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-white text-2xl font-black tracking-tight">
          {profile.firstName}<span style={{ color: 'var(--accent-bright)' }}>.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white/80 hover:text-white font-medium relative group transition-colors duration-300"
            >
              {link}
              <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{ background: 'var(--accent-bright)' }}
              ></span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="text-white/80 hover:text-white font-medium text-sm transition-colors"
          >
            Résumé
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full text-white font-semibold transition-all duration-300 backdrop-blur-md"
            style={{ background: 'var(--accent)', boxShadow: '0 0 18px var(--accent-glow)' }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-4 opacity-100 shadow-2xl' : 'max-h-0 opacity-0'
        }`}
        style={isOpen ? { background: 'var(--accent)' } : undefined}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-black font-bold text-lg border-b border-white/20 pb-2 transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-block px-6 py-3 rounded-full bg-white font-black hover:bg-black hover:text-white transition-colors w-full text-center shadow-lg mt-2"
            style={{ color: 'var(--accent)' }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
