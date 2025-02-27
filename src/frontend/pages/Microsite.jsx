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
import Specifications from "../components/microsite/HighlightsSpecifications/Specifications";
import Highlights from "../components/microsite/HighlightsSpecifications/Highlights";


function Microsite() {
  const location = useLocation();
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mainData, setMainData] = useState(null);
  const [sectionData, setSectionData] = useState(null);
  const [amenitiesData, setAmenitiesData] = useState(null);
  const [priceData, setPriceData] = useState(null);
  const [highlights, setHighlights] = useState(null);
  const [specifications, setSpecifications] = useState(null);

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
      fetchSectionData('highlights', setHighlights);
    }
    if (sectionData.some((item) => item.section_type === '5')) { // get specifications
      fetchSectionData('specifications', setSpecifications);
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
            case "1": // About Us
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

            case "2": // Amenities
              return (
                <Amentities
                  key={dataItem.id}
                  headingText={dataItem.heading}
                  AmentitiesData={amenitiesData}
                />
              );

            case "3": // PriceList
              return (
                <PriceList
                  priceListData={priceData}
                  headingText={dataItem.heading} />
              );

            // case "4": // Highlights
            // case "5": // Specifications
            //   if (dataItem.section_type === "4") {
            //     // Fetch highlights data
            //     axios.get(`${API_URL}project/${basicDetails.id}/highlights`)
            //       .then((r) => setHighlights(r.data.data));
            //   } else {
            //     // Fetch specifications data
            //     axios.get(`${API_URL}project/${basicDetails.id}/specifications`)
            //       .then((r) => setSpecifications(r.data.data));
            //   }

            //   return (
            //     <HighlightsSpecifications
            //       key={dataItem.id}
            //       highlightsComponent={
            //         dataItem.section_type === "4" ? () => <Highlights title={dataItem.heading}  /> : null
            //       }
            //       specificationsComponent={
            //         dataItem.section_type === "5" ? () => <Specifications title={dataItem.heading} /> : null
            //       }
            //     />
            //   );

            default:
              return null;
          }
        })}


      {/* 
        
        <HighlightsSpecifications
                    key={dataItem.id}
                    highlightsComponent={() => <Highlights
                      title={dataItem.heading}
                      highlights={highlights} />}

                    specificationsComponent={() => <Specifications
                      title={dataItem.heading}
                      specifications={specifications}
                    />}
        */}


      {/* 

      <Plans masterPlanData={masterPlanData} unitData={unitData} />

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
  );
}

export default Microsite;
