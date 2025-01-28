import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";
const OurJourney = () => {
  const projects = [
    {
      year: 1970,
      category: "Glassware",
      description:
        "Ventured into glassware manufacturing, marking the foundation of the journey.",
    },
    {
      year: 1990,
      category: "Plastic & Packaging",
      description:
        "Expanded into plastic and packaging solutions to diversify offerings.",
    },
    {
      year: 2001,
      category: "Food Processing",
      description:
        "Entered the food processing industry, leveraging innovation and quality.",
    },
    {
      year: 2008,
      category: "Jharkhand Bhawan, Vasant Kunj, Delhi",
      description:
        "Turnkey Project with Engineers India Ltd: Transformed 19,000 sq. ft. into a modern, sustainable architectural space.",
    },
    {
      year: 2009,
      category: "Real Estate",
      description:
        "Diversified into real estate development to create impactful spaces.",
    },
    {
      year: 2009,
      category: "Great Value Mall, Aligarh",
      description:
        "Revolutionized retail in Aligarh with cutting-edge concepts and immersive experiences.",
    },
    {
      year: 2010,
      category: "Great Value Sharanam, Sector 107, Noida",
      description:
        "A luxurious residential project spread across 16 acres, featuring 16 towers with world-class amenities.",
    },
    {
      year: 2011,
      category: "1000 Trees, Dwarka Expressway",
      description:
        "An eco-conscious residential project promoting sustainability by integrating nature into modern living.",
    },
    {
      year: 2012,
      category: "Commercial Complex, Madangir",
      description:
        "A premium office complex in South Delhi, blending functional design with luxury.",
    },
    {
      year: 2018,
      category: "Residential Floors, Uday Park",
      description:
        "Elegant G+3 residential units in South Delhi, combining sophistication with premium finishes.",
    },
    {
      year: 2019,
      categories: [
        "Distressed Asset Reconstruction",
        "Logistics & Industrial Park, Greater Noida",
        "Great Value Anandam, Sector 107, Noida",
        "Megasoft Infrastructure, Sector 154, Noida",
        "East Coast Thermal Plant",
      ],
      descriptions: [
        "Initiated efforts to convert distressed properties into valuable assets.",
        "Converted a 67-acre distressed property into a thriving park hosting 14 multinational companies.",
        "An iconic 30-story tower offering contemporary design and space-efficient layouts.",
        "Acquired 4,615 sqm of institutional land for future commercial and mixed-use projects.",
        "Acquired a distressed thermal plant for potential redevelopment.",
      ],
    },
    {
      year: 2020,
      category: "Moser Baer Solar Ltd, Greater Noida",
      description:
        "Secured 33 acres of industrial land, paving the way for redevelopment and optimization.",
    },
    {
      year: 2022,
      category: "Office Property, Worli, Mumbai",
      description:
        "Acquired a premium 3,095 sq. ft. office space in a prime business district.",
    },
    {
      year: 2022,
      category: "Harig Crankshaft",
      description: "Acquired a non-performing asset for revival.",
    },
    {
      year: 2023,
      categories: [
        "Alternative Investment Fund (AIF)",
        "Hindon River Mill Ltd, Dasna, Ghaziabad",
      ],
      descriptions: [
        "Launched a strategic investment initiative targeting high-potential assets.",
        "Acquired 48.26 acres for an upscale villa complex in a prime location.",
      ],
    },
    {
      year: 2024,
      category: "Great Value Ekanam",
      description:
        "Upcoming high-end luxury residential project over 4 acres with world-class amenities and modern architecture.",
    },
  ];
  const [selectedProject, setSelectedProject] = useState(0); // State to hold the selected project

  return (
    <div className="max-w-[100%] mb-[4rem] px-[5rem] !pl-[4rem] py-[5rem] bg-[#EFF5FA]">
      <h3 className="sectionHeading tracking-[5px] text-[black] midlandfontmedium">
        OUR JOURNEY
      </h3>
      <div className="flex justify-between items-center flex-wrap">
        <div className="basis-[50%] text-center px-[2.5rem]">
          <h4 className="midlandfontbold !text-[18px] mb-[2rem] sectionHeading tracking-[8px] text-primary">
            2009
          </h4>
          <p className="midlandfontmedium text-primary tracking-[4px] !text-[13px] mb-[1.3rem]">
            GREAT VALUE MALL
          </p>
          <span className="border-b-[2px] border-b-[#33638B] tracking-[4px] px-[10px] pb-[10px]">
            ALIGARH
          </span>
          <p className="mt-[2rem] text-[13px] font-italic poppins-regular leading-[22px] tracking-[1px]">
            The initiative revolutionized Aligarh’s retail scene, establishing a
            new standard in shopping excellence. With cutting-edge retail
            concepts, premium brand outlets, and an immersive shopping
            atmosphere, it reimagined consumer experiences like never before.
          </p>
        </div>
        <div className="basis-[50%] border-l-[1px] border-l-solid border-l-[#B1B1B1] h-[400px] relative flex flex-wrap justify-center">
          <img
            src="assets/frontend/images/aboutus/ourJourney/1.jpg"
            alt="1.jpg"
            className="w-[200px] h-[150px] absolute top-0 z-[1] left-[25%]"
          />
          <img
            src="assets/frontend/images/aboutus/ourJourney/2.jpg"
            alt="2.jpg"
            className="w-[200px] right-[10%] top-[16%] h-[150px] absolute z-[2]"
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
      <div className="relative">
        <Swiper
          spaceBetween={120}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="relative"
        >
          <div className="absolute left-[10%] top-[50%] h-[1px] w-[85%] bg-[#B1B1B1]" />

          {projects.map((project) => {
            if (project.year != 2019 && project.year != 2023) {
              return (
                <SwiperSlide key={project.year}>
                  <div className="w-60 inline-block">
                    <figure className="border relative border-solid border-[#B1B1B1] z-10 w-32 h-32 flex justify-center items-center rounded-full">
                      <img
                        src="assets/frontend/images/aboutus/ourJourney/timeline.png"
                        alt="timeline"
                      />
                      <figcaption
                        className="text-primary font-medium absolute top-7 right-[-40%]"
                        style={{ fontSize: "15px" }}
                      >
                        {project.year}
                      </figcaption>
                    </figure>
                  </div>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>

        <div className="swiper-button-prev">
          <img
            src="assets/frontend/images/icons/left_arrow.png"
            alt="Previous"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="swiper-button-next">
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

export default OurJourney;
