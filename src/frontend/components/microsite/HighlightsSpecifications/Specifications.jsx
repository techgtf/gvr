import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeIn from "../../Animations/FadeIn";
import CommonHeading from "../../commonHeading";
import SlideIn from "../../Animations/SlideIn";

gsap.registerPlugin(ScrollTrigger);

function Specifications({ title = "Specifications", specifications = [], altImage }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  // console.log(specifications);



  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="col-span-12 md:col-span-8 mt-10 sm:m-0">
      <div className="about_desc">
        <FadeIn duration={2} delay={0.5}>
          <CommonHeading HeadingText={title} />
        </FadeIn>
        <div
          className="grid grid-cols-12 mt-8 pr-5 specifications-scroll-container"
          style={{
            backgroundImage: specifications?.length > 0 ? "none" : `url(${altImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {specifications?.map((spec, index) => (
            <div key={index} className="col-span-12 lg:col-span-6">
              {isDesktop ? (
                <SlideIn delay={0.5} key={index}>
                  {/* {console.log('here',spec.project_specification_list)} */}
                  <h4 className="font-semibold">{spec.heading}</h4>
                  {spec.project_specification_list?.map((item, itemIndex) => (
                    <div className="flex gap-3 py-5" key={item.id}>
                      <div className="icon">
                        <img src={item.icons} alt={item.alt || "Specification image"} className="h-[80%]" />
                      </div>
                      <p className="w-60">{item.short_description}</p>
                    </div>
                  ))}
                </SlideIn>
              ) : (
                <>
                  <h4 className="font-semibold">{spec.title}</h4>
                  {spec.items?.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex gap-3 py-5">
                      <div className="icon">
                        <img src={item.image} alt={item.description || "Specification image"} className="w-[50px] h-[50px] object-contain" />
                      </div>
                      <p className="w-60">{item.description}</p>
                    </div>
                  ))}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Specifications;
