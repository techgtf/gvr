import React from 'react'
import InSightLinks from './inSightLinks'
import BlogCard from './BlogCard'
import WaterMarkHeading from "../waterMarkHeading"
import "./blog.css"
import FullBtn from '../fullBtn'


export default function BlogSection() {

    return (
        <div className='blogSection sm:px-32 lg:px-0 py-5 md:py-14'>
            <div className='max-w-[90%] m-auto'>
                <div className='flexbox flex flex-wrap justify-between'>
                    <div className='left-side lg:w-[40%] w-full lg:pr-[25px]'>
                        <WaterMarkHeading sectionHeading='Discover Insights' />
                        <div className='links_div lg:mt-8 mb-16'>
                            <InSightLinks />
                        </div>
                        <FullBtn link='#' text='explore more' />

                    </div>
                    <div className='right-side lg:w-[47%] w-full lg:pl-24'>
                        <h5 className='heading-right midlandfontmedium tracking-[4px]'>Latest Blog</h5>
                        <div className='card_div lg:mt-10 mt-8'>
                            <BlogCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
