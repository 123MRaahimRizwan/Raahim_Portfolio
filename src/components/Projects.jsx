import React from "react";
import ProjectCard from "./ProjectCard";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Chat Application",
      description:
        "A modern AI-powered chat application with sleek UI and real-time interactions.",
    },
    {
      title: "Spotify Clone",
      description:
        "A responsive Spotify-inspired music streaming interface built with React.",
    },
    {
      title: "Mario Platformer Game",
      description:
        "A complete platformer game developed entirely using Python.",
    },
    {
      title: "Version Control System",
      description:
        "A Git-inspired version control application using C++ and React.",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-12 py-24"
    >
      {/* HEADER */}
      <div className="flex flex-col items-center text-center space-y-5">
        
        {/* Small Badge */}
        <div
          className="
            px-5 py-2
            rounded-full
            border border-white/10
            bg-white/5
            backdrop-blur-lg
            text-sm text-gray-300
          "
        >
          My Work
        </div>

        {/* Main Heading */}
        <h1
          className="
            text-4xl md:text-6xl
            font-bold
            tracking-tight
            text-white
          "
        >
          Featured{" "}
          <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="
            max-w-2xl
            text-gray-400
            text-lg
            leading-relaxed
          "
        >
          A collection of projects focused on AI, web development,
          software engineering, and modern UI/UX experiences.
        </p>
      </div>

      {/* PROJECT GRID */}
      <div
        className="
          mt-16
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-2
          gap-8
          max-w-6xl
          mx-auto
        "
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              p-1
              transition-all duration-500
              hover:-translate-y-2
              hover:border-blue-400/30
              hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)]
            "
          >
            {/* Glow Effect */}
            <div
              className="
                absolute inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-500
                bg-linear-to-br from-blue-500/10 to-cyan-400/10
              "
            />

            {/* Card Content */}
            <div className="relative z-10">
              <ProjectCard
                title={project.title}
                description={project.description}
              />

              {/* Bottom Action */}
              <div className="px-6 pb-6 pt-2">
                <button
                  className="
                    flex items-center gap-2
                    text-sm font-medium
                    text-blue-300
                    transition-all duration-300
                    hover:gap-3
                    hover:text-white
                  "
                >
                  View Project
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;