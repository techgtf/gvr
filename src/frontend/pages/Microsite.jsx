import React, { useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react";
import axios from "axios";
import { data, useLocation, useParams } from "react-router-dom";
import { API_URL, VITE_APP_STORAGE } from "../../../config";
import { Helmet } from 'react-helmet'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
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
    let isMounted = true;

    axios.get(`${API_URL}project`)
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


  const basicDetails = mainData?.find((item) => item.slug === slug) || null;

  useEffect(() => {
    if (basicDetails?.id) {
      axios
        .get(`${API_URL}project/${basicDetails.id}/project-sections`)
        .then((r) => setSectionData(r.data.data || []))
        .catch((err) => console.error("Error fetching sections:", err));
    } else {
      setSectionData([]);
    }
  }, [basicDetails?.id]);

  const fetchSectionData = useMemo(() => (endpoint, setter) => {
    if (!basicDetails?.id) return;
    axios
      .get(`${API_URL}project/${basicDetails.id}/${endpoint}`)
      .then((r) => setter(r.data.data || null))
      .catch((err) => console.error(`Error fetching ${endpoint}:`, err));
  }, [basicDetails?.id]);

  useEffect(() => {
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



  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong: {error.message}</div>;
  if (!basicDetails) return <PageNotFound />;

  return (
    <React.Fragment key={slug}>
      <HeroSection
        desktopBg={basicDetails.feature_image}
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
                  descriptionText={<div dangerouslySetInnerHTML={{ __html: dataItem.description }} />}
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
                  headingText={dataItem.heading} />
              );


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

            default:
              return null;
          }
        })}
    </React.Fragment>
  );
}

export default Microsite;
