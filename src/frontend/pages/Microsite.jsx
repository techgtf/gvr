import React from "react";
import HeroSection from "../components/microsite/HeroSection";
import About from "../components/microsite/About";
import Amentities from "../components/microsite/Amentities";
import PriceList from "../components/microsite/PriceList";
import HighlightsSpecifications from "../components/microsite/HighlightsSpecifications/HighlightsSpecifications";
import Plans from "../components/microsite/Plans";
import LocationAdvantage from "../components/microsite/LocationAdvantage";
import ProjectGallery from "../components/microsite/ProjectGallery/ProjectGallery";

function Microsite() {
  return (
    <>
      <HeroSection />
      <About />
      <Amentities />
      <PriceList />
      <HighlightsSpecifications />
      <Plans />
      <LocationAdvantage />
      <ProjectGallery />
    </>
  );
}

export default Microsite;
