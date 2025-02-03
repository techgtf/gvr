import React, { lazy } from "react";
import * as CONFIG from "../../../config";
import Address from "../components/contactUs/address";
const HeroSectionAboutUs = lazy(() =>
  import("../components/aboutUs/HeroSectionAboutUs")
);

const ContactUs = () => {
  return (
    <>
      <HeroSectionAboutUs
        img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/contact_us.png`}
        heading={"CONTACT US"}
        breadCrumb={"HOME - CONTACT US"}
      />
      <Address />
    </>
  );
};

export default ContactUs;
