import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./footer.css";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import * as CONFIG from "../../../config";
import { BASE_ROOT } from "../../../config";
import { Link } from "react-router-dom";
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";
import FooterBottom from "./FooterBottom";
import FooterLinks from "./FooterLinks";
import FooterLinksMob from "./FooterLinksMob";

gsap.registerPlugin(ScrollToPlugin);

export default function Footer() {
  const [toggelLinks, setToggelLinks] = useState(false);

  const GiveFooterLinks = window.innerWidth > 767 ? <FooterLinks toggelLinks={toggelLinks} /> : <FooterLinksMob toggelLinks={toggelLinks} />

  return (
    <>
      <section id="mainfooter">
        <footer
          className="footermain bg-slate-700 text-center text-white lg:pt-10 pt-7 relative"
        >
          <button
            className="toggelButton absolute left-0 right-0 lg:top-[-28px] top-[-22px] flex w-fit m-auto justify-center bg-white text-black items-center rounded-full lg:p-[8px] p-[6px] focus-visible:outline-none focus-visible:ring-0"
            onClick={() => setToggelLinks(!toggelLinks)}
            aria-label={toggelLinks ? "Collapse footer links" : "Expand footer links"}
            title={toggelLinks ? "Collapse footer links" : "Expand footer links"}
            aria-expanded={toggelLinks}
          >


            <span className="sr-only">{toggelLinks ? "Collapse footer links" : "Expand footer links"}</span>

            <span className="icon cursor-pointer lg:h-[35px] lg:w-[35px] h-[28px] w-[28px] border border-[#3f3f3f] rounded-full flex justify-center items-center">
              {toggelLinks ? (
                <LiaAngleUpSolid className="cursor-pointer lg:text-[14px] text-[12px]" />
              ) : (
                <LiaAngleDownSolid className="cursor-pointer lg:text-[14px] text-[12px]" />
              )}
            </span>
          </button>

          <div className="footer_container max-w-[95%] m-auto">
            <div className="block md:flex justify-between items-center lg:pb-8 pb-6">
              <Link
                to={`${CONFIG.BASE_ROOT}`}
                className="lg:flex hidden justify-center md:block focus-visible:outline-none focus-visible:ring-0"
              >
                <img
                  className="h-[65px]"
                  src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/logo.webp`}
                  alt="Great Value Realty Logo"
                />
              </Link>

              <ul className="flex flex-wrap lg:justify-between justify-center lg:gap-5 gap-[18px] mt-4 md:mt-0 uppercase tracking-[1px]">
                <li className="lg:w-[auto] w-[30%]">
                  <Link
                    to={`${BASE_ROOT}residential-properties-ncr`}
                    className="xl:text-[13px] text-[12px] tracking-[2px] lg:font-[400] font-[300] focus-visible:outline-none focus-visible:ring-0"
                  >
                    Residential
                  </Link>
                </li>
                <li className="lg:w-[auto] w-[30%]">
                  <Link
                    to={`${BASE_ROOT}commercial-projects`}
                    className="xl:text-[13px] text-[12px] tracking-[2px] lg:font-[400] font-[300] focus-visible:outline-none focus-visible:ring-0"
                  >
                    Commercial
                  </Link>
                </li>
                <li className="lg:w-[auto] w-[30%]">
                  <Link
                    to={`${BASE_ROOT}media`}
                    className="xl:text-[13px] text-[12px] tracking-[2px] lg:font-[400] font-[300] focus-visible:outline-none focus-visible:ring-0"
                  >
                    Media Centre
                  </Link>
                </li>
                <li className="lg:w-[auto] w-[30%]">
                  <Link
                    to={`${BASE_ROOT}about-us`}
                    className="xl:text-[13px] text-[12px] tracking-[2px] lg:font-[400] font-[300] focus-visible:outline-none focus-visible:ring-0"
                  >
                    about us
                  </Link>
                </li>
                <li className="lg:w-[auto] w-[30%]">
                  <Link
                    to={`${BASE_ROOT}esg`}
                    className="xl:text-[13px] lg:hidden block text-[12px] tracking-[2px] lg:font-[400] font-[300] focus-visible:outline-none focus-visible:ring-0"
                  >
                    esg
                  </Link>
                </li>
                <li className="lg:w-[auto] w-[30%]">
                  <Link
                    to={`${CONFIG.BASE_ROOT}contact-us`}
                    className="xl:text-[13px] text-[12px] tracking-[2px] lg:font-[400] font-[300] focus-visible:outline-none focus-visible:ring-0"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>

            </div>
          </div>

          {GiveFooterLinks}
        </footer>
        <FooterBottom />
      </section>
    </>
  );
}
