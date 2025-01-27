import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import slide1 from "/assets/frontend/images/microsite/amentities/slider/slide1.png";
import slide2 from "/assets/frontend/images/microsite/amentities/slider/slide2.png";
import slide3 from "/assets/frontend/images/microsite/amentities/slider/slide3.png";
import slide4 from "/assets/frontend/images/microsite/amentities/slider/slide4.png";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import Lightbox from "react-lightbox-component"; // Import the lightbox library
import "react-lightbox-component/build/css/index.css"; // Lightbox CSS
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css"

function Slider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const amentitiesImages = [
    { image: slide1, alt: "Slide 1" },
    { image: slide2, alt: "Slide 2" },
    { image: slide3, alt: "Slide 3" },
    { image: slide4, alt: "Slide 4" },
    { image: slide1, alt: "Slide 5" },
  ];

  useEffect(() => {
    if (prevRef.current && nextRef.current && swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div>
      {/* Navigation Buttons */}
      <div className="nav_buttons flex gap-5 py-5 px-10">
        <button
          ref={prevRef}
          className="text-gray-500 cursor-pointer flex justify-center items-center relative z-20 p-1"
        >
          <LuChevronLeft className="w-8 h-8 border-2 border-gray-500 rounded-full" />
        </button>
        <button
          ref={nextRef}
          className="text-gray-500 cursor-pointer flex justify-center items-center relative z-20 p-1"
          
        >
          <LuChevronRight className="w-8 h-8 border-2 border-gray-500 rounded-full" />
        </button>
      </div>

      {/* Swiper Slider */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={4}
        spaceBetween={5}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {amentitiesImages.map((item, index) => (
          <SwiperSlide key={index}>
            <Lightbox
              images={[
                {
                  src: item.image,
                  title: item.alt,
                  description: "Click to open in full view",
                },
              ]}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="!w-[350px] !h-[300px] object-cover cursor-pointer"
              />
            </Lightbox>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
