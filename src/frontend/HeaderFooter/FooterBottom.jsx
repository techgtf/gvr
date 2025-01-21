import React from 'react'
import { Link } from 'react-router-dom'
import * as CONFIG from '../../../config'

export default function FooterBottom() {
  return (
    <div className='footer_bottom text-center lg:py-5'>
      <div className='flex max-w-[95%] uppercase justify-between m-auto'>
        <Link className=' tracking-[1px] text-[#4e4e4e]' to={'#'}>Crafted by GTF Technologies</Link>
        <div className='centerd tracking-[1px] text-[#363636]'>
          Copyright © <Link to={""}>GreaT Value Realty</Link> 2024. All Rights Reserved
        </div>
        <div className='socLinks flex lg:gap-x-6'>
          <Link to={""}> <img className='h-8' src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/fb.png`}  alt="fb" /> </Link>
          <Link to={""}> <img className='h-8' src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/instagram.png`}  alt="fb" /> </Link>
          <Link to={""}> <img className='h-8' src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/twitter.png`}  alt="fb" /> </Link>
          <Link to={""}> <img className='h-8' src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/linkedin.png`}  alt="fb" /> </Link>
          <Link to={""}> <img className='h-8' src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/youtube.png`}  alt="fb" /> </Link>
        </div>
      </div>
    </div>
  )
}
