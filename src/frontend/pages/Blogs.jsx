import React, { lazy } from 'react'
import * as CONFIG from "../../../config";
import BlogList from '../components/blogs/blogList';
import { Helmet } from 'react-helmet';
import useFetchData from '../apiHooks/useFetchData';
import Loader from '../../common/Loader/loader';
const HeroSectionAboutUs = lazy(() =>
  import("../components/aboutUs/HeroSectionAboutUs")
);
const Blogs = () => {
  const { data: pageData, loading: pageDataLoading, error: pageDataError } = useFetchData("page-sections", "3");


  // 🔹 Extract Banner Data Safely
  const extractPageData = (pageData) => {
      if (!pageData) return { banner: { image: "", heading: "Default Heading" }, overview: {} };
  
      const pageValues = Object.values(pageData); 
      return {
          banner: {
              image: `${CONFIG.VITE_APP_STORAGE}${pageValues[0]?.image || ""}`,
              heading: pageValues[0]?.heading || "Default Heading"
          }
      };
  };
  
  const { banner} = extractPageData(pageData);  
  // Handle Loading and Errors
  if (pageDataLoading) return <Loader />;
  if (pageDataError) return <p className="text-red-500">Property blog details Error loading Banner: {pageDataError}</p>;

  return (
    <>
      <Helmet>
        <title>Great Value Realty | Blogs</title>
      </Helmet>
      <HeroSectionAboutUs
        img={banner.image}
        heading={banner.heading}
        extraClassesImg={"objectRight"}
      />
      <div className='bg-[#EFF5FA]'>
        <BlogList />
      </div>
    </>
  )
}

export default Blogs