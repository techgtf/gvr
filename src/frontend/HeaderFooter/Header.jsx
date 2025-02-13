import React, { useEffect, useState, useCallback } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import { BASE_ROOT } from "../../../config";
import * as CONFIG from "../../../config";
import SideMenu from "./SideMenu";
import NavDropdown from "./NavDropdown";

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
  const location = useLocation();

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
    setDropdown(true);
    setActiveItem(item);
  };

  // Close dropdown **only when clicking the close button**
  const handleDropdownClose = () => {
    setDropdown(false);
    setActiveItem(null);
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
  
    // Override with colored logo if isFixed or activeItem is true
    if (isFixed || activeItem) {  
      return coloredLogo;
    }
  
    return logo;
  };

  return (
    <>      
      <header
        className={`app_header ${isFixed ? "fixed active" : "relative"} top-0 left-0 w-full !z-20  
          ${activeItem ? "bg-[#EFF5FA]" : ""}`} // ✅ Keeps background active until dropdown closes
      >
        <div className="max-w-[95%] m-auto">
          <div className="flex justify-between items-center">
            <Link to={`${BASE_ROOT}`}>
              <img className="w-[50%] sm:w-[70%] cursor-pointer" src={getLogoSrc()} alt="logo" />
            </Link>
            <div className="right_nav flex justify-between items-center gap-10">
              <div className={`nav_items hidden sm:block uppercase ${isFixed ? "text-black" : "text-white"} ${activeItem ? "text-primary" : ""}`}>  
                <ul className="flex justify-evenly gap-8 items-center">
                  {navItems.map((item, i) => (
                    <li
                      key={i}
                      onMouseEnter={() => item.hasMenus && handleDropdownOpen(item.name)}
                      className={`relative flex cursor-pointer gap-3 items-center tracking-[3px] text-[13px] font-[300] 
                        ${activeItem === item.name ? "bg-white px-3 text-primary" : ""}
                        hover:bg-white hover:px-3 hover:text-primary transition-all duration-300`}
                    >
                      {item.link ? (
                        <Link to={`${BASE_ROOT}${item.link}`} className="tracking-[3px] text-[13px] font-[300]">
                          {item.name}
                        </Link>
                      ) : (
                        item.name
                      )}
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
          <NavDropdown setDropdown={handleDropdownClose} setActiveItem={setActiveItem} />
        )}
      </header>
    </>
  );
}
