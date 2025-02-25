import React, { lazy } from 'react'
import * as CONFIG from "../../../config"
import { Helmet } from 'react-helmet'
const HeroSectionAboutUs = lazy(() => import('../components/aboutUs/HeroSectionAboutUs'))
const AreaConverterIndex = lazy(() => import('../components/areaConverter'))


export default function AreaConverter() {
    return (
        <>
            <Helmet>
                <title>Great Value Realty Area Converter | Convert Property Measurements Instantly</title>
                <meta name="keywords" content="Great Value Realty area converter, property area conversion, land measurement calculator, square feet to acres, real estate measurement tool" />
                <meta name="description" content="Easily convert property area measurements with Great Value Realty Area Converter. Convert square feet, acres, meters, and more with accuracy and ease." />
                <meta name="google-site-verification" content="Ma-arPYmEe7u20NJ-jsuiHjD1p2HSShiEPD4m8s3bL8" />
                <link rel="canonical" href="https://greatvaluerealty.com/area-converter" />
                <meta name="distribution" content="Global" />
                <meta name="Language" content="English" />
                <meta name="doc-type" content="Public" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Great Value Realty Area Converter | Convert Property Measurements Instantly" />
                <meta name="googlebot" content="all, index, follow" />
                <meta name="YahooSeeker" content="all, index, follow" />
                <meta name="msnbot" content="all, index, follow" />
                <meta name="HandheldFriendly" content="true" />
                <meta name="revisit-after" content="1 day" />
                <meta name="rating" content="general" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Great Value Realty Area Converter | Convert Property Measurements Instantly" />
                <meta property="og:description" content="Easily convert property area measurements with Great Value Realty's Area Converter. Convert square feet, acres, meters, and more with accuracy and ease." />
                <meta property="og:url" content="https://greatvaluerealty.com/area-converter" />
                <meta property="og:site_name" content="Great Value Realty" />
                <meta property="og:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@GreatValueGroup" />
                <meta name="twitter:title" content="Great Value Realty Area Converter | Convert Property Measurements Instantly" />
                <meta name="twitter:description" content="Easily convert property area measurements with Great Value Realty's Area Converter. Convert square feet, acres, meters, and more with accuracy and ease." />
                <meta name="twitter:creator" content="@GreatValueGroup" />
                <meta name="twitter:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />

            </Helmet>
            <div className='area_converter lg:bg-[#EFF5FA]'>
                <HeroSectionAboutUs
                    img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/area-converter/banner.webp`}
                    heading={"Area Converter"}
                    extraClassesImg={"objectRight"}
                />
                <AreaConverterIndex />
            </div>
        </>
    )
}
