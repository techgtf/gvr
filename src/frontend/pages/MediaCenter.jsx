import React from "react";
import * as CONFIG from "../../../config";
<<<<<<< HEAD
import HeroSectionAboutUs from '../components/aboutUs/HeroSectionAboutUs'
import OverviewSection from '../components/overviewSection/overviewSection';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import News from '../components/MediaCenter/News';
import FadeIn from '../components/Animations/FadeIn';
import CommonHeading from '../components/commonHeading';
import { Link } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { Helmet } from 'react-helmet';
=======
import HeroSectionAboutUs from "../components/aboutUs/HeroSectionAboutUs";
import OverviewSection from "../components/overviewSection/overviewSection";
import News from "../components/MediaCenter/News";
import FadeIn from "../components/Animations/FadeIn";
import CommonHeading from "../components/commonHeading";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Helmet } from "react-helmet";
import useFetchData from "../apiHooks/useFetchData";
import Loader from "../../common/Loader/loader";
import MediaCentreLogo from "../components/MediaCenter/Logo";
import MediaCentrePdf from "../components/MediaCenter/Pdf";
>>>>>>> be5d48c49e395fd2ab83dd8896572878b61d7f55
gsap.registerPlugin(ScrollTrigger);
function MediaCenter() {
  const {
    data: pageData,
    loading: pageLoading,
    error: pageError,
  } = useFetchData("page-sections", "20");

<<<<<<< HEAD
    const altForall = 'Great Value news'

    return (
        <>
            <Helmet>
                <title>Real Estate News & Market Insights | Great Value Realty</title>
                <meta name="keywords" content=" Great value realty media center, real estate news, property market trends, real estate insights, Great Value Realty media, real estate updates, property investment news" />
                <meta name="description" content="Stay updated with the latest real estate news, market trends, and expert insights. Explore valuable resources to make informed property decisions with Great Value Realty." />
                <meta name="google-site-verification" content="Ma-arPYmEe7u20NJ-jsuiHjD1p2HSShiEPD4m8s3bL8" />
                <link rel="canonical" href="https://greatvaluerealty.com/media" />
                <meta name="distribution" content="Global" />
                <meta name="Language" content="English" />
                <meta name="doc-type" content="Public" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Great Value Realty media center" />
                <meta name="googlebot" content="all, index, follow" />
                <meta name="YahooSeeker" content="all, index, follow" />
                <meta name="msnbot" content="all, index, follow" />
                <meta name="HandheldFriendly" content="true" />
                <meta name="revisit-after" content="1 days" />
                <meta name="rating" content="safe for kids" />
                <meta name="expires" content="never" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Great Value Realty media center" />
                <meta property="og:description" content="Stay updated with the latest real estate news, market trends, and expert insights. Explore valuable resources to make informed property decisions with Great Value Realty." />
                <meta property="og:url" content="https://greatvaluerealty.com/media" />
                <meta property="og:site_name" content="Great Value Realty media center" />
                <meta property="og:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@GreatValueGroup" />
                <meta name="twitter:title" content="Great Value Realty media center" />
                <meta name="twitter:description" content="Stay updated with the latest real estate news, market trends, and expert insights. Explore valuable resources to make informed property decisions with Great Value Realty." />
                <meta name="twitter:creator" content="@GreatValueGroup" />
                <meta name="twitter:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />

            </Helmet>
            <HeroSectionAboutUs
                img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/media/hero.webp`}
                heading={"MEDIA CENTER"}
                extraClassesImg={"objectRight"}
                alt={altForall}
            />
=======
  // Handle Loading and Errors
  if (pageLoading) return <Loader />;
  if (pageError)
    return <p className="text-red-500">Error loading Banner: {pageError}</p>;
>>>>>>> be5d48c49e395fd2ab83dd8896572878b61d7f55

  // 🔹 Extract Banner Data Safely
  const extractBannerData = (pageData) => {
    // debugger
    if (!pageData)
      return { mediaBanner: null, mediaOverview: null, mediaCentre: null };

<<<<<<< HEAD
            <section className="download relative px-5 md:px-12 py-5 md:py-14">
                <div className="grid grid-cols-12 gap-3 ">
                    {/* Left Section */}
                    <div className="headline col-span-12 md:col-span-3">
                        <div className="topLine uppercase tracking-[3px] py-3 lg:mt-8 font-[300]">document</div>
                        <FadeIn duration={2} delay={0.5}>
                            <CommonHeading HeadingText="PRESS CENTRE" />
                        </FadeIn>
                    </div>
                    {/* border-[#0061ab63]  border*/}
                    <div className="greatValue flex items-center col-span-12 md:col-span-4">
                        <div className="box  bg-[#EFF5FA]  p-[1.5rem] flex flex-col  ">
                            <h3 className="uppercase text-[17px] tracking-[1px] ">Download Great Value Logo</h3>
                            <div className="logo items-center pt-5 mt-10 flex justify-between">
                                <img
                                    src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/logo-colored.webp`}
                                    alt="Great Value Realty Logo" className='w-[40%]'
                                />

                                <ul>
                                    <li className='flex gap-2 uppercase items-center py-2'>
                                        <span>
                                            <a href={`${CONFIG.ASSET_IMAGE_URL}frontend/images/media/logos/white/logo.webp`} download="logo.png" className='text-[16px]'>
                                                png
                                            </a>
                                        </span> |
                                        <span>
                                            <a href={`${CONFIG.ASSET_IMAGE_URL}frontend/images/media/logos/white/logo.jpg`} download="logo.jpg" className='text-[16px]'>
                                                jpg
                                            </a>
                                        </span> |
                                        <span>
                                            <a href={`${CONFIG.ASSET_IMAGE_URL}frontend/images/media/logos/white/logo.webp`} download="logo.webp" className='text-[16px]'>
                                                webp
                                            </a>
                                        </span>
                                    </li>
                                </ul>
=======
    // const pageData = Object.values(pageData)?.[0] || {};

    return {
      mediaBanner: pageData["media-banner"],
      mediaOverview: pageData["media-overview"],
      mediaCentre: pageData["media-center"],
    };
  };
>>>>>>> be5d48c49e395fd2ab83dd8896572878b61d7f55

  const { mediaBanner, mediaOverview, mediaCentre } = extractBannerData(pageData);

  return (
    <>
      <Helmet>
        <title>Great Value Realty | media-center</title>
      </Helmet>

      <HeroSectionAboutUs
        img={CONFIG.VITE_APP_STORAGE+mediaBanner.image}
        heading={mediaBanner.heading}
        extraClassesImg={"objectRight"}
      />

      <OverviewSection
        heading={mediaOverview.heading}
        paragraph={
            mediaOverview.description
        }
        showKnowMore={false}
      />

      <section className="download relative px-5 md:px-12 py-5 md:py-14">
        <div className="grid grid-cols-12 gap-3 ">
          {/* Left Section */}
          <div className="headline col-span-12 md:col-span-3">
            <div className="topLine uppercase tracking-[3px] py-3 lg:mt-8 font-[300]">
              {mediaCentre.sub_heading}
            </div>
            <FadeIn duration={2} delay={0.5}>
              <CommonHeading HeadingText={mediaCentre.heading} />
            </FadeIn>
          </div>


<<<<<<< HEAD

        </>
    )
=======
          <MediaCentreLogo />

          <MediaCentrePdf />


        </div>
      </section>

      <News />
    </>
  );
>>>>>>> be5d48c49e395fd2ab83dd8896572878b61d7f55
}

export default MediaCenter;
