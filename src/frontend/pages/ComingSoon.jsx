import { useEffect } from "react";
import * as CONFIG from "../../../config";
import { Link, useLocation } from "react-router-dom";

const ComingSoon = () => {

  const pageLocation = useLocation();
  useEffect(() => {
    if (pageLocation.pathname === '/coming-soon') {
      let header = document.getElementsByClassName("app_header")[0]
      header.classList.add('active_1')
    }
    let logo_img = document.getElementsByClassName("logo_img")[0]
    logo_img.src = `${CONFIG.ASSET_IMAGE_URL}frontend/images/logo-colored.png`
  }, [])

  return (
    <section className="bg-[#EFF5FA] flex flex-col justify-around py-[160px] min-h-[70vh]">
      <div className="div_in relative">
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
        {/* <div className="flex justify-center absolute z-[1] left-0 right-0">
          <button className="uppercase border-solid border-black border-[1px] mb-[20px] py-[5px] px-[20px] rounded bg-white">
            {" "}
            <Link to={CONFIG.BASE_ROOT}>back to home</Link>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ComingSoon;
