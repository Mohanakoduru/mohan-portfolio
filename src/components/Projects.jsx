import React from 'react';
import { projects, projectMeta, skillIcons } from '../data';

// small tech badge with logo where available
const TechBadge = ({ name }) => {
  const meta = skillIcons[name];
  return (
    <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#faf6f2] border border-[var(--border)] flex items-center gap-1.5" style={{ color: 'var(--text-soft)' }}>
      {meta?.slug ? (
        <img
          src={`https://cdn.simpleicons.org/${meta.slug}`}
          alt=""
          loading="lazy"
          className="w-3.5 h-3.5 object-contain"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      ) : (
        <span className="leading-none">{meta?.emoji || '•'}</span>
      )}
      {name}
    </span>
  );
};

const ProjectCard = ({ project, index }) => {
  const meta = projectMeta[project.id] || { icon: '✦', accent: '#b08401' };
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={(index % 2) * 120}
      className="group relative rounded-3xl overflow-hidden border border-[var(--border)] bg-white hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(104,59,43,0.14)] transition-all duration-500"
    >
      {/* Icon header band */}
      <div
        className="relative h-32 flex items-center justify-between px-8 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${meta.accent}, ${meta.accent}cc)` }}
      >
        <span className="text-6xl drop-shadow-sm">{meta.icon}</span>
        <span className="text-7xl font-black text-white/20 leading-none select-none">0{index + 1}</span>
        <div className="absolute inset-0 bg-dotgrid-light opacity-40" />
      </div>

      <div className="relative p-8 flex flex-col h-full">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-2xl font-black" style={{ color: 'var(--text)' }}>{project.name}</h3>
          <span className="text-xs font-mono" style={{ color: 'var(--text-soft)' }}>{project.year}</span>
        </div>
        <p className="text-sm font-semibold mb-4" style={{ color: 'var(--accent)' }}>
          {project.subtitle}
        </p>

        <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: 'var(--text-soft)' }}>{project.description}</p>

        {project.highlight && (
          <div className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full bg-[#faf6f2] border border-[var(--border)] text-xs font-bold mb-5" style={{ color: 'var(--text)' }}>
            <span style={{ color: 'var(--accent)' }}>★</span> {project.highlight}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <TechBadge key={t} name={t} />
          ))}
        </div>

        <a
          href={project.link}
          className="inline-flex items-center gap-2 font-bold text-sm group/link w-max"
          style={{ color: 'var(--accent)' }}
        >
          View Project
          <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-[#ded1bd] py-24 px-6 md:px-12 w-full relative overflow-hidden">
      {/* soft glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[30rem] blur-[140px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #faf6f2, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div data-aos="fade-up" className="mb-14 max-w-2xl">
          <div className="inline-block border border-[var(--border)] rounded-full px-5 py-1.5 text-sm font-bold mb-6 bg-[#faf6f2]/60" style={{ color: 'var(--text-soft)' }}>
            Selected Work
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-4" style={{ color: 'var(--text)' }}>
            Projects I&apos;ve <span className="text-gradient">Built &amp; Shipped</span>
          </h2>
          <p className="text-lg font-medium" style={{ color: 'var(--text-soft)' }}>
            Real, production-ready AI tools — from predictive ML systems to LLM-powered apps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
