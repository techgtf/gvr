import React from "react";
import "./style.css";
import * as CONFIG from "../../../../config";
import FadeIn from "../Animations/FadeIn";
import CommonHeading from "../commonHeading";
import { BASE_ROOT } from "../../../../config";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import CommonBtn from "../commonBtn";
import Divider from "./Divider";
import SlideIn from "../Animations/SlideIn";

const latestBlog = [
  {
    id: 1,
    title: "Lorem Ipsum is simply dummy text of typesetting industry.",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    title: "Lorem Ipsum is simply dummy text of typesetting industry.2",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    title: "Lorem Ipsum is simply dummy text of typesetting industry.3",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const Index = ({ data }) => {
  const { title, imgSrc, date, pera, id } = data;
  const navigate = useNavigate();
  const currentId = parseInt(id);

  // Check if next blog exists in latestBlog array
  const hasNextBlog = latestBlog.some((blog) => blog.id === currentId + 1);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 xl:mt-[98px] lg:mb-[98px] mt-[0px] mb-[50px]  px-4 sm:px-6 lg:px-8 xl:px-12">
      {/* Left side card */}
      <div className="lg:col-span-8">
        {/* <FadeIn duration={2} delay={0.6}>
          <CommonHeading
            HeadingText="Blog Details"
            HeadingClass="mb-4 text-[#143C5E]"
          />
        </FadeIn> */}
        <div className="DetailsCard bg-[#EFF5FA] lg:p-[45px] p-[20px]">
          <div className="ImageContain relative md:pt-[10px] md:pl-[10px] sm:h-auto h-[215px]  p-0">
            <img
              src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/blogs/blog_img_1.png`}
              alt="Blog Image"
              className=" relative w-full h-full sm:object-contain object-cover z-[2]"
            />
          </div>
          <p className="BlogDate mt-[25px] text-[#6B6B6B] ">{date}</p>
          <h4 className=" md:mb-[50px]  mb-[20px] mt-4 text-[16px] text-[#143C5E] capitalize">{title}</h4>
          {/* <CommonHeading
            HeadingText={title}
            HeadingClass="mb-4 mt-4 text-[#143C5E] capitalize"
          /> */}

          {pera?.length > 0 && (
            <>
            
            <FadeIn duration={2} delay={0.6}>
              <p className="opacity-70 text-justify">{pera[0]}</p>
              </FadeIn>
              <Divider className="md:mt-[50px] md:mb-[50px] mt-[20px] mb-[20px]" />
              <FadeIn duration={2} delay={0.6}>
              {pera.slice(1).map((paragraph, index) => (
                <p key={index} className="opacity-70 text-justify">
                  {paragraph}
                </p>
              ))}
              </FadeIn>
            </>
          )}

          {/*  Fixed: Conditionally disable "Next" button */}
            <FadeIn duration={2} delay={0.6}>
          <div className="flex justify-between">
            {/* Other content */}
            <button
              onClick={() => navigate(`${BASE_ROOT}blog/${currentId + 1}`)}
              disabled={!hasNextBlog}
              className={`md:mt-5 mt-3 ml-auto px-4 py-2 md:text-[16px] text-[14px] uppercase ${
                hasNextBlog ? "" : "text-gray-400"
              }`}
            >
              Next
            </button>
          </div>
          </FadeIn>
        </div>
      </div>

      {/* Right side list */}
      <div className="lg:col-span-4">
        <FadeIn duration={2} delay={0.6}>
          <CommonHeading
            HeadingText="Latest Blogs"
            HeadingClass="mb-4 text-[#143C5E] text-[11px]"
          />
        </FadeIn>
        <Divider className=" md:mb-[50px] mt-[20px] mb-[20px]" />
        <ul>
          {latestBlog.map((item, index) => (
            <>
            <li
              key={index}
              className="mt-3  last:mb-0  first:mt-0 last:mb-0"
            >
              
            <SlideIn duration={1} delay={0.5}>
              <Link to={`${BASE_ROOT}blog/${item.id}`} key={item.id}>
                <div className="ListCard">
                  <h4 className="ListHeading text-[#000] font-poppins md:text-[16px] text-[14px] text-[#143C5E] font-normal md:leading-[34px] leading-[20px] tracking-[0.4px] capitalize">
                    {item.title}
                  </h4>
                  <p className="mt-[20px] mb-[20px] opacity-70 text-justify"> {item.desc} </p>
                  <CommonBtn TagName={Link} className="text-[14px]">
                    Know more <MdArrowOutward />
                  </CommonBtn>
                </div>
              </Link>
              </SlideIn>
            </li>
              <Divider className="md:mt-[30px] md:mb-[50px] mt-[20px] mb-[20px]" />
              </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;


// 
