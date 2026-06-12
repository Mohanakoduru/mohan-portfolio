import React, { useRef, useEffect, useState, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { profile, availability } from '../data';
import CountUp from './CountUp';

const FLOAT_LOGOS = [
  { slug: 'python', top: '16%', left: '50%', d: '0s' },
  { slug: 'react', top: '11%', left: '82%', d: '1.2s' },
  { slug: 'openai', top: '34%', left: '70%', d: '0.6s' },
  { slug: 'pandas', top: '58%', left: '60%', d: '1.8s' },
  { slug: 'fastapi', top: '70%', left: '86%', d: '0.9s' },
];

const STATS = [
  { target: 4, suffix: '+', decimals: 0, label: 'AI Projects' },
  { target: 6, suffix: 'mo', decimals: 0, label: 'Freelance' },
  { target: 8.2, suffix: '', decimals: 2, label: 'CGPA' },
  { target: 2, suffix: 'x', decimals: 0, label: 'Hackathons' },
];

const INTRO_TEXT = `Hi, I'm ${profile.fullName}. I'm an A.I. and Machine Learning developer. I build and ship intelligent systems — machine learning models, A.I. chatbots, and predictive analytics tools using Python, large language models, and modern web frameworks. I've completed a Machine Learning internship and shipped multiple production-ready A.I. projects. Let's build something smart together.`;

const Hero = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % profile.roles.length),
      2200
    );
    return () => clearInterval(id);
  }, []);

  const stopSpeech = () => {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  const speakFallback = useCallback(() => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(INTRO_TEXT);
    u.rate = 0.98;
    u.pitch = 0.95;
    const voices = window.speechSynthesis.getVoices();
    // prefer a male voice
    const preferred =
      voices.find((v) => /David|Mark|Guy|Google UK English Male|Daniel/i.test(v.name)) ||
      voices.find((v) => /Male/i.test(v.name)) ||
      voices[0];
    if (preferred) u.voice = preferred;
    u.onend = () => setIsPlaying(false);
    setIsPlaying(true);
    window.speechSynthesis.speak(u);
  }, []);

  const playIntro = useCallback(() => {
    setShowHint(false);
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      const p = audio.play();
      if (p && p.then) {
        p.then(() => setIsPlaying(true)).catch(() => speakFallback());
      } else {
        setIsPlaying(true);
      }
    } else {
      speakFallback();
    }
  }, [speakFallback]);

  const toggleIntro = () => {
    if (isPlaying) {
      if (audioRef.current) audioRef.current.pause();
      stopSpeech();
    } else {
      playIntro();
    }
  };

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-[#faf6f2]">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dotgrid opacity-60" />
        <div className="absolute -top-32 -left-24 w-[40rem] h-[40rem] rounded-full blur-[120px] opacity-45 animate-blob" style={{ background: 'radial-gradient(circle, #d49e8d, transparent 70%)' }} />
        <div className="absolute top-1/3 left-1/4 w-[32rem] h-[32rem] rounded-full blur-[120px] opacity-35 animate-blob" style={{ background: 'radial-gradient(circle, #b08401, transparent 70%)', animationDelay: '8s' }} />
      </div>

      {/* Portrait blended into the background (right side) */}
      <div className="absolute top-0 right-0 h-full w-full md:w-[58%] z-10 pointer-events-none">
        <img
          src={profile.photo}
          alt={profile.name}
          className="ghibli-portrait absolute bottom-0 right-0 h-[62%] sm:h-[72%] md:h-[96%] w-full object-cover object-top"
        />
        {/* warm duotone wash to stylize + match theme */}
        <div className="absolute inset-0 mix-blend-soft-light opacity-40" style={{ background: 'linear-gradient(120deg, #b08401, transparent 60%)' }} />
        {/* blend edges into the cream background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf6f2] via-[#faf6f2]/55 to-transparent md:via-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf6f2] via-transparent to-[#faf6f2]/50" />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#faf6f2] to-transparent hidden md:block" />

        {/* Floating tech logos around the portrait */}
        <div className="hidden md:block absolute inset-0 z-20 pointer-events-none">
          {FLOAT_LOGOS.map((l) => (
            <div
              key={l.slug}
              className="absolute w-12 h-12 rounded-2xl bg-white/85 backdrop-blur-md border border-[var(--border)] shadow-[0_8px_24px_rgba(104,59,43,0.18)] flex items-center justify-center animate-float"
              style={{ top: l.top, left: l.left, animationDelay: l.d }}
            >
              <img src={`https://cdn.simpleicons.org/${l.slug}`} alt="" className="w-6 h-6" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
          ))}
        </div>

        {/* Speaking glow + equalizer over the portrait */}
        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full ${isPlaying ? 'is-speaking' : ''}`} />
        {isPlaying && (
          <div className="absolute bottom-[14%] left-1/2 -translate-x-1/2 flex items-end gap-1.5 h-10">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <span key={i} className="eq-bar h-full" style={{ animationDelay: `${i * 0.12}s` }} />
            ))}
          </div>
        )}
      </div>

      {/* AI-voice audio (generated, male). Falls back to browser TTS. */}
      <audio ref={audioRef} src="/audio/intro.wav" preload="auto" onEnded={() => setIsPlaying(false)} />

      {/* Content (left) */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 min-h-screen flex flex-col justify-end md:justify-center pb-16 pt-28 md:pt-28 md:pb-24">
        <div className="max-w-xl">
          {availability.open && (
            <div data-aos="fade-up" className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-[var(--border)] bg-white/70 backdrop-blur-md text-xs font-semibold" style={{ color: 'var(--text-soft)' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-500" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600" />
              </span>
              {availability.text}
            </div>
          )}
          <div data-aos="fade-up" className="flex items-center gap-3 mb-4">
            <span className="h-px w-8" style={{ background: 'var(--accent)' }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--accent)' }}>I am</span>
          </div>

          <h1 data-aos="fade-up" data-aos-delay="80" className="font-display text-5xl md:text-7xl font-bold leading-[1.02] mb-3" style={{ color: 'var(--text)' }}>
            {profile.name}
          </h1>
          <div data-aos="fade-up" data-aos-delay="140" className="text-xl md:text-2xl font-bold mb-6 h-8" style={{ color: 'var(--accent)' }}>
            {profile.roles[roleIndex]}
          </div>

          <p data-aos="fade-up" data-aos-delay="220" className="text-base md:text-lg font-medium mb-8 max-w-lg leading-relaxed" style={{ color: 'var(--text-soft)' }}>
            {profile.tagline}
          </p>

          <div data-aos="fade-up" data-aos-delay="320" className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="px-7 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105" style={{ background: 'var(--accent)', boxShadow: '0 8px 30px var(--accent-glow)' }}>
              View My Work
            </a>
            <a href="#about" className="px-7 py-3 rounded-full bg-white/60 border border-[var(--border)] font-semibold hover:bg-white transition-all duration-300 backdrop-blur-md" style={{ color: 'var(--text)' }}>
              About Me
            </a>

            <button onClick={toggleIntro} className="group flex items-center gap-3 cursor-pointer" aria-label="Play AI voice intro">
              <span className="w-12 h-12 rounded-full border border-[var(--border)] bg-white/60 backdrop-blur-md flex justify-center items-center transition-all duration-500 group-hover:scale-110" style={{ background: isPlaying ? 'var(--accent)' : undefined, boxShadow: isPlaying ? '0 0 35px var(--accent-glow)' : 'none' }}>
                {isPlaying ? (
                  <svg className="w-5 h-5" style={{ color: isPlaying ? '#fff' : 'var(--accent)' }} fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                ) : (
                  <svg className="w-5 h-5 ml-0.5" style={{ color: 'var(--accent)' }} fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                )}
              </span>
              <span className="text-xs font-bold tracking-widest uppercase transition-colors" style={{ color: 'var(--text-soft)' }}>
                {isPlaying ? 'Stop' : 'Hear My Intro'}
              </span>
            </button>
          </div>

          <div data-aos="fade-up" data-aos-delay="440" className="flex flex-wrap gap-6 sm:gap-8 mt-12">
            {STATS.map((s) => (
              <div key={s.label}>
                <CountUp
                  target={s.target}
                  decimals={s.decimals}
                  suffix={s.suffix}
                  className="text-2xl md:text-3xl font-black block"
                />
                <div className="text-xs md:text-sm font-medium" style={{ color: 'var(--text-soft)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* hint pointing to the intro button — hides once played */}
      {showHint && !isPlaying && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-[var(--border)] backdrop-blur-md text-xs font-medium animate-pulse pointer-events-none" style={{ color: 'var(--text-soft)' }}>
          <svg className="w-4 h-4" style={{ color: 'var(--accent)' }} fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          Click &ldquo;Hear My Intro&rdquo; for a quick hello
        </div>
      )}
    </section>
  );
};

export default Hero;
