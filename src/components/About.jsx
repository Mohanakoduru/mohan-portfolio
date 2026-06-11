import React from 'react';
import { profile, about } from '../data';

const tags = [
  'AI Enthusiast',
  'Machine Learning Engineer',
  'Data Scientist',
  'Developer',
  'LLM & NLP Expert',
];

const Chip = ({ children, accent }) => (
  <span
    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border backdrop-blur-md transition-colors ${
      accent
        ? 'border-[var(--accent-bright)]/50 text-white bg-[var(--accent)]/15'
        : 'border-white/15 text-white/85 bg-white/5 hover:bg-white/10'
    }`}
  >
    {children}
  </span>
);

const About = () => {
  return (
    <section
      id="about"
      className="w-full relative overflow-hidden font-sans"
      style={{ background: 'linear-gradient(160deg, #0a0613 0%, #1a0b2e 55%, #0a0613 100%)' }}
    >
      {/* Mobile: faint static cartoon background behind content */}
      <div className="md:hidden absolute inset-0 z-0 pointer-events-none">
        <img
          src="/cartoon.png"
          alt=""
          className="absolute right-0 bottom-0 h-full w-auto object-contain opacity-20"
        />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 md:px-12 relative z-10">
        {/* LEFT — scrolling content */}
        <div className="py-24 md:py-28">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8" style={{ background: 'var(--accent-bright)' }} />
            <span
              className="text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: 'var(--accent-bright)' }}
            >
              About me
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-3">
            {about.heading}
          </h2>
          <div
            className="text-lg md:text-xl font-bold mb-7"
            style={{ color: 'var(--accent-bright)' }}
          >
            {profile.role}
          </div>

          <p className="text-white/70 text-base md:text-lg font-medium leading-relaxed max-w-lg mb-9">
            {about.intro}
          </p>

          {/* Role / expertise tags */}
          <div className="flex flex-wrap gap-3 mb-6 max-w-lg">
            {tags.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>

          {/* Quick info chips */}
          <div className="flex flex-wrap gap-3 mb-10 max-w-lg">
            <Chip accent>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z"/></svg>
              {profile.location}
            </Chip>
            <Chip accent>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              AI / ML Problem Solving
            </Chip>
            <Chip>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              {profile.email}
            </Chip>
          </div>

          {/* Education + Experience cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-lg mb-10">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15">
              <div className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">Education</div>
              <div className="font-black text-white leading-snug">{about.education.degree}</div>
              <div className="text-sm text-white/80 mt-1">{about.education.college}</div>
              <div className="text-sm text-white/70 mt-2 font-semibold">
                CGPA {about.education.cgpa} · {about.education.graduation}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15">
              <div className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">Experience</div>
              <div className="font-black text-white leading-snug">{about.experience.role}</div>
              <div className="text-sm text-white/80 mt-1">{about.experience.company}</div>
              <div className="text-sm text-white/70 mt-2 font-semibold">{about.experience.period}</div>
            </div>
          </div>

          {/* Connect with me */}
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-white/50 mb-4">
              Connect with me
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="w-11 h-11 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:bg-[var(--accent)] hover:text-white transition-all" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 17V10.5H6.27V17h2.07zM7.3 9.58a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4zM18 17v-3.57c0-1.9-.41-3.36-2.63-3.36-1.07 0-1.79.59-2.08 1.14h-.03v-.97h-1.99V17h2.07v-3.21c0-.85.16-1.67 1.21-1.67 1.04 0 1.05.97 1.05 1.72V17H18z"/></svg>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="w-11 h-11 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:bg-[var(--accent)] hover:text-white transition-all" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>
              </a>
              <a href={`mailto:${profile.email}`} className="w-11 h-11 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:bg-[var(--accent)] hover:text-white transition-all" aria-label="Email">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>
              <a href={`tel:${profile.phone}`} className="w-11 h-11 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:bg-[var(--accent)] hover:text-white transition-all" aria-label="Phone">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.5 15.5 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — static (sticky) semi-transparent cartoon background */}
        <div className="hidden md:block">
          <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none">
            <img
              src="/cartoon.png"
              alt={profile.name}
              className="max-h-[90vh] w-auto object-contain opacity-70 drop-shadow-[0_25px_60px_rgba(124,58,237,0.4)]"
            />
          </div>
        </div>
      </div>

      {/* Decorative sparkle */}
      <div className="absolute top-16 right-10 md:right-24 text-white opacity-20 animate-pulse z-0">
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" /></svg>
      </div>

      {/* wave divider into dark Skills */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20" style={{ fill: '#07060d' }}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default About;
