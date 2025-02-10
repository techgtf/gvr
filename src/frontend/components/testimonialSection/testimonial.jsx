import React, { useRef, useEffect, useState } from 'react';
import WaterMarkHeading from '../waterMarkHeading';
import './testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import * as CONFIG from "../../../../config";
import FullBtn from '../fullBtn';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useImageReveal } from '../useImageReveal';
// import 'swiper/css/effect-fade';


// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);


const slidesData = [
    {
        name: 'sidharth malhotra',
        thumbs: 'thubnail.jpg',
        video: 'https://media.istockphoto.com/id/2185164247/video/big-data-and-ai-title-on-newspaper-headline-style.mp4?s=mp4-640x640-is&k=20&c=qWLWncSWl-AKqW4Brj_Y0gBMxC-m3lLAoGp1gwPxBEc=',
        desc: 'Great Value Realty has been an absoluate game-changer for me.',
    },
    {
        name: 'sidharth malhotra',
        thumbs: 'thubnail.jpg',
        video: 'https://media.istockphoto.com/id/2193787383/video/ai-as-a-service-title-on-digital-newspaper.mp4?s=mp4-640x640-is&k=20&c=86zE6WQGmagKxF4h9957zdfRxMwHBU3iaCpdZNhqIpo=',
        desc: 'Great Value Realty has been an absoluate game-changer for me.',
    },
    {
        name: 'sidharth malhotra',
        thumbs: 'thubnail.jpg',
        video: 'https://media.istockphoto.com/id/2194184235/video/cyber-defense-powered-by-ai-the-end-of-hacking-headline-newspaper-title.mp4?s=mp4-640x640-is&k=20&c=fALDwOdpsl3iBSkyB8hCZtfPkAq2NNbNxr3rxZt_-LM=',
        desc: 'Great Value Realty has been an absoluate game-changer for me.',
    },
    {
        name: 'sidharth malhotra',
        thumbs: 'thubnail.jpg',
        video: 'https://media.istockphoto.com/id/2185164247/video/big-data-and-ai-title-on-newspaper-headline-style.mp4?s=mp4-640x640-is&k=20&c=qWLWncSWl-AKqW4Brj_Y0gBMxC-m3lLAoGp1gwPxBEc=',
        desc: 'Great Value Realty has been an absoluate game-changer for me.',
    },
    {
        name: 'sidharth malhotra',
        thumbs: 'thubnail.jpg',
        video: 'https://media.istockphoto.com/id/2193787383/video/ai-as-a-service-title-on-digital-newspaper.mp4?s=mp4-640x640-is&k=20&c=86zE6WQGmagKxF4h9957zdfRxMwHBU3iaCpdZNhqIpo=',
        desc: 'Great Value Realty has been an absoluate game-changer for me.',
    },
    {
        name: 'sidharth malhotra',
        thumbs: 'thubnail.jpg',
        video: 'https://media.istockphoto.com/id/2194184235/video/cyber-defense-powered-by-ai-the-end-of-hacking-headline-newspaper-title.mp4?s=mp4-640x640-is&k=20&c=fALDwOdpsl3iBSkyB8hCZtfPkAq2NNbNxr3rxZt_-LM=',
        desc: 'Great Value Realty has been an absoluate game-changer for me.',
    },

]

// https://www.youtube.com/watch?v=Nbm6iQ0IMMY
// https://www.youtube.com/watch?v=nT86JG8JiHk
// https://www.youtube.com/watch?v=rSFwv7_ucSs

export default function Testimonial() {

    const [playingVideo, setPlayingVideo] = useState(null);

    const videoRefs = useRef([]);
    const testimonialRef = useRef(null);
    const swiperContainerRef = useRef(null);

    useImageReveal(".reveal")

    const animationConfig = { // passing animation as prop for WaterMarkHeading
        // from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1, duration: 1 },
        from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1, duration: 1 },
    };

    const togglePlayPause = (index) => {
        videoRefs.current.forEach((video, i) => {
            if (video) {
                if (i === index) {
                    if (video.paused) {
                        video.play();
                        setPlayingVideo(video);
                    } else {
                        video.pause();
                        setPlayingVideo(null);
                    }
                } else {
                    video.pause();
                }
            }
        });
    };

    const handleVideoEnd = () => {
        setPlayingVideo(null)
    }



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
                        loop={true}
                        navigation={true}
                        modules={[Navigation, Autoplay, FreeMode]}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        className="testimonialSwiper lg:mt-20 mt-10"
                    >
                        {slidesData.map((item, index) => (
                            <SwiperSlide key={index} className="panel">
                                <div className='flex_div flex flex-wrap justify-between'>
                                    <div className='posterSide relative lg:w-[45%] w-full'>
                                        {/* <img src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/testimonials/${item.thumbs}`} alt={`${item.name}`} /> */}
                                        <video
                                            ref={(el) => (videoRefs.current[index] = el)}
                                            poster={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/testimonials/${item.thumbs}`}
                                            src={item.video}
                                            className="w-full"
                                            onEnded={handleVideoEnd}
                                        ></video>
                                        <button
                                            onClick={() => togglePlayPause(index)}
                                            className='playbtn absolute top-[50%] left-[50%] z-[1] cursor-pointer'
                                        ><img
                                                src={playingVideo &&
                                                    playingVideo.src === item.video ?
                                                    `${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/pause-button.png` :
                                                    `${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/play-button.png`
                                                }
                                                className='cursor-pointer lg:h-[44px] h-[30px]'
                                                alt="playbtn"
                                            /></button>
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