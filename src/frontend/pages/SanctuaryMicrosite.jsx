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
import reflexology from "/assets/frontend/images/microsite/sanctuary/amentities/icons/reflexology.webp";
import master_plan_img from "/assets/frontend/images/microsite/sanctuary/plans/masterplan.webp";
import loaction from "/assets/frontend/images/microsite/sanctuary/location/location.webp";
import drive from "/assets/frontend/images/microsite/location/drive.webp";
import driveActive from "/assets/frontend/images/microsite/location/driveActive.webp";
import walk from "/assets/frontend/images/microsite/location/walk.webp";
import walkActive from "/assets/frontend/images/microsite/location/walkActive.webp";
import gallery1 from "/assets/frontend/images/microsite/sanctuary/gallery/gallery1.webp"
import gallery2 from "/assets/frontend/images/microsite/sanctuary/gallery/gallery2.webp"
import gallery3 from "/assets/frontend/images/microsite/sanctuary/gallery/gallery3.webp"
import club from "/assets/frontend/images/microsite/vilasa/amentities/icons/club.webp";
import basketball from "/assets/frontend/images/microsite/vilasa/amentities/icons/basketball.webp";
import power from "/assets/frontend/images/microsite/sanctuary/amentities/icons/power.webp";
import guard from "/assets/frontend/images/microsite/vilasa/amentities/icons/guard.webp";
import play from "/assets/frontend/images/microsite/sanctuary/amentities/icons/play.webp";
import badminton from "/assets/frontend/images/microsite/vilasa/amentities/icons/badminton.webp";
import car from "/assets/frontend/images/microsite/sanctuary/amentities/icons/car_parking.webp";
import aboutImg from "/assets/frontend/images/microsite/sanctuary/about/about.webp"

// location drive and walk images 
import hospital from "/assets/frontend/images/microsite/vilasa/location/icons/hospital.webp"
import school from "/assets/frontend/images/microsite/vilasa/location/icons/school.webp"
import bank from "/assets/frontend/images/microsite/sanctuary/location/icons/bank.webp"
import flights from "/assets/frontend/images/microsite/gv/location/icons/flights.webp"
import buildings from "/assets/frontend/images/microsite/location/walkIcons/buildings.webp"
import mall from "/assets/frontend/images/microsite/location/walkIcons/mall.webp"
import road from "/assets/frontend/images/microsite/vilasa/amentities/icons/road.webp";

import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function SanctuaryMicrosite() {
    const location = useLocation();
    // Amentities data 

    const customAmentitiesData = [
        { name: "Entertainment club", image: club },
        { name: "Reflexology Park", image: reflexology },
        { name: "Children's Play Area", image: play },
        { name: "Basketball court", image: basketball },
        { name: "Badminton court", image: badminton },
        { name: "Power Backup", image: power },
        { name: "Gated community", image: guard },
        { name: "Car Parking", image: car },
    ];

    const masterPlanData = [
        { image: master_plan_img, alt: "Master Plan" },
    ];

    const highlightsData = [
        "Prime Location – Situated in Sector 105 with excellent connectivity to Old Delhi Gurgaon Road, Dwarka Expressway, and MG Road.",
        "Seamless Connectivity – Strategically positioned for easy access to major roads and hubs.",
        "Luxury & Convenience – A perfect blend of modern living and comfort.",
        "Serene Environment – Designed for a peaceful and fulfilling lifestyle.",
        "Diverse Unit Options – Offers multiple configurations to suit different needs.",
        "Premium Specifications – Master Bedroom Walls: Oil Bound Distemper for a refined finish.",
    ];

    // Specifications data 

    const specificationsData = [
        {
            title: "Master Bedroom-Walls",
            items: [
                { image: "assets/frontend/images/microsite/sanctuary/specifications/walls.webp", description: "Master Bedroom walls finished with Oil Bound Distemper for a smooth and elegant look." },
            ],
        },
        {
            title: "Master Bedroom-Flooring",
            items: [
                { image: "assets/frontend/images/microsite/sanctuary/specifications/flooring.webp", description: "Master Bedroom flooring adorned with durable and stylish Vitrified Tiles." },
            ],
        },
        {
            title: "Fittings & Fixtures",
            items: [
                { image: "assets/frontend/images/microsite/sanctuary/specifications/ac.webp", description: "Fitted with high-efficiency VRV AC for superior climate control." },
            ],
        },
        {
            title: "Other Bedrooms-Flooring",
            items: [
                { image: "assets/frontend/images/microsite/sanctuary/specifications/flooring.webp", description: "Other bedrooms feature elegant and durable Vitrified Tiles flooring." },
            ],
        },
        {
            title: "Walls",
            items: [
                { image: "assets/frontend/images/microsite/sanctuary/specifications/walls.webp", description: "Walls finished with Oil Bound Distemper for a smooth and refined look." },
            ],
        },
        {
            title: "Living Area-Flooring",
            items: [
                { image: "assets/frontend/images/microsite/sanctuary/specifications/flooring.webp", description: "The living area features sleek and durable Vitrified Tiles flooring." },
            ],
        },
        {
            title: "Kitchen-Equipments",
            items: [
                { image: "assets/frontend/images/microsite/sanctuary/specifications/kitchen.webp", description: "The kitchen is equipped with a stylish and functional Modular Kitchen." },
            ],
        },
        {
            title: "Bathroom",
            items: [
                { image: "assets/frontend/images/microsite/sanctuary/specifications/bathtub.webp", description: "Bathrooms feature elegant and high-quality Premium Bath Fittings." },
            ],
        },
        {
            title: "Structure",
            items: [
                { image: "assets/frontend/images/microsite/sanctuary/specifications/walls.webp", description: "The building is designed with a robust RCC Frame Structure for enhanced stability and durability." },
            ],
        },
    ];

    // Images 

    const images = [
        { image: "assets/frontend/images/microsite/vilasa/amentities/slider/slide1.webp", alt: "Entertainment club" },
        { image: "assets/frontend/images/microsite/sanctuary/amentities/slider/slide2.webp", alt: "Reflexology Park" },
        { image: "assets/frontend/images/microsite/vilasa/amentities/slider/slide3.webp", alt: "Cricket pitch" },
        { image: "assets/frontend/images/microsite/vilasa/amentities/slider/slide4.webp", alt: "Badminton court" },
        { image: "assets/frontend/images/microsite/sanctuary/amentities/slider/slide5.webp", alt: "Children's Play Area" },
        { image: "assets/frontend/images/microsite/vilasa/amentities/slider/slide6.webp", alt: "Gated community" },
        { image: "assets/frontend/images/microsite/sanctuary/amentities/slider/slide7.webp", alt: "Power Backup" },
        { image: "assets/frontend/images/microsite/sanctuary/amentities/slider/slide8.webp", alt: "Car Parking" },
        { image: "assets/frontend/images/microsite/vilasa/amentities/slider/slide9.webp", alt: "Basketball court" },
    ];

    return (
        <>
            <Helmet>
                <title> Explore Sanctuary | Premium 2 & 3 BHK Homes in Gurugram</title>
                <meta name="keywords" content="Great Value realty, Great Value Realty Sanctuary Sector 105, Great Value Realty Sanctuary Gurugram, Sanctuary 105 Gurugram , Sanctuary by Great Value Realty, Sanctuary residential project Gurugram" />
                <meta name="description" content="Find your ideal home at Sanctuary by Great Value in Sector 105, Gurugram. Modern design, spacious layouts & premium facilities for your lifestyle.s" />
                <meta name="google-site-verification" content="Ma-arPYmEe7u20NJ-jsuiHjD1p2HSShiEPD4m8s3bL8" />
                <link rel="canonical" href="https://greatvaluerealty.com/sanctuary" />
                <meta name="distribution" content="Global" />
                <meta name="Language" content="English" />
                <meta name="doc-type" content="Public" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Great Value Realty Sanctuary Sector 105" />
                <meta name="googlebot" content="all, index, follow" />
                <meta name="YahooSeeker" content="all, index, follow" />
                <meta name="msnbot" content="all, index, follow" />
                <meta name="HandheldFriendly" content="true" />
                <meta name="revisit-after" content="1 days" />
                <meta name="rating" content="safe for kids" />
                <meta name="expires" content="never" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Explore Sanctuary | Premium 2 & 3 BHK Homes in Gurugram" />
                <meta property="og:description" content="Find your ideal home at Sanctuary by Great Value in Sector 105, Gurugram. Modern design, spacious layouts & premium facilities for your lifestyle." />
                <meta property="og:url" content="https://greatvaluerealty.com/sanctuary" />
                <meta property="og:site_name" content="Great Value Realty Sanctuary Sector 105" />
                <meta property="og:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@GreatValueGroup" />
                <meta name="twitter:title" content="Explore Sanctuary | Premium 2 & 3 BHK Homes in Gurugram" />
                <meta name="twitter:description" content="Find your ideal home at Sanctuary by Great Value in Sector 105, Gurugram. Modern design, spacious layouts & premium facilities for your lifestyle." />
                <meta name="twitter:creator" content="@GreatValueGroup" />
                <meta name="twitter:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />
                {/* <!--End of Twitter TH data --> */}

                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Great Value Realty Sanctuary Sector 105, Gurugram",
                        "alternateName": "Great Value Realty Sanctuary Gurugram",
                        "url": "https://greatvaluerealty.com/sanctuary",
                        "logo": "https://greatvaluerealty.com/assets/frontend/images/logo.png",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+91 7777079770",
                            "contactType": "customer service",
                            "areaServed": "IN",
                            "availableLanguage": "en"
                    }}`}
                </script>
            </Helmet>
            <HeroSection
                desktopBg={'assets/frontend/images/microsite/sanctuary/hero/hero.webp'}
                mobileBg={'assets/frontend/images/microsite/sanctuary/hero/hero.webp'}
                scrollText="SCROLL DOWN"
                sectionId="overview"
                initialScale={1.5}
                duration={2}
                bannerDetailsProps={{
                    heading: "SANCTUARY 105",
                    location: "SECTOR 105, GURUGRAM",
                    description: "3 & 4 BHK LUXURY RESIDENTIAL APARTMENTS",
                }}
            />

            <About
                imageSrc={aboutImg}
                headingText="ABOUT US"
                descriptionText="Sanctuary 105 is more than just an address; it’s an open escape, offering the perfect retreat from the hustle and bustle of real Gurugram, designed to provide each resident with a single neighbour. An address seamlessly blends the contrasting elements of art, architecture, and nature."
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
                    { image: hospital, text: 'Chetanya Hospital', time: '1 min' },
                    { image: road, text: 'Gurgaon, Old Railway Rd,', time: '1 min' },
                    { image: bank, text: 'Bank Of Baroda,', time: '2 min' },
                    { image: school, text: 'Happy High School', time: '4 min' },
                    { image: buildings, text: 'WTC Plaza', time: '11 min' },
                    { image: mall, text: 'Gurgaon Dreamz Mall', time: '11 min' },
                    { image: flights, text: 'Indira Gandhi International Airport', time: '13 min' },
                    { image: buildings, text: 'DLF CyberHub', time: '25 min' }
                ]}
                walkData={[
                    { image: road, text: 'Gurgaon, Old Railway Rd,', time: '3 min' },
                    { image: hospital, text: 'Chetanya Hospital', time: '4 min' },
                    { image: bank, text: 'Bank Of Baroda,', time: '5 min' },
                    { image: school, text: 'Happy High School', time: '14 min' }
                ]}
                driveTabIcon={drive}
                driveTabActiveIcon={driveActive}
                walkTabIcon={walk}
                walkTabActiveIcon={walkActive}
                lightboxImages={[{ image: loaction, alt: 'Location Map' }]}
                description="Sanctuary 105 is nestled in sector 105, gurugram, offering a perfect blend of urban convenience and natural tranquility."
            />

            <ProjectGallery
                actualImages={[gallery1, gallery2, gallery3]}
            />
        </>
    )
}

export default SanctuaryMicrosite
