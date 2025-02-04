import React, { useEffect, useState, useCallback } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import { BASE_ROOT } from "../../../config";
import * as CONFIG from "../../../config";
import { BsChevronDown } from "react-icons/bs";
import SideMenu from "./SideMenu";
import NavDropdown from "./NavDropdown";
import ScrollToTop from "../components/ScrollToTop";

// Debounce function to limit the number of scroll events
const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [activeItem, setActiveItem] = useState(null);
  const location = useLocation();

  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar);
    setDropdown(false); // close dropdown when sidebar is toggled
  };

  const handleToggleDropdown = (item) => {
    setDropdown(!dropdown);
    setActiveItem(item);
    setOpenSidebar(false); // close sidebar if dropdown is open
  };

  const handleScroll = useCallback(
    debounce(() => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setIsFixed(false);
      } else {
        setIsFixed(currentScrollY < prevScrollY && currentScrollY >= 100);
      }
      setPrevScrollY(currentScrollY);
    }, 50),
    [prevScrollY]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const navItems = ["residential", "commercial"];

  const getLogoSrc = () => {
    if (isFixed || activeItem) {
      return `${CONFIG.ASSET_IMAGE_URL}frontend/images/logo-colored.png`;
    }

    if (location.pathname === `${BASE_ROOT}microsite` || location.pathname === `${BASE_ROOT}`) {
      return `${CONFIG.ASSET_IMAGE_URL}frontend/images/logo.png`;
    }

    return `${CONFIG.ASSET_IMAGE_URL}frontend/images/logo-colored.png`;
  };

  return (
    <>
      <ScrollToTop />
      <header className={`app_header ${isFixed ? "fixed active" : "relative"} top-0 left-0 ring-0 w-full !z-20 ${activeItem ? "bg-[#EFF5FA]" : ""}`}>
        <div className="max-w-[95%] m-auto">
          <div className="flex justify-between items-center">
            <Link to={`${BASE_ROOT}`}>
              <img className="w-[50%] sm:w-[70%] cursor-pointer" src={getLogoSrc()} alt="logo" />
            </Link>
            <div className="right_nav flex justify-between items-center gap-10">
              <div className={`nav_items hidden sm:block uppercase ${isFixed || location.pathname === `${BASE_ROOT}microsite` || location.pathname === `${BASE_ROOT}` ? "text-white" : "text-black"}`}>
                <ul className="flex justify-evenly gap-8 items-center">
                  {navItems.map((item, i) => (
                    <li
                      key={i}
                      onClick={() => handleToggleDropdown(item)}
                      className={`flex cursor-pointer gap-3 items-center tracking-[3px] text-[13px] font-[300] ${activeItem || isFixed ? "text-primary" : ""} ${activeItem === item ? "bg-white px-3 text-primary" : ""}`}
                    >
                      {item} <BsChevronDown className="text-[14px] font-[300]" />
                    </li>
                  ))}
                </ul>
              </div>
              <button className="menuBtn flex justify-end items-center" onClick={handleToggleSidebar}>
                <img
                  className={`cursor-pointer ${isFixed ? "whiteIcon" : "coloredIcon"} w-[80%]`}
                  src={
                    isFixed || activeItem
                      ? `${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/menu1.png`
                      : location.pathname === `${BASE_ROOT}microsite` || location.pathname === `${BASE_ROOT}`
                      ? `${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/menu.png`
                      : `${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/menu1.png`
                  }
                  alt="menu"
                />
              </button>
            </div>
          </div>
        </div>
        {openSidebar && <SideMenu setOpenSidebar={setOpenSidebar} />}
        {dropdown && <NavDropdown setDropdown={setDropdown} setActiveItem={setActiveItem} />}
      </header>
    </>
  );
}
