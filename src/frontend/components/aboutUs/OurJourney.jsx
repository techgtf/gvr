import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const OurJourney = () => {
  const elementRef = useRef(null);
  const imgClusterRef = useRef(null);

  const projects = [
    {
      year: 1970,
      category: "Glassware",
      timelineImg: "1970-1.webp",
      images: ["1970-1.webp", "1970-2.webp", "1970-3.webp", "1970-4.webp"],
      description:
        "Ventured into glassware manufacturing, marking the foundation of the journey.",
    },

    {
      year: 1990,
      images: ["1990-1.webp", "1990-2.webp", "1990-3.webp", "1990-4.webp"],
      category: "Plastic & Packaging",
      timelineImg: "1990-1.webp",
      description:
        "Expanded into plastic and packaging solutions to diversify offerings.",
    },
    {
      year: 2001,
      images: ["2001-1.webp", "2001-2.webp", "2001-3.webp", "2001-4.webp"],
      category: "Food Processing",
      timelineImg: "2001-1.webp",
      description:
        "Entered the food processing industry, leveraging innovation and quality.",
    },
    {
      year: 2008,
      category: "Jharkhand Bhawan",
      timelineImg: "2008-1.webp",
      images: ["2008-1.webp", "2008-2.webp", "2008-3.webp", "2008-4.webp"],
      description:
        "Turnkey Project with Engineers India Ltd: Transformed 19,000 sq. ft. into a modern, sustainable architectural space.",
    },
    {
      year: 2009,
      images: ["2009-1.webp", "2009-2.webp", "2009-3.webp", "2009-4.webp"],
      project: [
        {
          year: 2009,
          timelineImg: "2009-1.webp",
          category: "Great Value Mall",

          description:
            "Revolutionized retail in Aligarh with cutting-edge concepts and immersive experiences.",
        },
        {
          year: 2009,
          category: "Real Estate",
          timelineImg: "2009-1.webp",
          description:
            "Diversified into real estate development to create impactful spaces.",
        },
      ],
    },
    {
      year: 2010,
      timelineImg: "2010-1.webp",
      images: ["2010-1.webp", "2010-2.png ", "2010-3.png ", "2010-4.png "],
      category: "Great Value Sharanam",
      description:
        "A luxurious residential project spread across 16 acres, featuring 16 towers with world-class amenities.",
    },
    {
      year: 2011,
      category: "1000 Trees",
      images: ["2011-1.webp", "2011-2.webp", "2011-3.webp", "2011-4.webp"],
      timelineImg: "2011-1.webp",
      description:
        "An eco-conscious residential project promoting sustainability by integrating nature into modern living.",
    },
    {
      year: 2012,
      category: "Commercial Complex",
      images: ["2012-1.webp", "2012-2.webp", "2012-3.webp", "2012-4.webp"],
      timelineImg: "2012-1.webp",
      description:
        "A premium office complex in South Delhi, blending functional design with luxury.",
    },
    {
      year: 2018,
      timelineImg: "2018-1.webp",
      images: ["2018-1.webp", "2018-2.webp", "2018-3.webp", "2018-4.webp"],
      category: "Residential Floors",
      description:
        "Elegant G+3 residential units in South Delhi, combining sophistication with premium finishes.",
    },

    {
      year: 2019,
      images: ["2019-1.webp", "2019-2.webp", "2019-3.webp", "2019-4.webp"],
      project: [
        {
          timelineImg: "2019-1.webp",
          year: 2019,

          category: "Distressed Asset Reconstruction",
          description:
            "Initiated efforts to convert distressed properties into valuable assets.",
        },
        {
          year: 2019,
          category: "Logistics & Industrial Park, Greater Noida",
          description:
            "Converted a 67-acre distressed property into a thriving park hosting 14 multinational companies.",
        },
        {
          year: 2019,
          category: "Great Value Anandam",
          description:
            "An iconic 30-story tower offering contemporary design and space-efficient layouts.",
        },
        {
          year: 2019,
          category: "Megasoft Infrastructure",
          description:
            "Acquired 4,615 sqm of institutional land for future commercial and mixed-use projects.",
        },
        {
          year: 2019,
          category: "East Coast Thermal Plant",
          description:
            "Acquired a distressed thermal plant for potential redevelopment.",
        },
      ],
    },
    {
      year: 2020,
      images: ["2020-1.webp", "2020-2.webp", "2020-3.webp", "2020-4.webp"],
      timelineImg: "2020-1.webp",
      category: "Moser Baer Solar Ltd",
      description:
        "Secured 33 acres of industrial land, paving the way for redevelopment and optimization.",
    },

    {
      year: 2022,
      images: ["2022-1.webp", "2022-2.webp", "2022-3.webp", "2022-4.webp"],
      project: [
        {
          year: 2022,

          timelineImg: "2022-1.webp",
          category: "Office Property",
          description:
            "Acquired a premium 3,095 sq. ft. office space in a prime business district.",
        },
        {
          year: 2022,
          category: "Harig Crankshaft",
          description: "Acquired a non-performing asset for revival.",
        },
      ],
    },

    {
      year: 2023,
      images: ["2023-1.webp", "2023-2.webp", "2023-3.webp", "2023-4.webp"],
      project: [
        {
          timelineImg: "2023-1.webp",
          year: 2023,

          category: "Alternative Investment Fund (AIF)",
          description:
            "Launched a strategic investment initiative targeting high-potential assets.",
        },
        {
          year: 2023,
          timelineImg: "2023-1.webp",
          category: "Hindon River Mill Ltd",
          description:
            "Acquired 48.26 acres for an upscale villa complex in a prime location.",
        },
      ],
    },
    {
      year: 2024,
      images: ["2024-1.webp", "2024-2.webp", "2024-3.webp", "2024-4.webp"],
      timelineImg: "2024-1.webp",
      category: "Great Value Ekanam",
      description:
        "Upcoming high-end luxury residential project over 4 acres with world-class amenities and modern architecture.",
    },
  ];
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(1); // State to hold the selected project

  useEffect(() => {
    const element = elementRef.current;
    const imgCluster = imgClusterRef.current;
    if (!element) return;
    if (!imgCluster) return;

    const animation = gsap.fromTo(
      element,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        // duration: 1,
        // delay: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 100%",
          end: "bottom 20%",
        },
      }
    );

    const animationForImgCluster = gsap.fromTo(
      imgCluster,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        // duration: 1,
        // delay: 1,
        scrollTrigger: {
          trigger: imgCluster,
          start: "top 100%",
          end: "bottom 20%",
        },
      }
    );
    return () => {
      animation.scrollTrigger?.kill(); // Cleanup ScrollTrigger
      animationForImgCluster.scrollTrigger?.kill();
    };
  }, [selectedProjectIndex]);

  // const sectionRef = useTextAnimation(
  //   { from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1, duration: 1 } },
  //   [selectedProjectIndex]
  // );

  return (
    <div className="max-w-[100%] mb-[4rem] xl:px-[5rem] px-[2.5rem] py-[3.5rem] xl:py-[5rem] bg-[#EFF5FA]">
      <h3 className="sectionHeading text-center xl:text-left tracking-[5px] text-[black] midlandfontmedium">
        OUR JOURNEY
      </h3>
      <div className="flex justify-between items-center flex-wrap">
        {selectedProjectIndex == 4 ||
        selectedProjectIndex == 9 ||
        selectedProjectIndex == 11 ||
        selectedProjectIndex == 12 ? (
          <div className="relative xl:basis-[48%] xl:my-[2rem]  mb-[0rem] pt-[2rem] xl:pt-[0rem] overflow-y-scroll xl:max-h-[300px] no-scrollbar basis-[100%]">
            {projects[selectedProjectIndex].project.map((proj, index) => {
              return (
                <div 
                key={index}
                  className={
                    "xl:basis-[50%] no-scrollbar border-b-[1px] border-b-solid border-b-[#ddd] mr-[16px] pb-[10px] mb-[20px] basis-[100%] justify-between flex flex-wrap text-center "
                  }
                  ref={elementRef}
                >
                  <div className="basis-[40%] text-left">
                    <h4 className="midlandfontbold mb-[10px] xl:!text-[11px] text-[16px] sectionHeading tracking-[8px] text-primary">
                      {proj.year}
                    </h4>
                    <p className="text-primary tracking-[2px] leading-[20px] !text-[12px] ">
                      {proj.category}
                    </p>
                  </div>

                  <p className="basis-[55%] common_pera text-left !leading-[21px]">
                    {proj.description}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <div
            className="xl:basis-[50%] basis-[100%]  text-center  xl:px-[2.5rem] "
            ref={elementRef}
          >
            <h4 className="midlandfontbold mt-[3rem] xl:!text-[18px] text-[16px]  xl:mb-[2rem] mb-[1.5rem] sectionHeading tracking-[8px] text-primary">
              {projects[selectedProjectIndex].year}
            </h4>
            <p className="midlandfontmedium text-primary tracking-[4px] !text-[13px] mb-[1.3rem]">
              {projects[selectedProjectIndex].category}
            </p>
            <p className="mt-[1.3rem] text-[13px] font-italic poppins-regular leading-[22px] tracking-[1px]">
              {projects[selectedProjectIndex].description}
            </p>
          </div>
        )}

        <div
          ref={imgClusterRef}
          className="xl:basis-[50%] basis-[100%] xl:inline-block xl:border-l-[1px] xl:border-l-solid xl:border-l-[#B1B1B1] border-opacity-[0.5] h-[400px] relative flex flex-wrap justify-center"
        >
          {projects[selectedProjectIndex].images.map((img, index) => {
            if (index == 0) {
              return (
                <img key={index}
                  src={`assets/frontend/images/aboutus/ourJourney/${projects[selectedProjectIndex].year}/${img}`}
                  alt={projects[selectedProjectIndex].year + index + ".img"}
                  className="xl:w-[200px] xl:h-[150px] w-[150px] h-[100px] absolute top-[8%] xl:top-0 z-[1] left-[25%]"
                />
              );
            }
            if (index == 1) {
              return (
                <img
                  src={`assets/frontend/images/aboutus/ourJourney/${projects[selectedProjectIndex].year}/${img}`}
                  alt={projects[selectedProjectIndex].year + index + ".img"}
                  className="xl:w-[200px] xl:h-[150px] w-[150px] h-[100px] xl:right-[13%] xl:top-[25%] top-[22%] right-[0%]  absolute z-[2]"
                />
              );
            }
            if (index == 2) {
              return (
                <img
                  src={`assets/frontend/images/aboutus/ourJourney/${projects[selectedProjectIndex].year}/${img}`}
                  alt={projects[selectedProjectIndex].year + index + ".img"}
                  className="xl:w-[200px] xl:h-[150px] w-[150px] h-[100px] xl:top-[25%] top-[22%] left-[0%] xl:left-[8%] absolute z-[2]"
                />
              );
            }
            if (index == 3) {
              return (
                <img
                  src={`assets/frontend/images/aboutus/ourJourney/${projects[selectedProjectIndex].year}/${img}`}
                  alt={projects[selectedProjectIndex].year + index + ".img"}
                  className="xl:w-[200px] xl:h-[150px] w-[150px] h-[100px] absolute right-[27%] bottom-[35%] xl:bottom-[15%] xl:right-[33%] z-[3]"
                />
              );
            }
          })}
        </div>
      </div>
      <div className="relative mt-[-6rem] xl:mt-[0rem]">
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 120,
            },
            1330: {
              slidesPerView: 5,
              spaceBetween: 150,
            },
          }}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          className="relative"
        >
          <div className="absolute opacity-[0.5] left-[10%] xl:top-[50%] top-[39%] h-[1px] w-[85%] bg-[#B1B1B1]" />

          {projects.map((project, index) => (
            <SwiperSlide key={project.year}>
              <div
                className="xl:w-60 inline-block cursor-pointer"
                onClick={() => setSelectedProjectIndex(index)}
              >
                <figure
                  className={`border relative bg-[#EFF5FA] border-solid border-[#B1B1B1] z-10 xl:w-32  xl:h-32 w-[4rem] h-[4rem] xl:flex-row flex-col flex justify-center items-center rounded-full ${
                    selectedProjectIndex == index &&
                    "border-primary xl:border-[1.5px] border-[1px]"
                  }`}
                >
                  <img
                    src={`assets/frontend/images/aboutus/ourJourney/${
                      index == 4 || index == 9 || index == 11 || index == 12
                        ? project.project[0].year
                        : project.year
                    }/${
                      index === 4 || index === 9 || index === 11 || index === 12
                        ? project.project[0].timelineImg
                        : project.timelineImg
                    }`}
                    alt="timeline"
                    className="xl:w-[7.5rem] object-cover xl:h-[7.5rem] w-[3.5rem] h-[3.5rem] rounded-full"
                  />
                  <figcaption className="text-primary hidden xl:block font-medium xl:text-[15px] text-[11px] xl:right-[-60%] right-[-70%]  top-[11px] xl:absolute top-7 right-[-40%]">
                    {index == 4 || index == 9 || index == 11 || index == 12
                      ? project.project[0].year
                      : project.year}
                  </figcaption>
                </figure>
                <figcaption className="text-primary block xl:hidden text-center font-medium xl:text-[15px] text-[11px] xl:right-[-60%] right-[-70%]  top-[11px] xl:absolute top-7 right-[-40%]">
                  {index == 4 || index == 9 || index == 11 || index == 12
                    ? project.project[0].year
                    : project.year}
                </figcaption>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-prev xl:!left-[-4%] absolute xl:!top-[50%]  !top-[39%] !left-[-9%]">
          <img
            src="assets/frontend/images/icons/left_arrow.png"
            alt="Previous"
            className="!w-[15px] !h-[15px]"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="swiper-button-next xl:!right-[-4%] absolute xl:!top-[50%] !top-[39%] !right-[-9%]">
          <img
            src="assets/frontend/images/icons/right_arrow.png"
            alt="Next"
            className="!w-[15px] !h-[15px]"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

{
  /* <span className="border-b-[2px] border-b-[#33638B] tracking-[4px] px-[10px] pb-[10px]">
             ALIGARH
            </span> */
}

export default OurJourney;
