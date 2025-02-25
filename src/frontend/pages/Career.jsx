import { lazy } from "react";
import * as CONFIG from "../../../config";
import CommonHeading from "../components/commonHeading";
import CommonPera from "../components/commonPera";
import SlideIn from "../components/Animations/SlideIn";
import { Helmet } from "react-helmet";

const HeroSectionAboutUs = lazy(() =>
  import("../components/aboutUs/HeroSectionAboutUs")
);

const WorkCultureSection = lazy(() =>
  import("../components/career/WorkCulture")
);
const JobFormSection = lazy(() => import("../components/career/JobForm"));

const Career = () => {
  return (
    <>
      <Helmet>
        <title>Careers at Great Value Realty | Join Our Real Estate Team</title>
        <meta name="keywords" content="Great Value Realty careers, real estate jobs, property industry careers, real estate career opportunities, job openings at Great Value Realty" />
        <meta name="description" content="Explore exciting career opportunities at Great Value Realty. Join our team of real estate experts and build a successful career in the dynamic property industry. Apply today!" />
        <meta name="google-site-verification" content="Ma-arPYmEe7u20NJ-jsuiHjD1p2HSShiEPD4m8s3bL8" />
        <link rel="canonical" href="https://greatvaluerealty.com/career" />
        <meta name="distribution" content="Global" />
        <meta name="Language" content="English" />
        <meta name="doc-type" content="Public" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Careers at Great Value Realty | Join Our Real Estate Team" />
        <meta name="googlebot" content="all, index, follow" />
        <meta name="YahooSeeker" content="all, index, follow" />
        <meta name="msnbot" content="all, index, follow" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="revisit-after" content="1 day" />
        <meta name="rating" content="general" />
        <meta name="expires" content="never" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Careers at Great Value Realty | Join Our Real Estate Team" />
        <meta property="og:description" content="Explore exciting career opportunities at Great Value Realty. Join our team of real estate experts and build a successful career in the dynamic property industry. Apply today!" />
        <meta property="og:url" content="https://greatvaluerealty.com/career" />
        <meta property="og:site_name" content="Great Value Realty" />
        <meta property="og:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GreatValueGroup" />
        <meta name="twitter:title" content="Careers at Great Value Realty | Join Our Real Estate Team" />
        <meta name="twitter:description" content="Explore exciting career opportunities at Great Value Realty. Join our team of real estate experts and build a successful career in the dynamic property industry. Apply today!" />
        <meta name="twitter:creator" content="@GreatValueGroup" />
        <meta name="twitter:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />

      </Helmet>
      <HeroSectionAboutUs
        // img={

        // "https://res.cloudinary.com/dx3l6id8r/image/upload/v1739359233/career_xzpgfz.webp"
        // }
        img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/career/career.webp`}
        heading={"CAREER"}
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
              "Great Value Industries: Excellence in Packaging and Living"
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
              PeraClass="fontItalic text-justify xl:text-center !p-[0px]"
              //   PeraText="The genesis of Great Value Industries dates to 1970 when the group set up its glassware division. In 1990 GVIL diversified into together supplying quality packaging products to prestigious."
              PeraText={
                "Here Ambition Fuels Growth and Success"
                // "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            />
          </div>
        </SlideIn>
      </div>
      <JobFormSection />
      <WorkCultureSection />
    </>
  );
};

export default Career;
