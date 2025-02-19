import React, { lazy } from 'react'
import * as CONFIG from "../../../config";
import BlogList from '../components/blogs/blogList';
import { Helmet } from 'react-helmet';
const HeroSectionAboutUs = lazy(() =>
  import("../components/aboutUs/HeroSectionAboutUs")
);
const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Great Value Realty | Blogs</title>
      </Helmet>
      <HeroSectionAboutUs
        img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/blogs/banner.webp`}
        heading={"BLOGS"}
        extraClassesImg={"objectRight"}
      />
      <div className='bg-[#EFF5FA]'>
        <BlogList />
      </div>
    </>
  )
}

export default Blogs