import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { IoSend, IoMail } from "react-icons/io5";
import { FaMapPin } from "react-icons/fa6";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Add form submission logic
    console.log(formData);

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 md:px-12 py-24"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-5">
        
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
          Contact Me
        </div>

        <h1
          className="
            text-4xl md:text-6xl
            font-bold
            tracking-tight
            text-white
          "
        >
          Let's{" "}
          <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Connect
          </span>
        </h1>

        <p
          className="
            max-w-2xl
            text-gray-400
            text-lg
            leading-relaxed
          "
        >
          Have a project idea, collaboration opportunity, or just
          want to say hello? Feel free to reach out.
        </p>
      </div>

      {/* Main Content */}
      <div
        className="
          mt-16
          max-w-6xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
        "
      >
        
        {/* LEFT SIDE */}
        <div
          className="
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            space-y-8
          "
        >
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Get In Touch
            </h2>

            <p className="text-gray-400 mt-3 leading-relaxed">
              I'm always open to discussing AI, development,
              freelancing, or exciting project opportunities.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <IoMail className="text-blue-400" size={20} />
              </div>

              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">
                  raahim@example.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <FaMapPin className="text-cyan-400" size={20} />
              </div>

              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">
                  Karachi, Pakistan
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 pt-2">
            
            <a
              href="https://github.com/123MRaahimRizwan"
              target="_blank"
              rel="noopener noreferrer"
              className="
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
        </div>

        {/* RIGHT SIDE - FORM */}
        <form
          onSubmit={handleSubmit}
          className="
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            space-y-6
          "
        >
          
          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm text-gray-300">
              Your Name
            </label>

            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="
                w-full
                rounded-2xl
                border border-white/10
                bg-white/5
                px-5 py-4
                text-white
                outline-none
                transition-all duration-300
                focus:border-blue-400/50
                focus:bg-white/10
              "
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm text-gray-300">
              Your Email
            </label>

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="
                w-full
                rounded-2xl
                border border-white/10
                bg-white/5
                px-5 py-4
                text-white
                outline-none
                transition-all duration-300
                focus:border-blue-400/50
                focus:bg-white/10
              "
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="text-sm text-gray-300">
              Message
            </label>

            <textarea
              rows="6"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="
                w-full
                rounded-2xl
                border border-white/10
                bg-white/5
                px-5 py-4
                text-white
                outline-none
                resize-none
                transition-all duration-300
                focus:border-blue-400/50
                focus:bg-white/10
              "
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              group
              flex items-center justify-center gap-2
              w-full
              rounded-2xl
              bg-white
              text-black
              py-4
              font-semibold
              transition-all duration-300
              hover:scale-[1.02]
              hover:shadow-xl
              active:scale-[0.98]
            "
          >
            Send Message
            <IoSend
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;