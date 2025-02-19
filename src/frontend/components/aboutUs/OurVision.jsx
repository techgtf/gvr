import SlideIn from "../Animations/SlideIn";
import { useImageReveal } from "../useImageReveal";
import { useTextAnimation } from "../useTextAnimation";

const OurVision = ({visionData,missionData}) => {
  const sectionRef = useTextAnimation(
    {
      from: { y: 100, opacity: 0 },
      to: { y: 0, opacity: 1, duration: 1 },
    },
    []  
  );

  useImageReveal(".reveal");
console.log(visionData,"visionData");
console.log(missionData,"missionData");
const visionDescription = visionData.description.replace(/<\/?[^>]+(>|$)/g, "");
const missionDescription = missionData.description.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    <div className="bg-[#EFF5FA] lg:my-[50px] text-white flex justify-center">
      <div className="flex justify-between items-center xl:py-[50px] py-[3.5rem] flex-wrap max-w-[85%]">
        <img
          className="w-[350px] h-[350px] reveal w-[100%] object-contain"
          src={
            "https://res.cloudinary.com/dx3l6id8r/image/upload/v1739437040/vision_and_mission_e5tdx1.webp"
          }
          // src="assets/frontend/images/aboutus/vision_and_mission.webp"
          alt="vision_and_mission"
        />
        <div
          className="xl:basis-[60%] basis-[100%] xl:mt-0 mt-[1.5rem]"
          // ref={sectionRef}
        >
          {/* <SlideIn> */}
            <div className="xl:mb-[3.5rem]  mb-[2rem]">
              {visionData.heading &&
              (<h3 className="midlandfontmedium text-[11px] text-primary tracking-[2px]">
                { visionData.heading}
              </h3>)}
             {visionDescription &&
             (<p className="text-[13px] text-justify mt-[1rem] poppins-regular text-black font-[300]">
                {visionDescription}
              </p>)} 
            </div>
            <div>
             {missionData.heading && 
             (<h3 className="midlandfontmedium text-[11px]  text-primary tracking-[2px]">
                {missionData.heading}
              </h3>)} 
              {missionDescription &&
              (<p className="text-[13px] text-justify mt-[1rem] text-black poppins-regular font-[300]">
                {missionDescription}
              </p>)}
            </div>
          {/* </SlideIn> */}
        </div>
      </div>
    </div>
  );
};

export default OurVision;
