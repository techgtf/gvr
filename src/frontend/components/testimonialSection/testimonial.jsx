import React, { useRef, useEffect } from 'react';
import WaterMarkHeading from '../waterMarkHeading';
import './testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Mousewheel } from 'swiper/modules';
import * as CONFIG from "../../../../config";
import FullBtn from '../fullBtn';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useImageReveal } from '../useImageReveal';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

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

    ]

    const animationConfig = { // passing animation as prop for WaterMarkHeading
        // from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1, duration: 1 },
        from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1, duration: 1 },
    };


    useImageReveal(".reveal")

    const testimonialRef = useRef(null);
    const swiperContainerRef = useRef(null);

    // useEffect(() => {
    //     const sections = gsap.utils.toArray('.panel');
    //     // const sections = gsap.utils.toArray('.panel:not(.swiper-slide)');

    //     const animation = gsap.to(sections, {
    //         xPercent: -100 * (sections.length - 1),
    //         ease: 'none',
    //         scrollTrigger: {
    //             trigger: testimonialRef.current,
    //             pin: true,
    //             start: "top 10%",
    //             end: `+=${sections.length * window.innerWidth}`,
    //             scrub: 1,
    //             // snap: 1 / (sections.length - 1),
    //         },
    //     });

    //     ScrollTrigger.refresh();

    //     return () => {
    //         animation.scrollTrigger.kill();
    //     };
    // }, []);


    return (
        <div ref={testimonialRef} className="testimonialSection lg:pt-[120px] lg:pb-[90px] pt-[50px] pb-[50px]">
            <div className="max-w-[90%] mx-auto relative">
                <WaterMarkHeading
                    textWaterMark='Our testimonials'
                    sectionHeading='Our testimonials'
                    animationConfig={animationConfig}
                />
                <div ref={swiperContainerRef} className="swiper-container reveal">
                    <Swiper
                        pagination={{
                            type: 'fraction',
                            renderFraction: (currentClass, totalClass) => (
                                `<span class="custom-current ${currentClass}"></span>
                                 <span class="custom-divider"></span>
                                 <span class="custom-total ${totalClass}"></span>`
                            ),
                        }}
                        // loop={true}
                        navigation={true}
                        modules={[Navigation]}
                        className="testimonialSwiper lg:mt-20 mt-10"
                    >
                        {slidesData.map((item, index) => (
                            <SwiperSlide key={index} className="panel">
                                <div className='flex_div flex flex-wrap justify-between'>
                                    <div className='posterSide relative lg:w-[45%] w-full'>
                                        <img src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/testimonials/${item.thumbs}`} alt={`${item.name}`} />
                                        <button className='playbtn absolute top-[50%] left-[50%] z-[1] cursor-pointer'>
                                            <img src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/play-button.png`} className='cursor-pointer lg:h-[44px] h-[30px]' alt="playbtn" />
                                        </button>
                                    </div>
                                    <div className='borderline w-[18%] relative lg:block hidden'></div>
                                    <div className='content_div flex flex-col lg:w-[37%] w-full lg:pl-6 lg:pt-11 pt-5'>
                                        <p className='desc lg:text-[17px] text-[14px] tracking-[2px]'>{item.desc}</p>
                                        <div className='name text-[16px] relative capitalize tracking-[2px] flex items-center lg:gap-3 gap-3'>
                                            <small className='line'></small> {item.name}
                                        </div>
                                        <FullBtn text='Watch More' link='testimonials' />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}