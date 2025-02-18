import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import * as CONFIG from "../../../config";
import HeroSectionAboutUs from '../components/aboutUs/HeroSectionAboutUs'
import OverviewSection from '../components/overviewSection/overviewSection';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import News from '../components/MediaCenter/News';
import FadeIn from '../components/Animations/FadeIn';
import CommonHeading from '../components/commonHeading';
import { Link, useLocation } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { Fullscreen, Zoom } from 'yet-another-react-lightbox/plugins';
import { Autoplay, Navigation } from 'swiper/modules';

import charity from "/assets/frontend/images/csr/charity/images/charity.webp";
import charity2 from "/assets/frontend/images/csr/charity/images/charity2.webp";
import charity3 from "/assets/frontend/images/csr/charity/images/charity3.webp";
import charity4 from "/assets/frontend/images/csr/charity/images/charity4.webp";
import charity5 from "/assets/frontend/images/csr/charity/images/charity5.webp";
import charity6 from "/assets/frontend/images/csr/charity/images/charity6.webp";
import charity7 from "/assets/frontend/images/csr/charity/images/charity7.webp";
import charity8 from "/assets/frontend/images/csr/charity/images/charity8.webp";
import charity9 from "/assets/frontend/images/csr/charity/images/charity9.webp";
import charity10 from "/assets/frontend/images/csr/charity/images/charity10.webp";
import charity11 from "/assets/frontend/images/csr/charity/images/charity11.webp";
import charity12 from "/assets/frontend/images/csr/charity/images/charity12.webp";
import charity13 from "/assets/frontend/images/csr/charity/images/charity13.webp";
import charity14 from "/assets/frontend/images/csr/charity/images/charity14.webp";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);
function MediaCenter() {
    const location = useLocation();
    const images = [charity, charity2, charity3, charity4, charity5, charity6, charity7, charity8, charity9, charity10, charity11, charity12, charity13, charity14];

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [open, setOpen] = useState(false);


    useEffect(() => {
        if (prevRef.current && nextRef.current && swiperRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.destroy();
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    useLayoutEffect(() => {
        setTimeout(() => {
            const images = document.querySelectorAll(".charity-images img");

            if (images.length === 0) {
                console.warn("⚠️ No elements found for GSAP animation!");
                return;
            }

            gsap.fromTo(
                images,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: ".charity-images",
                        start: "top 90%",
                        end: "bottom 20%",
                        scrub: false,
                    },
                }
            );

            ScrollTrigger.refresh();
        }, 300);
    }, [location.pathname]);

    const openLightbox = (i) => {
        setCurrentIndex(i);
        setOpen(true);
    };
    return (
        <>
            <HeroSectionAboutUs
                img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/media/hero.jpg`}
                heading={"MEDIA CENTER"}
                extraClassesImg={"objectRight"}
            />

            <OverviewSection
                heading={
                    "Making Headlines, Sharing Stories, Showcasing Impact"
                }
                paragraph={
                    "The Media Section is where Great Value Realty’s vision meets the spotlight. From press releases to industry features, online highlights to on-ground events, every update captures our journey of innovation and impact. Stay tuned as we build, transform, and make headlines."
                }
                showKnowMore={false}
            />

            <section className="download relative px-5 md:px-12 py-10 md:py-14">
                <div className="grid grid-cols-12 gap-3 ">
                    {/* Left Section */}
                    <div className="headline col-span-12 md:col-span-3">
                        <div className="topLine uppercase tracking-[3px] py-3 mt-8 font-[300]">document</div>
                        <FadeIn duration={2} delay={0.5}>
                            <CommonHeading HeadingText="PRESS CENTRE" />
                        </FadeIn>
                    </div>
                    <div className="greatValue flex items-center col-span-12 md:col-span-4">
                        <div className="box border bg-[#EFF5FA] border-[#0061ab63] p-[1.5rem] flex flex-col  ">
                            <h3 className="uppercase text-[17px] tracking-[1px] ">Download Great Value Logo</h3>
                            <div className="logo items-center pt-5 mt-10 flex justify-between">
                                <img
                                    src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/logo-colored.png`}
                                    alt="Great Value Realty Logo" className='w-[40%]'
                                />

                                <ul>
                                    <li className='flex gap-2 uppercase items-center py-2'>
                                        <span>
                                            <a href={`${CONFIG.ASSET_IMAGE_URL}frontend/images/media/logos/white/logo.png`} download="logo.png" className='text-[16px]'>
                                                png
                                            </a>
                                        </span> |
                                        <span>
                                            <a href={`${CONFIG.ASSET_IMAGE_URL}frontend/images/media/logos/white/logo.jpg`} download="logo.jpg" className='text-[16px]'>
                                                jpg
                                            </a>
                                        </span> |
                                        <span>
                                            <a href={`${CONFIG.ASSET_IMAGE_URL}frontend/images/media/logos/white/logo.webp`} download="logo.webp" className='text-[16px]'>
                                                webp
                                            </a>
                                        </span>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="download_sec px-8  col-span-12 md:col-span-5">
                        {/* Download Logo Types */}

                        <div className="logo_types  w-full flex justify-center">
                            <ul className=' w-full'>
                                <Link to={`${CONFIG.BASE_ROOT}coming-soon`}> <li className='flex justify-between border-b border-gray-300 items-center py-4'>
                                    <h3 className="tracking-[3.5px] text-[8px] leading-[3] midlandfontmedium ">Spokesperson Photo</h3>
                                    <BsFileEarmarkPdf className='text-xl' />
                                </li>
                                </Link>
                                <Link to={`${CONFIG.BASE_ROOT}coming-soon`} >
                                    <li className='flex justify-between border-b border-gray-300 items-center py-4'>
                                        <h3 className="tracking-[3.5px] text-[8px] leading-[3] midlandfontmedium">Spokesperson Profile</h3>
                                        <BsFileEarmarkPdf className='text-xl' />
                                    </li>
                                </Link>
                                <Link to={`${CONFIG.BASE_ROOT}coming-soon`}>
                                    <li className='flex justify-between border-b border-gray-300 items-center py-4'>
                                        <h3 className="tracking-[3.5px] text-[8px] leading-[3] midlandfontmedium">Company Profile</h3>
                                        <BsFileEarmarkPdf className='text-xl' />
                                    </li>
                                </Link>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <News />

            <section className="charity bg-[#EFF5FA] relative px-5 md:px-12 pb-16">
                <div className="nav_buttons flex gap-5 py-5 px-10 justify-center md:justify-end">
                    <button ref={prevRef} className="text-gray-500 cursor-pointer flex justify-center items-center relative z-20 p-1">
                        <LuChevronLeft className="w-[30px] md:w-8 h-[30px] md:h-8 opacity-80 border-2 hover:border-0 border-gray-500 bg-transparent hover:bg-[#EFF5FA] rounded-full" />
                    </button>
                    <button ref={nextRef} className="text-gray-500 cursor-pointer flex justify-center items-center relative z-20 p-1">
                        <LuChevronRight className="w-[30px] md:w-8 h-[30px] md:h-8 opacity-80 border-2 hover:border-0 border-gray-500 bg-transparent hover:bg-[#EFF5FA] rounded-full" />
                    </button>
                </div>

                <div className="charity-images">
                    <Swiper
                        onSwiper={(swiper) => { swiperRef.current = swiper; }}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        slidesPerView={1}
                        spaceBetween={5}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper"
                    >
                        {images.map((item, i) => (
                            <SwiperSlide key={i}>
                                <img
                                    src={item}
                                    alt={`Charity Image ${i + 1}`}
                                    className="w-full md:w-[350px] h-[250px] object-cover cursor-pointer"
                                    onClick={() => openLightbox(i)}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {open && (
                        <Lightbox
                            open={open}
                            close={() => setOpen(false)}
                            index={currentIndex}
                            slides={images.map((item, index) => ({ src: item, title: `Image ${index + 1}` }))}
                            plugins={[Fullscreen, Zoom]}
                        />
                    )}
                </div>
            </section>

        </>
    )
}

export default MediaCenter
