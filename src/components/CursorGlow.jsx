import React, { useEffect, useRef } from 'react';

const CursorGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!glowRef.current) return;
      
      glowRef.current.style.left = e.clientX + 'px';
      glowRef.current.style.top = e.clientY + 'px';
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="
        pointer-events-none
        fixed
        w-8 h-8
        rounded-full
        bg-blue-400/30
        blur-xl
        -translate-x-1/2 -translate-y-1/2
        z-30
        transition-all duration-75
      "
    />
  );
};

export default CursorGlow;
