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
        setIsActive(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





  return (
    <header className={`app_header fixed top-0 left-0 ring-0 w-full ${isActive ? "active" : ""} ${aboutus ? '!bg-transparent !border-b-[0px]' : ''}`}>
      <div className='max-w-[90%] m-auto'>
        <div className='flex justify-between'>
          <Link to={`${BASE_ROOT}`}>

            {isActive ? (
              <img className='logo-colred lg:h-[70px]' src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/logo-colored.png`} alt="logo" />
            ) : (
              <img className='logo-white lg:h-[70px]' src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/logo.png`} alt="logo" />
            )}

          </Link>
          <button className='menuBtn'>
            {isActive ? (
              <img
                className='whiteIcon'
                alt='menu'
                src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/menu1.png`}
              />
            ) : (
              <img
                className='colredIcon'
                src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/menu.png`}
                alt='menu'
              />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
