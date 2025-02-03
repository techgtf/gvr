import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import { useTextAnimation } from "../useTextAnimation";
import SlideIn from "../Animations/SlideIn";

const OurJourney = () => {
  const projects = [
    {
      year: 1970,
      category: "Glassware",
      timelineImg: "timeline.png",
      description:
        "Ventured into glassware manufacturing, marking the foundation of the journey.",
    },

    {
      year: 1990,
      category: "Plastic & Packaging",
      timelineImg: "timeline.png",
      description:
        "Expanded into plastic and packaging solutions to diversify offerings.",
    },
    {
      year: 2001,
      category: "Food Processing",
      timelineImg: "timeline.png",
      description:
        "Entered the food processing industry, leveraging innovation and quality.",
    },
    {
      year: 2008,
      category: "Jharkhand Bhawan",
      timelineImg: "2008.jpg",

      description:
        "Turnkey Project with Engineers India Ltd: Transformed 19,000 sq. ft. into a modern, sustainable architectural space.",
    },
    {
      project: [
        {
          year: 2009,
          timelineImg: "2009.jpg",
          category: "Great Value Mall",
          description:
            "Revolutionized retail in Aligarh with cutting-edge concepts and immersive experiences.",
        },
        {
          year: 2009,
          category: "Real Estate",
          timelineImg: "2009.jpg",
          description:
            "Diversified into real estate development to create impactful spaces.",
        },
      ],
    },
    {
      year: 2010,
      timelineImg: "2010.jpg",
      category: "Great Value Sharanam",
      description:
        "A luxurious residential project spread across 16 acres, featuring 16 towers with world-class amenities.",
    },
    {
      year: 2011,
      category: "1000 Trees",
      timelineImg: "timeline.png",
      description:
        "An eco-conscious residential project promoting sustainability by integrating nature into modern living.",
    },
    {
      year: 2012,
      category: "Commercial Complex",
      timelineImg: "timeline.png",
      description:
        "A premium office complex in South Delhi, blending functional design with luxury.",
    },
    {
      year: 2018,
      timelineImg: "timeline.png",
      category: "Residential Floors",
      description:
        "Elegant G+3 residential units in South Delhi, combining sophistication with premium finishes.",
    },

    {
      project: [
        {
          timelineImg: "2019.JPG",
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
      timelineImg: "timeline.png",
      category: "Moser Baer Solar Ltd",
      description:
        "Secured 33 acres of industrial land, paving the way for redevelopment and optimization.",
    },

    {
      project: [
        {
          year: 2022,
          timelineImg: "timeline.png",
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
      project: [
        {
          timelineImg: "2023.png",
          year: 2023,
          category: "Alternative Investment Fund (AIF)",
          description:
            "Launched a strategic investment initiative targeting high-potential assets.",
        },
        {
          year: 2023,
          timelineImg: "2023.png",
          category: "Hindon River Mill Ltd",
          description:
            "Acquired 48.26 acres for an upscale villa complex in a prime location.",
        },
      ],
    },
    {
      year: 2024,
      timelineImg: "timeline.png",
      category: "Great Value Ekanam",
      description:
        "Upcoming high-end luxury residential project over 4 acres with world-class amenities and modern architecture.",
    },
  ];
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(2); // State to hold the selected project
  const sectionRef = useTextAnimation(
    { from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1, duration: 1 } },
    []
  );
  return (
    <div className="max-w-[100%] mb-[4rem] xl:px-[5rem] px-[2.5rem] py-[3.5rem] xl:py-[5rem] bg-[#EFF5FA]">
      <h3 className="sectionHeading tracking-[5px] text-[black] midlandfontmedium">
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
                  className={
                    "xl:basis-[50%] no-scrollbar border-b-[1px] border-b-solid border-b-[#ddd] mr-[16px] pb-[10px] mb-[20px] basis-[100%] justify-between flex flex-wrap text-center "
                  }
                  ref={sectionRef}
                >
                  <div className="basis-[40%] text-left">
                    <h4 className="midlandfontbold mb-[10px] xl:!text-[11px] text-[16px] sectionHeading tracking-[8px] text-primary">
                      {proj.year}
                    </h4>
                    <p className=" text-primary tracking-[2px] leading-[20px] !text-[12px] ">
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
            ref={sectionRef}
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

        <div className="basis-[50%] hidden xl:inline-block border-l-[1px] border-l-solid border-l-[#B1B1B1] h-[400px] relative flex flex-wrap justify-center">
          <img
            src="assets/frontend/images/aboutus/ourJourney/1.jpg"
            alt="1.jpg"
            className="w-[200px] h-[150px] absolute top-0 z-[1] left-[25%]"
          />
          <img
            src="assets/frontend/images/aboutus/ourJourney/2.jpg"
            alt="2.jpg"
            className="w-[200px] right-[17%] top-[16%] h-[150px] absolute z-[2]"
          />
          <img
            src="assets/frontend/images/aboutus/ourJourney/3.jpg"
            alt="3.jpg"
            className="w-[200px] h-[150px] top-[25%] left-[8%] absolute z-[2]"
          />
          <img
            src="assets/frontend/images/aboutus/ourJourney/4.jpg"
            alt="4.jpg"
            className="w-[200px] h-[150px] absolute bottom-[15%] right-[33%] z-[3]"
          />
        </div>
      </div>
      <div className="relative mt-[3rem] xl:mt-[0rem]">
        <Swiper
          // spaceBetween={120}
          // slidesPerView={5}

          breakpoints={{
            300: {
              slidesPerView: 2,
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
          <div className="absolute left-[10%] top-[50%] h-[1px] w-[85%] bg-[#B1B1B1]" />

          {projects.map((project, index) => (
            <SwiperSlide key={project.year} className="">
              <div
                className="xl:w-60  inline-block cursor-pointer"
                onClick={() => setSelectedProjectIndex(index)}
              >
                <figure
                  className={`border relative border-solid border-[#B1B1B1] z-10 xl:w-32 xl:h-32 w-[4rem] h-[4rem] flex justify-center items-center rounded-full ${
                    selectedProjectIndex == index &&
                    "border-primary xl:border-[3px] border-[2px]"
                  }`}
                >
                  <img
                    src={`assets/frontend/images/aboutus/ourJourney/${
                      index === 4 || index === 9 || index === 11 || index === 12
                        ? project.project[0].timelineImg
                        : project.timelineImg
                    }`}
                    alt="timeline"
                    className="xl:w-[7.5rem] xl:h-[7.5rem] w-[3.5rem] h-[3.5rem] rounded-full"
                  />
                  <figcaption className="text-primary font-medium xl:text-[15px] text-[11px] xl:right-[-60%] right-[-70%]  top-[11px] absolute top-7 right-[-40%]">
                    {index == 4 || index == 9 || index == 11 || index == 12
                      ? project.project[0].year
                      : project.year}
                  </figcaption>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-prev xl:!left-[-4%] absolute !top-[50%] !left-[-9%]">
          <img
            src="assets/frontend/images/icons/left_arrow.png"
            alt="Previous"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="swiper-button-next xl:!right-[-4%] absolute !top-[50%] !right-[-9%]">
          <img
            src="assets/frontend/images/icons/right_arrow.png"
            alt="Next"
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
