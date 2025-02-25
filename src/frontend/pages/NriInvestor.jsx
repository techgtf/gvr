import React, { lazy } from "react";
const HeroSectionAboutUs = lazy(() =>
  import("../components/aboutUs/HeroSectionAboutUs")
);
const NriOverview = lazy(() => import("../components/nriInvestor/Overview"));

import * as CONFIG from "../../../config";
import { Helmet } from "react-helmet";
import useFetchData from "../apiHooks/useFetchData";
import Loader from "../../common/Loader/loader";
const NriInvestor = () => {
  const { data: pageData, loading: pageDataLoading, error: pageDataError } = useFetchData("page-sections", "12");

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
  if (pageDataError) return <p className="text-red-500">Error loading NRI Investor Banner: {pageDataError}</p>;

  return (
    <>
     <Helmet>
        <title>Great Value Realty | NRI-invester</title>
      </Helmet>
      <HeroSectionAboutUs
        img={banner.image}
        heading={banner.heading}
        extraClassesImg={"objectRight"}
      />

      <NriOverview data={overview}/>
    </>
  );
};

export default NriInvestor;
