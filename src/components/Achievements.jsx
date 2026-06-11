import React from 'react';
import { achievements, testimonial } from '../data';

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative w-full py-24 px-6 md:px-12 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #2c1a12 0%, #3a261b 60%, #2c1a12 100%)' }}
    >
      {/* soft glows */}
      <div className="absolute -top-20 right-0 w-[30rem] h-[30rem] rounded-full blur-[130px] opacity-30 animate-blob pointer-events-none" style={{ background: 'radial-gradient(circle, #b08401, transparent 70%)' }} />
      <div className="absolute bottom-0 -left-20 w-[26rem] h-[26rem] rounded-full blur-[130px] opacity-25 animate-blob pointer-events-none" style={{ background: 'radial-gradient(circle, #d49e8d, transparent 70%)', animationDelay: '7s' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div data-aos="fade-up" className="mb-14 max-w-2xl">
          <div className="inline-block border border-white/15 rounded-full px-5 py-1.5 text-sm font-bold mb-6 text-white/70">
            Recognition
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] text-white">
            Achievements &amp; <span className="text-gradient-light">Highlights</span>
          </h2>
        </div>

        {/* achievement cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {achievements.map((a, i) => (
            <div
              key={a.title}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="group relative rounded-2xl p-6 bg-white/[0.04] border border-white/10 hover:border-[var(--accent)] hover:bg-white/[0.07] transition-all duration-400 overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 text-7xl opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 select-none">
                {a.icon}
              </div>
              <div className="relative z-10">
                <div className="text-4xl mb-4 inline-block animate-float" style={{ animationDelay: `${i * 0.4}s` }}>
                  {a.icon}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ background: 'var(--accent)', color: '#fff' }}>
                    {a.tag}
                  </span>
                </div>
                <h3 className="text-lg font-black text-white mb-1.5 leading-snug">{a.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{a.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* testimonial */}
        <div
          data-aos="fade-up"
          className="relative rounded-3xl p-8 md:p-12 border border-white/10 bg-white/[0.04] max-w-4xl"
        >
          <div className="absolute top-6 left-8 text-7xl font-display leading-none select-none" style={{ color: 'var(--accent)', opacity: 0.5 }}>
            &ldquo;
          </div>
          <p className="relative z-10 text-xl md:text-2xl font-medium text-white/90 leading-relaxed pt-8">
            {testimonial.quote}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white" style={{ background: 'var(--accent)' }}>
              {testimonial.author.charAt(0)}
            </div>
            <div>
              <div className="font-bold text-white text-sm">{testimonial.author}</div>
              <div className="text-white/50 text-xs">{testimonial.role}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
