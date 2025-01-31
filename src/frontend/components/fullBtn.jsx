import React from 'react'
import { Link } from 'react-router-dom'

export default function FullBtn({
    link = "",
    text = ""
}) {
    return (
        <div className='fullBtn text-white w-fit flex items-center gap-3 lg:py-[10px] lg:px-[25px] px-[18px] py-[7px]'>
            <Link className='link tracking-[2px] uppercase text-[12px]' to={link}>{text || 'click'}</Link>
            <span className='line inline-block w-[16px] h-[2px] bg-white'></span>
            {/* {children} */}
        </div>
    )
}