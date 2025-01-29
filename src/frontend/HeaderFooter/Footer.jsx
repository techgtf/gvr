import React, { useState } from 'react';
import "./footer.css"
import FooterLinks from './FooterLinks'
import * as CONFIG from '../../../config'
import { Link } from 'react-router-dom'
import { LiaAngleDownSolid } from "react-icons/lia";
import { LiaAngleUpSolid } from "react-icons/lia";
import FooterBottom from './FooterBottom';


export default function Footer() {
  const [toggelLinks, setToggelLinks] = useState(false);
  return (
    <>
    <section id="mainfooter">
    <footer className='footermain bg-slate-700 text-center text-white py-8 relative'>
      <button className='toggelButton absolute left-0 right-0 top-[-28px] flex w-fit m-auto justify-center bg-white text-black items-center rounded-full p-[8px]'
        onClick={() => {
          setToggelLinks(!toggelLinks);
        }}>
        <span className='icon h-[35px] w-[35px] border border-[#3f3f3f] rounded-full flex justify-center items-center'>
          {toggelLinks ? <LiaAngleUpSolid className='text-[14px]' /> : <LiaAngleDownSolid className='text-[14px]' />}
        </span>
      </button>
      <div className='footer_container max-w-[95%] m-auto'>
        <div className='flexbox flex flex-wrap items-center justify-between'>
          <Link to={`${CONFIG.BASE_ROOT}`}>
            <img className='h-[65px]' src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/logo.png`} alt="logo" />
          </Link>
          <ul className='w-[37%] flex justify-between uppercase tracking-[1px]'>
            <li> <Link to={'#'} className='text-[14px]'>our projects</Link> </li>
            <li> <Link to={'#'} className='text-[14px]'>media centre</Link> </li>
            <li> <Link to={'#'} className='text-[14px]'>Our Profile</Link> </li>
            <li> <Link to={'#'} className='text-[14px]'>contact</Link> </li>
          </ul>
        </div>

        <FooterLinks toggelLinks={toggelLinks} />
      </div>
    </footer>
    <FooterBottom/>
    </section>
    </>
  )
}
