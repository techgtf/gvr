import React, { lazy } from "react";
import CommonHeading from "../components/commonHeading";
import CommonPera from "../components/commonPera";
import SlideIn from "../components/Animations/SlideIn";
import { Helmet } from "react-helmet";
const HeroSectionAboutUs = lazy(() =>
  import("../components/aboutUs/HeroSectionAboutUs")
);
const OurVisionSection = lazy(() => import("../components/aboutUs/OurVision"));
const OurTeamSection = lazy(() => import("../components/aboutUs/OurTeam"));
const OurVerticalsSection = lazy(() =>
  import("../components/aboutUs/OurVerticals")
);
const OurJourneySection = lazy(() =>
  import("../components/aboutUs/OurJourney")
);

const Aboutus = () => {
  return (
    <>
      <Helmet>
        <title>Great Value Realty | About-Us</title>
      </Helmet>
      <HeroSectionAboutUs
        img={
          "https://res.cloudinary.com/dx3l6id8r/image/upload/v1739437177/about_us_b4tbjm.webp"
        }
        // img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/aboutus/about_us.webp`}
        heading={"ABOUT US"}
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
              "Great Value Industries: Shaping Excellence Across Industries – From Quality Packaging to Premium Living,"
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
            className="content !px-0 !py-[35px] lg:max-w-[85%] w-[100%] m-auto lg:mt-[50px] lg:mb-[50px] mb-[20px] text-center"
          >
            <CommonPera
              PeraClass="text-justify xl:text-center !p-[0px]"
              //   PeraText="The genesis of Great Value Industries dates to 1970 when the group set up its glassware division. In 1990 GVIL diversified into together supplying quality packaging products to prestigious."
              PeraText={
                "Established in 1970, Great Value Realty (GVR) began as a leader in the glassware industry, quickly gaining prominence in packaging by 1990. Built on a foundation of trust and exceptional value, GVR has consistently evolved to meet changing market demands while fostering enduring client relationships. In 2001, GVR expanded its portfolio into the food processing sector and advanced technology solutions, pioneering initiatives such as E-Gram Samiti, E-Check Posts, E-Land Records, and E-Water Systems. These advancements underscore GVR’s commitment to innovation and impactful solutions that drive progress. By 2009, GVR made a strategic foray into real estate, delivering landmark projects such as the Great Value Mall in Aligarh. The company’s residential ventures, including Sharanam, Anandam, Vilasa, Casa Uday, and Centuray 105, exemplify its dedication to quality, trust, and creating meaningful living experiences. With a vision for excellence and a commitment to shaping the future, GVR continues to forge strategic partnerships and develop pioneering solutions across industries, solidifying its reputation as a trusted leader in innovation and real estate."
              }
            />
          </div>
        </SlideIn>
      </div>

      <OurVisionSection />
      <OurTeamSection />
      <OurJourneySection />
      <OurVerticalsSection />
    </>
  );
};

export default Aboutus;
