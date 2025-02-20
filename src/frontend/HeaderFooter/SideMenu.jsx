import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_ROOT } from "../../../config";
import { AiOutlineClose } from "react-icons/ai";
import * as CONFIG from "../../../config";

function SideMenu({ setOpenSidebar }) {
  const sideMenuRef = useRef(null);
  const navigate = useNavigate();

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
      className="sidemenu bg-[#EFF5FA] text-black opacity-95 fixed top-0 right-0 w-full sm:w-[28%] h-screen px-5 md:px-10"
    >

      <Link
        to={`${CONFIG.BASE_ROOT}`}
        className="flex md:hidden  absolute top-[20px] justify-center md:block focus-visible:outline-none focus-visible:ring-0"
      >
        <img
          className="h-[50px]"
          src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/logo-colored.png`}
          alt="Great Value Realty Logo"
        />
      </Link>
      <div className="absolute top-7 right-5">
        <AiOutlineClose onClick={handleClose} className="text-2xl text-gray-500 cursor-pointer" />

      </div>
      <div className="flex flex-col relative  items-center gap-1 justify-evenly h-full">
        <ul className="w-full flex flex-col items-center gap-4">
          <li>          
            <div className="title_links uppercase text-[#484747] py-2">
              <div className="py-2">
              <Link to={`${BASE_ROOT}residential`} onClick={(e) => {
                e.preventDefault();
                handleClose(() => navigate(`${BASE_ROOT}residential`));
              }}>
                <span
                  className="text-[8px] midlandfontmedium text-primary tracking-[4px] cursor-pointer"
                >
                  Residential
                </span>
              </Link>
              </div>              
            </div>
          </li>
          <li>          
            <div className="title_links uppercase text-[#484747] py-2">
              <div className="py-2">
              <Link to={`${BASE_ROOT}commercial-projects`} onClick={(e) => {
                e.preventDefault();
                handleClose(() => navigate(`${BASE_ROOT}commercial-projects`));
              }}>
                <span
                  className="text-[8px] midlandfontmedium text-primary tracking-[4px] cursor-pointer"
                >
                  commercial
                </span>
              </Link>
              </div>              
            </div>
          </li>
          <li>          
            <div className="title_links uppercase text-[#484747] py-2">
              <div className="py-2">
              <Link to={`${BASE_ROOT}about-us`} onClick={(e) => {
                e.preventDefault();
                handleClose(() => navigate(`${BASE_ROOT}about-us`));
              }}>
                <span
                  className="text-[8px] midlandfontmedium text-primary tracking-[4px] cursor-pointer"
                >
                  about us
                </span>
              </Link>
              </div>              
            </div>
          </li>
          <li>          
            <div className="title_links uppercase text-[#484747] py-2">
              <div className="py-2">
              <Link to={`${BASE_ROOT}media`} onClick={(e) => {
                e.preventDefault();
                handleClose(() => navigate(`${BASE_ROOT}media`));
              }}>
                <span
                  className="text-[8px] midlandfontmedium text-primary tracking-[4px] cursor-pointer"
                >
                  media centre
                </span>
              </Link>
              </div>              
            </div>
          </li>
          <li>          
            <div className="title_links uppercase text-[#484747] py-2">
              <div className="py-2">
              <Link to={`${BASE_ROOT}blogs`} onClick={(e) => {
                e.preventDefault();
                handleClose(() => navigate(`${BASE_ROOT}blogs`));
              }}>
                <span
                  className="text-[8px] midlandfontmedium text-primary tracking-[4px] cursor-pointer"
                >
                  blogs
                </span>
              </Link>
              </div>              
            </div>
          </li>
          <li>          
            <div className="title_links uppercase text-[#484747] py-2">
              <div className="py-2">
              <Link to={`${BASE_ROOT}career`} onClick={(e) => {
                e.preventDefault();
                handleClose(() => navigate(`${BASE_ROOT}career`));
              }}>
                <span
                  className="text-[8px] midlandfontmedium text-primary tracking-[4px] cursor-pointer"
                >
                  job openings
                </span>
              </Link>
              </div>              
            </div>
          </li>
          <li>          
            <div className="title_links uppercase text-[#484747] py-2">
              <div className="py-2">
              <Link to={`${BASE_ROOT}contact-us`} onClick={(e) => {
                e.preventDefault();
                handleClose(() => navigate(`${BASE_ROOT}contact-us`));
              }}>
                <span
                  className="text-[8px] midlandfontmedium text-primary tracking-[4px] cursor-pointer"
                >
                  contact us
                </span>
              </Link>
              </div>              
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
