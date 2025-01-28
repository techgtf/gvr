import WaterMarkHeading from "../waterMarkHeading";
import CommonBtn from "../commonBtn";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";

const OurVerticals = () => {
  const animationConfig = {
    // passing animation as prop for WaterMarkHeading
    // from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1, duration: 1 },
    from: { x: -100, opacity: 0 },
    to: { x: 0, opacity: 1, duration: 1 },
  };
  return (
    <>
      <div className="max-w-[90%] m-auto relative mb-[5rem]">
        <WaterMarkHeading
          textWaterMark="Our Verticals"
          sectionHeading="Our Verticals"
          animationConfig={animationConfig}
        />
        <div className="flex items-center justify-between mt-[4rem] flex-wrap">
          <div className="basis-[60%] pl-[7rem]">
            <h2 className="sectionHeading text-center tracking-[4px] text-right  !text-[16px] midlandfontmedium text-primary">
              GV FINANCE
            </h2>
            <p className="my-[1rem] text-[14px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <p className="mb-[1rem] text-[14px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <div>
              <div className="flex justify-between items-start flex-wrap my-[2.5rem]">
                <h3 className="sectionHeading h-[112px] border-r-[1px] basis-[29%] border-r-[#00000080] text-center tracking-[4px] !text-[17px] midlandfontmedium text-primary">
                  5 CR
                  <span className="block text-center text-[8px] tracking-[0.5px]">
                    Lorem Ipsum
                  </span>
                </h3>
                <div className="basis-[65%]">
                  <p className="text-[12px]">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </p>
                  <p className="text-[12px]">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-[1rem] w-[92%]">
              {" "}
              <CommonBtn to={""} TagName={Link} target="_blank">
                Know More <BsArrowUpRight />{" "}
              </CommonBtn>
            </div>
          </div>
          <img
            src="assets/frontend/images/aboutus/verticals/vertical-1.jpg"
            alt="vertical-1"
            className="basis-[32%] h-[480px]"
          />
        </div>
        <div className="flex items-center justify-between mt-[4rem] flex-wrap">
          <img
            src="assets/frontend/images/aboutus/verticals/vertical-2.jpg"
            alt="vertical-1"
            className="basis-[32%] h-[480px]"
          />
          <div className="basis-[60%] pr-[7rem]">
            <h2 className="sectionHeading text-left tracking-[4px] !text-[16px] midlandfontmedium text-primary">
              GV FINANCE
            </h2>
            <p className="my-[1rem] text-[14px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <p className="mb-[1rem] text-[14px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <div>
              <div className="flex justify-between items-start flex-wrap my-[2.5rem]">
                <h3 className="sectionHeading h-[112px] border-r-[1px] basis-[29%] border-r-[#00000080] text-center tracking-[4px] !text-[17px] midlandfontmedium text-primary">
                  2 CR
                  <span className="block text-center text-[8px] tracking-[0.5px]">
                    Lorem Ipsum
                  </span>
                </h3>
                <div className="basis-[65%]">
                  <p className="text-[12px]">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </p>
                  <p className="text-[12px]">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-[1rem] w-[92%]">
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
