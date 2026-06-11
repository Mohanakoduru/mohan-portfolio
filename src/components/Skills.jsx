import React from 'react';
import { skillGroups, coreSkills } from '../data';

const Skills = () => {
  const marquee = [...coreSkills, ...coreSkills];

  return (
    <section id="skills" className="bg-[#07060d] py-24 px-6 md:px-12 w-full relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-14">
          <div className="inline-block border border-white/15 rounded-full px-5 py-1.5 text-sm text-white/70 font-bold mb-6">
            My Toolkit
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
            Skills &amp; <span className="text-gradient">Technologies</span>
          </h2>
        </div>

        {/* Marquee of core skills */}
        <div className="relative overflow-hidden py-6 mb-14 border-y border-white/10">
          <div className="flex gap-10 w-max animate-marquee">
            {marquee.map((s, i) => (
              <span
                key={i}
                className="text-2xl md:text-4xl font-black whitespace-nowrap text-white/30 hover:text-white transition-colors"
              >
                {s} <span style={{ color: 'var(--accent-bright)' }}>✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Grouped chips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <div
              key={group.title}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-white/25 transition-colors group"
            >
              <h3 className="text-white font-black text-lg mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 rounded-full" style={{ background: 'var(--accent)' }} />
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-white/80 hover:bg-[var(--accent)] hover:text-white hover:border-transparent transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
