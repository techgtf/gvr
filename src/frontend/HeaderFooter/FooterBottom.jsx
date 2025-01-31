import React from 'react'
import { Link } from 'react-router-dom'
import * as CONFIG from '../../../config'

export default function FooterBottom() {
  return (
    <div className='footer_bottom text-center lg:py-5 py-2'>
      <div className='flex flex-wrap max-w-[95%] uppercase lg:justify-between justify-center m-auto'>
        <Link className='xl:text-[12px] text-[10px] tracking-[1px] text-[#a3a3a3]' to={'#'}>Crafted by GTF Technologies</Link>
        <div className='xl:text-[12px] text-[10px] centerd tracking-[1px] text-[#8f8f8f]'>
          Copyright © <Link className='xl:text-[12px] text-[10px] text-[#33638B]' to={"#"}>GreaT Value Realty</Link> 2024. All Rights Reserved
        </div>
        <div className='socLinks flex lg:gap-x-6 lg:gap-0 gap-4 lg:pt-0 pt-3'>
          <Link to={""}> <img className='lg:h-7 h-5' src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/fb.png`}  alt="fb" /> </Link>
          <Link to={""}> <img className='lg:h-7 h-5' src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/instagram.png`}  alt="fb" /> </Link>
          <Link to={""}> <img className='lg:h-7 h-5' src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/twitter.png`}  alt="fb" /> </Link>
          <Link to={""}> <img className='lg:h-7 h-5' src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/linkedin.png`}  alt="fb" /> </Link>
          <Link to={""}> <img className='lg:h-7 h-5' src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/youtube.png`}  alt="fb" /> </Link>
        </div>
      </div>
    </div>
  )
}
