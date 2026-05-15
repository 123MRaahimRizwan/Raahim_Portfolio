import React, {
  useEffect,
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  GoHomeFill,
  GoProjectSymlink,
} from "react-icons/go";

import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import { Sparkles } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] =
    useState("home");

  const [isScrolling, setIsScrolling] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 20);

      const sections = [
        "home",
        "projects",
      ];

      sections.forEach((section) => {
        const el =
          document.getElementById(section);

        if (el) {
          const top =
            el.offsetTop - 150;

          const bottom =
            top + el.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < bottom
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const navItems = [
    {
      icon: <GoHomeFill size={18} />,
      label: "Home",
      link: "#home",
      section: "home",
    },

    {
      icon: (
        <GoProjectSymlink size={18} />
      ),
      label: "Projects",
      link: "#projects",
      section: "projects",
    },

    {
      icon: <FaGithub size={18} />,
      label: "GitHub",
      link: "https://github.com/123MRaahimRizwan",
      external: true,
    },

    {
      icon: <FaLinkedin size={18} />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/muhammad-raahim-rizwan",
      external: true,
    },

    {
      icon: <FaYoutube size={18} />,
      label: "YouTube",
      link: "https://www.youtube.com/@programmingwithraahim",
      external: true,
    },
  ];

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        fixed
        top-6
        left-1/2
        -translate-x-1/2
        z-50
        w-full
        px-4
        flex
        justify-center
      "
    >
      <motion.div
        animate={{
          backdropFilter: isScrolling
            ? "blur(24px)"
            : "blur(18px)",

          backgroundColor: isScrolling
            ? "rgba(255,255,255,0.08)"
            : "rgba(255,255,255,0.05)",

          borderColor: isScrolling
            ? "rgba(255,255,255,0.14)"
            : "rgba(255,255,255,0.08)",
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          relative
          overflow-hidden
          flex
          items-center
          gap-2
          px-3
          py-3
          rounded-full
          border
          bg-white/4
          backdrop-blur-2xl
          shadow-[0_8px_40px_rgba(0,0,0,0.25)]
        "
      >
        {/* Glow Background */}
        <div className="absolute inset-0 bg-linear-to-r from-cyan-400/3 via-blue-500/3 to-indigo-500/3" />

        {/* Floating Blur */}
        <motion.div
          animate={{
            x: [0, 20, -10, 0],
            y: [0, -10, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -top-10
            -right-10
            w-24
            h-24
            bg-cyan-400/10
            rounded-full
            blur-3xl
          "
        />

        {navItems.map((item, index) => {
          const isActive =
            activeSection === item.section;

          return (
            <motion.a
              key={index}
              href={item.link}
              target={
                item.external
                  ? "_blank"
                  : "_self"
              }
              rel={
                item.external
                  ? "noopener noreferrer"
                  : ""
              }
              whileHover={{
                y: -2,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                relative
                group
              "
            >
              {/* Active Background */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 24,
                    }}
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-linear-to-r
                      from-cyan-400
                      to-blue-500
                      shadow-[0_0_25px_rgba(34,211,238,0.35)]
                    "
                  />
                )}
              </AnimatePresence>

              {/* Item */}
              <div
                className={`
                  relative
                  flex
                  items-center
                  justify-center
                  gap-2
                  px-4
                  py-3
                  rounded-full
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "text-white"
                      : "text-gray-300 hover:text-white hover:bg-white/6"
                  }
                `}
              >
                <span className="relative z-10">
                  {item.icon}
                </span>

                {/* Active Dot */}
                {isActive && (
                  <motion.div
                    layoutId="active-dot"
                    className="relative z-10"
                  >
                    <Sparkles
                      size={12}
                      className="text-white"
                    />
                  </motion.div>
                )}
              </div>

              {/* Tooltip */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileHover={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  absolute
                  bottom-full
                  left-1/2
                  -translate-x-1/2
                  mb-3
                  px-3
                  py-1.5
                  rounded-xl
                  border border-white/10
                  bg-black/40
                  backdrop-blur-xl
                  text-xs
                  text-white
                  font-medium
                  whitespace-nowrap
                  pointer-events-none
                  opacity-0
                  group-hover:opacity-100
                "
              >
                {item.label}
              </motion.div>
            </motion.a>
          );
        })}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;