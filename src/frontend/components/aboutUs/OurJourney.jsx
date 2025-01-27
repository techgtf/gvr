const OurJourney = () => {
  return (
    <div className="max-w-[100%] mb-[4rem]  px-[5rem] !pl-[4rem] py-[5rem] bg-[#EFF5FA]">
      <h3 className="sectionHeading tracking-[5px] text-[black] midlandfontmedium">
        OUR JOURNEY
      </h3>
      <div className="flex justify-between items-center flex-wrap">
        <div className="basis-[50%] text-center px-[2.5rem]">
          <h4 className="midlandfontbold !text-[22px] mb-[2rem] sectionHeading tracking-[8px] text-primary">
            2009
          </h4>
          <p className="midlandfontmedium text-primary mb-[0.7rem]">
            GREAT VALUE MALL
          </p>
          <span className="border-b-[2px] border-b-[#33638B] tracking-[4px] px-[10px]">
            ALIGARH
          </span>
          <p
            className=" mt-[1rem] 
text-[16px]
font-italic
poppins-regular
leading-[33px]
tracking-[1px]


"
          >
            {/* text-underline-position: from-font;
    text-decoration-skip-ink: none; */}
            The initiative revolutionized Aligarh’s retail scene, establishing a
            new standard in shopping excellence. With cutting-edge retail
            concepts, premium brand outlets, and an immersive shopping
            atmosphere, it reimagined consumer experiences like never before.
          </p>
        </div>
        <div className="basis-[50%] border-l-[1px] border-l-solid border-l-[#B1B1B1] h-[400px] relative flex flex-wrap justify-center">
          <img
            src="/assets/frontend/images/aboutus/ourJourney/1.jpg"
            alt="1.jpg"
            className="w-[200px] h-[150px] absolute top-0 z-[1] left-[25%]"
          />
          <img
            src="/assets/frontend/images/aboutus/ourJourney/2.jpg"
            alt="2.jpg"
            className="w-[200px] right-[10%]
    top-[16%] h-[150px] absolute  z-[2]"
          />
          <img
            src="/assets/frontend/images/aboutus/ourJourney/3.jpg"
            alt="3.jpg"
            className="w-[200px] h-[150px]     top-[25%]
    left-[8%] absolute  z-[2]"
          />
          <img
            src="/assets/frontend/images/aboutus/ourJourney/4.jpg"
            alt="4.jpg"
            className="w-[200px] h-[150px] absolute bottom-[15%] right-[33%] z-[3] "
          />
        </div>
      </div>
      <div className="relative flex justify-between items-center">
        <div className="absolute top-[50%] h-[1px] w-[98%]  bg-[#B1B1B1]"></div>
        <figure className="border-[1px] border-solid border-[#B1B1B1] z-[1] w-[131px] h-[131px] flex justify-center items-center rounded-[50%]">
          <img
            src="/assets/frontend/images/aboutus/ourJourney/timeline.png"
            alt="timeline"
          />
        </figure>
        <figure className="border-[1px] border-solid border-[#B1B1B1] z-[1] w-[131px] h-[131px] flex justify-center items-center rounded-[50%]">
          <img
            src="/assets/frontend/images/aboutus/ourJourney/timeline.png"
            alt="timeline"
          />
        </figure>
        <figure className="border-[1px] border-solid border-[#B1B1B1] z-[1] w-[131px] h-[131px] flex justify-center items-center rounded-[50%]">
          <img
            src="/assets/frontend/images/aboutus/ourJourney/timeline.png"
            alt="timeline"
          />
        </figure>
        <figure className="border-[1px] border-solid border-[#B1B1B1] z-[1] w-[131px] h-[131px] flex justify-center items-center rounded-[50%]">
          <img
            src="/assets/frontend/images/aboutus/ourJourney/timeline.png"
            alt="timeline"
          />
        </figure>
        <figure className="border-[1px] border-solid border-[#B1B1B1] z-[1] w-[131px] h-[131px] flex justify-center items-center rounded-[50%]">
          <img
            src="/assets/frontend/images/aboutus/ourJourney/timeline.png"
            alt="timeline"
          />
        </figure>
      </div>
    </div>
  );
};

export default OurJourney;
