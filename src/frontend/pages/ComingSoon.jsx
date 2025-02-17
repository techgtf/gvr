import * as CONFIG from "../../../config";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <section className="bg-[#EFF5FA] flex flex-col justify-around pb-[180px]">
      <img
        src={`https://res.cloudinary.com/dx3l6id8r/image/upload/v1739443059/coming-soon_xwz2l8.webp`}
        alt="project image"
        className="xl:h-[60vh] h-[40vh] object-cover w-[100%] objectRight object-top"
      />
      <div className="flex justify-center py-7 mb-8">
        <button className="uppercase border-solid border-black border-[1px] mb-[20px] py-[5px] px-[20px] rounded">
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
