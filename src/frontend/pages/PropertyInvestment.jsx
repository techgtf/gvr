import React, { lazy } from 'react'
import * as CONFIG from "../../../config"
const HeroSectionAboutUs = lazy(() => import('../components/aboutUs/HeroSectionAboutUs'))
const PropertyInvestmentIndex = lazy(() => import('../components/propertyInvestment'))


export default function Index() {
    return (
        <div className='area_converter bg-[#EFF5FA]'>
            <HeroSectionAboutUs
                img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/property-investment/banner.webp`}
                heading={"Property Investment"}
                breadCrumb={"Home  -  Property Investment"}
                extraClassesImg={"objectRight"}
            />
            <PropertyInvestmentIndex />
        </div>
    )
}
