import React from 'react'
import HeroSection from '../components/microsite/HeroSection';
import About from '../components/microsite/About';
import Amentities from '../components/microsite/Amentities';
import PriceList from '../components/microsite/PriceList';
import HighlightsSpecifications from '../components/microsite/HighlightsSpecifications/HighlightsSpecifications';
import Highlights from '../components/microsite/HighlightsSpecifications/Highlights';
import Specifications from '../components/microsite/HighlightsSpecifications/Specifications';
import Plans from '../components/microsite/Plans';
import LocationAdvantage from '../components/microsite/LocationAdvantage';
import ProjectGallery from '../components/microsite/ProjectGallery/ProjectGallery';
import banquet from "/assets/frontend/images/microsite/vilasa/amentities/icons/banquet.png";
import master_plan_img from "/assets/frontend/images/microsite/vilasa/plans/masterplan.jpg";
import plan1 from "/assets/frontend/images/microsite/gv/plans/floorPlans/plan1.jpg";
import plan2 from "/assets/frontend/images/microsite/anandam/plans/floorPlans/plan2.jpg";
import plan3 from "/assets/frontend/images/microsite/anandam/plans/floorPlans/plan3.jpg";
import loaction from "/assets/frontend/images/microsite/vilasa/location/location.jpg";
import drive from "/assets/frontend/images/microsite/location/drive.png";
import driveActive from "/assets/frontend/images/microsite/location/driveActive.png";
import walk from "/assets/frontend/images/microsite/location/walk.png";
import walkActive from "/assets/frontend/images/microsite/location/walkActive.png";
import renderGallery3 from "/assets/frontend/images/microsite/gallery/render/gallery3.jpg"
import club from "/assets/frontend/images/microsite/vilasa/amentities/icons/club.png";
import basketball from "/assets/frontend/images/microsite/vilasa/amentities/icons/basketball.png";
import gazebo from "/assets/frontend/images/microsite/vilasa/amentities/icons/gazebo.png";
import road from "/assets/frontend/images/microsite/vilasa/amentities/icons/road.png";
import guard from "/assets/frontend/images/microsite/vilasa/amentities/icons/guard.png";
import pitch from "/assets/frontend/images/microsite/vilasa/amentities/icons/pitch.png";
import badminton from "/assets/frontend/images/microsite/vilasa/amentities/icons/badminton.png";
import golf from "/assets/frontend/images/microsite/vilasa/amentities/icons/golf.png";

function VilasaMicrosite() {
    // Amentities data 

    const customAmentitiesData = [
        { name: "Entertainment club", image: club },
        { name: "Banquet facilities", image: banquet },
        { name: "Cricket pitch", image: pitch },
        { name: "Basketball court", image: basketball },
        { name: "Badminton court", image: badminton },
        { name: "10m wide arterial roads", image: road },
        { name: "Gated community", image: guard },
        { name: "European style gazebo", image: gazebo },
        { name: "Golf putting greens", image: golf },
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
        "Customizable Plots –Design your dream villa or Stilt + 4 floors.",
        "Gated Community – Secure, well-planned, and exclusive living.",
        "Premium Amenities – Clubhouse, banquet, sports courts, and golf greens.",
        "Great Connectivity – Near Aravalli Hills and Damdama Lake.",
        "Scenic Surroundings –122-172 sq. yds.",       
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
        { image: "assets/frontend/images/microsite/vilasa/amentities/slider/slide1.jpg", alt: "Entertainment club" },
        { image: "assets/frontend/images/microsite/vilasa/amentities/slider/slide2.jpg", alt: "Banquet facilities" },
        { image: "assets/frontend/images/microsite/vilasa/amentities/slider/slide3.jpg", alt: "Cricket pitch" },
        { image: "assets/frontend/images/microsite/vilasa/amentities/slider/slide4.jpg", alt: "Badminton court" },
      
        { image: "assets/frontend/images/microsite/vilasa/amentities/slider/slide5.jpg", alt: "10m wide arterial roads" },
        { image: "assets/frontend/images/microsite/vilasa/amentities/slider/slide6.jpg", alt: "Gated community" },
        { image: "assets/frontend/images/microsite/vilasa/amentities/slider/slide7.jpg", alt: "European style gazebo" },
        { image: "assets/frontend/images/microsite/vilasa/amentities/slider/slide8.jpg", alt: "Golf putting greens" },
        { image: "assets/frontend/images/microsite/vilasa/amentities/slider/slide9.jpg", alt: "Basketball court" },
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
                    heading: "VILASA",
                    location: "AT SECTOR 6, SOHNA",
                    description: "LUXURY RESIDENTIAL PLOTS",
                }}
            />

            <About
                imageSrc="assets/frontend/images/microsite/gv/about/about.jpg"
                headingText="ABOUT US"
                descriptionText="Vilasa offers a rare opportunity to own premium residential plots in Sector 6, Sohna. Designed for investors and homeowners alike, it provides the freedom to create a personalized living space while promising high returns in a rapidly growing location."
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
                    { image: 'assets/frontend/images/microsite/vilasa/location/icons/school.png', text: 'Bal Vikas Vidyalaya, m -376 masjid moth behind NDSE part 2, New Delhi, Delhi 110049', time: '5 min' },
                    { image: 'assets/frontend/images/microsite/vilasa/location/icons/school.png', text: 'Fr. Agnel School', time: '3 min' },
                    { image: 'assets/frontend/images/microsite/vilasa/location/icons/college.png', text: 'Gargi College, Siri Fort Rd, Siri Fort Institutional Area, Siri Fort, New Delhi, Delhi 110049', time: '5 min' },
                    { image: 'assets/frontend/images/microsite/vilasa/location/icons/institution.png', text: 'All India Institute Of Medical Sciences Delhi', time: '11 min' },
                    { image: 'assets/frontend/images/microsite/vilasa/location/icons/hospital.png', text: 'Safdarjung Hospital', time: '11 min' },
                    { image: 'assets/frontend/images/microsite/vilasa/location/icons/park.png', text: 'Gulmohar Park', time: '5 min' },
                    { image: 'assets/frontend/images/microsite/vilasa/location/icons/park.png', text: 'Deer Park', time: '16 min' },
                    { image: 'assets/frontend/images/microsite/vilasa/location/icons/shopping.png', text: 'Green Park Market', time: '13 min' },
                    { image: 'assets/frontend/images/microsite/vilasa/location/icons/metro.png', text: 'Green Park Metro Station', time: '11 min' },
                    { image: 'assets/frontend/images/microsite/vilasa/location/icons/hauzkhas.png', text: 'Hauz Khas Village', time: '14 min' },
                    { image: 'assets/frontend/images/microsite/vilasa/location/icons/auditorium.png', text: 'Siri Fort Auditorium', time: '5 min' },
                    { image: 'assets/frontend/images/microsite/vilasa/location/icons/flights.png', text: 'IGI airport', time: '55 min' },
                ]}
                walkData={[
                    { image: 'assets/frontend/images/microsite/vilasa/location/icons/school.png', text: 'Bal Vikas Vidyalaya, m -376 masjid moth behind NDSE part 2, New Delhi, Delhi 110049', time: '9 min' },
                    { image: 'assets/frontend/images/microsite/vilasa/location/icons/school.png', text: 'Fr. Agnel School', time: '11 min' },
                    { image: 'assets/frontend/images/microsite/vilasa/location/icons/college.png', text: 'Gargi College, Siri Fort Rd, Siri Fort Institutional Area, Siri Fort, New Delhi, Delhi 110049', time: '14 min' },
                    { image: 'assets/frontend/images/microsite/vilasa/location/icons/institution.png', text: 'All India Institute Of Medical Sciences Delhi', time: '24 min' },
                    { image: 'assets/frontend/images/microsite/vilasa/location/icons/hospital.png', text: 'Safdarjung Hospital', time: '35 min' },
                    { image: 'assets/frontend/images/microsite/vilasa/location/icons/park.png', text: 'Gulmohar Park', time: '15 min' },                
                    { image: 'assets/frontend/images/microsite/vilasa/location/icons/auditorium.png', text: 'Siri Fort Auditorium', time: '15 min' },                   
                ]}
                driveTabIcon={drive}
                driveTabActiveIcon={driveActive}
                walkTabIcon={walk}
                walkTabActiveIcon={walkActive}
                lightboxImages={[{ image: loaction, alt: 'Location Map' }]}
                description="Vilasa is nestled on the Gurgaon-Sohna highway, offering a perfect blend of urban convenience and natural tranquility. Just 15 minutes from Rajiv Chowk and 45 minutes from IGI Airport, it ensures easy access to key commercial and recreational hubs."
            />

            <ProjectGallery
                actualImages={[renderGallery3]}
                renderImages={[renderGallery3]}
            />
        </>
    )
}

export default VilasaMicrosite
