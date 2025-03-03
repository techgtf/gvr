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
import loaction from "/assets/frontend/images/microsite/gv/location/location.webp";
import drive from "/assets/frontend/images/microsite/location/drive.webp";
import driveActive from "/assets/frontend/images/microsite/location/driveActive.webp";
import walk from "/assets/frontend/images/microsite/location/walk.webp";
import walkActive from "/assets/frontend/images/microsite/location/walkActive.webp";
import gallery1 from "/assets/frontend/images/microsite/gv/gallery/gallery1.webp"
import gallery2 from "/assets/frontend/images/microsite/gv/gallery/gallery2.webp"
import gallery3 from "/assets/frontend/images/microsite/gv/gallery/gallery3.webp"
import gallery4 from "/assets/frontend/images/microsite/gv/gallery/gallery4.webp"
import gallery5 from "/assets/frontend/images/microsite/gv/gallery/gallery5.webp"
import gallery6 from "/assets/frontend/images/microsite/gv/gallery/gallery6.webp"
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

import aboutImg from "/assets/frontend/images/microsite/gv/about/about.webp"
// import heroImg from "/assets/frontend/images/microsite/gv/hero/hero.webp"
// import heroMobImg from "/assets/frontend/images/microsite/gv/hero/hero.webp"

// location drive and walk images 
import school from "/assets/frontend/images/microsite/gv/location/icons/school.webp"
import college from "/assets/frontend/images/microsite/gv/location/icons/college.webp"
import park from "/assets/frontend/images/microsite/gv/location/icons/park.webp"
import auditorium from "/assets/frontend/images/microsite/gv/location/icons/auditorium.webp"
import institution from "/assets/frontend/images/microsite/gv/location/icons/institution.webp"
import hospital from "/assets/frontend/images/microsite/gv/location/icons/hospital.webp"
import metro from "/assets/frontend/images/microsite/gv/location/icons/metro.webp"
import shopping from "/assets/frontend/images/microsite/gv/location/icons/shopping.webp"
import hauzkhas from "/assets/frontend/images/microsite/gv/location/icons/hauzkhas.webp"
import flights from "/assets/frontend/images/microsite/gv/location/icons/flights.webp"
import { Helmet } from 'react-helmet'

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
                totalArea: "1937 Sq Ft",
            },
            {
                image: plan2,
                type: "First Floor Civil Plan",
                totalArea: "1937 Sq Ft",
            },
        ],

    };

    // Highlishts data 

    const highlightsData = [
        "Situated at 31 Uday Park, New Delhi, offering unmatched connectivity and prestige.",
        "Italian marble flooring, false ceilings, and designer finishes for a sophisticated ambiance.",
        "Built with high-quality materials ensuring, safety and durability.",
        "Italian-style kitchen with stainless steel accessories, chimney, and geyser.",
        "High-end fittings, toughened glass partitions, and geysers are available in all bathrooms.",
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
                { image: "assets/frontend/images/microsite/gv/specifications/customization.webp", description: "Buyer preferences are accommodated with flexible designs." },
            ],
        },
    ];

    // Amentities SLider Images 

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


    const galleryData = [
        {
            "image": gallery1,
            "alt": 'Luxurious living room'
        },
        {
            "image": gallery2,
            "alt": 'Residential garden'
        },
        {
            "image": gallery3,
            "alt": 'Modern luxury kitchen'
        },
        {
            "image": gallery4,
            "alt": 'Modern luxury living room'
        },
        {
            "image": gallery5,
            "alt": 'Elegant luxury living room'
        },
        {
            "image": gallery6,
            "alt": 'Modern minimalist kitchen'
        },
    ]



    return (
        <>

            <Helmet>
                <title>Great Value Casa Uday | Modern Homes in Uday Park</title>
                <meta name="keywords" content="Great Value realty, Great Value Realty Casa Uday, Casa Uday Delhi, Luxury apartments Casa Uday Delhi , Great Value Realty projects Delhi NCR, Casa Uday residential project" />
                <meta name="description" content="Explore Great Value Realty Casa 31 Uday Park, New Delhi – luxury modern residences offering eco-friendly designs and spacious living spaces." />
                <meta name="google-site-verification" content="Ma-arPYmEe7u20NJ-jsuiHjD1p2HSShiEPD4m8s3bL8" />
                <link rel="canonical" href="https://greatvaluerealty.com/casa-uday" />
                <meta name="distribution" content="Global" />
                <meta name="Language" content="English" />
                <meta name="doc-type" content="Public" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Great Value Realty 31 Casa Uday Park" />
                <meta name="googlebot" content="all, index, follow" />
                <meta name="YahooSeeker" content="all, index, follow" />
                <meta name="msnbot" content="all, index, follow" />
                <meta name="HandheldFriendly" content="true" />
                <meta name="revisit-after" content="1 days" />
                <meta name="rating" content="safe for kids" />
                <meta name="expires" content="never" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Great Value Casa Uday | Modern Homes in Uday Park" />
                <meta property="og:description" content="Explore Casa Uday by Great Value in Uday Park, New Delhi – luxurious residences designed for comfort, convenience & modern living." />
                <meta property="og:url" content="https://greatvaluerealty.com/casa-uday" />
                <meta property="og:site_name" content="Great Value Realty 31 Casa Uday Park" />
                <meta property="og:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.webp" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@GreatValueGroup" />
                <meta name="twitter:title" content="Great Value Casa Uday | Modern Homes in Uday Park" />
                <meta name="twitter:description" content="Explore Casa Uday by Great Value in Uday Park, New Delhi – luxurious residences designed for comfort, convenience & modern living." />
                <meta name="twitter:creator" content="@GreatValueGroup" />
                <meta name="twitter:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.webp" />
                {/* <!--End of Twitter TH data --> */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Great Value Realty Casa 31 Uday Park, New Delhi",
                        "alternateName": "Great Value Realty Casa Uday",
                        "url": "https://greatvaluerealty.com/casa-uday",
                        "logo": "https://greatvaluerealty.com/assets/frontend/images/logo.webp",
                        "contactPoint": [{
                            "@type": "ContactPoint",
                            "telephone": "+91 7777079770",
                            "contactType": "customer service",
                            "areaServed": "IN",
                            "availableLanguage": "en"
                        }]
                    })}
                </script>
            </Helmet>
            <HeroSection
                desktopBg="https://res.cloudinary.com/dx3l6id8r/image/upload/f_auto,q_auto/v1739342334/hero_wnps4k.webp"
                mobileBg="https://res.cloudinary.com/dx3l6id8r/image/upload/f_auto,q_auto/v1739342334/hero_wnps4k.webp"
                scrollText="SCROLL DOWN"
                sectionId="overview"
                initialScale={1.5}
                duration={2}
                bannerDetailsProps={{
                    heading: "Casa Uday",
                    location: "31, Uday Park, New Delhi",
                    description: "LUXURY MODERN BUILDERS FLOOR",
                }}
            />

            <About
                imageSrc={aboutImg}
                headingText="ABOUT US"
                descriptionText="CASA UDAY, an initiative by the Great Value Group, presents luxury modern builder floors at 31 Uday Park, New Delhi. Emphasizing eco-friendly designs, these residences offer abundant natural light and contemporary living spaces, ensuring a harmonious blend of comfort and sustainability."
                reverseWatermark={true}
                alt={'Stylish living and dining area'}
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
                    { image: school, text: 'Fr. Agnel School', time: '3 min' },
                    { image: school, text: 'Bal Vikas Vidyalaya, m -376 masjid moth behind NDSE part 2, New Delhi, Delhi 110049', time: '5 min' },
                    { image: college, text: 'Gargi College, Siri Fort Rd, Siri Fort Institutional Area, Siri Fort, New Delhi, Delhi 110049', time: '5 min' },
                    { image: park, text: 'Gulmohar Park', time: '5 min' },
                    { image: auditorium, text: 'Siri Fort Auditorium', time: '5 min' },
                    { image: institution, text: 'All India Institute Of Medical Sciences Delhi', time: '11 min' },
                    { image: hospital, text: 'Safdarjung Hospital', time: '11 min' },
                    { image: metro, text: 'Green Park Metro Station', time: '11 min' },
                    { image: shopping, text: 'Green Park Market', time: '13 min' },
                    { image: hauzkhas, text: 'Hauz Khas Village', time: '14 min' },
                    { image: park, text: 'Deer Park', time: '16 min' },
                    { image: flights, text: 'IGI airport', time: '55 min' },
                ]}
                walkData={[
                    { image: school, text: 'Bal Vikas Vidyalaya, m -376 masjid moth behind NDSE part 2, New Delhi, Delhi 110049', time: '9 min' },
                    { image: school, text: 'Fr. Agnel School', time: '11 min' },
                    { image: college, text: 'Gargi College, Siri Fort Rd, Siri Fort Institutional Area, Siri Fort, New Delhi, Delhi 110049', time: '14 min' },
                    { image: park, text: 'Gulmohar Park', time: '15 min' },
                    { image: auditorium, text: 'Siri Fort Auditorium', time: '15 min' },
                    { image: institution, text: 'All India Institute Of Medical Sciences Delhi', time: '24 min' },
                    { image: hospital, text: 'Safdarjung Hospital', time: '35 min' },

                ]}
                driveTabIcon={drive}
                driveTabActiveIcon={driveActive}
                walkTabIcon={walk}
                walkTabActiveIcon={walkActive}
                lightboxImages={[{ image: loaction, alt: 'Location Map' }]}
                description="A well-connected haven in Delhi's prime locale, where every necessity is just around the corner, and every journey feels effortless."
            />

            <ProjectGallery
                actualImages={galleryData}
            />
        </>
    )
}

export default GvHomesMicrosite
