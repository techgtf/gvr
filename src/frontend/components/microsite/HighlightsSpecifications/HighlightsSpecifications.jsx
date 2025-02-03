import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Highlights from "./Highlights";
import Specifications from "./Specifications";

gsap.registerPlugin(ScrollTrigger);

function HighlightsSpecifications() {
  useEffect(() => {
    const section = document.querySelector("#highlightsSpecifications");
    const specifications = document.querySelector(".specifications-scroll-container");

    ScrollTrigger.create({
      trigger: "#highlightsSpecifications",
      start: "top -5%",
      endTrigger: specifications,
      end: () => `bottom+=${specifications.offsetHeight} top`,
      pin: true,
      pinSpacing: true, 
      scrub: 1,
      markers: false,
    });

    ScrollTrigger.create({
      trigger: ".specifications-scroll-container",
      start: "top top",
      end: "+=100%",
      scrub: 1, 
      markers: false,
    });

  }, []);

  return (
    <section
      id="highlightsSpecifications"
      className="w-full relative px-5 md:px-12 py-10 md:py-14 flex items-center"
    >
      <div className="grid sm:grid-cols-12 grid-cols-1 md:gap-20 ">
        <Highlights />
        <Specifications />
      </div>
    </section>
  );
}

export default HighlightsSpecifications;
