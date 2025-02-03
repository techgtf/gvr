import React from 'react'
import Index from '../components/emiCalculator'
import * as CONFIG from "../../../config";
import HeroSectionAboutUs from '../components/aboutUs/HeroSectionAboutUs';

export default function miECalculator() {
    return (
        <>
            <HeroSectionAboutUs
                img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/emi/emi_cal.jpg`}
                heading={"EMI CALCULATOR"}
                breadCrumb={"HOME - EMI CALCULATOR"}
            />
            <Index />
        </>
    )
}

