
import React, { lazy, useEffect, useState } from 'react'
import * as CONFIG from "../../../config";
import Index from '../components/blogs/Index';
const HeroSectionAboutUs = lazy(() =>
  import("../components/aboutUs/HeroSectionAboutUs")
);
import { useLocation  } from "react-router-dom";
import { DATA_ASSET_URL } from "../../../config";
import { useParams } from "react-router-dom";
import axios from "axios";



const BlogDetails = () => {
  const location = useLocation();
  const blog = location.state?.blog;
  // const latestBlog = location.state?.latestBlog;
  if (!blog) return <h2>Blog not found!</h2>;
  const { slug } = useParams(); // Extract slug from URL
  const [blogDetails, setBlogDetails,] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${DATA_ASSET_URL}blogs/${slug}`) // Fetch blog details by slug
      .then((response) => {
        setBlogDetails(response.data.data); // Set the blog data
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  console.log(blogDetails,"blogDetails")
  return (
    <>
      <HeroSectionAboutUs
          img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/blogs/banner.webp`}
          heading={"BLOG DETAILS"}
          parentLink={"blogs"}
          parentTitle={"BLOGS"}
          extraClassesImg={"objectRight"}
          />
          <Index data={blog} />
      </>
  )
}

export default BlogDetails