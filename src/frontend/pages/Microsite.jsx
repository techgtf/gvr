import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { API_URL, VITE_APP_STORAGE } from "../../../config";
import { Helmet } from 'react-helmet'
import drive from "/assets/frontend/images/microsite/location/drive.webp";
import driveActive from "/assets/frontend/images/microsite/location/driveActive.webp";
import walk from "/assets/frontend/images/microsite/location/walk.webp";
import walkActive from "/assets/frontend/images/microsite/location/walkActive.webp";
import HeroSection from "../components/microsite/HeroSection";
import PageNotFound from "../PageNotFound/PageNotFound";
import About from "../components/microsite/About";
import Amentities from "../components/microsite/Amentities";
import PriceList from "../components/microsite/PriceList";
import HighlightsSpecifications from "../components/microsite/HighlightsSpecifications/HighlightsSpecifications";
import Plans from "../components/microsite/Plans";
import LocationAdvantage from "../components/microsite/LocationAdvantage";
import ProjectGallery from "../components/microsite/ProjectGallery/ProjectGallery";


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
  const [locationAdvData, setLocationAdvData] = useState(null);
  const [galleryData, setGalleryData] = useState(null);

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

  const basicDetails = mainData?.find((item) => item.slug === slug);

  useEffect(() => {
    if (basicDetails?.id) {
      axios.get(`${API_URL}project/${basicDetails.id}/project-sections`)
        .then((r) => setSectionData(r.data.data))
        .catch((err) => console.error("Error fetching sections:", err));
    }
  }, [basicDetails?.id]);


  // function for get specific section data
  const fetchSectionData = (endpoint, setter) => {
    axios.get(`${API_URL}project/${basicDetails.id}/${endpoint}`)
      .then((r) => setter(r.data.data))
      .catch((err) => console.error(`Error fetching ${endpoint}:`, err));
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
    if (sectionData.some((item) => item.section_type === "8")) { // get location advantages
      fetchSectionData('location-advantage', setLocationAdvData)
    }
    if (sectionData.some((item) => item.section_type === "9")) { // get gallery
      fetchSectionData('gallery', setGalleryData)
    }

  }, [sectionData, basicDetails?.id])


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong: {error.message}</div>;
  if (!basicDetails) return <PageNotFound />;

  return (
    <>
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
      />

      {sectionData &&
        sectionData.map((dataItem) => {
          switch (dataItem.section_type) {
            case "1": // About Us **************** section_type: '1', ABOUT US',
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

            case "2": // Amenities ****************  section_type: '2', Amentities,
              return (
                <Amentities
                  key={dataItem.id}
                  headingText={dataItem.heading}
                  AmentitiesData={amenitiesData}
                />
              );

            case "3": // PriceList **************** section_type: '3', Price List,
              return (
                <PriceList
                  priceListData={priceData}
                  headingText={dataItem.heading} />
              );


            case "4": // **************** section_type: '4', Highlights', || section_type: '5', Specifications,
              return (
                <HighlightsSpecifications
                  highlightsData={highlightsData}
                  specificationsData={specificationsData}
                />
              )
            case "6":  // ****************   section_type: '6', Master Plan', || section_type: '7', Floor Plans,
              return (
                <Plans
                  masterPlanData={dataItem}
                  unitData={unitData}
                />
              )
            case "8": //  section_type: '8', Location Advantage,
              return (
                <LocationAdvantage
                  locationData={dataItem}
                  locationAdvData={locationAdvData}
                  driveTabIcon={drive}
                  driveTabActiveIcon={driveActive}
                  walkTabIcon={walk}
                  walkTabActiveIcon={walkActive}
                />
              )
            case "9":  // section_type: '9', Project Gallery,
              return (
                <ProjectGallery
                  sectionHeading={dataItem.heading}
                  galleryData={galleryData}
                />
              )


            default:
              return null;
          }
        })}

    </>
  );
}

export default Microsite;
