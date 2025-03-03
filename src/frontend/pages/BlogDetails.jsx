
import React, { lazy, useEffect, useState } from 'react'
import * as CONFIG from "../../../config";
import Index from '../components/blogs/Index';
const HeroSectionAboutUs = lazy(() =>
  import("../components/aboutUs/HeroSectionAboutUs")
);
import { DATA_ASSET_URL } from "../../../config";
import { useParams } from "react-router-dom";
import axios from "axios";

import { useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet';
import useFetchData from '../apiHooks/useFetchData';
import Loader from '../../common/Loader/loader';


const BlogDetails = () => {
  const { slug } = useParams(); // Extract slug from URL
  const [blog, setBlog,] = useState(null);
  const [nextBlog, setNextBlog,] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // blog data from slug start
  // blog data from slug start
  useEffect(() => {
    axios
      .get(`${DATA_ASSET_URL}blogs/${slug}`) 
      .then((response) => {
        setBlog(response.data.data); // Set the blog data
        setNextBlog(response.data.next);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);




  // blog data from slug start
  // blog data from slug start
  

  //  page banner api start 
  //  page banner api start 
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
  //  page banner api end 
  //  page banner api end 


  // error start
  if (loading) return <p>blog details Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  // Handle Loading and Errors
  if (pageDataLoading) return <Loader />;
  if (pageDataError) return <p className="text-red-500">Property blog details Error loading Banner: {pageDataError}</p>;
  
  return (
    <>
      <Helmet>
        <title>Great Value Realty | Blog</title>
      </Helmet>
      <HeroSectionAboutUs
          img={banner.image}
          heading={banner.heading}
          parentLink={"blogs"}
          parentTitle={"BLOGS"}
          extraClassesImg={"objectRight"}
          />
          <Index data={blog} nextBlog={nextBlog}/>
      </>
  )
}

export default BlogDetails