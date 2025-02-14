import React from "react";
import { Link } from "react-router-dom";

<<<<<<< HEAD
export default function FullBtn({ link = "#", text = "Click" }) {
    const isExternal = link.startsWith("http");

    return isExternal ? (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="fullBtn text-white w-fit flex items-center gap-3 lg:py-[10px] lg:px-[25px] px-[18px] py-[7px]"
        >
            <span className="tracking-[2px] uppercase text-[12px]">{text}</span>
            <span className="line inline-block w-[16px] h-[2px] bg-white"></span>
        </a>
    ) : (
        <Link
            to={link}
            role="button"
            className="fullBtn text-white w-fit flex items-center gap-3 lg:py-[10px] lg:px-[25px] px-[18px] py-[7px]"
        >
            <span className="tracking-[2px] uppercase text-[12px]">{text}</span>
            <span className="line inline-block w-[16px] h-[2px] bg-white"></span>
        </Link>
    );
}
=======
export default function FullBtn({
    link = "",
    text = "",
    LinkName = Link, // default    
}) {
    const isExternal = LinkName === "a"
    return (
        <div className='fullBtn text-white w-fit flex items-center gap-3 lg:py-[10px] lg:px-[25px] px-[18px] py-[7px]'>
            {
                isExternal ?
                    (<a
                        className="link tracking-[2px] uppercase text-[12px]"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    > {text || "Click"}</a>) : (
                        <Link className='link tracking-[2px] uppercase text-[12px]' to={link}>{text || 'click'}</Link>
                    )
            }
            <span className='line inline-block w-[16px] h-[2px] bg-white'></span>
        </div>
    )
}
>>>>>>> origin/bp
