import React, { useState } from "react";
import BlogCard from "./blogCard";
import { Link } from "react-router-dom";
import { BASE_ROOT } from "../../../../config";
import SearchField from "./SearchField";

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
    <div className=" px-4 sm:px-6 lg:px-8 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-[98px] pb-[98px]">
      <div className="lg:col-span-8">
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
        <SearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <h4 className="ListTitle mt-5 mb-1 text-[14px] font-normal leading-[33px] tracking-[3px] flex items-center">
            Latest Blog
        </h4>

        <ul className="blogs_list_content">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((item, index) => (
            <li key={index} className="py-3 border-b-[1px] border-b-[#ccc]">
              <Link to={`${BASE_ROOT}blog/${item.id}`} key={item.id}>
                <p className="cursor-pointer name  text-[#0061AB]  text-[14px] font-normal md:font-light leading-[20px] md:leading-[25px] lg:leading-[29px]">
                  {" "}
                  {item.title?.length > 100
                    ? `${item.title.slice(0, 90)}...`
                    : item.title}{" "}
                </p>
                <div
                  className={`cursor-pointer type uppercase text-left text-[#2b2b2b94] mt-2 ${
                    item?.length > 100
                      ? "lg:mt-[-18px] mt-[-20px]"
                      : "lg:mt-[5px]"
                  } tracking-[1px]`}
                >
                  {" "}
                  {item.date}
                </div>
              </Link>
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
