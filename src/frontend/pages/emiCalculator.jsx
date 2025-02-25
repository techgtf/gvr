import React from 'react'
import Index from '../components/emiCalculator'
import * as CONFIG from "../../../config";
import HeroSectionAboutUs from '../components/aboutUs/HeroSectionAboutUs';
import { Helmet } from 'react-helmet';
import useFetchData from '../apiHooks/useFetchData';
import Loader from '../../common/Loader/loader';

export default function miECalculator() {
    const { data: pageData, loading: pageDataLoading, error: pageDataError } = useFetchData("page-sections", "14");
  

    // 🔹 Extract Banner Data Safely
    const extractPageData = (pageData) => {
        if (!pageData) return { banner: { image: "", heading: "Default Heading" }, overview: {} };
    
        const pageValues = Object.values(pageData); 
        return {
            banner: {
                image: `${CONFIG.VITE_APP_STORAGE}${pageValues[0]?.image || ""}`,
                heading: pageValues[0]?.heading || "Default Heading"
            }
        };
    };
    
    const { banner} = extractPageData(pageData);
        // Handle Loading and Errors
        if (pageDataLoading) return <Loader />;
        if (pageDataError) return <p className="text-red-500">Error loading Banner: {pageDataError}</p>;
      
    return (
        <>
            <Helmet>
                <title>Great Value Realty | Emi-Calculator</title>
            </Helmet>
            <HeroSectionAboutUs
                img={banner.image}
                heading={"EMI CALCULATOR"}
            />
            <Index />
        </>
    )
}

