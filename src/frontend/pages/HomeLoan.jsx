import React, { lazy } from 'react'
import * as CONFIG from "../../../config"
import { Helmet } from 'react-helmet'
const HeroSectionAboutUs = lazy(() => import('../components/aboutUs/HeroSectionAboutUs'))
const HomeLoanIndex = lazy(() => import('../components/homeLoan'))


export default function HomeLoan() {
    return (
        <>
            <Helmet>
                <title>Great Value Realty | Home-loan</title>
            </Helmet>
            <div className='home_loan bg-[#EFF5FA]'>
                <HeroSectionAboutUs
                    img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home-loan/banner.webp`}
                    heading={"Home Loan"}
                    extraClassesImg={"objectRight"}
                />
                <HomeLoanIndex />
            </div>
        </>
    )
}
