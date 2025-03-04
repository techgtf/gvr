import React, { useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react";
import axios from "axios";
import { data, useLocation, useParams } from "react-router-dom";
import { API_URL, VITE_APP_STORAGE } from "../../../config";
<<<<<<< HEAD
import { Helmet } from "react-helmet";
=======
import { Helmet } from 'react-helmet'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
import drive from "/assets/frontend/images/microsite/location/drive.webp";
import driveActive from "/assets/frontend/images/microsite/location/driveActive.webp";
import walk from "/assets/frontend/images/microsite/location/walk.webp";
import walkActive from "/assets/frontend/images/microsite/location/walkActive.webp";
>>>>>>> a4e3d52cc0a8cbe9294faf4d9760cec7f12272b0
import HeroSection from "../components/microsite/HeroSection";
import PageNotFound from "../PageNotFound/PageNotFound";
import About from "../components/microsite/About";
import Amentities from "../components/microsite/Amentities";
import PriceList from "../components/microsite/PriceList";
import HighlightsSpecifications from "../components/microsite/HighlightsSpecifications/HighlightsSpecifications";
import Plans from "../components/microsite/Plans";
import LocationAdvantage from "../components/microsite/LocationAdvantage";
import ProjectGallery from "../components/microsite/ProjectGallery/ProjectGallery";

<<<<<<< HEAD
=======

>>>>>>> a4e3d52cc0a8cbe9294faf4d9760cec7f12272b0
function Microsite() {
  const location = useLocation();
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mainData, setMainData] = useState(null);
  const [sectionData, setSectionData] = useState([]);
  const [amenitiesData, setAmenitiesData] = useState(null);
  const [priceData, setPriceData] = useState(null);
  const [highlightsData, setHighlightsData] = useState(null);
  const [specificationsData, setSpecificationsData] = useState(null);
  const [unitData, setUnitData] = useState(null);
  const [locationAdvData, setLocationAdvData] = useState(null);
  const [galleryData, setGalleryData] = useState(null);
  const sectionOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  useEffect(() => {
<<<<<<< HEAD
    axios
      .get(`${API_URL}project`)
=======
    let isMounted = true;

    axios.get(`${API_URL}project`)
>>>>>>> a4e3d52cc0a8cbe9294faf4d9760cec7f12272b0
      .then((r) => {
        if (isMounted) {
          setMainData(r.data?.data.data || []);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      });

    return () => { isMounted = false };
  }, [location.pathname]);

<<<<<<< HEAD
  const basicDetails = mainData?.find((item) => item.slug === slug);
=======

  const basicDetails = mainData?.find((item) => item.slug === slug) || null;
>>>>>>> a4e3d52cc0a8cbe9294faf4d9760cec7f12272b0

  useEffect(() => {
    if (basicDetails?.id) {
      axios
        .get(`${API_URL}project/${basicDetails.id}/project-sections`)
<<<<<<< HEAD
        .then((r) => setSectionData(r.data.data))
=======
        .then((r) => setSectionData(r.data.data || []))
>>>>>>> a4e3d52cc0a8cbe9294faf4d9760cec7f12272b0
        .catch((err) => console.error("Error fetching sections:", err));
    } else {
      setSectionData([]);
    }
  }, [basicDetails?.id]);

<<<<<<< HEAD
  // function for get specific section data
  const fetchSectionData = (endpoint, setter) => {
    axios
      .get(`${API_URL}project/${basicDetails.id}/${endpoint}`)
      .then((r) => setter(r.data.data))
      .catch((err) => console.error(`Error fetching ${endpoint}:`, err));
  };
=======
  const fetchSectionData = useMemo(() => (endpoint, setter) => {
    if (!basicDetails?.id) return;
    axios
      .get(`${API_URL}project/${basicDetails.id}/${endpoint}`)
      .then((r) => setter(r.data.data || null))
      .catch((err) => console.error(`Error fetching ${endpoint}:`, err));
  }, [basicDetails?.id]);
>>>>>>> a4e3d52cc0a8cbe9294faf4d9760cec7f12272b0

  useEffect(() => {
<<<<<<< HEAD
    if (!sectionData || !basicDetails.id) return;
    if (sectionData?.some((item) => item.section_type === "2")) {
      // get amenities data
      fetchSectionData("amenities", setAmenitiesData);
    }
    if (sectionData.some((item) => item.section_type === "3")) {
      // get priceing
      fetchSectionData("price", setPriceData);
    }
    if (sectionData.some((item) => item.section_type === "4")) {
      // get highlights
      fetchSectionData("highlights", setHighlightsData);
    }
    if (sectionData.some((item) => item.section_type === "5")) {
      // get specifications
      fetchSectionData("specifications", setSpecificationsData);
    }
    if (sectionData.some((item) => item.section_type === "7")) {
      // get floor-pans
      fetchSectionData("floor-plan", setUnitData);
    }
  }, [sectionData, basicDetails?.id]);
=======
    if (!sectionData.length || !basicDetails?.id) return;
    fetchSectionData("amenities", setAmenitiesData);
    fetchSectionData("price", setPriceData);
    fetchSectionData("highlights", setHighlightsData);
    fetchSectionData("specifications", setSpecificationsData);
    fetchSectionData("floor-plan", setUnitData);
    fetchSectionData("location-advantage", setLocationAdvData);
    fetchSectionData("gallery", setGalleryData);
  }, [sectionData, basicDetails?.id, fetchSectionData]);

  const sortedSections = sectionData.length
    ? [...sectionData].sort(
      (a, b) => sectionOrder.indexOf(a.section_type) - sectionOrder.indexOf(b.section_type)
    )
    : [];


  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let smoother = ScrollSmoother.create({
      smooth: 1.2,
      effects: true,
    });

    ScrollTrigger.refresh();

    return () => {
      smoother.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [location.pathname]);
>>>>>>> a4e3d52cc0a8cbe9294faf4d9760cec7f12272b0


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong: {error.message}</div>;
  if (!basicDetails) return <PageNotFound />;
<<<<<<< HEAD

  return (
    <>
      <HeroSection
        desktopBg={basicDetails.thumbnail}
=======


  return (
    <React.Fragment key={slug}>
            <Helmet>
        <title>Sharanam by Great Value | Premium 2 & 3 BHK Homes</title>
        <meta name="keywords" content="Great Value realty, Great Value Sharanam, Great Value Sharanam Noida, Sector 107 Noida, Sharanam Sector 107 Noida, Great Value Sharanam Sector 107 Noida" />
        <meta name="description" content="Sharanam by Great Value offers modern homes in Noida Sector 107 with excellent connectivity, premium amenities & a peaceful environment." />
        <meta name="google-site-verification" content="Ma-arPYmEe7u20NJ-jsuiHjD1p2HSShiEPD4m8s3bL8" />
        <link rel="canonical" href="https://greatvaluerealty.com/sharanam-apartments-noida" />
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
        <meta property="og:url" content="https://greatvaluerealty.com/sharanam-apartments-noida" />
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
            "url": "https://greatvaluerealty.com/sharanam-apartments-noida",
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
      <HeroSection
        desktopBg={basicDetails.feature_image}
>>>>>>> a4e3d52cc0a8cbe9294faf4d9760cec7f12272b0
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
      />

      {sortedSections &&
        sortedSections.map((dataItem) => {
          switch (dataItem.section_type) {
            case "1": // About Us **************** section_type: '1', ABOUT US',
              return (
                <About
                  key={dataItem.id}
                  imageSrc={dataItem.image}
                  alt={`${basicDetails.name} ${basicDetails?.location?.address}`}
                  headingText={dataItem.heading}
                  descriptionText={
                    <div
                      dangerouslySetInnerHTML={{ __html: dataItem.description }}
                    />
                  }
                  reverseWatermark={true}
                />
              );

            case "2": // Amenities ****************  section_type: '2', Amentities,
              return (
                <React.Fragment key={dataItem.id}>
                  <Amentities
                    headingText={dataItem.heading}
                    AmentitiesData={amenitiesData}
                  />
                </React.Fragment>
              );

            case "3": // PriceList **************** section_type: '3', Price List,
              return (
                <PriceList
                  priceListData={priceData}
                  headingText={dataItem.heading}
                />
              );

<<<<<<< HEAD
            case "4": // **************** section_type: '4', heading: 'Highlights', || section_type: '5', heading: 'Specifications',
              return (
                <HighlightsSpecifications
                  highlightsData={highlightsData}
                  specificationsData={specificationsData}
                />
              );
            case "5": // ****************   section_type: '6', heading: 'Master Plan', || section_type: '7', heading: 'Floor Plans',
              return (
                <Plans masterPlanData={sectionData[5]} unitData={unitData} />
              );
            case "6": //  section_type: '8', heading: 'Location Advantage',
              return <LocationAdvantage />;
            case "7": // section_type: '9', heading: 'Project Gallery',
=======

            case "4": // **************** section_type: '4', Highlights', || section_type: '5', Specifications,
              return (
                <React.Fragment key={dataItem.id}>
                  <HighlightsSpecifications
                    highlightsData={highlightsData}
                    specificationsData={specificationsData}
                  />
                </React.Fragment>
              )
            case "6":  // ****************   section_type: '6', Master Plan', || section_type: '7', Floor Plans,
              return (
                <React.Fragment key={dataItem.id}>
                  <Plans
                    masterPlanData={dataItem}
                    unitData={unitData}
                  />
                </React.Fragment>
              )
            case "8": //  section_type: '8', Location Advantage,
              return (
                <React.Fragment key={dataItem.id}>
                  <LocationAdvantage
                    locationData={dataItem}
                    locationAdvData={locationAdvData}
                    driveTabIcon={drive}
                    driveTabActiveIcon={driveActive}
                    walkTabIcon={walk}
                    walkTabActiveIcon={walkActive}
                  />
                </React.Fragment>
              )
            case "9":  // section_type: '9', Project Gallery,
              return (
                <React.Fragment key={dataItem.id}>
                  <ProjectGallery
                    sectionHeading={dataItem.heading}
                    galleryData={galleryData}
                  />
                </React.Fragment>
              )
>>>>>>> a4e3d52cc0a8cbe9294faf4d9760cec7f12272b0

            default:
              return null;
          }
        })}
<<<<<<< HEAD

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
        actualImages={[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]}
      /> */}
    </>
=======
    </React.Fragment>
>>>>>>> a4e3d52cc0a8cbe9294faf4d9760cec7f12272b0
  );
}

export default Microsite;
