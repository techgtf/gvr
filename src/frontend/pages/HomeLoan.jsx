import React, { lazy } from 'react'
import * as CONFIG from "../../../config"
import { Helmet } from 'react-helmet'
const HeroSectionAboutUs = lazy(() => import('../components/aboutUs/HeroSectionAboutUs'))
const HomeLoanIndex = lazy(() => import('../components/homeLoan'))


export default function HomeLoan() {
    return (
        <>
            <Helmet>
                <title>Great Value Realty Home Loans | Easy Financing for Your Dream Home</title>
                <meta name="keywords" content="Great Value Realty home loans, real estate financing, mortgage assistance, home loan options, property financing, easy home loans" />
                <meta name="description" content="Explore home loan options with Great Value Realty. Get expert guidance on financing solutions to make your dream home a reality with hassle-free loan assistance." />
                <meta name="google-site-verification" content="Ma-arPYmEe7u20NJ-jsuiHjD1p2HSShiEPD4m8s3bL8" />
                <link rel="canonical" href="https://greatvaluerealty.com/home-loan" />
                <meta name="distribution" content="Global" />
                <meta name="Language" content="English" />
                <meta name="doc-type" content="Public" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Great Value Realty Home Loans | Easy Financing for Your Dream Home" />
                <meta name="googlebot" content="all, index, follow" />
                <meta name="YahooSeeker" content="all, index, follow" />
                <meta name="msnbot" content="all, index, follow" />
                <meta name="HandheldFriendly" content="true" />
                <meta name="revisit-after" content="1 day" />
                <meta name="rating" content="general" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Great Value Realty Home Loans | Easy Financing for Your Dream Home" />
                <meta property="og:description" content="Explore home loan options with Great Value Realty. Get expert guidance on financing solutions to make your dream home a reality with hassle-free loan assistance." />
                <meta property="og:url" content="https://greatvaluerealty.com/home-loan" />
                <meta property="og:site_name" content="Great Value Realty" />
                <meta property="og:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@GreatValueGroup" />
                <meta name="twitter:title" content="Great Value Realty Home Loans | Easy Financing for Your Dream Home" />
                <meta name="twitter:description" content="Explore home loan options with Great Value Realty. Get expert guidance on financing solutions to make your dream home a reality with hassle-free loan assistance." />
                <meta name="twitter:creator" content="@GreatValueGroup" />
                <meta name="twitter:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />

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
