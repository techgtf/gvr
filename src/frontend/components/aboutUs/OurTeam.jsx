import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  useLayoutEffect,
} from "react";
import { TeamContext } from "../../context/TeamContext";
import TeamModal from "../teamModal/TeamModal";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import gsap from "gsap";

const OurTeam = () => {
  const { allProfile, handleNext, handlePrev, handleImageClick, handleBio } =
    useContext(TeamContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const specialImageRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useLayoutEffect(() => {
    // Specific animation for index === 2
    if (specialImageRef.current) {
      gsap.fromTo(
        specialImageRef.current,
        { y: -20, opacity: 0 }, // Start with y offset and opacity
        { y: 0, opacity: 1, duration: 0.5 } // Slide in and fade in
      );
    }
  }, [allProfile, location.pathname]); // Trigger animation when allProfile changes

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="max-w-[100%] relative xl:px-[3rem] px-[2.5rem] xl:pb-[3.5rem] !xl:pt-[0rem] py-[1.5rem]">
      <TeamModal />

      <div className="mb-[0.5rem] !mt-[1.5rem] text-white relative">
        <h3 className="sectionHeading tracking-[5px] text-black midlandfontmedium">
          OUR TEAM
        </h3>
        <p className="common_pera xl:absolute mt-[0.8rem] xl:top-[100%] text-[12px] xl:w-[250px] w-[100%] text-justify xl:text-left poppins-regular">
          Built on trust, driven by value, and inspired by emotion, we are
          dedicated to crafting spaces that feel like home and investments that
          stand the test of time.
        </p>
      </div>

      <div
        onClick={handlePrev}
        style={{ cursor: "pointer" }}
        className="inner-team-swiper-button-prev !cursor-pointer !block absolute z-[99] xl:top-[56%] top-[59%] left-[1%]"
      >
        <img
          src="assets/frontend/images/icons/left_arrow.webp"
          alt="Previous"
          className="w-[15px] h-[15px]"
        />
      </div>
      <div
        onClick={handleNext}
        style={{ cursor: "pointer" }}
        className="inner-team-swiper-button-next !cursor-pointer !block z-[99] absolute xl:top-[56%] top-[59%] right-[1%]"
      >
        <img
          src="assets/frontend/images/icons/right_arrow.webp  "
          alt="Next"
          className="w-[15px] h-[15px]"
        />
      </div>

      <div className="flex justify-between overflow-hidden xl:pt-[190px] pt-[10px] pb-[1rem]  no-scrollbar no-wrap no-scrollbar">
        {allProfile.map((profile, index) => {
          let design =
            "xl:min-w-[270px] 2xl:min-w-[315px] xs:min-w-[339px] min-w-[311px] h-[265px] xl:!mt-[-0.75rem] mr-[4rem] xl:mr-[2rem] flex items-end justify-center relative bg-[#EFF5FA]";
          let active =
            "min-w-[270px] h-[340px] flex items-end mr-[2rem] relative flex-wrap justify-center mt-[-5.35rem] bg-[#EFF5FA]";
          let activeProfile =
            "w-[215px] h-[260px] mt-[5rem] object-cover inline-block";
          let inActiveProfile =
            "w-[100%] xl:h-[150px] h-[230px] inline-block object-contain";

          return (
            <div key={index} className="basis-[100%]">
              <div
                onClick={
                  index != 2
                    ? () => handleImageClick(index)
                    : () => handleBio(index)
                }
                style={{ marginLeft: index === 0 ? "0.75rem" : undefined }}
                className={
                  index === 0 || index === 1 || index === 3 || index === 4
                    ? design
                    : active
                }
              >
                <img
                  className={index === 2 ? activeProfile : inActiveProfile}
                  ref={index === 2 ? specialImageRef : null}
                  // src={`assets/frontend/images/aboutus/team/${profile.image}`}
                  src={profile.image}
                  alt={profile.name}
                />

                {index === 2 && (
                  <>
                    <div
                      onClick={handlePrev}
                      className="inner-team-swiper-button-prev !hidden absolute z-[99] xl:top-[-8%] xl:right-[12%]"
                    >
                      <IoIosArrowDropleft className="w-[25px] h-[25px]" />
                    </div>
                    <div
                      onClick={handleNext}
                      className="inner-team-swiper-button-next !hidden z-[99] absolute xl:top-[-8%] xl:right-[2%]"
                    >
                      <IoIosArrowDropright className="w-[25px] h-[25px]" />
                    </div>
                  </>
                )}

                {/* bg-[url(/assets/frontend/images/aboutus/team/blue-bg.webp)] */}

                {index === 0 && (
                  <div className="top-[0.75rem] right-[0.75rem] ml-[-1rem] z-[-99] w-[100%] absolute h-[265px] bg-[url(https://res.cloudinary.com/dx3l6id8r/image/upload/v1739437058/blue-bg_n2ncnu.webp)]"></div>
                )}
              </div>

              {(index === 2 || isMobile) && (
                <div className="flex justify-between xl:w-[85%] w-[84%] mt-[2rem] xl:mt-[1rem] xl:ml-[0.75rem]">
                  <div>
                    <p className="midlandfontmedium basis-[100%] text-black text-[10px] tracking-[2px]">
                      {profile.name}
                    </p>
                    <p className="basis-[100%] text-primary text-[12px]}">
                      {profile.position}
                    </p>
                  </div>
                  <div onClick={() => handleBio(index)}>
                    <img
                      src="assets/frontend/images/icons/plus.webp"
                      alt="plus-icon"
                      className="h-[14px w-[14px] inline-block"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurTeam;

// <div className="max-w-[100%] relative  xl:px-[3rem] px-[2.5rem] xl:pb-[3.5rem] py-[1.5rem]">
//   <TeamModal />

//   <div className="mb-[0.5rem] !mt-[1.5rem]  text-white relative">
//     <h3 className="sectionHeading tracking-[5px] text-black midlandfontmedium">
//       OUR TEAM
//     </h3>
//     <p className="text-black xl:absolute mt-[0.8rem] xl:top-[100%]  text-[12px] xl:left-[27%] w-[250px] poppins-regular">
//       Driven by Passion, United by Trust
//     </p>
//   </div>

//   <div
//     onClick={handlePrev}
//     style={{ cursor: "pointer" }}
//     className="inner-team-swiper-button-prev  !cursor-pointer !block absolute z-[99] xl:top-[50%] top-[59%] left-[1%]"
//   >
//     <img
//       src="assets/frontend/images/icons/left_arrow.png"
//       alt="Previous"
//       style={{ cursor: "pointer" }}
//       className="w-[15px] h-[15px]"
//     />
//   </div>
//   <div
//     onClick={handleNext}
//     style={{ cursor: "pointer" }}
//     className="inner-team-swiper-button-next  !cursor-pointer !block z-[99] absolute xl:top-[50%] top-[59%] right-[1%]"
//   >
//     <img
//       src="assets/frontend/images/icons/right_arrow.png"
//       alt="Next"
//       className="w-[15px] h-[15px]"
//       style={{ cursor: "pointer" }}
//     />
//   </div>

//   <div className="flex justify-between overflow-hidden xl:pt-[120px] pt-[10px] pb-[1rem] xl:mt-[2rem] no-scrollbar no-wrap no-scrollbar">
//     {allProfile.map((profile, index) => {
//       let design =
//         "xl:min-w-[270px] 2xl:min-w-[315px] xs:min-w-[339px] min-w-[311px] h-[265px] xl:!mt-[-0.75rem]  mr-[4rem]  xl:mr-[2rem] flex items-end justify-center relative bg-[#EFF5FA]";
//       let active =
//         "min-w-[270px] h-[340px] flex items-end mr-[2rem] relative flex-wrap justify-center mt-[-5.35rem] bg-[#EFF5FA]";
//       let activeProfile =
//         "w-[215px] h-[260px] mt-[5rem] object-cover inline-block";
//       let inActiveProfile =
//         "w-[100%] xl:h-[150px] h-[230px] inline-block object-contain";
//       return (
//         <div key={index} className="basis-[100%]">
//           <div
//             onClick={() => handleImageClick(index)}
//             style={{
//               marginLeft: index == 0 && "0.75rem",
//             }}
//             className={
//               index == 0 || index == 1 || index == 3 || index == 4
//                 ? design
//                 : active
//             }
//           >
//             <img
//               className={index == 2 ? activeProfile : inActiveProfile}
//               src={`assets/frontend/images/aboutus/team/${profile.image}`}
//               alt={profile.name}
//             />

//             {index == 2 ? (
//               <>
//                 <div
//                   onClick={handlePrev}
//                   className="inner-team-swiper-button-prev !hidden  absolute z-[99] xl:top-[-8%] xl:right-[12%]"
//                 >
//                   <IoIosArrowDropleft className="w-[25px] h-[25px] cursor-pointer" />
//                 </div>
//                 <div
//                   onClick={handleNext}
//                   className="inner-team-swiper-button-next !hidden  z-[99] absolute xl:top-[-8%] xl:right-[2%]"
//                 >
//                   <IoIosArrowDropright className="w-[25px] h-[25px] cursor-pointer" />
//                 </div>{" "}
//               </>
//             ) : (
//               ""
//             )}

//             {index == 0 && (
//               <div className="top-[0.75rem] right-[0.75rem] ml-[-1rem] z-[-99] w-[100%] absolute h-[265px] bg-[url(/assets/frontend/images/aboutus/team/blue-bg.jpg)]"></div>
//             )}
//           </div>
//           {index == 2 || isMobile ? (
//             <div className="flex justify-between xl:w-[85%]  w-[70%] mt-[2rem] xl:mt-[1rem] xl:ml-[0.75rem]">
//               <div>
//                 <p className="midlandfontmedium basis-[100%] text-black text-[10px] tracking-[2px]">
//                   {profile.name}
//                 </p>
//                 <p className="basis-[100%] text-primary text-[12px]">
//                   {profile.position}
//                 </p>
//               </div>
//               <div onClick={() => handleBio(index)}>
//                 <img
//                   src="assets/frontend/images/icons/plus.png"
//                   alt="plus-icon"
//                   className="h-[14px] w-[14px] inline-block"
//                 />
//               </div>
//             </div>
//           ) : (
//             ""
//           )}
//         </div>
//       );
//     })}
//   </div>
// </div>
