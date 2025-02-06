import React from "react";
import HeroSection from "../components/microsite/HeroSection";
import About from "../components/microsite/About";
import Amentities from "../components/microsite/Amentities";
import PriceList from "../components/microsite/PriceList";
import HighlightsSpecifications from "../components/microsite/HighlightsSpecifications/HighlightsSpecifications";
import Plans from "../components/microsite/Plans";
import LocationAdvantage from "../components/microsite/LocationAdvantage";
import ProjectGallery from "../components/microsite/ProjectGallery/ProjectGallery";
import master_plan_img from "/assets/frontend/images/microsite/plans/masterplan.png";
import plan1 from "/assets/frontend/images/microsite/plans/floor_plans/2B-R-plan-img.png";
import plan2 from "/assets/frontend/images/microsite/plans/floor_plans/2B-RS.png";
import loaction from "/assets/frontend/images/microsite/location/location.png";
import drive from "/assets/frontend/images/microsite/location/drive.png";
import driveActive from "/assets/frontend/images/microsite/location/driveActive.png";
import walk from "/assets/frontend/images/microsite/location/walk.png";
import walkActive from "/assets/frontend/images/microsite/location/walkActive.png";

function Microsite() {
  const masterPlanData = [
    { image: master_plan_img, alt: "Master Plan" },
  ];
  
  const unitData = {
    unit1: [
      {
        image: plan1,
        type: "TypeA: 2B/R",
        carpetArea: "752 Sq.Ft.",
        balconyArea: "69 Sq.Ft.",
        totalArea: "1139 Sq.Ft.",
      },
      {
        image: plan2,
        type: "TypeB: 2B/R+S",
        carpetArea: "873 Sq.Ft.",
        balconyArea: "81 Sq.Ft.",
        totalArea: "1295 Sq.Ft.",
      },
    ],
    unit2: [
      {
        image: plan2,
        type: "TypeB: 2B/R+S",
        carpetArea: "873 Sq.Ft.",
        balconyArea: "81 Sq.Ft.",
        totalArea: "1295 Sq.Ft.",
      },
      {
        image: plan1,
        type: "TypeA: 2B/R",
        carpetArea: "752 Sq.Ft.",
        balconyArea: "69 Sq.Ft.",
        totalArea: "1139 Sq.Ft.",
      },
    ],
  };

  return (
    <>
      <HeroSection />
      <About />
      <Amentities />
      <PriceList />
      <HighlightsSpecifications />
      <Plans masterPlanData={masterPlanData} unitData={unitData} />;
      <LocationAdvantage
                locationImage={loaction}
                driveData={[
                    { image: '/path/to/drive-icon.png', text: 'Place 1', time: '10 min' },
                    { image: '/path/to/drive-icon.png', text: 'Place 2', time: '15 min' },
                ]}
                walkData={[
                    { image: '/path/to/walk-icon.png', text: 'Place A', time: '5 min' },
                    { image: '/path/to/walk-icon.png', text: 'Place B', time: '10 min' },
                ]}
                driveTabIcon={drive}
                driveTabActiveIcon={driveActive}
                walkTabIcon={walk}
                walkTabActiveIcon={walkActive}
                lightboxImages={[{ image: '/path/to/lightbox-image.png', alt: 'Location Map' }]}
            />
      <ProjectGallery />
    </>
  );
}

export default Microsite;
