import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { SlClose } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { BASE_ROOT } from "../../../config";
import { AiOutlineClose } from "react-icons/ai";

function SideMenu({ setOpenSidebar }) {
  const sideMenuRef = useRef(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    gsap.fromTo(
      ".sidemenu",
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
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

  return (
    <div
      ref={sideMenuRef}
      className="sidemenu bg-[#EFF5FA] text-black opacity-90 fixed top-0 right-0 w-full sm:w-[28%] h-screen px-10"
    >
      <div className="absolute top-5 right-5">
        <AiOutlineClose  onClick={handleClose} className="text-2xl text-gray-500 cursor-pointer"/>
       
      </div>
      <div className="flex flex-col relative items-center gap-5 justify-evenly h-full">
        <ul className="w-full flex flex-col gap-10">
          <li>
            <div className="title text-[#0e69ae] uppercase text-[16px] py-3 border-b border-[#0000001a]">
              Our Projects
            </div>
            <div className="title_links flex gap-5 uppercase text-[#484747] py-3">
            <Link to={`${BASE_ROOT}residential`} onClick={(e) => {
                e.preventDefault();
                handleClose(() => navigate(`${BASE_ROOT}residential`));
              }}>
              <span
                className="text-[12px] tracking-[2px] cursor-pointer"
              >
                Residential
              </span>
              </Link>
              <span className="text-[#0e69ae]">/</span>
              <Link to={`${BASE_ROOT}commercial-projects`} onClick={(e) => {
                e.preventDefault();
                handleClose(() => navigate(`${BASE_ROOT}commercial-projects`));
              }}>
              <span
                className="text-[12px] tracking-[2px] cursor-pointer"
              >
                Commercial
              </span>
              </Link>
              </div>
          </li>

          <li>
            <div className="title uppercase text-[16px] text-[#0e69ae] py-3 border-b border-[#0000001a]">
              Our Profile
            </div>
            <div className="title_links flex gap-2 uppercase text-[#484747] py-3">
            <Link to={`${BASE_ROOT}about-us`} onClick={(e) => {
                e.preventDefault();
                handleClose(() => navigate(`${BASE_ROOT}about-us`));
              }}>
              <span
                onClick={() => handleLinkClick(`${BASE_ROOT}about-us`)}
                className="text-[12px] tracking-[2px] cursor-pointer"
              >
                About Us
              </span>
              </Link>
              <span className="text-[#0e69ae]">/</span>
              <Link to={`${BASE_ROOT}esg`} onClick={(e) => {
                e.preventDefault();
                handleClose(() => navigate(`${BASE_ROOT}esg`));
              }}>
              <span
                onClick={() => handleLinkClick(`${BASE_ROOT}esg`)}
                className="text-[12px] tracking-[2px] cursor-pointer"
              >
                Our ESG
              </span>
              </Link>
              <span className="text-[#0e69ae]">/</span>
              <Link to={`${BASE_ROOT}media`} onClick={(e) => {
                e.preventDefault();
                handleClose(() => navigate(`${BASE_ROOT}media`));
              }}>
              <span
                onClick={() => handleLinkClick(`${BASE_ROOT}media`)}
                className="text-[12px] tracking-[2px] cursor-pointer"
              >
                Media Centre
              </span>
              </Link>
            </div>
          </li>

          <li>
            <div className="title uppercase text-[#0e69ae] text-[16px] py-3 border-b border-[#0000001a]">
              Career
            </div>
            <div className="title_links uppercase text-[#484747]  py-3">
            <Link to={`${BASE_ROOT}career`} onClick={(e) => {
                e.preventDefault();
                handleClose(() => navigate(`${BASE_ROOT}career`));
              }}>
              <span
                onClick={() => handleLinkClick(`${BASE_ROOT}career`)}
                className="text-[12px] tracking-[2px] cursor-pointer"
              >
                All Job Openings
              </span>
              </Link>
            </div>
          </li>

          <li>
            <div className="title uppercase text-[16px] text-[#0e69ae] py-3 border-b border-[#0000001a]">
              Find Us
            </div>
            <div className="title_links uppercase text-[#484747] py-3">
            <Link to={`${BASE_ROOT}contact-us`} onClick={(e) => {
                e.preventDefault();
                handleClose(() => navigate(`${BASE_ROOT}contact-us`));
              }}>
              <span
                onClick={() => handleLinkClick(`${BASE_ROOT}contact-us`)}
                className="text-[12px] tracking-[2px] cursor-pointer"
              >
                Contact Us
              </span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
