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
        <title>Great Value Realty | CSR</title>
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
