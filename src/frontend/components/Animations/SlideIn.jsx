import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SlideIn = ({ children, duration = 1, delay = 0 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const animation = gsap.fromTo(
      element,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        scrollTrigger: {
          trigger: element,
          start: "top 100%",
          end: "bottom 20%",
          toggleActions: "play none none none",  // This ensures it only plays on top-to-bottom scroll
          scrub: true,
        
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill(); // Cleanup ScrollTrigger
    };
  }, [duration, delay,location.pathname]);

  return <div ref={elementRef}>{children}</div>;
};

export default SlideIn;
