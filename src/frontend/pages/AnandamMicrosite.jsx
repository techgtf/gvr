import React from 'react'
import HeroSection from '../components/microsite/HeroSection'
import About from '../components/microsite/About'
import Amentities from '../components/microsite/Amentities'
import PriceList from '../components/microsite/PriceList'
import HighlightsSpecifications from '../components/microsite/HighlightsSpecifications/HighlightsSpecifications'
import Plans from '../components/microsite/Plans'
import LocationAdvantage from '../components/microsite/LocationAdvantage'
import ProjectGallery from '../components/microsite/ProjectGallery/ProjectGallery'
import swimmingPool from "/assets/frontend/images/microsite/amentities/icons/swimming-pool.png";
import master_plan_img from "/assets/frontend/images/microsite/plans/masterplan.png";
import plan1 from "/assets/frontend/images/microsite/anandam/plans/floorPlans/plan1.jpg";
import plan2 from "/assets/frontend/images/microsite/anandam/plans/floorPlans/plan2.jpg";
import plan3 from "/assets/frontend/images/microsite/anandam/plans/floorPlans/plan3.jpg";
import loaction from "/assets/frontend/images/microsite/location/location.png";
import drive from "/assets/frontend/images/microsite/location/drive.png";
import driveActive from "/assets/frontend/images/microsite/location/driveActive.png";
import walk from "/assets/frontend/images/microsite/location/walk.png";
import walkActive from "/assets/frontend/images/microsite/location/walkActive.png";

import gallery1 from "/assets/frontend/images/microsite/anandam/gallery/actual/1.jpg";
import gallery2 from "/assets/frontend/images/microsite/anandam/gallery/actual/2.jpg";
import gallery3 from "/assets/frontend/images/microsite/anandam/gallery/actual/3.jpg";
import gallery4 from "/assets/frontend/images/microsite/anandam/gallery/actual/4.jpg";
import renderGallery1 from "/assets/frontend/images/microsite/gallery/render/gallery1.jpg";
import renderGallery2 from "/assets/frontend/images/microsite/gallery/render/gallery2.jpg";
import renderGallery3 from "/assets/frontend/images/microsite/gallery/render/gallery3.jpg"
import Specifications from '../components/microsite/HighlightsSpecifications/Specifications'
import Highlights from '../components/microsite/HighlightsSpecifications/Highlights'
import yoga from "/assets/frontend/images/microsite/amentities/icons/yoga.png";
import gymnasium from "/assets/frontend/images/microsite/amentities/icons/gymnasium.png";
import theater from "/assets/frontend/images/microsite/amentities/icons/theater.png";
import library from "/assets/frontend/images/microsite/amentities/icons/library.png";
import basketballBall from "/assets/frontend/images/microsite/amentities/icons/basketballBall.png";
import runningTrack from "/assets/frontend/images/microsite/amentities/icons/running-track.png";
import park from "/assets/frontend/images/microsite/amentities/icons/park.png";


function AnandamMicrosite() {

    // Amentities data 

    const customAmentitiesData = [
        { name: "swimming pool", image: swimmingPool },
        { name: "Yoga & Aerobics hall", image: yoga },
        { name: "Gymnasium", image: gymnasium },
        { name: "Mini home theater", image: theater },
        { name: "Library", image: library },
        { name: "Basketball", image: basketballBall },
        { name: "Jogging Track", image: runningTrack },
        { name: "park", image: park },
    ]

    // Pricelist data 

    const customPriceListData = [
        {
            area: "2 BHK",
            more: "DD/ 2 BR/Study/ Kitchen/2 Toilets/Bal. ",
            size: "1350 Sq. Ft",
            price: "₹ 86.13 Lacs*",
        },
        {
            area: "3 BHK ",
            more: "DD/ 3 BR/Kitchen/3 Toilets/Bal.",
            size: "1700 Sq. Ft",
            price: "₹ 1.08 CR*",
        },
        {
            area: "3 BHK + STUDY",
            more: "DD/ 3 BR/Study / Kitchen/4 Toilets/Bal.",
            size: "1840 Sq. Ft",
            price: "₹ 1.17 CR*",
        },
    ];

    // Master plan 

    const masterPlanData = [
        { image: master_plan_img, alt: "Master Plan" },
    ];

    // Plans data

    const unitData = {
        unit1: [
            {
                image: plan1,
                type: "3 BHK + STUDY + 4T",
                carpetArea: "109.68 Sqm. (1181 Sq. Ft)",
                balconyArea: "13.24 Sqm. (143 Sq. Ft)",
                buildArea: "131.45 Sqm. (1415 Sq.Ft)",
                totalArea: "170.94 Sqm. (1840 Sq.Ft)",
            },
        ],
        unit2: [
            {
                image: plan2,
                type: "3 BHK + 3T",
                carpetArea: "100.12 Sqm. (1078 Sq. Ft)",
                balconyArea: "13.26 Sqm. (143 Sq. Ft)",
                buildArea: "121.50 Sqm. (1308 Sq.Ft)",
                totalArea: "157.94 Sqm. (1700 Sq.Ft)",
            },
        ],
        unit34: [
            {
                image: plan3,
                type: "2 BHK + STUDY + 2T",
                carpetArea: "81.51 Sqm. (877 Sq. Ft)",
                balconyArea: "8.07 Sqm. (87 Sq. Ft)",
                buildArea: "96.37 Sqm. (1037 Sq.Ft)",
                totalArea: "125.42 Sqm. (1350 Sq.Ft)",
            },
        ],
    };

    // Highlishts data 

    const highlightsData = [
        "3 sides open corner plot",
        "Proposed Metro station in Sector-108",
        "Fully inhabited residential area.",
        "Schools, Hospitals, Malls etc. nearby On 70m wide & straight road from Kalindi Kunj, Situated alone of the most prime location of Noida.",
        "In close vicinity to Delhi (15 min. drive to DND & Kalandi Kunj)",
        "Close to Noida Expressway & Yamuna Expressway.",
        "Easy access to Metro Station, connecting to metro network all around NCR.",
    ];

    // Specifications data 

    // const specificationsData = [
    //     {
    //         title: "Master Bedroom(s)",
    //         items: [
    //             { image: "assets/frontend/images/microsite/specifications/mansory.png", description: "Walls: Gypsum Plaster/ Level Plast on RCC With Emulsion Paint" },
    //             { image: "assets/frontend/images/microsite/specifications/parquet.png", description: "Walls: Gypsum Plaster/ Level Plast on RCC With Emulsion Paint" },
    //         ],
    //     },
    //     {
    //         title: "Modular Kitchen",
    //         items: [
    //             { image: "assets/frontend/images/microsite/specifications/mansory2.png", description: "Walls: Gypsum Plaster/Level Plast on RCC With Emulsion Paint" },
    //             { image: "assets/frontend/images/microsite/specifications/mansory3.png", description: "Fixtures: High-Quality Branded CP Fittings" },
    //         ],
    //     },
    //     {
    //         title: "Living/Dining Room",
    //         items: [
    //             { image: "assets/frontend/images/microsite/specifications/mansory1.png", description: "Gypsum Plaster/ Level Plaster on RCC With Emulsion Paint" },
    //             { image: "assets/frontend/images/microsite/specifications/parquet2.png", description: "Floors: High Quality Vitrified Tile" },
    //             { image: "assets/frontend/images/microsite/specifications/door.png", description: "Floors: High Quality Vitrified Tile" },
    //             { image: "assets/frontend/images/microsite/specifications/roller.png", description: "Floors: High Quality Vitrified Tile" },
    //         ],
    //     },
    // ];

    const images = [
        { image: "assets/frontend/images/microsite/amentities/slider/slide1.png", alt: "Beautiful Scenery 1" },
        { image: "assets/frontend/images/microsite/amentities/slider/slide2.jpg", alt: "Beautiful Scenery 2" },
        { image: "assets/frontend/images/microsite/amentities/slider/slide3.jpg", alt: "Beautiful Scenery 3" },
        { image: "assets/frontend/images/microsite/amentities/slider/slide4.jpg", alt: "Beautiful Scenery 4" },
        { image: "assets/frontend/images/microsite/amentities/slider/slide5.jpg", alt: "Beautiful Scenery 5" },
        { image: "assets/frontend/images/microsite/amentities/slider/slide6.jpg", alt: "Beautiful Scenery 6" },
        { image: "assets/frontend/images/microsite/amentities/slider/slide7.jpg", alt: "Beautiful Scenery 7" },
      ];

    return (
        <>
            <HeroSection
                backgroundImage="assets/frontend/images/microsite/anandam/hero/hero.jpg"
                scrollText="SCROLL DOWN"
                sectionId="overview"
                initialScale={1.5}
                duration={2}
                bannerDetailsProps={{
                    heading: "ANANDAM",
                    location: "sector 107, noida",
                    description: "2 & 3 BHK LUXURY RESIDENTIAL APARTMENTS",
                  }}
            />

            <About
                imageSrc="assets/frontend/images/microsite/anandam/about/about.jpg"
                headingText="ABOUT"
                descriptionText="Anandam by Great Value Realty is an exquisite residential project located in Sector 107, Noida. Offering thoughtfully designed 2 and 3 BHK apartments, it combines luxury with convenience, providing residents with a serene and opulent living experience. "
                reverseWatermark={true}
            />

            <Amentities
                AmentitiesData={customAmentitiesData}
                headingText="Amenities"
                images={images}
            />
            <PriceList priceListData={customPriceListData} headingText="Price List" />
            <HighlightsSpecifications
                highlightsComponent={() => <Highlights title="Highlights" highlights={highlightsData} />}
                specificationsComponent={() => <Specifications title="Specifications" specifications altImage="assets/frontend/images/microsite/specifications/alt.jpg" />}
            />

            <Plans masterPlanData={masterPlanData} unitData={unitData} />;
            <LocationAdvantage
                locationImage={loaction}
                driveData={[
                    { image: 'assets/frontend/images/microsite/location/driveIcons/education.png', text: 'Amity university , botanic garden of india republic', time: '10 min' },
                    { image: 'assets/frontend/images/microsite/location/driveIcons/junction.png', text: 'Greater noida expressway, worlds of wonder', time: '15 min' },
                    { image: 'assets/frontend/images/microsite/location/driveIcons/golfing.png', text: 'Noida golf course, sandal suites by lemon tree hotels', time: '20 min' },
                    { image: 'assets/frontend/images/microsite/location/driveIcons/hospital.png', text: 'Yatharth super specialty hospital, max super speciality hospital', time: '30 min' },
                ]}
                walkData={[
                    { image: 'assets/frontend/images/microsite/location/walkIcons/mall.png', text: 'Starling Edge Mall, Fern Residency', time: '5 min' },
                    { image: 'assets/frontend/images/microsite/location/walkIcons/school.png', text: 'Pathway School Noida', time: '10 min' },
                    { image: 'assets/frontend/images/microsite/location/walkIcons/musicschool.png', text: 'Mayoor School of Music', time: '15 min' },
                    { image: 'assets/frontend/images/microsite/location/walkIcons/buildings.png', text: 'Oasis Noida', time: '20 min' },
                ]}
                driveTabIcon={drive}
                driveTabActiveIcon={driveActive}
                walkTabIcon={walk}
                walkTabActiveIcon={walkActive}
                lightboxImages={[{ image: loaction, alt: 'Location Map' }]}
                description="A well-connected haven in Noida’s prime locale, where every necessity is just around the corner, and every journey feels effortless."
            />

            <ProjectGallery
                actualImages={[gallery1, gallery2, gallery3, gallery4]}
                renderImages={[renderGallery1, renderGallery1]}
            />
        </>
    )
}

export default AnandamMicrosite;