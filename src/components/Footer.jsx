import React from "react";
import {
  FaHeart,
  FaArrowUp,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative mt-24 px-6 md:px-12 pb-8">

      {/* Divider */}
      <div className="max-w-6xl mx-auto">
        <div className="h-px w-full bg-white/10 mb-8" />

        {/* Main Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left Side */}
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h2 className="text-white font-semibold text-lg">
              Muhammad Raahim Rizwan
            </h2>

            <p className="text-gray-400 text-sm flex items-center gap-1 justify-center md:justify-start">
              Built with
              <FaHeart
                size={14}
                className="text-red-400 fill-red-400"
              />
              using React & Tailwind CSS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">

            <a
              href="https://github.com/123MRaahimRizwan"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                p-3
                rounded-full
                border border-white/10
                bg-white/5
                text-gray-300
                transition-all duration-300
                hover:text-white
                hover:bg-white/10
                hover:scale-110
              "
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-raahim-rizwan"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                p-3
                rounded-full
                border border-white/10
                bg-white/5
                text-gray-300
                transition-all duration-300
                hover:text-white
                hover:bg-white/10
                hover:scale-110
              "
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="https://www.youtube.com/@programmingwithraahim"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                p-3
                rounded-full
                border border-white/10
                bg-white/5
                text-gray-300
                transition-all duration-300
                hover:text-white
                hover:bg-white/10
                hover:scale-110
              "
            >
              <FaYoutube size={18} />
            </a>
          </div>

          {/* Right Side */}
          <button
            onClick={scrollToTop}
            className="
              flex items-center gap-2
              rounded-full
              border border-white/10
              bg-white/5
              px-5 py-3
              text-sm text-gray-300
              transition-all duration-300
              hover:bg-white/10
              hover:text-white
              hover:scale-105
            "
          >
            Back to Top
            <FaArrowUp size={16} />
          </button>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Muhammad Raahim Rizwan.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;