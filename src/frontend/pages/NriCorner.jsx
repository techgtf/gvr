import React from 'react';
import NriCornerIndex from '../components/NriCorner';
import HeroSectionAboutUs from "../components/aboutUs/HeroSectionAboutUs";
import * as CONFIG from "../../../config";
import Loader from "../../common/Loader/loader";
import { Helmet } from 'react-helmet';
import useFetchData from '../apiHooks/useFetchData';

export default function NriCorner() {
    // Fetch FAQs & Banner Data
    const { data: faqs, loading: faqLoading, error: faqError } = useFetchData("faqs", "nri-corner");
    const { data: banner, loading: bannerLoading, error: bannerError } = useFetchData("page-sections", "11");

    // Handle Loading and Errors
    if (faqLoading || bannerLoading) return <Loader />;
    if (faqError) return <p className="text-red-500">Error loading FAQs: {faqError}</p>;
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
                <title>Great Value Realty NRI Corner | Exclusive Real Estate Solutions for NRIs</title>
                <meta name="keywords" content="Great Value Realty NRI property, NRI real estate investment, buy property in India from abroad, real estate for NRIs, Indian property for NRIs" />
                <meta name="description" content="Discover seamless property investment opportunities in India with Great Value Realty's NRI Corner. Get expert guidance on legalities, home buying, and real estate solutions tailored for NRIs." />
                <meta name="google-site-verification" content="Ma-arPYmEe7u20NJ-jsuiHjD1p2HSShiEPD4m8s3bL8" />
                <link rel="canonical" href="https://greatvaluerealty.com/nri-corner" />
                <meta name="distribution" content="Global" />
                <meta name="Language" content="English" />
                <meta name="doc-type" content="Public" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Great Value Realty NRI Corner | Exclusive Real Estate Solutions for NRIs" />
                <meta name="googlebot" content="all, index, follow" />
                <meta name="YahooSeeker" content="all, index, follow" />
                <meta name="msnbot" content="all, index, follow" />
                <meta name="HandheldFriendly" content="true" />
                <meta name="revisit-after" content="1 day" />
                <meta name="rating" content="general" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Great Value Realty NRI Corner | Exclusive Real Estate Solutions for NRIs" />
                <meta property="og:description" content="Discover seamless property investment opportunities in India with Great Value Realty's NRI Corner. Get expert guidance on legalities, home buying, and real estate solutions tailored for NRIs." />
                <meta property="og:url" content="https://greatvaluerealty.com/nri-corner" />
                <meta property="og:site_name" content="Great Value Realty" />
                <meta property="og:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@GreatValueGroup" />
                <meta name="twitter:title" content="Great Value Realty NRI Corner | Exclusive Real Estate Solutions for NRIs" />
                <meta name="twitter:description" content="Discover seamless property investment opportunities in India with Great Value Realty's NRI Corner. Get expert guidance on legalities, home buying, and real estate solutions tailored for NRIs." />
                <meta name="twitter:creator" content="@GreatValueGroup" />
                <meta name="twitter:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />

            </Helmet>
            <div className="nri_corner bg-[#EFF5FA]">
                <HeroSectionAboutUs
                    img={bannerImage}
                    heading={bannerHeading}
                    extraClassesImg="objectRight"
                />
                <NriCornerIndex data={faqs} />
            </div>
        </>
    );
}
