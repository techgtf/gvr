import React, { lazy } from 'react'
import * as CONFIG from "../../../config"
const HeroSectionAboutUs = lazy(() => import('../components/aboutUs/HeroSectionAboutUs'))
const HomeLoanIndex = lazy(() => import('../components/homeLoan'))


export default function HomeLoan() {
    return (
        <div className='area_converter lg:bg-[#EFF5FA]'>
            <HeroSectionAboutUs
                img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home-loan/banner.webp`}
                heading={"Home Loan"}
                breadCrumb={"Home  -  Home Loan"}
                extraClassesImg={"objectRight"}
            />
            <HomeLoanIndex />
        </div>
    )
}
