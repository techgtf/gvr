import WaterMarkHeading from "../waterMarkHeading";
import CommonBtn from "../commonBtn";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import { useImageReveal } from "../useImageReveal";
import { BASE_ROOT } from "../../../../config";

const OurVerticals = () => {
  const animationConfig = {
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
              className="my-[1rem] text-justify xl:!mt-[2.7rem] common_pera">
              Greatvalue Finance, operating under the brand Dhansamrishi, is a Non-Banking Financial Company (NBFC), empowers businesses with large-ticket enterprise financing designed for growth. By combining strategic capital solutions, tailored loan structures, and risk-optimized lending, we help enterprises scale with confidence.
            </p>
            {/* <p className="mb-[1rem] text-[14px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p> */}
            <div>
              <div>
                
                <div className="flex justify-between items-center flex-wrap ">
                <h3 className="sectionHeading flex flex-col justify-center h-[112px] border-r-[1px] border-opacity-[0.5] basis-[29%] border-r-[#00000080] text-center tracking-[4px] !text-[14px] midlandfontmedium text-primary">
                <span className="midlandfontmedium text-primary text-[6px] mb-2 mx-2">Asset Under Management</span>
                  500 CR
                
                </h3>
                <div className="basis-[65%]">
                  <p className="common_pera text-justify">
                  Our expertise lies in enterprise financing, structured lending, and financial stability, ensuring businesses have the capital they need to thrive.
                  </p>
                  {/* <p className="text-[12px]">
                    GV Finance delivers tailored financial solutions that
                    empower businesses and individuals to optimize cash flow,
                    secure investments.
                  </p> */}
                </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-[1rem] w-[92%]">
              <CommonBtn
                to={BASE_ROOT + "coming-soon"}
                TagName={Link}
                target="_blank"
              >
                Know More <BsArrowUpRight />
              </CommonBtn>
            </div>
          </div>
          <img
            src={
              "https://res.cloudinary.com/dx3l6id8r/image/upload/v1739437044/vertical-1_rbwbmb.webp"
            }
            // src="assets/frontend/images/aboutus/verticals/vertical-1.webp"
            alt="vertical-1"
            className="xl:basis-[32%] reveal h-[480px] w-[100%]"
          />
        </div>
        <div className="flex items-center justify-between xl:mt-[4rem] mt-[3rem] flex-wrap">
          <img
            src={
              "https://res.cloudinary.com/dx3l6id8r/image/upload/v1739437046/vertical-2_u8tjv9.webp"
            }
            // src="assets/frontend/images/aboutus/verticals/vertical-2.webp"
            alt="vertical-1"
            className="xl:basis-[32%] reveal h-[480px] w-[100%]"
          />
          <div className="xl:basis-[60%] xl:pr-[7rem] basis-[100%]">
            <h2 className="sectionHeading xl:text-left mt-[2rem]  text-[14px] text-center  tracking-[4px] xl:!text-[16px] midlandfontmedium text-primary">
              GV CAPITAL
            </h2>
            <p className="my-[1rem] text-justify !mt-[2.7rem] common_pera">
            Greatvalue Capital is dedicated to revitalizing distressed assets, turning financial setbacks into opportunities. Through strategic restructuring, risk mitigation, and value-driven asset management, we optimize returns for stakeholders and drive long-term growth.
            </p>
            {/* <p className="mb-[1rem] text-[14px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p> */}
            <div>
              <div className="flex justify-between items-center flex-wrap my-[2.5rem]">
                <h3 className="sectionHeading flex flex-col justify-center h-[112px] border-r-[1px] border-opacity-[0.5] basis-[29%] border-r-[#00000080] text-center tracking-[4px] !text-[14px] midlandfontmedium text-primary">
                <span className="midlandfontmedium text-primary text-[6px] mb-2 mx-2">Asset Under Management</span>
                  2.5 CR
                 
                </h3>
                <div className="basis-[65%]">
                  <p className="common_pera text-justify">
                  We specialize in asset restructuring, financial recovery, and unlocking potential, ensuring every asset reaches its highest value.
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
