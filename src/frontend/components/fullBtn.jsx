import React from 'react'
import { Link } from 'react-router-dom'

export default function FullBtn({
    link = "",
    text = ""
}) {
    return (
        <div className='fullBtn text-white w-fit flex items-center gap-3'>
            <Link className='link tracking-[2px] uppercase text-[16px]' to={link}>{text || 'click'}</Link>
            <span className='line'></span>
            {/* {children} */}
        </div>
    )
}
