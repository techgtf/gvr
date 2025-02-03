import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Highlights from "./Highlights";
import Specifications from "./Specifications";

gsap.registerPlugin(ScrollTrigger);

function HighlightsSpecifications() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#highlightsSpecifications", // The section to be pinned
      start: "top top", // Pin the section when it reaches the top of the viewport
      end: "bottom top", // Pin until the section reaches the bottom of the viewport
    });
  }, []);

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
