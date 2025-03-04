import { Link } from "react-router-dom"
import CommonHeading from "./commonHeading"
import { SlClose } from "react-icons/sl";
import { BASE_ROOT } from "../../../config";
import { useState } from "react";

export default function MbTabLinks() {
    const [isVisible, setIsVisible] = useState(false)
    const Styles = {
        wrapper: {
            backgroundColor: '#f0f0f0',
            zIndex: 11,
        },
        drpDiv: {
            zIndex: 11,
        }
    }

    return (
        <div className="MbTabLinks lg:hidden fixed bottom-0 left-0 right-0 bg-gray-300 border-t border-gray-300" style={Styles.wrapper}>
            <div className="mbLinks_in relative">
                <div className="flex justify-center">
                    <Link
                        onClick={() => { setIsVisible(true) }}
                        className="uppercase w-[49%] tracking-[2px] text-center text-[13px] px-5 py-3 bg-[#eff5fa]">Residential</Link>
                    <Link
                        onClick={() => { setIsVisible(false) }}
                        to={`${BASE_ROOT}commercial-projects`}
                        className="uppercase w-[49%] tracking-[2px] text-center text-[13px] px-5 py-3 bg-[#eff5fa] border-l border-gray-300">Commercial</Link>
                    <Link
                        onClick={() => { setIsVisible(false) }}
                        to={`${BASE_ROOT}esg`}
                        className="uppercase w-[49%] tracking-[2px] text-center text-[13px] px-5 py-3 bg-[#eff5fa] border-l border-gray-300">Esg</Link>
                </div>
                {/* h-full bg-[#00000094] */}
                <div style={Styles.drpDiv} className={`fixed flex flex-col justify-end left-0 right-0 ${isVisible ? "bottom-0" : "bottom-[-100%]"} transition-all`}>
                    <div className="absolute top-[15px] right-[15px]"
                        onClick={() => { setIsVisible(false) }}
                    ><SlClose className="cursor-pointer text-3xl text-[#00000094]" />
                    </div>
                    <ul className="bg-[#eff5faf5]">
                        {[
                            { name: "SHARANAM", path: "sharanam-apartments-noida", location: "sector 107, noida" },
                            { name: "ANANDAM", path: "anandam-apartments-noida", location: "sector 107, noida" },
                            { name: "CASA UDAY", path: "casa-uday-properties-in-ncr", location: "uday park, new delhi" },
                            { name: "Vilasa", path: "vilasa-sector-6-sohna", location: "sector 6, sohna" },
                            { name: "Sanctuary 105", path: "sanctuary-sector-105-gurugram", location: "sector 6, gurugram" }
                        ].map(({ name, path, location }) => (
                            <li key={path} className="px-8 pt-6 pb-4 mb-1 border-b last:border-b-0">
                                <Link
                                    onClick={() => { setIsVisible(false) }}
                                    to={`${BASE_ROOT}${path}`} className="cursor-pointer">
                                    <CommonHeading HeadingText={name} />
                                    <p className="place uppercase pt-2 cursor-pointer">{location}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    )
}