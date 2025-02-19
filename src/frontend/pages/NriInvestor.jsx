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
        <title>Great Value Realty | NRI-invester</title>
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
