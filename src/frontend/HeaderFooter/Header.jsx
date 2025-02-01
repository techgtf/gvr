import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import { BASE_ROOT } from "../../../config";
import * as CONFIG from "../../../config";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const location = useLocation();
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
      className={`app_header ${isFixed ? "fixed active" : "relative"
        } top-0 left-0 ring-0 w-full !z-10`}
    >
      <div className="max-w-[95%] m-auto">
        <div className="flex justify-between">
          <Link to={`${BASE_ROOT}`}>
            <img
              // {/* chnaged by bp  */}
              className={` ${isFixed || location.pathname === `${BASE_ROOT}about-us`
                  ? "logo-colored"
                  : "logo-white"
                } w-[50%]  sm:w-full`}
              src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/logo${isFixed || location.pathname === `${BASE_ROOT}about-us`
                  ? "-colored"
                  : ""
                }.png`}
              alt="logo"
            />
          </Link>
          {/* chnaged by bp  */}
          <button className="menuBtn flex justify-end items-center">
            <img
              className={` ${isFixed || location.pathname === `${BASE_ROOT}about-us`
                  ? "whiteIcon "
                  : "colredIcon"
                }   sm:w-full`}
              src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/menu${isFixed || location.pathname === `${BASE_ROOT}about-us`
                  ? "1"
                  : ""
                }.png `}
              alt="menu"
            />
          </button>
          
          {/* <button className="menuBtn flex justify-end items-center">
            <img
              className={`lg:h-[35px] ${isFixed || location.pathname === `${BASE_ROOT}about-us`
                  ? "whiteIcon w-[30%]"
                  : "colredIcon w-[80%]"
                }   sm:w-full`}
              src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/menu${isFixed || location.pathname === `${BASE_ROOT}about-us`
                  ? "1"
                  : ""
                }.png `}
              alt="menu"
            />
          </button> */}
        </div>
      </div>
    </header>
  );
}