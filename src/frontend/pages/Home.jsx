import React, { lazy } from 'react'
const Hero = lazy(() => import('../components/heroSection/hero'))
const OverviewSection = lazy(() => import('../components/overviewSection/overviewSection'))
const Projects = lazy(() => import('../components/projectSection/Projects'))
const Verticals = lazy(() => import('../components/vertcalSection/verticals'))
const Testimonial = lazy(() => import('../components/testimonialSection/testimonial'))

export default function Home() {
    return (
        <>
            <Hero />
            <OverviewSection />
            <Projects />
            <Verticals />
            <Testimonial />
        </>
    )
}
