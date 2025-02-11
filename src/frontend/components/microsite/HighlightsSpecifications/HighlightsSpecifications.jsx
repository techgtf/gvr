import React, { useLayoutEffect, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const HighlightsSpecifications = ({ highlightsComponent: Highlights, specificationsComponent: Specifications }) => {
  const sectionRef = useRef(null);
  const specificationsRef = useRef(null);
  const location = useLocation();

  useLayoutEffect(() => {
    if (!sectionRef.current || !specificationsRef.current) return;

    // Purane ScrollTriggers hatao taki naye se start ho
    ScrollTrigger.getAll().forEach((t) => t.kill());

    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${specificationsRef.current.scrollHeight}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        markers: false,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          specificationsRef.current.scrollTop =
            self.progress * (specificationsRef.current.scrollHeight - specificationsRef.current.clientHeight);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [location.pathname]);

  // Jab dusre page se wapas aayein to ScrollTrigger refresh ho
  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [location.pathname]);

  return (
    <section
      ref={sectionRef}
      className="w-full relative px-5 md:px-12 py-10 md:py-14 flex items-center overflow-hidden"
    >
      <div className="grid sm:grid-cols-12 grid-cols-1 md:gap-20 w-full">
        <Highlights />
        <div
          ref={specificationsRef}
          className="col-span-12 md:col-span-8 overflow-y-auto h-[450px] pr-5 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent"
        >
          <Specifications />
        </div>
      </div>
    </section>
  );
};

export default HighlightsSpecifications;
