import React from 'react';
import { profile } from '../data';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#050409] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[55vh] border-t border-white/5">
      {/* Top */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>AI / ML Development</p>
          <p>Data Science · NLP · LLMs</p>
          <p>Predictive Analytics</p>
        </div>
        <div className="flex flex-col gap-1 md:items-center">
          <p>B.Tech AI &amp; DS · LBRCE</p>
          <a href="#projects" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">View Work</a>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <p>{profile.location}</p>
          <p>Open to opportunities · {year}</p>
        </div>
      </div>

      {/* Huge wordmark */}
      <div className="w-full flex justify-center items-center py-16 md:py-20 overflow-hidden">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-black tracking-tighter lowercase select-none w-full text-center text-white/[0.92]">
          {profile.firstName}
        </h2>
      </div>

      {/* Bottom */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline hover:text-white transition-colors underline-offset-4">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="underline hover:text-white transition-colors underline-offset-4">GitHub</a>
          </div>
          <p className="text-white/50 text-[9px] md:text-[10px]">© {year} {profile.fullName} · Built with React</p>
        </div>
        <div className="flex flex-col gap-1 md:items-center">
          <a href={`mailto:${profile.email}`} className="underline hover:text-white transition-colors underline-offset-4 lowercase">{profile.email}</a>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <a href="#home" className="underline hover:text-white transition-colors underline-offset-4">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
