import React, { lazy } from "react";
const HeroSectionAboutUs = lazy(() =>
  import("../components/aboutUs/HeroSectionAboutUs")
);
const NriOverview = lazy(() => import("../components/nriInvestor/Overview"));

import * as CONFIG from "../../../config";
import { Helmet } from "react-helmet";
const NriInvestor = () => {
  return (
    <>
      <Helmet>
        <title>Great Value Realty NRI Investor | Smart Real Estate Investment Solutions for NRIs</title>
        <meta name="keywords" content="Great Value Realty NRI investor, NRI property investment, buy property in India from abroad, real estate for NRIs, Indian property investment for NRIs" />
        <meta name="description" content="Explore lucrative real estate investment opportunities in India with Great Value Realty's NRI Investor services. Get expert guidance, legal support, and seamless property buying solutions tailored for NRIs." />
        <meta name="google-site-verification" content="Ma-arPYmEe7u20NJ-jsuiHjD1p2HSShiEPD4m8s3bL8" />
        <link rel="canonical" href="https://greatvaluerealty.com/nri-investor" />
        <meta name="distribution" content="Global" />
        <meta name="Language" content="English" />
        <meta name="doc-type" content="Public" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Great Value Realty NRI Investor | Smart Real Estate Investment Solutions for NRIs" />
        <meta name="googlebot" content="all, index, follow" />
        <meta name="YahooSeeker" content="all, index, follow" />
        <meta name="msnbot" content="all, index, follow" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="revisit-after" content="1 day" />
        <meta name="rating" content="general" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Great Value Realty NRI Investor | Smart Real Estate Investment Solutions for NRIs" />
        <meta property="og:description" content="Explore lucrative real estate investment opportunities in India with Great Value Realty's NRI Investor services. Get expert guidance, legal support, and seamless property buying solutions tailored for NRIs." />
        <meta property="og:url" content="https://greatvaluerealty.com/nri-investor" />
        <meta property="og:site_name" content="Great Value Realty" />
        <meta property="og:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@GreatValueGroup" />
        <meta name="twitter:title" content="Great Value Realty NRI Investor | Smart Real Estate Investment Solutions for NRIs" />
        <meta name="twitter:description" content="Explore lucrative real estate investment opportunities in India with Great Value Realty's NRI Investor services. Get expert guidance, legal support, and seamless property buying solutions tailored for NRIs." />
        <meta name="twitter:creator" content="@GreatValueGroup" />
        <meta name="twitter:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />

      </Helmet>
      <HeroSectionAboutUs
        img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/nri-investor/banner.webp`}
        heading={"NRI Investor"}
        extraClassesImg={"objectRight"}
      />

      <NriOverview />
    </>
  );
};

export default NriInvestor;
