import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Code2,
  Sparkles,
  BrainCircuit,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const About = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Muhammad_Raahim_Rizwan_Resume.pdf";
    link.download = "Muhammad_Raahim_Rizwan_Resume.pdf";
    link.click();
  };

  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Data Science & Machine Learning",
      description:
        "Building data-driven solutions and extracting insights using Python, Pandas, Scikit-learn, and TensorFlow.",
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "AI & Intelligent Systems",
      description:
        "Building AI-powered experiences using TensorFlow, PyTorch, RAG pipelines, and LLM integrations.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Creative Problem Solving",
      description:
        "Combining engineering precision with creative thinking to design impactful digital experiences.",
    },
  ];

  const education = [
    {
      degree: "Bachelors in Computer Science (Specialization in Data Science)",
      school: "NED University of Engineering & Technology",
      period: "2023 — 2027",
      details:
        "Focused on AI Engineering, LLMs and Building Intelligent Agentic Systems.",
    },
  ];

  return (
    <section
      id="about"
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
            bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
            bg-[size:50px_50px]
          "
        />

        {/* Glow */}
        <div className="absolute top-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
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
              text-sm text-cyan-300
              mb-8
            "
          >
            <Sparkles size={16} />
            About Me
          </div>

          {/* Heading */}
          <h1
            className="
              text-5xl
              md:text-7xl
              font-black
              tracking-tight
              text-white
              leading-none
              mb-6
            "
          >
            Engineering Ideas
            <br />
            Into{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Intelligent Experiences
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
            I’m an AI engineering enthusiast passionate about creating modern,
            scalable, and visually immersive digital products that blend
            intelligent systems with exceptional user experiences.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Card */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border border-white/10
                bg-white/[0.05]
                backdrop-blur-2xl
                p-8 md:p-10
                shadow-[0_0_60px_rgba(59,130,246,0.08)]
              "
            >
              {/* Shine */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  My Background
                </h2>

                <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                  <p>
                    I’m currently pursuing my undergraduate degree in{" "}
                    <span className="text-cyan-300 font-semibold">
                      Computer Science & IT
                    </span>{" "}
                    at{" "}
                    <span className="text-blue-400 font-semibold">
                      NED University of Engineering & Technology
                    </span>
                    , specializing in AI Engineering and intelligent software
                    systems.
                  </p>

                  <p>
                    My work focuses on bridging the gap between artificial
                    intelligence and modern digital experiences — building
                    scalable applications, AI-powered tools, and visually
                    immersive interfaces that solve real-world problems.
                  </p>

                  <p>
                    Whether it’s engineering machine learning pipelines,
                    architecting backend systems, or designing cinematic
                    front-end experiences, I approach every project with both
                    technical depth and creative precision.
                  </p>
                </div>

                {/* CTA */}
                <motion.button
                  onClick={downloadResume}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="
                    group
                    relative
                    overflow-hidden
                    mt-10
                    inline-flex
                    items-center
                    gap-3
                    px-8 py-5
                    rounded-2xl
                    bg-gradient-to-r
                    from-cyan-400
                    via-blue-500
                    to-indigo-500
                    text-white
                    font-semibold
                    shadow-[0_10px_40px_rgba(59,130,246,0.35)]
                    transition-all duration-300
                  "
                >
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <Download
                    size={20}
                    className="relative z-10"
                  />

                  <span className="relative z-10">
                    Download Resume
                  </span>

                  <ArrowRight
                    size={18}
                    className="relative z-10 transition-transform group-hover:translate-x-1"
                  />
                </motion.button>
              </div>
            </div>

            {/* EDUCATION CARD */}
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border border-white/10
                  bg-white/[0.05]
                  backdrop-blur-2xl
                  p-8
                  transition-all duration-500
                  hover:border-blue-400/30
                  hover:shadow-[0_10px_40px_rgba(59,130,246,0.12)]
                "
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="
                          p-4
                          rounded-2xl
                          bg-gradient-to-br
                          from-blue-500/20
                          to-cyan-400/20
                          text-cyan-300
                        "
                      >
                        <GraduationCap size={26} />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {edu.degree}
                        </h3>

                        <p className="text-blue-400 font-medium mt-1">
                          {edu.school}
                        </p>
                      </div>
                    </div>

                    <div
                      className="
                        px-5 py-2
                        rounded-full
                        border border-white/10
                        bg-white/5
                        text-gray-300
                        text-sm
                        w-fit
                      "
                    >
                      {edu.period}
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {highlights.map((highlight, idx) => (
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
                  rounded-[28px]
                  border border-white/10
                  bg-white/[0.05]
                  backdrop-blur-2xl
                  p-8
                  transition-all duration-500
                  hover:border-cyan-400/30
                  hover:bg-white/[0.07]
                  hover:shadow-[0_10px_40px_rgba(34,211,238,0.08)]
                "
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-500/5" />

                <div className="relative z-10">
                  <div
                    className="
                      mb-6
                      inline-flex
                      p-4
                      rounded-2xl
                      bg-gradient-to-br
                      from-cyan-400/20
                      to-blue-500/20
                      text-cyan-300
                    "
                  >
                    {highlight.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {highlight.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;