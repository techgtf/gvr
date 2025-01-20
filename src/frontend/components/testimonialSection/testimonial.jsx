import React, { useRef, useState } from 'react'
import WaterMarkHeading from '../waterMarkHeading'
import './testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import * as CONFIG from "../../../../config"

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
    return (
        <div className='testimonialSection'>
            <div className='max-w-[85%] m-auto'>
                <WaterMarkHeading textWaterMark='Our testimonial' sectionHeading='Our testimonial' />
                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="testimonialSwiper lg:mt-32 mt-6"
                >
                    {slidesData && slidesData.map((item, index) =>
                        <SwiperSlide key={index}>
                            <div className='posterSide'>
                                <img src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/testimonials/${item.thumbs}`} alt="" />
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>

            </div>
        </div>
    )
}