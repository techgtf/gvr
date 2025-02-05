import React from 'react'
import NriCornerIndex from '../components/NriCorner'
import HeroSectionAboutUs from "../components/aboutUs/HeroSectionAboutUs"
import * as CONFIG from "../../../config"


export default function NriCorner() {
    return (
        <div className='nri_corner bg-[#EFF5FA]'>
            <HeroSectionAboutUs
                img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/nri-corner/nri-banner.webp`}
                heading={"NRI Corner"}
                breadCrumb={"Home  -  NRI Corner"}
                extraClassesImg={"objectRight"}
            />
            <NriCornerIndex />
        </div>
    )
}
