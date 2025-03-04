import React, { useContext } from "react";
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
import { LatestBlogContext } from "../../context/LatestBlogContext";
import dayjs from "dayjs";

const Index = ({ data, nextBlog }) => {
  const {
    heading,
    description,
    image,
    thumbnail,
    created_at,
    blog_details,
  } = data;

  const { latestBlog, loading, error } = useContext(LatestBlogContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  const navigate = useNavigate();
  // const currentId = parseInt(id);
  const date = dayjs(created_at).format("YYYY-MM-DD");



  console.log(data,"data description");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-20 gap-12 xl:pt-[80px] lg:pb-[70px] mt-[0px] mb-[50px] px-0 sm:px-5 lg:px-8 xl:px-12">
      {/* Left side card */}
      <div className="lg:col-span-8">
        <div className="DetailsCard bg-[#EFF5FA] lg:p-[45px] p-[20px]">
          <div className="ImageContain relative md:pt-[10px] md:pl-[10px]  p-0">
            <picture>
              {/* Mobile Image */}
              <source
                media="(max-width: 768px)"
                srcSet={`${thumbnail}`}
              />
              {/* Desktop Image */}
              <img
                src={`${image}`}
                alt="Blog Image"
                className="relative w-full h-full sm:object-contain object-cover z-[2]"
              />
            </picture>
          </div>

          <p className="BlogDate mt-[25px] text-[#6B6B6B] ">{date}</p>
          <FadeIn SlideIn duration={0} delay={0.5}>
            <h4 className="md:mb-[30px]  mb-[20px] mt-4 lg:leading-[30px] leading-[28px] text-[16px] text-[#143C5E] capitalize">
              {heading}
            </h4>
          </FadeIn>
          
          <Divider className="md:mt-[38px] md:mb-[38px] mt-[20px] mb-[20px]" />
          {description && (
            <>
              <FadeIn SlideIn duration={0} delay={0.5}>
                <div className="Blog_Description" dangerouslySetInnerHTML={{ __html: description }} />
              </FadeIn>
            </>
          )}

          {/* {blog_details?.length > 0 && (
            <>
              <Divider className="md:mt-[38px] md:mb-[38px] mt-[20px] mb-[20px]" />
              <FadeIn SlideIn duration={1} delay={0.5}>
                {blog_details.map(({ heading, description }, index) => (
                  <React.Fragment key={index}>
                    <h4 className="mb-4 mt-4 text-[14px] text-[#143C5E] capitalize">
                      {heading}
                    </h4>
                    <p className="opacity-70 text-justify common_pera">
                      {description}
                    </p>
                  </React.Fragment>
                ))}
              </FadeIn>
            </>
          )} */}

          {/*  Fixed: Conditionally disable "Next" button */}
          <FadeIn SlideIn duration={0} delay={0.5}>
            <div className="flex justify-between">
              {/* Other content */}
              <button
                onClick={() => {
                  if (nextBlog) {
                    navigate(`${BASE_ROOT}blog/${nextBlog}`);
                  }
                }}
                disabled={!nextBlog}
                className={`md:mt-5 mt-3 ml-auto px-4 py-2 md:text-[16px] text-[14px] uppercase ${
                  nextBlog ? "" : "text-gray-400"
                }`}
              >
                Next
              </button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Right side list start*/}
      {/* latest blog start */}
      <div className="lg:col-span-4 lg:px-0 px-5">
        <FadeIn duration={2} delay={0.6}>
          <CommonHeading
            HeadingText="Latest Blogs"
            HeadingClass="mb-4 text-[#143C5E] text-[11px]"
          />
        </FadeIn>
        <Divider className=" md:mb-[38px] mt-[20px] mb-[20px]" />
        <ul>
          {latestBlog.map((item, index) => (
            <React.Fragment key={index}>
              <li className="mt-3 first:mt-0 last:mb-0">
                <SlideIn SlideIn duration={0} delay={0.5}>
                  <Link to={`${BASE_ROOT}blog/${item.slug}`} key={item.id}>
                    <div className="ListCard">
                      <h4 className="ListHeading font-poppins md:text-[16px] text-[14px] text-[#143C5E] font-normal md:leading-[30px] leading-[27px] tracking-[0.4px] capitalize">
                        {item.heading}
                      </h4>

                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            item.description?.length > 150
                              ? `${item.description.slice(0, 150)}...`
                              : item.description,
                        }}
                      />

                      <CommonBtn className="text-[14px]">
                        Know more <MdArrowOutward />
                      </CommonBtn>
                    </div>
                  </Link>
                  <Divider className="md:mt-[30px] md:mb-[38px] mt-[20px] mb-[20px]" />
                </SlideIn>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
      {/* Right side list end*/}
      {/* latest blog end */}
    </div>
  );
};

export default Index;

//
