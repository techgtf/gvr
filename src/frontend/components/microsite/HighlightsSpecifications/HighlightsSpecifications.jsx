import React, { useEffect, useLayoutEffect, useRef, forwardRef } from "react";
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
  start = "top -5%",
  endOffset = "30%",
}) => {
  const location = useLocation();
  const sectionRef = useRef(null);
  const specificationsRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !specificationsRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach((st) => st.kill()); // ✅ Purane triggers hatao

      let firstTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start,
        endTrigger: specificationsRef.current,
        end: `bottom+=${specificationsRef.current.offsetHeight} top`,
        pin,
        pinSpacing: true,
        scrub,
        markers,
      });

      let secondTrigger = ScrollTrigger.create({
        trigger: specificationsRef.current,
        start: "top top",
        end: `+=${endOffset}`,
        scrub,
        markers,
      });

      ScrollTrigger.refresh(); // ✅ Ensure refresh
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.killAll(); // ✅ Proper cleanup
    };
  }, [location.pathname]); // ✅ Route change pe trigger hoga

  return (
    <section ref={sectionRef} id="highlightsSpecifications" className="w-full relative px-5 md:px-12 py-10 md:py-14 flex items-center">
      <div className="grid sm:grid-cols-12 grid-cols-1 md:gap-20">
        <Highlights />
        <Specifications ref={specificationsRef} /> {/* ✅ Ensure ref pass properly */}
      </div>
    </section>
  );
};

// ✅ Specifications ko forwardRef se wrap krna hoga
const Specifications = forwardRef((props, ref) => <div ref={ref} {...props} />);

export default HighlightsSpecifications;
