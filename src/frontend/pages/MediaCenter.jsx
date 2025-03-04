import React from "react";
import * as CONFIG from "../../../config";
import HeroSectionAboutUs from "../components/aboutUs/HeroSectionAboutUs";
import OverviewSection from "../components/overviewSection/overviewSection";
import News from "../components/MediaCenter/News";
import FadeIn from "../components/Animations/FadeIn";
import CommonHeading from "../components/commonHeading";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Helmet } from "react-helmet";
import useFetchData from "../apiHooks/useFetchData";
import Loader from "../../common/Loader/loader";
import MediaCentreLogo from "../components/MediaCenter/Logo";
import MediaCentrePdf from "../components/MediaCenter/Pdf";
gsap.registerPlugin(ScrollTrigger);
function MediaCenter() {
  const {
    data: pageData,
    loading: pageLoading,
    error: pageError,
  } = useFetchData("page-sections", "20");

  // Handle Loading and Errors
  if (pageLoading) return <Loader />;
  if (pageError)
    return <p className="text-red-500">Error loading Banner: {pageError}</p>;

  // 🔹 Extract Banner Data Safely
  const extractBannerData = (pageData) => {
    // debugger
    if (!pageData)
      return { mediaBanner: null, mediaOverview: null, mediaCentre: null };

    // const pageData = Object.values(pageData)?.[0] || {};

    return {
      mediaBanner: pageData["media-banner"],
      mediaOverview: pageData["media-overview"],
      mediaCentre: pageData["media-center"],
    };
  };

  const { mediaBanner, mediaOverview, mediaCentre } = extractBannerData(pageData);

  return (
    <>
      <Helmet>
        <title>Great Value Realty | media-center</title>
      </Helmet>

      <HeroSectionAboutUs
        img={mediaBanner?.image }
        heading={mediaBanner?.heading}
        extraClassesImg={"objectRight"}
      />

      <OverviewSection
        heading={mediaOverview?.heading}
        paragraph={mediaOverview?.description}
        showKnowMore={false}
      />

      <section className="download relative px-5 md:px-12 py-5 md:py-14">
        <div className="grid grid-cols-12 gap-3 ">
          {/* Left Section */}
          <div className="headline col-span-12 md:col-span-6">
            <div className="topLine uppercase tracking-[3px] py-3 lg:mt-8 font-[300]">
              {mediaCentre?.sub_heading}
            </div>
            <FadeIn duration={2} delay={0.5}>
              <CommonHeading HeadingText={mediaCentre?.heading} />
            </FadeIn>
          </div>
          <div className="greatValue flex items-center col-span-12 md:col-span-6">
            <div className="box  bg-[#EFF5FA] w-full  p-[1.5rem] flex flex-col  ">
              <h3 className="uppercase text-[17px] tracking-[1px] ">
                Download Great Value Logo
              </h3>
              <div className="logo items-center pt-5 mt-10 flex justify-between">
                <img
                  src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/logo-colored.webp`}
                  alt="Great Value Realty Logo"
                  className="w-[30%]"
                />
              </div>
            </div>
          </div>

          {/* <MediaCentreLogo /> */}

          {/* <MediaCentrePdf /> */}
        </div>
      </section>

      <News />
    </>
  );
}

export default MediaCenter;
