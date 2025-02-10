import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  useLayoutEffect(() => {
    const specifications = document.querySelector(".specifications-scroll-container");

    if (specifications) {
      ScrollTrigger.create({
        trigger: "#highlightsSpecifications",
        start,
        endTrigger: specifications,
        end: () => `bottom+=${specifications.offsetHeight} top`,
        pin,
        pinSpacing: true,
        scrub,
        markers,
      });

      ScrollTrigger.create({
        trigger: ".specifications-scroll-container",
        start: "top top",
        end: `+=${endOffset}`,
        scrub,
        markers,
      });
    }
  }, [pin, scrub, markers, start, endOffset, location.pathname]);

  return (
    <section
      id="highlightsSpecifications"
      className="w-full relative px-5 md:px-12 py-10 md:py-14 flex items-center"
    >
      <div className="grid sm:grid-cols-12 grid-cols-1 md:gap-20">
        <Highlights />
        <Specifications />
      </div>
    </section>
  );
}

export default HighlightsSpecifications;
