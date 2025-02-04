import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import gallery1 from "/assets/frontend/images/microsite/gallery/gallery1.png";
import gallery2 from "/assets/frontend/images/microsite/gallery/gallery2.png";
import gallery3 from "/assets/frontend/images/microsite/gallery/gallery3.png";
import gallery4 from "/assets/frontend/images/microsite/gallery/gallery4.png";
import renderGallery1 from "/assets/frontend/images/microsite/gallery/render/gallery1.jpg";
import renderGallery2 from "/assets/frontend/images/microsite/gallery/render/gallery2.jpg";
import renderGallery3 from "/assets/frontend/images/microsite/gallery/render/gallery3.jpg";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CommonHeading from "../../commonHeading";
import SlideIn from "../../Animations/SlideIn";
import FadeIn from "../../Animations/FadeIn";

gsap.registerPlugin(ScrollTrigger);

function ProjectGallery() {
  const [activeTab, setActiveTab] = useState("actual");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const projectRef = useRef();

  const actualImages = [gallery1, gallery2, gallery3, gallery4];
  const renderImages = [renderGallery1, renderGallery2, renderGallery3, renderGallery1];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    gsap.fromTo(
      ".gallery_images img",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
    );
  };

  useEffect(() => {
    if (prevRef.current && nextRef.current && swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".gallery_images",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.7,
        stagger: 1,
        scrollTrigger: {
          trigger: projectRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setOpen(true);
    document.body.classList.add('lightbox-open');
  };

  const closeLightbox = () => {
    setOpen(false);
    document.body.classList.remove('lightbox-open');  // Remove class to hide cursor
  };

  const imageData = activeTab === "actual" ? actualImages : renderImages;

  return (
    <section
      ref={projectRef}
      className="project_gallery pb-20 flex items-center px-5 md:px-12 py-10 md:py-14 bg-[#EFF5FA]"
      id="gallery"
    >
      <div className="grid sm:grid-cols-2 grid-cols-1">
        <div className="project_gallery_content">
          <FadeIn duration={2} delay={0.5}>
            <CommonHeading HeadingText="Project Gallery" />
          </FadeIn>
          <div className="flex items-center pt-8 project_gallery_tabs">
            <SlideIn duration={0.8} delay={0.2}>
              <h4
                className={`mr-4 uppercase mt-14 cursor-pointer ${activeTab === "actual" ? "text-primary" : "text-gray-500"
                  }`}
                onClick={() => handleTabClick("actual")}
              >
                Project Actual Images
              </h4>
            </SlideIn>
            {activeTab === "actual" && (
              <div className="flex-1 border-t mt-14 mr-4 border-gray-300"></div>
            )}
          </div>

          <div className="flex items-center project_gallery_tabs">
            <SlideIn duration={0.8} delay={0.3}>
              <h4
                className={`mr-4 uppercase mt-10 cursor-pointer ${activeTab === "render" ? "text-primary" : "text-gray-500"
                  }`}
                onClick={() => handleTabClick("render")}
              >
                Project Render Images
              </h4>
            </SlideIn>
            {activeTab === "render" && (
              <div className="flex-1 border-t mt-10 mr-4 border-gray-300"></div>
            )}
          </div>
        </div>

        <div className="slider">
          <div className="nav_buttons flex justify-end gap-5 py-5">
            <button
              ref={prevRef}
              className="text-gray-500 cursor-pointer flex justify-center items-center relative z-20 p-1"
            >
              <LuChevronLeft className="w-[30px] cursor-pointer md:w-8 h-[30px] opacity-80 md:h-8 border-2 hover:border-0 border-gray-500 bg-transparent hover:bg-white rounded-full" />
            </button>
            <button
              ref={nextRef}
              className="text-gray-500 cursor-pointer flex justify-center items-center relative z-20 p-1"
            >
              <LuChevronRight className="w-[30px] cursor-pointer md:w-8 h-[30px] md:h-8 opacity-80 border-2 hover:border-0 border-gray-500 bg-transparent hover:bg-white rounded-full" />
            </button>
          </div>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={true}
            slidesPerView={1}
            spaceBetween={30}
            modules={[Navigation]}
            className="mySwiper gallery_images"
          >
            <SwiperSlide>
              <div className="grid grid-cols-2 gap-4">
                {imageData.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`slide ${index + 1}`}
                    className="w-[300px] h-[200px] object-cover"
                    onClick={() => openLightbox(index)}
                  />
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-2 gap-4">
                {imageData.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`slide ${index + 1}`}
                    className="w-[300px] h-[200px] object-cover"
                    onClick={() => openLightbox(index)}
                  />
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {open && (
          <Lightbox
            open={open}
            close={closeLightbox}
            index={currentIndex}
            slides={imageData.map((src) => ({ src }))}
            plugins={[Fullscreen, Zoom]}
          />
        )}
      </div>
    </section>
  );
}

export default ProjectGallery;
