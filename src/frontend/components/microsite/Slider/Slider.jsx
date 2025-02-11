import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import { Fullscreen, Zoom } from 'yet-another-react-lightbox/plugins';
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";

function Slider({ images = [] }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (prevRef.current && nextRef.current && swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div>
      <div className="nav_buttons flex gap-5 py-5 px-10 justify-center md:justify-start">
        <button ref={prevRef} className="text-gray-500 cursor-pointer flex justify-center items-center relative z-20 p-1">
          <LuChevronLeft className="w-[30px] md:w-8 h-[30px] md:h-8 opacity-80 border-2 hover:border-0 border-gray-500 bg-transparent hover:bg-[#EFF5FA] rounded-full" />
        </button>
        <button ref={nextRef} className="text-gray-500 cursor-pointer flex justify-center items-center relative z-20 p-1">
          <LuChevronRight className="w-[30px] md:w-8 h-[30px] md:h-8 opacity-80 border-2 hover:border-0 border-gray-500 bg-transparent hover:bg-[#EFF5FA] rounded-full" />
        </button>
      </div>

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
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.image}
              alt={item.alt}
              className="w-full md:!w-[350px] !h-[250px] !object-cover cursor-pointer"
              onClick={() => openLightbox(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={currentIndex}
          slides={images.map((item) => ({ src: item.image, title: item.alt }))}
          plugins={[Fullscreen, Zoom]}
        />
      )}
    </div>
  );
}

export default Slider;
