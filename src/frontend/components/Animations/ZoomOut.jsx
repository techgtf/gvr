import React, { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ZoomOut = ({ children, duration = 1.5, initialScale = 1.5, setHeight }) => {
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const element = elementRef.current;

    // Create the GSAP context for scoped selector and cleanup
    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { scale: initialScale },
        {
          scale: 1,
          duration: duration,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%", // Adjust based on when you want the animation to start
            toggleActions: "play none none none",
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, [duration, initialScale, location.pathname]);

  return (
    <div ref={elementRef} style={{ width: "100%", height: setHeight ? setHeight : '100%' }}>
      {children}
    </div>
  );
};

export default ZoomOut;
