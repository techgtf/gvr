import React, { lazy } from 'react'
import * as CONFIG from "../../../config";
import Index from '../components/blogs/Index';
const HeroSectionAboutUs = lazy(() =>
  import("../components/aboutUs/HeroSectionAboutUs")
);
import { useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet';


const BlogDetails = () => {
  const location = useLocation();
  const blog = location.state?.blog;
  const latestBlog = location.state?.latestBlog;

  if (!blog) return <h2>Blog not found!</h2>;
  return (
    <>
      <Helmet>
        <title>Great Value Realty | Blog</title>
      </Helmet>
      <HeroSectionAboutUs
        img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/blogs/banner.webp`}
        heading={"BLOG DETAILS"}
        parentLink={"blogs"}
        parentTitle={"BLOGS"}
        extraClassesImg={"objectRight"}
        alt={'Browsing a real estate'}
      />
      <Index data={blog} latestBlogData={latestBlog} />
    </>
  )
}

export default BlogDetails