import React, { useLayoutEffect, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const HighlightsSpecifications = ({
  highlightsComponent: Highlights,
  specificationsComponent: Specifications,
  pin = true,
  scrub = 1,
  markers = false,
  start = "top top",
  endOffset = "bottom bottom",
}) => {
  const location = useLocation();
  const sectionRef = useRef(null);
  const specificationsRef = useRef(null);
  const triggerRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !specificationsRef.current) return;

    if (triggerRef.current) {
      triggerRef.current.kill();
    }

    let ctx = gsap.context(() => {
      triggerRef.current = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: start,
        end: () => `bottom+=${specificationsRef.current.scrollHeight}`,
        pin: pin,
        pinSpacing: true,
        scrub: scrub,
        markers: false,
        invalidateOnRefresh: true,
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => {
      ctx.revert();
      if (triggerRef.current) {
        triggerRef.current.kill();
        triggerRef.current = null;
      }
    };
  }, [location.pathname]);

  useEffect(() => {
    setTimeout(() => ScrollTrigger.refresh(), 100);
  }, [location.pathname]);

  return (
    <section ref={sectionRef} id="highlightsSpecifications" className="w-full relative px-5 md:px-12 py-10 md:py-14 flex items-center">
      <div className="grid sm:grid-cols-12 grid-cols-1 md:gap-20">
        <Highlights />
        <div ref={specificationsRef} className="col-span-12 md:col-span-8">
          <Specifications />
        </div>
      </div>
    </section>
  );
};

export default HighlightsSpecifications;
