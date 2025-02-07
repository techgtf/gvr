import React, { lazy }  from 'react'
import * as CONFIG from "../../../config";
import Index from '../components/blogs/Index';
import { Link } from 'react-router-dom';
import { BASE_ROOT } from '../../../config'
import BlogList from '../components/blogs/blogList';
const HeroSectionAboutUs = lazy(() =>
  import("../components/aboutUs/HeroSectionAboutUs")
);
const Blogs = () => {
  return (
    <>
    <HeroSectionAboutUs
        img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/blogs/banner.png`}
        heading={"BLOGS"}
        breadCrumb={"HOME - BLOGS"}
        extraClassesImg={"objectRight"}
        />
        <div className='bg-[#EFF5FA]'>
        <BlogList/>
        </div>
    </>
  )
}

export default Blogs