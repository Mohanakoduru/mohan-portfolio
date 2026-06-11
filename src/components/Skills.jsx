import React from 'react';
import { skillGroups, coreSkills, skillIcons } from '../data';

// Render a tech logo (simpleicons CDN) or an emoji fallback.
const SkillIcon = ({ name }) => {
  const meta = skillIcons[name];
  if (meta?.slug) {
    return (
      <img
        src={`https://cdn.simpleicons.org/${meta.slug}`}
        alt=""
        loading="lazy"
        className="w-4 h-4 object-contain shrink-0"
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />
    );
  }
  return <span className="text-sm leading-none shrink-0">{meta?.emoji || '✦'}</span>;
};

const Skills = () => {
  const marquee = [...coreSkills, ...coreSkills];

  return (
    <section id="skills" className="bg-[#faf6f2] py-24 px-6 md:px-12 w-full relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-14">
          <div className="inline-block border border-[var(--border)] rounded-full px-5 py-1.5 text-sm font-bold mb-6" style={{ color: 'var(--text-soft)' }}>
            My Toolkit
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]" style={{ color: 'var(--text)' }}>
            Skills &amp; <span className="text-gradient">Technologies</span>
          </h2>
        </div>

        {/* Marquee of core skills */}
        <div className="relative overflow-hidden py-6 mb-14 border-y border-[var(--border)]">
          <div className="flex gap-10 w-max animate-marquee">
            {marquee.map((s, i) => (
              <span
                key={i}
                className="text-2xl md:text-4xl font-black whitespace-nowrap transition-colors flex items-center gap-3"
                style={{ color: 'rgba(58,38,27,0.28)' }}
              >
                <SkillIcon name={s} />
                {s} <span style={{ color: 'var(--accent)' }}>✦</span>
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
              className="bg-white border border-[var(--border)] rounded-2xl p-6 hover:shadow-[0_15px_40px_rgba(104,59,43,0.10)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <h3 className="font-black text-lg mb-4 flex items-center gap-2" style={{ color: 'var(--text)' }}>
                <span className="w-1.5 h-6 rounded-full" style={{ background: 'var(--accent)' }} />
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-sm font-medium border border-[var(--border)] bg-[#faf6f2] hover:bg-[var(--accent)] hover:text-white hover:border-transparent transition-all flex items-center gap-1.5"
                    style={{ color: 'var(--text-soft)' }}
                  >
                    <SkillIcon name={item} />
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
