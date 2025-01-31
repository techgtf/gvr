import WaterMarkHeading from "../waterMarkHeading";
import CommonBtn from "../commonBtn";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import { useImageReveal } from "../useImageReveal";

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
      <div className="xl:max-w-[90%] xl:m-auto zl:relative xl:mb-[5rem]">
        <WaterMarkHeading
          textWaterMark="Our Verticals"
          sectionHeading="Our Verticals"
          animationConfig={animationConfig}
        />
        <div className="xl:flex xl:items-center xl:justify-between xl:mt-[4rem] xl:flex-wrap">
          <div className="xl:basis-[60%] xl:pl-[7rem]">
            <h2 className="sectionHeading xl:text-center xl:tracking-[4px] xl:text-right  xl:!text-[16px] midlandfontmedium xl:text-primary">
              GV FINANCE
            </h2>
            <p className="xl:my-[1rem] xl:text-[14px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <p className="xl:mb-[1rem] xl:text-[14px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <div>
              <div className="xl:flex xl:justify-between xl:xl:items-start xl:flex-wrap xl:my-[2.5rem]">
                <h3 className="sectionHeading xl:h-[112px] xl:border-r-[1px] xl:basis-[29%] xl:border-r-[#00000080] xl:text-center xl:tracking-[4px] !text-[17px] xl:midlandfontmedium xl:text-primary">
                  5 CR
                  <span className="xl:block xl:text-center xl:text-[8px] xl:tracking-[0.5px]">
                    Lorem Ipsum
                  </span>
                </h3>
                <div className="xl:basis-[65%]">
                  <p className="xl:text-[12px]">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </p>
                  <p className="xl:text-[12px]">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:flex xl:justify-center xl:mt-[1rem] xl:w-[92%]">
              {" "}
              <CommonBtn to={""} TagName={Link} target="_blank">
                Know More <BsArrowUpRight />{" "}
              </CommonBtn>
            </div>
          </div>
          <img
            src="assets/frontend/images/aboutus/verticals/vertical-1.jpg"
            alt="vertical-1"
            className="xl:basis-[32%] reveal xl:h-[480px]"
          />
        </div>
        <div className="xl:flex xl:items-center xl:justify-between xl:mt-[4rem] xl:flex-wrap">
          <img
            src="assets/frontend/images/aboutus/verticals/vertical-2.jpg"
            alt="vertical-1"
            className="xl:basis-[32%] reveal xl:h-[480px]"
          />
          <div className="xl:basis-[60%] xl:pr-[7rem]">
            <h2 className="sectionHeading xl:text-left xl:tracking-[4px] xl:!text-[16px] midlandfontmedium xl:text-primary">
              GV FINANCE
            </h2>
            <p className="xl:my-[1rem] xl:text-[14px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <p className="xl:mb-[1rem] xl:text-[14px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <div>
              <div className="xl:flex xl:justify-between xl:items-start xl:flex-wrap xl:my-[2.5rem]">
                <h3 className="sectionHeading xl:h-[112px] xl:border-r-[1px] xl:basis-[29%] xl:border-r-[#00000080] xl:text-center xl:tracking-[4px] xl:!text-[17px] midlandfontmedium xl:text-primary">
                  2 CR
                  <span className="xl:block xl:text-center xl:text-[8px] xl:tracking-[0.5px]">
                    Lorem Ipsum
                  </span>
                </h3>
                <div className="xl:basis-[65%]">
                  <p className="xl:text-[12px]">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </p>
                  <p className="xl:text-[12px]">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:flex xl:justify-center xl:mt-[1rem] xl:w-[92%]">
              {" "}
              <CommonBtn to={""} TagName={Link} target="_blank">
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
