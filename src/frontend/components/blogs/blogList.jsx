import React, { useState } from "react";
import BlogCard from "./blogCard";
import { Link } from "react-router-dom";
import { BASE_ROOT } from "../../../../config";
import SearchField from "./SearchField";
import Divider from "./Divider";
import SlideIn from "../Animations/SlideIn";

const data = [
  {
    id: 1,
    title:
      "Why Noida Sector 107 is the Perfect Location for Your New Home Why Noida Sector 107 is the Perfect Location for Your New Home",
    link: "#",
    type: "News",
    date: "10-12-2024",
    imgSrc: "blog1.png",
  },
  {
    id: 2,
    title:
      "Why Noida Sector 107 is the Perfect Location for Your New Home blog 2",
    link: "#",
    type: "News",
    date: "10-12-2024",
    imgSrc: "blog2.png",
  },
  {
    id: 3,
    title:
      "Why Noida Sector 107 is the Perfect Location for Your New Home blog 2",
    link: "#",
    type: "News",
    date: "10-12-2024",
    imgSrc: "blog3.png",
  },
];
const latestBlog = [
    {
      id: 1,
      title:
        "Why Noida Sector 107 is the Perfect Location for Your New Home Why Noida Sector 107 is the Perfect Location for Your New Home blog",
      link: "#",
      type: "News",
      date: "10-12-2024",
      imgSrc: "blog1.png",
    },
    {
      id: 2,
      title:
        "Why Noida Sector 107 is the Perfect Location for Your New Home blog 2",
      link: "#",
      type: "News",
      date: "10-12-2024",
      imgSrc: "blog2.png",
    },
    {
      id: 3,
      title:
        "Why Noida Sector 107 is the Perfect Location for Your New Home blog 3",
      link: "#",
      type: "News",
      date: "10-12-2024",
      imgSrc: "blog3.png",
    },
  ];

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // 🔍 Filter blogs based on search input
  const filteredBlogs = latestBlog.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-20 gap-12 xl:pt-[98px] lg:mb-[98px] mt-[0px] mb-[50px] py-4  px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="lg:col-span-8">
      <SearchField  customClass={"block lg:hidden mt-[5px] mb-[20px]"} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((data, index) => (
            <div className={`col-span-1 ${index < 2 ? ' ' : 'mt-[45px] '}`} key={index}>
              <Link to={`${BASE_ROOT}blog/${data.id}`} key={data.id}>
                <BlogCard data={data} index={index} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-4">
        <SearchField  customClass={"hidden lg:block"} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <h4 className="ListTitle mt-5 text-[14px] font-normal leading-[33px] tracking-[3px] flex items-center">
            Latest Blog
        </h4>
        <Divider className="md:mt-[30px] md:mb-[50px] mt-[20px] mb-[20px]" />

        <ul>
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((item, index) => (
            <li key={index} className="mt-5">
            <SlideIn duration={1} delay={0.5}>
              <Link to={`${BASE_ROOT}blog/${item.id}`} key={item.id}>
                <p className="cursor-pointer name  text-[#0061AB]  text-[14px] font-light lg:leading-[29px] leading-[25px]">
                  {" "}
                  {item.title?.length > 100
                    ? `${item.title.slice(0, 90)}...`
                    : item.title}{" "}
                </p>
                <div
                  className={`cursor-pointer type uppercase text-left text-[#2b2b2b94] ${
                    item?.length > 100
                      ? "lg:mt-[-18px] mt-[-20px]"
                      : "lg:mt-[5px]"
                  } tracking-[1px]`}
                >
                  {" "}
                  {item.date}
                </div>
              </Link>
              <Divider className="md:mt-[30px] md:mb-[50px] mt-[20px] mb-[20px]" />
              </SlideIn>
            </li>
          ))
        ) : (
          <p className="text-gray-500 mt-5">No blogs found.</p>
        )}
        </ul>
      </div>
    </div>
  );
};

export default BlogList;
