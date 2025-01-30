const OurVision = () => {
  return (
    <div className="bg-[#33638B] my-[3.5rem]  text-white flex justify-center">
      <div className="flex justify-between items-center py-[6.5rem] flex-wrap max-w-[85%]">
        <img
          className="w-[350px] h-[350px]"
          src="assets/frontend/images/aboutus/vision_and_mission.jpg"
          alt="vision_and_mission"
        />
        <div className="basis-[60%]">
          <div className="mb-[2rem]">
            <h3 className="midlandfontmedium text-[11px] tracking-[2px]">
              Our Vision
            </h3>
            <p className="text-[13px] mt-[1rem] poppins-regular">
              Our vision is to set new industry standards by delivering
              unparalleled quality through continuous innovation. We aspire to
              create unique, customer-focused solutions that redefine
              excellence, ensuring long-term value and lasting trust.
            </p>
          </div>
          <div>
            <h3 className="midlandfontmedium text-[11px] tracking-[2px]">
              Our Mission
            </h3>
            <p className="text-[13px] mt-[1rem] poppins-regular">
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
  );
};

export default OurVision;
