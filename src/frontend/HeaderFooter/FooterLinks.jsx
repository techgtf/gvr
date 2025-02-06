import React from 'react'
import { Link } from 'react-router-dom'
import { BASE_ROOT } from '../../../config'
import useScrollToTop from '../components/useScrollToTop';

export default function FooterLinks({
    toggelLinks
}) {
    const scrollToTop = useScrollToTop();
    return (
        <div className={`footerLinks text-left ${toggelLinks ? "active" : ""} bg-[#33638b]`}>
            <div className='max-w-[95%] m-auto pt-12 pb-10 grid md:flex'>
                <ul className='links_ul uppercase text-white w-full col-span-2 '>
                    <li>
                        <div className='heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5'>residential </div>
                        <Link
                            onClick={scrollToTop}
                            className='block mb-4' to={`${BASE_ROOT}microsite`}>gv homes</Link>
                        <Link
                            onClick={scrollToTop}
                            className='block mb-4' to={`${BASE_ROOT}microsite`}>SHARNAM</Link>
                        <Link
                            onClick={scrollToTop}
                            className='block mb-4' to={`${BASE_ROOT}microsite`}>ANANDAM</Link>
                    </li>
                </ul>
                <ul className='links_ul uppercase text-white  w-full col-span-2'>
                    <li>
                        <div className='heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5'>commercial </div>
                        <Link
                            onClick={scrollToTop}
                            className='block mb-4' to={`#`}>project name</Link>
                    </li>
                </ul>
                <ul className='links_ul uppercase text-white w-full col-span-2'>
                    <li>
                        <div className='heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5'>our Profile</div>
                        <Link
                            onClick={scrollToTop}
                            className='block mb-4'
                            to={`${BASE_ROOT}about-us`}>about us</Link>
                        <Link
                            onClick={scrollToTop}
                            className='block mb-4'
                            to={`${BASE_ROOT}csr`}>csr</Link>
                        <Link
                            onClick={scrollToTop}
                            className='block mb-4'
                            to={`#`}>our verticals</Link>
                    </li>
                </ul>
                <ul className='links_ul uppercase text-white w-full col-span-2'>
                    <li>
                        <div className='heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5'>careers</div>
                        <Link
                            onClick={scrollToTop}
                            className='block mb-4'
                            to={`#`}>all job openings</Link>
                    </li>
                </ul>
                <ul className='links_ul uppercase  text-white w-full col-span-4'>
                    <li>
                        <div className='heading-div midlandfontmedium text-[8px] tracking-[4px] mb-5'>buyer's guide</div>
                        <div className='flex gap-3'>
                            <div>
                                <Link
                                    onClick={scrollToTop}
                                    className='block mb-4'
                                    to={`${BASE_ROOT}blogs`}>Blogs</Link>
                                <Link
                                    onClick={scrollToTop}
                                    className='block mb-4'
                                    to={`#`}>Home Loans</Link>
                                <Link
                                    onClick={scrollToTop}
                                    className='block mb-4'
                                    to={`#`}>Tax Benefits</Link>
                                <Link
                                    onClick={scrollToTop}
                                    className='block mb-4'
                                    to={`#`}>Area Converter</Link>
                                <Link
                                    onClick={scrollToTop}
                                    className='block mb-4'
                                    to={`#`}>Property Investment</Link>
                            </div>

                            <div>
                                <Link
                                    onClick={scrollToTop}
                                    className='block mb-4' to={`#`}>Nri Corner</Link>
                                <Link
                                    onClick={scrollToTop}
                                    className='block mb-4'
                                    to={`#`}>Nri Investors</Link>
                                <Link
                                    onClick={scrollToTop}
                                    className='block mb-4'
                                    to={`${BASE_ROOT}emi-calculator`}>Emi Calculator</Link>
                                <Link
                                    onClick={scrollToTop}
                                    className='block mb-4'
                                    to={`#`}>FAQ</Link>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    )
}
