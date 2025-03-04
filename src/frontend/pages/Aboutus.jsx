import React, { lazy, useEffect, useState } from "react";
import { DATA_ASSET_URL } from "../../../config";
import CommonHeading from "../components/commonHeading";
import CommonPera from "../components/commonPera";
import SlideIn from "../components/Animations/SlideIn";
import * as CONFIG from "../../../config";
import { Helmet } from "react-helmet";
import axios from "axios";
import Loader from "../../common/Loader/loader";

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
  const [data, setData] = useState(null);
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

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  // Extract section data
  const banner = data?.["about-banner"] || {};
  const overview = data?.["about-overview"] || {};
  const mission = data?.["about-mission"] || {};
  const vision = data?.["about-vision"] || {};
  const team = data?.["about-team"] || {};
  const journey = data?.["about-our-journey"] || {};
  const verticals = data?.["about-our-verticals"] || {};

  const overviewDescription = overview.description.replace(
    /<\/?[^>]+(>|$)/g,
    ""
  );

  return (
    <>
      <Helmet>
        <title>Great Value Realty | About-Us</title>
      </Helmet>
      {banner && (
        <HeroSectionAboutUs
          img={`${banner.image}`}
          heading={"ABOUT US"}
          extraClassesImg={"objectRight"}
        />
      )}
      {overview && (
        <div className="overview_section 2xl:pt-[80px] px-[30px] xl:pt-[40px] pt-[30px] lg:pb-0 pb-[0] lg:mb-0 mb-[50px]">
          <div className="headingWrap lg:max-w-[79%] max-w-[100%] m-auto text-center">
            <CommonHeading
              HeadingText={overview.heading}
              HeadingClass="xl:text-center text-left xl:pb-[0px] pb-[35px]"
            />
          </div>

          <div
            style={{
              borderTop: "1px solid #b1b1b1",
              borderBottom: "1px solid #b1b1b1",
            }}
            className="content !px-0 !py-[35px] lg:max-w-[85%] w-[100%] m-auto lg:mt-[50px] lg:mb-[50px] mb-[20px] text-center"
          >
            <CommonPera
              PeraClass="text-justify xl:text-center !p-[0px]"
              PeraText={overviewDescription}
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
                PeraText={overviewDescription}
              />
            </div>
          </SlideIn>
        </div>
      )}

      {vision && <OurVisionSection visionData={vision} missionData={mission} />}
      {team && <OurTeamSection data={team} />}
      {journey && <OurJourneySection data={journey} />}
      {verticals && <OurVerticalsSection data={verticals} />}
    </>
  );
};

export default Aboutus;
