import React from 'react'
import HeroSection from '../components/microsite/HeroSection'
import About from '../components/microsite/About'
import Amentities from '../components/microsite/Amentities'
import PriceList from '../components/microsite/PriceList'
import HighlightsSpecifications from '../components/microsite/HighlightsSpecifications/HighlightsSpecifications'
import Plans from '../components/microsite/Plans'
import LocationAdvantage from '../components/microsite/LocationAdvantage'
import ProjectGallery from '../components/microsite/ProjectGallery/ProjectGallery'
import power from "/assets/frontend/images/microsite/gv/amentities/icons/power.webp";
import master_plan_img from "/assets/frontend/images/microsite/gv/plans/masterplan.webp";
import plan1 from "/assets/frontend/images/microsite/gv/plans/floorPlans/plan1.webp";
import plan2 from "/assets/frontend/images/microsite/gv/plans/floorPlans/plan2.webp";
import plan3 from "/assets/frontend/images/microsite/anandam/plans/floorPlans/plan3.webp";
import loaction from "/assets/frontend/images/microsite/gv/location/location.webp";
import drive from "/assets/frontend/images/microsite/location/drive.webp";
import driveActive from "/assets/frontend/images/microsite/location/driveActive.webp";
import walk from "/assets/frontend/images/microsite/location/walk.webp";
import walkActive from "/assets/frontend/images/microsite/location/walkActive.webp";
import renderGallery3 from "/assets/frontend/images/microsite/gallery/render/gallery3.jpg"
import Specifications from '../components/microsite/HighlightsSpecifications/Specifications'
import Highlights from '../components/microsite/HighlightsSpecifications/Highlights'
import ac from "/assets/frontend/images/microsite/gv/amentities/icons/ac.webp";
import lift from "/assets/frontend/images/microsite/gv/amentities/icons/lift.webp";
import ventillation from "/assets/frontend/images/microsite/gv/amentities/icons/ventillation.webp";
import community from "/assets/frontend/images/microsite/gv/amentities/icons/community.webp";
import terrace from "/assets/frontend/images/microsite/gv/amentities/icons/terrace.webp";
import parking from "/assets/frontend/images/microsite/gv/amentities/icons/parking.webp";
import servant from "/assets/frontend/images/microsite/gv/amentities/icons/servant.webp";
import { useLocation } from 'react-router-dom'

function GvHomesMicrosite() {
    const location = useLocation();

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
                type: "Ground Floor Civil Plan",
                carpetArea: "---",
                balconyArea: "---",
                buildArea: "---",
                totalArea: "1937 Sq. Ft.",
            },
            {
                image: plan2,
                type: "First Floor Civil Plan",
                carpetArea: "---",
                balconyArea: "---",
                buildArea: "---",
                totalArea: "1937 Sq. Ft.",
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
                { image: "assets/frontend/images/microsite/gv/specifications/structure.webp", description: " Earthquake-resistant design with high-quality materials." },
            ],
        },
        {
            title: "Flooring",
            items: [
                { image: "assets/frontend/images/microsite/gv/specifications/flooring.webp", description: "Italian marble in living, dining, bedrooms & kitchens." },
            ],
        },
        {
            title: "Walls & Paint",
            items: [
                { image: "assets/frontend/images/microsite/gv/specifications/walls-paints.webp", description: " P.O.P. punning, velvet/textured paint, false ceilings." },
            ],
        },
        {
            title: "Woodwork",
            items: [
                { image: "assets/frontend/images/microsite/gv/specifications/woodworking.webp", description: "Waterproof ply doors, premium wooden entrance, ample storage." },
            ],
        },
        {
            title: "Bathrooms",
            items: [
                { image: "assets/frontend/images/microsite/gv/specifications/bathroom.webp", description: "Designer fittings, toughened glass partitions, geysers, exhaust fans." },
            ],
        },
        {
            title: "Kitchen",
            items: [
                { image: "assets/frontend/images/microsite/gv/specifications/kitchen.webp", description: "Modular Italian-style kitchen, chimney, geyser, LPG pipeline." },
            ],
        },
        {
            title: "Water Supply",
            items: [
                { image: "assets/frontend/images/microsite/gv/specifications/water-pipe.webp", description: "24/7 provision with underground & rooftop tanks." },
            ],
        },
        {
            title: "Electrical",
            items: [
                { image: "assets/frontend/images/microsite/gv/specifications/electricity.webp", description: "Fire-retardant wiring, LED lighting, Schindler lift, power backup." },
            ],
        },
        {
            title: "Special Features",
            items: [
                { image: "assets/frontend/images/microsite/gv/specifications/features.webp", description: "Spacious balconies, landscaped basement, modern façade." },
            ],
        },
        {
            title: "Customization",
            items: [
                { image: "assets/frontend/images/microsite/gv/specifications/customization.webp", description: "Buyer preferences accommodated with flexible designs." },
            ],
        },
    ];

    // Images 

    const images = [
        { image: "assets/frontend/images/microsite/gv/amentities/slider/slide1.webp", alt: "Split Air Conditioners" },
        { image: "assets/frontend/images/microsite/gv/amentities/slider/slide2.webp", alt: "Power BAckup    " },
        { image: "assets/frontend/images/microsite/gv/amentities/slider/slide3.webp", alt: "Lift" },
        { image: "assets/frontend/images/microsite/gv/amentities/slider/slide4.webp", alt: "Ventilation & Natural Light" },
        { image: "assets/frontend/images/microsite/gv/amentities/slider/slide5.webp", alt: "Community Maintenance" },
        { image: "assets/frontend/images/microsite/gv/amentities/slider/slide6.webp", alt: "Terrace" },
        { image: "assets/frontend/images/microsite/gv/amentities/slider/slide7.webp", alt: "Basement Car Parking" },
        { image: "assets/frontend/images/microsite/gv/amentities/slider/slide8.webp", alt: "Servant Quarters" },
    ];

    return (
        <>
            <HeroSection
                 desktopBg="assets/frontend/images/microsite/gv/hero/hero.webp"
                mobileBg="assets/frontend/images/microsite/gv/hero/hero.webp"
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
                imageSrc="assets/frontend/images/microsite/gv/about/about.webp"
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
            key={location.pathname} 
                highlightsComponent={() => <Highlights title="Highlights" highlights={highlightsData} />}
                specificationsComponent={() => <Specifications title="Specifications" specifications={specificationsData} />}
            />

            <Plans masterPlanData={masterPlanData} unitData={unitData} />

            <LocationAdvantage
                locationImage={loaction}
                driveData={[
                    { image: 'assets/frontend/images/microsite/gv/location/icons/school.webp', text: 'Fr. Agnel School', time: '3 min' },
                    { image: 'assets/frontend/images/microsite/gv/location/icons/school.webp', text: 'Bal Vikas Vidyalaya, m -376 masjid moth behind NDSE part 2, New Delhi, Delhi 110049', time: '5 min' },
                    { image: 'assets/frontend/images/microsite/gv/location/icons/college.webp', text: 'Gargi College, Siri Fort Rd, Siri Fort Institutional Area, Siri Fort, New Delhi, Delhi 110049', time: '5 min' },
                    { image: 'assets/frontend/images/microsite/gv/location/icons/park.webp', text: 'Gulmohar Park', time: '5 min' },
                    { image: 'assets/frontend/images/microsite/gv/location/icons/auditorium.webp', text: 'Siri Fort Auditorium', time: '5 min' },
                    { image: 'assets/frontend/images/microsite/gv/location/icons/institution.webp', text: 'All India Institute Of Medical Sciences Delhi', time: '11 min' },
                    { image: 'assets/frontend/images/microsite/gv/location/icons/hospital.webp', text: 'Safdarjung Hospital', time: '11 min' },
                    { image: 'assets/frontend/images/microsite/gv/location/icons/metro.webp', text: 'Green Park Metro Station', time: '11 min' },
                    { image: 'assets/frontend/images/microsite/gv/location/icons/shopping.webp', text: 'Green Park Market', time: '13 min' },
                    { image: 'assets/frontend/images/microsite/gv/location/icons/hauzkhas.webp', text: 'Hauz Khas Village', time: '14 min' },
                    { image: 'assets/frontend/images/microsite/gv/location/icons/park.webp', text: 'Deer Park', time: '16 min' },
                    { image: 'assets/frontend/images/microsite/gv/location/icons/flights.webp', text: 'IGI airport', time: '55 min' },
                ]}
                walkData={[
                    { image: 'assets/frontend/images/microsite/gv/location/icons/school.webp', text: 'Bal Vikas Vidyalaya, m -376 masjid moth behind NDSE part 2, New Delhi, Delhi 110049', time: '9 min' },
                    { image: 'assets/frontend/images/microsite/gv/location/icons/school.webp', text: 'Fr. Agnel School', time: '11 min' },
                    { image: 'assets/frontend/images/microsite/gv/location/icons/college.webp', text: 'Gargi College, Siri Fort Rd, Siri Fort Institutional Area, Siri Fort, New Delhi, Delhi 110049', time: '14 min' },
                    { image: 'assets/frontend/images/microsite/gv/location/icons/park.webp', text: 'Gulmohar Park', time: '15 min' },
                    { image: 'assets/frontend/images/microsite/gv/location/icons/auditorium.webp', text: 'Siri Fort Auditorium', time: '15 min' },
                    { image: 'assets/frontend/images/microsite/gv/location/icons/institution.webp', text: 'All India Institute Of Medical Sciences Delhi', time: '24 min' },
                    { image: 'assets/frontend/images/microsite/gv/location/icons/hospital.webp', text: 'Safdarjung Hospital', time: '35 min' },
                   
                ]}
                driveTabIcon={drive}
                driveTabActiveIcon={driveActive}
                walkTabIcon={walk}
                walkTabActiveIcon={walkActive}
                lightboxImages={[{ image: loaction, alt: 'Location Map' }]}
                description="A well-connected haven in Delhi's prime locale, where every necessity is just around the corner, and every journey feels effortless."
            />

            <ProjectGallery
                actualImages={[renderGallery3]}
                renderImages={[renderGallery3]}
            />
        </>
    )
}

export default GvHomesMicrosite
