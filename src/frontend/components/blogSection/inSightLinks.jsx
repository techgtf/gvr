import React from 'react'
import { Link } from 'react-router-dom'
import SlideIn from "../Animations/SlideIn";
import dayjs from "dayjs";



export default function InSightLinks({blogData}) {
    return (
        <div className='blog_insight_box'>
            {blogData && (
                blogData.slice(1, 3).map((data, index) =>
                    <SlideIn key={index} duration={2} delay={0.5}>
                        <Link className='blog_insight_link_box cursor-pointer block lg:mt-10 mt-8' key={index} to={data.id}>
                            <p className='name text-[#0061AB] xl:text-[17px] text-[14px] font-light lg:leading-[29px] leading-[25px] cursor-pointer'>{data.heading}</p>
                            <div className='type mt-4 mb-2 uppercase tracking-[2px] lg:text-[16px] text-[#2b2b2b94] cursor-pointer'>{data.type}</div>
                            <div className='date uppercase border-b border-gray-300 text-right text-[12px] pb-1 tracking-[1px] text-[#2b2b2b94] cursor-pointer'>{dayjs(data.created_at).format("YYYY-MM-DD")}</div>
                        </Link>
                    </SlideIn>
                )
            )}

        </div>
    )
}
