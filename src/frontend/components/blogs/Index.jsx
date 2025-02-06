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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:mt-[98px] lg:mb-[98px] mt-[50px] mb-[50px]  px-4 sm:px-6 lg:px-8 xl:px-12">
      {/* Left side card */}
      <div className="lg:col-span-8">
        <FadeIn duration={2} delay={0.6}>
          <CommonHeading
            HeadingText="Blog Details"
            HeadingClass="mb-4 text-[#143C5E]"
          />
        </FadeIn>
        <div className="DetailsCard bg-[#EFF5FA] lg:p-[45px] p-[20px]">
          <div className="ImageContain relative pt-[15px] pl-[15px]">
            <img
              src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/blogs/blog_img_1.png`}
              alt="Blog Image"
              className="relative w-full h-full object-contain z-[2]"
            />
          </div>
          <p className="BlogDate mt-5 text-[#6B6B6B]">{date}</p>
          <CommonHeading
            HeadingText={title}
            HeadingClass="mb-4 mt-4 text-[#143C5E] capitalize"
          />

          {pera?.length > 0 && (
            <>
              <p className="opacity-70">{pera[0]}</p>
              <Divider className="mt-[50px] mb-[50px]" />
              {pera.slice(1).map((paragraph, index) => (
                <p key={index} className="opacity-70">
                  {paragraph}
                </p>
              ))}
            </>
          )}

          {/*  Fixed: Conditionally disable "Next" button */}
          <div className="flex justify-between">
            {/* Other content */}
            <button
              onClick={() => navigate(`${BASE_ROOT}blog/${currentId + 1}`)}
              disabled={!hasNextBlog}
              className={`mt-5 ml-auto px-4 py-2 text-[16px] uppercase ${
                hasNextBlog ? "" : "text-gray-700"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Right side list */}
      <div className="lg:col-span-4">
        <FadeIn duration={2} delay={0.6}>
          <CommonHeading
            HeadingText="Latest Blogs"
            HeadingClass="mb-4 text-[#143C5E]"
          />
        </FadeIn>
        <ul>
          {latestBlog.map((item, index) => (
            <li
              key={index}
              className="mt-3 mb-[50px] last:mb-0 pb-3 border-b border-solid border-[#33638B66] first:mt-0 last:mb-0"
            >
              <Link to={`${BASE_ROOT}blog/${item.id}`} key={item.id}>
                <div className="ListCard">
                  <h4 className="ListHeading text-[#000] font-poppins text-[16px] font-normal leading-[24px] tracking-[0.4px] capitalize">
                    {item.title}
                  </h4>
                  <p className="mt-3 mb-3 opacity-70"> {item.desc} </p>
                  <CommonBtn TagName={Link}>
                    Know more <MdArrowOutward />
                  </CommonBtn>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;


// 
