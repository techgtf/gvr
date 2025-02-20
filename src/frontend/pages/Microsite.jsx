import React from "react";
import { Helmet } from 'react-helmet'
import HeroSection from "../components/microsite/HeroSection";
import Amentities from "../components/microsite/Amentities";
import PriceList from "../components/microsite/PriceList";
import HighlightsSpecifications from "../components/microsite/HighlightsSpecifications/HighlightsSpecifications";
import Plans from "../components/microsite/Plans";
import LocationAdvantage from "../components/microsite/LocationAdvantage";
import ProjectGallery from "../components/microsite/ProjectGallery/ProjectGallery";
import master_plan_img from "/assets/frontend/images/microsite/plans/masterplan.webp";
import plan1 from "/assets/frontend/images/microsite/plans/floor_plans/unit1-1.webp";
import plan2 from "/assets/frontend/images/microsite/plans/floor_plans/unit2-1.webp";
import plan3 from "/assets/frontend/images/microsite/plans/floor_plans/unit1-2.webp";
import plan4 from "/assets/frontend/images/microsite/plans/floor_plans/unit2-2.webp";
import loaction from "/assets/frontend/images/microsite/location/location.webp";
import drive from "/assets/frontend/images/microsite/location/drive.webp";
import driveActive from "/assets/frontend/images/microsite/location/driveActive.webp";
import walk from "/assets/frontend/images/microsite/location/walk.webp";
import walkActive from "/assets/frontend/images/microsite/location/walkActive.webp";
import gallery1 from "/assets/frontend/images/microsite/gallery/gallery1.webp";
import gallery2 from "/assets/frontend/images/microsite/gallery/gallery2.webp";
import gallery3 from "/assets/frontend/images/microsite/gallery/gallery3.webp";
import gallery4 from "/assets/frontend/images/microsite/gallery/gallery4.webp";
import gallery5 from "/assets/frontend/images/microsite/gallery/gallery5.webp";
import gallery6 from "/assets/frontend/images/microsite/gallery/gallery6.webp";
import Specifications from "../components/microsite/HighlightsSpecifications/Specifications";
import Highlights from "../components/microsite/HighlightsSpecifications/Highlights";
import About from "../components/microsite/About";
import { useLocation } from "react-router-dom";

import aboutImg from "/assets/frontend/images/microsite/about.jpg"

// location drive and walk images 
import mall from "/assets/frontend/images/microsite/location/walkIcons/mall.webp"
import school from "/assets/frontend/images/microsite/location/walkIcons/school.webp"
import musicschool from "/assets/frontend/images/microsite/location/walkIcons/musicschool.webp"
import buildings from "/assets/frontend/images/microsite/location/walkIcons/buildings.webp"

function Microsite() {
  const location = useLocation();

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
        { image: "assets/frontend/images/microsite/specifications/structure.webp", description: "RCC frame structure ensuring durability and earthquake resistance." },
      ],
    },
    {
      title: "Flooring",
      items: [
        { image: "assets/frontend/images/microsite/specifications/flooring.webp", description: "Vitrified tiles in living, dining, and bedrooms; anti-skid tiles in kitchen, balconies, and toilets." },
      ],
    },
    {
      title: "Wall Finishes",
      items: [
        { image: "assets/frontend/images/microsite/specifications/wall.webp", description: "OBD for interiors, weatherproof paint for exteriors, and ceramic tiles in toilets and kitchen." },
      ],
    },
    {
      title: "Doors & Windows",
      items: [
        { image: "assets/frontend/images/microsite/specifications/door.webp", description: "Hardwood frame doors with flush shutters; Aluminum/UPVC windows with clear glass." },
      ],
    },
    {
      title: "Kitchen",
      items: [
        { image: "assets/frontend/images/microsite/specifications/kitchen.webp", description: "Granite countertop with stainless steel sink and designer ceramic tiles." },
      ],
    },
    {
      title: "Toilets",
      items: [
        { image: "assets/frontend/images/microsite/specifications/toilet.webp", description: "Premium CP fittings with white sanitary ware and geyser provision." },
      ],
    },
    {
      title: "Electrical",
      items: [
        { image: "assets/frontend/images/microsite/specifications/electrical.webp", description: "Concealed copper wiring with modular switches and power backup." },
      ],
    },
    {
      title: "Security",
      items: [
        { image: "assets/frontend/images/microsite/specifications/security.webp", description: "CCTV surveillance and intercom system for enhanced safety." },
      ],
    },
  ];

  const customPriceListData = [
    {
      area: "2 BHK",
      size: "1139 sq.ft",
      price: "₹ 74 Lacs*",
    },
    {
      area: "3 BHK ",
      size: "1647 sq.ft",
      price: "₹ 1.07 CR*",
    },
    {
      area: "4 BHK ",
      size: "2283 sq.ft",
      price: "₹ 1.48 CR*",
    },
  ];

  const images = [
    { image: "assets/frontend/images/microsite/amentities/slider/slide1.webp", alt: "Great Value Sharanam Sector 107, Noida" },
    { image: "assets/frontend/images/microsite/amentities/slider/slide2.webp", alt: "Beautiful Scenery 2" },
    { image: "assets/frontend/images/microsite/amentities/slider/slide3.webp", alt: "Beautiful Scenery 3" },
    { image: "assets/frontend/images/microsite/amentities/slider/slide4.webp", alt: "Beautiful Scenery 4" },
    { image: "assets/frontend/images/microsite/amentities/slider/slide5.webp", alt: "Beautiful Scenery 5" },
    { image: "assets/frontend/images/microsite/amentities/slider/slide6.webp", alt: "Beautiful Scenery 6" },
    { image: "assets/frontend/images/microsite/amentities/slider/slide7.webp", alt: "Beautiful Scenery 7" },
  ];

  return (
    <>
      <Helmet>
        <title>Great Value Sharanam Sector 107,Noida</title>
        <meta name="keywords" content="Great Value realty, Great Value Sharanam, Great Value Sharanam Noida, Sector 107 Noida, Sharanam Sector 107 Noida, Great Value Sharanam Sector 107 Noida" />
        <meta name="description" content="Discover Sharanam in Noida – a serene haven offering ready-to-move flats that refresh your soul." />
        <meta name="google-site-verification" content="Ma-arPYmEe7u20NJ-jsuiHjD1p2HSShiEPD4m8s3bL8" />
        <link rel="canonical" href="https://greatvaluerealty.com/sharanam" />
        <meta name="distribution" content="Global" />
        <meta name="Language" content="English" />
        <meta name="doc-type" content="Public" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Great Value Sharanam Noida" />
        <meta name="googlebot" content="all, index, follow" />
        <meta name="YahooSeeker" content="all, index, follow" />
        <meta name="msnbot" content="all, index, follow" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="revisit-after" content="1 days" />
        <meta name="rating" content="safe for kids" />
        <meta name="expires" content="never" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Great Value Sharanam Noida" />
        <meta property="og:description" content="Discover Sharanam in Noida – a serene haven offering ready-to-move flats that refresh your soul." />
        <meta property="og:url" content="https://greatvaluerealty.com/sharanam" />
        <meta property="og:site_name" content="Great Value Sharanam Noida" />
        <meta property="og:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@GreatValueGroup" />
        <meta name="twitter:title" content="Great Value Sharanam Noida" />
        <meta name="twitter:description" content="Discover Sharanam in Noida – a serene haven offering ready-to-move flats that refresh your soul." />
        <meta name="twitter:creator" content="@GreatValueGroup" />
        <meta name="twitter:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />
        {/* <!--End of Twitter TH data --> */}

        <script type="application/ld+json">
          {`
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Great Value Sharanam Sector 107,Noida",
          "alternateName": "Great Value Sharanam Noida",
          "url": "https://greatvaluerealty.com/sharanam",
          "logo": "https://greatvaluerealty.com/assets/frontend/images/logo.png"
          "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 7777079770",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": "en"
          }`}

        </script>
      </Helmet>

      <HeroSection />

      <About
        imageSrc={aboutImg}
        alt={"Sharanam Sector 107 Noida"}
        headingText="ABOUT US"
        descriptionText="A serene haven in Noida offering ready-to-move flats that rejuvenate your soul. Thoughtfully crafted, it’s more than a home; it’s your family’s tranquil retreat that seamlessly combines modern amenities, excellent connectivity, and a vibrant community to deliver a living experience like no other."
        reverseWatermark={true}
      />

      <Amentities images={images} />

      <PriceList priceListData={customPriceListData} headingText="Price List" />

      <HighlightsSpecifications
        key={location.pathname}
        highlightsComponent={() => <Highlights title="Highlights" highlights={highlightsData} />}
        specificationsComponent={() => <Specifications title="Specifications" specifications={specificationsData} altImage="assets/frontend/images/microsite/specifications/alt.webp" />}
      />

      <Plans masterPlanData={masterPlanData} unitData={unitData} />

      <LocationAdvantage
        locationImage={loaction}
        driveData={[
          { image: mall, text: 'Starling Edge Mall, Fern Residency', time: '3 min' },
          { image: school, text: 'Pathway School , Noida', time: '5 min' },
          { image: musicschool, text: 'Oasis Noida', time: '10 min' },
          { image: buildings, text: 'Greater Noida Expressway', time: '15 min' },
        ]}
        walkData={[
          { image: mall, text: 'Starling Edge Mall, Fern Residency', time: '5 min' },
          { image: school, text: 'Pathway School Noida', time: '10 min' },
          { image: musicschool, text: 'Mayoor School of Music', time: '15 min' },
          { image: buildings, text: 'Oasis Noida', time: '20 min' },
        ]}
        driveTabIcon={drive}
        driveTabActiveIcon={driveActive}
        walkTabIcon={walk}
        walkTabActiveIcon={walkActive}
        lightboxImages={[{ image: loaction, alt: 'Location Map' }]}
        description="  Discover homes strategically placed in thriving neighborhoods, offering seamless access to key hubs, schools, and lifestyle conveniences."
      />

      <ProjectGallery
        actualImages={[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]}
      />
    </>
  );
}

export default Microsite;
