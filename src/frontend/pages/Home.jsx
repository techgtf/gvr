import React, { lazy } from 'react'
const Hero = lazy(() => import('../components/heroSection/hero'))
const OverviewSection = lazy(() => import('../components/overviewSection/overviewSection'))
const Projects = lazy(() => import('../components/projectSection/Projects'))
const Verticals = lazy(() => import('../components/vertcalSection/verticals'))
const Testimonial = lazy(() => import('../components/testimonialSection/testimonial'))
const MediaCoverage = lazy(() => import('../components/MediaCoverage/MediaCoverage'))
const BlogSection = lazy(() => import('../components/BlogSection/BlogSection'))
import { BASE_ROOT } from '../../../config'

export default function Home() {
    return (

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
    )
}
