import React, { useEffect, useRef } from 'react';
import CommonHeading from '../components/commonHeading';
import { Link, useNavigate } from 'react-router-dom';
import { SlClose } from 'react-icons/sl';
import gsap from 'gsap';
import { BASE_ROOT } from '../../../config';

function NavDropdown({ setDropdown, setActiveItem }) {
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        gsap.fromTo(
            ".nav_dropdown", 
            {
                y: -100,
                opacity: 0
            }, 
            {
                y: 0,
                opacity: 0.9,
                duration: 1,
            }
        );

        const handleClick = () => {
            handleClose();
        };

        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, []);

    const handleClose = () => {
        gsap.to(".nav_dropdown", {
            y: -100,
            opacity: 0,
            duration: 0.8,
            onComplete: () => {
                setDropdown(false);  
                setActiveItem(null);  
            }
        });
    };

    // Handler for links to handle closing dropdown first
    const handleLinkClick = (path) => {
        // Close the dropdown first
        gsap.to(".nav_dropdown", {
            y: -100,
            opacity: 0,
            duration: 0.8,
            onComplete: () => {
                setDropdown(false);
                setActiveItem(null);
                // After closing dropdown, navigate
                setTimeout(() => {
                    navigate(path); // Use native navigation, or use `navigate` if necessary
                }, 800);  // Match the duration of the close animation
            }
        });
    };

    return (
        <div ref={dropdownRef} className="nav_dropdown fixed top-[73px] left-0 h-[50vh] w-full bg-[#EFF5FA] text-black opacity-95 p-10">
            <div className="relative h-full">
                <ul className='flex justify-evenly items-center h-full'>
                    <li>
                        <span
                            onClick={() => handleLinkClick(`${BASE_ROOT}microsite`)}
                            className="cursor-pointer"
                        >
                            <CommonHeading HeadingText="SHARANAM" />
                            <p className="place uppercase pt-2 cursor-pointer">sector 107, noida</p>
                        </span>
                    </li>
                    <li>
                        <span
                            onClick={() => handleLinkClick(`${BASE_ROOT}microsite`)}
                            className="cursor-pointer"
                        >
                            <CommonHeading HeadingText="ANANDAM" />
                            <p className="place uppercase pt-2 cursor-pointer">sector 107, noida</p>
                        </span>
                    </li>
                    <li>
                        <span
                            onClick={() => handleLinkClick(`${BASE_ROOT}microsite`)}
                            className="cursor-pointer"
                        >
                            <CommonHeading HeadingText="GV HOMEZ" />
                            <p className="place uppercase pt-2 cursor-pointer">uday park, new delhi</p>
                        </span>
                    </li>
                    <li>
                        <span
                            onClick={() => handleLinkClick(`${BASE_ROOT}microsite`)}
                            className="cursor-pointer"
                        >
                            <CommonHeading HeadingText="Vilasa" />
                            <p className="place uppercase pt-2 cursor-pointer">uday park, new delhi</p>
                        </span>
                    </li>
                </ul>

                <div className="absolute bottom-0 left-[50%]">
                    <SlClose onClick={handleClose} className="cursor-pointer text-3xl text-[#00000094]" />
                </div>
            </div>
        </div>
    );
}

export default NavDropdown;
