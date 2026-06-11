import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile, forms } from '../data';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%']);

  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const fullName = `${form.firstName} ${form.lastName}`.trim();

  const whatsappUrl = () => {
    const text =
      `New portfolio enquiry\n------------------------\n` +
      `Name: ${fullName || '—'}\nEmail: ${form.email || '—'}\n\n${form.message || ''}`;
    return `https://wa.me/${forms.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  const sendWhatsApp = () => window.open(whatsappUrl(), '_blank', 'noopener');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // No email key configured yet → route through WhatsApp.
    if (!forms.web3formsKey) {
      sendWhatsApp();
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: forms.web3formsKey,
          subject: `Portfolio enquiry from ${fullName}`,
          from_name: fullName,
          name: fullName,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputCls =
    'w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none';

  return (
    <section ref={ref} id="contact" className="w-full min-h-screen relative overflow-hidden flex items-end pt-32" style={{ background: 'linear-gradient(160deg, #2c1a12 0%, #3a261b 100%)' }}>
      {/* Huge background word */}
      <motion.div style={{ y }} className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12">
        <h1
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/[0.05]"
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

          {status === 'success' ? (
            <div className="py-10 flex flex-col items-start gap-4" data-aos="fade-up">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-black">Message sent — thank you!</h3>
              <p className="text-white/90 max-w-md">
                Thanks for reaching out, I&apos;ll get back to you at <strong>{form.email || 'your email'}</strong> soon.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-2 px-6 py-2.5 rounded-full border border-white/50 font-bold hover:bg-white hover:text-[var(--accent)] transition-all"
              >
                Send another
              </button>
            </div>
          ) : (
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
                  {status === 'error' && (
                    <p className="text-white font-bold bg-black/20 rounded-lg px-3 py-2 mt-1">
                      Couldn&apos;t send email — please use the WhatsApp button instead.
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {/* WhatsApp */}
                  <button
                    type="button"
                    onClick={sendWhatsApp}
                    className="px-6 py-3 rounded-full bg-white/15 border border-white/40 text-white font-bold flex items-center justify-center gap-2 hover:bg-white/25 transition-all duration-300 whitespace-nowrap"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.15h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.22 8.22 0 01-1.26-4.39c0-4.54 3.7-8.24 8.24-8.24a8.2 8.2 0 015.83 2.42 8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.25 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
                    </svg>
                    WhatsApp
                  </button>

                  {/* Primary send */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="px-8 py-3 rounded-full border border-white/50 text-white font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-[var(--accent)] transition-all duration-300 group whitespace-nowrap disabled:opacity-60 disabled:cursor-wait"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                    {status !== 'sending' && (
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
