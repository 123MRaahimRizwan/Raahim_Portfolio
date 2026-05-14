import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import {
  IoSend,
  IoMail,
  IoSparkles,
} from "react-icons/io5";

import { FaMapPin } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      console.log(formData);

      setSubmitStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus(null), 4000);

      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <IoMail size={22} />,
      label: "Email",
      value: "raahimrizwantcs@gmail.com",
      href: "mailto:raahimrizwantcs@gmail.com",
      color: "from-blue-500/20 to-cyan-400/20",
    },
    {
      icon: <FaMapPin size={20} />,
      label: "Location",
      value: "Karachi, Pakistan",
      href: "#",
      color: "from-cyan-500/20 to-indigo-500/20",
    },
  ];

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

  return (
    <section
      id="contact"
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

        {/* Glow Orbs */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -20, 20, 0],
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
            w-[420px]
            h-[420px]
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
        />

        <motion.div
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 20, -20, 0],
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
            w-[420px]
            h-[420px]
            rounded-full
            bg-cyan-500/10
            blur-3xl
          "
        />

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
              text-sm
              text-cyan-300
              mb-8
            "
          >
            <IoSparkles size={16} />
            Get In Touch
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
            Let's Build
            <br />
            Something{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Extraordinary
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
            Whether you have a project idea, collaboration opportunity,
            freelance work, or simply want to connect — I’m always open
            to meaningful conversations and innovative ideas.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10">
          {/* LEFT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Contact Information
              </h2>

              <p className="text-gray-400 leading-relaxed mb-10">
                I enjoy collaborating on AI products, modern web applications,
                and creative digital experiences that push boundaries.
              </p>

              {/* Contact Items */}
              <div className="space-y-5">
                {contactInfo.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: idx * 0.1,
                      duration: 0.7,
                    }}
                    whileHover={{
                      y: -4,
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      flex
                      items-center
                      gap-5
                      p-5
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.04]
                      transition-all duration-500
                      hover:border-cyan-400/30
                      hover:bg-white/[0.06]
                    "
                  >
                    <div
                      className={`
                        flex items-center justify-center
                        w-14 h-14
                        rounded-2xl
                        bg-gradient-to-br
                        ${item.color}
                        text-cyan-300
                      `}
                    >
                      {item.icon}
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-1">
                        {item.label}
                      </p>

                      <p className="text-white font-medium">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Divider */}
              <div className="my-10 border-t border-white/10" />

              {/* Socials */}
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-5">
                  Connect With Me
                </p>

                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: idx * 0.1,
                        duration: 0.7,
                      }}
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
                        flex items-center justify-center
                        w-14 h-14
                        rounded-2xl
                        border border-white/10
                        bg-white/[0.05]
                        text-gray-300
                        transition-all duration-300
                        hover:border-cyan-400/30
                        hover:text-white
                      "
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-400/10 to-blue-500/10" />

                      <div className="relative z-10">
                        {social.icon}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT PANEL - FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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

            <div className="relative z-10 space-y-7">
              {/* Name */}
              <div className="space-y-3">
                <label className="text-sm uppercase tracking-wide text-gray-300">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Michael Jackson"
                  className="
                    w-full
                    rounded-2xl
                    border border-white/10
                    bg-black/20
                    px-6 py-5
                    text-white
                    placeholder:text-gray-500
                    outline-none
                    transition-all duration-300
                    focus:border-cyan-400/40
                    focus:bg-black/30
                    focus:shadow-[0_0_25px_rgba(34,211,238,0.12)]
                  "
                />
              </div>

              {/* Email */}
              <div className="space-y-3">
                <label className="text-sm uppercase tracking-wide text-gray-300">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="mj@example.com"
                  className="
                    w-full
                    rounded-2xl
                    border border-white/10
                    bg-black/20
                    px-6 py-5
                    text-white
                    placeholder:text-gray-500
                    outline-none
                    transition-all duration-300
                    focus:border-cyan-400/40
                    focus:bg-black/30
                    focus:shadow-[0_0_25px_rgba(34,211,238,0.12)]
                  "
                />
              </div>

              {/* Message */}
              <div className="space-y-3">
                <label className="text-sm uppercase tracking-wide text-gray-300">
                  Your Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea... Hee Heee... Shamone!"
                  className="
                    w-full
                    rounded-2xl
                    border border-white/10
                    bg-black/20
                    px-6 py-5
                    text-white
                    placeholder:text-gray-500
                    outline-none
                    resize-none
                    transition-all duration-300
                    focus:border-cyan-400/40
                    focus:bg-black/30
                    focus:shadow-[0_0_25px_rgba(34,211,238,0.12)]
                  "
                />
              </div>

              {/* Success Message */}
              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="
                      rounded-2xl
                      border border-emerald-400/20
                      bg-emerald-500/10
                      px-5 py-4
                      text-emerald-300
                      text-sm
                    "
                  >
                    ✓ Message successfully sent. I’ll get back to you soon.
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  w-full
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-indigo-500
                  py-5
                  text-lg
                  font-semibold
                  text-white
                  shadow-[0_10px_40px_rgba(59,130,246,0.35)]
                  transition-all duration-300
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                "
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                <span className="relative flex items-center justify-center gap-3">
                  {isSubmitting ? "Sending Message..." : "Send Message"}

                  <motion.div
                    animate={
                      isSubmitting
                        ? { x: [0, 4, 0] }
                        : {}
                    }
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                  >
                    <IoSend size={20} />
                  </motion.div>
                </span>
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;