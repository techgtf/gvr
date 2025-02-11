import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeIn from "../../Animations/FadeIn";
import CommonHeading from "../../commonHeading";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Specifications({ title = "Specifications", specifications = [], altImage }) {
  const specificationRefs = useRef([]);
  const location = useLocation();
  const scrollTriggerRef = useRef(null);

  useLayoutEffect(() => {
    if (!specificationRefs.current.length) return;

    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill();
      scrollTriggerRef.current = null;
    }

    let ctx = gsap.context(() => {
      scrollTriggerRef.current = gsap.fromTo(
        specificationRefs.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: specificationRefs.current[0],
            start: "top 90%",
            end: "bottom 20%",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }
      );

      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
    };
  }, [location.pathname]);

  return (
    <div className="col-span-12 md:col-span-8 mt-10 sm:m-0">
      <div className="about_desc">
        <FadeIn duration={2} delay={0.5}>
          <CommonHeading HeadingText={title} />
        </FadeIn>
        <div
          className="grid grid-cols-12 mt-8  pr-5 specifications-scroll-container"
          style={{
            backgroundImage: specifications.length > 0 ? "none" : `url(${altImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {specifications.map((spec, index) => (
            <div
              key={index}
              className="col-span-12 lg:col-span-6"
              ref={(el) => (specificationRefs.current[index] = el)}
            >
              <h4 className="font-semibold">{spec.title}</h4>
              {spec.items?.map((item, itemIndex) => (
                <div key={itemIndex} className="flex gap-3 py-5">
                  <div className="icon">
                    <img src={item.image} alt={item.description || "Specification image"} className="h-[80%]" />
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
