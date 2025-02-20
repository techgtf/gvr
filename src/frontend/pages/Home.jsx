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
    return (

        <>
            <Helmet>
                <title>Great Value Realty | Home</title>
                <meta name="keywords"
                    content="Great Value realty, Great Value Sharanam Noida, Great Value Anandam Noida, Sector 107 Noida,  Great Value Anandam, Great Value Sharanam Sector 107 Noida" />
                <meta name="description"
                    content="At Great Value Realty, we go beyond building homes—we build trust, deliver exceptional value, and create lasting experiences The Real Estate Projects." />
                <meta name="google-site-verification" content="Ma-arPYmEe7u20NJ-jsuiHjD1p2HSShiEPD4m8s3bL8" />
                <link rel="canonical" href="https://greatvaluerealty.com/" />
                <meta name="distribution" content="Global" />
                <meta name="Language" content="English" />
                <meta name="doc-type" content="Public" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Great Value Realty Noida" />
                <meta name="googlebot" content="all, index, follow" />
                <meta name="YahooSeeker" content="all, index, follow" />
                <meta name="msnbot" content="all, index, follow" />
                <meta name="HandheldFriendly" content="true" />
                <meta name="revisit-after" content="1 days" />
                <meta name="rating" content="safe for kids" />
                <meta name="expires" content="never" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Great Value Realty | Home" />
                <meta property="og:description"
                    content="At Great Value Realty, we go beyond building homes—we build trust, deliver exceptional value, and create lasting experiences.The Real Estate Projects." />
                <meta property="og:url" content="https://greatvaluerealty.com/" />
                <meta property="og:site_name" content="Great Value Realty Noida" />
                <meta property="og:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@GreatValueGroup" />
                <meta name="twitter:title" content="Great Value Realty | Home" />
                <meta name="twitter:description"
                    content="At Great Value Realty, we go beyond building homes—we build trust, deliver exceptional value, and create lasting experiences. The Real Estate Projects." />
                <meta name="twitter:creator" content="@GreatValueGroup" />
                <meta name="twitter:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-FNK3GPJG5D"></script>
                <script>
                    {`window.dataLayer = window.dataLayer || [];
                    function gtag() {dataLayer.push(arguments); }
                    gtag('js', new Date());

                    gtag('config', 'G-FNK3GPJG5D');`}
                </script>
            </Helmet>
            <div className='homepage'>
                <Hero />

                <OverviewSection
                    heading={' Creating A Legacy Of True Abundance'}
                    paragraph={'At Great Value Realty, we create more than just homes—we cultivate trust, deliver unmatched value, and craft lasting experiences. Since our inception in 1970, the Great Value Group has transformed industries, managing assets exceeding ₹1,300 crores. Guided by a vision rooted in innovation, integrity, and ambition, we are dedicated to building timeless excellence, enriching lives, and shaping a brighter future.'}
                    showKnowMore={true}
                    pageLink={`${BASE_ROOT}about-us`}
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
