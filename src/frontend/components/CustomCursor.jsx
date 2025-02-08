import React, { useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';

function CustomCursor() {
  const cursorRef = useRef(null);

  useLayoutEffect(() => {
    const handleMouseMove = (event) => {
      gsap.to(cursorRef.current, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div id="cursor" className='hidden md:block' ref={cursorRef}></div>;
}

export default CustomCursor;