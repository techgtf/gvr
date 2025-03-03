import WaterMarkHeading from "../waterMarkHeading";
import CommonBtn from "../commonBtn";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import { useImageReveal } from "../useImageReveal";
import { BASE_ROOT } from "../../../../config";
import useFetchData from "../../apiHooks/useFetchData";
import Loader from "../../../common/Loader/loader";

const OurVerticals = ({ data: pageData }) => {
  const animationConfig = {
    from: { x: -100, opacity: 0 },
    to: { x: 0, opacity: 1, duration: 1 },
  };
  useImageReveal(".reveal");

  // calling api

  const {
    data: verticalData,
    loading: verticalLoading,
    error: verticalError,
  } = useFetchData("verticals");

  console.log("verticalData", verticalData);
  // Handle Loading and Errors
  if (verticalLoading) return <Loader />;
  if (verticalError)
    return (
      <p className="text-red-500">
        Error while loading Gallery: {verticalError}
      </p>
    );

  return (
    <>
      <div className="max-w-[90%] m-auto relative mb-[5rem]">
        <WaterMarkHeading
          textWaterMark={pageData.heading}
          sectionHeading={pageData.heading}
          animationConfig={animationConfig}
        />

        {verticalData &&
          verticalData.length > 0 &&
          verticalData.map((singleData, index) => {
            return index == 0 ? (
              <div className="flex items-center justify-between md:flex-row flex-col-reverse mt-[4rem] flex-wrap">
                <div className="basis-[100%] xl:basis-[60%] xl:pl-[7rem] mt-[2rem]">
                  <h2 className="sectionHeading text-center tracking-[4px] xl:text-right text-[14px] xl:!text-[16px] midlandfontmedium text-primary">
                    {singleData.name}
                  </h2>
                  <p className="my-[1rem] text-justify xl:!mt-[2.7rem] common_pera">
                    {singleData.description ? singleData.description : null}
                  </p>
                  {/* <p className="mb-[1rem] text-[14px]">
                    Lorem Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                  </p> */}
                  <div>
                    <div className="flex justify-between items-center flex-wrap my-[2.5rem]">
                      <h3 className="sectionHeading flex flex-col justify-center h-[112px] border-r-[1px] border-opacity-[0.5] basis-[29%] border-r-[#00000080] text-center tracking-[4px] !text-[17px] midlandfontmedium text-primary">
                        {singleData.price || "NA"}
                        <span className="block text-right xl:mr-[2.45rem] mr-[1.2rem] text-[10px] tracking-[0.5px]">
                          Ownwards
                        </span>
                      </h3>
                      <div className="basis-[65%]">
                        <p className="common_pera text-justify">
                          {singleData.short_description}
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
                    <CommonBtn
                      to={BASE_ROOT + "coming-soon"}
                      TagName={Link}
                      target="_blank"
                    >
                      Know More <BsArrowUpRight />
                    </CommonBtn>
                  </div>
                </div>
                <div className="xl:basis-[32%] reveal h-[480px] w-[100%]">
                  <img
                    src={singleData.image}
                    // src="assets/frontend/images/aboutus/verticals/vertical-1.webp"
                    alt="vertical-1"
                    className="h-[100%]"
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between xl:mt-[4rem] mt-[3rem] flex-wrap">
                <div className="xl:basis-[32%] reveal h-[480px] w-[100%]">
                  <img
                    src={singleData.image}
                    // src="assets/frontend/images/aboutus/verticals/vertical-2.webp"
                    alt="vertical-1"
                    className="h-[100%]"
                  />
                </div>
                <div className="xl:basis-[60%] xl:pr-[7rem] basis-[100%]">
                  <h2 className="sectionHeading xl:text-left mt-[2rem]  text-[14px] text-center  tracking-[4px] xl:!text-[16px] midlandfontmedium text-primary">
                    {singleData.name}
                  </h2>
                  <p className="my-[1rem] text-justify !mt-[2.7rem] common_pera">
                    {singleData.description}
                  </p>
                  {/* <p className="mb-[1rem] text-[14px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p> */}
                  <div>
                    <div className="flex justify-between items-center flex-wrap my-[2.5rem]">
                      <h3 className="sectionHeading  flex flex-col justify-center border-opacity-[0.5] h-[112px] border-r-[1px] basis-[29%] border-r-[#00000080] text-center tracking-[4px] !text-[17px] midlandfontmedium text-primary">
                        {singleData.price || "NA"}
                        <span className="block xl:mr-[2.45rem] mr-[1.2rem] text-right text-[10px] tracking-[0.5px]">
                          Ownwards
                        </span>
                      </h3>
                      <div className="basis-[65%]">
                        <p className="common_pera text-justify">
                          {singleData.short_description}
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
            );
          })}
      </div>
    </>
  );
};

export default OurVerticals;
