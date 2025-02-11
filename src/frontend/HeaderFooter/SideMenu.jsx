import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { SlClose } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { BASE_ROOT } from "../../../config";

function SideMenu({ setOpenSidebar }) {
  const sideMenuRef = useRef(null);
  const navigate = useNavigate(); // Using useNavigate for programmatic navigation

  useLayoutEffect(() => {
    gsap.fromTo(
      ".sidemenu",
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );

    // Handle outside click to close sidebar
    const handleOutsideClick = (event) => {
      if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [location.pathname]);

  const handleClose = () => {
    gsap.to(".sidemenu", {
      x: 100,
      opacity: 0,
      duration: 1,
      onComplete: () => {
        setOpenSidebar(false); // Close the sidebar after animation completes
      },
    });
  };

  const handleLinkClick = (path) => {
    console.log(`Navigating to: ${path}`); // Ensure correct path before navigation
    handleClose(); // Close the sidebar
    setTimeout(() => {
      navigate(path); // Programmatically navigate
    }, 1000); // Delay navigation to match the animation
  };

  return (
    <div
      ref={sideMenuRef}
      className="sidemenu bg-[#EFF5FA] text-black opacity-90 fixed top-0 right-0 w-full sm:w-[28%] h-screen px-10"
    >
      <div className="absolute top-[40%] left-[-23px] bg-[#33638B] w-[37px] h-[175px] flex items-center flex-shrink-0 pt-[5px] pb-[5px]">
        <button
          onClick={handleClose}
          className="w-[37px] h-[133.574px] flex-shrink-0 text-white text-center font-poppins text-[12px] tracking-[3px] font-normal leading-[28px] uppercase"
        >
          C<br />L<br />O<br />S<br />E
        </button>
      </div>
      <div className="flex flex-col relative items-center gap-5 justify-evenly h-full">
        <ul className="w-full flex flex-col gap-10">
          {/* Our Projects Section */}
          <li>
            <div className="title text-[#0e69ae] uppercase text-[16px] py-3 border-b border-[#0000001a]">
              Our Projects
            </div>
            <div className="title_links flex gap-5 uppercase text-[#484747] py-3">
              <span
                onClick={() => handleLinkClick(`${BASE_ROOT}residential`)}
                className="text-[12px] tracking-[2px] cursor-pointer"
              >
                All Residential
              </span>
              <span className="text-[#0e69ae]">/</span>
              <span
                onClick={() =>
                  handleLinkClick(`${BASE_ROOT}commercial-projects`)
                }
                className="text-[12px] tracking-[2px] cursor-pointer"
              >
                All Commercial
              </span>
            </div>
          </li>

          {/* Our Profile Section */}
          <li>
            <div className="title uppercase text-[16px] text-[#0e69ae] py-3 border-b border-[#0000001a]">
              Our Profile
            </div>
            <div className="title_links flex gap-5 uppercase text-[#484747] py-3">
              <span
                onClick={() => handleLinkClick(`${BASE_ROOT}about-us`)}
                className="text-[12px] tracking-[2px] cursor-pointer"
              >
                About Us
              </span>
              <span className="text-[#0e69ae]">/</span>
              <span
                onClick={() => handleLinkClick(`${BASE_ROOT}esg`)}
                className="text-[12px] tracking-[2px] cursor-pointer"
              >
                Our ESG
              </span>
            </div>
          </li>

          {/* Career Section */}
          <li>
            <div className="title uppercase text-[#0e69ae] text-[16px] py-3 border-b border-[#0000001a]">
              Career
            </div>
            <div className="title_links uppercase text-[#484747]  py-3">
              <span
                onClick={() => handleLinkClick(`${BASE_ROOT}career`)}
                className="text-[12px] tracking-[2px] cursor-pointer"
              >
                All Job Openings
              </span>
            </div>
          </li>

          {/* Find Us Section */}
          <li>
            <div className="title uppercase text-[16px] text-[#0e69ae] py-3 border-b border-[#0000001a]">
              Find Us
            </div>
            <div className="title_links uppercase text-[#484747] py-3">
              <span
                onClick={() => handleLinkClick(`${BASE_ROOT}contact-us`)}
                className="text-[12px] tracking-[2px] cursor-pointer"
              >
                Contact Us
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
