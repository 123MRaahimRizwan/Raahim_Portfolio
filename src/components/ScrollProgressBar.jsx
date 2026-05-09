import React, { useEffect, useState } from "react";

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
    <div
      className="
        fixed top-0 left-0
        h-0.75
        z-9999
        bg-linear-to-r
        from-blue-500
        via-cyan-400
        to-blue-500
        transition-all duration-150
      "
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

export default ScrollProgressBar;