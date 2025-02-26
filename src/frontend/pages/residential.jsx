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
        <title>Great Value Realty | residential properties</title>
      </Helmet>
      <div className='residential_page bg-[#EFF5FA] lg:pb-[80px] pb-[40px]'>

        <HeroSectionAboutUs
          img={`${CONFIG.VITE_APP_STORAGE}${bannerData1.image}`}
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
