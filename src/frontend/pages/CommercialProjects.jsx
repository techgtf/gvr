import * as CONFIG from "../../../config";
import { lazy } from "react";
import { Link } from "react-router-dom";
import CommonHeading from "../components/commonHeading";
import CommonPera from "../components/commonPera";
import SlideIn from "../components/Animations/SlideIn";
import FadeIn from "../components/Animations/FadeIn";
import WaterMarkHeading from "../components/verticalWaterMarkHeading";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";

// // Import Images
import warehouse1 from "/assets/frontend/images/commercialProjects/warehouse/warehouse-1.webp";
import warehouse2 from "/assets/frontend/images/commercialProjects/warehouse/warehouse-2.webp";
import warehouse3 from "/assets/frontend/images/commercialProjects/warehouse/warehouse-3.webp";
import warehouse4 from "/assets/frontend/images/commercialProjects/warehouse/warehouse-4.webp";
import warehouse5 from "/assets/frontend/images/commercialProjects/warehouse/warehouse-5.webp";

import mall1 from "/assets/frontend/images/commercialProjects/mall/mall-1.webp";
import mall2 from "/assets/frontend/images/commercialProjects/mall/mall-2.webp";
import mall3 from "/assets/frontend/images/commercialProjects/mall/mall-3.webp";
import mall4 from "/assets/frontend/images/commercialProjects/mall/mall-4.webp";
import mall5 from "/assets/frontend/images/commercialProjects/mall/mall-5.webp";

import retail1 from "/assets/frontend/images/commercialProjects/retail/retail-1.webp";
import retail2 from "/assets/frontend/images/commercialProjects/retail/retail-2.webp";
import retail3 from "/assets/frontend/images/commercialProjects/retail/retail-3.webp";
import retail4 from "/assets/frontend/images/commercialProjects/retail/retail-4.webp";
import retail5 from "/assets/frontend/images/commercialProjects/retail/retail-5.webp";

gsap.registerPlugin(ScrollTrigger);
//
const HeroSectionAboutUs = lazy(() =>
  import("../components/aboutUs/HeroSectionAboutUs")
);

const projects = [
  {
    id: 1,
    name: "WAREHOUSES",
    projects: [
      {
        name: "Moser Baer Solar Ltd / Warehouse",
        address: "66A, Suraj Pur, Greater Noida, UP 201306",
      },
      {
        name: "Tavru Sohna",
        address: "Sohna, Haryana",
      },
      {
        name: "Moserbear Part 2",
        address: "Surajpur, Greater Noida",
      },
    ],
    description: `Our warehouses, including the Moser Baer Solar Ltd Warehouse
                  in Greater Noida, offer cutting-edge logistics and storage
                  solutions tailored to modern supply chain requirements.
                  Strategically located in key industrial zones, these
                  warehouses ensure smooth transportation, efficient inventory
                  management, and maximum operational efficiency. With large
                  land parcels, robust security infrastructure, and scalable
                  storage capacities, our warehouses are designed to support
                  growing industries, e-commerce businesses, and large-scale
                  manufacturing units`,
    images: [warehouse1, warehouse2, warehouse3, warehouse4, warehouse5],
    totalProjects: 3,
  },
  {
    id: 2,
    name: "MALL",
    projects: [{ name: "GREAT VALUE MALL", address: "Ram Ghat Road, Aligarh" }],
    description: `The Great Value Mall in Aligarh is a vibrant shopping and entertainment destination, bringing together top brands, fine dining, and engaging leisure experiences under one roof. Located in a high-footfall area, it serves as a commercial epicenter, attracting consumers from across the region. Featuring renowned brands like Bikanerwala, Levi’s, Café Coffee Day, Spencer’s, and Cineplex, the mall is designed to provide a seamless shopping experience for families, young professionals, and urban dwellers.`,
    totalProjects: 1,
    images: [mall1, mall2, mall3, mall4, mall5],
  },
  {
    id: 3,
    name: "RETAIL",
    projects: [
      {
        name: "PERNIA",
        address:
          "The Villa Haven’, Ten Style Mile, 4-A, Kalka Das Marg, Mehrauli, New Delhi – 110030",
      },
      {
        name: "GAP",
        address:
          "Unit no 201, First Floor, DLF South Court, District Centre, Sake, New Delhi, Delhi 110017",
      },
      {
        name: "COMPLEX MADANGIR",
        address: "Local Shopping Center, Madangir, New Delhi",
      },
      {
        name: "JHARKHAND BHAWAN",
        address: "13, Munirka Marg,  Vasant Vihar, New Delhi, Delhi 110057",
      },
    ],
    description: `From exclusive designer boutiques to high-profile corporate offices, Great Value Realty develops premium high street retail & office spaces that cater to businesses of all scales. Our Pernia’s Pop-Up Store in Mehrauli, located on the prestigious Qutub-Mehrauli Road, is a prime example of a luxury retail destination designed for high-end fashion brands. Additionally, our GAP India South Asia Corporate Office in DLF South Court, Saket, provides an ideal business environment for global enterprises. We focus on offering prime locations, modern infrastructure, and cutting-edge amenities to ensure that businesses operate with efficiency, convenience, and prestige.`,
    images: [retail1, retail2, retail3, retail4, retail5],
    totalProjects: 4,
  },
];

const CommercialProjects = () => {
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
      const images = document.querySelectorAll(".warehouse-images img");

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
            trigger: ".warehouse-images",
            start: "top 90%",
            end: "bottom 20%",
            scrub: false,
          },
        }
      );

      ScrollTrigger.refresh();
      console.log("✅ GSAP Animations Refreshed!");
    }, 300);
  }, []);

  const openLightbox = (i) => {
    setCurrentIndex(i);
    setOpen(true);
  };

  const animationConfig1 = {
    stagger: -0.1,
  };

  return (
    <section className="bg-[#EFF5FA]">
      <HeroSectionAboutUs
        img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/commercialProjects/commercial_banner.webp`}
        heading={"COMMERCIAL  PROJECTS"}
        breadCrumb={"HOME - COMMERCIAL  PROJECTS"}
        extraClassesImg={"objectRight object-top"}
      />
      <div className="overview_section 2xl:pt-[80px] px-[30px] pt-[40px] xl:pt-[30px] lg:pb-0 pb-[0] lg:mb-0 mb-[50px]">
        <div className="headingWrap lg:max-w-[79%] max-w-[100%] m-auto text-center">
          <CommonHeading
            HeadingText={
              "Empowering Businesses with Future-Ready Commercial Spaces"
            }
            HeadingClass="xl:text-center text-left xl:pb-[0px] pb-[35px]"
          />
        </div>
        <SlideIn duration={2} delay={0.5}>
          <div
            style={{
              borderTop: "1px solid #b1b1b1",
              borderBottom: "1px solid #b1b1b1",
            }}
            className="content !px-0 !py-[35px] lg:max-w-[85%] w-[100%] m-auto lg:mt-[50px] lg:mb-[50px] mb-[20px] text-center"
          >
            <CommonPera
              PeraClass="fontItalic text-justify xl:text-center !p-[0px]"
              //   PeraText="The genesis of Great Value Industries dates to 1970 when the group set up its glassware division. In 1990 GVIL diversified into together supplying quality packaging products to prestigious."
              PeraText={
                "At Great Value Realty, we believe that commercial real estate is more than just infrastructure, it’s about creating dynamic spaces that drive business success, enhance visibility, and provide sustainable growth. Whether its high-end designer retail stores, thriving shopping malls, premium corporate offices, or industrial warehouses, each of our developments is crafted to meet the evolving needs of businesses. With strategic locations, state-of-the-art infrastructure, and a deep understanding of market demands, we deliver exceptional commercial spaces that offer both functionality and long-term value."
              }
            />
          </div>
        </SlideIn>
      </div>
      <div className="text-[11px] flex xl:justify-center items-center xl:items-start mb-[2rem] xl:mb-[0px]  flex-col xl:flex-row">
        <h3 className="uppercase midlandfontmedium tracking-[2px] xl:mr-[2rem] mb-[2rem] xl:mb-[0px]">
          2,000,000 sq. ft.
        </h3>
        <h3 className="uppercase midlandfontmedium tracking-[2px]">
          2,000,000 sq. ft.
        </h3>
      </div>
      <div className="xl:p-[70px] xl:pb-[40px] p-[20px]">
        {projects.map((project) => {
          return (
            <div className="text-[14px] xl:flex-row flex-col mb-[2.4rem] pb-[1rem] flex justify-between text-primary border-b-[#ddd] border-b-[1.5px] border-b-solid">
              <h2 className="midlandfontmedium text-[10px] tracking-[3px] ">
                {project.name}
              </h2>
              {/* <Link to={"../#" + project.id}> */}
              <div className="flex items-center xl:mt-[0px] mt-[1rem]">
                <h3 className="midlandfontmedium text-[10px] tracking-[3px] mr-[0.7rem]">
                  TOTAL PROJECTS
                </h3>
                <p className="midlandfontmedium text-[10px] tracking-[3px] mr-[0.7rem]">
                  {project.totalProjects}
                </p>

                <img
                  src={`${CONFIG.ASSET_IMAGE_URL}/frontend/images/icons/download.png`}
                  className="w-[25px] h-[25px]"
                  alt="download"
                />
              </div>
              {/* </Link> */}
            </div>
          );
        })}
      </div>
      {projects.map((project, index) => (
        <CommercialProjectSection key={index} project={project} />
      ))}
    </section>
  );
};

const CommercialProjectSection = ({ project }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper && prevRef.current && nextRef.current) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <section
      id={project.id}
      className="about bg-[#EFF5FA] relative px-5 pt-[0px] xl:pt-5 md:px-12 py-10 md:py-14"
    >
      <div className="absolute h-full flex items-center left-20 bottom-0"></div>

      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-4">
          <FadeIn duration={2} delay={0.7}>
            <CommonHeading HeadingText={project.name} />
          </FadeIn>
          <p className="text-[4vw] left-[5rem] absolute xl:block hidden opacity-[0.015] [writing-mode:sideways-lr] tracking-[8px] midlandfontmedium ">
            {project.name}
          </p>
        </div>
        <div className="col-span-12 md:col-span-8 mt-4 md:mt-0">
          <div className="about_desc">
            <SlideIn duration={0.8} delay={0.2}>
              <p className="text-justify text-[11px] font-[300] tracking-[2px]">
                {project.description}
              </p>
            </SlideIn>
          </div>
          <div className="mt-[4rem]">
            <h3 className="uppercase text-primary border-b-[1px] border-b-primary pb-[0.4rem] text-[16px]">
              All Projects
            </h3>
            {project.projects.map((proj) => {
              return (
                <div className="flex justify-between flex-wrap items-center border-b-[1px] pb-[0.8rem] mt-[1.5rem] border-b-primary">
                  <p className="border-r-[1px] text-left basis-[30%] pr-[0.2rem] text-[13px] text-primary border-r-solid border-r-[#ddd]">
                    {proj.name}
                  </p>
                  <p className="border-r-[1px]  basis-[30%] border-r-solid border-r-[#ddd]">
                    {proj.address}
                  </p>
                  <div className="basis-[25%] ">
                    <button className="bg-primary text-[11px] py-[8px] px-[15px] text-white">
                      {proj.name == "Tavru Sohna" ||
                      proj.name == "Moserbear Part 2"
                        ? "COMING SOON"
                        : "READ MORE"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-20">
        <div className="nav_buttons flex gap-5 py-5 px-10 justify-center md:justify-end">
          <button
            ref={prevRef}
            className="text-gray-500 cursor-pointer flex justify-center items-center relative z-20 p-1"
          >
            <LuChevronLeft className="w-[30px] md:w-8 h-[30px] md:h-8 opacity-80 border-2 hover:border-0 border-gray-500 bg-transparent hover:bg-[#EFF5FA] rounded-full" />
          </button>
          <button
            ref={nextRef}
            className="text-gray-500 cursor-pointer flex justify-center items-center relative z-20 p-1"
          >
            <LuChevronRight className="w-[30px] md:w-8 h-[30px] md:h-8 opacity-80 border-2 hover:border-0 border-gray-500 bg-transparent hover:bg-[#EFF5FA] rounded-full" />
          </button>
        </div>

        <div className={project.name.toLowerCase() + "-images"}>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={5}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {project.images.map((item, i) => (
              <SwiperSlide key={i}>
                <img
                  src={item}
                  alt={`${project.name} Image ${i + 1}`}
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
              slides={project.images.map((item, index) => ({
                src: item,
                title: `Image ${index + 1}`,
              }))}
              plugins={[Fullscreen, Zoom]}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CommercialProjects;
