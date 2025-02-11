import React from "react";
import WaterMarkHeading from "../verticalWaterMarkHeading";
import CommonHeading from "../commonHeading";
import { useImageReveal } from "../useImageReveal";
import SlideIn from "../Animations/SlideIn";
import FadeIn from "../Animations/FadeIn";
import ZoomOut from "../Animations/ZoomOut";
import VerticalWaterMarkHeading from "../verticalWaterMarkHeading";

function About({
  imageSrc = "assets/frontend/images/microsite/about.jpg", // Default image
  headingText = "ABOUT US", // Default heading text
  descriptionText = "A serene haven in Noida offering ready-to-move flats that rejuvenate your soul. Thoughtfully crafted, it’s more than a home; it’s your family’s tranquil retreat that seamlessly combines modern amenities, excellent connectivity, and a vibrant community to deliver a living experience like no other.", // Default description
  reverseWatermark = true, // Optional: Reverse watermark text
}) {
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
        <VerticalWaterMarkHeading
          textWaterMark={reverseWatermark ? reverseText(headingText) : headingText}
          className="flex flex-col items-start justify-center text-[4vw]"
          animationConfig={animationConfig1}
        />
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-4">
          <div className="about_heading">
            <FadeIn duration={2} delay={0.7}>
              <CommonHeading HeadingText={headingText} />
            </FadeIn>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 mt-4 md:mt-0">
          <div className="about_desc">
            <SlideIn duration={0.8} delay={0.2}>
              <p className="text-justify">{descriptionText}</p>
            </SlideIn>
            <div className="relative w-full">
              <div className="hero_vdo_div w-[96] !bg-cover mt-7 md:mt-4 !bg-center bg-no-repeat overflow-hidden">
                <ZoomOut initialScale={1.5} duration={2}>
                  <img
                    src={imageSrc}
                    alt="About Image"
                    className="object-cover"
                  />
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
