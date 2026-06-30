import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAudio } from "../contexts/AudioContext";
import { Sparkles, ArrowRight } from "lucide-react";

const EntryScreen = ({ onEnter }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { startMusic } = useAudio();

  const handleRecruiter = () => {
    setIsSubmitting(true);

    localStorage.setItem("portfolio-visitor-type", "recruiter");

    setTimeout(() => {
      onEnter();
    }, 1400);
  };

  const handleStudent = () => {
    setIsSubmitting(true);

    localStorage.setItem("portfiolio-visitor-type", "student");

    startMusic();

    setTimeout(() => {
      onEnter();
    }, 1400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    setIsSubmitting(true);

    localStorage.setItem("portfolio-visitor-name", name);

    // startMusic();

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
              ease: "easeInOut",
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
              ease: "easeInOut",
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
          flex h-full flex-col items-center justify-center text-center
            relative
            z-10
            w-[92%]
            max-w-7xl
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
                  mb-8
                "
              >
                Welcome.
              </h1>
            </motion.div>

            <div className="mt-10 flex flex-col gap-6 md:flex-row">
              {/* Recruiter Button */}
              <motion.button
                type="button"
                onClick={handleRecruiter}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  rotateX: 4,
                }}
                whileTap={{ scale: 0.98 }}
                className="
                flex-1
                cursor-pointer
      min-h-85
    group
    relative
    w-full
    overflow-hidden
    rounded-4xl
    border border-white/10
    bg-linear-to-br
    from-white/8
    via-white/3
    to-transparent
    p-8
    text-left
    backdrop-blur-2xl
    transition-all
    duration-500
    hover:border-cyan-400/50
    hover:shadow-[0_25px_80px_rgba(34,211,238,0.18)]
"
              >
                {/* Animated Glow */}
                <div
                  className="
      absolute
      -right-10
      -top-10
      h-40
      w-40
      rounded-full
      bg-cyan-400/20
      blur-3xl
      opacity-0
      transition-all
      duration-500
      group-hover:opacity-100
      group-hover:scale-125
    "
                />

                {/* Top Badge */}
                <div className="relative mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Hiring
                </div>

                <div className="relative flex items-start justify-between">
                  <div>
                    <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-linear-to-br from-cyan-500/20 to-blue-600/20 text-5xl">
                      💼
                    </div>

                    <h2 className="text-3xl font-black tracking-tight text-white">
                      I'm a Recruiter
                    </h2>

                    <p className="mt-3 max-w-sm text-base leading-relaxed text-gray-400">
                      Explore my work, projects and experience in a clean,
                      distraction-free portfolio experience.
                    </p>
                  </div>

                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                    className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/5
        text-2xl
      "
                  >
                    →
                  </motion.div>
                </div>

                {/* Bottom Accent */}
                <div
                  className="
      absolute
      bottom-0
      left-0
      h-1
      w-0
      bg-linear-to-r
      from-cyan-400
      to-blue-500
      transition-all
      duration-500
      group-hover:w-full
    "
                />
              </motion.button>

              {/* Student Button */}
              <motion.button
                type="button"
                onClick={handleStudent}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  rotateX: 4,
                }}
                whileTap={{ scale: 0.98 }}
                className="
                flex-1
                cursor-pointer
      min-h-85
    group
    relative
    w-full
    overflow-hidden
    rounded-4xl
    border border-white/10
    bg-linear-to-br
    from-white/8
    via-white/3
    to-transparent
    p-8
    text-left
    backdrop-blur-2xl
    transition-all
    duration-500
    hover:border-cyan-400/50
    hover:shadow-[0_25px_80px_rgba(34,211,238,0.18)]
"
              >
                {/* Animated Glow */}
                <div
                  className="
      absolute
      -right-10
      -top-10
      h-40
      w-40
      rounded-full
      bg-cyan-400/20
      blur-3xl
      opacity-0
      transition-all
      duration-500
      group-hover:opacity-100
      group-hover:scale-125
    "
                />

                {/* Top Badge */}
                <div className="relative mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Learning
                </div>

                <div className="relative flex items-start justify-between">
                  <div>
                    <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-linear-to-br from-cyan-500/20 to-blue-600/20 text-5xl">
                      🎓
                    </div>

                    <h2 className="text-3xl font-black tracking-tight text-white">
                      I'm a Student
                    </h2>

                    <p className="mt-3 max-w-sm text-base leading-relaxed text-gray-400">
                      Experience my portfolio with MJ's sound track
                    </p>
                  </div>

                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl
      "
                  >
                    →
                  </motion.div>
                </div>

                {/* Bottom Accent */}
                <div
                  className="
      absolute
      bottom-0
      left-0
      h-1
      w-0
      bg-linear-to-r
      from-cyan-400
      to-blue-500
      transition-all
      duration-500
      group-hover:w-full
    "
                />
              </motion.button>
            </div>

            {/* Footer */}
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
                  <span className="text-purple-500">Brace yourself...</span>
                  <span className="text-white">Hee-hee! Loading...</span>
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
