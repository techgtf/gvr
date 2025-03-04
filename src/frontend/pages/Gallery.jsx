import React from 'react'
import HeroSectionAboutUs from '../components/aboutUs/HeroSectionAboutUs'
import CommonHeading from '../components/commonHeading'
import WorkCulture from '../components/Gallery/WorkCulture'
import ProjectImages from '../components/Gallery/ProjectImages'
import * as CONFIG from "../../../config";
import project1 from "/assets/frontend/images/microsite/gallery/gallery1.webp";
import project2 from "/assets/frontend/images/microsite/gallery/gallery2.webp";
import project3 from "/assets/frontend/images/microsite/gallery/gallery3.webp";
import project4 from "/assets/frontend/images/microsite/gallery/gallery4.webp";
import project5 from "/assets/frontend/images/microsite/gallery/gallery5.webp";
import project6 from "/assets/frontend/images/microsite/gallery/gallery6.webp";
import project7 from "/assets/frontend/images/microsite/anandam/gallery/actual/1.webp";
import project8 from "/assets/frontend/images/microsite/anandam/gallery/actual/3.webp";
import project9 from "/assets/frontend/images/microsite/anandam/gallery/actual/4.webp";
import project10 from "/assets/frontend/images/microsite/gv/gallery/gallery1.webp"
import project11 from "/assets/frontend/images/microsite/gv/gallery/gallery2.webp"
import project12 from "/assets/frontend/images/microsite/gv/gallery/gallery3.webp"
import project13 from "/assets/frontend/images/microsite/gv/gallery/gallery4.webp"
import project14 from "/assets/frontend/images/microsite/gv/gallery/gallery5.webp"
import project15 from "/assets/frontend/images/microsite/gv/gallery/gallery6.webp"
import project16 from "/assets/frontend/images/microsite/vilasa/gallery/actual/actual1.webp"
import project17 from "/assets/frontend/images/microsite/vilasa/gallery/actual/actual2.webp"
import project18 from "/assets/frontend/images/microsite/vilasa/gallery/actual/actual3.webp"
import project19 from "/assets/frontend/images/microsite/sanctuary/gallery/gallery1.webp"
import project20 from "/assets/frontend/images/microsite/sanctuary/gallery/gallery2.webp"
import project21 from "/assets/frontend/images/microsite/sanctuary/gallery/gallery3.webp"
import { Helmet } from 'react-helmet'
import useFetchData from '../apiHooks/useFetchData'
import Loader from '../../common/Loader/loader'

function Gallery() {
  const { data: pageData, loading: pageDataLoading, error: pageDataError } = useFetchData("page-sections", "19");

  // 🔹 Extract Banner Data Safely
  const extractPageData = (pageData) => {
      if (!pageData) return { banner: { image: "", heading: "Default Heading" }, overview: {} };
  
      const pageValues = Object.values(pageData); 
      debugger

      return {
          banner: {
              image: `${pageValues[0]?.image || ""}`,
              heading: pageValues[0]?.heading || "Default Heading"
          },
          overview: pageValues[1] || {} 
      };
  };
  
  const { banner, overview } = extractPageData(pageData);
  // Handle Loading and Errors
  if (pageDataLoading) return <Loader />;
  if (pageDataError) return <p className="text-red-500">Error loading Gallery Banner: {pageDataError}</p>;


  console.log(banner, overview,"banner, overview");

  const projectImagesData = [
    {
      image: project1,
      alt: 'Residential apartments',
    },
    {
      image: project2,
      alt: 'Luxury residential flats',
    },
    {
      image: project3,
      alt: 'Residential property',
    },
    {
      image: project4,
      alt: 'Apartment Buildings',
    },
    {
      image: project5,
      alt: 'Luxury residential complex',
    },
    {
      image: project6,
      alt: 'Modern residential apartments',
    },
    {
      image: project7,
      alt: 'High-rise apartment',
    },
    {
      image: project8,
      alt: 'Residential apartments',
    },
    {
      image: project9,
      alt: 'Clubhouse dining',
    },
    {
      image: project10,
      alt: 'Modern luxury living room',
    },
    {
      image: project11,
      alt: 'Modern luxury kitchen',
    },
    {
      image: project12,
      alt: 'Residential garden',
    },
    {
      image: project13,
      alt: 'Luxurious living room',
    },
    {
      image: project14,
      alt: 'Elegant luxury living room',
    },
    {
      image: project15,
      alt: 'Modern minimalist kitchen',
    },
    {
      image: project16,
      alt: 'Elegant living and dining area',
    },
    {
      image: project17,
      alt: 'Car parked',
    },
    {
      image: project18,
      alt: 'Spacious apartment balcony',
    },
    {
      image: project19,
      alt: 'High-rise apartment towers',
    },
    {
      image: project20,
      alt: 'Luxury residential complex',
    },
    {
      image: project21,
      alt: 'Luxury residential high-rise',
    },

  ]
  return (
    <>
      <Helmet>
        <title>Property Gallery | Explore Stunning Real Estate Images | Great Value Realty</title>
        <meta name="keywords" content="real estate gallery, property images, luxury homes, Great Value Realty gallery, real estate photography, premium property visuals" />
        <meta name="description" content="Browse the Great Value Realty gallery to explore stunning real estate images. Discover luxurious properties, modern interiors, and breathtaking landscapes that define premium living." />
        <meta name="google-site-verification" content="Ma-arPYmEe7u20NJ-jsuiHjD1p2HSShiEPD4m8s3bL8" />
        <link rel="canonical" href="https://greatvaluerealty.com/gallery" />
        <meta name="distribution" content="Global" />
        <meta name="Language" content="English" />
        <meta name="doc-type" content="Public" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Great Value Realty| Explore Stunning Real Estate Images | Property Gallery" />
        <meta name="googlebot" content="all, index, follow" />
        <meta name="YahooSeeker" content="all, index, follow" />
        <meta name="msnbot" content="all, index, follow" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="revisit-after" content="1 day" />
        <meta name="rating" content="general" />
        <meta name="expires" content="never" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Great Value Realty | Explore Stunning Real Estate Images | Property Gallery" />
        <meta property="og:description" content="Browse the Great Value Realty gallery to explore stunning real estate images. Discover luxurious properties, modern interiors, and breathtaking landscapes that define premium living." />
        <meta property="og:url" content="https://greatvaluerealty.com/gallery" />
        <meta property="og:site_name" content="Great Value Realty" />
        <meta property="og:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GreatValueGroup" />
        <meta name="twitter:title" content="Great Value Realty | Explore Stunning Real Estate Images | Property Gallery" />
        <meta name="twitter:description" content="Browse the Great Value Realty gallery to explore stunning real estate images. Discover luxurious properties, modern interiors, and breathtaking landscapes that define premium living." />
        <meta name="twitter:creator" content="@GreatValueGroup" />
        <meta name="twitter:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />


      </Helmet>
      <HeroSectionAboutUs
        img={banner?.image}
        alt={banner?.heading || "Banner Image"}
      />
      <div className="overview_section py-20">
        <div className="headingWrap max-w-[85%] max-w-[100%] m-auto text-center">
          <CommonHeading
            HeadingText={overview?.heading || "Overview Heading"}
          />
        </div>

      </div>

      <WorkCulture />
      <ProjectImages images={projectImagesData} />;
    </>
  )
}

export default Gallery
