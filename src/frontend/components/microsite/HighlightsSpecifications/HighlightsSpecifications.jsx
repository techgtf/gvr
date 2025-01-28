import React from "react";
import Highlights from "./Highlights";

import Specifications from "./Specifications";

function HighlightsSpecifications() {
  return (
    <>
      <section className="w-full relative px-5 md:px-12 py-5 md:py-14  flex items-center" id="highlightsSpecifications">
        <div className="grid sm:grid-cols-12 grid-cols-1 md:gap-20">
          <Highlights />
        <Specifications/>
        </div>
      </section>
    </>
  );
}

export default HighlightsSpecifications;
