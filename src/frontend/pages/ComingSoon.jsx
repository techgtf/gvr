import * as CONFIG from "../../../config";
import { Link } from "react-router-dom";
import { MdOutlineUpcoming } from "react-icons/md";
const ComingSoon = () => {
  return (
    <section className="bg-[#EFF5FA] h-[100vh] flex flex-col justify-around py-[80px]">
      <div className="text-center xl:w-[70%] w-[95%] mx-auto my-0 flex justify-center items-center flex-col">
        {/* <img
          src={`${CONFIG.ASSET_IMAGE_URL}/frontend/images/icons/check.png`}
          alt="check.png"
          className="w-[30px]"
        /> */}

        <MdOutlineUpcoming className="text-[30px]" />
        <h3 className="uppercase my-[30px]">Successfully submitted</h3>
        <p className="uppercase text-[#000000B2] mb-[30px] xl:text-center ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button className="uppercase border-solid border-black border-[1px] mb-[20px] py-[10px] px-[20px]">
          {" "}
          <Link to={CONFIG.BASE_ROOT}>back to home</Link>
        </button>
      </div>
      <p className="flex uppercase justify-between midlandfontmedium mt-[20px] w-[100%] text-primary opacity-[0.3]">
        <span className="text-[7vw] midlandfontmedium">C</span>
        <span className="text-[7vw] midlandfontmedium">0</span>
        <span className="text-[7vw] midlandfontmedium">m</span>
        <span className="text-[7vw] midlandfontmedium">i</span>
        <span className="text-[7vw] midlandfontmedium">n</span>
        <span className="text-[7vw] midlandfontmedium">g</span>
        <span></span>
        <span className="text-[7vw] midlandfontmedium">s</span>
        <span className="text-[7vw] midlandfontmedium">o</span>
        <span className="text-[7vw] midlandfontmedium">o</span>
        <span className="text-[7vw] midlandfontmedium">n</span>
      </p>
    </section>
  );
};

export default ComingSoon;
