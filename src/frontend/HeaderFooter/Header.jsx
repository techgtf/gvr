import React, { useEffect, useState, useCallback } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import { BASE_ROOT } from "../../../config";
import * as CONFIG from "../../../config";
import SideMenu from "./SideMenu";
import NavDropdown from "./NavDropdown";
import ScrollToTop from "../components/ScrollToTop";

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
  }, [location.pathname]); // ✅ Reset on route change
  

  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar);
    setDropdown(false); // Close dropdown when sidebar opens
  };

  const handleScroll = useCallback(
    debounce(() => {
      const currentScrollY = window.scrollY;
      setIsFixed(currentScrollY > 100);
    }, 50),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Open dropdown and set activeItem on hover
  const handleDropdownOpen = (item) => {
    if (item === "Residential") {
      setDropdown(true);
      setActiveItem(item);
      setHoveringNav(true); // ✅ Keep BG only for Residential
    }
  };

  // Close dropdown **only when clicking the close button**
  const handleDropdownClose = () => {
    setDropdown(false);
    setActiveItem(null);
    setHoveringNav(false);
  };

  const handleMouseEnterOtherItems = (item) => {
    if (item !== "Residential") {
      setHoveringNav(false); // ✅ Remove BG for Commercial & ESG
      setDropdown(false);
      setActiveItem(null);
    }
  };

  const navItems = [
    { name: "Residential", link: null, hasMenus: true },
    { name: "Commercial", link: "commercial-projects", hasMenus: false },
    { name: "ESG", link: "esg", hasMenus: false },
  ];

  const whiteLogo = `${CONFIG.ASSET_IMAGE_URL}frontend/images/logo.png`;
  const coloredLogo = `${CONFIG.ASSET_IMAGE_URL}frontend/images/logo-colored.png`;

  const logoOnePages = [`${BASE_ROOT}`, `${BASE_ROOT}sharanam`, `${BASE_ROOT}anandam`, `${BASE_ROOT}vilasa`, `${BASE_ROOT}gv-homes`];

  const getLogoSrc = () => {
    let logo = logoOnePages.includes(location.pathname) ? whiteLogo : coloredLogo;

    if (isFixed || activeItem) {
      return coloredLogo;
    }

    return logo;
  };



  return (
    <>
      <ScrollToTop />
      <header
        className={`app_header ${isFixed ? "fixed active" : "relative"} top-0 left-0 w-full !z-20  
  ${hoveringNav ? "bg-[#EFF5FA]" : ""}`} // ✅ Only active for Residential
      >

        <div className="max-w-[95%] m-auto">
          <div className="flex justify-between items-center">
            <Link to={`${BASE_ROOT}`}>
              <img className="w-[50%] sm:w-[70%] cursor-pointer" src={getLogoSrc()} alt="GVR Logo" />
            </Link>
            <nav className="right_nav flex justify-between items-center gap-10" role="navigation" aria-label="Main Navigation">
              <div className={`nav_items hidden sm:block uppercase ${isFixed ? "text-black" : "text-white"} ${activeItem ? "text-primary" : ""}`}>
                <ul className="flex justify-evenly gap-8 items-center" role="menu">
                  {navItems.map((item, i) => (
                    <li
                      key={i}
                      onMouseEnter={() => {
                        if (item.hasMenus) {
                          handleDropdownOpen(item.name);
                        } else {
                          handleMouseEnterOtherItems(item.name);
                        }
                      }}
                      className={`relative flex gap-3 items-center tracking-[3px] text-[13px] font-[300] 
    ${activeItem === item.name ? "bg-white px-3 text-primary" : ""}
    hover:bg-white hover:px-3 hover:text-primary transition-all duration-300`}
                      role="menuitem"
                    >

                      {item.link ? (
                        <Link to={`${BASE_ROOT}${item.link}`} className="tracking-[3px] uppercase text-[13px] font-[300]">
                          {item.name}
                        </Link>
                      ) : (
                        // ✅ Use <button> for dropdown triggers
                        <button
                          className="tracking-[3px] text-[13px] font-[300] uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                          onClick={() => handleDropdownOpen(item.name)}
                          aria-haspopup="true"
                          aria-expanded={dropdown && activeItem === item.name}
                        >
                          {item.name}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>

              </div>
              <button
                className="menuBtn flex justify-end items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500" aria-label="Open sidebar menu" aria-controls="sidebarMenu"
                onClick={handleToggleSidebar}
              >
                <img
                  className={`cursor-pointer ${isFixed ? "whiteIcon" : "coloredIcon"} w-[80%]`}
                  src={
                    isFixed || activeItem
                      ? `${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/menu1.png`
                      : `${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/menu.png`
                  }
                  alt="Menu Icon"
                />
              </button>
            </nav>
          </div>
        </div>
        {openSidebar && <SideMenu setOpenSidebar={setOpenSidebar} />}
        {dropdown && (
          <NavDropdown setDropdown={handleDropdownClose} setActiveItem={setActiveItem} />
        )}
      </header>
    </>
  );
}
