import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FadeIn({ children, duration = 1, delay = 0 }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const animation = gsap.fromTo(
      element,
      { opacity: 0, x: 0 }, // Initial state
      {
        opacity: 1,
        x: 0,
        duration,
        delay,
        scrollTrigger: {
          trigger: element,
          start: "top 90%", 
          end: "bottom 20%", 
          toggleActions: "play none none none",
          scrub: false, // Smooth scroll
        },
      }
    );

    // Cleanup scrollTrigger when the component unmounts
    return () => {
      animation.scrollTrigger?.kill();
    };
  }, [duration, delay]);

  return <div ref={elementRef}>{children}</div>;
}

export default FadeIn;
