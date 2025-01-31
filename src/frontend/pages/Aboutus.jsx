import React, { lazy } from "react";

const HeroSectionAboutUs = lazy(() =>
  import("../components/aboutUs/HeroSectionAboutUs")
);
const OverviewSection = lazy(() =>
  import("../components/overviewSection/overviewSection")
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
      <HeroSectionAboutUs />
      <OverviewSection
        heading={
          "Great Value Industries: Shaping Excellence Across Industries – From Quality Packaging to Premium Living,"
        }
        paragraph={
          "The genesis of Great Value Industries dates to 1970 when the group set up its glassware division. In 1990 GVIL diversified into together supplying quality packaging products to prestigious clients including, Home Foil, Hello Mineral Water & UB Group among many others. Plastics and packaging with a unit at Bangalore and further expanded with units at Firozabad and Noida.The group envisions in creating highly lucrative residential properties for sale in Noida. Have your own luxury homes with world class fully furnished facilities in 2,3and4 BHK apartments. The year 2001 witnessed the group’s remarkable expansion in the Food Division. Group processed food domain with a 60,000 metric ton unit at Noida that was further strengthened by another 1, 80,000-metric ton unit 2 years later. Today GVIL is a major global force with one of the world’s largest capacities in producing ready to eat foods. Another significant stride taken in 2001 was GVIL’s foray into IT services."
        }
        showKnowMore={false}
      />
      <OurVisionSection />
      <OurTeamSection />
      <OurJourneySection />
      <OurVerticalsSection />
    </>
  );
};

export default Aboutus;
