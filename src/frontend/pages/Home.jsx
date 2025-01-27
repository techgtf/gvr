import React, { lazy } from 'react'
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
        <>
            <Hero />
            <OverviewSection />
            <Projects />
            <Verticals />
            <Testimonial />
            <MediaCoverage />
            <BlogSection />
        </>
    )
}
