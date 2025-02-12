import React, { useLayoutEffect, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const HighlightsSpecifications = ({ highlightsComponent, specificationsComponent }) => {
  const sectionRef = useRef(null);
  const specificationsRef = useRef(null);
  const location = useLocation();
  const scrollTriggerRef = useRef(null);

  useLayoutEffect(() => {
    console.log("Initializing ScrollTrigger for:", location.pathname);

    if (!sectionRef.current || !specificationsRef.current) {
      console.warn("Refs are not available!");
      return;
    }

    // Kill any existing ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    ScrollTrigger.clearMatchMedia();

    let ctx = gsap.context(() => {
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${specificationsRef.current.scrollHeight}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        markers: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (specificationsRef.current) {
            specificationsRef.current.scrollTop =
              self.progress * (specificationsRef.current.scrollHeight - specificationsRef.current.clientHeight);
          }
        },
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => {
      console.log("Cleaning up ScrollTrigger for:", location.pathname);
      ctx.revert();
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [location.pathname]);

  useEffect(() => {
    // Ensure ScrollTrigger refreshes after route change
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  }, [location.pathname]);

  return (
    <section
      key={location.pathname} 
      ref={sectionRef}
      className="w-full relative px-5 md:px-12 py-10 md:py-14 flex items-center overflow-hidden"
    >
      <div className="grid sm:grid-cols-12 grid-cols-1 md:gap-20 w-full">
        {highlightsComponent()} 
        <div
          ref={specificationsRef}
          className="col-span-12 md:col-span-8 overflow-y-auto h-[450px] pr-5 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent"
        >
          {specificationsComponent()}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSpecifications;
