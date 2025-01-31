import React from 'react'
import { Link } from 'react-router-dom'
import { BASE_ROOT } from '../../../config'

export default function FooterLinks({
    toggelLinks
}) {
    return (
        <div className={`footerLinks text-left ${toggelLinks ? "active" : ""} bg-[#33638b]`}>
            <div className='max-w-[95%] m-auto pt-12 pb-10 flex flex-wrap justify-between'>
                <ul className='links_ul uppercase text-white xl:w-[16%] w-full'>
                    <li>
                        <div className='heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5'>residential </div>
                        <Link className='block mb-4' to={`microsite`}>gv homes</Link>
                        <Link className='block mb-4' to={`microsite`}>SHARNAM</Link>
                        <Link className='block mb-4' to={`microsite`}>ANANDAM</Link>
                    </li>
                </ul>
                <ul className='links_ul uppercase text-white xl:w-[16%] w-full'>
                    <li>
                        <div className='heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5'>commercial </div>
                        <Link className='block mb-4' to={`#`}>project name</Link>
                    </li>
                </ul>
                <ul className='links_ul uppercase text-white xl:w-[16%] w-full'>
                    <li>
                        <div className='heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5'>our Profile</div>
                        <Link className='block mb-4' to={`${BASE_ROOT}about-us`}>about us</Link>
                        <Link className='block mb-4' to={`#`}>csr</Link>
                        <Link className='block mb-4' to={`#`}>our verticals</Link>
                    </li>
                </ul>
                <ul className='links_ul uppercase text-white xl:w-[16%] w-full'>
                    <li>
                        <div className='heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5'>careers</div>
                        <Link className='block mb-4' to={`#`}>all job openings</Link>
                    </li>
                </ul>
                <ul className='links_ul uppercase text-white xl:w-[32%] w-full'>
                    <li>
                        <div className='heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5'>buyer's guide</div>
                        <div className='flex_div_buyrs flex flex-wrap justify-between'>
                            <Link className='block mb-4 w-[50%]' to={`#`}>Blogs</Link>
                            <Link className='block mb-4 w-[50%]' to={`#`}>Home Loans</Link>
                            <Link className='block mb-4 w-[50%]' to={`#`}>Tax Benefits</Link>
                            <Link className='block mb-4 w-[50%]' to={`#`}>Area Converter</Link>
                            <Link className='block mb-4 w-[50%]' to={`#`}>Property Investment</Link>
                            <Link className='block mb-4 w-[50%]' to={`#`}>Nri Corner</Link>
                            <Link className='block mb-4 w-[50%]' to={`#`}>Nri Investors</Link>
                            <Link className='block mb-4 w-[50%]' to={`#`}>Emi Calculator</Link>
                            <Link className='block mb-4 w-[50%]' to={`#`}>FAQ</Link>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    )
}
