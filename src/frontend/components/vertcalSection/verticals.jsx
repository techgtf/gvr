import React from 'react'
import "./verticals.css"
import WaterMarkHeading from '../waterMarkHeading'
import { Link } from 'react-router-dom'
import * as CONFIG from '../../../../config';
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useImageReveal } from '../useImageReveal';

export default function Verticals() {

    useImageReveal(".reveal")

    const animationConfig = { // passing animation as prop for WaterMarkHeading        
        from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1, duration: 1 },
    };

    const verticalData = [
        {
            title: 'GV Capital',
            imgSrc: 'capital.jpg',
            description: 'The genesis of Great Value Industries dates to 1970 when the group set up its glassware division. In 1990 GVIL diversified into together supplying quality packaging products to prestigious.',
            link: '#'
        },
        {
            title: 'GV Finance',
            imgSrc: 'finance.jpg',
            description: 'The genesis of Great Value Industries dates to 1970 when the group set up its glassware division. In 1990 GVIL diversified into together supplying quality packaging products to prestigious.',
            link: '#'
        },
    ]

    return (
        <div className='verticalSection bg-[#EFF5FA] lg:pt-[80px] lg:pb-[80px] pt-[40px] pb-[40px] text-center'>
            <div className='section_in max-w-[80%] m-auto'>
                <WaterMarkHeading
                    sectionHeading='Other verticals'
                    animationConfig={animationConfig}
                />
                <div className='flex_div flex justify-between flex-wrap mt-[70px]'>
                    {verticalData && (
                        verticalData.map((item, index) =>
                            <div className='boxes reveal relative lg:w-[47%] w-full' key={index}>
                                <Link to={item.link} className='relative block'>
                                    <img src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/verticals/${item.imgSrc}`} alt={`${item.imgSrc}`} />
                                    <span className='link_arrow absolute bottom-[15px] right-[15px] text-white'><BsBoxArrowUpRight /></span>
                                </Link>
                                <span className='title block pt-8 pb-5 text-[20px]'>{item.title}</span>
                                <p className='desc'>{item.description}</p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}
