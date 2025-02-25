import React from 'react'
import HeroSection from '../components/CSR/HeroSection'
import OverviewSection from '../components/overviewSection/overviewSection'
import CareCommunities from '../components/CSR/CC/CareCommunities'
import CharityInitiatives from '../components/CSR/CharityInitiatives/CharityInitiatives'
import SocialDetails from '../components/CSR/SocialDetails/SocialDetails'
import { Helmet } from 'react-helmet'

function Csr() {
  return (
    <>
      <Helmet>
        <title>Great Value Realty ESG | Sustainability & Responsible Growth</title>
        <meta name="keywords" content="Great Value Realty ESG, sustainability in real estate, responsible growth, ethical real estate practices, environmental social governance, corporate responsibility" />
        <meta name="description" content="Discover Great Value Realty, ESG initiatives focusing on sustainability, ethical business practices, and responsible growth. Learn how we create a positive impact on communities." />
        <meta name="google-site-verification" content="Ma-arPYmEe7u20NJ-jsuiHjD1p2HSShiEPD4m8s3bL8" />
        <link rel="canonical" href="https://greatvaluerealty.com/esg" />
        <meta name="distribution" content="Global" />
        <meta name="Language" content="English" />
        <meta name="doc-type" content="Public" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Great Value Realty ESG | Sustainability & Responsible Growth" />
        <meta name="googlebot" content="all, index, follow" />
        <meta name="YahooSeeker" content="all, index, follow" />
        <meta name="msnbot" content="all, index, follow" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="revisit-after" content="1 day" />
        <meta name="rating" content="general" />
        <meta name="expires" content="never" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Great Value Realty ESG | Sustainability & Responsible Growth" />
        <meta property="og:description" content="Discover Great Value Realty’s ESG initiatives focusing on sustainability, ethical business practices, and responsible growth. Learn how we create a positive impact on communities." />
        <meta property="og:url" content="https://greatvaluerealty.com/esg" />
        <meta property="og:site_name" content="Great Value Realty" />
        <meta property="og:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GreatValueGroup" />
        <meta name="twitter:title" content="Great Value Realty ESG | Sustainability & Responsible Growth" />
        <meta name="twitter:description" content="Discover Great Value Realty’s ESG initiatives focusing on sustainability, ethical business practices, and responsible growth. Learn how we create a positive impact on communities." />
        <meta name="twitter:creator" content="@GreatValueGroup" />
        <meta name="twitter:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />

      </Helmet>
      <HeroSection />

      <OverviewSection
        heading={
          "Building a Future Where Sustainability, Community, and Integrity Thrive"
        }
        paragraph={
          "At Great Value Realty, we create spaces that go beyond walls and structures to shape a world where progress is rooted in responsibility. Our commitment to environmental stewardship ensures that every project embraces sustainable practices for a healthier planet. By investing in social initiatives, we empower communities through education, healthcare, and inclusivity. Strong governance policies drive our ethical foundation, fostering transparency, accountability, and long-term trust. Every development reflects a vision where business growth, community well-being, and environmental consciousness come together to build a future that is both dynamic and sustainable."
        }
        showKnowMore={false}
      />
      <SocialDetails />
      {/* <CareCommunities/> */}
      <CharityInitiatives />
    </>
  )
}

export default Csr
