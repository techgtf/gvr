import React, { lazy } from 'react'
const HeroSectionAboutUs = lazy(() => import("../components/aboutUs/HeroSectionAboutUs"))
import * as CONFIG from "../../../config"
import ProjectBox from '../components/residential/projectBox'
import "../components/residential/styles.css"
const OverviewSection = lazy(() => import("../components/overviewSection/overviewSection"))


export default function Residential() {
  const projectsData = [
    {
      name: "sharnam",
      imgSrc: "sharnam.jpg",
      location: "Sec 107, Noida",
      typology: "2, 3 & 4 BHK Luxury Residential Apartments",
      overview: "Great Value presents a new stature of luxury residential apartments at SHARANAM. Located in sector 107, Noida, these stunning apartments comprise of 18 exclusive towers with 2, 3 and 4 BHK Flats. At SHARANAM you will not only enjoy the benefits of a beautiful location but, you can also take pleasure with ready to move flats facilities in Noida.",
      pageLink: `${CONFIG.BASE_ROOT}microsite`,
      alt: "Sharanam Sector 107 Noida"
    },
    {
      name: "Anandam",
      imgSrc: "anandam.jpg",
      location: "Sec 107, Noida",
      typology: "2, 3 & 4 BHK Luxury Residential Apartments",
      overview: "Great Value Sharnam proved to be a landmark and continuing the legacy of delivering success, we gladly unveil our newest and the most elegant piece of art to be ever built-Great Value Anandam, situated in the heart of luxury, sector 107, Noida. This project depicts sheer elegance. It breathes opulence and makes conveniences a readily available resource, with everything that you can ever imagine available so promptly. Great Value Anandam is the example of true magnificence, suited seamlessly to blue bloods.",
      pageLink: `${CONFIG.BASE_ROOT}anandam`,
      alt: "Anandam Sector 107 Noida"
    },
    {
      name: "Gv Homez",
      imgSrc: "gv-home.jpg",
      location: "Uday Park, New Delhi",
      typology: "Luxury and Modern Builder Floors",
      overview: "GV Homes offers a luxury modern builders floor with a uniquely fashioned and perfectly placed to embrace the culture of Great Value. Our product proposition is predicated on design-led innovation that is based on research. We design homes that ensure trust for generations. Some of the key themes in our approach include creating a sense of place, brighter living experience, technological innovation, thoughtful amenities, and much more.",
      pageLink: `${CONFIG.BASE_ROOT}gv-homes`,
      alt: "GV Homez"
    },
  ]

  return (
    <div className='residential_page bg-[#EFF5FA] lg:pb-[80px] pb-[40px]'>
      <HeroSectionAboutUs
        img={"https://res.cloudinary.com/dx3l6id8r/image/upload/v1739342190/hero_wlxqxm.webp"}
        alt={"Great Value Residential Project"}
      />
      {/* <div className='overview_wrap bg-white' style={{background:"linear-gradient(1deg, #eff5fa, #ffffff)"}}> */}
      <OverviewSection
        heading={'Where Luxury Meets Comfort, Life Flourishes Brightly'}
        paragraph={'Discover residences that seamlessly blend luxury with comfort, offering serene sanctuaries tailored to your lifestyle.'}
        showKnowMore={false}
        pageLink={`${CONFIG.BASE_ROOT}about-us`}
        bgColor='bg-white'
      />
      {/* </div> */}
      <ProjectBox projectsData={projectsData} />
    </div>
  )
}
