import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FadeIn({ children, duration = 1, delay = 0 }) {
  const elementRef = useRef(null);

    useLayoutEffect(() => {
          const element = elementRef.current;
      
          gsap.fromTo(
            element,
            { x: 0, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration,
              delay,
              scrollTrigger: {
                trigger: element,
                start: 'top 90%', 
                end: 'bottom 20%', 
              },
            }
          );
      
          return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
          };
        }, [duration, delay, location.pathname]);

    if (!element) return;

    const animation = gsap.fromTo(
      element,
      { x: 0, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration,
        delay,
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "bottom 20%",
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill(); // Cleanup ScrollTrigger when unmounting
    };
  }, [duration, delay]);

  return <div ref={elementRef}>{children}</div>;
}

export default FadeIn;
