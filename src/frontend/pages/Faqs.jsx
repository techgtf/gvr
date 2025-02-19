import React, { lazy } from 'react'
import * as CONFIG from "../../../config"
import { Helmet } from 'react-helmet'
const HeroSectionAboutUs = lazy(() => import('../components/aboutUs/HeroSectionAboutUs'))
const FaqIndex = lazy(() => import('../components/Faq'))


export default function Faqs() {
    return (
        <>
            <Helmet>
                <title>Great Value Realty | Faqs</title>
            </Helmet>
            <div className='faqs bg-[#EFF5FA]'>
                <HeroSectionAboutUs
                    img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/faq/banner.webp`}
                    heading={"Faqs"}
                    breadCrumb={"Home  -  faq"}
                    extraClassesImg={"objectRight"}
                />
                <FaqIndex />
            </div>
        </>
    )
}
