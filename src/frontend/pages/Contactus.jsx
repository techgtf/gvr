import React, { lazy } from "react";
import * as CONFIG from "../../../config";

const HeroSectionAboutUs = lazy(() =>
  import("../components/aboutUs/HeroSectionAboutUs")
);
const AddressSection = lazy(() => import("../components/contactUs/Address"));
const EnquiryFormSection = lazy(() =>
  import("../components/contactUs/enquiryForm")
);

const ContactUs = () => {
  return (
    <>
      <HeroSectionAboutUs
        img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/contact_us.png`}
        heading={"CONTACT US"}
        extraClassesImg={"objectRight"}
      />
      <AddressSection />
      <EnquiryFormSection />
    </>
  );
};

export default ContactUs;
