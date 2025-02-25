import React, { lazy, useEffect, useState } from "react";
import { DATA_ASSET_URL } from "../../../config";
import CommonHeading from "../components/commonHeading";
import CommonPera from "../components/commonPera";
import SlideIn from "../components/Animations/SlideIn";
import * as CONFIG from "../../../config";
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
import Loader from "../../common/Loader/loader";

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

  if (loading) return <Loader/>;
  if (error) return <p>Error: {error}</p>;



    // Extract section data
    const banner = data?.["about-banner"] || {};
    const overview = data?.["about-overview"] || {};
    const mission = data?.["about-mission"] || {};
    const vision = data?.["about-vision"] || {};
    const team = data?.["about-team"] || {};
    const journey = data?.["about-our-journey"] || {};
    const verticals = data?.["about-our-verticals"] || {};

const overviewDescription = overview.description.replace(/<\/?[^>]+(>|$)/g, "");
  
  return (
    <>

    <Helmet>
        <title>Great Value Realty | About-Us</title>
      </Helmet>
    {banner && 
      <HeroSectionAboutUs
        img={`${CONFIG.VITE_APP_STORAGE}${banner.image}`}
        // img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/aboutus/about_us.webp`}
        heading={"ABOUT US"}
        extraClassesImg={"objectRight"}
      />}
      {overview && 
      <div
        className="overview_section 2xl:pt-[80px] px-[30px] xl:pt-[40px] pt-[30px] lg:pb-0 pb-[0] lg:mb-0 mb-[50px]"
      >
        <div className="headingWrap lg:max-w-[79%] max-w-[100%] m-auto text-center">
          <CommonHeading
            HeadingText={overview.heading }
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
<<<<<<< HEAD
              PeraClass="text-justify xl:text-center !p-[0px]"
              //   PeraText="The genesis of Great Value Industries dates to 1970 when the group set up its glassware division. In 1990 GVIL diversified into together supplying quality packaging products to prestigious."
              PeraText={
                "The genesis of Great Value Industries dates to 1970 when the group set up its glassware division. In 1990 GVIL diversified into together supplying quality packaging products to prestigious clients including, Home Foil, Hello Mineral Water & UB Group among many others. Plastics and packaging with a unit at Bangalore and further expanded with units at Firozabad and Noida.The group envisions in creating highly lucrative residential properties for sale in Noida. Have your own luxury homes with world class fully furnished facilities in 2,3and4 BHK apartments. The year 2001 witnessed the group’s remarkable expansion in the Food Division. Group processed food domain with a 60,000 metric ton unit at Noida that was further strengthened by another 1, 80,000-metric ton unit 2 years later. Today GVIL is a major global force with one of the world’s largest capacities in producing ready to eat foods. Another significant stride taken in 2001 was GVIL’s foray into IT services."
              }
=======
              PeraClass="fontItalic text-justify xl:text-center !p-[0px]"
              PeraText={overviewDescription }
>>>>>>> 58e727d761921927021e53bca1984c069d39ef75
            />
          </div>
        </SlideIn>
      </div>}
      

      {vision && <OurVisionSection visionData={vision} missionData={mission}/>}
      {team && <OurTeamSection data={team}/>}
      {journey && <OurJourneySection data={journey}/>}
      {verticals && <OurVerticalsSection data={verticals}/>}
    </>
  );
};

export default Aboutus;
