import React, { lazy } from 'react'
import * as CONFIG from "../../../config"
import { Helmet } from 'react-helmet'
import useFetchData from '../apiHooks/useFetchData'
import Loader from '../../common/Loader/loader'
const HeroSectionAboutUs = lazy(() => import('../components/aboutUs/HeroSectionAboutUs'))
const FaqIndex = lazy(() => import('../components/Faq'))


export default function Faqs() {
    const { data: banner, loading: bannerLoading, error: bannerError } = useFetchData("page-sections", "11");

        // Handle Loading and Errors
        if (bannerLoading) return <Loader />;
        if (bannerError) return <p className="text-red-500">Error loading Banner: {bannerError}</p>;
    
        // 🔹 Extract Banner Data Safely
        const extractBannerData = (banner) => {
            if (!banner) return { image: "", heading: "Default Heading" };
            const bannerData = Object.values(banner)?.[0] || {}; 
            return {
                image: `${CONFIG.VITE_APP_STORAGE}${bannerData.image || ""}`,
                heading: bannerData.heading || "Default Heading"
            };
        };
    
        const { image: bannerImage, heading: bannerHeading } = extractBannerData(banner);
    return (
        <>
            <Helmet>
                <title>Great Value Realty | Faqs</title>
            </Helmet>
            <div className='faqs bg-[#EFF5FA]'>
                <HeroSectionAboutUs
                    img={bannerImage}
                    heading={bannerHeading || "Faqs"}
                    extraClassesImg={"objectRight"}
                />
                <FaqIndex />
            </div>
        </>
    )
}
