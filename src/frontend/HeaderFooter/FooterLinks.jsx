import React from "react";
import { Link } from "react-router-dom";
import { BASE_ROOT } from "../../../config";
import ScrollToTop from "../components/ScrollToTop";

export default function FooterLinks({ toggelLinks }) {
  return (
    <>
      <ScrollToTop />
      <div className={`footerLinks text-left ${toggelLinks ? "active" : ""} bg-[#33638b]`}>
        <div className="max-w-[95%] m-auto pt-12 pb-10 grid md:flex">
          
          {/* Residential Links */}
          <ul className="links_ul uppercase text-white w-full col-span-2">
            <li>
              <div className="heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5">Residential</div>
              <Link className="block mb-4" to={`${BASE_ROOT}gv-homes`}>GV Homes</Link>
              <Link className="block mb-4" to={`${BASE_ROOT}microsite`}>Sharnam</Link>
              <Link className="block mb-4" to={`${BASE_ROOT}anandam`}>Anandam</Link>
              <Link className="block mb-4" to={`${BASE_ROOT}vilasa`}>Vilasa</Link>
              <Link className="block mb-4" to={`${BASE_ROOT}residential`}>All Residential</Link>
            </li>
          </ul>

          {/* Commercial Links */}
          <ul className="links_ul uppercase text-white w-full col-span-2">
            <li>
              <div className="heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5">Commercial</div>
              <Link className="block mb-4" to={`${BASE_ROOT}commercial-projects`}>All Commercial</Link>
            </li>
          </ul>

          {/* Our Profile Links */}
          <ul className="links_ul uppercase text-white w-full col-span-2">
            <li>
              <div className="heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5">Our Profile</div>
              <Link className="block mb-4" to={`${BASE_ROOT}about-us`}>About Us</Link>
              <Link className="block mb-4" to={`${BASE_ROOT}esg`}>ESG</Link>
            </li>
          </ul>

          {/* Careers Links */}
          <ul className="links_ul uppercase text-white w-full col-span-2">
            <li>
              <div className="heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5">Careers</div>
              <Link className="block mb-4" to={`${BASE_ROOT}career`}>All Job Openings</Link>
            </li>
          </ul>

          {/* Buyer's Guide Links */}
          <ul className="links_ul uppercase text-white w-full col-span-4">
            <li>
              <div className="heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5">Buyer's Guide</div>
              <div className="flex gap-3">
                <div>
                  <Link className="block mb-4" to={`${BASE_ROOT}blogs`}>Blogs</Link>
                  <Link className="block mb-4" to={`${BASE_ROOT}home-loan`}>Home Loans</Link>
                  <Link className="block mb-4" to={`${BASE_ROOT}tax-benefits`}>Tax Benefits</Link>
                  <Link className="block mb-4" to={`${BASE_ROOT}area-converter`}>Area Converter</Link>
                  <Link className="block mb-4" to={`${BASE_ROOT}property-investment`}>Property Investment</Link>
                </div>

                <div>
                  <Link className="block mb-4" to={`${BASE_ROOT}nri-corner`}>NRI Corner</Link>
                  <Link className="block mb-4" to={`${BASE_ROOT}nri-investor`}>NRI Investors</Link>
                  <Link className="block mb-4" to={`${BASE_ROOT}emi-calculator`}>EMI Calculator</Link>
                  <Link className="block mb-4" to={`${BASE_ROOT}faqs`}>FAQ</Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
