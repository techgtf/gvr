import React from 'react'
import TaxBenifitIndex from '../components/TaxBenifit'
import HeroSectionAboutUs from "../components/aboutUs/HeroSectionAboutUs"
import * as CONFIG from "../../../config"
import { Helmet } from 'react-helmet'

export default function TaxBenifits() {

    return (
        <>
            <Helmet>
                <title>Great Value Realty | Tax-benifits</title>
            </Helmet>
            <div className='tax_benifits bg-[#EFF5FA]'>
                <HeroSectionAboutUs
                    img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/taxBenifit/tax_benifits.webp`}
                    heading={"Tax Benefits"}
                    extraClassesImg={"objectRight"}
                />
                <TaxBenifitIndex />
            </div>
        </>

    )
}
