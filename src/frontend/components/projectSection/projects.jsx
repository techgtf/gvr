import React from 'react'
import "./projects.css"
import WaterMarkHeading from '../waterMarkHeading'
import { Link } from 'react-router-dom'
import * as CONFIG from '../../../../config';
import { useImageReveal } from '../useImageReveal';


export default function Projects() {


    const animationConfig = { // passing animation as prop for WaterMarkHeading
        // from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1, duration: 1 },
        from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1, duration: 1 },
    };


    useImageReveal(".reveal")

    const projectData = [
        {
            type: 'residential',
            imgSrc: 'residential.webp',
            Link: `${CONFIG.BASE_ROOT}residential`,
            alt: "Great Value Residential Projects"
        },
        {
            type: 'iconic properties',
            imgSrc: 'latest.webp',
            Link: `${CONFIG.BASE_ROOT}vilasa`,
            alt: "VILASA AT SECTOR 6, SOHNA"
        },
        {
            type: 'commercial',
            imgSrc: 'commercial.webp',
            Link: `${CONFIG.BASE_ROOT}commercial-projects`,
            alt: "Great Value COMMERCIAL PROJECTS"
        },
    ]

    return (
        <div className={`projectSection ${window.innerWidth > 767 ? 'reveal_cut_effect' : 'reveal_fade'} 2xl:pt-[120px] lg:pt-[80px] text-center`}>
            <WaterMarkHeading
                textWaterMark={"Explore Properties"}
                sectionHeading={"Spaces Crafted with Value and Trust"}
                animationConfig={animationConfig}
            />
            <div className="flex_projects flex flex-wrap justify-center mt-12 lg:gap-[0] gap-[20px] lg:px-0 px-4">
                {projectData && projectData.map((item, index) => (
                    <div
                        className="boxes reveal relative w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-8px)] xl:w-[calc(33.33%)]"
                        key={index}
                    >
                        <Link
                            to={item.Link || '#'}
                            className="block absolute cursor-pointer left-0 right-0 top-0 bottom-0 z-[2]"
                            aria-label={`Go to ${item.type || 'project'}`}
                        />
                        <img
                            className="img w-full xl:h-[470px] 2xl:h-[520px] h-[300px] object-cover"
                            src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/projects/${item.imgSrc}`}
                            alt={item.alt}
                        />

                        <figcaption
                            // data-speed="clamp(0.9)"
                            className="uppercase type tracking-[4px] text-white text-center absolute lg:bottom-[52px] bottom-[20px] left-0 right-0 z-[1] px-2"
                        >
                            {item.type}
                        </figcaption>
                    </div>
                ))}
            </div>

        </div>
    )
}
