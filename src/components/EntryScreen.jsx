import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '../contexts/AudioContext';
import { Sparkles, ArrowRight } from 'lucide-react';

const EntryScreen = ({ onEnter }) => {
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { startMusic } = useAudio();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    setIsSubmitting(true);

    localStorage.setItem('portfolio-visitor-name', name);

    startMusic();

    setTimeout(() => {
      onEnter();
    }, 1400);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-50 overflow-hidden bg-[#050816] flex items-center justify-center"
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0">
          {/* Grid */}
          <div
            className="
              absolute inset-0
              bg-[linear-linear(rgba(255,255,255,0.03)_1px,transparent_1px),linear-linear(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
              bg-size-[50px_50px]
            "
          />

          {/* Glow Orbs */}
          <motion.div
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -30, 20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              absolute
              top-[-10%]
              right-[-10%]
              h-105
              w-105
              rounded-full
              bg-cyan-500/20
              blur-3xl
            "
          />

          <motion.div
            animate={{
              x: [0, -50, 20, 0],
              y: [0, 40, -20, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              absolute
              bottom-[-10%]
              left-[-10%]
              h-105
              w-105
              rounded-full
              bg-blue-600/20
              blur-3xl
            "
          />

          {/* Noise Overlay */}
          {/* <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('https://grainy-linears.vercel.app/noise.svg')]" /> */}
        </div>

        {/* MAIN CARD */}
        <motion.div
          initial={{ y: 40, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            z-10
            w-[92%]
            max-w-xl
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-4xl
              border border-white/10
              bg-white/6
              backdrop-blur-2xl
              shadow-[0_0_60px_rgba(59,130,246,0.15)]
              p-10 md:p-14
            "
          >
            {/* Top Shine */}
            <div
              className="
                absolute
                inset-0
                bg-linear-to-br
                from-white/10
                via-transparent
                to-transparent
                pointer-events-none
              "
            />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border border-cyan-400/20
                bg-cyan-400/10
                px-4 py-2
                text-sm
                text-cyan-300
                mb-8
              "
            >
              <Sparkles size={16} />
              Interactive Portfolio Experience
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-5"
            >
              <h1
                className="
                  text-5xl
                  md:text-7xl
                  font-black
                  tracking-tight
                  leading-none
                  text-white
                "
              >
                Welcome.
              </h1>

              <p
                className="
                  text-gray-300
                  text-base
                  md:text-lg
                  leading-relaxed
                  max-w-md
                "
              >
                Enter your name to begin an immersive portfolio journey
                crafted with motion, interaction, and cinematic design.
              </p>
            </motion.div>

            {/* FORM */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 space-y-5"
            >
              {/* Input */}
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  autoFocus
                  className="
                    w-full
                    rounded-2xl
                    border border-white/10
                    bg-black/30
                    px-6 py-5
                    text-white
                    placeholder:text-gray-500
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-400/40
                    focus:bg-black/40
                    focus:shadow-[0_0_25px_rgba(34,211,238,0.15)]
                    text-lg
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    pointer-events-none
                    ring-1 ring-inset ring-white/5
                  "
                />
              </div>

              {/* CTA */}
              <motion.button
                type="submit"
                disabled={!name.trim() || isSubmitting}
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  relative
                  w-full
                  overflow-hidden
                  rounded-2xl
                  bg-linear-to-r
                  from-cyan-400
                  via-blue-500
                  to-indigo-500
                  px-6 py-5
                  text-lg
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  shadow-[0_10px_40px_rgba(59,130,246,0.35)]
                "
              >
                <span
                  className="
                    absolute inset-0
                    bg-white/10
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                  "
                />

                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? 'Entering Experience...' : 'Enter Portfolio'}

                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </motion.button>
            </motion.form>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 text-center"
            >
              <button
                onClick={() => {
                  startMusic();
                  onEnter();
                }}
                className="
                  text-sm
                  text-gray-500
                  hover:text-white
                  transition-colors
                  duration-300
                "
              >
                Continue without entering a name
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Cinematic Transition */}
        <AnimatePresence>
          {isSubmitting && (
            <>
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{
                  duration: 1.2,
                  ease: [0.83, 0, 0.17, 1],
                }}
                className="
                  absolute
                  inset-0
                  origin-bottom
                  bg-[#050816]
                  z-50
                "
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="
                  absolute
                  z-60
                  text-white
                  text-3xl
                  font-bold
                  tracking-wide
                  font-sans
                "
              >
                <i>
                  <span className='text-purple-500'>Brace yourself...</span>
                  <span className='text-white'>Hee-hee! Loading...</span>
                  </i>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default EntryScreen;