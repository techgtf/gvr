import React, { lazy } from 'react'
import * as CONFIG from "../../../config"
import { Helmet } from 'react-helmet'
import useFetchData from '../apiHooks/useFetchData'
import Loader from '../../common/Loader/loader'
const HeroSectionAboutUs = lazy(() => import('../components/aboutUs/HeroSectionAboutUs'))
const AreaConverterIndex = lazy(() => import('../components/areaConverter'))


export default function AreaConverter() {
    const { data: pageData, loading: pageDataLoading, error: pageDataError } = useFetchData("page-sections", "9");
  
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
            }
        };
    };
    
    const { banner} = extractPageData(pageData);
    return (
        <>
            <Helmet>
                <title>Great Value Realty | Area Converter</title>
            </Helmet>
            <div className='area_converter lg:bg-[#EFF5FA]'>
                <HeroSectionAboutUs
                    img={banner.image}
                    heading={banner.heading}
                    extraClassesImg={"objectRight"}
                />
                <AreaConverterIndex />
            </div>
        </>
    )
}
