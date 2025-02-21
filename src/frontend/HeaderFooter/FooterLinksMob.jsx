import React from "react";
import { Link } from "react-router-dom";
import { BASE_ROOT } from "../../../config";

export default function FooterLinksMob({ toggelLinks }) {
    return (
        <div className={`footerLinks text-left ${toggelLinks ? "active" : ""} bg-[#33638b]`}>
            <div className="pt-7 pb-6 flex flex-wrap">

                {/* Residential Links */}
                <ul className="links_ul uppercase text-white w-full border-b border-solid border-[rgba(250,250,250,0.34)] pb-2 px-5 mb-7">
                    <li className="flex flex-wrap w-full">
                        <div className="heading-div text-left midlandfontmedium text-[8px] tracking-[4px] mb-5 w-full">Residential</div>
                        <Link className="block tracking-[1.2px] mb-4 font-[300] w-[33.3%]" to={`${BASE_ROOT}sharanam`}>Sharnam</Link>
                        <Link className="block tracking-[1.2px] mb-4 font-[300] w-[33.3%] text-center" to={`${BASE_ROOT}anandam`}>Anandam</Link>
                        <Link className="block tracking-[1.2px] mb-4 font-[300] w-[33.3%] text-right" to={`${BASE_ROOT}casa-uday`}>CASA UDAY</Link>
                        <Link className="block tracking-[1.2px] mb-4 font-[300] w-[33.3%]" to={`${BASE_ROOT}vilasa`}>Vilas</Link>
                        <Link className="block tracking-[1.2px] mb-4 font-[300] w-[33.3%] text-center" to={`${BASE_ROOT}sanctuary`}>Sanctuary 105</Link>
                    </li>
                </ul>

                {/* Commercial Links */}
                <ul className="links_ul uppercase text-white w-[50%] border-b border-solid border-[rgba(250,250,250,0.34)] pb-2 px-5 mb-7">
                    <li className="flex flex-wrap w-full">
                        <div className="heading-div text-left midlandfontmedium text-[8px] tracking-[4px] mb-5 w-full">Commercial</div>
                        <Link className="block mb-4 tracking-[1.2px]" to={`${BASE_ROOT}commercial-projects`}>Commercial</Link>
                    </li>
                </ul>


                {/* Careers Links */}
                <ul className="links_ul uppercase text-white w-[50%] border-b border-solid border-[rgba(250,250,250,0.34)] pb-2 px-5 mb-7">
                    <li className="lg:block flex flex-wrap lg:text-left text-right">
                        <div className="heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5 w-full">Careers</div>
                        <Link className="block tracking-[1.2px] mb-4 font-[300] w-full" to={`${BASE_ROOT}career`}>All Job Openings</Link>
                    </li>
                </ul>


                {/* Buyer's Guide Links */}
                <ul className="links_ul uppercase text-white lg:w-[33%] w-full px-5">
                    <li className="flex flex-wrap w-full">
                        <div className="heading-div text-left midlandfontmedium text-[8px] tracking-[4px] mb-5 w-full">Buyer's Guide</div>
                        <div className="flex gap-3 justify-between w-full">
                            <div className="w-49%">
                                <Link className="block tracking-[1.2px] mb-4 font-[300] w-full" to={`${BASE_ROOT}blogs`}>Blogs</Link>
                                <Link className="block tracking-[1.2px] mb-4 font-[300] w-full" to={`${BASE_ROOT}home-loan`}>Home Loans</Link>
                                <Link className="block tracking-[1.2px] mb-4 font-[300] w-full" to={`${BASE_ROOT}tax-benefits`}>Tax Benefits</Link>
                                <Link className="block tracking-[1.2px] mb-4 font-[300] w-full" to={`${BASE_ROOT}area-converter`}>Area Converter</Link>
                                <Link className="block tracking-[1.2px] mb-4 font-[300] w-full" to={`${BASE_ROOT}property-investment`}>Property Investment</Link>
                            </div>

                            <div className="w-49% text-right">
                                <Link className="block tracking-[1.2px] mb-4 font-[300] w-full" to={`${BASE_ROOT}nri-corner`}>NRI Corner</Link>
                                <Link className="block tracking-[1.2px] mb-4 font-[300] w-full" to={`${BASE_ROOT}nri-investor`}>NRI Investors</Link>
                                <Link className="block tracking-[1.2px] mb-4 font-[300] w-full" to={`${BASE_ROOT}emi-calculator`}>EMI Calculator</Link>
                                <Link className="block tracking-[1.2px] mb-4 font-[300] w-full" to={`${BASE_ROOT}faqs`}>FAQ</Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
