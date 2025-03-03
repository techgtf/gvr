import React from 'react';
import "./verticals.css";
import WaterMarkHeading from '../waterMarkHeading';
import { Link } from 'react-router-dom';
import * as CONFIG from '../../../../config';
import { GoArrowUpRight } from "react-icons/go";
import { useImageReveal } from '../useImageReveal';
import ZoomOut from '../Animations/ZoomOut';
import SlideIn from '../Animations/SlideIn';
import useFetchData from '../../apiHooks/useFetchData'

export default function Verticals({heading}) {
    // useImageReveal(".reveal")

    const animationConfig = { // passing animation as prop for WaterMarkHeading        
        from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1, duration: 1 },
    };
<<<<<<< HEAD

    const verticalData = [
        {
            title: 'GV Capital',
            imgSrc: 'capital.webp',
            alt: "Gread Value Captial",
            description: 'GV Capital is a dedicated Asset Reconstruction Fund committed to revitalizing distressed assets and optimizing returns for our stakeholders. With an Asset Under Management (AUM) base exceeding INR 2,500 crore, we focus on unlocking the latent potential of underperforming assets through rigorous due diligence, strategic restructuring, and active portfolio management.',
            link: `${CONFIG.BASE_ROOT}coming-soon`
        },
        {
            title: 'GV Finance',
            imgSrc: 'finance.webp',
            alt: "Gread Value Finance",
            description: 'GV Finance, operating under the brand name Dhansamrishi, is a Non-Banking Financial Company (NBFC) committed to empowering businesses through accessible, large-ticket enterprise financing solutions. With an Asset Under Management (AUM) of over INR 500 crore +, we provide the capital and guidance that growing enterprises need to reach their full potential in today’s competitive marketplace.',
            link: `${CONFIG.BASE_ROOT}coming-soon`
        },
    ];
=======
    const { data, loading, error } = useFetchData('verticals')
    const verticalData = data;
>>>>>>> be5d48c49e395fd2ab83dd8896572878b61d7f55

    return (
        <div className='verticalSection bg-[#EFF5FA] 2xl:py-[85px] xl:py-[75px] py-[50px] text-center lg:mt-0 mt-[50px]'>
            <div className='section_in xl:max-w-[80%] m-auto max-w-[100%]'>
                <WaterMarkHeading
                    // sectionHeading='Building Futures, Financing Dreams, Beyond Real Estate'
<<<<<<< HEAD
                    sectionHeading='Other Verticals'
=======
                    sectionHeading={heading}
>>>>>>> be5d48c49e395fd2ab83dd8896572878b61d7f55
                    animationConfig={animationConfig}
                />
                <div className='flex_div flex justify-between flex-wrap 2xl:mt-16 xl:mt-14 mt-[40px] xl:gap-0 gap-[44px] lg:px-0 px-4'>
                    {verticalData && verticalData.map((item) => (
                        <div className='boxes relative lg:w-[47%] w-full' key={item.id}>
                            <Link
                                to={`${CONFIG.BASE_ROOT}coming-soon`}
                                className="relative block overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-0"
                            >

                                <ZoomOut initialScale={1.5} duration={2}>
                                    <Link
                                        to={`${CONFIG.BASE_ROOT}coming-soon`}
                                        className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-transparent
             focus-visible:ring-4 focus-visible:ring-transparent rounded-md transition-all"
                                    >
                                        <img
                                            className="lg:h-[300px] h-[300px] cursor-pointer w-full object-cover"
                                            src={item.image}
                                            alt={item.alt}
                                        />
                                    </Link>

                                </ZoomOut>
                                <span
                                    className='link_arrow absolute bottom-[15px] right-[15px] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-transparent'
                                >
                                    <GoArrowUpRight className='cursor-pointer lg:text-[45px] text-[35px]' />
                                </span>
                            </Link>
                            <SlideIn duration={2} delay={0.5}>
                                <span className='title block pt-6 pb-3 text-[18px] uppercase tracking-[3px]'>{item.name}</span>
                                <p className='desc'>{item.short_description}</p>
                            </SlideIn>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
