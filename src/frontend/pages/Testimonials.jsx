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
import useFetchData from "../apiHooks/useFetchData";
const Testimonials = () => {

  const { data: testimonialdata, loading: bannerLoading, error: bannerError } = useFetchData("page-sections", "16");

    // 🔹 Extract Banner Data Safely
    const extractBannerData = (pageData) => {
      // debugger
      if (!pageData) return { testimonialBanner: null, testimonialOverview: null };

      // const pageData = Object.values(pageData)?.[0] || {};

      return {
        testimonialBanner: pageData['testimonials-banner'],
        testimonialOverview: pageData['testimonials-overview'],
      };
    };

    const {testimonialBanner, testimonialOverview} = extractBannerData(testimonialdata);


  return (
    <>
      <Helmet>
        <title>Great Value Realty | Testimonials</title>
      </Helmet>
      <HeroSectionAboutUs
        img={`${CONFIG.VITE_APP_STORAGE}${testimonialBanner?.image}`}
        alt={testimonialBanner?.image_alt}
        heading={testimonialBanner?.heading}
        extraClassesImg={"objectRight"}
      />
      <div
        className="overview_section 2xl:pt-[80px] lg:px-[30px] px-[15px] xl:pt-[40px] pt-[30px] lg:pb-0 pb-[0] lg:mb-0 mb-[50px]"
      // data-speed="clamp(.9)"
      // ref={sectionRef}
      >
        <div className="headingWrap lg:max-w-[79%] max-w-[100%] m-auto text-center">
          <CommonHeading
            HeadingText={
              testimonialOverview?.heading
            }
            HeadingClass="xl:text-center text-center xl:pb-[0px] pb-[35px]"
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
              PeraClass="fontItalic text-center xl:text-center !p-[0px]"
              //   PeraText="The genesis of Great Value Industries dates to 1970 when the group set up its glassware division. In 1990 GVIL diversified into together supplying quality packaging products to prestigious."
              PeraText={
                testimonialOverview?.description
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
