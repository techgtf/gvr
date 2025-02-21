import React, { lazy } from "react";
import CommonHeading from "../components/commonHeading";
import CommonPera from "../components/commonPera";
import SlideIn from "../components/Animations/SlideIn";
const HeroSectionAboutUs = lazy(() =>
  import("../components/aboutUs/HeroSectionAboutUs")
);
import TestimonialGrid from "../components/testimonials/Index";

import * as CONFIG from "../../../config";
import { Helmet } from "react-helmet";
const Testimonials = () => {
  return (
    <>
      <Helmet>
        <title>Great Value Realty | Testimonials</title>
      </Helmet>
      <HeroSectionAboutUs
        img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/testimonials/banner.webp`}
        heading={"Testimonials"}
        extraClassesImg={"objectRight"}
      />
      <div
        className="overview_section 2xl:pt-[80px] px-[30px] xl:pt-[40px] pt-[30px] lg:pb-0 pb-[0] lg:mb-0 mb-[50px]"
      // data-speed="clamp(.9)"
      // ref={sectionRef}
      >
        <div className="headingWrap lg:max-w-[79%] max-w-[100%] m-auto text-center">
          <CommonHeading
            HeadingText={
              `Voices of Trust, Stories of Excellence, Legacies Built Together" Introduction`
            }
            HeadingClass="xl:text-center text-left xl:pb-[0px] pb-[35px]"
          />
        </div>
        <SlideIn duration={2} delay={0.5}>
          <div
            style={{
              borderTop: "1px solid #b1b1b1",
              borderBottom: "1px solid #b1b1b1",
            }}
            className="content !px-0 !py-[35px] lg:max-w-[85%] w-[100%] m-auto lg:mt-[50px]  text-center"
          >
            <CommonPera
              PeraClass="fontItalic text-justify xl:text-center !p-[0px]"
              //   PeraText="The genesis of Great Value Industries dates to 1970 when the group set up its glassware division. In 1990 GVIL diversified into together supplying quality packaging products to prestigious."
              PeraText={
                `At Great Value Realty, every home, office, and commercial space is more than just a structure—it is a milestone in someone’s journey. Our Testimonials Section brings to life the experiences of those who have found success, comfort, and growth with us. From homeowners to businesses, every story is a testament to our commitment to quality, integrity, and lasting relationships. Hear firsthand how we turn visions into reality and spaces into legacies.`
              }
            />
          </div>
        </SlideIn>
      </div>

      <TestimonialGrid />
    </>
  );
};

export default Testimonials;
