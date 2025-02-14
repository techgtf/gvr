import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SlideIn from "./SlideIn"; // Assuming this handles animations

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedHeading({
  TagName = "p",
  className = "",
  textWaterMark = "",
  sectionHeading = "",
  lineLeft = false,
  lineRight = false,
  justifyContent = "justify-center"
}) {
  const sectionRef = useRef(null);
  const lineLeftRef = useRef(null);
  const lineRightRef = useRef(null);

  useEffect(() => {
    const animateLine = (lineRef, origin) => {
      if (!lineRef.current) return;
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: origin },
        {
          scaleX: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%", // Trigger when 80% of the element is in view
            toggleActions: "play none none none",
          },
        }
      );
    };

    if (lineLeft) animateLine(lineLeftRef, "left"); // Left line grows from left
    if (lineRight) animateLine(lineRightRef, "right"); // Right line grows from right
  }, [lineLeft, lineRight]);

  return (
    <div ref={sectionRef} className={`relative ${className}`}>
      {textWaterMark && (
        <div className="absolute inset-0 flex justify-between opacity-5 text-[4vw] uppercase font-medium">
          {textWaterMark.split("").map((char, index) => (
            <span key={index} className="text-gray-200">{char}</span>
          ))}
        </div>
      )}
      <SlideIn duration={1} delay={0.5}>
        <div className={`flex items-center gap-x-5 ${justifyContent}`}>
          {lineLeft && <div ref={lineLeftRef} className="h-[1px] bg-gray-400 w-full scale-x-0"></div>}
          <TagName className="sectionHeading midlandfontmedium uppercase lg:text-[12px] text-[10px] font-[500] tracking-[4px] min-w-[fit-content]">
            {sectionHeading}
          </TagName>
          {lineRight && <div ref={lineRightRef} className="h-[1px] bg-gray-400 w-full scale-x-0"></div>}
        </div>
      </SlideIn>
    </div>
  );
}
