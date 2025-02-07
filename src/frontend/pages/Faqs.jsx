import React, { lazy } from 'react'
import * as CONFIG from "../../../config"
const HeroSectionAboutUs = lazy(() => import('../components/aboutUs/HeroSectionAboutUs'))
const FaqIndex = lazy(() => import('../components/Faq'))


export default function Faqs() {
    return (
        <div className='faqs bg-[#EFF5FA]'>
            <HeroSectionAboutUs
                img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/faq/banner.webp`}
                heading={"Faqs"}
                breadCrumb={"Home  -  faq"}
                extraClassesImg={"objectRight"}
            />
            <FaqIndex />
        </div>
    )
}
