import React from "react";
import HeroSection from "../components/CSR/HeroSection";
import OverviewSection from "../components/overviewSection/overviewSection";
import CareCommunities from "../components/CSR/CC/CareCommunities";
import CharityInitiatives from "../components/CSR/CharityInitiatives/CharityInitiatives";
import SocialDetails from "../components/CSR/SocialDetails/SocialDetails";
import { Helmet } from "react-helmet";
import useFetchData from "../apiHooks/useFetchData";
import Loader from "../../common/Loader/loader";
import * as CONFIG from "../../../config";

function Csr() {
  const { data: pageData, loading: pageLoading, error: pageError } = useFetchData("page-sections", "6");

  // Handle Loading and Errors
  if (pageLoading) return <Loader />;
  if (pageError)
    return <p className="text-red-500">Error loading Banner: {pageError}</p>;

  // 🔹 Extract Banner Data Safely
  const extractBannerData = (pageData) => {
    // debugger
    if (!pageData) return { csrBanner: null, csrOverview: null };

    // const pageData = Object.values(pageData)?.[0] || {};

    return {
      esgBanner: pageData['esg-banner'],
      esgOverview: pageData['esg-overview'],
      esgSocial: pageData['esg-social'],
      esgEnvironment: pageData['esg-environment-center'],
      esgGovernance: pageData['esg-governance-center'],
    };
  };

  const {esgBanner, esgOverview, esgSocial, esgEnvironment, esgGovernance} = extractBannerData(pageData);

  return (
    <>
      <Helmet>
        <title>Great Value Realty | CSR</title>
      </Helmet>
      <HeroSection />

      <OverviewSection
        heading={
          esgOverview?.heading || 'ESG'
        }
        paragraph={
          esgOverview?.description || null
        }
        showKnowMore={false}
      />
      <SocialDetails data={esgSocial} />
      {/* <CareCommunities/> */}
      <CharityInitiatives />
    </>
  );
}

export default Csr;
