import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
import { BASE_ROOT } from '../../../config'
import * as CONFIG from '../../../config'
import { CgMenuRightAlt } from "react-icons/cg";

export default function Header() {
  return (
    <header className='app_header fixed top-0 left-0 ring-0 w-full'>
      {/* <div className='max-w-[98%] m-auto'>
        <div className='flex justify-between'>
          <Link to={`${BASE_ROOT}`}>
            <img className='lg:h-[70px]' src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/logo.png`} alt="logo" />
          </Link>
          <button className='menuBtn'>
            <CgMenuRightAlt className='text-4xl' />
          </button>
        </div>
      </div> */}
    </header>
  )
}
