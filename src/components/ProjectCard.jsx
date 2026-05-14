import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ image, title, description, link, category }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="
        group
        h-full
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        overflow-hidden
        transition-all duration-500
        hover:border-blue-400/30
        hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)]
      "
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-linear-to-br from-gray-800 to-black">
        {image && (
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-500"
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          />
        )}

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          className="
            absolute inset-0
            bg-linear-to-b from-transparent via-black/40 to-black/80
            flex items-end justify-between p-6
          "
        >
          {category && (
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
              {category}
            </span>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 h-full flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-bold text-white leading-tight line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed grow line-clamp-3">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              flex-1
              flex items-center justify-center gap-2
              px-4 py-3
              rounded-xl
              bg-linear-to-r from-blue-500 to-cyan-400
              text-white
              font-semibold
              text-sm
              transition-all duration-300
              hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]
            "
          >
            <FaGithub size={16} />
            <span>Code</span>
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              flex-1
              flex items-center justify-center gap-2
              px-4 py-3
              rounded-xl
              border border-white/10
              bg-white/5
              text-white
              font-semibold
              text-sm
              transition-all duration-300
              hover:bg-white/10
              hover:border-blue-400/30
            "
          >
            <ExternalLink size={16} />
            <span>Live</span>
          </motion.a>
        </div>
      </div>

      {/* Border Glow Effect */}
      <motion.div
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        className="
          absolute inset-0
          rounded-3xl
          border border-blue-400/20
          pointer-events-none
        "
      />
    </motion.div>
  );
};

export default ProjectCard;