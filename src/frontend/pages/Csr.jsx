import React from 'react'
import HeroSection from '../components/CSR/HeroSection'
import OverviewSection from '../components/overviewSection/overviewSection'
import CareCommunities from '../components/CSR/CC/CareCommunities'
import CharityInitiatives from '../components/CSR/CharityInitiatives/CharityInitiatives'

function Csr() {
  return (
    <>
      <HeroSection/>
      <OverviewSection
        heading={
          "Empowering communities, elevating futures, creating impact"
        }
        paragraph={
          "Great Value is aware of the society we operate in and its myriad needs & it constantly endeavours to make a positive contribution to the underprivileged communities. A wide range of social economic, education and health initiatives are being undertaken by the Group: Smt. Ramsumarni Devi Charitable Trust is one of the initiatives of Great Value Group is empowering the society infield of SHIKSHA, SWAVLAMBAM, SANSKAR, SWAASTH is a venture of Great Value to fulfil its social responsibilities."
        }
        showKnowMore={false}
      />
      <CareCommunities/>
      <CharityInitiatives/>
    </>
  )
}

export default Csr
