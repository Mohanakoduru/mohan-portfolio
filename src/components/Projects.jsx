import React from 'react';
import { projects } from '../data';

const ProjectCard = ({ project, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={(index % 2) * 120}
    className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-[var(--accent)] transition-all duration-500"
  >
    {/* Glow on hover */}
    <div
      className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{ background: 'radial-gradient(600px circle at 50% 0%, var(--accent-glow), transparent 60%)' }}
    />

    <div className="relative p-8 flex flex-col h-full">
      <div className="flex items-start justify-between mb-5">
        <span className="text-5xl font-black text-white/10 leading-none">0{index + 1}</span>
        <span className="text-xs font-mono text-white/40">{project.year}</span>
      </div>

      <h3 className="text-2xl font-black text-white mb-1">{project.name}</h3>
      <p className="text-sm font-semibold mb-4" style={{ color: 'var(--accent-bright)' }}>
        {project.subtitle}
      </p>

      <p className="text-white/60 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

      {project.highlight && (
        <div className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white mb-5">
          <span style={{ color: 'var(--accent-bright)' }}>★</span> {project.highlight}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-white/70 border border-white/10">
            {t}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        className="inline-flex items-center gap-2 text-white font-bold text-sm group/link w-max"
      >
        View Project
        <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="bg-[#07060d] py-24 px-6 md:px-12 w-full relative overflow-hidden">
      {/* soft glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[30rem] blur-[140px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--accent), transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div data-aos="fade-up" className="mb-14 max-w-2xl">
          <div className="inline-block border border-white/15 rounded-full px-5 py-1.5 text-sm text-white/70 font-bold mb-6">
            Selected Work
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05] mb-4">
            Projects I&apos;ve <span className="text-gradient">Built &amp; Shipped</span>
          </h2>
          <p className="text-white/60 text-lg font-medium">
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
