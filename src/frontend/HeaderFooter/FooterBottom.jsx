import React from "react";
import { Link } from "react-router-dom";
import * as CONFIG from "../../../config";

export default function FooterBottom() {
  return (
    <div className="footer_bottom text-center lg:pt-5 lg:pb-5 pb-[80px] pt-2">
      <div className="flex flex-wrap max-w-[95%] uppercase lg:justify-between justify-center m-auto">

        {/* ✅ Use <a> for External Links */}
        <a
          className="xl:text-[12px] text-[10px] tracking-[1px] text-[#a3a3a3]"
          href="https://gtftechnologies.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Crafted by GTF Technologies
        </a>

        <div className="xl:text-[12px] text-[10px] centerd tracking-[1px] text-[#8f8f8f]">
          Copyright ©{" "}
          <Link
            className="xl:text-[12px] text-[10px] text-[#33638B]"
            to={`${CONFIG.BASE_ROOT}`}
          >
            GreaT Value Realty
          </Link>{" "}
          2025. All Rights Reserved
        </div>

        {/* ✅ Social Media Links Fixed */}
        <div className="socLinks flex lg:gap-x-6 lg:gap-0 gap-4 lg:pt-0 pt-3">
          {[
            { href: "https://www.facebook.com/greatvaluerealty/", icon: "fb.png", alt: "Facebook" },
            { href: "https://www.instagram.com/greatvalue_realty/", icon: "instagram.png", alt: "Instagram" },
            { href: "https://x.com/GreatValueGroup", icon: "twitter.png", alt: "Twitter" },
            { href: "https://www.linkedin.com/company/greatvaluerealty/", icon: "linkedin.png", alt: "LinkedIn" },
            { href: "https://www.youtube.com/@greatvaluerealty", icon: "youtube.png", alt: "YouTube" },
          ].map(({ href, icon, alt }) => (
            <a
              key={alt}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 
                       focus-visible:ring focus-visible:ring-blue-300 focus-visible:bg-blue-100 rounded-md transition-all"
            >
              <img
                className="lg:h-7 h-5"
                src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/${icon}`}
                alt={alt}
                onError={(e) => console.error(`Image failed to load: ${e.target.src}`)} // Debugging
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
