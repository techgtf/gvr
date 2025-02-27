import React, { useEffect, useState, useCallback } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import { BASE_ROOT } from "../../../config";
import * as CONFIG from "../../../config";
import SideMenu from "./SideMenu";
import NavDropdown from "./NavDropdown";
import SearchGlobal from "../components/SearchGlobal";

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
  const [activeItem, setActiveItem] = useState(null);
  const [hoveringNav, setHoveringNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setHoveringNav(false);
    setDropdown(false);
    setActiveItem(null);
  }, [location.pathname]);

  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar);
    setDropdown(false);
  };

  const handleScroll = useCallback(
    debounce(() => {
      setIsFixed(window.scrollY > 100);
    }, 0),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleDropdownOpen = (item) => {
    if (item === "Residential") {
      setDropdown(true);
      setOpenSidebar(false); // Close sidebar when opening dropdown
      setActiveItem(item);
      setHoveringNav(true);
    }
  };


  const handleDropdownClose = () => {
    setDropdown(false);
    setActiveItem(null);
    setHoveringNav(false);
  };

  const handleMouseEnterOtherItems = (item) => {
    if (item !== "Residential") {
      setHoveringNav(false);
      setDropdown(false);
      setActiveItem(null);
    }
  };

  const navItems = [
    { name: "Residential", link: "residential", hasMenus: true },
    { name: "Commercial", link: "commercial-projects", hasMenus: false },
    { name: "ESG", link: "esg", hasMenus: false },
  ];

  const whiteLogo = `${CONFIG.ASSET_IMAGE_URL}frontend/images/logo.png`;
  const coloredLogo = `${CONFIG.ASSET_IMAGE_URL}frontend/images/logo-colored.png`;


  const logoOnePages = [
    `${BASE_ROOT}`,
    `${BASE_ROOT}sharanam`,
    `${BASE_ROOT}anandam`,
    `${BASE_ROOT}vilasa`,
    `${BASE_ROOT}casa-uday`,
  ];

  const getLogoSrc = () => {
    // let logo = logoOnePages.includes(location.pathname)
    //   ? whiteLogo
    //   : coloredLogo;

    let logo = whiteLogo;

    // Override with colored logo if isFixed or activeItem is true
    if (isFixed || activeItem) {
      return coloredLogo;
    }

    return logo;
  };

  useEffect(() => {
    let timeoutId;
  
    const handleScroll = () => {
      setDropdown(false);
      setHoveringNav(false);
  
      // Clear any existing timeout to prevent early resets
      clearTimeout(timeoutId);
  
      // Set a timeout to remove activeItem after 3 seconds
      timeoutId = setTimeout(() => {
        setActiveItem(null);
      }, 3000);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId); // Cleanup on unmount
    };
  }, []); // Empty dependency array runs only once on mount
  return (
    <>
      <header className={`app_header ${isFixed ? "fixed active" : "relative"} top-0 left-0 w-full !z-20 ${hoveringNav ? "bg-[#EFF5FA]" : ""}`}>
        <div className="max-w-[95%] m-auto">
          <div className="flex justify-between items-center">
            <Link
              to={`${BASE_ROOT}`}
              className="focus-visible:outline-transparent focus-visible:ring-0"
            >
              <img
                className="w-[50%] sm:w-[70%] cursor-pointer logo_img"
                src={getLogoSrc()}
                alt="Great Value Realty Logo"
              />
            </Link>

            <nav className="right_nav flex justify-between items-center gap-10" role="navigation" aria-label="Main Navigation">
              <div className={`nav_items hidden sm:block uppercase ${isFixed ? "text-black" : "text-white"} ${activeItem ? "text-primary" : ""}`}>
                <ul className="flex justify-evenly gap-8 items-center" role="menu">
                  {navItems.map((item, i) => (
                    <li
                      key={i}
                      onMouseEnter={() => {
                        item.hasMenus
                          ? handleDropdownOpen(item.name)
                          : handleMouseEnterOtherItems(item.name);
                      }}
                      className={`relative flex gap-3 items-center tracking-[2px] text-[13px] font-[300] 
      ${activeItem === item.name ? "font-bold px-3 text-primary" : ""}
       hover:text-white`}
                      role="menuitem"
                    >
                      {item.link ? (
                        <Link
                          to={`${BASE_ROOT}${item.link}`}
                          className="group relative inline-block cursor-pointer tracking-[3px] uppercase text-[13px] font-[300] 
          focus-visible:outline-none focus-visible:ring-0"
                        >
                          <span
                            className={`text-[13px] tracking-[3px] 
            bg-gradient-to-r from-[#33638b] via-[#33638b] hover:font-[600] to-black 
            bg-[length:200%_100%] bg-[-100%] 
            inline-block transition-all duration-300 ease-in-out 
            ${activeItem === item.name ? "bg-[0%] font-[600] text-transparent bg-clip-text" : ""}
            group-hover:bg-[0%] group-hover:text-transparent bg-clip-text`}
                          >
                            {item.name}
                          </span>
                          <span
                            className={`absolute bottom-[-3px] left-0 h-[1px] bg-[#33638b99] transition-all duration-300 ease-in-out 
            ${activeItem === item.name ? "w-full" : "w-0"} group-hover:w-full`}
                          ></span>
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleDropdownOpen(item.name)}
                          className="group relative inline-block cursor-pointer tracking-[3px] uppercase text-[13px] font-[300] 
          focus-visible:outline-none focus-visible:ring-0"
                          aria-haspopup="true"
                          aria-expanded={dropdown && activeItem === item.name}
                        >
                          <span
                            className={`text-[13px] tracking-[3px] 
            bg-gradient-to-r from-[#33638b] via-[#33638b] to-black 
            bg-[length:200%_100%] bg-[-100%] 
            inline-block transition-all duration-300 ease-in-out 
            ${activeItem === item.name ? "bg-[0%] font-[600] text-transparent bg-clip-text" : ""}
            group-hover:bg-[0%] group-hover:text-transparent bg-clip-text`}
                          >
                            {item.name}
                          </span>
                          <span
                            className={`absolute bottom-[-3px] left-0 h-[1px] bg-[#33638b99] transition-all duration-300 ease-in-out 
            ${activeItem === item.name ? "w-full" : "w-0"} group-hover:w-full`}
                          ></span>
                        </button>
                      )}
                    </li>
                  ))}
                </ul>

              </div>
              <div className="flex items-center lg:gap-x-5 gap-x-2">
                <SearchGlobal headerFixed={isFixed} hoveringNav={hoveringNav} />
                <button
                  className="menuBtn flex justify-end items-center focus-visible:outline-none focus-visible:ring-0"
                  aria-label="Open sidebar menu"
                  onClick={handleToggleSidebar}
                >

                  <img
                    className={`cursor-pointer ${isFixed ? "whiteIcon" : "coloredIcon"
                      } w-[80%]`}
                    src={
                      isFixed || activeItem
                        ? `${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/menu1.webp`
                        : `${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/menu.webp`
                    }
                    alt="menu icon for navigation options"
                  />
                </button>
              </div>
            </nav>
          </div>
        </div>
        {openSidebar && <SideMenu id="sidebarMenu" setOpenSidebar={setOpenSidebar} />}
        {dropdown && <NavDropdown setDropdown={handleDropdownClose} setActiveItem={setActiveItem} />}
      </header>
    </>
  );
}