import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SlideIn = ({ children, duration = 1, delay = 0 }) => {
    const elementRef = useRef(null);
  
    useEffect(() => {
      const element = elementRef.current;
  
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          delay,
          stagger: 1,
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
    }, [duration, delay]);
  
    return (
      <div ref={elementRef}>
        {children}
      </div>
    );
  };
  
export default SlideIn;
