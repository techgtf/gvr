import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeIn from "../../Animations/FadeIn";
import CommonHeading from "../../commonHeading";
import SlideIn from "../../Animations/SlideIn";

gsap.registerPlugin(ScrollTrigger);

function Highlights({ title = "Highlights", highlights = [] }) {

  return (
    <div className="col-span-4">
      <div className="about_heading">
        <FadeIn duration={2} delay={0.5}>
          <CommonHeading HeadingText={title} />
        </FadeIn>
        <ol className="pt-8" >
          {highlights.map((highlight, index) => (
            <React.Fragment key={index}>
              <SlideIn duration={2} delay={0.5}>
            <li  className="flex gap-3 items-start py-2">
              <div className="num bg-[#749CBE] rounded-full text-white w-6 h-6 leading-6 text-center flex-shrink-0">
                {index + 1}
              </div>
              {highlight}
            </li>
            </SlideIn>
            </React.Fragment>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Highlights;
