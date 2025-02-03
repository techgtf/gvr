import React from "react";
import { useContext } from "react";
import { TeamContext } from "../../context/TeamContext";
import TeamModal from "../teamModal/TeamModal";

const OurTeam = () => {
  const { allProfile, handleNext, handlePrev, handleImageClick, handleBio } =
    useContext(TeamContext);

  return (
    <div className="max-w-[100%] relative flex justify-center xl:px-[3rem] px-[2.5rem] xl:pb-[3.5rem] py-[1.5rem]">
      <TeamModal />
      <div
        onClick={handlePrev}
        className="inner-team-swiper-button-prev !block absolute z-[99] xl:top-[50%] top-[59%] left-[3%]"
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
        className="inner-team-swiper-button-next !block z-[99] absolute xl:top-[50%] top-[59%] right-[3%]"
      >
        <img
          src="assets/frontend/images/icons/right_arrow.png"
          alt="Next"
          className="w-[15px] h-[15px]"
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="mb-[0.5rem] !mt-[1.5rem] w-[100%] text-white relative">
        <h3 className="sectionHeading tracking-[5px] text-black midlandfontmedium">
          OUR TEAM
        </h3>
        <p className="text-black absolute xl:top-[5%] top-[8%] text-[12px] xl:left-[30%] left-[0%] w-[250px] poppins-regular">
          Driven by Passion, United by Trust
        </p>

        <div>
          <div className="flex justify-between overflow-hidden xl:pt-[0px] pt-[10px] pb-[1rem] mt-[2rem] no-scrollbar no-wrap">
            {allProfile.map((profile, index) => {
              const isDesign = index === 0;
              return (
                <div key={index}>
                  <div
                    className={`
                    ${
                      isDesign
                        ? "xl:min-w-[270px] ml-[0.65rem] min-w-[290px] h-[265px] xl:ml-[2.5rem]   xl:!ml-[1.75rem]  flex items-end justify-center relative bg-[#EFF5FA]"
                        : "min-w-[240px]  h-[281px] xl:mr-[0rem] ml-[2.5rem] mr-[4rem]  flex items-end justify-center relative bg-[#EFF5FA]"
                    }
                    `}
                  >
                    <img
                      className={`${"w-[215px] h-[200px] mt-[5rem] "}`}
                      style={{
                        objectFit:
                          profile.image === "team-1.png" ? "cover" : "contain",
                      }}
                      src={`assets/frontend/images/aboutus/team/${profile.image}`}
                      alt={profile.name}
                    />
                    {isDesign && (
                      <div className="top-[0.75rem] right-[0.75rem] ml-[-1rem] z-[-99] w-[100%] absolute h-[265px] bg-[url(/assets/frontend/images/aboutus/team/blue-bg.jpg)]"></div>
                    )}
                  </div>
                  <div
                    className={`flex justify-between  mt-[2rem] xl:mt-[1rem] xl:ml-[0.75rem] xl:pr-[1rem] ${
                      !isDesign && "xl:ml-[2.5rem] "
                    } ${isDesign && "xl:!mt-[2rem]"}`}
                  >
                    <div>
                      <p className="midlandfontmedium text-black text-[10px] tracking-[2px]">
                        {profile.name}
                      </p>
                      <p className="text-primary text-[12px]">
                        {profile.position}
                      </p>
                    </div>
                    <button onClick={() => handleBio(index)}>
                      <img
                        src="assets/frontend/images/icons/plus.png"
                        alt="plus-icon"
                        className="h-[14px] w-[14px]"
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
