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

  const navItems = [
    {
      name:'Residential',
      link:null,
      hasMenus:true,
    },
    {
      name:'Commercial',
      link:'commercial-projects',
      hasMenus:false,
    },
    {
      name:'ESG',
      link:'esg',
      hasMenus:false,
    },
    
  ];

  const whiteLogo = `${CONFIG.ASSET_IMAGE_URL}frontend/images/logo.png`;
  const coloredLogo = `${CONFIG.ASSET_IMAGE_URL}frontend/images/logo-colored.png`;
  
  const logoOnePages = [`${BASE_ROOT}`, `${BASE_ROOT}microsite`, `${BASE_ROOT}anandam`, `${BASE_ROOT}vilasa`, `${BASE_ROOT}gv-homes`];
  
  const getLogoSrc = () => {
    // Set base logo based on the route
    let logo = logoOnePages.includes(location.pathname) ? whiteLogo : coloredLogo;
  
    // Override with colored logo if isFixed or activeItem is true
    if (isFixed || activeItem) {
      return coloredLogo;
    }
  
    return logo;
  };

  return (
    <>
      <ScrollToTop />
      <header
        className={`app_header ${
          isFixed ? "fixed active" : "relative"
        } top-0 left-0 ring-0 w-full !z-20 ${activeItem ? "bg-[#EFF5FA]" : ""}`}
      >
        <div className="max-w-[95%] m-auto">
          <div className="flex justify-between items-center">
            <Link to={`${BASE_ROOT}`}>
              <img
                className="w-[50%] sm:w-[70%] cursor-pointer"
                src={getLogoSrc()}
                alt="logo"
              />
            </Link>
            <div className="right_nav flex justify-between items-center gap-10">
              <div className={`nav_items hidden sm:block uppercase ${isFixed ? "text-black" : "text-white"}`}>
                <ul className="flex justify-evenly gap-8 items-center">
                  {navItems.map((item, i) => {
                    return item.hasMenus ? (
                      <li
                        key={i}
                        onClick={() => handleToggleDropdown(item.name)}
                        className={`flex cursor-pointer gap-3 items-center tracking-[3px] text-[13px] font-[300] ${activeItem || isFixed ? "text-primary" : ""} ${activeItem === item ? "bg-white px-3 text-primary" : ""}`}
                      >
                        {item.name} <BsChevronDown className="text-[14px] font-[300]" />
                      </li>
                    ) : (
                      <li
                        key={i}
                        className={`flex cursor-pointer gap-3 items-center tracking-[3px] text-[13px] font-[300] ${activeItem || isFixed ? "text-primary" : ""} ${activeItem === item ? "bg-white px-3 text-primary" : ""}`}
                      >
                        <Link className="gap-3 tracking-[3px] text-[13px] font-[300]" to={`${BASE_ROOT}${item.link}`}>{item.name}</Link>
                      </li>
                    )
                    
                  })}
                </ul>
              </div>
              <button
                className="menuBtn flex justify-end items-center"
                onClick={handleToggleSidebar}
              >
                <img
                  className={`cursor-pointer ${
                    isFixed ? "whiteIcon" : "coloredIcon"
                  } w-[80%]`}
                  src={
                    isFixed || activeItem
                    ? `${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/menu1.png`
                      : `${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/menu.png`
                  }
                  alt="menu"
                />
              </button>
            </div>
          </div>
        </div>
        {openSidebar && <SideMenu setOpenSidebar={setOpenSidebar} />}
        {dropdown && (
          <NavDropdown
            setDropdown={setDropdown}
            setActiveItem={setActiveItem}
          />
        )}
      </header>
    </>
  );
}
