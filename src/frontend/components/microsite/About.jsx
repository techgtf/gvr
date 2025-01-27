import React from "react";
import WaterMarkHeading from "../verticalWaterMarkHeading";
import aboutImg from "/assets/frontend/images/microsite/about.jpg";
import CommonHeading from "../commonHeading";

function About() {
  const animationConfig = {
    from: { x: -100, opacity: 0 },
    to: { x: 0, opacity: 1, duration: 1 },
  };

  const reverseText = (text) => {
    return text.split("").reverse().join("");
  };

  return (
    <section className="about bg-[#EFF5FA] relative px-10 py-20">
      {/* Vertical Watermark Heading */}
      <div className="absolute h-full flex items-center left-20 bottom-0">
        <WaterMarkHeading
          textWaterMark={reverseText("ABOUT US")}
          animationConfig={animationConfig}
          className="flex flex-col items-start justify-center text-[4vw]"
        />
      </div>

      {/* About Content */}
      <div className="grid grid-cols-12 gap-20">
        <div className="col-span-4">
          <div className="about_heading">
            <CommonHeading HeadingText="about us" />
          </div>
        </div>
        <div className="col-span-8">
          <div className="about_desc ">
            <p className="text-justify">
              Great Value presents a new stature of luxury residential
              apartments at SHARANAM. Located in sector 107, Noida, these
              stunning apartments comprise of 16 exclusive towers with 2, 3, and
              4 BHK Flats. At SHARANAM you will not only enjoy the benefits of a
              beautiful location but, you can also take pleasure with ready-to-
              move flats facilities in Noida. As the name “SHARANAM” itself says
              that the project provides a beautiful place which purifies your
              soul. The apartments are designed to exhilarate your inner soul.
              It is just like the recreational destination for your family.
            </p>
            <img src={aboutImg} alt="About Us" className="py-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;