import React from 'react'
import { Link } from 'react-router-dom'
import { BASE_ROOT } from '../../../config'

export default function FooterLinks({
    toggelLinks
}) {
    return (
        <div className={`footerLinks text-left ${toggelLinks ? "active" : ""} bg-[#33638b]`}>
            <div className='max-w-[95%] m-auto pt-12 pb-10 grid md:flex'>
                <ul className='links_ul uppercase text-white w-full col-span-2 '>
                    <li>
                        <div className='heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5'>residential </div>
                        <Link className='block mb-4' to={`${BASE_ROOT}microsite`}>gv homes</Link>
                        <Link className='block mb-4' to={`${BASE_ROOT}microsite`}>SHARNAM</Link>
                        <Link className='block mb-4' to={`${BASE_ROOT}microsite`}>ANANDAM</Link>
                    </li>
                </ul>
                <ul className='links_ul uppercase text-white  w-full col-span-2'>
                    <li>
                        <div className='heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5'>commercial </div>
                        <Link className='block mb-4' to={`#`}>project name</Link>
                    </li>
                </ul>
                <ul className='links_ul uppercase text-white w-full col-span-2'>
                    <li>
                        <div className='heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5'>our Profile</div>
                        <Link className='block mb-4' to={`${BASE_ROOT}about-us`}>about us</Link>
                        <Link className='block mb-4' to={`#`}>csr</Link>
                        <Link className='block mb-4' to={`#`}>our verticals</Link>
                    </li>
                </ul>
                <ul className='links_ul uppercase text-white w-full col-span-2'>
                    <li>
                        <div className='heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5'>careers</div>
                        <Link className='block mb-4' to={`#`}>all job openings</Link>
                    </li>
                </ul>
                <ul className='links_ul uppercase  text-white w-full col-span-4'>
                    <li>
                        <div className='heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5'>buyer's guide</div>
                        <div className='flex gap-3'>
                            <div>
                            <Link className='block mb-4' to={`#`}>Blogs</Link>
                            <Link className='block mb-4' to={`#`}>Home Loans</Link>
                            <Link className='block mb-4' to={`#`}>Tax Benefits</Link>
                            <Link className='block mb-4' to={`#`}>Area Converter</Link>
                            <Link className='block mb-4' to={`#`}>Property Investment</Link>
                            </div>

                            <div>
                            <Link className='block mb-4' to={`#`}>Nri Corner</Link>
                            <Link className='block mb-4' to={`#`}>Nri Investors</Link>
                            <Link className='block mb-4' to={`#`}>Emi Calculator</Link>
                            <Link className='block mb-4' to={`#`}>FAQ</Link>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    )
}
