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
          start: "top 90%", // Animation starts when the top of the element reaches 90% of the viewport
          end: "bottom 20%", // Animation ends when the bottom of the element reaches 20% of the viewport
          toggleActions: "restart pause resume pause", // Restart animation on every scroll (onEnter and onLeave)
          scrub: true, // Smooth scroll
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
