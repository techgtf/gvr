import React from "react";
import { Link } from "react-router-dom";
import * as CONFIG from "../../../config";

export default function FooterBottom() {
  return (
    <div className="footer_bottom text-center lg:pt-5 lg:pb-5 pb-[80px] pt-2">
      <div className="flex flex-wrap max-w-[95%] uppercase lg:justify-between justify-center m-auto">
        <Link
          className="xl:text-[12px] text-[10px] tracking-[1px] text-[#a3a3a3]"
          to={"https://gtftechnologies.com/"}
          target="_blank"
        >
          Crafted by GTF Technologies
        </Link>
        <div className="xl:text-[12px] text-[10px] centerd tracking-[1px] text-[#8f8f8f]">
          Copyright ©{" "}
          <Link className="xl:text-[12px] text-[10px] text-[#33638B]" to={`${CONFIG.BASE_ROOT}`}>
            GreaT Value Realty
          </Link>{" "}
          2025. All Rights Reserved
        </div>
        <div className="socLinks flex lg:gap-x-6 lg:gap-0 gap-4 lg:pt-0 pt-3">
          <Link to={"https://www.facebook.com/greatvaluerealty/"}>
            {" "}
            <img
              className="lg:h-7 h-5"
              src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/fb.png`}
              alt="fb"
            />{" "}
          </Link>
          <Link to={"https://www.instagram.com/greatvalue_realty/"}>
            {" "}
            <img
              className="lg:h-7 h-5"
              src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/instagram.png`}
              alt="fb"
            />{" "}
          </Link>
          <Link to={"https://x.com/GreatValueGroup"}>
            {" "}
            <img
              className="lg:h-7 h-5"
              src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/twitter.png`}
              alt="fb"
            />{" "}
          </Link>
          <Link to={"https://www.linkedin.com/company/greatvaluerealty/"}>
            {" "}
            <img
              className="lg:h-7 h-5"
              src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/linkedin.png`}
              alt="fb"
            />{" "}
          </Link>
          <Link to={"https://www.youtube.com/@greatvaluerealty"}>
            {" "}
            <img
              className="lg:h-7 h-5"
              src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/youtube.png`}
              alt="fb"
            />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
