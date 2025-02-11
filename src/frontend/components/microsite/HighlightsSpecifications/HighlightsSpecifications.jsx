import React, { useLayoutEffect, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const HighlightsSpecifications = ({
  highlightsComponent: Highlights,
  specificationsComponent: Specifications,
}) => {
  const sectionRef = useRef(null);
  const location = useLocation();

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    // Kill all existing ScrollTriggers
    ScrollTrigger.getAll().forEach((t) => t.kill());

    let ctx = gsap.context(() => {
      ScrollTrigger.refresh();

      let trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        pin: true,
        pinSpacing: true,
        end: "+=500", // Pin for 5 seconds worth of scrolling
        markers: false,
        invalidateOnRefresh: true,
      });

      return () => {
        trigger.kill();
      };
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [location.pathname]);

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  }, [location.pathname]);

  return (
    <section ref={sectionRef} id="highlightsSpecifications" className="w-full relative px-5 md:px-12 py-10 md:py-14 flex items-center">
      <div className="grid sm:grid-cols-12 grid-cols-1 md:gap-20">
        <Highlights />
        <div className="col-span-12 md:col-span-8">
          <Specifications />
        </div>
      </div>
    </section>
  );
};

export default HighlightsSpecifications;
