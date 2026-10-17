import React, { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Check if touch device
    const checkTouch = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(hover: none)').matches
      );
    };

    if (checkTouch()) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target;
      const clickable =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button';
      setIsPointer(!!clickable);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (isTouch || !isVisible) return null;

  return (
    <>
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isPointer ? '36px' : '22px',
          height: isPointer ? '36px' : '22px',
          borderRadius: '50%',
          border: '1.5px solid var(--accent-secondary)',
          background: isPointer ? 'rgba(139, 92, 246, 0.15)' : 'transparent',
          transform: `translate3d(${position.x - (isPointer ? 18 : 11)}px, ${position.y - (isPointer ? 18 : 11)}px, 0)`,
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'width 0.2s ease, height 0.2s ease, background 0.2s ease, transform 0.08s linear',
          boxShadow: '0 0 15px rgba(139, 92, 246, 0.3)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: 'var(--accent-primary)',
          transform: `translate3d(${position.x - 2.5}px, ${position.y - 2.5}px, 0)`,
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'transform 0.02s linear',
        }}
      />
    </>
  );
}
