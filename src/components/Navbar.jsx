import React from "react";
import { FaHome, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";

const Navbar = () => {
  const navItems = [
    {
      icon: <GoHomeFill size={20} />,
      link: "/",
    },
    {
      icon: <FaGithub size={20} />,
      link: "https://github.com/123MRaahimRizwan",
    },
    {
      icon: <FaLinkedin size={20} />,
      link: "https://www.linkedin.com/in/muhammad-raahim-rizwan",
    },
    {
      icon: <FaYoutube size={20} />,
      link: "https://www.youtube.com/@programmingwithraahim",
    },
  ];

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <div className="
        flex items-center gap-3
        px-5 py-3
        rounded-full
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_8px_30px_rgb(0,0,0,0.12)]
      ">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target={item.link !== "/" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="
              group
              relative
              p-3
              rounded-full
              text-gray-300
              transition-all duration-300
              hover:text-white
              hover:bg-white/10
              hover:scale-110
              active:scale-95
            "
          >
            <span className="relative z-10">
              {item.icon}
            </span>

            {/* Glow Effect */}
            <div className="
              absolute inset-0
              rounded-full
              bg-white/10
              blur-md
              opacity-0
              transition-opacity duration-300
              group-hover:opacity-100
            " />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;