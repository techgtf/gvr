import React from "react";
import WaterMarkHeading from "../verticalWaterMarkHeading";
import aboutImg from "/assets/frontend/images/microsite/about.jpg";
import CommonHeading from "../commonHeading";
import { useImageReveal } from "../useImageReveal";
import SlideIn from "../Animations/SlideIn";
import FadeIn from "../Animations/FadeIn";
import ZoomOut from "../Animations/ZoomOut";

function About() {
  const reverseText = (text) => {
    return text.split("").reverse().join("");
  };

  const animationConfig1 = {
    stagger: -0.1,
  };

  useImageReveal(".reveal");

  return (
    <section className="about bg-[#EFF5FA] relative px-5 md:px-12 py-10 md:py-14">
      <div className="absolute h-full flex items-center left-20 bottom-0">
        <WaterMarkHeading
          textWaterMark={reverseText("ABOUT US")}
          className="flex flex-col items-start justify-center text-[4vw]"
          animationConfig={animationConfig1}
        />
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-4">
          <div className="about_heading">
            <FadeIn duration={2} delay={0.7}>
              <CommonHeading HeadingText="about us" />
            </FadeIn>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 mt-4 md:mt-0">
          <div className="about_desc  ">
            <SlideIn duration={0.8} delay={0.2}>
              <p className="text-justify ">
                Great Value presents a new stature of luxury residential
                apartments at SHARANAM. Located in sector 107, Noida, these
                stunning apartments comprise of 16 exclusive towers with 2, 3
                and 4 BHK Flats. At SHARANAM you will not only enjoy the
                benefits of a beautiful location but, you can also take pleasure
                with ready to move flats facilities in Noida. As the name
                “SHARANAM” itself says that the project provides a beautiful
                place which purifies your soul. The apartments are designed to
                exhilarate your inner soul. It is just like the recreational
                destination for your family.
              </p>
            </SlideIn>
            <div className="relative  w-full">
              <div className="hero_vdo_div  w-[96] !bg-cover mt-7 md:mt-4 !bg-center bg-no-repeat overflow-hidden">
                <ZoomOut initialScale={1.5} duration={2}>
                  <img src={aboutImg} alt="About Image" className="object-cover" />
                </ZoomOut>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
