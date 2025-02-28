import React, { lazy } from "react";
import * as CONFIG from "../../../config";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Contact Great Value Realty | Get in Touch with Us</title>
        <meta name="keywords" content="Great Value Realty contact, real estate inquiries, get in touch with Great Value Realty, real estate support, property consultation, real estate customer service" />
        <meta name="description" content="Have questions or need assistance? Contact Great Value Realty today! Our team is ready to help with your real estate needs. Reach out via phone, email, or visit us." />
        <meta name="google-site-verification" content="Ma-arPYmEe7u20NJ-jsuiHjD1p2HSShiEPD4m8s3bL8" />
        <link rel="canonical" href="https://greatvaluerealty.com/contact-us" />
        <meta name="distribution" content="Global" />
        <meta name="Language" content="English" />
        <meta name="doc-type" content="Public" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Contact Great Value Realty | Get in Touch with Us" />
        <meta name="googlebot" content="all, index, follow" />
        <meta name="YahooSeeker" content="all, index, follow" />
        <meta name="msnbot" content="all, index, follow" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="revisit-after" content="1 day" />
        <meta name="rating" content="general" />
        <meta name="expires" content="never" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Great Value Realty | Get in Touch with Us" />
        <meta property="og:description" content="Have questions or need assistance? Contact Great Value Realty today! Our team is ready to help with your real estate needs. Reach out via phone, email, or visit us." />
        <meta property="og:url" content="https://greatvaluerealty.com/contact-us" />
        <meta property="og:site_name" content="Great Value Realty" />
        <meta property="og:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GreatValueGroup" />
        <meta name="twitter:title" content="Contact Great Value Realty | Get in Touch with Us" />
        <meta name="twitter:description" content="Have questions or need assistance? Contact Great Value Realty today! Our team is ready to help with your real estate needs. Reach out via phone, email, or visit us." />
        <meta name="twitter:creator" content="@GreatValueGroup" />
        <meta name="twitter:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />

      </Helmet>
      <HeroSectionAboutUs
        // img={
        //   "https://res.cloudinary.com/dx3l6id8r/image/upload/v1739359097/contact_us_qvab82.jpg"
        // }
        img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/contact-us-img.webp`}
        heading={"CONTACT US"}
        extraClassesImg={"objectRight"}
        alt={'Productive workspace'}
      />
      <AddressSection />
      <EnquiryFormSection />
    </>
  );
};

export default ContactUs;
