import React, { useContext } from 'react'
import InSightLinks from './inSightLinks'
import BlogCard from './BlogCard'
import WaterMarkHeading from "../waterMarkHeading"
import "./blog.css"
import FullBtn from '../fullBtn'
import { BASE_ROOT } from '../../../../config'
import { LatestBlogContext } from '../../context/LatestBlogContext'


export default function BlogSection({heading}) {
    const { latestBlog } = useContext(LatestBlogContext);
    

    return (
        <div className='blogSection 2xl:py-16 xl:py-8 py-[50px]'>
            <div className='max-w-[90%] m-auto'>
                <div className='flexbox relative flex flex-wrap justify-between'>
                    <div className='left-side lg:w-[42%] w-full lg:pr-[25px] lg:mb-0 mb-10'>
                        <WaterMarkHeading
                            // sectionHeading='Insights That Inspire, Innovate, and Elevate'
                            sectionHeading={heading}
                        />
                        <div className='links_div lg:mt-14 lg:mb-16 mt-7 mb-12'>
                            <InSightLinks blogData={latestBlog} />
                        </div>
                        <FullBtn link={`${BASE_ROOT}blogs`} text='explore more' />

                    </div>
                    <div className='right-side lg:w-[47%] w-full lg:pl-24'>
                        <h5 className='heading-right midlandfontmedium tracking-[4px]'>Latest Blog</h5>
                        <div className='card_div lg:mt-10 mt-8'>
                            <BlogCard blogData={latestBlog} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
