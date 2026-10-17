import React, { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollPercentage(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        zIndex: 9999,
        background: 'transparent',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${scrollPercentage}%`,
          background: 'linear-gradient(90deg, #8b5cf6, #ec4899)',
          boxShadow: '0 0 10px rgba(139, 92, 246, 0.7)',
          transition: 'width 0.1s linear',
        }}
      />
    </div>
  );
}
