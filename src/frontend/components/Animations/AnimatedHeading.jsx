import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SlideIn from "./SlideIn"

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
  const animationRef = useRef(null); // Prevent multiple animations

  useEffect(() => {
    if (!sectionRef.current) return;

    // 🛑 Kill previous animations before starting new ones
    if (animationRef.current) {
      animationRef.current.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }

    const animateLine = (lineRef, origin) => {
      if (!lineRef.current) return;
      animationRef.current = gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: origin },
        {
          scaleX: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    };

    if (lineLeft) animateLine(lineLeftRef, "left"); // ✅ Left line expands from left
    if (lineRight) animateLine(lineRightRef, "right"); // ✅ Right line expands from right

    return () => {
      // Cleanup GSAP animations on unmount
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [sectionRef.current]); // ✅ Runs only on mount

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
        <div className={`flex items-center gap-x-[77px] ${justifyContent}`}>
          {lineLeft && <div ref={lineLeftRef} className="h-[1px] bg-gray-200 w-full scale-x-0"></div>}
          <TagName className="sectionHeading midlandfontmedium uppercase lg:text-[12px] text-[10px] font-[500] tracking-[4px] min-w-[fit-content]">
            {sectionHeading}
          </TagName>
          {lineRight && <div ref={lineRightRef} className="h-[1px] bg-gray-200 w-full scale-x-0"></div>}
        </div>
      </SlideIn>
    </div>
  );
}
