import React, { lazy } from 'react'
import * as CONFIG from "../../../config"
import { Helmet } from 'react-helmet'
import useFetchData from '../apiHooks/useFetchData'
import Loader from '../../common/Loader/loader'
const HeroSectionAboutUs = lazy(() => import('../components/aboutUs/HeroSectionAboutUs'))
const FaqIndex = lazy(() => import('../components/Faq'))


export default function Faqs() {
    const { data: banner, loading: bannerLoading, error: bannerError } = useFetchData("page-sections", "13");

    // Handle Loading and Errors
    if (bannerLoading) return <Loader />;
    if (bannerError) return <p className="text-red-500">Error loading Banner: {bannerError}</p>;

    // 🔹 Extract Banner Data Safely
    const extractBannerData = (banner) => {
        if (!banner) return { image: "", heading: "Default Heading" };
        const bannerData = Object.values(banner)?.[0] || {}; 
        return {
            image: `${bannerData.image || ""}`,
            heading: bannerData.heading || "Default Heading",
            image_alt: bannerData.image_alt || "default alt tag"
        };
    };

    const { image: bannerImage, heading: bannerHeading, image_alt } = extractBannerData(banner);


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
                    alt={image_alt}
                />
                <FaqIndex />
            </div>
        </>
    )
}
