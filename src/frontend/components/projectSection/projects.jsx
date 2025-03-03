import React, { useEffect, useState } from 'react'
import "./projects.css"
import AnimatedHeading from '../Animations/AnimatedHeading'
import { Link } from 'react-router-dom'
import * as CONFIG from '../../../../config';
import { useImageReveal } from '../useImageReveal';


export default function Projects({ heading, apiName }) {
    const [data, setData] = useState(null);


    const animationConfig = { // passing animation as prop for WaterMarkHeading
        // from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1, duration: 1 },
        from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1, duration: 1 },
    };

    // calling api

    useEffect(() => {
        const fetchProjectsData = async () => {
            try {
                const response = await fetch(
                    "https://greatvaluerealty.websitedesigningcompany.co.in/api/" +
                    apiName
                );
                const responseData = await response.json();
                setData(responseData.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchProjectsData();
    }, [apiName]);


    useImageReveal(".reveal", data)


    return (
        <div className={`projectSection ${window.innerWidth > 767 ? 'reveal_cut_effect' : 'reveal_fade'} 2xl:pt-[120px] lg:pt-[80px] text-center`}>
            <AnimatedHeading
                // textWaterMark={"Explore Properties"}
                // sectionHeading={"Spaces Crafted with Value and Trust"}
                sectionHeading={heading}
                animationConfig={animationConfig}
                // lineLeft={false}
                // lineRight={false}
                justifyContent="justify-center"
            />
            <div className="flex_projects flex flex-wrap justify-center mt-12 lg:gap-[0] gap-[20px] lg:px-0 px-4">
                {data && data.map((item, index) => {
                    return index == 0 && (
                        <div
                            className="boxes reveal relative w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-8px)] xl:w-[calc(33.33%)]"
                            key={index}
                        >
                            <Link
                                to={item.Link || '#'}
                                className="block absolute cursor-pointer left-0 right-0 top-0 bottom-0 z-[2]"
                                aria-label={`Go to ${item.name || 'project'}`}
                            />
                            <img
                                className="img w-full xl:h-[470px] 2xl:h-[520px] h-[300px] object-cover"
                                src={`${CONFIG.VITE_APP_STORAGE}${item.image}`}
                                alt={item.slug}
                            />

                            <figcaption
                                // data-speed="clamp(0.9)"
                                className="uppercase type tracking-[4px] text-white text-center absolute lg:bottom-[52px] bottom-[20px] left-0 right-0 z-[1] px-2"
                            >
                                {item.name}
                            </figcaption>
                        </div>
                    )
                })}


                <div
                    className="boxes reveal relative w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-8px)] xl:w-[calc(33.33%)]"
                >
                    <Link
                        to={`${CONFIG.BASE_ROOT}coming-soon`}
                        className="block absolute cursor-pointer left-0 right-0 top-0 bottom-0 z-[2]"
                        aria-label={`Go to iconic properties`}
                    />
                    <img
                        className="img w-full xl:h-[470px] 2xl:h-[520px] h-[300px] object-cover"
                        src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/projects/latest.webp`}
                        alt="VILASA AT SECTOR 6, SOHNA"
                    />

                    <figcaption
                        // data-speed="clamp(0.9)"
                        className="uppercase type tracking-[4px] text-white text-center absolute lg:bottom-[52px] bottom-[20px] left-0 right-0 z-[1] px-2"
                    >
                        iconic properties
                    </figcaption>
                </div>

                {data && data.map((item, index) => {
                    return index == 1 && (
                        <div
                            className="boxes reveal relative w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-8px)] xl:w-[calc(33.33%)]"
                            key={index}
                        >
                            <Link
                                to={item.Link || '#'}
                                className="block absolute cursor-pointer left-0 right-0 top-0 bottom-0 z-[2]"
                                aria-label={`Go to ${item.name || 'project'}`}
                            />
                            <img
                                className="img w-full xl:h-[470px] 2xl:h-[520px] h-[300px] object-cover"
                                src={`${CONFIG.VITE_APP_STORAGE}${item.image}`}
                                alt={item.slug}
                            />

                            <figcaption
                                // data-speed="clamp(0.9)"
                                className="uppercase type tracking-[4px] text-white text-center absolute lg:bottom-[52px] bottom-[20px] left-0 right-0 z-[1] px-2"
                            >
                                {item.name}
                            </figcaption>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
