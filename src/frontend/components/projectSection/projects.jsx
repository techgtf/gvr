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
            imgSrc: 'residential.jpg',
            Link: "#1"
        },
        {
            type: 'commercial',
            imgSrc: 'commercial.jpg',
            Link: "#2"
        },
        {
            type: 'Latest Property',
            imgSrc: 'latest.jpg',
            Link: "#3"
        },
    ]

    return (
        <div className='projectSection lg:pt-[137px] pt-[100px] text-center'>
            <WaterMarkHeading
                textWaterMark={"Explore Properties"}
                sectionHeading={"Explore Properties"}
                animationConfig={animationConfig}
            />
            <div className="flex_projects flex flex-wrap justify-center lg:pt-[70px] pt-[30px] lg:gap-[0] gap-[10px]">
                {projectData && projectData.map((item, index) => (
                    <div
                        className="boxes reveal relative w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-8px)] xl:w-[calc(33.33%)]"
                        key={index}
                    >
                        <Link
                            to={item.Link || '#'}
                            className="block absolute left-0 right-0 top-0 bottom-0 z-[2]"
                            aria-label={`Go to ${item.type || 'project'}`}
                        />
                        <img
                            className="img w-full 2xl:max-h-[750px] xl:max-h-[472px] object-cover"
                            src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/projects/${item.imgSrc}`}
                            alt={item.type || 'Project image'}
                        />
                        <figcaption
                            // data-speed="clamp(0.9)"
                            className="uppercase type tracking-[4px] text-white text-center absolute bottom-[52px] left-0 right-0 z-[1] px-2"
                        >
                            {item.type}
                        </figcaption>
                    </div>
                ))}
            </div>

        </div>
    )
}
