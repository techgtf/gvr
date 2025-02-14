import React from 'react';
import "./verticals.css";
import WaterMarkHeading from '../waterMarkHeading';
import { Link } from 'react-router-dom';
import * as CONFIG from '../../../../config';
import { GoArrowUpRight } from "react-icons/go";
import { useImageReveal } from '../useImageReveal';
import ZoomOut from '../Animations/ZoomOut';
import SlideIn from '../Animations/SlideIn';

export default function Verticals() {
    // useImageReveal(".reveal")

    const animationConfig = { // passing animation as prop for WaterMarkHeading        
        from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1, duration: 1 },
    };

    const verticalData = [
        {
            title: 'GV Capital',
            imgSrc: 'capital.webp',
            description: 'GV Capital accelerates visionary businesses with strategic investments, expert mentorship, and smart capital for lasting impact and growth.',
            link: `${CONFIG.BASE_ROOT}coming-soon`
        },
        {
            title: 'GV Finance',
            imgSrc: 'finance.webp',
            description: 'GV Finance empowers businesses and individuals with smart financial solutions, optimizing cash flow, securing investments, and driving sustainable growth.',
            link: `${CONFIG.BASE_ROOT}coming-soon`
        },
    ];

    return (
        <div className='verticalSection bg-[#EFF5FA] 2xl:py-[85px] xl:py-[75px] py-[50px] text-center lg:mt-0 mt-[50px]'>
            <div className='section_in 2xl:max-w-[80%] m-auto max-w-[100%]'>
                <WaterMarkHeading
                    // sectionHeading='Building Futures, Financing Dreams, Beyond Real Estate'
                    sectionHeading='Others Verticals'
                    animationConfig={animationConfig}
                />
                <div className='flex_div flex justify-between flex-wrap 2xl:mt-16 xl:mt-14 mt-[40px] xl:gap-0 gap-[44px] lg:px-0 px-4'>
                    {verticalData.map((item, index) => (
                        <div className='boxes relative lg:w-[47%] w-full' key={index}>
                            <Link 
                                to={item.link} 
                                className='relative block overflow-hidden cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500'
                            >
                                <ZoomOut initialScale={1.5} duration={2}>
                                    <img 
                                        className='lg:h-[300px] h-[300px] cursor-pointer w-full object-cover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500'
                                        src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/verticals/${item.imgSrc}`} 
                                        alt={item.title} 
                                        tabIndex="0"
                                    />
                                </ZoomOut>
                                <span 
                                    className='link_arrow absolute bottom-[15px] right-[15px] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500'
                                >
                                    <GoArrowUpRight className='cursor-pointer lg:text-[49px] text-[35px]' />
                                </span>
                            </Link>
                            <SlideIn duration={2} delay={0.5}>
                                <span className='title block pt-6 pb-3 text-[18px] uppercase tracking-[3px]'>{item.title}</span>
                                <p className='desc'>{item.description}</p>
                            </SlideIn>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
