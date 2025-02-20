import React from 'react'
import Index from '../components/emiCalculator'
import * as CONFIG from "../../../config";
import HeroSectionAboutUs from '../components/aboutUs/HeroSectionAboutUs';
import { Helmet } from 'react-helmet';

export default function miECalculator() {
    return (
        <>
            <Helmet>
                <title>Great Value Realty | Emi-Calculator</title>
            </Helmet>
            <HeroSectionAboutUs
                img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/emi/emi_cal.webp`}
                heading={"EMI CALCULATOR"}
            />
            <Index />
        </>
    )
}

