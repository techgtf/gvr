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


const Index = ({ data }) => {
  const { title, desc, desktopImg, mobileImg, date, pera, id, subtitles } =
    data;

  const { latestBlog } = useContext(LatestBlogContext);
  const navigate = useNavigate();
  const currentId = parseInt(id);

  // Check if next blog exists in latestBlogData array
  const hasNextBlog = latestBlog.some((blog) => blog.id === currentId + 1);

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
                srcSet={`${CONFIG.ASSET_IMAGE_URL}frontend/images/blogs/${mobileImg}`}
              />
              {/* Desktop Image */}
              <img
                src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/blogs/${desktopImg}`}
                alt="Blog Image"
                className="relative w-full h-full sm:object-contain object-cover z-[2]"
              />
            </picture>
          </div>

          <p className="BlogDate mt-[25px] text-[#6B6B6B] ">{date}</p>
          <FadeIn SlideIn duration={0} delay={0.5}>
            <h4 className=" md:mb-[30px]  mb-[20px] mt-4 lg:leading-[30px] leading-[28px] text-[16px] text-[#143C5E] capitalize">
              {title}
            </h4>
          </FadeIn>
          {desc && (
            <>
              <FadeIn SlideIn duration={0} delay={0.5}>
                <p className="opacity-70 text-justify common_pera">{desc}</p>
              </FadeIn>
              <Divider className="md:mt-[38px] md:mb-[38px] mt-[20px] mb-[20px]" />
            </>
          )}

          {subtitles?.length > 0 && (
            <FadeIn SlideIn duration={0} delay={0.5}>
              {subtitles.map(({ title, description }, index) => (
                <React.Fragment key={index}>
                  <h4 className="mb-4 mt-4 text-[14px] text-[#143C5E] capitalize">
                    {title}
                  </h4>
                  <p className="opacity-70 text-justify common_pera">{description}</p>
                </React.Fragment>
              ))}
            </FadeIn>
          )}

          {/*  Fixed: Conditionally disable "Next" button */}
          <FadeIn SlideIn duration={0} delay={0.5}>
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
              <li  className="mt-3  last:mb-0  first:mt-0 last:mb-0">
                <SlideIn SlideIn duration={0} delay={0.5}>
                  <Link to={`${BASE_ROOT}blog/${item.id}`} key={item.id}  state={{ blog: item}}>
                    <div className="ListCard">
                      <h4 className="ListHeading font-poppins md:text-[16px] text-[14px] text-[#143C5E] font-normal md:leading-[30px] leading-[27px] tracking-[0.4px] capitalize">
                        {item.title}
                      </h4>
                      <p className="mt-[20px] mb-[20px] opacity-70 text-justify common_pera">
                        {" "}
                        {item.desc?.length > 200
                          ? `${item.desc.slice(0, 200)}...`
                          : item.desc}{" "}
                      </p>
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
