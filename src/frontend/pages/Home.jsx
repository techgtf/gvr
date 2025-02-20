import React, { lazy, useEffect } from 'react'
const Hero = lazy(() => import('../components/heroSection/hero'))
const OverviewSection = lazy(() => import('../components/overviewSection/overviewSection'))
const Projects = lazy(() => import('../components/projectSection/Projects'))
const Verticals = lazy(() => import('../components/vertcalSection/verticals'))
const Testimonial = lazy(() => import('../components/testimonialSection/testimonial'))
const MediaCoverage = lazy(() => import('../components/MediaCoverage/MediaCoverage'))
const BlogSection = lazy(() => import('../components/BlogSection/BlogSection'))
import { BASE_ROOT } from '../../../config'
import { Helmet } from 'react-helmet'

export default function Home() {

    // const arr = [12, 5, 7, 7, 6, 4, 58, 8];

    // function giveUniqNumber(arr) {
    //     if (arr.length < 0) return;
    //     let uniqeArr = arr[0]
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[i] === uniqeArr) { 
    //             uniqeArr
    //         }
    //     }
    // }


    return (
        <>
            <Helmet>
                <title> Great Value Realty | Your Trusted Real Estate Partner</title>
                <meta name="keywords" content="Great Value realty, Great Value Sharanam Noida, Great Value Anandam Noida, Sector 107 Noida,  Great Value Anandam, Great Value Sharanam Sector 107 Noida, Best Casa Uday Delhi, Great Value Realty Vilasa, Best Sanctuary residential project sector 105 " />
                <meta name="description" content="At Great Value Realty, we go beyond building homes—we build trust, deliver exceptional value, and create lasting experiences." />
                <meta name="google-site-verification" content="Ma-arPYmEe7u20NJ-jsuiHjD1p2HSShiEPD4m8s3bL8" />
                <meta name="distribution" content="Global" />
                <meta name="Language" content="English" />
                <meta name="doc-type" content="Public" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Great Value realty Noida" />
                <meta name="googlebot" content="all, index, follow" />
                <meta name="YahooSeeker" content="all, index, follow" />
                <meta name="msnbot" content="all, index, follow" />
                <meta name="HandheldFriendly" content="true" />
                <meta name="revisit-after" content="1 days" />
                <meta name="rating" content="safe for kids" />
                <meta name="expires" content="never" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Great Value Realty | Home" />
                <meta property="og:description" content="At Great Value Realty, we go beyond building homes—we build trust, deliver exceptional value, and create lasting experiences." />
                <meta property="og:url" content="https://greatvaluerealty.com/" />
                <meta property="og:site_name" content="Great Value Realty Noida" />
                <meta property="og:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />
                <link rel="canonical" href="https://greatvaluerealty.com/" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@GreatValueGroup" />
                <meta name="twitter:title" content="Great Value Realty| Home" />
                <meta name="twitter:description" content="At Great Value Realty, we go beyond building homes—we build trust, deliver exceptional value, and create lasting experiences." />
                <meta name="twitter:creator" content="@GreatValueGroup" />
                <meta name="twitter:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />
                {/* <!--End of Twitter TH data --> */}

                <script type="application/ld+json">
                    {`
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Great Value Realty",
                    "alternateName": "GVR",
                    "url": "https://greatvaluerealty.com/",
                    "logo": "https://greatvaluerealty.com/assets/frontend/images/logo.png",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91 7777079770",
                        "contactType": "customer service",
                        "areaServed": "IN",
                        "availableLanguage": "en"
                    }`}
                </script>

                <script type="application/ld+json" class="schemantra">
                    {`
                    "@context": "https://schema.org",
                    "@type": "RealEstateAgent",
                    "@id": "RealEstateAgent",
                    "actionableFeedbackPolicy": "https://greatvaluerealty.com/",
                    "address": "DSC - 319, DLF South Court, Saket New Delhi - 110017",
                    "alternateName": "GVR",
                    "description": "Real Estate Developer",
                    "image": "https://greatvaluerealty.com/assets/frontend/images/logo.png",
                    "keywords": "https://greatvaluerealty.com/",
                    "knowsLanguage": "English",
                    "legalName": "Great Value Realty",
                    "location": "India",
                    "logo": "https://greatvaluerealty.com/assets/frontend/images/logo.png",
                    "longitude": "917777079770"F
                    `}
                </script>
            </Helmet>
            <div className='homepage'>
                <Hero />

                <OverviewSection
                    heading={' Creating A Legacy Of True Abundance'}
                    paragraph={'At Great Value Realty, we create more than just homes—we cultivate trust, deliver unmatched value, and craft lasting experiences. Since our inception in 1970, the Great Value Group has transformed industries, managing assets exceeding ₹1,300 crores. Guided by a vision rooted in innovation, integrity, and ambition, we are dedicated to building timeless excellence, enriching lives, and shaping a brighter future.'}
                    showKnowMore={true}
                    pageLink={`${BASE_ROOT}about-us`}
                    tag="h1"
                />
                <Projects />
                <Verticals />
                <Testimonial />
                <MediaCoverage />
                <BlogSection />
            </div>
        </>
    )
}
