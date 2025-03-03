import { Helmet } from "react-helmet";
import * as CONFIG from "../../../config";
import { lazy } from "react";
import { useImageReveal } from "../components/useImageReveal";
import SlideIn from "../components/Animations/SlideIn";
import { Slide } from "react-toastify";
import CommonPera from "../components/commonPera";


const HeroSectionAboutUs = lazy(() =>
  import("../components/aboutUs/HeroSectionAboutUs")
);

const ProperyInvestment = () => {
  useImageReveal(".reveal");
  return (
    <>
      <Helmet>
        <title>Great Value Realty Property Investment | Secure Real Estate Opportunities</title>
        <meta name="keywords" content="Great Value Realty property investment, real estate investment, best property investments, high ROI real estate, real estate opportunities" />
        <meta name="description" content="Invest wisely with Great Value Realty. Explore high-value property investment opportunities with expert guidance to maximize returns and secure your future." />
        <meta name="google-site-verification" content="Ma-arPYmEe7u20NJ-jsuiHjD1p2HSShiEPD4m8s3bL8" />
        <link rel="canonical" href="https://greatvaluerealty.com/property-investment" />
        <meta name="distribution" content="Global" />
        <meta name="Language" content="English" />
        <meta name="doc-type" content="Public" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Great Value Realty Property Investment | Secure Real Estate Opportunities" />
        <meta name="googlebot" content="all, index, follow" />
        <meta name="YahooSeeker" content="all, index, follow" />
        <meta name="msnbot" content="all, index, follow" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="revisit-after" content="1 day" />
        <meta name="rating" content="general" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Great Value Realty Property Investment | Secure Real Estate Opportunities" />
        <meta property="og:description" content="Invest wisely with Great Value Realty. Explore high-value property investment opportunities with expert guidance to maximize returns and secure your future." />
        <meta property="og:url" content="https://greatvaluerealty.com/property-investment" />
        <meta property="og:site_name" content="Great Value Realty" />
        <meta property="og:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@GreatValueGroup" />
        <meta name="twitter:title" content="Great Value Realty Property Investment | Secure Real Estate Opportunities" />
        <meta name="twitter:description" content="Invest wisely with Great Value Realty. Explore high-value property investment opportunities with expert guidance to maximize returns and secure your future." />
        <meta name="twitter:creator" content="@GreatValueGroup" />
        <meta name="twitter:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />

      </Helmet>
      <section className="bg-[#EFF5FA]">
        <HeroSectionAboutUs
          img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/propertyInvestment/property-investment.webp`}
        />
        <div className="flex xl:mt-[4rem] mt-[2rem] flex-wrap justify-between items-center max-w-[90%] xl:max-w-[85%] mx-auto my-0">
          {" "}
          <div className=" xl:basis-[45%] basis-[100%]">
            <h2 className="sectionHeading xl:mb-[37px] mb-[24px] tracking-[5px] text-black midlandfontmedium text-[14px]">
              Real Estate Investment In India
            </h2>
            <CommonPera PeraText={"India's real estate sector has witnessed significant growth in recent years, emerging as a pivotal component of the nation's economy. In 2024, the market thrived with record office leases, robust residential sales, and substantial foreign investments. The industry's expansion is further underscored by projections indicating a market volume of approximately USD 51.54 trillion by 2029, reflecting a compound annual growth rate (CAGR) of 2.46% from 2025 to 2029."} />
            {/* <p className="text-[#666] text-justify">
              India's real estate sector has witnessed significant growth in
              recent years, emerging as a pivotal component of the nation's
              economy. In 2024, the market thrived with record office leases,
              robust residential sales, and substantial foreign investments. The
              industry's expansion is further underscored by projections
              indicating a market volume of approximately USD 51.54 trillion by
              2029, reflecting a compound annual growth rate (CAGR) of 2.46%
              from 2025 to 2029..
            </p> */}
          </div>
          <img
            className="basis-[45%] reveal w-[400px] my-[37px] xl:mt-0"
            src={
              "https://res.cloudinary.com/dx3l6id8r/image/upload/v1739362022/graph_mt2mm8.webp"
            }
            // src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/propertyInvestment/graph.webp`}
            alt="graph"
          />
        </div>
        <div className=" xl:mt-[4rem] mt-[0.5rem] mb-[30px] max-w-[90%] xl:max-w-[85%] mx-auto my-0 ">
          <SlideIn duration={2} delay={0.5}>
            <h2 className="sectionHeading mb-[37px] tracking-[5px] text-black midlandfontmedium text-[14px] text-center">
              Real Estate Investment In India
            </h2>
          </SlideIn>
          <div className="relative">
            <SlideIn duration={2} delay={0.5}>
              <p className="absolute top-[30px] xl:left-[7.5%] left-[8%] bg-[#EFF5FA] xl:px-[60px] px-[30px] py-[20px] w-[85%] text-center ">
                <CommonPera PeraText={"The Delhi National Capital Region (NCR) has been a focal point for real estate investments, with Noida standing out as a prime destination due to its strategic location, infrastructure development, and economic opportunities."} />
              </p>
            </SlideIn>
            <img
              // src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/propertyInvestment/real_estate.webp`}
              src={
                "https://res.cloudinary.com/dx3l6id8r/image/upload/v1739362041/real_estate_fv3qfz.webp"
              }
              alt="real_estate"
              className="xl:h-[450px]  h-[650px] object-cover w-[100%]"
            />
          </div>
        </div>
        <div className="flex xl:mt-[4rem] mb-[37px] mt-[2rem] justify-between items-center max-w-[90%] flex-wrap xl:max-w-[85%] mx-auto my-0">
          <div className="xl:basis-[45%] basis-[100%]">
            <SlideIn duration={2} delay={0.5}>
              <h2 className="sectionHeading xl:mb-[37px] mb-[24px] tracking-[5px] text-black midlandfontmedium text-[14px]">
                Real Estate Investment In India
              </h2>
              <CommonPera PeraText={"Noida has experienced a substantial increase in housing prices. Data from Anarock indicates that average housing prices along the Noida Expressway rose by 66% over the past five years, reaching Rs 8,400 per square foot as of September 2024. This surge is attributed to enhanced connectivity and the establishment of commercial hubs in the vicinity."} />
            </SlideIn>
          </div>
          <img
            className="basis-[45%] reveal w-[400px] mt-[37px] xl:mt-0"
            src={
              "https://res.cloudinary.com/dx3l6id8r/image/upload/v1739362031/objects_wufdlm.webp"
            }
            // src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/propertyInvestment/objects.webp`}
            alt="graph"
          />
        </div>
        <div className="flex xl:mt-[4rem] mb-[37px] xl:flex-row flex-col-reverse  mt-[2rem] justify-between items-center max-w-[90%] xl:max-w-[85%] mx-auto my-0 flex-wrap">
          <img
            className="basis-[45%] reveal w-[400px] xl:mt-0 mt-[37px]"
            src={
              "https://res.cloudinary.com/dx3l6id8r/image/upload/v1739362025/group_rtvfsn.webp"
            }
            // src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/propertyInvestment/group.webp`}
            alt="group"
          />
          <div className="xl:basis-[45%] basis-[100%]">
            <SlideIn duration={2} delay={0.5}>
              {" "}
              <h2 className="sectionHeading mb-[37px] tracking-[5px] text-black midlandfontmedium text-[14px]">
                Luxury Segment Expansion
              </h2>
              <CommonPera PeraText={"The luxury housing segment in Noida has seen remarkable growth. For instance, Sector 150 witnessed a 12% year-on-year increase in monthly rentals for luxury properties in the first half of 2024. This trend reflects the rising demand for premium residences equipped with modern amenities."} />
            </SlideIn>
          </div>
        </div>
        <div className="flex xl:mt-[4rem] mt-[2rem] justify-between items-center max-w-[90%] xl:max-w-[85%] mx-auto my-0 flex-wrap">
          <div className="xl:basis-[45%] basis-[100%]">
            <SlideIn duration={2} delay={0.5}>
              <h2 className="sectionHeading mb-[37px] tracking-[5px] text-black midlandfontmedium text-[14px]">
                Infrastructure Development
              </h2>
              <CommonPera PeraText={" Ongoing infrastructure projects, such as the development of the Noida International Airport and the expansion of metro connectivity, have significantly bolstered Noida's real estate appeal. These developments are anticipated to further drive property values and attract both investors and end-users."} />
            </SlideIn>
          </div>
          <img
            className="basis-[45%] reveal w-[400px] xl:mt-[0px] mt-[27px]"
            src={
              "https://res.cloudinary.com/dx3l6id8r/image/upload/v1739362029/infrastructure_wrmyhv.webp"
            }
            // src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/propertyInvestment/infrastructure.webp`}
            alt="infrastructure"
          />
        </div>
        <div className=" xl:mt-[4rem] mt-[2rem] pb-[5rem] max-w-[90%] xl:max-w-[85%] mx-auto my-0">
          <SlideIn duration={2} delay={0.5}>
            {" "}
            <h3 className="sectionHeading mb-[37px] mt-[40px] tracking-[5px] text-black midlandfontmedium text-[14px]">
              Conclusion
            </h3>
            <CommonPera PeraText={" The upward trajectory of India's real estate sector, particularly in regions like Noida within the Delhi NCR, presents lucrative opportunities for investors. Factors such as escalating property prices, burgeoning demand in the luxury segment, and continuous infrastructure advancements contribute to Noida's prominence as a preferred investment hub. As the market evolves, stakeholders are advised to stay informed and consider strategic investments to capitalize on the region's growth potential."} />
          </SlideIn>
        </div>
      </section>
    </>
  );
};

export default ProperyInvestment;
