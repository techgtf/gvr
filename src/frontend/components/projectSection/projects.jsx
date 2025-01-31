import React from 'react'
import "./projects.css"
import WaterMarkHeading from '../waterMarkHeading'
import { Link } from 'react-router-dom'
import * as CONFIG from '../../../../config';
import { useImageReveal } from '../useImageReveal';


export default function Projects() {

    const animationConfig = { // passing animation as prop for WaterMarkHeading
        stagger: -0.1,
    };

    const reverseText = (text) => {
        return text.split("").reverse().join("");
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
        <div className='projectSection reveal_cut_effect 2xl:pt-[120px] lg:pt-[80px] text-center'>
            <WaterMarkHeading
                // textWaterMark={"Explore Properties"}
                textWaterMark={reverseText("Explore Properties")}

                sectionHeading={"Explore Properties"}
                animationConfig={animationConfig}
            />
            <div className="flex_projects flex flex-wrap justify-center mt-12 lg:gap-[0] gap-[20px] reveal">
                {projectData && projectData.map((item, index) => (
                    <div
                        className="boxes relative w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-8px)] xl:w-[calc(33.33%)]"
                        key={index}
                    >
                        <Link
                            to={item.Link || '#'}
                            className="block absolute left-0 right-0 top-0 bottom-0 z-[2]"
                            aria-label={`Go to ${item.type || 'project'}`}
                        />
                        <img
                            className="img w-full xl:h-[470px] 2xl:h-[520px] h-[300px] object-cover"
                            src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/projects/${item.imgSrc}`}
                            alt={item.type || 'Project image'}
                        />
                        <figcaption
                            // data-speed="clamp(0.9)"
                            className="uppercase type tracking-[4px] text-white text-center absolute lg:bottom-[52px] bottom-[30px] left-0 right-0 z-[1] px-2"
                        >
                            {item.type}
                        </figcaption>
                    </div>
                ))}
            </div>

        </div>
    )
}
