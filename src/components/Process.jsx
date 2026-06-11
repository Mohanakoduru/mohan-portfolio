import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { process } from '../data';

const TagCard = ({ number, title, text, className, aosType, aosDelay, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!ref.current || !containerRef.current) return;
    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const cardTop = cardRect.top - containerRect.top;
    const triggerY = cardTop + 50;
    const lineTipY = latest * containerRect.height;
    if (lineTipY >= triggerY && !isActive) setIsActive(true);
    else if (lineTipY < triggerY && isActive) setIsActive(false);
  });

  return (
    <div
      ref={ref}
      data-aos={aosType || 'fade-up'}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${className} ${
        isActive
          ? 'border-[var(--accent)] shadow-[0_20px_50px_var(--accent-glow)]'
          : 'bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)]'
      }`}
      style={isActive ? { background: 'var(--accent)' } : undefined}
    >
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20" />
      </div>

      <div
        className={`w-full h-full rounded-[1.5rem] mt-8 p-8 flex flex-col min-h-[220px] transition-colors duration-700 ${
          isActive ? 'bg-black/15' : 'bg-[#f4f4f4]'
        }`}
      >
        <span className={`text-xl font-bold mb-2 italic transition-colors duration-700 ${isActive ? 'text-white/70' : 'text-gray-400'}`}>
          {number}
        </span>
        <h3 className={`text-2xl font-black mb-3 tracking-tight transition-colors duration-700 ${isActive ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        <p className={`text-sm leading-relaxed font-medium transition-colors duration-700 ${isActive ? 'text-white/90' : 'text-gray-500'}`}>
          {text}
        </p>
      </div>
    </div>
  );
};

const positions = [
  'md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
  'md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
  'md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
  'md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
];
const aosTypes = ['fade-left', 'fade-right', 'fade-left', 'fade-right'];

const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start center', 'end center'] });
  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });
  const PATH = 'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200';

  return (
    <section
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* Header */}
        <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            How I work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            From raw data to a product that ships
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-sm font-medium leading-relaxed">
            A structured, technical and creative approach to turn your idea into a working AI solution.
          </p>
        </div>

        {/* Desktop animated line */}
        <svg className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0" viewBox="0 0 1000 1350" preserveAspectRatio="none">
          <path d={PATH} fill="none" stroke="#ddd6fe" strokeWidth="2" strokeDasharray="8 10" />
          <mask id="proc-mask">
            <motion.path d={PATH} fill="none" stroke="white" strokeWidth="20" style={{ pathLength }} />
          </mask>
          <path d={PATH} fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeDasharray="8 10" mask="url(#proc-mask)" />
        </svg>

        {/* Mobile animated line */}
        <svg className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full pointer-events-none z-0" viewBox="0 0 4 100" preserveAspectRatio="none">
          <path d="M 2,0 L 2,100" fill="none" stroke="#ddd6fe" strokeWidth="4" strokeDasharray="4 6" vectorEffect="non-scaling-stroke" />
          <mask id="proc-mask-m">
            <motion.path d="M 2,0 L 2,100" fill="none" stroke="white" strokeWidth="4" style={{ pathLength }} vectorEffect="non-scaling-stroke" />
          </mask>
          <path d="M 2,0 L 2,100" fill="none" stroke="var(--accent)" strokeWidth="4" strokeDasharray="4 6" mask="url(#proc-mask-m)" vectorEffect="non-scaling-stroke" />
        </svg>

        {/* Cards */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">
          {process.map((step, i) => (
            <TagCard
              key={step.number}
              number={step.number}
              title={step.title}
              text={step.text}
              className={positions[i]}
              aosType={aosTypes[i]}
              aosDelay={(i + 1) * 100}
              pathLength={pathLength}
              containerRef={containerRef}
            />
          ))}

          <div data-aos="fade-in" data-aos-delay="600" className="hidden md:block absolute top-[1250px] left-[60%] text-3xl text-gray-600 rotate-6 italic">
            Ready to ship! 🚀
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
