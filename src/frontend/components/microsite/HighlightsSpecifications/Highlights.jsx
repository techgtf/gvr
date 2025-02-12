import React, { useLayoutEffect, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeIn from "../../Animations/FadeIn";
import CommonHeading from "../../commonHeading";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Highlights({ title = "Highlights", highlights = [] }) {
  const listRef = useRef(null);
  const location = useLocation();
  const scrollTriggerRef = useRef(null);

  useLayoutEffect(() => {
    if (!listRef.current) return;

    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill();
      scrollTriggerRef.current = null;
    }

    let ctx = gsap.context(() => {
      scrollTriggerRef.current = gsap.fromTo(
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
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }
      );

      ScrollTrigger.refresh();
    }, listRef);

    return () => {
      ctx.revert();
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
    };
  }, [location.pathname]);

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
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
