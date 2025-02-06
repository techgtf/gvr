import React, { lazy } from 'react'
import * as CONFIG from "../../../config"
const HeroSectionAboutUs = lazy(() => import('../components/aboutUs/HeroSectionAboutUs'))
const AreaConverterIndex = lazy(() => import('../components/areaConverter'))


export default function AreaConverter() {
    return (
        <div className='area_converter lg:bg-[#EFF5FA]'>
            <HeroSectionAboutUs
                img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/area-converter/banner.webp`}
                heading={"Area Converter"}
                breadCrumb={"Home  -  Area Converter"}
                extraClassesImg={"objectRight"}
            />
            <AreaConverterIndex />
        </div>
    )
}
