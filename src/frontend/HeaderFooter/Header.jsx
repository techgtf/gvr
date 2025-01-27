import React, { useEffect, useState } from 'react'
import "./header.css"
import { Link, useLocation } from 'react-router-dom'
import { BASE_ROOT } from '../../../config'
import * as CONFIG from '../../../config'

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const [aboutus, setAboutUsPage] = useState(false);
  useEffect(() => {
    // if (location.pathname === '/about-us') setIsActive(true); setAboutUsPage(true)
    const handleScroll = () => {
      if (window.scrollY >= 70) {
        setIsActive(true);
      } else {
        if (currentScrollY < prevScrollY && currentScrollY >= 100) {
          setIsFixed(true);
        } else if (currentScrollY > prevScrollY) {
          setIsFixed(false);
        }
      }

      setPrevScrollY(currentScrollY); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]); 





  return (
    <header className={`app_header fixed top-0 left-0 ring-0 w-full ${isActive ? "active" : ""} ${aboutus ? '!bg-transparent !border-b-[0px]' : ''}`}>
      <div className='max-w-[90%] m-auto'>
        <div className='flex justify-between'>
          <Link to={`${BASE_ROOT}`}>
            <img
              className={`lg:h-[80px] ${isFixed ? "logo-colored" : "logo-white"}  sm:w-full`} 
              src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/logo${isFixed ? '-colored' : ''}.png`}
              alt="logo"
            />
          </Link>
          <button className='menuBtn'>
            <img
              className={`lg:h-[40px] ${isFixed ? 'whiteIcon' : 'colredIcon'}`} 
              src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/menu${isFixed ? '1' : ''}.png`}
              alt='menu'
            />
          </button>
        </div>
      </div>
    </header>
  );
}
