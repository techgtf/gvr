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
import master_plan_img from "/assets/frontend/images/microsite/vilasa/plans/masterplan.webp";
import loaction from "/assets/frontend/images/microsite/vilasa/location/location.webp";
import drive from "/assets/frontend/images/microsite/location/drive.png";
import driveActive from "/assets/frontend/images/microsite/location/driveActive.png";
import walk from "/assets/frontend/images/microsite/location/walk.png";
import walkActive from "/assets/frontend/images/microsite/location/walkActive.png";
import actual1 from "/assets/frontend/images/microsite/vilasa/gallery/actual/actual1.webp"
import actual2 from "/assets/frontend/images/microsite/vilasa/gallery/actual/actual2.webp"
import actual3 from "/assets/frontend/images/microsite/vilasa/gallery/actual/actual3.webp"
import actual4 from "/assets/frontend/images/microsite/vilasa/gallery/actual/actual4.webp"
import render1 from "/assets/frontend/images/microsite/vilasa/gallery/render/render1.jpg"
import club from "/assets/frontend/images/microsite/vilasa/amentities/icons/club.png";
import basketball from "/assets/frontend/images/microsite/vilasa/amentities/icons/basketball.png";
import gazebo from "/assets/frontend/images/microsite/vilasa/amentities/icons/gazebo.png";
import road from "/assets/frontend/images/microsite/vilasa/amentities/icons/road.png";
import guard from "/assets/frontend/images/microsite/vilasa/amentities/icons/guard.png";
import pitch from "/assets/frontend/images/microsite/vilasa/amentities/icons/pitch.png";
import badminton from "/assets/frontend/images/microsite/vilasa/amentities/icons/badminton.png";
import golf from "/assets/frontend/images/microsite/vilasa/amentities/icons/golf.png";
import aboutImg from "/assets/frontend/images/microsite/vilasa/about/about.webp"
import heroImg from "/assets/frontend/images/microsite/vilasa/hero/hero.webp"
import heroMobImg from "/assets/frontend/images/microsite/vilasa/hero/hero.webp"

// location drive and walk images 
import hospital from "/assets/frontend/images/microsite/vilasa/location/icons/hospital.png"
import college from "/assets/frontend/images/microsite/vilasa/location/icons/college.png"
import school from "/assets/frontend/images/microsite/vilasa/location/icons/school.png"
import landmark from "/assets/frontend/images/microsite/vilasa/location/icons/landmark.png"
import resort from "/assets/frontend/images/microsite/vilasa/location/icons/resort.png"
import metro from "/assets/frontend/images/microsite/vilasa/location/icons/metro.png"
import airport from "/assets/frontend/images/microsite/vilasa/location/icons/airport.png"
import { useLocation } from 'react-router-dom';

function VilasaMicrosite() {
    const location = useLocation();
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


    const masterPlanData = [
        { image: master_plan_img, alt: "Master Plan" },
    ];

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
            title: "Plot Sizes",
            items: [
                { image: "assets/frontend/images/microsite/vilasa/specifications/plot.png", description: "Ranging from 122 sq. yds. to 172 sq. yds" },
            ],
        },
        {
            title: "Security & Facilities",
            items: [
                { image: "assets/frontend/images/microsite/vilasa/specifications/security.png", description: "Gated entry, parks, and essential services." },
            ],
        },
        {
            title: "Recreation",
            items: [
                { image: "assets/frontend/images/microsite/vilasa/specifications/recreation.png", description: "Cricket, badminton, basketball, golf putting greens." },
            ],
        },
        {
            title: "Roads & Infrastructure",
            items: [
                { image: "assets/frontend/images/microsite/vilasa/specifications/road.png", description: "10m wide roads, landscaped spaces." },
            ],
        },
        {
            title: "Commercial Complex",
            items: [
                { image: "assets/frontend/images/microsite/vilasa/specifications/commercialComplex.png", description: "Dedicated retail spaces within the community." },
            ],
        },
        {
            title: "Community Spaces",
            items: [
                { image: "assets/frontend/images/microsite/vilasa/specifications/communitySpaces.png", description: "European-style gazebos, open lawns, and seating areas." },
            ],
        },
        {
            title: "Sustainable Living",
            items: [
                { image: "assets/frontend/images/microsite/vilasa/specifications/sustainableLiving.png", description: "Green spaces and well-planned drainage systems." },
            ],
        },
    ];

    // Images 

    const images = [
        { image: "assets/frontend/images/microsite/vilasa/amentities/slider/slide1.webp", alt: "Entertainment club" },
        { image: "assets/frontend/images/microsite/vilasa/amentities/slider/slide2.webp", alt: "Banquet facilities" },
        { image: "assets/frontend/images/microsite/vilasa/amentities/slider/slide3.webp", alt: "Cricket pitch" },
        { image: "assets/frontend/images/microsite/vilasa/amentities/slider/slide4.webp", alt: "Badminton court" },
        { image: "assets/frontend/images/microsite/vilasa/amentities/slider/slide5.webp", alt: "10m wide arterial roads" },
        { image: "assets/frontend/images/microsite/vilasa/amentities/slider/slide6.webp", alt: "Gated community" },
        { image: "assets/frontend/images/microsite/vilasa/amentities/slider/slide7.webp", alt: "European style gazebo" },
        { image: "assets/frontend/images/microsite/vilasa/amentities/slider/slide8.webp", alt: "Golf putting greens" },
        { image: "assets/frontend/images/microsite/vilasa/amentities/slider/slide9.webp", alt: "Basketball court" },
    ];

    return (
        <>
            <HeroSection
                desktopBg={'https://res.cloudinary.com/dx3l6id8r/image/upload/v1739342283/hero_upnmgx.webp'}
                mobileBg={'https://res.cloudinary.com/dx3l6id8r/image/upload/v1739342283/hero_upnmgx.webp'}
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
                imageSrc={aboutImg}
                headingText="ABOUT US"
                descriptionText="Vilasa offers a rare opportunity to own premium residential plots in Sector 6, Sohna. Designed for investors and homeowners alike, it provides the freedom to create a personalized living space while promising high returns in a rapidly growing location."
                reverseWatermark={true}
            />

            <Amentities
                AmentitiesData={customAmentitiesData}
                headingText="Amenities"
                images={images}
            />

            <PriceList headingText="Price List" />

            <HighlightsSpecifications
                key={location.pathname}
                highlightsComponent={() => <Highlights title="Highlights" highlights={highlightsData} />}
                specificationsComponent={() => <Specifications title="Specifications" specifications={specificationsData} />}
            />

            <Plans masterPlanData={masterPlanData} />

            <LocationAdvantage
                locationImage={loaction}
                driveData={[
                    { image: hospital, text: 'Vardaan Hospital, Sohna-Gurgaon Road, Ward Number 15, Sohna', time: '4 min' },
                    { image: hospital, text: 'Civil Hospital, Baluda, Sohna', time: '4 min' },
                    { image: college, text: 'GD Goenka University, Gurugram, Gate No 3:, GD Goenka Educational City, Sohna - Gurgaon Rd, Sohna, Sohna Rural', time: '5 min' },
                    { image: school, text: 'GD Goenka Signature School, Sohna-Gurgaon Road, Gurugram', time: '8 min' },
                    { image: college, text: 'KR Mangalam University, Sohna Road, Gurugram', time: '8 min' },
                    { image: landmark, text: 'Sohna Sulphur Springs, Sohna', time: '8 min' },
                    { image: resort, text: 'Botanix Nature Resort, Damdama Village, Sohna Road, Gurugram, Haryana', time: '19 min' },
                    { image: metro, text: 'Rapid Metro, Sikanderpur, Platina Tower 2 Metro Station Sikanderpur, 55, Mehrauli-Gurgaon Rd, Block H, DLF Phase 1, Sector 26, Gurugram, Haryana 122002', time: '21 min' },
                    { image: resort, text: 'Damdama Lake, Sohna', time: '22 min' },
                    { image: landmark, text: 'Kingdom of Dreams, Sector 29, Gurugram', time: '33 min' },
                    { image: airport, text: 'Indira Gandhi International Airport, New Delhi', time: '45 min' },
                ]}
                walkData={[
                    { image: hospital, text: 'Civil Hospital, Baluda, Sohna', time: '14 min' },
                    { image: hospital, text: 'Vardaan Hospital, Sohna-Gurgaon Road, Ward Number 15, Sohna', time: '15 min' },
                    { image: college, text: 'GD Goenka University, Gurugram, Gate No 3:, GD Goenka Educational City, Sohna - Gurgaon Rd, Sohna, Sohna Rural', time: '18 min' },
                    { image: school, text: 'GD Goenka Signature School, Sohna-Gurgaon Road, Gurugram', time: '22 min' },
                    { image: landmark, text: 'Sohna Sulphur Springs, Sohna', time: '24 min' },
                    { image: college, text: 'KR Mangalam University, Sohna Road, Gurugram', time: '26 min' },
                ]}
                driveTabIcon={drive}
                driveTabActiveIcon={driveActive}
                walkTabIcon={walk}
                walkTabActiveIcon={walkActive}
                lightboxImages={[{ image: loaction, alt: 'Location Map' }]}
                description="Vilasa is nestled on the Gurgaon-Sohna highway, offering a perfect blend of urban convenience and natural tranquility. Just 15 minutes from Rajiv Chowk and 45 minutes from IGI Airport, it ensures easy access to key commercial and recreational hubs."
            />

            <ProjectGallery
                actualImages={[actual1, actual2, actual3, actual4]}
                renderImages={[render1, render1, render1, render1]}
            />
        </>
    )
}

export default VilasaMicrosite
