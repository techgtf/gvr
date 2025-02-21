import React from "react";
import { Link } from "react-router-dom";
import { BASE_ROOT } from "../../../config";

export default function FooterLinks({ toggelLinks }) {
  return (
    <>
      <div className={`footerLinks text-left ${toggelLinks ? "active" : ""} bg-[#33638b]`}>
        <div className="max-w-[95%] m-auto pt-12 pb-10 md:flex">

          {/* Residential Links */}
          <ul className="links_ul uppercase text-white w-[18%]">
            <li>
              <div className="heading-div  midlandfontmedium text-[8px] tracking-[4px] mb-5">Residential</div>
              <Link className="block tracking-[2px] mb-4" to={`${BASE_ROOT}casa-uday`}>CASA UDAY</Link>
              <Link className="block tracking-[2px] mb-4" to={`${BASE_ROOT}sharanam`}>Sharnam</Link>
              <Link className="block tracking-[2px] mb-4" to={`${BASE_ROOT}anandam`}>Anandam</Link>
              <Link className="block tracking-[2px] mb-4" to={`${BASE_ROOT}sanctuary`}>Sanctuary 105</Link>
              <Link className="block tracking-[2px] mb-4" to={`${BASE_ROOT}residential`}>Residential</Link>
            </li>
          </ul>

          {/* Commercial Links */}
          <ul className="links_ul uppercase text-white w-[18%]">
            <li>
              <div className="heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5">Commercial</div>
              <Link className="block mb-4 tracking-[2px]  " to={`${BASE_ROOT}commercial-projects`}>Commercial</Link>
            </li>
          </ul>

          {/* Our Profile Links */}
          <ul className="links_ul uppercase text-white w-[18%]">
            <li>
              <div className="heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5">Our Profile</div>
              <Link className="block tracking-[2px] mb-4" to={`${BASE_ROOT}about-us`}>About Us</Link>
              <Link className="block tracking-[2px] mb-4" to={`${BASE_ROOT}esg`}>ESG</Link>
            </li>
          </ul>

          {/* Careers Links */}
          <ul className="links_ul uppercase text-white w-[18%]">
            <li>
              <div className="heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5">Careers</div>
              <Link className="block tracking-[2px] mb-4" to={`${BASE_ROOT}career`}>All Job Openings</Link>
            </li>
          </ul>

          {/* Buyer's Guide Links */}
          <ul className="links_ul uppercase text-white w-[27%]">
            <li>
              <div className="heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5">Buyer's Guide</div>
              <div className="flex gap-3 justify-between">
                <div>
                  <Link className="block tracking-[2px] mb-4" to={`${BASE_ROOT}blogs`}>Blogs</Link>
                  <Link className="block tracking-[2px] mb-4" to={`${BASE_ROOT}home-loan`}>Home Loans</Link>
                  <Link className="block tracking-[2px] mb-4" to={`${BASE_ROOT}tax-benefits`}>Tax Benefits</Link>
                  <Link className="block tracking-[2px] mb-4" to={`${BASE_ROOT}area-converter`}>Area Converter</Link>
                  <Link className="block tracking-[2px] mb-4" to={`${BASE_ROOT}property-investment`}>Property Investment</Link>
                </div>

                <div>
                  <Link className="block tracking-[2px] mb-4" to={`${BASE_ROOT}nri-corner`}>NRI Corner</Link>
                  <Link className="block tracking-[2px] mb-4" to={`${BASE_ROOT}nri-investor`}>NRI Investors</Link>
                  <Link className="block tracking-[2px] mb-4" to={`${BASE_ROOT}emi-calculator`}>EMI Calculator</Link>
                  <Link className="block tracking-[2px] mb-4" to={`${BASE_ROOT}faqs`}>FAQ</Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
