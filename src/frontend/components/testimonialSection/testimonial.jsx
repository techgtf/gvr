import React, { useRef, useState, useCallback } from 'react';
import AnimatedHeading from '../Animations/AnimatedHeading'
import './testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import * as CONFIG from "../../../../config";
import FullBtn from '../fullBtn';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useImageReveal } from '../useImageReveal';
import { TestimonialsData } from "./testimonialsData";
import { VideoModal, getEmbedUrl } from "./testimonialsVideoModal";

gsap.registerPlugin(ScrollTrigger);


export default function Testimonial() {
    const slidesData = TestimonialsData;
    const testimonialRef = useRef(null);
    const swiperContainerRef = useRef(null);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useImageReveal(".reveal")

    const closeVideo = useCallback(() => {
        setSelectedVideo(null);
        gsap.globalTimeline.resume(); // Resume animations
        setTimeout(() => ScrollTrigger.refresh(), 300); // Refresh ScrollTrigger
    }, []);


    return (
        <div ref={testimonialRef} className="testimonialSection lg:pt-[120px] lg:pb-[90px] pt-[50px] pb-[50px]">
            <div className="max-w-[90%] mx-auto relative">
                <AnimatedHeading
                    sectionHeading='testimonials'
                    justifyContent='justify-left'
                    lineRight={true}
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
                                        <img src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/testimonials/${item.thumbs}`} alt={`${item.alt}`} />
                                        {/* <video
                                            ref={(el) => (videoRefs.current[index] = el)}
                                            poster={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/testimonials/${item.thumbs}`}
                                            src={item.video}
                                            className="w-full"
                                        ></video> */}
                                        <button
                                            className="playbtn absolute top-[50%] left-[50%] z-[1] cursor-pointer "
                                            onClick={() => setSelectedVideo(getEmbedUrl(item.video))}
                                            aria-label="Play Video"
                                        >

                                            <img
                                                src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/play-button.webp`}
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
                                        {/* <FullBtn text='Watch More' LinkName="a" link='https://www.youtube.com/@greatvaluerealty' /> */}
                                        <FullBtn text='Watch More' LinkName="Link" link={`${CONFIG.BASE_ROOT}testimonials`} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <VideoModal videoUrl={selectedVideo} onClose={closeVideo} />
                </div>
            </div>
        </div>
    );
}



// export default function Testimonial() {

//     // const videoRefs = useRef([]);
//     const testimonialRef = useRef(null);
//     const swiperContainerRef = useRef(null);

//     const [selectedVideo, setSelectedVideo] = useState(null);

//     useImageReveal(".reveal")

//     const animationConfig = { // passing animation as prop for WaterMarkHeading
//         // from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1, duration: 1 },
//         from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1, duration: 1 },
//     };

//     return (
//         <div ref={testimonialRef} className="testimonialSection lg:pt-[120px] lg:pb-[90px] pt-[50px] pb-[50px]">
//             <div className="max-w-[90%] mx-auto relative">
//                 <AnimatedHeading
//                     // textWaterMark='Our testimonials'
//                     // sectionHeading='Voices That Celebrate Trust and Timeless Partnerships'
//                     sectionHeading='testimonials'
//                     animationConfig={animationConfig}
//                     justifyContent='justify-left'
//                     lineRight={true}
//                 />
//                 <div ref={swiperContainerRef} className="swiper-container reveal">
//                     <Swiper
//                         pagination={{
//                             type: 'fraction',
//                             renderFraction: (currentClass, totalClass) => (
//                                 `<span class="custom-current ${currentClass}"></span>
//                                  <span class="custom-divider"></span>
//                                  <span class="custom-total ${totalClass}"></span>`
//                             ),
//                         }}
//                         loop={true}
//                         navigation={true}
//                         modules={[Navigation, Autoplay, FreeMode]}
//                         autoplay={{
//                             delay: 3500,
//                             disableOnInteraction: false,
//                         }}
//                         className="testimonialSwiper lg:mt-20 mt-10"
//                     >
//                         {slidesData.map((item, index) => (
//                             <SwiperSlide key={index} className="panel">
//                                 <div className='flex_div flex flex-wrap justify-between'>
//                                     <div className='posterSide relative lg:w-[45%] w-full'>
//                                         <img src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/testimonials/${item.thumbs}`} alt={`${item.alt}`} />
//                                         {/* <video
//                                             ref={(el) => (videoRefs.current[index] = el)}
//                                             poster={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/testimonials/${item.thumbs}`}
//                                             src={item.video}
//                                             className="w-full"
//                                         ></video> */}
//                                         <button
//                                             className="playbtn absolute top-[50%] left-[50%] z-[1] cursor-pointer
//              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
//              focus-visible:ring-4 focus-visible:ring-blue-500 focus-visible:border focus-visible:border-white
//              rounded-full transition-all"
//                                             onClick={() => setSelectedVideo(getEmbedUrl(item.video))}
//                                             aria-label="Play Video"
//                                         >
//                                             <img
//                                                 src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/play-button.webp`}
//                                                 className="cursor-pointer lg:h-[44px] h-[30px]"
//                                                 alt="Play button icon"
//                                             />
//                                         </button>

//                                     </div>
//                                     <div className='borderline w-[18%] relative lg:block hidden'></div>
//                                     <div className='content_div flex flex-col lg:w-[37%] w-full lg:pl-6 lg:pt-11 pt-5'>
//                                         <p className='desc lg:text-[17px] text-[14px] tracking-[2px]'>{item.desc}</p>
//                                         <div className='name text-[16px] relative capitalize tracking-[2px] flex items-center lg:gap-3 gap-3'>
//                                             <small className='line'></small> {item.name}
//                                         </div>
//                                         {/* <FullBtn text='Watch More' LinkName="a" link='https://www.youtube.com/@greatvaluerealty' /> */}
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                     <VideoModal videoUrl={selectedVideo} onClose={() => setSelectedVideo(null)} />
//                 </div>
//             </div>
//         </div>
//     );
// }