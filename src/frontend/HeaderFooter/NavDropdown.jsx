import React, { useEffect } from 'react'
import CommonHeading from '../components/commonHeading'
import { Link } from 'react-router-dom'
import { SlClose } from 'react-icons/sl'
import gsap from 'gsap';

function NavDropdown({setDropdown, setActiveItem}) {

    useEffect(() => {
        gsap.fromTo(".nav_dropdown", 
            {
                y: -100,
                opacity: 0
            }, {
                y: 0,
                opacity: 0.9,
                duration: 1,
            });
    }, []);

    const handleClose = () => {
        gsap.to(".nav_dropdown", {
            y: -100,
            opacity: 0,
            duration: 0.8,
            onComplete: () => {
                setDropdown(false);  
                setActiveItem(null);  // Reset active item when dropdown closes
            }
        });
    };

    return (
        <div className="nav_dropdown fixed top-[73px] left-0 h-[50vh] w-full bg-[#EFF5FA] text-black opacity-95 p-10">
            <div className="relative h-full">
                <ul className='flex justify-evenly items-center h-full'>
                    <li>
                        <Link> 
                            <CommonHeading HeadingText="SHARANAM" />
                            <p className="place uppercase pt-2 cursor-pointer">sector 107, noida</p>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <CommonHeading HeadingText="ANANDAM" />
                            <p className="place uppercase pt-2 cursor-pointer">sector 107, noida</p>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <CommonHeading HeadingText="GV HOMEZ" />
                            <p className="place uppercase pt-2 cursor-pointer">uday park, new delhi</p>
                        </Link>
                    </li>
                </ul>

                <div className="absolute bottom-0 left-[50%]">
                    <SlClose onClick={handleClose} className="cursor-pointer text-3xl text-[#00000094]" />
                </div>
            </div>
        </div>
    )
}

export default NavDropdown
