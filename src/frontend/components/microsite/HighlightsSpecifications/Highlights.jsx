import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeIn from "../../Animations/FadeIn";
import CommonHeading from "../../commonHeading";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Highlights({ title = "Highlights", highlights = [] }) {
  const listRef = useRef(null);
  const location = useLocation();

  useLayoutEffect(() => {
    if (!listRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      ScrollTrigger.killAll();

      requestAnimationFrame(() => { 
        gsap.fromTo(
          listRef.current.children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 90%",
              end: "bottom 20%",
            },
          }
        );

        ScrollTrigger.refresh(); 
      });
    }, listRef);

    return () => {
      ctx.revert(); 
      ScrollTrigger.killAll(); 
    };
  }, [location.pathname]); 

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [location.pathname]);

  return (
    <div className="col-span-4">
      <div className="about_heading">
        <FadeIn duration={2} delay={0.5}>
          <CommonHeading HeadingText={title} />
        </FadeIn>
        <ol className="pt-8" ref={listRef}>
          {highlights.map((highlight, index) => (
            <li key={index} className="flex gap-3 items-start py-2">
              <div className="num bg-[#749CBE] rounded-full text-white w-6 h-6 leading-6 text-center flex-shrink-0">
                {index + 1}
              </div>
              {highlight}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Highlights;
