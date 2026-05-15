import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import {
  Download,
  ExternalLink,
  ChevronDown,
  Sparkles,
  Code2,
  BrainCircuit,
  Rocket,
} from "lucide-react";

const Home = () => {
  const [visitorName, setVisitorName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("portfolio-visitor-name");

    if (name) {
      setVisitorName(name);
    }
  }, []);

  const downloadResume = () => {
    const link = document.createElement("a");

    link.href = "/Muhammad_Raahim_Rizwan_Resume.pdf";

    link.download = "Muhammad_Raahim_Rizwan_Resume.pdf";

    link.click();
  };

  const techStack = [
    "Python",
    "React",
    "JavaScript",
    "TensorFlow",
    "Docker",
    "FastAPI",
    "MongoDB",
    "Tailwind CSS",
  ];

  const highlights = [
    {
      icon: <BrainCircuit className="w-5 h-5" />,
      title: "AI Engineering",
      desc: "Machine learning pipelines, RAG systems & intelligent automation.",
    },

    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Full Stack Development",
      desc: "Scalable modern applications with elegant UI architecture.",
    },

    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Production Ready",
      desc: "Deploying polished digital experiences focused on performance.",
    },
  ];

  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        min-h-screen
        px-6
        md:px-12
        py-32
        bg-[#050816]
        flex
        items-center
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
            bg-size-[50px_50px]
          "
        />

        {/* Glow */}
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
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
            w-112.5
            h-112.5
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
        />

        <motion.div
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 40, -10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-10%]
            left-[-10%]
            w-112.5
            h-112.5
            rounded-full
            bg-cyan-500/10
            blur-3xl
          "
        />

        {/* Noise */}
        {/* <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" /> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1.2fr_0.8fr]
            gap-16
            items-center
          "
        >
          {/* LEFT SIDE */}
          <div className="space-y-10">
            {/* Badge */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                inline-flex
                items-center
                gap-3
                px-5 py-2
                rounded-full
                border border-cyan-400/20
                bg-cyan-400/10
                backdrop-blur-xl
                text-sm
                text-cyan-300
              "
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />

                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400" />
              </span>
              Available for opportunities
            </motion.div>

            {/* HERO */}
            <div className="space-y-6">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.1,
                  duration: 0.8,
                }}
                className="
                  text-5xl
                  md:text-7xl
                  xl:text-8xl
                  font-black
                  tracking-tight
                  leading-[0.95]
                  text-white
                "
              >
                Hi I'm
                <br />
                <span className="bg-linear-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Raahim
                </span>
                👋
                <br />
              </motion.h1>

              {visitorName && (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.4,
                  }}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-4 py-2
                    rounded-full
                    border border-cyan-400/20
                    bg-cyan-400/10
                    backdrop-blur-xl
                    text-cyan-300
                  "
                >
                  <Sparkles size={16} />
                  Welcome back,
                  <span className="font-semibold">{visitorName}</span>
                </motion.div>
              )}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                }}
                className="
                  max-w-2xl
                  text-lg
                  md:text-xl
                  text-gray-400
                  leading-relaxed
                "
              >
                AI Engineering enthusiast focused on building scalable machine
                learning systems, modern web applications, and immersive digital
                experiences that blend performance with elegant design.
              </motion.p>
            </div>

            {/* CTA */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.35,
                duration: 0.8,
              }}
              className="
                flex
                flex-wrap
                gap-4
              "
            >
              <motion.button
                onClick={downloadResume}
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  flex
                  items-center
                  gap-3
                  px-8 py-4
                  rounded-2xl
                  bg-linear-to-r
                  from-cyan-400
                  to-blue-500
                  text-white
                  font-semibold
                  shadow-[0_0_25px_rgba(34,211,238,0.25)]
                  transition-all duration-300
                "
              >
                <Download size={20} />
                Download Resume
              </motion.button>

              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  px-8 py-4
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  text-white
                  font-semibold
                  transition-all duration-300
                  hover:border-cyan-400/20
                  hover:bg-white/8
                "
              >
                View Projects
                <ExternalLink
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.a>
            </motion.div>

            {/* TECH STACK */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              className="space-y-5 pt-4"
            >
              <p
                className="
                  text-sm
                  uppercase
                  tracking-[0.25em]
                  text-gray-500
                  font-semibold
                "
              >
                Technologies I Work With
              </p>

              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                    }}
                    className="
                        px-5 py-2.5
                        rounded-full
                        border border-white/10
                        bg-white/5
                        backdrop-blur-xl
                        text-gray-300
                        text-sm
                        transition-all duration-300
                        hover:border-cyan-400/20
                        hover:bg-white/8
                      "
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div
              className="
    group
    relative
    flex
    justify-center
    overflow-hidden
    rounded-4xl
    border border-white/10
    bg-white/5
    backdrop-blur-2xl
    p-8
    transition-all duration-500
    hover:border-cyan-400/30
    hover:bg-white/6
    hover:shadow-[0_10px_40px_rgba(34,211,238,0.08)]
  "
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-cyan-400/5 via-transparent to-blue-500/5" />



              <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                {/* IMAGE SECTION */}
                <div className="relative w-44 h-44">
                  {/* Rotating gradient ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
            absolute inset-0
            rounded-full
            bg-linear-to-r
            from-cyan-400
            via-blue-500
            to-indigo-500
            blur-sm
            opacity-70
          "
                  />

                  {/* Inner border ring */}
                  <div
                    className="
          absolute inset-2
          rounded-full
          border border-white/20
        "
                  />

                  {/* Your Image */}
                  <div
                    className="
          absolute inset-3
          rounded-full
          overflow-hidden
          border border-white/10
        "
                  >
                    <img
                      src="/images/Raahim_portfolio_image.png"
                      alt="Raahim Rizwan"
                      className="
              w-full h-full
              object-cover
              scale-105
            "
                    />
                  </div>
                </div>

                {/* NAME */}
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Muhammad Raahim Rizwan
                  </h3>

                  <p className="text-sm text-cyan-300 mt-1">
                    AI Engineer • Full Stack Developer
                  </p>
                </div>

                {/* QUICK BADGE */}
                <div
                  className="
        px-4 py-2
        rounded-full
        border border-cyan-400/20
        bg-cyan-400/10
        text-cyan-300
        text-sm
        backdrop-blur-xl
      "
                >
                  Building Intelligent Digital Systems
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
        "
      >
        <div
          className="
            p-3
            rounded-full
            border border-white/10
            bg-white/5
            backdrop-blur-xl
          "
        >
          <ChevronDown className="text-gray-400 w-5 h-5" />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
