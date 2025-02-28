import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CommonHeading from '../../commonHeading';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import { Fullscreen, Zoom } from 'yet-another-react-lightbox/plugins';

// Import Images
import charity from "/assets/frontend/images/csr/charity/images/charity.webp";
import charity2 from "/assets/frontend/images/csr/charity/images/charity2.webp";
import charity3 from "/assets/frontend/images/csr/charity/images/charity3.webp";
import charity4 from "/assets/frontend/images/csr/charity/images/charity4.webp";
import charity5 from "/assets/frontend/images/csr/charity/images/charity5.webp";
import charity6 from "/assets/frontend/images/csr/charity/images/charity6.webp";
import charity7 from "/assets/frontend/images/csr/charity/images/charity7.webp";
import charity8 from "/assets/frontend/images/csr/charity/images/charity8.webp";
// import charity9 from "/assets/frontend/images/csr/charity/images/charity9.webp";
// import charity10 from "/assets/frontend/images/csr/charity/images/charity10.webp";
// import charity11 from "/assets/frontend/images/csr/charity/images/charity11.webp";
// import charity12 from "/assets/frontend/images/csr/charity/images/charity12.webp";
// import charity13 from "/assets/frontend/images/csr/charity/images/charity13.webp";
// import charity14 from "/assets/frontend/images/csr/charity/images/charity14.webp";

import Initiatives from './Initiatives';
import InitiativesDesc from './InitiativesDesc';
import useFetchData from '../../../apiHooks/useFetchData';
import Loader from '../../../../common/Loader/loader';

gsap.registerPlugin(ScrollTrigger);

function CharityInitiatives() {
    const location = useLocation();
    const images = [charity, charity2, charity3, charity4, charity5, charity6, charity7, charity8];

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

    // calling api

    const { data: galleryData, loading: galleryLoading, error: galleryError } = useFetchData("gallery");

    console.log('galleryData',galleryData);
    // Handle Loading and Errors
    if (galleryLoading) return <Loader />;
    if (galleryError) return <p className="text-red-500">Error while loading Gallery: {logoError}</p>;

    return (
        <>
            <section className="charity bg-[#EFF5FA] relative px-5 md:px-12 pb-16">
                {/* <div className="headingWrap lg:max-w-[50%] mx-auto text-center">
                    <CommonHeading HeadingText="Great Value Charitable Initiatives: Educating & Empowering" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-20">
                    <Initiatives />
                    <InitiativesDesc />
                </div> */}

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
                            {galleryData?.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <img
                                        src={item.image}
                                        alt={item.alt}
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
                                slides={galleryData?.map((item, index) => ({ src: item.image, title: item.alt }))}
                                plugins={[Fullscreen, Zoom]}
                            />
                        )}
                    </div>
            </section>
        </>
    );
}

export default CharityInitiatives;
