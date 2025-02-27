import React from 'react'
import HeroSectionAboutUs from '../components/aboutUs/HeroSectionAboutUs'
import CommonHeading from '../components/commonHeading'
import WorkCulture from '../components/Gallery/WorkCulture'
import ProjectImages from '../components/Gallery/ProjectImages'
import project1 from "/assets/frontend/images/microsite/gallery/gallery1.webp";
import project2 from "/assets/frontend/images/microsite/gallery/gallery2.webp";
import project3 from "/assets/frontend/images/microsite/gallery/gallery3.webp";
import project4 from "/assets/frontend/images/microsite/gallery/gallery4.webp";
import project5 from "/assets/frontend/images/microsite/gallery/gallery5.webp";
import project6 from "/assets/frontend/images/microsite/gallery/gallery6.webp";
import project7 from "/assets/frontend/images/microsite/anandam/gallery/actual/1.webp";
import project8 from "/assets/frontend/images/microsite/anandam/gallery/actual/3.webp";
import project9 from "/assets/frontend/images/microsite/anandam/gallery/actual/4.webp";
import project10 from "/assets/frontend/images/microsite/gv/gallery/gallery1.webp"
import project11 from "/assets/frontend/images/microsite/gv/gallery/gallery2.webp"
import project12 from "/assets/frontend/images/microsite/gv/gallery/gallery3.webp"
import project13 from "/assets/frontend/images/microsite/gv/gallery/gallery4.webp"
import project14 from "/assets/frontend/images/microsite/gv/gallery/gallery5.webp"
import project15 from "/assets/frontend/images/microsite/gv/gallery/gallery6.webp"
import project16 from "/assets/frontend/images/microsite/vilasa/gallery/actual/actual1.webp"
import project17 from "/assets/frontend/images/microsite/vilasa/gallery/actual/actual2.webp"
import project18 from "/assets/frontend/images/microsite/vilasa/gallery/actual/actual3.webp"
import project19 from "/assets/frontend/images/microsite/sanctuary/gallery/gallery1.webp"
import project20 from "/assets/frontend/images/microsite/sanctuary/gallery/gallery2.webp"
import project21 from "/assets/frontend/images/microsite/sanctuary/gallery/gallery3.webp"

function Gallery() {

    const projectImagesData = [project1, project2, project3, project4, project5, project6, project7, project8, project9, project10, project11, project12, project13, project14, project15, project16, project17, project18, project19, project20, project21]
  return (
    <>
      <HeroSectionAboutUs
       img={
        "assets/frontend/images/gallery/hero.webp"
      }
      />
       <div className="overview_section py-20">
        <div className="headingWrap max-w-[85%] max-w-[100%] m-auto text-center">
          <CommonHeading
            HeadingText={
              "Building a Future Where Sustainability, Community, and Integrity Thrive Introduction"
            }
          />
        </div>
       
      </div>

      <WorkCulture/>
      <ProjectImages images={projectImagesData} />;
    </>
  )
}

export default Gallery
