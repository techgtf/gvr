const OurTeam = () => {
  return (
    <div className="max-w-[100%] flex justify-center px-[5rem] pb-[5rem]">
      <div className=" my-[0.5rem] w-[99%]  text-white relative  ">
        <h3 className="sectionHeading tracking-[5px] text-[black] midlandfontmedium">
          OUR TEAM
        </h3>
        <p className="text-black absolute top-[5%] text-[12px] left-[26%] w-[250px] poppins-regular">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>
        <div className=" flex justify-between mt-[7.5rem] ">
          <div className=" w-[248px] h-[265px] flex items-end justify-center relative bg-[#EFF5FA]">
            <img
              className="w-[100%] h-[150px]  inline-block object-contain"
              src="/assets/frontend/images/aboutus/team/team-1.png"
              alt="team-1"
            />
            <div className="top-[0.75rem] right-[0.75rem] z-[-99]  w-[248px] absolute h-[265px] bg-[url(/assets/frontend/images/aboutus/team/blue-bg.jpg)]"></div>
          </div>

          <div className="w-[248px] h-[265px] flex items-end justify-center bg-[#EFF5FA]">
            <img
              className="w-[160px] h-[165px] inline-block object-contain"
              src="/assets/frontend/images/aboutus/team/team-2.png"
              alt="team-2"
            />
          </div>
          <div>
            {" "}
            <div
              className="w-[248px] 
    h-[340px]
    flex items-end flex-wrap justify-center mt-[-4.6rem] bg-[#EFF5FA]"
            >
              <img
                className="w-[215px] h-[260px] object-cover inline-block"
                src="/assets/frontend/images/aboutus/team/team-3.png"
                alt="team-3"
              />
            </div>
            <p className="midlandfontmedium basis-[100%] text-black text-[10px] mt-[0.65rem]  tracking-[2px]">
              Amit Goel
            </p>
            <p className="basis-[100%] text-primary text-[12px] ">
              FUND MANAGER
            </p>
          </div>

          <div className="w-[248px] h-[265px] object-contain flex items-end justify-center bg-[#EFF5FA]">
            <img
              className="w-[235px] h-[165px] object-contain inline-block"
              src="/assets/frontend/images/aboutus/team/team-4.png"
              alt="team-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
