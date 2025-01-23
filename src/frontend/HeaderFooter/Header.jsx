import React, { useEffect, useState } from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
import { BASE_ROOT } from '../../../config'
import * as CONFIG from '../../../config'

export default function Header() {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than or equal to 100vh
      if (window.scrollY >= window.innerHeight) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`app_header fixed top-0 left-0 ring-0 w-full ${isActive ? "active" : ""}`}>
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
