import React from 'react'
import TaxBenifitIndex from '../components/TaxBenifit'
import HeroSectionAboutUs from "../components/aboutUs/HeroSectionAboutUs"
import * as CONFIG from "../../../config"
import { Helmet } from 'react-helmet'

export default function TaxBenifits() {

    return (
        <>
            <Helmet>
                <title>Great Value Realty Tax Benefits | Maximize Savings on Your Property Investment</title>
                <meta name="keywords" content="Great Value Realty tax benefits, real estate tax savings, home loan deductions, property tax incentives, investment tax benefits, real estate tax advantages" />
                <meta name="description" content="Discover tax benefits on real estate investments with Great Value Realty. Learn how to maximize savings and take advantage of home loan tax deductions and property incentives." />
                <meta name="google-site-verification" content="Ma-arPYmEe7u20NJ-jsuiHjD1p2HSShiEPD4m8s3bL8" />
                <link rel="canonical" href="https://greatvaluerealty.com/tax-benefits" />
                <meta name="distribution" content="Global" />
                <meta name="Language" content="English" />
                <meta name="doc-type" content="Public" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Great Value Realty Tax Benefits | Maximize Savings on Your Property Investment" />
                <meta name="googlebot" content="all, index, follow" />
                <meta name="YahooSeeker" content="all, index, follow" />
                <meta name="msnbot" content="all, index, follow" />
                <meta name="HandheldFriendly" content="true" />
                <meta name="revisit-after" content="1 day" />
                <meta name="rating" content="general" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Great Value Realty Tax Benefits | Maximize Savings on Your Property Investment" />
                <meta property="og:description" content="Discover tax benefits on real estate investments with Great Value Realty. Learn how to maximize savings and take advantage of home loan tax deductions and property incentives." />
                <meta property="og:url" content="https://greatvaluerealty.com/tax-benefits" />
                <meta property="og:site_name" content="Great Value Realty" />
                <meta property="og:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@GreatValueGroup" />
                <meta name="twitter:title" content="Great Value Realty Tax Benefits | Maximize Savings on Your Property Investment" />
                <meta name="twitter:description" content="Discover tax benefits on real estate investments with Great Value Realty. Learn how to maximize savings and take advantage of home loan tax deductions and property incentives." />
                <meta name="twitter:creator" content="@GreatValueGroup" />
                <meta name="twitter:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />

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
