import React from 'react'
import CommonHeading from '../../commonHeading'
import CommonPera from '../../commonPera'
import SlideIn from '../../Animations/SlideIn'
import Camps from './Camps'

function CareCommunities() {
    return (
        <>
            <section className="cc bg-[#EFF5FA] relative px-5 md:px-12 py-10 md:py-14 ">
                <div className="headingWrap lg:max-w-[79%] mx-auto  text-center">
                    <CommonHeading HeadingText="Great Value Healthcare & Education: Caring for Communities" />
                </div>
                <SlideIn duration={2} delay={0.5}>
                    <div className="content lg:max-w-[85%] w-[100%] opacity-70 m-auto lg:mt-[50px] lg:mb-[50px] mb-[20px] text-center">
                        <CommonPera
                            PeraclassName="fontItalic"
                            PeraText="Since 2013, Great Value dispensaries deliver affordable healthcare to South Delhi’s underserved, offering X-ray, pathology, physiotherapy, dental, and eye care with multi-specialist OPD services."
                        />
                    </div>
                </SlideIn>
                <p className="font-semibold w-full text-center">Through impactful camps, they extend care with:</p>
                <Camps/>

                <p className="font-semibold w-full text-center mt-10">Their Education Centres further empower communities, fostering brighter futures for all.</p>

            </section>
        </>
    )
}

export default CareCommunities
