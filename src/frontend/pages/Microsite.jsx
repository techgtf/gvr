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

import gallery1 from "/assets/frontend/images/microsite/gallery/gallery1.png";
import gallery2 from "/assets/frontend/images/microsite/gallery/gallery2.png";
import gallery3 from "/assets/frontend/images/microsite/gallery/gallery3.png";
import gallery4 from "/assets/frontend/images/microsite/gallery/gallery4.png";
import renderGallery1 from "/assets/frontend/images/microsite/gallery/render/gallery1.jpg";
import renderGallery2 from "/assets/frontend/images/microsite/gallery/render/gallery2.jpg";
import renderGallery3 from "/assets/frontend/images/microsite/gallery/render/gallery3.jpg"
import Specifications from "../components/microsite/HighlightsSpecifications/Specifications";
import Highlights from "../components/microsite/HighlightsSpecifications/Highlights";

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


  const highlightsData = [
    "3 sides open corner plot",
    "Fully developed lush green landscape with sculptural mound",
    "Exclusive Musical Fountain",
    "All green facing apartments",
    "Well crafted layouts to ensure sufficient natural light",
    "Cross ventilation throughout the day",
    "RFID security for vehicle entry",
    "Grand entrance lobby in each tower",
  ];
  
  const specificationsData = [
    {
        title: "Master Bedroom(s)",
        items: [
            { image: "assets/frontend/images/microsite/specifications/mansory.png", description: "Walls: Gypsum Plaster/ Level Plast on RCC With Emulsion Paint" },
            { image: "assets/frontend/images/microsite/specifications/parquet.png", description: "Walls: Gypsum Plaster/ Level Plast on RCC With Emulsion Paint" },
        ],
    },
    {
        title: "Modular Kitchen",
        items: [
            { image: "assets/frontend/images/microsite/specifications/mansory2.png", description: "Walls: Gypsum Plaster/Level Plast on RCC With Emulsion Paint" },
            { image: "assets/frontend/images/microsite/specifications/mansory3.png", description: "Fixtures: High-Quality Branded CP Fittings" },
        ],
    },
    {
        title: "Living/Dining Room",
        items: [
            { image: "assets/frontend/images/microsite/specifications/mansory1.png", description: "Gypsum Plaster/ Level Plaster on RCC With Emulsion Paint" },
            { image: "assets/frontend/images/microsite/specifications/parquet2.png", description: "Floors: High Quality Vitrified Tile" },
            { image: "assets/frontend/images/microsite/specifications/door.png", description: "Floors: High Quality Vitrified Tile" },
            { image: "assets/frontend/images/microsite/specifications/roller.png", description: "Floors: High Quality Vitrified Tile" },
        ],
    },
];

const customPriceListData = [
  {
      area: "1 BHK",
      more: "Living room/Kitchen/1 Toilet/Balcony",
      size: "850 sq.ft",
      price: "₹ 45 Lacs*",
  },
  {
      area: "2 BHK ",
      more: "Living room/2 BR/Kitchen/2 Toilets/Balcony",
      size: "1250 sq.ft",
      price: "₹ 80 Lacs*",
  },
];

  

  return (
    <>
      <HeroSection />
      <About />
      <Amentities />
      <PriceList priceListData={customPriceListData} headingText="Our Price List" />
      <HighlightsSpecifications 
        highlightsComponent={() => <Highlights title="Highlights" highlights={highlightsData} />} 
        specificationsComponent={() => <Specifications title="Specifications" specifications={specificationsData} />} 
      />

      <Plans masterPlanData={masterPlanData} unitData={unitData} />;
      <LocationAdvantage
                locationImage={loaction}
                driveData={[
                    { image: 'assets/frontend/images/microsite/location/driveIcons/education.png', text: 'Amity university , botanic garden of india republic', time: '10 min' },
                    { image: 'assets/frontend/images/microsite/location/driveIcons/junction.png', text: 'Greater noida expressway, worlds of wonder', time: '15 min' },
                    { image: 'assets/frontend/images/microsite/location/driveIcons/golfing.png', text: 'Noida golf course, sandal suites by lemon tree hotels', time: '20 min' },
                    { image: 'assets/frontend/images/microsite/location/driveIcons/hospital.png', text: 'Yatharth super specialty hospital, max super speciality hospital', time: '30 min' },
                ]}
                walkData={[
                    { image: 'assets/frontend/images/microsite/location/walkIcons/mall.png', text: 'Starling Edge Mall, Fern Residency', time: '5 min' },
                    { image: 'assets/frontend/images/microsite/location/walkIcons/school.png', text: 'Pathway School Noida', time: '10 min' },
                    { image: 'assets/frontend/images/microsite/location/walkIcons/musicschool.png', text: 'Mayoor School of Music', time: '15 min' },
                    { image: 'assets/frontend/images/microsite/location/walkIcons/buildings.png', text: 'Oasis Noida', time: '20 min' },
                ]}
                driveTabIcon={drive}
                driveTabActiveIcon={driveActive}
                walkTabIcon={walk}
                walkTabActiveIcon={walkActive}
                lightboxImages={[{ image: loaction, alt: 'Location Map' }]}
            />


      <ProjectGallery
        actualImages={[gallery1, gallery2, gallery3, gallery4]}
        renderImages={[renderGallery1, renderGallery2, renderGallery3, renderGallery1]}
      />
    </>
  );
}

export default Microsite;
