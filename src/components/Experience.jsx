import React from "react";
import { motion } from "framer-motion";

import {
  Code2,
  Briefcase,
  BookOpen,
  Sparkles,
  BrainCircuit,
  Layers3,
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "AI Research Enthusiast",
      company: "NED University (Department of CSIT)",
      period: "2024 — Present",
      description:
        "Exploring machine learning systems, retrieval-augmented generation, and intelligent AI applications with a strong research-driven mindset.",
      skills: ["TensorFlow", "PyTorch", "RAG", "Data Science"],
    },

    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Computer Science Student",
      company: "NED University (Department of CSIT)",
      period: "2023 — Present",
      description:
        "Pursuing undergraduate studies focused on AI Engineering, software architecture, algorithms, and modern application development.",
      skills: ["Algorithms", "System Design", "Web Development"],
    },
  ];

  const skills = [
    {
      category: "Languages",
      icon: <Code2 size={18} />,
      items: ["Python", "JavaScript", "SQL", "Java"],
    },

    {
      category: "Frontend",
      icon: <Layers3 size={18} />,
      items: ["React", "Tailwind CSS", "Framer Motion", "Material UI"],
    },

    {
      category: "Backend",
      icon: <Briefcase size={18} />,
      items: ["Node.js", "Express", "FastAPI", "MongoDB"],
    },

    {
      category: "ML / AI",
      icon: <BrainCircuit size={18} />,
      items: ["TensorFlow", "PyTorch", "Scikit-Learn", "Pandas"],
    },

    {
      category: "Tools",
      icon: <Sparkles size={18} />,
      items: ["Docker", "Git", "GitHub Actions", "Streamlit"],
    },

    {
      category: "Concepts",
      icon: <BookOpen size={18} />,
      items: ["RAG", "MLOps", "System Design", "CI/CD"],
    },
  ];

  return (
    <section
      id="experience"
      className="
        relative
        min-h-screen
        overflow-hidden
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
            w-112.5
            h-112.5
            rounded-full
            bg-cyan-500/10
            blur-3xl
          "
        />

        <motion.div
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 30, -20, 0],
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
            w-112.5
            h-112.5
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
        />

        {/* Noise */}
        {/* <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-linears.vercel.app/noise.svg')]" /> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
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
            Experience & Expertise
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
            My Journey
            <br />&{" "}
            <span className="bg-linear-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              max-w-3xl
              mx-auto
              text-gray-400
              text-lg
              md:text-xl
              leading-relaxed
            "
          >
            A timeline of my growth in software engineering, AI development, and
            building modern digital experiences through continuous learning and
            practical innovation.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-14 mb-28">
          {/* LEFT TIMELINE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              relative
              overflow-hidden
              rounded-4xl
              border border-white/10
              bg-white/5
              backdrop-blur-2xl
              p-8 md:p-10
              shadow-[0_0_60px_rgba(59,130,246,0.08)]
            "
          >
            {/* Shine */}
            <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-12">
                Career Timeline
              </h2>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4.5 top-2 bottom-2 w-px bg-linear-to-b from-cyan-400/60 via-blue-500/40 to-transparent" />

                <div className="space-y-12">
                  {experiences.map((exp, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: idx * 0.15,
                        duration: 0.7,
                      }}
                      className="relative pl-16"
                    >
                      {/* Dot */}
                      <motion.div
                        whileInView={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 0.6,
                          delay: idx * 0.2,
                        }}
                        className="
                          absolute
                          left-0
                          top-1
                          flex
                          items-center
                          justify-center
                          w-9 h-9
                          rounded-full
                          border border-cyan-400/40
                          bg-[#050816]
                          text-cyan-300
                        "
                      >
                        {exp.icon}
                      </motion.div>

                      <div>
                        <p className="text-sm text-cyan-300 mb-2">
                          {exp.period}
                        </p>

                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>

                        <p className="text-gray-400">{exp.company}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT EXPERIENCE CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-7"
          >
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.7,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
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
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-cyan-400/5 via-transparent to-blue-500/5" />

                <div className="relative z-10">
                  {/* Top */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="
                          p-4
                          rounded-2xl
                          bg-linear-to-br
                          from-cyan-400/20
                          to-blue-500/20
                          text-cyan-300
                        "
                      >
                        {exp.icon}
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {exp.title}
                        </h3>

                        <p className="text-blue-400 mt-1">{exp.company}</p>
                      </div>
                    </div>

                    <div
                      className="
                        px-4 py-2
                        rounded-full
                        border border-white/10
                        bg-white/5
                        text-gray-300
                        text-sm
                        w-fit
                      "
                    >
                      {exp.period}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-3">
                    {exp.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{
                          scale: 1.05,
                        }}
                        className="
                          px-4 py-2
                          rounded-full
                          border border-cyan-400/20
                          bg-cyan-400/10
                          text-cyan-300
                          text-sm
                          transition-all duration-300
                          hover:border-cyan-400/40
                          hover:bg-cyan-400/20
                        "
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Technical Skillset
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Technologies, frameworks, and concepts I use to build intelligent
              systems and modern applications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.07,
                  duration: 0.7,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border border-white/10
                  bg-white/5
                  backdrop-blur-2xl
                  p-7
                  transition-all duration-500
                  hover:border-cyan-400/30
                  hover:bg-white/6
                  hover:shadow-[0_10px_40px_rgba(34,211,238,0.06)]
                "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-linear-to-br from-cyan-400/5 to-blue-500/5" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="
                        flex items-center justify-center
                        w-10 h-10
                        rounded-xl
                        bg-linear-to-br
                        from-cyan-400/20
                        to-blue-500/20
                        text-cyan-300
                      "
                    >
                      {skillGroup.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white">
                      {skillGroup.category}
                    </h3>
                  </div>

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{
                          scale: 1.05,
                        }}
                        className="
                          px-4 py-2
                          rounded-full
                          border border-white/10
                          bg-white/5
                          text-gray-300
                          text-sm
                          transition-all duration-300
                          hover:border-cyan-400/30
                          hover:text-cyan-300
                        "
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
