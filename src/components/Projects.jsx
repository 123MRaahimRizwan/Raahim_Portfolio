import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Sparkles,
  ArrowUpRight,
  Layers3,
  ShieldCheck,
  BrainCircuit,
  Globe,
} from "lucide-react";

import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      image: "/images/aqi.png",

      title: "Karachi AQI Forecasting System",

      category: "ML/MLOps",

      icon: <Layers3 size={18} />,

      description:
        "An end-to-end Machine Learning + MLOps pipeline for forecasting Air Quality Index (AQI) in Karachi using automated feature engineering, model training, GitHub Actions CI/CD, MongoDB model registry, and a live Streamlit dashboard.",

      link:
        "https://github.com/123MRaahimRizwan/AQI_Prediction_10_Pearls",
    },

    {
      image: "/images/threat_analyzer.png",

      title: "Threat Intelligence System",

      category: "AI/Security",

      icon: <ShieldCheck size={18} />,

      description:
        "A RAG-based threat intelligence system that detects anomalies in server logs and provides contextualized security alerts with LLM-generated mitigation plans and performance analytics.",

      link:
        "https://github.com/123MRaahimRizwan/SENTEC-Security-Analyzer",
    },

    {
      image: "/images/chatbot.png",

      title: "AI Chatbot for NED University",

      category: "AI/RAG",

      icon: <BrainCircuit size={18} />,

      description:
        "A production-ready Retrieval-Augmented Generation chatbot built to help students and outsiders explore everything about NED University with accurate AI-powered responses.",

      link:
        "https://github.com/123MRaahimRizwan/NED-Chatbot",
    },

    {
      image: "/images/youtube_clone.png",

      title: "YouTube Clone",

      category: "Web Dev",

      icon: <Globe size={18} />,

      description:
        "A fully responsive YouTube clone built with ReactJS and Material UI featuring API-driven video search, playback, dynamic routing, and modern UI interactions.",

      link:
        "https://github.com/123MRaahimRizwan/YouTube-Clone",
    },
  ];

  const categories = [
    "all",
    "ML/MLOps",
    "AI/Security",
    "AI/RAG",
    "Web Dev",
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(
          (project) => project.category === filter
        );

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        min-h-screen
        px-6
        md:px-12
        py-32
        bg-[#050816]
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid */}
        <div
          className="
            absolute inset-0
            bg-[linear-linear(rgba(255,255,255,0.03)_1px,transparent_1px),linear-linear(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
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
        {/* <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-linears.vercel.app/noise.svg')]" /> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            flex
            flex-col
            items-center
            text-center
            mb-24
          "
        >
          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-5 py-2
              rounded-full
              border border-cyan-400/20
              bg-cyan-400/10
              backdrop-blur-xl
              text-sm
              text-cyan-300
              mb-8
            "
          >
            <Sparkles size={16} />
            Featured Work
          </div>

          {/* Heading */}
          <h1
            className="
              text-5xl
              md:text-7xl
              font-black
              tracking-tight
              leading-none
              text-white
              mb-6
            "
          >
            Shipped
            <br />
            <span className="bg-linear-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              max-w-3xl
              text-gray-400
              text-lg
              md:text-xl
              leading-relaxed
            "
          >
            A curated collection of AI systems,
            machine learning pipelines, intelligent
            applications, and immersive web experiences
            built with scalability and innovation in mind.
          </p>
        </motion.div>

        {/* FILTERS */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.1,
            duration: 0.7,
          }}
          className="
            flex
            flex-wrap
            justify-center
            gap-4
            mb-20
          "
        >
          {categories.map((cat, idx) => (
            <motion.button
              key={idx}
              onClick={() => setFilter(cat)}
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className={`
                relative
                overflow-hidden
                px-6 py-3
                rounded-2xl
                text-sm
                font-medium
                transition-all duration-300
                border
                backdrop-blur-xl

                ${
                  filter === cat
                    ? `
                      border-cyan-400/30
                      bg-linear-to-r
                      from-cyan-400
                      to-blue-500
                      text-white
                      shadow-[0_0_25px_rgba(34,211,238,0.3)]
                    `
                    : `
                      border-white/10
                      bg-white/5
                      text-gray-300
                      hover:border-cyan-400/20
                      hover:bg-white/8
                    `
                }
              `}
            >
              <span className="relative z-10">
                {cat === "all"
                  ? "All Projects"
                  : cat}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* PROJECT GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            layout
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-8
            "
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                layout
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-4xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-2xl
                  transition-all duration-500
                  hover:border-cyan-400/30
                  hover:bg-white/6
                  hover:shadow-[0_10px_40px_rgba(34,211,238,0.08)]
                "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-cyan-400/5 via-transparent to-blue-500/5" />

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-65
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#050816] via-[#050816]/40 to-transparent" />

                  {/* Category */}
                  <div
                    className="
                      absolute
                      top-5
                      left-5
                      flex
                      items-center
                      gap-2
                      px-4 py-2
                      rounded-full
                      border border-white/10
                      bg-black/40
                      backdrop-blur-xl
                      text-cyan-300
                      text-sm
                    "
                  >
                    {project.icon}
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Title */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3
                      className="
                        text-2xl
                        font-bold
                        text-white
                        leading-tight
                      "
                    >
                      {project.title}
                    </h3>

                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.1,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="
                        flex
                        items-center
                        justify-center
                        min-w-12
                        h-12
                        rounded-2xl
                        border border-white/10
                        bg-white/5
                        text-gray-300
                        transition-all duration-300
                        hover:border-cyan-400/30
                        hover:text-cyan-300
                      "
                    >
                      <ArrowUpRight size={18} />
                    </motion.a>
                  </div>

                  {/* Description */}
                  <p
                    className="
                      text-gray-400
                      leading-relaxed
                      mb-7
                    "
                  >
                    {project.description}
                  </p>

                  {/* CTA */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      x: 4,
                    }}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-cyan-300
                      hover:text-cyan-200
                      transition-colors
                    "
                  >
                    <span className="font-medium">
                      View Project
                    </span>

                    <ArrowUpRight size={16} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* EMPTY STATE */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="
              text-center
              py-24
            "
          >
            <p className="text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;