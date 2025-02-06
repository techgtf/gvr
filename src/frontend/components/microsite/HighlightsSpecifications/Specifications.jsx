import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeIn from "../../Animations/FadeIn";
import CommonHeading from "../../commonHeading";

gsap.registerPlugin(ScrollTrigger);

function Specifications({ title = "Specifications", specifications = [] }) {
  const specificationRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      specificationRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: specificationRefs.current,
          start: "top 90%",
          end: "bottom 20%",
        },
      }
    );
  }, [specifications]);

  return (
    <div className="col-span-12 md:col-span-8 mt-10 sm:m-0">
      <div className="about_desc">
        <FadeIn duration={2} delay={0.5}>
          <CommonHeading HeadingText={title} />
        </FadeIn>
        <div className="grid grid-cols-12 mt-8 overflow-y-auto h-[350px] pr-5 specifications-scroll-container">
          {specifications.map((spec, index) => (
            <div key={index} className="col-span-12 lg:col-span-6" ref={(el) => (specificationRefs.current[index] = el)}>
              <h4 className="font-semibold">{spec.title}</h4>
              {spec.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex gap-3 py-5">
                  <div className="icon">
                    <img src={item.image} alt={item.description} className="h-[80%]" />
                  </div>
                  <p className="w-60">{item.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Specifications;
