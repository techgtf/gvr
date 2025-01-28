import React from "react";
import Header from "../HeaderFooter/Header";
import * as CONFIG from '../../../config'
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";


const PageNotFound = () => {
    return (
        <>
            <div className="page_not_found micro_page bg-[#eff5fa]">
                {/* <Header /> */}
                <div className="flex justify-center items-center h-svh">
                    {/* <img src={CONFIG.IMAGE_URL + '404.png'} alt="page not found" className="img-fluid thumbnail" /> */}
                    <div className="">
                        <h1 className="midlandfontmedium text-5xl tracking-[25px] mb-12">404</h1>
                        <p className="capitalize text-3xl mb-8 tracking-[5px]">Page not found</p>
                        <p className="tracking-[2px]">The page you are looking for does not exist.</p>
                        {/* <Link className="link tracking-[2px] uppercase text-[16px]" to={CONFIG.BASE_ROOT}>Back to Home</Link> */}
                        <div className='fullBtn text-white w-fit flex items-center gap-3 mt-5'>
                            {/* <span className='line'></span> */}
                            <IoIosArrowRoundBack  className="text-3xl" />
                            <Link className='link tracking-[2px] uppercase text-[16px]' to={CONFIG.BASE_ROOT}>Back to Home</Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PageNotFound