import React from "react";

import { motion } from "framer-motion";

import {
  Volume2,
  VolumeX,
  Sparkles,
} from "lucide-react";

import { useAudio } from "../contexts/AudioContext";

const AudioToggle = () => {
  const {
    isPlaying,
    toggleAudio,
    hasEntered,
  } = useAudio();

  if (!hasEntered) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.7,
        y: 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="
        fixed
        bottom-8
        right-8
        z-40
      "
    >
      <motion.button
        onClick={toggleAudio}
        whileHover={{
          scale: 1.08,
          y: -2,
        }}
        whileTap={{
          scale: 0.94,
        }}
        className="
          group
          relative
          overflow-hidden

          flex
          items-center
          justify-center

          w-16
          h-16

          rounded-2xl

          border border-white/10
          bg-white/[0.05]
          backdrop-blur-2xl

          shadow-[0_8px_40px_rgba(0,0,0,0.25)]

          transition-all
          duration-500

          hover:border-cyan-400/30
          hover:bg-white/[0.08]
          hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
        "
      >
        {/* Background Glow */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500

            bg-gradient-to-br
            from-cyan-400/10
            via-blue-500/5
            to-indigo-500/10
          "
        />

        {/* Floating Blur */}
        <motion.div
          animate={{
            x: [0, 6, -4, 0],
            y: [0, -6, 4, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -top-5
            -right-5
            w-14
            h-14
            rounded-full
            bg-cyan-400/10
            blur-2xl
          "
        />

        {/* Pulsing Ring */}
        {isPlaying && (
          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0.6,
            }}
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.35, 0, 0.35],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="
              absolute
              inset-0
              rounded-2xl
              border
              border-cyan-400/30
            "
          />
        )}

        {/* Icon */}
        <motion.div
          key={isPlaying ? "playing" : "muted"}
          initial={{
            opacity: 0,
            scale: 0.8,
            rotate: -15,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 0.35,
          }}
          className="relative z-10"
        >
          {isPlaying ? (
            <Volume2
              size={26}
              className="text-cyan-300"
            />
          ) : (
            <VolumeX
              size={26}
              className="text-gray-400"
            />
          )}
        </motion.div>

        {/* Sparkle Indicator */}
        {isPlaying && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="
              absolute
              top-2
              right-2
              z-10
            "
          >
            <Sparkles
              size={12}
              className="text-cyan-300"
            />
          </motion.div>
        )}
      </motion.button>
    </motion.div>
  );
};

export default AudioToggle;