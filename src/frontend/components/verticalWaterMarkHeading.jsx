import React, { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function VerticalWaterMarkHeading({
  TagName = "p",
  className = "",
  rotate = false,
  textWaterMark = "",
  sectionHeading = "",
  animationConfig = {},
}) {
  const location = useLocation();
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    console.log("🚀 useLayoutEffect Running on:", location.pathname);
  
    if (!sectionRef.current) {
      console.error("❌ sectionRef.current is NULL");
      return;
    }
  
    const elements = sectionRef.current.querySelectorAll(".bg_text");
    console.log("🔍 Found elements:", elements);
  
    if (elements.length === 0) {
      console.error("⚠️ No elements found for animation!");
      return;
    }
  
    // ❌ GSAP ka opacity: 0 set mat kar
    // gsap.set(elements, { opacity: 0, y: 80 });
  
    gsap.to(elements, { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      stagger: animationConfig.stagger || 0.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      }
    });
  
  }, [location.pathname]);
  



  return (
    <div>
      <div ref={sectionRef} className={`waterMarkDiv vertical relative ${className}`}>
        {textWaterMark && (
          <div className="water_mark_flex flex flex-col h-full absolute opacity-[0.040] justify-center">
            {textWaterMark.split("").map((str, index) => (
              <>
              {console.log(str)}
              
              <span
                key={index}
                className={`bg_text uppercase font-medium midlandfontmedium -rotate-90 writing-vertical-rl text-center ${
                  rotate && "!-rotate-90"
                }`}
              >
                {str}
              </span>
              </>
            ))}
          </div>
        )}
        <TagName className="sectionHeading uppercase font-medium">{sectionHeading}</TagName>
      </div>
    </div>
  );
}

export default VerticalWaterMarkHeading;
