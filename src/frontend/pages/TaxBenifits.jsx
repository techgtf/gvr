import React from 'react'
import TaxBenifitIndex from '../components/TaxBenifit'
import HeroSectionAboutUs from "../components/aboutUs/HeroSectionAboutUs"
import * as CONFIG from "../../../config"
import { Helmet } from 'react-helmet'
import Loader from "../../common/Loader/loader";
import useFetchData from '../apiHooks/useFetchData'


export default function TaxBenifits() {
    const { data: pageData, loading: pageDataLoading, error: pageDataError } = useFetchData("page-sections", "8");

    // Handle Loading and Errors
    if (pageDataLoading) return <Loader />;
    if (pageDataError) return <p className="text-red-500">Error loading Banner: {pageDataError}</p>;

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

    return (
        <>
            <Helmet>
                <title>Great Value Realty | Tax-benifits</title>
            </Helmet>
            <div className='tax_benifits bg-[#EFF5FA]'>
                <HeroSectionAboutUs
                    img={banner.image}
                    heading={banner.heading}
                    extraClassesImg={"objectRight"}
                />
                <TaxBenifitIndex overviewData={overview}/>
            </div>
        </>

    )
}
