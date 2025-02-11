import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function HighlightsSpecifications({
  highlightsComponent: Highlights,
  specificationsComponent: Specifications,
  pin = true,
  scrub = 1,
  markers = false,
  start = "top -5%",
  endOffset = "30%",
}) {
  const location = useLocation();
  const sectionRef = useRef(null);
  const specificationsRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !specificationsRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach((st) => st.kill()); // ✅ Old triggers remove karo

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

    return () => ctx.revert(); // ✅ Cleanup animations
  }, [location.pathname]); // ✅ Route change pe refresh hoga

  return (
    <section ref={sectionRef} id="highlightsSpecifications" className="w-full relative px-5 md:px-12 py-10 md:py-14 flex items-center">
      <div className="grid sm:grid-cols-12 grid-cols-1 md:gap-20">
        <Highlights />
        <Specifications ref={specificationsRef} />
      </div>
    </section>
  );
}

export default HighlightsSpecifications;
