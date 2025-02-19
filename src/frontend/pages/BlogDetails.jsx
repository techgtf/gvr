
import React, { lazy, useEffect, useState } from 'react'
import * as CONFIG from "../../../config";
import Index from '../components/blogs/Index';
const HeroSectionAboutUs = lazy(() =>
  import("../components/aboutUs/HeroSectionAboutUs")
);
import { DATA_ASSET_URL } from "../../../config";
import { useParams } from "react-router-dom";
import axios from "axios";



const BlogDetails = () => {
  const { slug } = useParams(); // Extract slug from URL
  const [blog, setBlog,] = useState(null);
  const [nextBlog, setNextBlog,] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <HeroSectionAboutUs
          img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/blogs/banner.webp`}
          heading={"BLOG DETAILS"}
          parentLink={"blogs"}
          parentTitle={"BLOGS"}
          extraClassesImg={"objectRight"}
          />
          <Index data={blog} nextBlog={nextBlog}/>
      </>
  )
}

export default BlogDetails