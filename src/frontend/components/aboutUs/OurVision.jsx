import { useImageReveal } from "../useImageReveal";
import { useTextAnimation } from "../useTextAnimation";
const OurVision = () => {
  const sectionRef = useTextAnimation(
    { from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1, duration: 1 } },
    []
  );
  useImageReveal(".reveal");

  return (
    <div className="xl:bg-[#33638B] xl:my-[3.5rem] xl:text-white xl:flex xl:justify-center">
      <div className="xl:flex xl:justify-between xl:items-center xl:py-[4.5rem] xl:flex-wrap xl:max-w-[85%]">
        <img
          className="xl:w-[350px] xl:h-[350px] reveal md:w-[100%] md:object-contain"
          src="assets/frontend/images/aboutus/vision_and_mission.jpg"
          alt="vision_and_mission"
        />
        <div
          className="xl:basis-[60%] md:basis-[100%] md:mt-[1.5rem]"
          ref={sectionRef}
        >
          <div className="xl:mb-[3.5rem] md:mb-[2rem]">
            <h3 className="midlandfontmedium xl:text-[11px] xl:tracking-[2px]">
              Our Vision
            </h3>
            <p className="xl:text-[13px] xl:mt-[1rem] poppins-regular xl:font-[300]">
              Our vision is to set new industry standards by delivering
              unparalleled quality through continuous innovation. We aspire to
              create unique, customer-focused solutions that redefine
              excellence, ensuring long-term value and lasting trust.
            </p>
          </div>
          <div>
            <h3 className="midlandfontmedium xl:text-[11px] xl:tracking-[2px]">
              Our Mission
            </h3>
            <p className="xl:text-[13px] xl:mt-[1rem] poppins-regular xl:font-[300]">
              Our mission is to drive national progress and enrich lives by
              delivering world-class infrastructure and financial services. We
              are committed to building a future where innovation meets
              excellence, fostering economic growth while creating enduring
              value for our customers, communities
            </p>
          </div>
        </div>
      </div>
    </div>
    // <div className="xl:bg-[#33638B] xl:my-[3.5rem]  xl:text-white xl:flex xl:justify-center">
    //   <div className="xl:flex xl:justify-between xl:items-center xl:py-[4.5rem] xl:flex-wrap xl:max-w-[85%]">
    //     <img
    //       className="xl:w-[350px] xl:h-[350px] reveal md:w-[100%] md:object-contain"
    //       src="assets/frontend/images/aboutus/vision_and_mission.jpg"
    //       alt="vision_and_mission"
    //     />
    //     <div
    //       className="xl:basis-[60%] md:basis-[100%] md:mt-[1.5rem]"
    //       ref={sectionRef}
    //     >
    //       <div className="xl:mb-[3.5rem] md:mb-[2rem]">
    //         <h3 className="midlandfontmedium xl:text-[11px] xl:tracking-[2px]">
    //           Our Vision
    //         </h3>
    //         <p className="xl:text-[13px] xl:mt-[1rem] poppins-regular xl:font-[300]">
    //           Our vision is to set new industry standards by delivering
    //           unparalleled quality through continuous innovation. We aspire to
    //           create unique, customer-focused solutions that redefine
    //           excellence, ensuring long-term value and lasting trust.
    //         </p>
    //       </div>
    //       <div>
    //         <h3 className="midlandfontmedium xl:text-[11px] xl:tracking-[2px]">
    //           Our Mission
    //         </h3>
    //         <p className="xl:text-[13px] xl:mt-[1rem] xl:poppins-regular xl:font-[300]">
    //           Our mission is to drive national progress and enrich lives by
    //           delivering world-class infrastructure and financial services. We
    //           are committed to building a future where innovation meets
    //           excellence, fostering economic growth while creating enduring
    //           value for our customers, communities
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default OurVision;
