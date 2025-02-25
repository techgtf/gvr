import React from 'react'
import Index from '../components/emiCalculator'
import * as CONFIG from "../../../config";
import HeroSectionAboutUs from '../components/aboutUs/HeroSectionAboutUs';
import { Helmet } from 'react-helmet';

export default function miECalculator() {
    return (
        <>
            <Helmet>
                <title>Great Value Realty EMI Calculator | Calculate Your Home Loan EMI Instantly</title>
                <meta name="keywords" content="Great Value Realty EMI calculator, home loan EMI calculator, real estate loan calculator, mortgage EMI calculator, property loan calculator" />
                <meta name="description" content="Use Great Value Realty’s EMI Calculator to estimate your home loan EMIs instantly. Plan your real estate investment smartly with accurate and hassle-free calculations." />
                <meta name="google-site-verification" content="Ma-arPYmEe7u20NJ-jsuiHjD1p2HSShiEPD4m8s3bL8" />
                <link rel="canonical" href="https://greatvaluerealty.com/emi-calculator" />
                <meta name="distribution" content="Global" />
                <meta name="Language" content="English" />
                <meta name="doc-type" content="Public" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Great Value Realty EMI Calculator | Calculate Your Home Loan EMI Instantly" />
                <meta name="googlebot" content="all, index, follow" />
                <meta name="YahooSeeker" content="all, index, follow" />
                <meta name="msnbot" content="all, index, follow" />
                <meta name="HandheldFriendly" content="true" />
                <meta name="revisit-after" content="1 day" />
                <meta name="rating" content="general" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Great Value Realty EMI Calculator | Calculate Your Home Loan EMI Instantly" />
                <meta property="og:description" content="Use Great Value Realty’s EMI Calculator to estimate your home loan EMIs instantly. Plan your real estate investment smartly with accurate and hassle-free calculations." />
                <meta property="og:url" content="https://greatvaluerealty.com/emi-calculator" />
                <meta property="og:site_name" content="Great Value Realty" />
                <meta property="og:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@GreatValueGroup" />
                <meta name="twitter:title" content="Great Value Realty EMI Calculator | Calculate Your Home Loan EMI Instantly" />
                <meta name="twitter:description" content="Use Great Value Realty’s EMI Calculator to estimate your home loan EMIs instantly. Plan your real estate investment smartly with accurate and hassle-free calculations." />
                <meta name="twitter:creator" content="@GreatValueGroup" />
                <meta name="twitter:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />

            </Helmet>
            <HeroSectionAboutUs
                img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/emi/emi_cal.webp`}
                heading={"EMI CALCULATOR"}
            />
            <Index />
        </>
    )
}

