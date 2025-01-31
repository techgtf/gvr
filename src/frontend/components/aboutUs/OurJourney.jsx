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
      category: "Jharkhand Bhawan",
      description:
        "Turnkey Project with Engineers India Ltd: Transformed 19,000 sq. ft. into a modern, sustainable architectural space.",
    },
    {
      project: [
        {
          year: 2009,
          category: "Great Value Mall",
          description:
            "Revolutionized retail in Aligarh with cutting-edge concepts and immersive experiences.",
        },
        {
          year: 2009,
          category: "Real Estate",
          description:
            "Diversified into real estate development to create impactful spaces.",
        },
      ],
    },
    {
      year: 2010,
      category: "Great Value Sharanam",
      description:
        "A luxurious residential project spread across 16 acres, featuring 16 towers with world-class amenities.",
    },
    {
      year: 2011,
      category: "1000 Trees",
      description:
        "An eco-conscious residential project promoting sustainability by integrating nature into modern living.",
    },
    {
      year: 2012,
      category: "Commercial Complex",
      description:
        "A premium office complex in South Delhi, blending functional design with luxury.",
    },
    {
      year: 2018,
      category: "Residential Floors",
      description:
        "Elegant G+3 residential units in South Delhi, combining sophistication with premium finishes.",
    },

    {
      project: [
        {
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
      category: "Moser Baer Solar Ltd",
      description:
        "Secured 33 acres of industrial land, paving the way for redevelopment and optimization.",
    },

    {
      project: [
        {
          year: 2022,
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
          year: 2023,
          category: "Alternative Investment Fund (AIF)",
          description:
            "Launched a strategic investment initiative targeting high-potential assets.",
        },
        {
          year: 2023,
          category: "Hindon River Mill Ltd",
          description:
            "Acquired 48.26 acres for an upscale villa complex in a prime location.",
        },
      ],
    },
    {
      year: 2024,
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
    <div className="xl:max-w-[100%] xl:mb-[4rem] xl:px-[5rem] xl:py-[5rem] xl:bg-[#EFF5FA]">
      <h3 className="sectionHeading xl:tracking-[5px] xl:text-[black] midlandfontmedium">
        OUR JOURNEY
      </h3>
      <div className="xl:flex xl:justify-between xl:items-center xl:flex-wrap">
        {selectedProjectIndex == 4 ||
        selectedProjectIndex == 9 ||
        selectedProjectIndex == 11 ||
        selectedProjectIndex == 12 ? (
          <Swiper
            spaceBetween={120}
            slidesPerView={1}
            modules={[Navigation]}
            navigation={{
              nextEl: ".inner-swiper-button-next",
              prevEl: ".inner-swiper-button-prev",
            }}
            loop={true}
            className="xl:relative xl:basis-[50%]"
          >
            <div className="inner-swiper-button-prev xl:absolute xl:z-[99] xl:top-[50%] xl:left-0">
              <img
                src="assets/frontend/images/icons/left_arrow.png"
                alt="Previous"
                style={{ cursor: "pointer" }}
                className="xl:w-[15px] xl:h-[15px]"
              />
            </div>
            <div className="inner-swiper-button-next xl:z-[99] xl:absolute xl:top-[50%] xl:right-[12px]">
              <img
                src="assets/frontend/images/icons/right_arrow.png"
                alt="Next"
                className="xl:w-[15px] xl:h-[15px]"
                style={{ cursor: "pointer" }}
              />
            </div>
            {projects[selectedProjectIndex].project.map((proj, index) => (
              <SwiperSlide key={index}>
                <div className="xl:text-center xl:px-[2.5rem]" ref={sectionRef}>
                  <h4 className="midlandfontbold xl:pt-[1px] xl:!text-[18px] xl:mb-[2rem] sectionHeading xl:tracking-[8px] xl:text-primary">
                    {proj.year}
                  </h4>
                  <p className="midlandfontmedium xl:text-primary xl:tracking-[4px] xl:!text-[13px] xl:mb-[1.3rem]">
                    {proj.category}
                  </p>
                  <p className="xl:mt-[1.3rem] xl:text-[13px] font-italic poppins-regular xl:leading-[22px] xl:tracking-[1px]">
                    {proj.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div
            className="xl:basis-[50%] xl:text-center xl:px-[2.5rem]"
            ref={sectionRef}
          >
            <h4 className="midlandfontbold xl:!text-[18px] xl:mb-[2rem] sectionHeading xl:tracking-[8px] xl:text-primary">
              {projects[selectedProjectIndex].year}
            </h4>
            <p className="midlandfontmedium xl:text-primary xl:tracking-[4px] xl:!text-[13px] xl:mb-[1.3rem]">
              {projects[selectedProjectIndex].category}
            </p>
            <p className="xl:mt-[1.3rem] xl:text-[13px] font-italic poppins-regular xl:leading-[22px] xl:tracking-[1px]">
              {projects[selectedProjectIndex].description}
            </p>
          </div>
        )}

        <div className="xl:basis-[50%] xl:border-l-[1px] xl:border-l-solid xl:border-l-[#B1B1B1] xl:h-[400px] xl:relative xl:flex xl:flex-wrap xl:justify-center">
          <img
            src="assets/frontend/images/aboutus/ourJourney/1.jpg"
            alt="1.jpg"
            className="xl:w-[200px] xl:h-[150px] xl:absolute xl:top-0 xl:z-[1] xl:left-[25%]"
          />
          <img
            src="assets/frontend/images/aboutus/ourJourney/2.jpg"
            alt="2.jpg"
            className="xl:w-[200px] xl:right-[17%] xl:top-[16%] xl:h-[150px] xl:absolute xl:z-[2]"
          />
          <img
            src="assets/frontend/images/aboutus/ourJourney/3.jpg"
            alt="3.jpg"
            className="xl:w-[200px] xl:h-[150px] xl:top-[25%] xl:left-[8%] xl:absolute xl:z-[2]"
          />
          <img
            src="assets/frontend/images/aboutus/ourJourney/4.jpg"
            alt="4.jpg"
            className="xl:w-[200px] xl:h-[150px] xl:absolute xl:bottom-[15%] xl:right-[33%] xl:z-[3]"
          />
        </div>
      </div>
      <div className="xl:relative">
        <Swiper
          spaceBetween={120}
          slidesPerView={5}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          className="xl:relative"
        >
          <div className="xl:absolute xl:left-[10%] xl:top-[50%] xl:h-[1px] xl:w-[85%] xl:bg-[#B1B1B1]" />

          {projects.map((project, index) => (
            <SwiperSlide key={project.year}>
              <div
                className="xl:w-60 xl:inline-block xl:cursor-pointer"
                onClick={() => setSelectedProjectIndex(index)}
              >
                <figure
                  className={`xl:border xl:relative xl:border-solid xl:border-[#B1B1B1] xl:z-10 xl:w-32 xl:h-32 xl:flex xl:justify-center xl:items-center xl:rounded-full ${
                    selectedProjectIndex == index &&
                    "xl:border-primary xl:border-[3px]"
                  }`}
                >
                  <img
                    src="assets/frontend/images/aboutus/ourJourney/timeline.png"
                    alt="timeline"
                  />
                  <figcaption
                    className="xl:text-primary xl:font-medium xl:absolute xl:top-7 xl:right-[-40%]"
                    style={{ fontSize: "15px" }}
                  >
                    {index == 4 || index == 9 || index == 11 || index == 12
                      ? project.project[0].year
                      : project.year}
                  </figcaption>
                </figure>
              </div>
            </SwiperSlide>
          ))}
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
    // <div className="max-w-[100%] mb-[4rem] px-[5rem]  py-[5rem] bg-[#EFF5FA]">
    //   <h3 className="sectionHeading tracking-[5px] text-[black] midlandfontmedium">
    //     OUR JOURNEY
    //   </h3>
    //   <div className="flex justify-between items-center flex-wrap ">
    //     {selectedProjectIndex == 4 ||
    //     selectedProjectIndex == 9 ||
    //     selectedProjectIndex == 11 ||
    //     selectedProjectIndex == 12 ? (
    //       <Swiper
    //         spaceBetween={120}
    //         slidesPerView={1}
    //         onSwiper={(swiper) => console.log(swiper)}
    //         modules={[Navigation]}
    //         navigation={{
    //           nextEl: ".inner-swiper-button-next",
    //           prevEl: ".inner-swiper-button-prev",
    //         }}
    //         loop={true}
    //         className="relative basis-[50%]"
    //       >
    //         <div className="inner-swiper-button-prev absolute z-[99] top-[50%] left-0">
    //           <img
    //             src="assets/frontend/images/icons/left_arrow.png "
    //             alt="Previous"
    //             style={{ cursor: "pointer" }}
    //             className="w-[15px] h-[15px]"
    //           />
    //         </div>
    //         <div className="inner-swiper-button-next z-[99]  absolute top-[50%] right-[12px]">
    //           <img
    //             src="assets/frontend/images/icons/right_arrow.png"
    //             alt="Next"
    //             className="w-[15px] h-[15px]"
    //             style={{ cursor: "pointer" }}
    //           />
    //         </div>
    //         {projects[selectedProjectIndex].project.map((proj, index) => {
    //           return (
    //             <SwiperSlide key={index}>
    //               <div className="text-center px-[2.5rem]" ref={sectionRef}>
    //                 <h4 className="midlandfontbold pt-[1px] !text-[18px] mb-[2rem] sectionHeading tracking-[8px] text-primary">
    //                   {proj.year}
    //                 </h4>
    //                 <p className="midlandfontmedium text-primary tracking-[4px] !text-[13px] mb-[1.3rem]">
    //                   {proj.category}
    //                 </p>
    //                 {/* <span className="border-b-[2px] border-b-[#33638B] tracking-[4px] px-[10px] pb-[10px]">
    //                    ALIGARH
    //                   </span> */}
    //                 <p className="mt-[1.3rem] text-[13px] font-italic poppins-regular leading-[22px] tracking-[1px]">
    //                   {proj.description}
    //                 </p>
    //               </div>
    //             </SwiperSlide>
    //           );
    //         })}
    //       </Swiper>
    //     ) : (
    //       <div className="basis-[50%] text-center px-[2.5rem]" ref={sectionRef}>
    //         <h4 className="midlandfontbold !text-[18px] mb-[2rem] sectionHeading tracking-[8px] text-primary">
    //           {projects[selectedProjectIndex].year}
    //         </h4>
    //         <p className="midlandfontmedium text-primary tracking-[4px] !text-[13px] mb-[1.3rem]">
    //           {projects[selectedProjectIndex].category}
    //         </p>

    //         <p className="mt-[1.3rem] text-[13px] font-italic poppins-regular leading-[22px] tracking-[1px]">
    //           {projects[selectedProjectIndex].description}
    //         </p>
    //       </div>
    //     )}

    //     <div className="basis-[50%] border-l-[1px] border-l-solid border-l-[#B1B1B1] h-[400px] relative flex flex-wrap justify-center">
    //       <img
    //         src="assets/frontend/images/aboutus/ourJourney/1.jpg"
    //         alt="1.jpg"
    //         className="w-[200px] h-[150px] absolute top-0 z-[1] left-[25%]"
    //       />
    //       <img
    //         src="assets/frontend/images/aboutus/ourJourney/2.jpg"
    //         alt="2.jpg"
    //         className="w-[200px] right-[17%] top-[16%] h-[150px] absolute z-[2]"
    //       />
    //       <img
    //         src="assets/frontend/images/aboutus/ourJourney/3.jpg"
    //         alt="3.jpg"
    //         className="w-[200px] h-[150px] top-[25%] left-[8%] absolute z-[2]"
    //       />
    //       <img
    //         src="assets/frontend/images/aboutus/ourJourney/4.jpg"
    //         alt="4.jpg"
    //         className="w-[200px] h-[150px] absolute bottom-[15%] right-[33%] z-[3]"
    //       />
    //     </div>
    //   </div>
    //   <div className="relative">
    //     <Swiper
    //       spaceBetween={120}
    //       slidesPerView={5}
    //       onSwiper={(swiper) => console.log(swiper)}
    //       modules={[Navigation]}
    //       navigation={{
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //       }}
    //       loop={true}
    //       className="relative"
    //     >
    //       <div className="absolute left-[10%] top-[50%] h-[1px] w-[85%] bg-[#B1B1B1]" />

    //       {projects.map((project, index) => {
    //         return (
    //           <SwiperSlide key={project.year}>
    //             <div
    //               className="w-60 inline-block cursor-pointer"
    //               onClick={() => setSelectedProjectIndex(index)}
    //             >
    //               <figure
    //                 className={`border relative border-solid border-[#B1B1B1] z-10 w-32 h-32 flex justify-center items-center rounded-full ${
    //                   selectedProjectIndex == index &&
    //                   "border-primary border-[3px]"
    //                 }`}
    //               >
    //                 <img
    //                   src="assets/frontend/images/aboutus/ourJourney/timeline.png"
    //                   alt="timeline"
    //                 />
    //                 <figcaption
    //                   className="text-primary font-medium absolute top-7 right-[-40%]"
    //                   style={{ fontSize: "15px" }}
    //                 >
    //                   {index == 4 || index == 9 || index == 11 || index == 12
    //                     ? project.project[0].year
    //                     : project.year}
    //                 </figcaption>
    //               </figure>
    //             </div>
    //           </SwiperSlide>
    //         );
    //       })}
    //     </Swiper>

    //     <div className="swiper-button-prev">
    //       <img
    //         src="assets/frontend/images/icons/left_arrow.png"
    //         alt="Previous"
    //         style={{ cursor: "pointer" }}
    //       />
    //     </div>
    //     <div className="swiper-button-next">
    //       <img
    //         src="assets/frontend/images/icons/right_arrow.png"
    //         alt="Next"
    //         style={{ cursor: "pointer" }}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

{
  /* <span className="border-b-[2px] border-b-[#33638B] tracking-[4px] px-[10px] pb-[10px]">
             ALIGARH
            </span> */
}

export default OurJourney;
