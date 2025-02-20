<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import NriCornerIndex from '../components/NriCorner'
import HeroSectionAboutUs from "../components/aboutUs/HeroSectionAboutUs"
import * as CONFIG from "../../../config"
import { Helmet } from 'react-helmet'

import axios from "axios";
import Loader from "../../common/Loader/loader";
import { DATA_ASSET_URL } from "../../../config";

export default function NriCorner() {
    const [data, setData,] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios
            .get(`${DATA_ASSET_URL}faqs/nri-corner`)
            .then((response) => {
                setData(response.data.data); // Set the blog data
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <Loader />;
    if (error) return <p>Error: {error}</p>;

    console.log(data, "nri corner")

  
=======
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


>>>>>>> d1980c8 (api with navbar scroll)
    return (
        <>
            <Helmet>
                <title>Great Value Realty | NRI-Corner</title>
            </Helmet>
            <div className="nri_corner bg-[#EFF5FA]">
                <HeroSectionAboutUs
                    img={bannerImage}
                    heading={bannerHeading}
                    extraClassesImg="objectRight"
                />
<<<<<<< HEAD
                <NriCornerIndex data={data} />
=======
                <NriCornerIndex data={faqs} />
>>>>>>> d1980c8 (api with navbar scroll)
            </div>
        </>
    );
}
