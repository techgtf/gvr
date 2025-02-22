import React from 'react'
import HeroSection from '../components/CSR/HeroSection'
import OverviewSection from '../components/overviewSection/overviewSection'
import CareCommunities from '../components/CSR/CC/CareCommunities'
import CharityInitiatives from '../components/CSR/CharityInitiatives/CharityInitiatives'
import SocialDetails from '../components/CSR/SocialDetails/SocialDetails'
import { Helmet } from 'react-helmet'
import Loader from '../../common/Loader/loader'
import useFetchData from '../apiHooks/useFetchData'
import * as CONFIG from "../../../config";

function Csr() {
  const { data: pageData, loading: pageDataLoading, error: pageDataError } = useFetchData("page-sections", "6");

  // 🔹 Extract Banner Data Safely
  const extractPageData = (pageData) => {
      if (!pageData) return { banner: { image: "", heading: "Default Heading" }, overview: {} };
  
      const pageValues = Object.values(pageData); 
      return {
          banner: {
              image: `${CONFIG.VITE_APP_STORAGE}${pageValues[0]?.image || ""}`,
              heading: pageValues[0]?.heading || "Default Heading"
          },
          overview: pageValues[1] || {} 
      };
  };
  
  const { banner, overview } = extractPageData(pageData);
  // Handle Loading and Errors
  if (pageDataLoading) return <Loader />;
  if (pageDataError) return <p className="text-red-500">Error loading ESG Banner: {pageDataError}</p>;

  return (
    <>
      <Helmet>
        <title>Great Value Realty | CSR</title>
      </Helmet>
      <HeroSection data={banner}/>

      <OverviewSection
        heading={overview.heading}
        paragraph={overview.description}
        showKnowMore={false}
      />
      <SocialDetails />
      {/* <CareCommunities/> */}
      <CharityInitiatives />
    </>
  )
}

export default Csr
