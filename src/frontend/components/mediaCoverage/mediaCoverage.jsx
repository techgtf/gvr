import React from 'react'
import "./mediaCoverage.css"
import WaterMarkHeading from '../waterMarkHeading'
import * as CONFIG from '../../../../config'
import SlideIn from '../Animations/SlideIn'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import "swiper/css/free-mode";


export default function MediaCoverage() {
    const mediaData = [
        {
            name: 'sky news',
            imgSrc: 'sky-news.webp',
        },
        {
            name: 'global news',
            imgSrc: 'global-news.webp',
        },
        {
            name: 'nbc sports group',
            imgSrc: 'nbc-group.webp',
        },
        {
            name: 'corel draw news',
            imgSrc: 'core-draw-news.webp',
        },
        {
            name: 'breaking news',
            imgSrc: 'breaking-news.webp',
        }
    ]

    // useImageReveal(".reveal")

    return (
        <div className='mediaCoverageSection bg-[#EFF5FA] lg:py-20 py-12 text-center'>
            <SlideIn duration={2} delay={0.5}>
                <WaterMarkHeading
                    // sectionHeading='Media Vault - Our Journey Unveiled'
                    sectionHeading='Our media coverage'
                />
                <div className='lg:max-w-[61%] max-w-[95%] m-auto lg:pt-24 pt-12'>
                    <div className="flexbox flex flex-wrap justify-center lg:gap-x-16 gap-x-8 lg:gap-y-0 gap-y-[40px] items-center">
                        <Swiper
                            modules={[Autoplay, FreeMode]}
                            loop={true}
                            freeMode={true} // Enables smooth scrolling
                            speed={5000} // Controls smooth speed
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false, // Keeps scrolling when hovered
                                reverseDirection: false, // Set to true for reverse marquee
                            }}
                            // slidesPerView="auto"
                            // spaceBetween={20}
                            breakpoints={{
                                300: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                            }}
                            className="mediaSwiper"
                        >
                            {mediaData && (
                                mediaData.map((item, index) =>
                                    <React.Fragment  key={index}>
                                        <SwiperSlide>
                                            <img
                                                className="lg:w-auto w-[80px]"
                                                src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/media-coverage/${item.imgSrc}`}
                                                alt={item.altText || `Media coverage: ${item.title}`}
                                            />

                                        </SwiperSlide>
                                        {/* <div className='box lg:w-auto w-[85px]' key={index}></div> */}
                                    </React.Fragment>
                                )
                            )}
                        </Swiper>
                    </div>
                </div>
            </SlideIn>
        </div>
    )
}