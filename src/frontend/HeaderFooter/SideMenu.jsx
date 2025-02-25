import gsap from "gsap";
import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BASE_ROOT } from "../../../config";
import { AiOutlineClose } from "react-icons/ai";
import * as CONFIG from "../../../config";

function SideMenu({ setOpenSidebar }) {
  const sideMenuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation(); // Get current route
  const [activeLink, setActiveLink] = useState(location.pathname);

  useLayoutEffect(() => {
    gsap.fromTo(
      ".sidemenu",
      { x: 100, opacity: 0 },
      { x: 0, opacity: 0.9, duration: 1 }
    );

    const handleOutsideClick = (event) => {
      if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname); // Update active link when location changes
  }, [location.pathname]);

  const handleClose = (callback) => {
    gsap.to(".sidemenu", {
      x: 100,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setOpenSidebar(false);
        if (callback) callback();
      },
    });
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    handleClose(() => navigate(path));
  };

  return (
    <div
      ref={sideMenuRef}
      className="sidemenu bg-[#EFF5FA] text-black opacity-95 fixed top-0 right-0 w-full sm:w-[28%] h-screen px-5 md:px-10"
    >
      <Link
        to={`${CONFIG.BASE_ROOT}`}
        className="flex md:hidden absolute top-[20px] justify-center md:block focus-visible:outline-none focus-visible:ring-0"
      >
        <img
          className="h-[50px]"
          src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/logo-colored.webp`}
          alt="Great Value Realty Logo"
        />
      </Link>
      <div className="absolute top-7 right-5 z-50">
        <AiOutlineClose
          onTouchStart={handleClose} // For mobile touch event
          onClick={handleClose}
          className="text-2xl text-gray-500 cursor-pointer"
        />

      </div>
      <div className="flex flex-col relative items-center gap-1 justify-evenly h-full">
        <ul className="w-full flex flex-col items-center gap-4">
          {[
            { label: "Residential", path: `${BASE_ROOT}residential` },
            { label: "Commercial", path: `${BASE_ROOT}commercial-projects` },
            { label: "About Us", path: `${BASE_ROOT}about-us` },
            { label: "Media Centre", path: `${BASE_ROOT}media` },
            { label: "Gallery", path: `${BASE_ROOT}gallery` },
            { label: "Blogs", path: `${BASE_ROOT}blogs` },
            { label: "Job Openings", path: `${BASE_ROOT}career` },
            { label: "Contact Us", path: `${BASE_ROOT}contact-us` },
          ].map((item) => (
            <li key={item.path}>
              <div className="title_links uppercase text-[#48474780] py-2">
                <div className="py-2">
                  <Link
                    to={item.path}
                    className="group relative inline-block cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.path);
                    }}
                  >
                    <span
                      className={`text-[14px] tracking-[3px] 
                        bg-gradient-to-r from-[#33638b] via-[#33638b] to-black 
                        bg-[length:200%_100%] bg-[-100%] 
                        inline-block transition-all duration-300 ease-in-out 
                        ${activeLink === item.path ? "bg-[0%] font-[600] text-transparent bg-clip-text" : ""}
                        group-hover:bg-[0%] 
                        group-hover:text-transparent 
                        bg-clip-text`}
                    >
                      {item.label}
                    </span>
                    <span
                      className={`absolute bottom-[-3px] left-0 h-[1px] bg-[#33638b99] transition-all duration-300 ease-in-out 
                        ${activeLink === item.path ? "w-full" : "w-0"} 
                        group-hover:w-full`}
                    ></span>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
