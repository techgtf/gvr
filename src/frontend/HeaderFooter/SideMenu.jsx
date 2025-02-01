import gsap from 'gsap'
import React, { useEffect } from 'react'
import { SlClose } from 'react-icons/sl'
import { Link } from 'react-router-dom'

function SideMenu({ setOpenSidebar }) {

    useEffect(() => {
        gsap.fromTo(".sidemenu", 
            {
                x: 100,
                opacity: 0
            }, {
                x: 0,
                opacity: 0.9,
                duration: 1,
            });
    }, []);

    const handleClose = () => {
        gsap.to(".sidemenu", {
            x: 100,
            opacity: 0,
            duration: 1,
            onComplete: () => {
                setOpenSidebar(false);  
            }
        });
    };

    return (
        <>
            <div className="sidemenu bg-[#EFF5FA] text-black opacity-90 fixed top-0 right-0 w-[30%] h-screen px-10">
                <div className="flex flex-col relative items-center gap-5 justify-evenly h-full">
                    <div className="absolute top-10 right-3">
                        <SlClose onClick={handleClose} className="cursor-pointer text-3xl text-[#00000094]" />
                    </div>
                    <ul className="w-full flex flex-col gap-10">
                        <li>
                            <div className="title uppercase text-[16px] py-3 border-b border-[#00000040]">our profile</div>
                            <div className="title_links flex justify-evenly uppercase text-[#0e69ae] py-3 ">
                                <Link className="text-[14px] tracking-[2px]">about us </Link>/ 
                                <Link className="text-[14px] tracking-[2px]">csr</Link> / 
                                <Link className="text-[14px] tracking-[2px]">our verticals</Link>
                            </div>
                        </li>
                        <li>
                            <div className="title uppercase text-[16px] py-3 border-b border-[#00000040]">career</div>
                            <div className="title_links uppercase text-[#0e69ae] py-3 ">
                                <Link className="text-[14px] tracking-[2px]">all job openings</Link>
                            </div>
                        </li>
                        <li>
                            <div className="title uppercase text-[16px] py-3 border-b border-[#00000040]">find us</div>
                            <div className="title_links uppercase text-[#0e69ae] py-3 ">
                                <Link className="text-[14px] tracking-[2px]">contact us </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default SideMenu;
