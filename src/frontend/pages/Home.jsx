import React, { lazy, useEffect, useRef } from 'react'
import PriceList from '../components/microsite/PriceList'
const Hero = lazy(() => import('../components/heroSection/hero'))
const OverviewSection = lazy(() => import('../components/overviewSection/overviewSection'))
const Projects = lazy(() => import('../components/projectSection/Projects'))
const Verticals = lazy(() => import('../components/vertcalSection/verticals'))
const Testimonial = lazy(() => import('../components/testimonialSection/testimonial'))
const MediaCoverage = lazy(() => import('../components/MediaCoverage/MediaCoverage'))
const BlogSection = lazy(() => import('../components/BlogSection/BlogSection'))


export default function Home() {


    return (
        <div className='homepage'>
            <Hero />
          
            <OverviewSection
                heading={'ELEVATING THE BEAUTY & BUSINESS OF REAL ESTATE'}
                paragraph={'The genesis of Great Value Industries dates to 1970 when the group set up its glassware division. In 1990 GVIL diversified into together supplying quality packaging products to prestigious.'}
            />
            <Projects />
            <Verticals />
            <Testimonial />
            <MediaCoverage />
            <BlogSection />
        </div>
    )
}
