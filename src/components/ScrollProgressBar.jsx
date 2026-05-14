import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        (window.scrollY / totalHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress / 100 }}
      transition={{ type: "tween", duration: 0.1 }}
      className="
        fixed top-0 left-0
        h-1
        z-9999
        bg-linear-to-r
        from-blue-500
        via-cyan-400
        to-blue-500
        origin-left
        shadow-[0_0_20px_rgba(59,130,246,0.6)]
      "
      style={{ width: "100%" }}
    />
  );
};

export default ScrollProgressBar;