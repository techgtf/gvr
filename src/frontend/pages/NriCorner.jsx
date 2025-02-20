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

  
    return (
        <>
            <Helmet>
                <title>Great Value Realty | NRI-Corner</title>
            </Helmet>
            <div className='nri_corner bg-[#EFF5FA]'>
                <HeroSectionAboutUs
                    img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/nri-corner/nri-banner.webp`}
                    heading={"NRI Corner"}
                    extraClassesImg={"objectRight"}
                />
                <NriCornerIndex data={data} />
            </div>
        </>
    )
}
