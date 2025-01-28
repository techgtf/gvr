import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {Fullscreen, Zoom} from 'yet-another-react-lightbox/plugins'
import slide1 from "/assets/frontend/images/microsite/amentities/slider/slide1.png";
import slide2 from "/assets/frontend/images/microsite/amentities/slider/slide2.png";
import slide3 from "/assets/frontend/images/microsite/amentities/slider/slide3.png";
import slide4 from "/assets/frontend/images/microsite/amentities/slider/slide4.png";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import Lightbox from "yet-another-react-lightbox"; // Import the new lightbox package
import "yet-another-react-lightbox/styles.css"; // Import lightbox styles
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";

function Slider() {
  const [open, setOpen] = useState(false); // To control the Lightbox state
  const [currentIndex, setCurrentIndex] = useState(0); // To track the current index
  const [selectedImage, setSelectedImage] = useState(null); // To store selected image when clicked
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

  // Open lightbox on image click
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(amentitiesImages[index].image); // Set the clicked image as selected
    setOpen(true);
  };

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
        loop={true}
        slidesPerView={1} // Default to 1 slide per view
        spaceBetween={5}
        breakpoints={{
          640: {
            slidesPerView: 1, // Mobile devices
          },
          768: {
            slidesPerView: 2, // Tablets
          },
          1024: {
            slidesPerView: 4, // Laptops and larger screens
          },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {amentitiesImages.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.image}
              alt={item.alt}
              className="!w-[350px] !h-[200px] !object-cover cursor-pointer"
              onClick={() => openLightbox(index)} // Trigger lightbox on image click
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lightbox Component */}
      {open && (
        <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={amentitiesImages.map((item) => ({
          src: item.image,
          title: item.alt,
          description: "Click to open in full view",
        }))}
        thumbs={amentitiesImages.map((item) => ({
          src: item.image,
          title: item.alt,
        }))}
        zoom={{maxZoomPixelRatio: 2}}  // Adjust the zoom factor here
        plugins={[Fullscreen, Zoom]}
      />
      
      )}
    </div>
  );
}

export default Slider;
