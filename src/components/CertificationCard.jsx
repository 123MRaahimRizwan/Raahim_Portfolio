import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const CertificationCard = ({
  title,
  issuer,
  date,
  image,
  description,
  certificateLink,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:border-cyan-400/30
        hover:bg-white/[0.07]
        hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]
      "
    >
      {/* Hover Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          bg-linear-to-br
          from-cyan-400/5
          via-transparent
          to-blue-500/5
        "
      />

      {/* Certificate Image */}
      <div className="relative overflow-hidden h-56">
        <img
          src={image}
          alt={title}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#050816] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 p-7">
        {/* Issuer */}
        <div className="flex items-center justify-between mb-5">
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-cyan-400/10
              border
              border-cyan-400/20
              text-cyan-300
              text-sm
            "
          >
            <Award size={16} />
            {issuer}
          </div>

          <span className="text-gray-500 text-sm">{date}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed mb-8">{description}</p>

        {/* Button */}
        <motion.a
          href={certificateLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 5 }}
          className="
            inline-flex
            items-center
            gap-2
            font-medium
            text-cyan-300
            hover:text-white
            transition-colors
          "
        >
          View Certificate
          <ExternalLink
            size={17}
            className="transition-transform group-hover:translate-x-1"
          />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default CertificationCard;
