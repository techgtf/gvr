import React from 'react'
import NriCornerIndex from '../components/NriCorner'
import HeroSectionAboutUs from "../components/aboutUs/HeroSectionAboutUs"
import * as CONFIG from "../../../config"
import { Helmet } from 'react-helmet'


export default function NriCorner() {
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
                <NriCornerIndex />
            </div>
        </>
    )
}
