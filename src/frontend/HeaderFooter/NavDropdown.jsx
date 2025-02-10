import React, { useEffect, useLayoutEffect, useRef } from "react";
import CommonHeading from "../components/commonHeading";
import { useNavigate } from "react-router-dom";
import { SlClose } from "react-icons/sl";
import gsap from "gsap";
import { BASE_ROOT } from "../../../config";

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
            ctx.revert(); // Cleanup GSAP animations
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [location.pathname]);

    const handleClose = () => {
        gsap.to(dropdownRef.current, {
            y: -100,
            opacity: 0,
            duration: 0.8,
            onComplete: () => {
                setDropdown(false);
                setActiveItem(null);
            }
        });
    };

    const handleLinkClick = (path) => {
        gsap.to(dropdownRef.current, {
            y: -100,
            opacity: 0,
            duration: 0.8,
            onComplete: () => {
                setDropdown(false);
                setActiveItem(null);
                setTimeout(() => {
                    navigate(path);
                }, 500);
            }
        });
    };

    return (
        <div
            ref={dropdownRef}
            className="nav_dropdown fixed top-[73px] left-0 h-[50vh] w-full bg-[#EFF5FA] text-black opacity-95 p-10"
        >
            <div className="relative h-full">
                <ul className="flex justify-evenly items-center h-full">
                    {[
                        { name: "SHARANAM", path: "microsite", location: "sector 107, noida" },
                        { name: "ANANDAM", path: "anandam", location: "sector 107, noida" },
                        { name: "GV HOMEZ", path: "gv-homes", location: "uday park, new delhi" },
                        { name: "Vilasa", path: "vilasa", location: "sector 6, sohna" }
                    ].map(({ name, path, location }) => (
                        <li key={path}>
                            <span onClick={() => handleLinkClick(`${BASE_ROOT}${path}`)} className="cursor-pointer">
                                <CommonHeading HeadingText={name} />
                                <p className="place uppercase pt-2 cursor-pointer">{location}</p>
                            </span>
                        </li>
                    ))}
                </ul>

                <div className="absolute bottom-0 left-[50%]">
                    <SlClose onClick={handleClose} className="cursor-pointer text-3xl text-[#00000094]" />
                </div>
            </div>
        </div>
    );
}

export default NavDropdown;
