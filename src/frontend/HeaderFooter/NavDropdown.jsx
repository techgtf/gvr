import React, { useLayoutEffect, useRef } from "react";
import CommonHeading from "../components/commonHeading";
import { Link, useNavigate } from "react-router-dom";
import { SlClose } from "react-icons/sl";
import gsap from "gsap";
import { BASE_ROOT } from "../../../config";
import { AiOutlineClose } from "react-icons/ai";

function NavDropdown({ setDropdown, setActiveItem }) {
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                dropdownRef.current,
                { y: -100, opacity: 0 },
                { y: 0, opacity: 0.9, duration: 0.8 }
            );
        }, dropdownRef);

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                handleClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            ctx.revert();
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleClose = (callback) => {
        gsap.to(dropdownRef.current, {
            y: -100,
            opacity: 0,
            duration: 0.8,
            onComplete: () => {
                setDropdown(false);
                setActiveItem(null);
                if (callback) callback();
            }
        });
    };

    return (
        <div
            ref={dropdownRef}
            className="nav_dropdown fixed top-[73px] left-0 h-[30vh] w-full bg-[#EFF5FA] text-black opacity-95 p-5"
        >
            <div className="absolute top-3 px-20 flex justify-end w-full">
                    <AiOutlineClose  onClick={() => handleClose()} className="cursor-pointer text-xl text-[#00000094]" />
                </div>
            <div className="relative h-full">
                <ul className="flex justify-evenly items-center h-full">
                    {[
                        { name: "SHARANAM", path: "sharanam", location: "sector 107, noida" },
                        { name: "ANANDAM", path: "anandam", location: "sector 107, noida" },
                        { name: "GV HOMEZ", path: "gv-homes", location: "uday park, new delhi" },
                        { name: "Vilasa", path: "vilasa", location: "sector 6, sohna" },
                    ].map(({ name, path, location }, index, array) => (
                        <React.Fragment key={path}>
                            <li>
                                <Link
                                    to={`${BASE_ROOT}${path}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleClose(() => navigate(`${BASE_ROOT}${path}`));
                                    }}
                                    className="cursor-pointer"
                                >
                                    <CommonHeading HeadingText={name} />
                                    <p className="place uppercase pt-2 cursor-pointer">{location}</p>
                                </Link>
                            </li>
                            {index < array.length - 1 && (
                                <span className="mx-2 text-gray-500 text-5xl font-[100]">|</span> // Adds pipeline between items
                            )}
                        </React.Fragment>
                    ))}

                </ul>

                
            </div>
        </div>
    );
}

export default NavDropdown;
