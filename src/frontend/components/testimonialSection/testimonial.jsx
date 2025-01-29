import React, { useRef, useState } from 'react'
import WaterMarkHeading from '../waterMarkHeading'
import './testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import * as CONFIG from "../../../../config"
import FullBtn from '../fullBtn';
import { useImageReveal } from '../useImageReveal';

export default function Testimonial() {
    const slidesData = [
        {
            name: 'sidharth malhotra',
            thumbs: 'thubnail.jpg',
            video: 'thubnail.jpg',
            desc: 'Great Value Realty has been an absoluate game-changer for me.',
        },
        {
            name: 'sidharth malhotra',
            thumbs: 'thubnail.jpg',
            video: 'thubnail.jpg',
            desc: 'Great Value Realty has been an absoluate game-changer for me.',
        },
        {
            name: 'sidharth malhotra',
            thumbs: 'thubnail.jpg',
            video: 'thubnail.jpg',
            desc: 'Great Value Realty has been an absoluate game-changer for me.',
        },
        {
            name: 'sidharth malhotra',
            thumbs: 'thubnail.jpg',
            video: 'thubnail.jpg',
            desc: 'Great Value Realty has been an absoluate game-changer for me.',
        },
        {
            name: 'sidharth malhotra',
            thumbs: 'thubnail.jpg',
            video: 'thubnail.jpg',
            desc: 'Great Value Realty has been an absoluate game-changer for me.',
        },
        {
            name: 'sidharth malhotra',
            thumbs: 'thubnail.jpg',
            video: 'thubnail.jpg',
            desc: 'Great Value Realty has been an absoluate game-changer for me.',
        },
    ]

    useImageReveal(".reveal")

    const animationConfig = { // passing animation as prop for WaterMarkHeading
        // from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1, duration: 1 },
        from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1, duration: 1 },
    };

    return (
        <div className='testimonialSection'>
            <div className='max-w-[90%] m-auto relative'>
                <WaterMarkHeading
                    textWaterMark='Our testimonials'
                    sectionHeading='Our testimonials'
                    animationConfig={animationConfig}
                />
                <Swiper
                    pagination={{
                        type: 'fraction',
                        renderFraction: (currentClass, totalClass) => {
                            return `                                
                                <span className="custom-current ${currentClass}"></span>
                                <span className="custom-divider"></span>
                                <span className="custom-total ${totalClass}"></span>                                
                            `;
                        },
                    }}
                    loop={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="testimonialSwiper lg:mt-32 mt-6"
                >
                    {slidesData && slidesData.map((item, index) =>
                        <SwiperSlide key={index}>
                            <div className='flex_div flex flex-wrap justify-between'>
                                <div className='posterSide relative lg:w-[45%] w-full reveal'>
                                    <img src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/testimonials/${item.thumbs}`} alt="Testimonial" />
                                    <button className='playbtn absolute top-[50%] left-[50%] z-[1]'>
                                        <img src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/play-button.png`} className='h-[44px]' alt="playbtn" />
                                    </button>
                                </div>
                                <div className='borderline w-[18%] relative lg:block hidden'></div>
                                <div className='content_div flex flex-col lg:w-[38%] w-full lg:pl-6 lg:pt-6'>
                                    <p className='desc text-[20] tracking-[2px]'>{item.desc}</p>
                                    <div className='name relative capitalize tracking-[2px] flex items-center lg:gap-3 gap-3'> <small className='line'></small> {item.name}</div>
                                    <FullBtn text='Watch More' link='testimonials' />
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>

            </div>
        </div>
    )
}