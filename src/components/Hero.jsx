import React, { useRef, useEffect, useState, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { profile } from '../data';

const INTRO_TEXT = `Hi, I'm ${profile.fullName}. I'm an A.I. and Machine Learning developer. I build and ship intelligent systems — machine learning models, A.I. chatbots, and predictive analytics tools using Python, large language models, and modern web frameworks. I've completed a Machine Learning internship and shipped multiple production-ready A.I. projects. Let's build something smart together.`;

const Hero = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [introDone, setIntroDone] = useState(false); // played once already?
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

  // Auto-play the intro on the visitor's first interaction (browsers block
  // sound before a user gesture). Fires once, then removes itself.
  useEffect(() => {
    if (introDone) return;
    const handler = () => {
      if (introDone) return;
      setIntroDone(true);
      playIntro();
      remove();
    };
    const events = ['pointerdown', 'keydown', 'scroll', 'touchstart'];
    const remove = () =>
      events.forEach((e) => window.removeEventListener(e, handler));
    events.forEach((e) => window.addEventListener(e, handler, { once: false, passive: true }));
    return remove;
  }, [introDone, playIntro]);

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-[#07060d]">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dotgrid opacity-50" />
        <div className="absolute -top-32 -left-24 w-[40rem] h-[40rem] rounded-full blur-[120px] opacity-50 animate-blob" style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }} />
        <div className="absolute top-1/3 left-1/4 w-[32rem] h-[32rem] rounded-full blur-[120px] opacity-30 animate-blob" style={{ background: 'radial-gradient(circle, #4c1d95, transparent 70%)', animationDelay: '8s' }} />
      </div>

      {/* Portrait blended into the background (right side) */}
      <div className="absolute top-0 right-0 h-full w-full md:w-[58%] z-10 pointer-events-none">
        <img
          src={profile.photo}
          alt={profile.name}
          className="ghibli-portrait absolute bottom-0 right-0 h-[80%] md:h-[96%] w-full object-cover object-top"
        />
        {/* purple duotone wash to stylize + match theme */}
        <div className="absolute inset-0 mix-blend-soft-light opacity-40" style={{ background: 'linear-gradient(120deg, #7c3aed, transparent 60%)' }} />
        {/* blend edges into the background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07060d] via-[#07060d]/50 to-transparent md:via-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07060d] via-transparent to-[#07060d]/40" />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#07060d] to-transparent hidden md:block" />

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
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 min-h-screen flex flex-col justify-center pt-28 pb-24">
        <div className="max-w-xl">
          <div data-aos="fade-up" className="flex items-center gap-3 mb-4">
            <span className="h-px w-8" style={{ background: 'var(--accent-bright)' }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--accent-bright)' }}>I am</span>
          </div>

          <h1 data-aos="fade-up" data-aos-delay="80" className="font-display text-white text-5xl md:text-7xl font-bold leading-[1.02] mb-3">
            {profile.name}
          </h1>
          <div data-aos="fade-up" data-aos-delay="140" className="text-xl md:text-2xl font-bold mb-6 h-8" style={{ color: 'var(--accent-bright)' }}>
            {profile.roles[roleIndex]}
          </div>

          <p data-aos="fade-up" data-aos-delay="220" className="text-white/70 text-base md:text-lg font-medium mb-8 max-w-lg leading-relaxed">
            {profile.tagline}
          </p>

          <div data-aos="fade-up" data-aos-delay="320" className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="px-7 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105" style={{ background: 'var(--accent)', boxShadow: '0 8px 30px var(--accent-glow)' }}>
              View My Work
            </a>
            <a href="#about" className="px-7 py-3 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
              About Me
            </a>

            <button onClick={toggleIntro} className="group flex items-center gap-3 cursor-pointer" aria-label="Play AI voice intro">
              <span className="w-12 h-12 rounded-full border border-white/25 bg-white/5 backdrop-blur-md flex justify-center items-center transition-all duration-500 group-hover:scale-110" style={{ background: isPlaying ? 'var(--accent)' : undefined, boxShadow: isPlaying ? '0 0 35px var(--accent-glow)' : 'none' }}>
                {isPlaying ? (
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                ) : (
                  <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                )}
              </span>
              <span className="text-white/70 text-xs font-bold tracking-widest uppercase group-hover:text-white transition-colors">
                {isPlaying ? 'Stop' : 'Hear My Intro'}
              </span>
            </button>
          </div>

          <div data-aos="fade-up" data-aos-delay="440" className="flex flex-wrap gap-8 mt-12">
            {[['4+', 'AI Projects'], ['6mo', 'Freelance'], ['8.20', 'CGPA'], ['2x', 'Hackathons']].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl md:text-3xl font-black text-white">{n}</div>
                <div className="text-xs md:text-sm text-white/50 font-medium">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* "tap to hear me" hint — disappears after first interaction */}
      {showHint && !isPlaying && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-md text-white/70 text-xs font-medium animate-pulse pointer-events-none">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          Tap anywhere — I&apos;ll introduce myself
        </div>
      )}
    </section>
  );
};

export default Hero;
