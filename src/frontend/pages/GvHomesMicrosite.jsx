import React from 'react'
import HeroSection from '../components/microsite/HeroSection'
import About from '../components/microsite/About'
import Amentities from '../components/microsite/Amentities'
import PriceList from '../components/microsite/PriceList'
import HighlightsSpecifications from '../components/microsite/HighlightsSpecifications/HighlightsSpecifications'
import Plans from '../components/microsite/Plans'
import LocationAdvantage from '../components/microsite/LocationAdvantage'
import ProjectGallery from '../components/microsite/ProjectGallery/ProjectGallery'
import power from "/assets/frontend/images/microsite/gv/amentities/icons/power.png";
import master_plan_img from "/assets/frontend/images/microsite/gv/plans/masterplan.jpg";
import plan1 from "/assets/frontend/images/microsite/gv/plans/floorPlans/plan1.jpg";
import plan2 from "/assets/frontend/images/microsite/anandam/plans/floorPlans/plan2.jpg";
import plan3 from "/assets/frontend/images/microsite/anandam/plans/floorPlans/plan3.jpg";
import loaction from "/assets/frontend/images/microsite/location/location.png";
import drive from "/assets/frontend/images/microsite/location/drive.png";
import driveActive from "/assets/frontend/images/microsite/location/driveActive.png";
import walk from "/assets/frontend/images/microsite/location/walk.png";
import walkActive from "/assets/frontend/images/microsite/location/walkActive.png";
import renderGallery3 from "/assets/frontend/images/microsite/gallery/render/gallery3.jpg"
import Specifications from '../components/microsite/HighlightsSpecifications/Specifications'
import Highlights from '../components/microsite/HighlightsSpecifications/Highlights'
import ac from "/assets/frontend/images/microsite/gv/amentities/icons/ac.png";
import lift from "/assets/frontend/images/microsite/gv/amentities/icons/lift.png";
import ventillation from "/assets/frontend/images/microsite/gv/amentities/icons/ventillation.png";
import community from "/assets/frontend/images/microsite/gv/amentities/icons/community.png";
import terrace from "/assets/frontend/images/microsite/gv/amentities/icons/terrace.png";
import parking from "/assets/frontend/images/microsite/gv/amentities/icons/parking.png";
import servant from "/assets/frontend/images/microsite/gv/amentities/icons/servant.png";

function GvHomesMicrosite() {

    // Amentities data 

    const customAmentitiesData = [
        { name: "Split Air-Conditioners", image: ac },
        { name: "Power Backup", image: power },
        { name: "Terrace", image: terrace },
        { name: "Basement Car Parking", image: parking },
        { name: "Ventilation & Natural Light", image: ventillation },
        { name: "Community Maintenance", image: community },
        { name: "Lift", image: lift },
        { name: "Servant Quarters", image: servant },
    ]

    // Pricelist data 

    // const customPriceListData = [
    //     {
    //         area: "1 BHK",
    //         more: "Living room/Kitchen/1 Toilet/Balcony",
    //         size: "850 sq.ft",
    //         price: "₹ 45 Lacs*",
    //     },
    //     {
    //         area: "2 BHK ",
    //         more: "Living room/2 BR/Kitchen/2 Toilets/Balcony",
    //         size: "1250 sq.ft",
    //         price: "₹ 80 Lacs*",
    //     },
    // ];

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
        "Situated in 31 Uday Park, New Delhi, offering unmatched connectivity and prestige.",
        "Italian marble flooring, false ceilings, and designer finishes for a sophisticated ambiance.",
        "Built with high-quality materials ensuring safety and durability.",
        "Italian-style kitchen with stainless steel accessories, chimney, and geyser.",
        "High-end fittings, toughened glass partitions, and geysers in all bathrooms.",
    ];

    // Specifications data 

    const specificationsData = [
        {
            title: "Structure",
            items: [
                { image: "assets/frontend/images/microsite/anandam/specifications/structure.png", description: " Earthquake-resistant design with high-quality materials." },
            ],
        },
        {
            title: "Flooring",
            items: [
                { image: "assets/frontend/images/microsite/anandam/specifications/flooring.png", description: "Italian marble in living, dining, bedrooms & kitchens." },
            ],
        },
        {
            title: "Walls & Paint",
            items: [
                { image: "assets/frontend/images/microsite/anandam/specifications/walls-paints.png", description: " P.O.P. punning, velvet/textured paint, false ceilings." },
            ],
        },
        {
            title: "Woodwork",
            items: [
                { image: "assets/frontend/images/microsite/anandam/specifications/woodworking.png", description: "Waterproof ply doors, premium wooden entrance, ample storage." },
            ],
        },
        {
            title: "Bathrooms",
            items: [
                { image: "assets/frontend/images/microsite/anandam/specifications/bathroom.png", description: "Designer fittings, toughened glass partitions, geysers, exhaust fans." },
            ],
        },
        {
            title: "Kitchen",
            items: [
                { image: "assets/frontend/images/microsite/anandam/specifications/kitchen.png", description: "Modular Italian-style kitchen, chimney, geyser, LPG pipeline." },
            ],
        },
        {
            title: "Water Supply",
            items: [
                { image: "assets/frontend/images/microsite/anandam/specifications/water-pipe.png", description: "24/7 provision with underground & rooftop tanks." },
            ],
        },
        {
            title: "Electrical",
            items: [
                { image: "assets/frontend/images/microsite/anandam/specifications/electricity.png", description: "Fire-retardant wiring, LED lighting, Schindler lift, power backup." },
            ],
        },
        {
            title: "Special Features",
            items: [
                { image: "assets/frontend/images/microsite/anandam/specifications/features.png", description: "Spacious balconies, landscaped basement, modern façade." },
            ],
        },
        {
            title: "Customization",
            items: [
                { image: "assets/frontend/images/microsite/anandam/specifications/customization.png", description: "Buyer preferences accommodated with flexible designs." },
            ],
        },
    ];

    // Images 

    const images = [
        { image: "assets/frontend/images/microsite/gv/amentities/slider/slide1.jpg", alt: "Split Air Conditioners" },
        { image: "assets/frontend/images/microsite/gv/amentities/slider/slide2.jpg", alt: "Power BAckup    " },
        { image: "assets/frontend/images/microsite/gv/amentities/slider/slide3.jpg", alt: "Lift" },
        { image: "assets/frontend/images/microsite/gv/amentities/slider/slide4.jpg", alt: "Ventilation & Natural Light" },
        { image: "assets/frontend/images/microsite/gv/amentities/slider/slide5.jpg", alt: "Community Maintenance" },
        { image: "assets/frontend/images/microsite/gv/amentities/slider/slide6.jpg", alt: "Terrace" },
        { image: "assets/frontend/images/microsite/gv/amentities/slider/slide7.jpg", alt: "Basement Car Parking" },
        { image: "assets/frontend/images/microsite/gv/amentities/slider/slide8.jpg", alt: "Servant Quarters" },
    ];

    return (
        <>
            <HeroSection
                backgroundImage="assets/frontend/images/microsite/gv/hero/hero.jpg"
                scrollText="SCROLL DOWN"
                sectionId="overview"
                initialScale={1.5}
                duration={2}
                bannerDetailsProps={{
                    heading: "GV HOMES",
                    location: "31, Uday Park, New Delhi",
                    description: "LUXURY MODERN BUILDERS FLOOR",
                }}
            />

            <About
                imageSrc="assets/frontend/images/microsite/gv/about/about.jpg"
                headingText="ABOUT US"
                descriptionText="GV HOMEZ, an initiative by the Great Value Group, presents luxury modern builder floors at 31 Uday Park, New Delhi. Emphasizing eco-friendly designs, these residences offer abundant natural light and contemporary living spaces, ensuring a harmonious blend of comfort and sustainability."
                reverseWatermark={true}
            />

            <Amentities
                AmentitiesData={customAmentitiesData}
                headingText="Amenities"
                images={images}
            />

            <PriceList priceListData headingText="Price List" />

            <HighlightsSpecifications
                highlightsComponent={() => <Highlights title="Highlights" highlights={highlightsData} />}
                specificationsComponent={() => <Specifications title="Specifications" specifications={specificationsData} />}
            />

            <Plans masterPlanData={masterPlanData} unitData={unitData} />

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
                actualImages={[renderGallery3]}
                renderImages={[renderGallery3]}
            />
        </>
    )
}

export default GvHomesMicrosite
