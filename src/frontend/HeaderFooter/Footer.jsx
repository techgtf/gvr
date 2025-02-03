import React, { useEffect, useState } from 'react';
import "./footer.css"
import FooterLinks from './FooterLinks'
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import * as CONFIG from '../../../config'
import { BASE_ROOT } from '../../../config'
import { Link } from 'react-router-dom'
import { LiaAngleDownSolid } from "react-icons/lia";
import { LiaAngleUpSolid } from "react-icons/lia";
import FooterBottom from './FooterBottom';
import useScrollToTop from '../components/useScrollToTop';

gsap.registerPlugin(ScrollToPlugin);

export default function Footer() {
  const [toggelLinks, setToggelLinks] = useState(false);

  useEffect(() => {
    if (toggelLinks) {
      gsap.to(window, {
        scrollTo: { y: document.body.scrollHeight, autoKill: false },
        duration: 1,
        // ease: "power2.inOut",
      });
    }
  }, [toggelLinks]);

  return (
    <>
      <section id="mainfooter">
        <footer className='footermain bg-slate-700 text-center text-white lg:pt-10 pt-5 relative'>
          <button className='toggelButton absolute left-0 right-0 lg:top-[-28px] top-[-22px] flex w-fit m-auto justify-center bg-white text-black items-center rounded-full lg:p-[8px] p-[6px]'
            onClick={() => {
              setToggelLinks(!toggelLinks);
            }}>
            <span className='icon cursor-pointer lg:h-[35px] lg:w-[35px] h-[28px] w-[28px] border border-[#3f3f3f] rounded-full flex justify-center items-center'>
              {toggelLinks ? <LiaAngleUpSolid className='cursor-pointer lg:text-[14px] text-[12px]' /> : <LiaAngleDownSolid className='cursor-pointer lg:text-[14px] text-[12px]' />}
            </span>
          </button>
          <div className='footer_container max-w-[95%] m-auto'>
            <div className='block md:flex justify-between items-center lg:pb-8 pb-5'>
              <Link to={`${CONFIG.BASE_ROOT}`} className='lg:flex hidden justify-center md:block'>
                <img className='h-[65px]' src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/logo.png`} alt="logo" />
              </Link>
              <ul className='grid md:grid-cols-4 grid-cols-2 lg:justify-between justify-center lg:gap-4 gap-2 mt-4 md:mt-0 uppercase tracking-[1px]'>
                <li> <Link to={'#'} className='xl:text-[14px] text-[12px]'>our projects</Link> </li>
                <li> <Link to={'#'} className='xl:text-[14px] text-[12px]'>media centre</Link> </li>
                <li> <Link to={'#'} className='xl:text-[14px] text-[12px]'>Our Profile</Link> </li>
                <li> <Link
                  to={`${CONFIG.BASE_ROOT}contact-us`}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className='xl:text-[14px] text-[12px]'>contact</Link> </li>
              </ul>
            </div>
          </div>
          <FooterLinks toggelLinks={toggelLinks} />
        </footer>
        <FooterBottom />
      </section>
    </>
  )
}
