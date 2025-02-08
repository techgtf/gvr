import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useTextAnimation } from "./useTextAnimation";
import gsap from "gsap";

function verticalWaterMarkHeading({
  TagName = "p",
  className = "",
  rotate = false,
  textWaterMark = "",
  sectionHeading = "",
  animationConfig = {},
}) {
  const bgTextArr = textWaterMark.split("");
  const textRef = useTextAnimation(animationConfig);

  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".bg_text");

    gsap.fromTo(
      elements,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: animationConfig.stagger || 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );
  }, []);

  return (
    <div>
      <div
        ref={sectionRef}
        className={`waterMarkDiv vertical relative ${className}`}
      >
        {textWaterMark && (
          <div className="water_mark_flex flex flex-col h-full absolute opacity-[0.040] justify-center">
            {bgTextArr.map((str, index) => (
              <span
                key={index}
                className={`bg_text uppercase font-medium midlandfontmedium -rotate-90  writing-vertical-rl text-center ${
                  rotate && "!-rotate-90"
                }`}
              >
                {str}
              </span>
            ))}
          </div>
        )}
        <TagName ref={textRef} className="sectionHeading uppercase font-medium">
          {sectionHeading}
        </TagName>
      </div>
    </div>
  );
}

export default verticalWaterMarkHeading;
