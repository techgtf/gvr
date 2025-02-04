import React, { lazy } from "react";
import * as CONFIG from "../../../config";

const HeroSectionAboutUs = lazy(() =>
  import("../components/aboutUs/HeroSectionAboutUs")
);
const AddressSection = lazy(() => import("../components/contactUs/address"));
const EnquiryFormSection = lazy(() =>
  import("../components/contactUs/enquiryForm")
);

const ContactUs = () => {
  return (
    <>
      <HeroSectionAboutUs
        img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/contact_us.png`}
        heading={"CONTACT US"}
        breadCrumb={"HOME - CONTACT US"}
      />
      <AddressSection />
      <EnquiryFormSection />
    </>
  );
};

export default ContactUs;
