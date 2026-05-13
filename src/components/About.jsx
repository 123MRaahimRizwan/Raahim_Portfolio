import React from "react";
import { Download } from "lucide-react";

const About = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Muhammad_Raahim_Rizwan_Resume.pdf"; // Put your resume in public folder
    link.download = "Muhammad_Raahim_Rizwan_Resume.pdf";
    link.click();
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 md:px-12">
      <section
        id="hero"
        className="
          w-full
          max-w-6xl
          rounded-3xl
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          shadow-[0_8px_40px_rgba(0,0,0,0.25)]
          p-8 md:p-14
        "
      >
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

          {/* LEFT CONTENT */}
          <div className="flex-1 space-y-7">

            {/* Tag */}
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
              AI Engineering Enthusiast
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Raahim
                </span>{" "}
                👋
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Undergrad AI Engineering enthusiast focused on
                <span className="text-white font-medium">
                  {" "}AI Research, Development,
                </span>{" "}
                and building impactful digital experiences.
              </p>
            </div>

            {/* About */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                About Me
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed">
                I am an undergraduate Data Science student at{" "}
                <span className="text-white font-medium">
                  NED University of Engineering and Technology
                </span>
                , studying in the Department of Computer Science and
                Information Technology (CSIT).
              </p>

              <p className="text-gray-400 text-lg leading-relaxed">
                I enjoy working on AI projects, modern web applications,
                and creating meaningful software solutions with clean UI/UX.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={downloadResume}
                className="
                  group
                  flex items-center gap-2
                  rounded-2xl
                  bg-white text-black
                  px-6 py-4
                  font-semibold
                  transition-all duration-300
                  hover:scale-105
                  hover:shadow-xl
                  active:scale-95
                "
              >
                <Download size={18} />
                Download Resume
              </button>

              <a
                href="#projects"
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  px-6 py-4
                  text-white
                  font-semibold
                  transition-all duration-300
                  hover:bg-white/10
                  hover:scale-105
                "
              >
                View Projects
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />

            {/* Image Container */}
            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/5
                p-2
                backdrop-blur-lg
              "
            >
              <img
                src="/public/images/Raahim.jpeg"
                alt="Raahim"
                className="
                  w-70
                  h-85
                  md:w-82.5
                  md:h-100
                  object-cover
                  rounded-2xl
                "
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;