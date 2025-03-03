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
  const {
    data: testimonialdata,
    loading: bannerLoading,
    error: bannerError,
  } = useFetchData("page-sections", "16");

  // 🔹 Extract Banner Data Safely
  const extractBannerData = (pageData) => {
    // debugger
    if (!pageData)
      return { testimonialBanner: null, testimonialOverview: null };

    // const pageData = Object.values(pageData)?.[0] || {};

    return {
      testimonialBanner: pageData["testimonials-banner"],
      testimonialOverview: pageData["testimonials-overview"],
    };
  };

  const { testimonialBanner, testimonialOverview } =
    extractBannerData(testimonialdata);

  return (
    <>
      <Helmet>
        <title>
          Great Value Realty Testimonials | Hear from Our Happy Clients
        </title>
        <meta
          name="keywords"
          content="Great Value Realty testimonials, client reviews, real estate feedback, customer experiences, homebuyer testimonials, investor reviews"
        />
        <meta
          name="description"
          content="See what our satisfied clients say about Great Value Realty! Read testimonials from homeowners and investors who trust us for their real estate needs."
        />
        <meta
          name="google-site-verification"
          content="Ma-arPYmEe7u20NJ-jsuiHjD1p2HSShiEPD4m8s3bL8"
        />
        <link
          rel="canonical"
          href="https://greatvaluerealty.com/testimonials"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Great Value Realty" />
        <meta name="googlebot" content="index, follow" />
        <meta name="YahooSeeker" content="index, follow" />
        <meta name="msnbot" content="index, follow" />
        <meta name="revisit-after" content="1 day" />
        <meta name="rating" content="safe for kids" />

        {/* Open Graph (OG) Meta Tags for Social Sharing */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Great Value Realty Testimonials | Hear from Our Happy Clients"
        />
        <meta
          property="og:description"
          content="See what our satisfied clients say about Great Value Realty! Read testimonials from homeowners and investors who trust us for their real estate needs."
        />
        <meta
          property="og:url"
          content="https://greatvaluerealty.com/testimonials"
        />
        <meta
          property="og:site_name"
          content="Great Value Realty Testimonials"
        />
        <meta
          property="og:image"
          content="https://greatvaluerealty.com/assets/frontend/images/logo.png"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@GreatValueGroup" />
        <meta
          name="twitter:title"
          content="Great Value Realty Testimonials | Hear from Our Happy Clients"
        />
        <meta
          name="twitter:description"
          content="See what our satisfied clients say about Great Value Realty! Read testimonials from homeowners and investors who trust us for their real estate needs."
        />
        <meta name="twitter:creator" content="@GreatValueGroup" />
        <meta
          name="twitter:image"
          content="https://greatvaluerealty.com/assets/frontend/images/logo.png"
        />
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
            HeadingText={testimonialOverview?.heading}
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
              PeraText={testimonialOverview?.description}
            />
          </div>
        </SlideIn>
      </div>

      <TestimonialGrid />
    </>
  );
};

export default Testimonials;
