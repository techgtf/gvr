import React from 'react'
import InSightLinks from './inSightLinks'
import BlogCard from './BlogCard'
import WaterMarkHeading from "../waterMarkHeading"
import "./blog.css"
import FullBtn from '../fullBtn'


export default function BlogSection() {
    
    return (
        <div className='blogSection'>
            <div className='max-w-[90%] m-auto'>
                <div className='flexbox flex flex-wrap justify-between'>
                    <div className='left-side lg:w-[40%] w-full lg:pr-[25px]'>
                        <WaterMarkHeading sectionHeading='Discover Insights' />
                        <InSightLinks />
                        <FullBtn link='bloglist' text='explore more' />
                    </div>
                    <div className='right-side lg:w-[48%] w-full lg:pl-20'>
                        <h5 className='heading-right midlandfontmedium tracking-[4px]'>Latest Blog</h5>
                        <BlogCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
