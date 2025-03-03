import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { API_URL, VITE_APP_STORAGE } from "../../../config";
import { Helmet } from 'react-helmet'
import HeroSection from "../components/microsite/HeroSection";
import PageNotFound from "../PageNotFound/PageNotFound";
import About from "../components/microsite/About";
import Amentities from "../components/microsite/Amentities";
import PriceList from "../components/microsite/PriceList";
import HighlightsSpecifications from "../components/microsite/HighlightsSpecifications/HighlightsSpecifications";
import Plans from "../components/microsite/Plans";
import LocationAdvantage from "../components/microsite/LocationAdvantage";

<<<<<<< HEAD
import aboutImg from "/assets/frontend/images/microsite/about.webp"

// location drive and walk images 
import mall from "/assets/frontend/images/microsite/location/walkIcons/mall.webp"
import school from "/assets/frontend/images/microsite/location/walkIcons/school.webp"
import stadium from "/assets/frontend/images/microsite/gv/location/icons/auditorium.webp"
import hospital from "/assets/frontend/images/microsite/gv/location/icons/hospital.webp"
import store from "/assets/frontend/images/microsite/gv/location/icons/shopping.webp"
import airport from "/assets/frontend/images/microsite/vilasa/location/icons/airport.webp"
import college from "/assets/frontend/images/microsite/gv/location/icons/college.webp"
import cafe from "/assets/frontend/images/microsite/gv/location/icons/hauzkhas.webp"
import railway from "/assets/frontend/images/microsite/vilasa/location/icons/metro.webp"
=======
>>>>>>> be5d48c49e395fd2ab83dd8896572878b61d7f55

function Microsite() {
  const location = useLocation();
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mainData, setMainData] = useState(null);
  const [sectionData, setSectionData] = useState(null);
  const [amenitiesData, setAmenitiesData] = useState(null);
  const [priceData, setPriceData] = useState(null);
  const [highlightsData, setHighlightsData] = useState(null);
  const [specificationsData, setSpecificationsData] = useState(null);
  const [unitData, setUnitData] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}project`)
      .then((r) => {
        setMainData(r.data.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [location.pathname]);

<<<<<<< HEAD
  const unitData = {
    unit1: [
      {
        image: plan1,
        type: "TypeA: 2B/R",
        carpetArea: "752 Sq Ft.",
        balconyArea: "69 Sq Ft.",
        totalArea: "1139 Sq Ft.",
      },
      {
        image: plan3,
        type: "TypeC: 3B+R",
        carpetArea: "1080 Sq Ft",
        balconyArea: "145 Sq Ft",
        totalArea: "1647 Sq Ft",
      },
=======
  const basicDetails = mainData?.find((item) => item.slug === slug);
>>>>>>> be5d48c49e395fd2ab83dd8896572878b61d7f55

  useEffect(() => {
    if (basicDetails?.id) {
      axios.get(`${API_URL}project/${basicDetails.id}/project-sections`)
        .then((r) => setSectionData(r.data.data))
        .catch((err) => console.error("Error fetching sections:", err));
    }
  }, [basicDetails?.id]);

<<<<<<< HEAD
      {
        image: plan2,
        type: "TypeB: 2B/R+S",
        carpetArea: "873 Sq Ft",
        balconyArea: "81 Sq Ft",
        totalArea: "1295 Sq Ft",
      },
      {
        image: plan4,
        type: "Type D: 3B/R+S",
        carpetArea: "1186 Sq Ft",
        balconyArea: "145 Sq Ft",
        totalArea: "1791 Sq Ft",
      },
    ],
=======

  // function for get specific section data
  const fetchSectionData = (endpoint, setter) => {
    axios.get(`${API_URL}project/${basicDetails.id}/${endpoint}`)
      .then((r) => setter(r.data.data))
      .catch((err) => console.error(`Error fetching ${endpoint}:`, err));
>>>>>>> be5d48c49e395fd2ab83dd8896572878b61d7f55
  };

  // pass endpoint to get section data
  useEffect(() => {
    if (!sectionData || !basicDetails.id) return;
    if (sectionData?.some((item) => item.section_type === '2')) { // get amenities data
      fetchSectionData('amenities', setAmenitiesData);
    }
    if (sectionData.some((item) => item.section_type === '3')) { // get priceing
      fetchSectionData('price', setPriceData);
    }
    if (sectionData.some((item) => item.section_type === '4')) { // get highlights
      fetchSectionData('highlights', setHighlightsData);
    }
    if (sectionData.some((item) => item.section_type === '5')) { // get specifications
      fetchSectionData('specifications', setSpecificationsData);
    }
    if (sectionData.some((item) => item.section_type === "7")) { // get floor-pans
      fetchSectionData('floor-plan', setUnitData)
    }

<<<<<<< HEAD
  const highlightsData = [
    "3 sides open corner plot",
    "Proposed Metro station in Sector-108",
    "Entirely inhabited residential area.",
    "Schools, hospitals, malls, etc, are situated along a 70m wide, straight road from Kalindi Kunj, in one of Noida’s most prime locations.",
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
        { image: "assets/frontend/images/microsite/specifications/flooring.webp", description: "Vitrified tiles in the living, dining, and bedrooms; anti-skid tiles in the kitchen, balconies, and toilets." },
      ],
    },
    {
      title: "Wall Finishes",
      items: [
        { image: "assets/frontend/images/microsite/specifications/wall.webp", description: "OBD for interiors, weatherproof paint for exteriors, and ceramic tiles in toilets and kitchens." },
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
      size: "1139 Sq Ft",
      price: "₹ 74 Lacs*",
    },
    {
      area: "3 BHK ",
      size: "1647 Sq Ft",
      price: "₹ 1.07 CR*",
    },
    {
      area: "4 BHK ",
      size: "2283 Sq Ft",
      price: "₹ 1.48 CR*",
    },
  ];

  const   images = [
    { image: "assets/frontend/images/microsite/amentities/slider/slide1.webp", alt: "Gynasium" },
    { image: "assets/frontend/images/microsite/amentities/slider/slide2.webp", alt: "Theatre" },
    { image: "assets/frontend/images/microsite/amentities/slider/slide3.webp", alt: "Swimming Pool" },
    { image: "assets/frontend/images/microsite/amentities/slider/slide4.webp", alt: "Park" },
    { image: "assets/frontend/images/microsite/amentities/slider/slide5.webp", alt: "Running Track" },
    { image: "assets/frontend/images/microsite/amentities/slider/slide6.webp", alt: "Yoga" },
    { image: "assets/frontend/images/microsite/amentities/slider/slide7.webp", alt: "Basket ball" },
  ];
=======
  }, [sectionData, basicDetails?.id])

  // console.log('specificationsData', specificationsData);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong: {error.message}</div>;
  if (!basicDetails) return <PageNotFound />;
>>>>>>> be5d48c49e395fd2ab83dd8896572878b61d7f55

  const galleryData = [
    {
      "image": gallery1,
      "alt": 'Residential apartments'
    },
    {
      "image": gallery2,
      "alt": 'Luxury residential flats'
    },
    {
      "image": gallery3,
      "alt": 'Residential property'
    },
    {
      "image": gallery4,
      "alt": 'Sharanam apartments'
    },
    {
      "image": gallery5,
      "alt": 'Sharanam flats '
    },
    {
      "image": gallery6,
      "alt": 'Luxury apartments'
    },
  ]

  return (
    <>
<<<<<<< HEAD
      <Helmet>
        <title>Sharanam by Great Value | Premium 2 & 3 BHK Homes</title>
        <meta name="keywords" content="Great Value realty, Great Value Sharanam, Great Value Sharanam Noida, Sector 107 Noida, Sharanam Sector 107 Noida, Great Value Sharanam Sector 107 Noida" />
        <meta name="description" content="Sharanam by Great Value offers modern homes in Noida Sector 107 with excellent connectivity, premium amenities & a peaceful environment." />
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
        <meta property="og:title" content="Sharanam by Great Value | Premium 2 & 3 BHK Homes" />
        <meta property="og:description" content="Sharanam by Great Value offers modern homes in Noida Sector 107 with excellent connectivity, premium amenities & a peaceful environment." />
        <meta property="og:url" content="https://greatvaluerealty.com/sharanam" />
        <meta property="og:site_name" content="Great Value Sharanam Noida" />
        <meta property="og:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.webp" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@GreatValueGroup" />
        <meta name="twitter:title" content="Sharanam by Great Value | Premium 2 & 3 BHK Homes" />
        <meta name="twitter:description" content="Sharanam by Great Value offers modern homes in Noida Sector 107 with excellent connectivity, premium amenities & a peaceful environment." />
        <meta name="twitter:creator" content="@GreatValueGroup" />
        <meta name="twitter:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.webp" />
        {/* <!--End of Twitter TH data --> */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Great Value Sharanam Sector 107,Noida",
            "alternateName": "Great Value Sharanam Noida",
            "url": "https://greatvaluerealty.com/sharanam",
            "logo": "https://greatvaluerealty.com/assets/frontend/images/logo.png",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+91 7777079770",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": "en"
            }
            ]
          })}

        </script>
      </Helmet>

      <HeroSection />

      <About
        imageSrc={aboutImg}
        alt={"Great value home"}
        headingText="ABOUT US"
        descriptionText="A serene haven in Noida offering ready-to-move flats that rejuvenate your soul. Thoughtfully crafted, it’s more than a home; it’s your family’s tranquil retreat that seamlessly combines modern amenities, excellent connectivity, and a vibrant community to deliver a living experience like no other."
        reverseWatermark={true}
=======
      <HeroSection
        desktopBg={basicDetails.thumbnail}
        mobileBg={basicDetails.thumbnail}
        scrollText="SCROLL DOWN"
        sectionId="overview"
        initialScale={1.5}
        duration={2}
        bannerDetailsProps={{
          heading: basicDetails.name,
          location: basicDetails?.location?.address,
          description: basicDetails?.subtypologie?.typology,
        }}
>>>>>>> be5d48c49e395fd2ab83dd8896572878b61d7f55
      />

      {sectionData &&
        sectionData.map((dataItem) => {
          switch (dataItem.section_type) {
            case "1": // About Us **************** section_type: '1', heading: 'ABOUT US',
              return (
                <About
                  key={dataItem.id}
                  imageSrc={dataItem.image}
                  alt={`${basicDetails.name} ${basicDetails?.location?.address}`}
                  headingText={dataItem.heading}
                  descriptionText={<div dangerouslySetInnerHTML={{ __html: dataItem.description }} />}
                  reverseWatermark={true}
                />
              );

            case "2": // Amenities ****************  section_type: '2', heading: 'Amentities',
              return (
                <Amentities
                  key={dataItem.id}
                  headingText={dataItem.heading}
                  AmentitiesData={amenitiesData}
                />
              );

            case "3": // PriceList **************** section_type: '3', heading: 'Price List',
              return (
                <PriceList
                  priceListData={priceData}
                  headingText={dataItem.heading} />
              );


            case "4": // **************** section_type: '4', heading: 'Highlights', || section_type: '5', heading: 'Specifications',
              return (
                <HighlightsSpecifications
                  highlightsData={highlightsData}
                  specificationsData={specificationsData}
                />
              )
            case "5":  // ****************   section_type: '6', heading: 'Master Plan', || section_type: '7', heading: 'Floor Plans',
              return (
                <Plans
                  masterPlanData={sectionData[5]}
                  unitData={unitData}
                />
              )
            case "6": //  section_type: '8', heading: 'Location Advantage',
              return (
                <LocationAdvantage />
              )
            case "7":  // section_type: '9', heading: 'Project Gallery',

            default:
              return null;
          }
        })}


      {/*
      <LocationAdvantage
        locationImage={loaction}
        driveData={[
          { image: store, text: 'Sector 104 Market', time: '4 min' },
          { image: cafe, text: 'Spezia Bistro, GT 01/02 2nd Floor, Sector 104, Noida, Uttar Pradesh 201301', time: '4 min' },
          { image: school, text: 'Pathways School Noida', time: '5 min' },
          { image: stadium, text: 'Stadeum, Sector 100, Noida, Uttar Pradesh 201303', time: '5 min' },
          { image: store, text: 'Serene Clothing, Suman Enclave, Sector 107, Noida, Uttar Pradesh 201303', time: '6 min' },
          { image: college, text: 'Chet Ram Sharma College Of Education', time: '12 min' },
          { image: mall, text: 'DLF Mall of India', time: '15 min' },
          { image: hospital, text: 'Jaypee Hospital', time: '16 min' },
          { image: railway, text: 'Hazrat Nizamuddin Railway Station', time: '37 min' },
          { image: airport, text: 'Indira Gandhi International Airport', time: '1 hour' },
        ]}
        walkData={[
          { image: mall, text: 'Starling Mall, Plot no 1A, Hazipur, Sector 104, Noida, Uttar Pradesh 201301', time: '8 min' },
          { image: stadium, text: 'Stadeum, Sector 100, Noida, Uttar Pradesh 201303', time: '10 min' },
          { image: cafe, text: 'Spezia Bistro, GT 01/02 2nd Floor, Sector 104, Noida, Uttar Pradesh 201301', time: '12 min' },
          { image: school, text: 'Pathways School Noida', time: '14 min' },
          { image: store, text: 'Sector 104 Market', time: '15 min' },
          { image: store, text: 'Serene Clothing, Suman Enclave, Sector 107, Noida, Uttar Pradesh 201303', time: '16 min' },
        ]}
        driveTabIcon={drive}
        driveTabActiveIcon={driveActive}
        walkTabIcon={walk}
        walkTabActiveIcon={walkActive}
        lightboxImages={[{ image: loaction, alt: 'Location Map' }]}
        description="  Discover homes strategically placed in thriving neighborhoods, offering seamless access to key hubs, schools, and lifestyle conveniences."
      />

      <ProjectGallery
<<<<<<< HEAD
        actualImages={galleryData}
      />
=======
        actualImages={[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]}
      /> */}
>>>>>>> be5d48c49e395fd2ab83dd8896572878b61d7f55
    </>
  );
}

export default Microsite;
