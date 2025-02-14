import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import WaterMarkHeading from '../waterMarkHeading';
import './testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import * as CONFIG from "../../../../config";
import FullBtn from '../fullBtn';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useImageReveal } from '../useImageReveal';

gsap.registerPlugin(ScrollTrigger);


const slidesData = [
    {
        name: 'Mr. Narinder Arora',
        thumbs: 'narinder-arora.webp',
        video: 'https://www.youtube.com/watch?v=nT86JG8JiHk',
        desc: 'Sharnam: The Perfect Blend of Location, Space & Greenery',
    },
    {
        name: 'Verma Family',
        thumbs: 'verma-family.webp',
        video: 'https://www.youtube.com/watch?v=Nbm6iQ0IMMY',
        desc: 'A Community Where Every Festival Feels Like Home',
    },
    {
        name: 'Mr. B.P. Bharti',
        thumbs: 'bp-bharti.webp',
        video: 'https://www.youtube.com/watch?v=rSFwv7_ucSs',
        desc: 'Openness, Luxury, and Leisure—Love Living at Sharnam',
    },
]

const getEmbedUrl = (url) => url.replace("watch?v=", "embed/");

const VideoModal = ({ videoUrl, onClose }) => {
    if (!videoUrl) return null;
    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-[20px] flex items-center justify-center z-50">
            <div className="relative bg-white lg:p-4 p-2 rounded-lg lg:w-[auto] w-[98%]">
                <button
                    className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full"
                    onClick={onClose}
                >
                    ✕
                </button>
                <iframe
                    className='lg:w-[1000px] w-[100%] lg:h-[500px] h-[250px]'
                    src={videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>,
        document.body
    );
};

export default function Testimonial() {

    // const videoRefs = useRef([]);
    const testimonialRef = useRef(null);
    const swiperContainerRef = useRef(null);

    const [selectedVideo, setSelectedVideo] = useState(null);

    useImageReveal(".reveal")

    const animationConfig = { // passing animation as prop for WaterMarkHeading
        // from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1, duration: 1 },
        from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1, duration: 1 },
    };

    return (
        <div ref={testimonialRef} className="testimonialSection lg:pt-[120px] lg:pb-[90px] pt-[50px] pb-[50px]">
            <div className="max-w-[90%] mx-auto relative">
                <WaterMarkHeading
                    textWaterMark='Our testimonials'
                    // sectionHeading='Voices That Celebrate Trust and Timeless Partnerships'
                    sectionHeading='testimonials'
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
                                        <img src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/testimonials/${item.thumbs}`} alt={`${item.name}`} />
                                        {/* <video
                                            ref={(el) => (videoRefs.current[index] = el)}
                                            poster={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/testimonials/${item.thumbs}`}
                                            src={item.video}
                                            className="w-full"
                                        ></video> */}
                                        <button
                                            className='playbtn absolute top-[50%] left-[50%] z-[1] cursor-pointer'
                                            onClick={() => setSelectedVideo(getEmbedUrl(item.video))}
                                        >
                                            <img
                                                src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/play-button.png`}
                                                className="cursor-pointer lg:h-[44px] h-[30px]"
                                                alt="Play button icon"
                                            />

                                        </button>
                                    </div>
                                    <div className='borderline w-[18%] relative lg:block hidden'></div>
                                    <div className='content_div flex flex-col lg:w-[37%] w-full lg:pl-6 lg:pt-11 pt-5'>
                                        <p className='desc lg:text-[17px] text-[14px] tracking-[2px]'>{item.desc}</p>
                                        <div className='name text-[16px] relative capitalize tracking-[2px] flex items-center lg:gap-3 gap-3'>
                                            <small className='line'></small> {item.name}
                                        </div>
                                        <FullBtn text='Watch More' LinkName="a" link='https://www.youtube.com/@greatvaluerealty' />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <VideoModal videoUrl={selectedVideo} onClose={() => setSelectedVideo(null)} />
                </div>
            </div>
        </div>
    );
}