import React, { useContext, useEffect, useState } from "react";
import BlogCard from "./blogCard";
import { Link } from "react-router-dom";
import { BASE_ROOT, DATA_ASSET_URL } from "../../../../config";
import SearchField from "./SearchField";
import Divider from "./Divider";
import SlideIn from "../Animations/SlideIn";
import { LatestBlogContext } from "../../context/LatestBlogContext";
import axios from "axios";
import dayjs from "dayjs";
import Loader from "../../../common/Loader/loader";
import useFetchData from "../../apiHooks/useFetchData";
<<<<<<< HEAD


const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState("");
<<<<<<< HEAD
  const { latestBlog } = useContext(LatestBlogContext);
=======
=======

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState("");
>>>>>>> caf9b310f90eb14c1c810cf45623f463f545996f
   const { latestBlog } = useContext(LatestBlogContext);

   const { data: blogs, loading: logoLoading, error: logoError } = useFetchData("blogs");
   // Handle Loading and Errors
   if (logoLoading) return <Loader />;
   if (logoError) return <p className="text-red-500">Error loading Home Loan Logos: {logoError}</p>;


<<<<<<< HEAD
>>>>>>> 4ecab56 (live api)
=======
>>>>>>> caf9b310f90eb14c1c810cf45623f463f545996f

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-20 gap-12 xl:pt-[80px] lg:pb-[70px] mt-[0px] pb-[50px] py-4  px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="lg:col-span-8">
<<<<<<< HEAD
        <SearchField customClass={"block lg:hidden mt-[5px] mb-[20px]"} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBlogs.map((data, index) => (
            <div className={`col-span-1 ${index < 2 ? ' ' : 'md:mt-[45px] '}`} key={index}>
              <Link to={`${BASE_ROOT}blog/${data.id}`} state={{ blog: data }} >
                <BlogCard data={data} index={index} />
              </Link>
            </div>
          ))}
=======
        <SearchField
          customClass={"block lg:hidden mt-[5px] mb-[20px]"}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs?.length > 0 ? (
            blogs.map((data, index) => {
              // Get the index of the current blog
              const currentIndex = blogs.findIndex((blog) => blog.slug === data.slug);
              // Get the next slug (if exists)
              const nextSlug = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1].slug : null;

              return (
                <div
                  className={`col-span-1 ${index < 2 ? "" : "md:mt-[45px]"}`}
                  key={data.slug}
                >
                  <Link to={`${BASE_ROOT}blog/${data.slug}`} state={{ nextSlug }}>
                    <BlogCard data={data} index={index} />
                  </Link>
                </div>
              );
            })
          ) : (
            <p>No blogs available</p>
          )}
>>>>>>> caf9b310f90eb14c1c810cf45623f463f545996f
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs?.length > 0 ? (
            blogs.map((data, index) => {
              // Get the index of the current blog
              const currentIndex = blogs.findIndex((blog) => blog.slug === data.slug);
              // Get the next slug (if exists)
              const nextSlug = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1].slug : null;

              return (
                <div
                  className={`col-span-1 ${index < 2 ? "" : "md:mt-[45px]"}`}
                  key={data.slug}
                >
                  <Link to={`${BASE_ROOT}blog/${data.slug}`} state={{ nextSlug }}>
                    <BlogCard data={data} index={index} />
                  </Link>
                </div>
              );
            })
          ) : (
            <p>No blogs available</p>
          )}
        </div>
      </div>

      <div className="lg:col-span-4">
<<<<<<< HEAD
        <SearchField customClass={"hidden lg:block"} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
=======
        <SearchField
          customClass={"hidden lg:block"}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
>>>>>>> caf9b310f90eb14c1c810cf45623f463f545996f
        <h4 className="ListTitle mt-5 text-[14px] font-normal leading-[33px] tracking-[3px] flex items-center">
          Latest Blog
        </h4>
        <Divider className="md:mt-[30px] md:mb-[38px] mt-[20px] mb-[20px]" />

        <ul>
          {latestBlog.length > 0 ? (
<<<<<<< HEAD
            latestBlog.map((item, index) => (
              <li key={item.id} className="mt-5">
                <SlideIn duration={0} delay={0.5}>
=======
            latestBlog.map((item,index) => (
              <li key={item.id} className="mt-5">
                <SlideIn duration={1} delay={0.5}>
>>>>>>> caf9b310f90eb14c1c810cf45623f463f545996f
                  <Link to={`${BASE_ROOT}blog/${item.slug}`}>
                    <p className="cursor-pointer name  text-[#0061AB]  text-[14px] font-normal md:font-light leading-[20px] md:leading-[25px] lg:leading-[29px]">
                      {" "}
                      {item.heading?.length > 100
                        ? `${item.heading.slice(0, 90)}...`
                        : item.heading}{" "}
                    </p>
                    <div
<<<<<<< HEAD
                      className={`cursor-pointer type uppercase text-left text-[#2b2b2b94] mt-2 ${item?.length > 100
                        ? "lg:mt-[-18px] mt-[-20px]"
                        : "lg:mt-[5px]"
                        } tracking-[1px]`}
=======
                      className={`cursor-pointer type uppercase text-left text-[#2b2b2b94] mt-2 ${
                        item?.length > 100
                          ? "lg:mt-[-18px] mt-[-20px]"
                          : "lg:mt-[5px]"
                      } tracking-[1px]`}
>>>>>>> caf9b310f90eb14c1c810cf45623f463f545996f
                    >
                      {" "}
                      {dayjs(item.created_at).format("YYYY-MM-DD")}
                    </div>
                  </Link>
                  <Divider className="md:mt-[30px] md:mb-[38px] mt-[20px] mb-[20px]" />
                </SlideIn>
              </li>
            ))
          ) : (
            <li className="text-gray-500 mt-5">
              No blogs found.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BlogList;
