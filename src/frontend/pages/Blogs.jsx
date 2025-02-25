import React, { lazy } from 'react'
import * as CONFIG from "../../../config";
import BlogList from '../components/blogs/blogList';
import { Helmet } from 'react-helmet';
const HeroSectionAboutUs = lazy(() =>
  import("../components/aboutUs/HeroSectionAboutUs")
);
const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Real Estate Blogs & Expert Insights | Great Value Realty</title>
        <meta name="keywords" content="Great Value Realty blogs, real estate insights, property investment tips, real estate market trends, home buying advice, real estate news" />
        <meta name="description" content="Stay informed with the latest real estate blogs from Great Value Realty. Get expert insights, market trends, investment tips, and property advice to make smarter decisions." />
        <meta name="google-site-verification" content="Ma-arPYmEe7u20NJ-jsuiHjD1p2HSShiEPD4m8s3bL8" />
        <link rel="canonical" href="https://greatvaluerealty.com/blogs" />
        <meta name="distribution" content="Global" />
        <meta name="Language" content="English" />
        <meta name="doc-type" content="Public" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Real Estate Blogs & Expert Insights | Great Value Realty" />
        <meta name="googlebot" content="all, index, follow" />
        <meta name="YahooSeeker" content="all, index, follow" />
        <meta name="msnbot" content="all, index, follow" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="revisit-after" content="1 day" />
        <meta name="rating" content="general" />
        <meta name="expires" content="never" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Real Estate Blogs & Expert Insights | Great Value Realty" />
        <meta property="og:description" content="Stay informed with the latest real estate blogs from Great Value Realty. Get expert insights, market trends, investment tips, and property advice to make smarter decisions." />
        <meta property="og:url" content="https://greatvaluerealty.com/blogs" />
        <meta property="og:site_name" content="Great Value Realty" />
        <meta property="og:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GreatValueGroup" />
        <meta name="twitter:title" content="Real Estate Blogs & Expert Insights | Great Value Realty" />
        <meta name="twitter:description" content="Stay informed with the latest real estate blogs from Great Value Realty. Get expert insights, market trends, investment tips, and property advice to make smarter decisions." />
        <meta name="twitter:creator" content="@GreatValueGroup" />
        <meta name="twitter:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />

      </Helmet>
      <HeroSectionAboutUs
        img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/blogs/banner.webp`}
        heading={"BLOGS"}
        extraClassesImg={"objectRight"}
      />
      <div className='bg-[#EFF5FA]'>
        <BlogList />
      </div>
    </>
  )
}

export default Blogs