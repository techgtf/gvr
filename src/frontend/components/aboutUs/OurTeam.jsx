import React, { useState, useEffect } from "react";
// import Modal from "../modal/Modal";
import { useImageReveal } from "../useImageReveal";

const profiles = [
  {
    isModalOpen: false,
    image: "team-1.png",
    name: "Manoj Agarwal",
    position: "Chairman & MD, GV Group",
    bio: "Mr. Manoj Agarwal stands as the cornerstone of the Great Value Group...",
  },
  {
    isModalOpen: false,
    image: "team-2.png",
    name: "Payas Agarwal",
    position: "Director",
    bio: "An MBA graduate from Babson College, he brings over five years of experience...",
  },
  {
    isModalOpen: false,
    image: "team-3.png",
    name: "Amit Goel",
    position: "Fund Manager",
    bio: "Amit Goel an engineer, MBA, CFA, & MRICS brings 25+ years of experience...",
  },
  {
    isModalOpen: false,
    image: "team-4.png",
    name: "Goldie Kapoor",
    position: "Sales and Marketing Head",
    bio: "Goldie is a seasoned and dedicated professional in the group...",
  },
  {
    isModalOpen: false,
    image: "team-5.png",
    name: "Nakul Goel",
    position: "CFO",
    bio: "Experienced financial professional with over 25 years of expertise...",
  },
];

const OurTeam = () => {
  const [allProfile, setAllProfile] = useState(profiles); // Initialize displayed pictures

  const handleNext = () => {
    setAllProfile((prevPictures) => {
      const newPictures = [...prevPictures];
      const firstPicture = newPictures.shift(); // Remove the first picture
      newPictures.push(firstPicture); // Add it to the end
      return newPictures; // Update state with rotated array
    });
  };

  const handlePrev = () => {
    setAllProfile((prevPictures) => {
      const newPictures = [...prevPictures];
      const lastPicture = newPictures.pop(); // Remove the last picture
      newPictures.unshift(lastPicture); // Add it to the beginning
      return newPictures; // Update state with rotated array
    });
  };

  const handleImageClick = (index) => {
    setAllProfile((prevPictures) => {
      const newPictures = [...prevPictures];
      const clickedImage = newPictures.splice(index, 1)[0]; // Remove the clicked image
      newPictures.splice(2, 0, clickedImage); // Insert it at index 2
      return newPictures; // Update state
    });
  };

  const handleBio = (index) => {
    let newProfile = [...allProfile];
    newProfile[index].isModalOpen = true;
    setAllProfile(() => newProfile);
  };

  return (
    <div className="max-w-[100%] relative flex justify-center xl:px-[3rem] px-[2.5rem]  pb-[3.5rem]">
      <div className="my-[0.5rem] w-[100%] text-white relative">
        <h3 className="sectionHeading tracking-[5px] text-[black] midlandfontmedium">
          OUR TEAM
        </h3>
        <p className="text-black absolute xl:top-[5%] top-[8%] text-[12px] left-[26%] w-[250px]  poppins-regular">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>

        <div>
          <div
            onClick={handlePrev}
            className="inner-team-swiper-button-prev !block absolute z-[99] xl:top-[50%] top-[59%] left-[-3%]"
          >
            <img
              src="assets/frontend/images/icons/left_arrow.png"
              alt="Previous"
              style={{ cursor: "pointer" }}
              className="w-[15px] h-[15px]"
            />
          </div>
          <div
            onClick={handleNext}
            className="inner-team-swiper-button-next !block z-[99] absolute xl:top-[50%] top-[59%] right-[-3%]"
          >
            <img
              src="assets/frontend/images/icons/right_arrow.png"
              alt="Next"
              className="w-[15px] h-[15px]"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="flex justify-between overflow-hidden xl:pt-[150px] pt-[120px] pb-[1rem] mt-[2rem] no-scrollbar no-wrap">
            {allProfile.map((profile, index) => {
              let design =
                "min-w-[270px] h-[265px] xl:!mt-[-0.75rem] ml-[2.5rem] mr-[4rem] xl:!ml-[1.75rem] xl:mr-[2rem] flex items-end justify-center relative bg-[#EFF5FA]";
              let active =
                "min-w-[270px] h-[340px] flex items-end mr-[2rem] flex-wrap justify-center mt-[-5.35rem] bg-[#EFF5FA]";
              let activeProfile =
                "w-[215px] h-[260px] mt-[5rem] object-cover inline-block";
              let inActiveProfile =
                "w-[100%] h-[150px] inline-block object-contain";
              return (
                <div key={index}>
                  <div
                    onClick={() => handleImageClick(index)}
                    style={{
                      marginLeft: index == 0 && "0.75rem",
                    }}
                    className={
                      index == 0 || index == 1 || index == 3 || index == 4
                        ? design
                        : active
                    }
                  >
                    <img
                      className={index == 2 ? activeProfile : inActiveProfile}
                      src={`assets/frontend/images/aboutus/team/${profile.image}`}
                      alt={profile.name}
                    />

                    {index == 0 && (
                      <div className="top-[0.75rem] right-[0.75rem] ml-[-1rem] z-[-99] w-[100%] absolute h-[265px] bg-[url(/assets/frontend/images/aboutus/team/blue-bg.jpg)]"></div>
                    )}
                  </div>
                  <div className="flex justify-between w-[85%] mt-[2rem] xl:mt-[1rem] ml-[0.75rem]">
                    <div>
                      <p className="midlandfontmedium basis-[100%] text-black text-[10px] tracking-[2px]">
                        {profile.name}
                      </p>
                      <p className="basis-[100%] text-primary text-[12px]">
                        {profile.position}
                      </p>
                    </div>
                    <div onClick={() => handleBio(index)}>
                      <img
                        src="assets/frontend/images/icons/plus.png"
                        alt="plus-icon"
                        className="h-[14px] w-[14px] inline-block"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    // <div className="max-w-[100%] relative flex justify-center px-[3rem] pb-[5rem]">
    //   <div className=" my-[0.5rem] w-[100%]  text-white relative">
    //     <h3 className="sectionHeading tracking-[5px] text-[black] midlandfontmedium">
    //       OUR TEAM
    //     </h3>
    //     <p className="text-black absolute top-[5%] text-[12px] left-[26%] w-[250px] poppins-regular">
    //       Lorem Ipsum has been the industry's standard dummy text ever since the
    //       1500s.
    //     </p>

    //     <div>
    //       <div
    //         onClick={handlePrev}
    //         className="inner-team-swiper-button-prev !block absolute z-[99] top-[50%] left-[-3%]"
    //       >
    //         <img
    //           src="assets/frontend/images/icons/left_arrow.png"
    //           alt="Previous"
    //           style={{ cursor: "pointer" }}
    //           className="w-[15px] h-[15px]"
    //         />
    //       </div>
    //       <div
    //         onClick={handleNext}
    //         className="inner-team-swiper-button-next !block z-[99]  absolute top-[50%] right-[-3%]"
    //       >
    //         <img
    //           src="assets/frontend/images/icons/right_arrow.png"
    //           alt="Next"
    //           className="w-[15px] h-[15px]"
    //           style={{ cursor: "pointer" }}
    //         />
    //       </div>
    //       <div className="flex justify-between overflow-hidden pt-[150px] pb-[1rem] mt-[2rem]  no-scrollbar no-wrap ">
    //         {allProfile.map((profile, index) => {
    //           let design =
    //             "min-w-[270px] h-[265px] !mt-[-0.75rem] mr-[2rem] flex items-end justify-center relative bg-[#EFF5FA]";
    //           let active =
    //             "min-w-[270px] h-[340px]  flex items-end mr-[2rem] flex-wrap justify-center mt-[-5.35rem] bg-[#EFF5FA]";
    //           let activeProfile =
    //             "w-[215px] h-[260px]  mt-[5rem] object-cover inline-block ";
    //           let inActiveProfile =
    //             "w-[100%] h-[150px]  inline-block object-contain";
    //           return (
    //             <div key={index}>
    //               <div
    //                 onClick={() => handleImageClick(index)}
    //                 key={index}
    //                 style={{
    //                   marginLeft: index == 0 && "0.75rem",
    //                 }}
    //                 className={
    //                   index == 0 || index == 1 || index == 3 || index == 4
    //                     ? design
    //                     : active
    //                 }
    //               >
    //                 <img
    //                   className={index == 2 ? activeProfile : inActiveProfile}
    //                   src={`assets/frontend/images/aboutus/team/${profile.image}`}
    //                   alt={profile.name}
    //                 />

    //                 {index == 0 && (
    //                   <div className="top-[0.75rem] right-[0.75rem] ml-[-1rem] z-[-99] w-[100%] absolute h-[265px] bg-[url(/assets/frontend/images/aboutus/team/blue-bg.jpg)]"></div>
    //                 )}
    //               </div>
    //               <div className="flex justify-between w-[85%]  mt-[1rem]">
    //                 <div>
    //                   <p className="midlandfontmedium basis-[100%] text-black text-[10px]  tracking-[2px]">
    //                     {profile.name}
    //                   </p>
    //                   <p className="basis-[100%] text-primary text-[12px] ">
    //                     {profile.position}
    //                   </p>
    //                 </div>
    //                 <div onClick={() => handleBio(index)}>
    //                   <img
    //                     src="assets/frontend/images/icons/plus.png"
    //                     alt="plus-icon"
    //                     className="h-[14px] w-[14px] inline-block"
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

{
  // modal
  /* <div class="bg-white rounded-lg flex-wrap fixed w-[40%] flex justify-center items-center top-50 right-50 bottom-50 left-50 z-[99]">
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
          <button
            onClick={handleCloseModal}
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="static-modal"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>

        <div class="p-4 md:p-5 space-y-4">
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            minus! Necessitatibus illum dolore cupiditate excepturi, doloremque
            architecto nam sunt velit nesciunt, consectetur reprehenderit
            commodi inventore omnis repudiandae, impedit ad magni.
          </p>
        </div>
      </div> */
}

{
  /* {displayedPictures.map((picture, index) => {
              let design =
                "!w-[279.75px] !h-[265px] !flex !items-end !justify-center !relative !bg-[#EFF5FA]";
              let active =
                "!w-[279.75px] !h-[340px] !flex items-end !flex-wrap !justify-center !mt-[-4.6rem] !bg-[#EFF5FA]";
              let activeProfile =
                "!w-[215px] !h-[260px] !object-cover !inline-block";
              let inActiveProfile =
                "!w-[100%] !h-[150px]  !inline-block !object-contain";
              return (
                <SwiperSlide
                  key={index}
                  className={
                    index == 0 || index == 1 || index == 3 || index == 4
                      ? design
                      : active
                  }
                >
                  <div
                    className={index == 0 && `${design} w-[100%] z-[999999999]`}
                  ></div>
                  <img
                    className={index == 2 ? activeProfile : inActiveProfile}
                    src={`assets/frontend/images/aboutus/team/${picture}`}
                    alt="team-1"
                  />

                  {index == 0 && (
                    <div className="top-[0.75rem] right-[0.75rem] z-[-99] w-[279.75px] absolute h-[265px] bg-[url(/assets/frontend/images/aboutus/team/blue-bg.jpg)]"></div>
                  )}
                  {index == 2 && (
                    <>
                      <p className="midlandfontmedium basis-[100%] text-black text-[10px] mt-[0.65rem]  tracking-[2px]">
                        Amit Goel
                      </p>
                      <p className="basis-[100%] text-primary text-[12px] ">
                        FUND MANAGER
                      </p>
                    </>
                  )}
                </SwiperSlide>
              );
            })} */
}

export default OurTeam;
