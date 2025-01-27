import React from "react";
import Highlights from "./Highlights";

import Specifications from "./Specifications";

function HighlightsSpecifications() {
  return (
    <>
      <section className="w-full relative px-10 py-20 sm:h-screen flex items-center" id="highlightsSpecifications">
        <div className="grid sm:grid-cols-12 grid-cols-1 sm:gap-20">
          <Highlights />
        <Specifications/>
        </div>
      </section>
    </>
  );
}

export default HighlightsSpecifications;
