import React from "react";
import { motion } from "framer-motion";

import {
  FaHeart,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import {
  IoArrowUp,
  IoSparkles,
} from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: <FaGithub size={18} />,
      href: "https://github.com/123MRaahimRizwan",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={18} />,
      href: "https://www.linkedin.com/in/muhammad-raahim-rizwan",
      label: "LinkedIn",
    },
    {
      icon: <FaYoutube size={18} />,
      href: "https://www.youtube.com/@programmingwithraahim",
      label: "YouTube",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer
      className="
        relative
        overflow-hidden
        px-6
        md:px-12
        pt-24
        pb-10
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
            bg-size-[50px_50px]
          "
        />

        {/* Glow */}
        <div className="absolute top-[-20%] right-[-10%] w-100 h-100 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute bottom-[-20%] left-[-10%] w-100 h-100 rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Noise */}
        {/* <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" /> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* TOP DIVIDER */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
            h-px
            w-full
            origin-left
            bg-linear-to-r
            from-transparent
            via-cyan-400/30
            to-transparent
            mb-20
          "
        />

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr_0.8fr] gap-14">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4 py-2
                rounded-full
                border border-cyan-400/20
                bg-cyan-400/10
                text-cyan-300
                text-sm
                backdrop-blur-xl
              "
            >
              <IoSparkles size={15} />
              Portfolio & Personal Brand
            </div>

            {/* Name */}
            <div>
              <h2
                className="
                  text-3xl
                  md:text-4xl
                  font-black
                  tracking-tight
                  text-white
                  leading-tight
                "
              >
                Muhammad
                <br />
                <span className="bg-linear-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Raahim Rizwan
                </span>
              </h2>
            </div>

            {/* Description */}
            <p
              className="
                max-w-md
                text-gray-400
                leading-relaxed
                text-base
              "
            >
              AI Engineering enthusiast focused on building
              intelligent systems, immersive digital experiences,
              and scalable modern applications with thoughtful design.
            </p>

            {/* Built With */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4 py-3
                rounded-2xl
                border border-white/10
                bg-white/4
                text-gray-400
                text-sm
              "
            >
              Built with

              <FaHeart
                size={14}
                className="text-red-400 fill-red-400 animate-pulse"
              />

              using React, Framer Motion & Tailwind CSS
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3
              className="
                text-sm
                uppercase
                tracking-[0.25em]
                text-gray-500
              "
            >
              Navigation
            </h3>

            <div className="flex flex-col gap-4">
              {quickLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  whileHover={{
                    x: 6,
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    text-gray-400
                    hover:text-white
                    transition-all duration-300
                    w-fit
                  "
                >
                  <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>

                  <span className="text-base">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* SOCIALS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3
              className="
                text-sm
                uppercase
                tracking-[0.25em]
                text-gray-500
              "
            >
              Connect
            </h3>

            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.08,
                    y: -5,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    flex
                    items-center
                    justify-center
                    w-14 h-14
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    text-gray-300
                    transition-all duration-300
                    hover:border-cyan-400/30
                    hover:text-white
                  "
                  title={social.label}
                >
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br from-cyan-400/10 to-blue-500/10" />

                  <div className="relative z-10">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>

            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Open to collaborations, freelance projects,
              AI engineering opportunities, and creative tech discussions.
            </p>
          </motion.div>
        </div>

        {/* BOTTOM SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="
            mt-20
            pt-8
            border-t border-white/10
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
          "
        >
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Muhammad Raahim Rizwan.
            Crafted with precision and creativity.
          </p>

          {/* Back To Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              group
              relative
              overflow-hidden
              flex
              items-center
              gap-3
              px-5 py-3
              rounded-2xl
              border border-white/10
              bg-white/5
              text-gray-300
              transition-all duration-300
              hover:border-cyan-400/30
              hover:text-white
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-linear-to-r from-cyan-400/10 to-blue-500/10" />

            <span className="relative z-10">
              Back to Top
            </span>

            <IoArrowUp
              size={18}
              className="relative z-10 transition-transform group-hover:-translate-y-1"
            />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;