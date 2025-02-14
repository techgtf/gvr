import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./footer.css";
import FooterLinks from "./FooterLinks";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import * as CONFIG from "../../../config";
import { BASE_ROOT } from "../../../config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";
import FooterBottom from "./FooterBottom";

gsap.registerPlugin(ScrollToPlugin);

export default function Footer() {
  const [toggelLinks, setToggelLinks] = useState(false);
  const footerRef = useRef(null);
  const navigate = useNavigate();

  return (
    <>
      <section id="mainfooter">
        <footer
          ref={footerRef}
          className="footermain bg-slate-700 text-center text-white lg:pt-10 pt-5 relative"
        >
          <button
            className="toggelButton absolute left-0 right-0 lg:top-[-28px] top-[-22px] flex w-fit m-auto justify-center bg-white text-black items-center rounded-full lg:p-[8px] p-[6px] 
  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            onClick={() => setToggelLinks(!toggelLinks)}
            aria-label={toggelLinks ? "Collapse footer links" : "Expand footer links"} // Screen reader label
            title={toggelLinks ? "Collapse footer links" : "Expand footer links"} // Tooltip on hover
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
            <div className="block md:flex justify-between items-center lg:pb-8 pb-5">
              <Link
                to={`${CONFIG.BASE_ROOT}`}
                className="lg:flex hidden justify-center md:block"
              >
                <img
                  className="h-[65px]"
                  src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/logo.png`}
                  alt="Great Value Realty Logo"
                />
              </Link>
              <ul className="grid md:grid-cols-5 grid-cols-2 lg:justify-between justify-center lg:gap-4 gap-2 mt-4 md:mt-0 uppercase tracking-[1px]">
                <li>
                  <Link
                    to={`${BASE_ROOT}residential`}
                    className="xl:text-[14px] text-[12px]"
                  >
                   Residential
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${BASE_ROOT}commercial-projects`}
                    className="xl:text-[14px] text-[12px]"
                  >
                    Commercial
                  </Link>
                </li>
                <li>
                  <Link to={`${BASE_ROOT}media`} className="xl:text-[14px] text-[12px]">
                    media centre
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${BASE_ROOT}about-us`}
                    className="xl:text-[14px] text-[12px]"
                  >
                    Our Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${CONFIG.BASE_ROOT}contact-us`}                 
                    className="xl:text-[14px] text-[12px]"
                  >
                    contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <FooterLinks toggelLinks={toggelLinks} />
        </footer>
        <FooterBottom />
      </section>
    </>
  );
}
