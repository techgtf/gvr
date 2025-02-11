import { Link } from "react-router-dom"
import CommonHeading from "./commonHeading"
import NavDropdown from "../HeaderFooter/NavDropdown"
import { SlClose } from "react-icons/sl";





export default function MbTabLinks() {
    const Styles = {
        wrapper: {
            backgroundColor: '#f0f0f0',
            zIndex: 11,
        },
        drpDiv: {
            zIndex: 11,
            bottom: 0,

        }
    }
    return (
        <div className="MbTabLinks fixed bottom-0 left-0 right-0 bg-gray-300 border-t border-gray-300" style={Styles.wrapper}>
            <div className="mbLinks_in relative">
                <div className="flex justify-between">
                    <Link className="uppercase tracking-[2px] text-center w-[30%] text-[13px] px-5 py-3">Residential</Link>
                    <Link className="uppercase tracking-[2px] text-center w-[30%] text-[13px] px-5 py-3 border-l border-gray-300">Commercial</Link>
                    <Link className="uppercase tracking-[2px] text-center w-[30%] text-[13px] px-5 py-3 border-l border-gray-300">ESG</Link>
                </div>
                <div style={Styles.drpDiv} className="fixed flex flex-col justify-end left-0 right-0 h-full bg-[#00000094] transition-all">
                    <ul className="bg-white p-8">
                        {[
                            { name: "SHARANAM", path: "microsite", location: "sector 107, noida" },
                            { name: "ANANDAM", path: "anandam", location: "sector 107, noida" },
                            { name: "GV HOMEZ", path: "gv-homes", location: "uday park, new delhi" },
                            { name: "Vilasa", path: "vilasa", location: "sector 6, sohna" }
                        ].map(({ name, path, location }) => (
                            <li key={path} className="pb-3 mb-3 border-b">
                                <span onClick={() => handleLinkClick(`${BASE_ROOT}${path}`)} className="cursor-pointer">
                                    <CommonHeading HeadingText={name} />
                                    <p className="place uppercase pt-2 cursor-pointer">{location}</p>
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* <div className="absolute bottom-0">
                        <SlClose className="cursor-pointer text-3xl text-[#00000094]" />
                    </div> */}
                </div>
            </div>
        </div>
    )
}