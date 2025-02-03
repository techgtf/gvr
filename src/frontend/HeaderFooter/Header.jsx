import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import { BASE_ROOT } from "../../../config";
import * as CONFIG from "../../../config";
import { IoChevronDown } from "react-icons/io5";
import SideMenu from "./SideMenu";
import NavDropdown from "./NavDropdown";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const location = useLocation();

  // Toggle function to manage both menu states
  const handleToggleSidebar = () => {
    // If sidebar is open, close it and open the dropdown
    if (!openSidebar) {
      setOpenSidebar(true);
      setDropdown(false); // Close dropdown when sidebar opens
    } else {
      setOpenSidebar(false); // Close sidebar
    }
  };

  const handleToggleDropdown = () => {
    // If dropdown is open, close it and open the sidebar
    if (!dropdown) {
      setDropdown(true);
      setOpenSidebar(false); // Close sidebar when dropdown opens
    } else {
      setDropdown(false); // Close dropdown
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsFixed(false);
      } else {
        if (currentScrollY < prevScrollY && currentScrollY >= 100) {
          setIsFixed(true);
        } else if (currentScrollY > prevScrollY) {
          setIsFixed(false);
        }
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <header
      className={`app_header  ${isFixed ? "fixed active" : "relative"
        } top-0 left-0 ring-0 w-full !z-10`}
    >
      <div className="max-w-[95%] m-auto">
        <div className="flex justify-between items-center">
          <Link to={`${BASE_ROOT}`}>
            <img
              className={` ${isFixed || location.pathname === `${BASE_ROOT}about-us`
                ? "logo-colored"
                : "logo-white"
                } w-[50%]  sm:w-[70%]`}
              src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/logo${isFixed || location.pathname === `${BASE_ROOT}about-us`
                ? "-colored"
                : ""
                }.png`}
              alt="logo"
            />
          </Link>
          <div className="right_nav flex justify-between items-center gap-10">
            <div className={`nav_items hidden sm:block uppercase ${isFixed || location.pathname === `${BASE_ROOT}about-us` ? "text-black" : "text-white"}`}>
              <ul className="flex justify-evenly gap-10 items-center">
                <li onClick={handleToggleDropdown} className="flex gap-3 items-center tracking-[4px] text-[14px] font-[200]">residential <IoChevronDown className="text-xl" /></li>
                <li onClick={handleToggleDropdown} className="flex gap-3 items-center tracking-[4px] text-[14px] font-[200]">commercial <IoChevronDown className="text-xl" /></li>
                <li onClick={handleToggleDropdown} className="flex gap-3 items-center tracking-[4px] text-[14px] font-[200]">esg <IoChevronDown className="text-xl" /></li>
              </ul>
            </div>
            <button className="menuBtn flex justify-end items-center">
              <img
                className={` ${isFixed || location.pathname === `${BASE_ROOT}about-us`
                  ? "whiteIcon "
                  : "colredIcon"
                  }   w-[80%]`}
                src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/menu${isFixed || location.pathname === `${BASE_ROOT}about-us`
                  ? "1"
                  : ""
                  }.png `}
                alt="menu" onClick={handleToggleSidebar}
              />
            </button>
          </div>
        </div>
      </div>
      {openSidebar ? <SideMenu setOpenSidebar={setOpenSidebar} /> : ""}
      {dropdown ? <NavDropdown setDropdown={setDropdown} /> : ""}
    </header>
  );
}
