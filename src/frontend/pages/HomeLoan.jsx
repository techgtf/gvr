import React, { lazy } from 'react'
import * as CONFIG from "../../../config"
import { Helmet } from 'react-helmet'
import useFetchData from '../apiHooks/useFetchData'
import Loader from '../../common/Loader/loader'
const HeroSectionAboutUs = lazy(() => import('../components/aboutUs/HeroSectionAboutUs'))
const HomeLoanIndex = lazy(() => import('../components/homeLoan'))


export default function HomeLoan() {
    const { data: pageData, loading: pageDataLoading, error: pageDataError } = useFetchData("page-sections", "7");

    // Handle Loading and Errors
    if (pageDataLoading) return <Loader />;
    if (pageDataError) return <p className="text-red-500">Error loading Home Loan Banner: {pageDataError}</p>;

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

    console.log(overview,"overview home loan");
    return (
        <>
            <Helmet>
                <title>Great Value Realty | Home-loan</title>
            </Helmet>
            <div className='home_loan bg-[#EFF5FA]'>
                <HeroSectionAboutUs
                    img={banner.image}
                    heading={banner.heading}
                    extraClassesImg={"objectRight"}
                />
                <HomeLoanIndex data={overview}/>
            </div>
        </>
    )
}
