import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '../data';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%']);

  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.firstName} ${form.lastName}`.trim());
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const inputCls =
    'w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none';

  return (
    <section ref={ref} id="contact" className="bg-[#07060d] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-white/5">
      {/* Huge background word */}
      <motion.div style={{ y }} className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12">
        <h1
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/[0.04]"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      <div className="relative z-10 w-full flex justify-end items-end">
        <div
          data-aos="fade-up"
          className="w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between"
          style={{ background: 'var(--accent)' }}
        >
          <div className="text-xs font-bold tracking-[0.2em] mb-10 md:mb-16 uppercase opacity-90">
            Let&apos;s work together
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-12 md:gap-16 w-full">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
              <div className="flex-1 flex flex-col gap-10">
                <input id="firstName" value={form.firstName} onChange={handleChange} type="text" placeholder="First Name" className={inputCls} required />
                <input id="lastName" value={form.lastName} onChange={handleChange} type="text" placeholder="Last Name" className={inputCls} />
                <input id="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" className={inputCls} required />
              </div>
              <div className="flex-1 flex flex-col">
                <textarea id="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project or idea…" className={`${inputCls} h-full min-h-[120px] resize-none`} required />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-10 mt-2 items-start md:items-end justify-between">
              {/* contact details */}
              <div className="flex flex-col gap-3 text-sm font-medium text-white/90">
                <a href={`mailto:${profile.email}`} className="hover:underline">{profile.email}</a>
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="hover:underline">{profile.phone}</a>
                <div className="flex gap-4 mt-1">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-black transition-colors">LinkedIn</a>
                  <a href={profile.github} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-black transition-colors">GitHub</a>
                </div>
              </div>

              <button
                type="submit"
                className="px-8 py-3 rounded-full border border-white/50 text-white font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-[var(--accent)] transition-all duration-300 group whitespace-nowrap"
              >
                Send Message
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
