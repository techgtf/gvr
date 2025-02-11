import WaterMarkHeading from "../waterMarkHeading";
import CommonBtn from "../commonBtn";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import { useImageReveal } from "../useImageReveal";
import { BASE_ROOT } from "../../../../config";

const OurVerticals = () => {
  const animationConfig = {
    // passing animation as prop for WaterMarkHeading
    // from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1, duration: 1 },
    from: { x: -100, opacity: 0 },
    to: { x: 0, opacity: 1, duration: 1 },
  };
  useImageReveal(".reveal");
  return (
    <>
      <div className="max-w-[90%] m-auto relative mb-[5rem]">
        <WaterMarkHeading
          textWaterMark="Our Verticals"
          sectionHeading="Our Verticals"
          animationConfig={animationConfig}
        />
        <div className="flex items-center justify-between md:flex-row flex-col-reverse mt-[4rem] flex-wrap">
          <div className="basis-[100%] xl:basis-[60%] xl:pl-[7rem] mt-[2rem]">
            <h2 className="sectionHeading text-center tracking-[4px] xl:text-right text-[14px] xl:!text-[16px] midlandfontmedium text-primary">
              GV FINANCE
            </h2>
            <p
              className="my-[1rem] 
            text-justify
            text-[13px] xl:!mt-[2.7rem] poppins-regular text-black font-[300]"
            >
              GV Finance delivers tailored financial solutions that empower
              businesses and individuals to optimize cash flow, secure
              investments, and scale with confidence. From structured lending to
              wealth management, we simplify finance, offering intelligent
              strategies to drive financial stability and long-term success. Our
              goal is to transform capital into confidence, enabling sustainable
              growth.
            </p>
            {/* <p className="mb-[1rem] text-[14px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p> */}
            <div>
              <div className="flex justify-between items-center flex-wrap my-[2.5rem]">
                <h3 className="sectionHeading flex flex-col justify-center h-[112px] border-r-[1px] border-opacity-[0.5] basis-[29%] border-r-[#00000080] text-center tracking-[4px] !text-[17px] midlandfontmedium text-primary">
                  5 CR
                  <span className="block text-right xl:mr-[2.45rem] mr-[1.2rem] text-[10px] tracking-[0.5px]">
                    Ownwards
                  </span>
                </h3>
                <div className="basis-[65%]">
                  <p className="text-[12px] text-justify  poppins-regular">
                    GV Finance delivers tailored financial solutions that
                    empower businesses and individuals to optimize cash flow,
                    secure investments.
                  </p>
                  {/* <p className="text-[12px]">
                    GV Finance delivers tailored financial solutions that
                    empower businesses and individuals to optimize cash flow,
                    secure investments.
                  </p> */}
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-[1rem] w-[92%]">
              {" "}
              <CommonBtn
                to={BASE_ROOT + "coming-soon"}
                TagName={Link}
                target="_blank"
              >
                Know More <BsArrowUpRight />{" "}
              </CommonBtn>
            </div>
          </div>
          <img
            src="assets/frontend/images/aboutus/verticals/vertical-1.webp"
            alt="vertical-1"
            className="xl:basis-[32%] reveal h-[480px] w-[100%]"
          />
        </div>
        <div className="flex items-center justify-between xl:mt-[4rem] mt-[3rem] flex-wrap">
          <img
            src="assets/frontend/images/aboutus/verticals/vertical-2.webp"
            alt="vertical-1"
            className="xl:basis-[32%] reveal h-[480px] w-[100%]"
          />
          <div className="xl:basis-[60%] xl:pr-[7rem] basis-[100%]">
            <h2 className="sectionHeading xl:text-left mt-[2rem]  text-[14px] text-center  tracking-[4px] xl:!text-[16px] midlandfontmedium text-primary">
              GV CAPITAL
            </h2>
            <p className="my-[1rem] text-justify text-[13px] !mt-[2.7rem] poppins-regular text-black font-[300]">
              GV Capital fuels high-potential businesses with strategic
              investments, empowering visionary entrepreneurs to scale and
              innovate. Beyond funding, we provide deep industry insights,
              mentorship, and long-term partnerships to drive sustainable
              growth. Our focus is on businesses that create meaningful impact,
              leveraging smart capital to unlock potential and shape the future.
            </p>
            {/* <p className="mb-[1rem] text-[14px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p> */}
            <div>
              <div className="flex justify-between items-center flex-wrap my-[2.5rem]">
                <h3 className="sectionHeading  flex flex-col justify-center border-opacity-[0.5] h-[112px] border-r-[1px] basis-[29%] border-r-[#00000080] text-center tracking-[4px] !text-[17px] midlandfontmedium text-primary">
                  2 CR
                  <span className="block xl:mr-[2.45rem] mr-[1.2rem] text-right text-[10px] tracking-[0.5px]">
                    Ownwards
                  </span>
                </h3>
                <div className="basis-[65%]">
                  <p className="text-[12px] text-justify poppins-regular">
                    GV Capital fuels high-potential businesses with strategic
                    investments.
                  </p>
                  {/* <p className="text-[12px]">
                    Empowering visionary entrepreneurs to scale and innovate.
                  </p> */}
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-[1rem] w-[92%]">
              {" "}
              <CommonBtn
                to={BASE_ROOT + "coming-soon"}
                TagName={Link}
                target="_blank"
              >
                Know More <BsArrowUpRight />{" "}
              </CommonBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurVerticals;
