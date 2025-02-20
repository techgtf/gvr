import React from "react";
import { Link } from "react-router-dom";

export default function FullBtn({ link = "#", text = "Click" }) {
    const isExternal = link.startsWith("http");

    return isExternal ? (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="fullBtn text-white w-fit flex items-center gap-3 lg:py-[10px] lg:px-[25px] px-[18px] py-[7px] focus-visible:outline-none focus-visible:ring-0"
        >
            <span className="tracking-[2px] uppercase text-[12px]">{text}</span>
            <span className="line inline-block w-[16px] h-[2px] bg-white"></span>
        </a>

    ) : (
        <Link
            to={link}
            role="button"
            className="fullBtn text-white w-fit flex items-center gap-3 lg:py-[10px] lg:px-[25px] px-[18px] py-[7px] focus-visible:outline-none focus-visible:ring-0"
        >
            <span className="tracking-[2px] uppercase text-[12px]">{text}</span>
            <span className="line inline-block w-[16px] h-[2px] bg-white"></span>
        </Link>


    );
}
