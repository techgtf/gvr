import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import gallery1 from "/assets/frontend/images/microsite/gallery/gallery1.png";
import gallery2 from "/assets/frontend/images/microsite/gallery/gallery2.png";
import gallery3 from "/assets/frontend/images/microsite/gallery/gallery3.png";
import gallery4 from "/assets/frontend/images/microsite/gallery/gallery4.png";
import gsap from "gsap";
import CommonHeading from "../../commonHeading";
import SlideIn from "../../Animations/SlideIn";
import FadeIn from "../../Animations/FadeIn";

function ProjectGallery() {
  const [activeTab, setActiveTab] = useState("actual");
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const actualImages = [gallery1, gallery2, gallery3, gallery4];
  const renderImages = [gallery4, gallery3, gallery2, gallery1];

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

  const imageData = activeTab === "actual" ? actualImages : renderImages;

  return (
    <section className="project_gallery  flex items-center px-5 md:px-12 py-5 md:py-14 bg-[#EFF5FA]" id="gallery">
      <div className="grid sm:grid-cols-2 grid-cols-1">
        <div className="project_gallery_content">
        <FadeIn duration={2} delay={0.5}> 
            <CommonHeading HeadingText="Project Gallery" />        
            </FadeIn>
          <div className="flex items-center pt-10 project_gallery_tabs">
          <SlideIn duration={0.8} delay={0.2}>
            <h4
              className={`mr-4 uppercase mt-14 cursor-pointer ${
                activeTab === "actual" ? "text-primary" : "text-gray-500"
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
              className={`mr-4 uppercase mt-10 cursor-pointer ${
                activeTab === "render" ? "text-primary" : "text-gray-500"
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
              <LuChevronLeft className="w-8 h-8 border-2 hover:border-0 border-gray-500 bg-transparent hover:bg-white rounded-full" />
            </button>
            <button
              ref={nextRef}
              className="text-gray-500 cursor-pointer flex justify-center items-center relative z-20 p-1"
            >
              <LuChevronRight className="w-8 h-8 border-2 hover:border-0 border-gray-500 bg-transparent hover:bg-white rounded-full" />
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
                  />
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ProjectGallery;
