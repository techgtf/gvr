import React, { lazy } from 'react'
const HeroSectionAboutUs = lazy(() => import("../components/aboutUs/HeroSectionAboutUs"))
import * as CONFIG from "../../../config"
import ProjectBox from '../components/residential/projectBox'
import "../components/residential/styles.css"

export default function Residential() {
  const projectsData = [
    {
      name: "sharnam",
      imgSrc: "sharnam.jpg",
      location: "Sec 107, Noida",
      typology: "2, 3 & 4 BHK Luxury Residential Apartments",
      overview: "These days more and more people are opting to purchase apartments and have their dream home built in it rather than go for an apartment or villa with the same design. It is a myth that apartment loans do not offer as much tax benefits as home loans. Now that it is that time of the year when people go frantic – doing the eleventh-hour struggle to collect every one of those bills, receipts, deductions, income papers, bank statements, and more, let us check out the perks of owning an apartment. Yes, tax time is looming ahead.",
      pageLink: "#"
    },
    {
      name: "Anandam",
      imgSrc: "anandam.jpg",
      location: "Sec 107, Noida",
      typology: "2, 3 & 4 BHK Luxury Residential Apartments",
      overview: "These days more and more people are opting to purchase apartments and have their dream home built in it rather than go for an apartment or villa with the same design. It is a myth that apartment loans do not offer as much tax benefits as home loans. Now that it is that time of the year when people go frantic – doing the eleventh-hour struggle to collect every one of those bills, receipts, deductions, income papers, bank statements, and more, let us check out the perks of owning an apartment. Yes, tax time is looming ahead.",
      pageLink: "#"
    },
    {
      name: "Gv Homez",
      imgSrc: "gv-home.jpg",
      location: "Sec 107, Noida",
      typology: "2, 3 & 4 BHK Luxury Residential Apartments",
      overview: "These days more and more people are opting to purchase apartments and have their dream home built in it rather than go for an apartment or villa with the same design. It is a myth that apartment loans do not offer as much tax benefits as home loans. Now that it is that time of the year when people go frantic – doing the eleventh-hour struggle to collect every one of those bills, receipts, deductions, income papers, bank statements, and more, let us check out the perks of owning an apartment. Yes, tax time is looming ahead.",
      pageLink: "#"
    },
  ]

  return (
    <div className='residential_page bg-[#EFF5FA] lg:pb-[80px] pb-[20px]'>
      <HeroSectionAboutUs
        img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/projects/residential/banner.jpg`}
        heading={"Residential Projects"}
        breadCrumb={"HOME - Residential Projects"}
      />
      <ProjectBox projectsData={projectsData} />
    </div>

  )
}
