import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen z-[100000] flex items-center justify-center"
          style={{ background: 'linear-gradient(160deg, #faf6f2 0%, #ded1bd 100%)' }}
        >
          <motion.div
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative text-5xl md:text-7xl font-black tracking-tighter"
          >
            {/* Empty / outline state */}
            <div style={{ color: 'rgba(104,59,43,0.18)' }}>
              {profile.firstName}<span>.</span>
            </div>

            {/* Filling (water-rise) state */}
            <motion.div
              className="absolute top-0 left-0 overflow-hidden whitespace-nowrap"
              style={{ color: 'var(--accent)' }}
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.7, ease: 'easeInOut', delay: 0.2 }}
            >
              {profile.firstName}<span style={{ color: 'var(--accent-2)' }}>.</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
