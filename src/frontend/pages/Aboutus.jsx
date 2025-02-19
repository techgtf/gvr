import React, { lazy, useEffect, useState } from "react";
import { DATA_ASSET_URL } from "../../../config";
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
import axios from "axios";

const Aboutus = () => {
  const [data, setData,] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(`${DATA_ASSET_URL}page-sections/2`) 
      .then((response) => {
        setData(response.data.data); // Set the blog data
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log(data,"data")


    // Extract section data
    const banner = data.find((item) => item.page_section === "about-banner");
    const overview = data.find((item) => item.page_section === "about-overview");
    const mission = data.find((item) => item.page_section === "about-mission");
    const vision = data.find((item) => item.page_section === "about-vision");
    const team = data.find((item) => item.page_section === "about-team");
    const journey = data.find((item) => item.page_section === "about-our-journey");
    const verticals = data.find((item) => item.page_section === "about-our-verticals");

  
  return (
    <>
      <Helmet>
        <title>Great Value Realty | About-Us</title>
      </Helmet>

    {banner && 
      <HeroSectionAboutUs
        img={
          "https://res.cloudinary.com/dx3l6id8r/image/upload/v1739437177/about_us_b4tbjm.webp"
        }
        // img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/aboutus/about_us.webp`}
        heading={"ABOUT US"}
        extraClassesImg={"objectRight"}
      />}
      {overview && 
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
                "The genesis of Great Value Industries dates to 1970 when the group set up its glassware division. In 1990 GVIL diversified into together supplying quality packaging products to prestigious clients including, Home Foil, Hello Mineral Water & UB Group among many others. Plastics and packaging with a unit at Bangalore and further expanded with units at Firozabad and Noida.The group envisions in creating highly lucrative residential properties for sale in Noida. Have your own luxury homes with world class fully furnished facilities in 2,3and4 BHK apartments. The year 2001 witnessed the group’s remarkable expansion in the Food Division. Group processed food domain with a 60,000 metric ton unit at Noida that was further strengthened by another 1, 80,000-metric ton unit 2 years later. Today GVIL is a major global force with one of the world’s largest capacities in producing ready to eat foods. Another significant stride taken in 2001 was GVIL’s foray into IT services."
              }
            />
          </div>
        </SlideIn>
      </div>}

      {vision && <OurVisionSection visionData={vision} missionData={mission}/>}
      {team && <OurTeamSection data={team}/>}
      {journey && <OurJourneySection data={journey}/>}
      {verticals && <OurVerticalsSection />}
    </>
  );
};

export default Aboutus;
