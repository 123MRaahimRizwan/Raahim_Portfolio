import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="
            fixed bottom-8 left-8 z-40
            p-4
            rounded-full
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            text-white
            transition-all duration-300
            hover:bg-white/10
            hover:border-blue-400/30
            hover:scale-110
            group
          "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronUp size={24} className="text-blue-400" />
          </motion.div>

          {/* Glow effect */}
          <div className="
            absolute inset-0
            rounded-full
            bg-blue-500/20
            blur-lg
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-300
            pointer-events-none
          " />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;
