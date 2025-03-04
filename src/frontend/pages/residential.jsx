import React, { lazy } from 'react'
const HeroSectionAboutUs = lazy(() => import("../components/aboutUs/HeroSectionAboutUs"))
import * as CONFIG from "../../../config"
import ProjectBox from '../components/residential/projectBox'
import "../components/residential/styles.css"
import { Helmet } from 'react-helmet'
import useFetchData from '../apiHooks/useFetchData'
const OverviewSection = lazy(() => import("../components/overviewSection/overviewSection"))


export default function Residential() {
  const { data: bannerData, loading: bannerLoading } = useFetchData('page-sections/17');

  const { data: detailPageData, loading, error } = useFetchData('project?category=residentials')
  const projectsData = detailPageData;

  if (bannerLoading) {
    return <div className="w-full min-h-[60vh] bg-gray-200 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer rounded-md"></div>;
  }
  if (!bannerData) {
    return <div className='p-10'>No Data Available</div>;
  }

  const bannerData1 = bannerData["residential-banner"];
  const overviewData = bannerData["residential-overview"];


  return (
    <>
      <Helmet>
        <title>Great Value Realty Residential Projects | Luxury & Affordable Homes</title>
        <meta name="keywords" content="Great Value Realty residential projects, luxury homes, affordable homes, modern living, real estate properties, premium residences" />
        <meta name="description" content="Discover Realty Residential Projects. Explore luxury and affordable homes designed for comfort, elegance, and modern living. Find your dream home today!" />
        <meta name="google-site-verification" content="Ma-arPYmEe7u20NJ-jsuiHjD1p2HSShiEPD4m8s3bL8" />
        <link rel="canonical" href="https://greatvaluerealty.com/residential" />
        <meta name="distribution" content="Global" />
        <meta name="Language" content="English" />
        <meta name="doc-type" content="Public" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Great Value Realty Residential Projects | Luxury & Affordable Homes" />
        <meta name="googlebot" content="all, index, follow" />
        <meta name="YahooSeeker" content="all, index, follow" />
        <meta name="msnbot" content="all, index, follow" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="revisit-after" content="1 day" />
        <meta name="rating" content="general" />
        <meta name="expires" content="never" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Great Value Realty Residential Projects | Luxury & Affordable Homes" />
        <meta property="og:description" content="Discover Great Value Realty Residential Projects. Explore luxury and affordable homes designed for comfort, elegance, and modern living. Find your dream home today!" />
        <meta property="og:url" content="https://greatvaluerealty.com/residential" />
        <meta property="og:site_name" content="Great Value Realty" />
        <meta property="og:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GreatValueGroup" />
        <meta name="twitter:title" content="Great Value Realty Residential Projects | Luxury & Affordable Homes" />
        <meta name="twitter:description" content="Discover Great Value Realty Residential Projects. Explore luxury and affordable homes designed for comfort, elegance, and modern living. Find your dream home today!" />
        <meta name="twitter:creator" content="@GreatValueGroup" />
        <meta name="twitter:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />

      </Helmet>
      <div className='residential_page bg-[#EFF5FA] lg:pb-[80px] pb-[40px]'>

        <HeroSectionAboutUs
          img={`${bannerData1.image}`}
          alt={"Great Value Residential Project"}
        />
        {/* <div className='overview_wrap bg-white' style={{background:"linear-gradient(1deg, #eff5fa, #ffffff)"}}> */}
        <OverviewSection
          heading={overviewData?.heading}
          paragraph={<div dangerouslySetInnerHTML={{ __html: overviewData?.description }} />}
          showKnowMore={false}
          pageLink={`${CONFIG.BASE_ROOT}about-us`}
          bgColor='bg-white'
        />

        {/* </div> */}
        <ProjectBox projectsData={projectsData} loading={loading} error={error} />
      </div>
    </>
  )
}
