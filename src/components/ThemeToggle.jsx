import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="
        fixed top-24 right-8 z-40
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
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun size={24} className="text-yellow-400" />
        ) : (
          <Moon size={24} className="text-blue-400" />
        )}
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
  );
};

export default ThemeToggle;
