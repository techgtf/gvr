import React from "react";
import { Link } from "react-router-dom";
import { BASE_ROOT } from "../../../config";
import ScrollToTop from "../components/ScrollToTop";

export default function FooterLinks({ toggelLinks }) {
  return (
    <>
      <ScrollToTop />
      <div
        className={`footerLinks text-left ${
          toggelLinks ? "active" : ""
        } bg-[#33638b]`}
      >
        <div className="max-w-[95%] m-auto pt-12 pb-10 grid md:flex">
          <ul className="links_ul uppercase text-white w-full col-span-2">
            <li>
              <div className="heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5">
                residential
              </div>
              <Link className="block mb-4" to={`${BASE_ROOT}microsite`}>
                gv homes
              </Link>
              <Link className="block mb-4" to={`${BASE_ROOT}microsite`}>
                SHARNAM
              </Link>
              <Link className="block mb-4" to={`${BASE_ROOT}microsite`}>
                ANANDAM
              </Link>
            </li>
          </ul>
          <ul className="links_ul uppercase text-white w-full col-span-2">
            <li>
              <div className="heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5">
                commercial
              </div>
              <Link className="block mb-4" to={`#`}>
                project name
              </Link>
            </li>
          </ul>
          <ul className="links_ul uppercase text-white w-full col-span-2">
            <li>
              <div className="heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5">
                our Profile
              </div>
              <Link className="block mb-4" to={`${BASE_ROOT}about-us`}>
                about us
              </Link>
              <Link className="block mb-4" to={`${BASE_ROOT}csr`}>
                csr
              </Link>
              <Link className="block mb-4" to={`#`}>
                our verticals
              </Link>
            </li>
          </ul>
          <ul className="links_ul uppercase text-white w-full col-span-2">
            <li>
              <div className="heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5">
                careers
              </div>
              <Link className="block mb-4" to={`${BASE_ROOT}career`}>
                all job openings
              </Link>
            </li>
          </ul>
          <ul className="links_ul uppercase text-white w-full col-span-4">
            <li>
              <div className="heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5">
                buyer's guide
              </div>
              <div className="flex gap-3">
                <div>
                  <Link className="block mb-4" to={`${BASE_ROOT}blogs`}>
                    Blogs
                  </Link>
                  <Link className="block mb-4" to={`${BASE_ROOT}home-loan`}>
                    Home Loans
                  </Link>
                  <Link className="block mb-4" to={`${BASE_ROOT}tax-benefits`}>
                    Tax Benefits
                  </Link>
                  <Link
                    className="block mb-4"
                    to={`${BASE_ROOT}area-converter`}
                  >
                    Area Converter
                  </Link>
                  <Link
                    className="block mb-4"
                    to={`${BASE_ROOT}property-investment`}
                  >
                    Property Investment
                  </Link>
                </div>

                <div>
                  <Link className="block mb-4" to={`${BASE_ROOT}nri-corner`}>
                    Nri Corner
                  </Link>
                  <Link className="block mb-4" to={`${BASE_ROOT}nri-investor`}>
                    Nri Investors
                  </Link>
                  <Link className="block mb-4" to={`${BASE_ROOT}nri-investor`}>
                    Nri Investors
                  </Link>
                  <Link
                    className="block mb-4"
                    to={`${BASE_ROOT}emi-calculator`}
                  >
                    Emi Calculator
                  </Link>
                  <Link className="block mb-4" to={`#`}>
                    FAQ
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
