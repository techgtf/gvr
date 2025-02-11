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
import plan1 from "/assets/frontend/images/microsite/plans/floor_plans/unit1-1.png";
import plan2 from "/assets/frontend/images/microsite/plans/floor_plans/unit2-1.png";
import plan3 from "/assets/frontend/images/microsite/plans/floor_plans/unit1-2.png";
import plan4 from "/assets/frontend/images/microsite/plans/floor_plans/unit2-2.png";
import loaction from "/assets/frontend/images/microsite/location/location.png";
import drive from "/assets/frontend/images/microsite/location/drive.png";
import driveActive from "/assets/frontend/images/microsite/location/driveActive.png";
import walk from "/assets/frontend/images/microsite/location/walk.png";
import walkActive from "/assets/frontend/images/microsite/location/walkActive.png";

import gallery1 from "/assets/frontend/images/microsite/gallery/gallery1.webp";
import gallery2 from "/assets/frontend/images/microsite/gallery/gallery2.webp";
import gallery3 from "/assets/frontend/images/microsite/gallery/gallery3.webp";
import gallery4 from "/assets/frontend/images/microsite/gallery/gallery4.webp";
import renderGallery1 from "/assets/frontend/images/microsite/gallery/render/gallery1.jpg";
import renderGallery2 from "/assets/frontend/images/microsite/gallery/render/gallery2.webp";
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
        image: plan3,
        type: "TypeC: 3B+R",
        carpetArea: "1080 Sq. Ft.",
        balconyArea: "145 Sq. Ft.",
        totalArea: "1647 Sq. Ft.",
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
        image: plan4,
        type: "Type D: 3B/R+S",
        carpetArea: "1186 Sq. Ft.",
        balconyArea: "145 Sq. Ft.",
        totalArea: "1791 Sq. Ft.",
      },
    ],
  };


  const highlightsData = [
    "3 sides open corner plot",
    "Proposed Metro station in Sector-108",
    "Fully inhabited residential area.",
    "Schools, Hospitals, Malls etc. nearby On 70m wide & straight road from Kalindi Kunj, Situated alone of the most prime location of Noida.",
    "In close vicinity to Delhi (15 min. drive to DND & Kalandi Kunj)",
    "Close to Noida Expressway & Yamuna Expressway.",
    "Easy access to Metro Station, connecting to metro network all around NCR.",
  ];

    const specificationsData = [
      {
          title: "Structure",
          items: [
              { image: "assets/frontend/images/microsite/specifications/structure.png", description: "RCC frame structure ensuring durability and earthquake resistance." },            
          ],
      },
      {
          title: "Flooring",
          items: [
              { image: "assets/frontend/images/microsite/specifications/flooring.png", description: "Vitrified tiles in living, dining, and bedrooms; anti-skid tiles in kitchen, balconies, and toilets." },             
          ],
      },
      {
          title: "Wall Finishes",
          items: [
              { image: "assets/frontend/images/microsite/specifications/wall.png", description: "OBD for interiors, weatherproof paint for exteriors, and ceramic tiles in toilets and kitchen." },             
          ],
      },
      {
          title: "Doors & Windows",
          items: [
              { image: "assets/frontend/images/microsite/specifications/door.png", description: "Hardwood frame doors with flush shutters; Aluminum/UPVC windows with clear glass." },             
          ],
      },
      {
          title: "Kitchen",
          items: [
              { image: "assets/frontend/images/microsite/specifications/kitchen.png", description: "Granite countertop with stainless steel sink and designer ceramic tiles." },             
          ],
      },
      {
          title: "Toilets",
          items: [
              { image: "assets/frontend/images/microsite/specifications/toilet.png", description: "Premium CP fittings with white sanitary ware and geyser provision." },             
          ],
      },
      {
          title: "Electrical",
          items: [
              { image: "assets/frontend/images/microsite/specifications/electrical.png", description: "Concealed copper wiring with modular switches and power backup." },             
          ],
      },
      {
          title: "Security",
          items: [
              { image: "assets/frontend/images/microsite/specifications/security.png", description: "CCTV surveillance and intercom system for enhanced safety." },             
          ],
      },
  ];

  const customPriceListData = [
    {
      area: "2 BHK",
      more: "DD/ 2 BR/ KITCHEN/ 2 TOILETS/ BAL.",
      size: "1139 sq.ft",
      price: "₹ 74 Lacs*",
    },
    {
      area: "3 BHK ",
      more: "DD/ 3 BR/ KITCHEN/ 3 TOILETS/ BAL.",
      size: "1647 sq.ft",
      price: "₹ 1.07 CR*",
    },
    {
      area: "4 BHK ",
      more: "DD/ 4 BR/ STUDY/ KITCHEN/ 4 TOILETS/ BAL.",
      size: "2283 sq.ft",
      price: "₹ 1.48 CR*",
    },
  ];

  const images = [
    { image: "assets/frontend/images/microsite/amentities/slider/slide1.webp", alt: "Beautiful Scenery 1" },
    { image: "assets/frontend/images/microsite/amentities/slider/slide2.webp", alt: "Beautiful Scenery 2" },
    { image: "assets/frontend/images/microsite/amentities/slider/slide3.webp", alt: "Beautiful Scenery 3" },
    { image: "assets/frontend/images/microsite/amentities/slider/slide4.webp", alt: "Beautiful Scenery 4" },
    { image: "assets/frontend/images/microsite/amentities/slider/slide5.webp", alt: "Beautiful Scenery 5" },
    { image: "assets/frontend/images/microsite/amentities/slider/slide6.webp", alt: "Beautiful Scenery 6" },
    { image: "assets/frontend/images/microsite/amentities/slider/slide7.webp", alt: "Beautiful Scenery 7" },
  ];



  return (
    <>
      <HeroSection />
      <About />
      <Amentities images={images}  />
      <PriceList priceListData={customPriceListData} headingText="Our Price List" />
      <HighlightsSpecifications
        highlightsComponent={() => <Highlights title="Highlights" highlights={highlightsData} />}
        specificationsComponent={() => <Specifications title="Specifications" specifications={specificationsData} altImage="assets/frontend/images/microsite/specifications/alt.jpg" />}
      />


      <Plans masterPlanData={masterPlanData} unitData={unitData} />;
      <LocationAdvantage
        locationImage={loaction}
        driveData={[
          { image: 'assets/frontend/images/microsite/location/walkIcons/mall.png', text: 'Starling Edge Mall, Fern Residency', time: '3 min' },
          { image: 'assets/frontend/images/microsite/location/walkIcons/school.png', text: 'Pathway School , Noida', time: '5 min' },
          { image: 'assets/frontend/images/microsite/location/walkIcons/musicschool.png', text: 'Oasis Noida', time: '10 min' },
          { image: 'assets/frontend/images/microsite/location/walkIcons/buildings.png', text: 'Greater Noida Expressway', time: '15 min' },
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
        description="  Discover homes strategically placed in thriving neighborhoods, offering seamless access to key hubs, schools, and lifestyle conveniences."
      />


      <ProjectGallery
        actualImages={[gallery1, gallery2, gallery3, gallery4]}
        renderImages={[ renderGallery2]}
      />
    </>
  );
}

export default Microsite;
