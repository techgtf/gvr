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
import banquet from "/assets/frontend/images/microsite/vilasa/amentities/icons/banquet.webp";
import master_plan_img from "/assets/frontend/images/microsite/vilasa/plans/masterplan.webp";
import loaction from "/assets/frontend/images/microsite/vilasa/location/location.webp";
import drive from "/assets/frontend/images/microsite/location/drive.webp";
import driveActive from "/assets/frontend/images/microsite/location/driveActive.webp";
import walk from "/assets/frontend/images/microsite/location/walk.webp";
import walkActive from "/assets/frontend/images/microsite/location/walkActive.webp";
import actual1 from "/assets/frontend/images/microsite/vilasa/gallery/actual/actual1.webp"
import actual2 from "/assets/frontend/images/microsite/vilasa/gallery/actual/actual2.webp"
import actual3 from "/assets/frontend/images/microsite/vilasa/gallery/actual/actual3.webp"
import actual4 from "/assets/frontend/images/microsite/vilasa/gallery/actual/actual4.webp"
import club from "/assets/frontend/images/microsite/vilasa/amentities/icons/club.webp";
import basketball from "/assets/frontend/images/microsite/vilasa/amentities/icons/basketball.webp";
import gazebo from "/assets/frontend/images/microsite/vilasa/amentities/icons/gazebo.webp";
import road from "/assets/frontend/images/microsite/vilasa/amentities/icons/road.webp";
import guard from "/assets/frontend/images/microsite/vilasa/amentities/icons/guard.webp";
import pitch from "/assets/frontend/images/microsite/vilasa/amentities/icons/pitch.webp";
import badminton from "/assets/frontend/images/microsite/vilasa/amentities/icons/badminton.webp";
import golf from "/assets/frontend/images/microsite/vilasa/amentities/icons/golf.webp";
import aboutImg from "/assets/frontend/images/microsite/vilasa/about/about.webp"

// location drive and walk images 
import hospital from "/assets/frontend/images/microsite/vilasa/location/icons/hospital.webp"
import college from "/assets/frontend/images/microsite/vilasa/location/icons/college.webp"
import school from "/assets/frontend/images/microsite/vilasa/location/icons/school.webp"
import landmark from "/assets/frontend/images/microsite/vilasa/location/icons/landmark.webp"
import resort from "/assets/frontend/images/microsite/vilasa/location/icons/resort.webp"
import metro from "/assets/frontend/images/microsite/vilasa/location/icons/metro.webp"
import airport from "/assets/frontend/images/microsite/vilasa/location/icons/airport.webp"
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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
                { image: "assets/frontend/images/microsite/vilasa/specifications/plot.webp", description: "Ranging from 122 sq. yds. to 172 sq. yds" },
            ],
        },
        {
            title: "Security & Facilities",
            items: [
                { image: "assets/frontend/images/microsite/vilasa/specifications/security.webp", description: "Gated entry, parks, and essential services." },
            ],
        },
        {
            title: "Recreation",
            items: [
                { image: "assets/frontend/images/microsite/vilasa/specifications/recreation.webp", description: "Cricket, badminton, basketball, golf putting greens." },
            ],
        },
        {
            title: "Roads & Infrastructure",
            items: [
                { image: "assets/frontend/images/microsite/vilasa/specifications/road.webp", description: "10m wide roads, landscaped spaces." },
            ],
        },
        {
            title: "Commercial Complex",
            items: [
                { image: "assets/frontend/images/microsite/vilasa/specifications/commercialComplex.webp", description: "Dedicated retail spaces within the community." },
            ],
        },
        {
            title: "Community Spaces",
            items: [
                { image: "assets/frontend/images/microsite/vilasa/specifications/communitySpaces.webp", description: "European-style gazebos, open lawns, and seating areas." },
            ],
        },
        {
            title: "Sustainable Living",
            items: [
                { image: "assets/frontend/images/microsite/vilasa/specifications/sustainableLiving.webp", description: "Green spaces and well-planned drainage systems." },
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
            <Helmet>
                <title>Explore Vilasa | Premium 2 & 3 BHK Homes in Sohna</title>
                <meta name="keywords" content="Great Value realty, Vilasa by Great Value Realty, Best Vilasa properties in Sohna, Vilasa luxury apartments Sohna , Vilasa residential project Sohna, Great Value Realty Vilasa" />
                <meta name="description" content="Find your ideal home at Vilasa by Great Value in Sector 6, Sohna. Modern design, spacious layouts & premium facilities for your lifestyle." />
                <meta name="google-site-verification" content="Ma-arPYmEe7u20NJ-jsuiHjD1p2HSShiEPD4m8s3bL8" />
                <link rel="canonical" href="https://greatvaluerealty.com/vilasa" />
                <meta name="distribution" content="Global" />
                <meta name="Language" content="English" />
                <meta name="doc-type" content="Public" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Great Value Realty Vilasa" />
                <meta name="googlebot" content="all, index, follow" />
                <meta name="YahooSeeker" content="all, index, follow" />
                <meta name="msnbot" content="all, index, follow" />
                <meta name="HandheldFriendly" content="true" />
                <meta name="revisit-after" content="1 days" />
                <meta name="rating" content="safe for kids" />
                <meta name="expires" content="never" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Explore Vilasa | Premium 2 & 3 BHK Homes in Sohna" />
                <meta property="og:description" content="Find your ideal home at Vilasa by Great Value in Sector 6, Sohna. Modern design, spacious layouts & premium facilities for your lifestyle." />
                <meta property="og:url" content="https://greatvaluerealty.com/vilasa" />
                <meta property="og:site_name" content="Great Value Realty Vilasa" />
                <meta property="og:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.webp" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@GreatValueGroup" />
                <meta name="twitter:title" content="Explore Vilasa | Premium 2 & 3 BHK Homes in Sohna" />
                <meta name="twitter:description" content="Find your ideal home at Vilasa by Great Value in Sector 6, Sohna. Modern design, spacious layouts & premium facilities for your lifestyle." />
                <meta name="twitter:creator" content="@GreatValueGroup" />
                <meta name="twitter:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.webp" />
                {/* <!--End of Twitter TH data --> */}


                <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Great Value Realty Vilasa Sector 6, Sohna",
                    "alternateName": "Great Value Realty Vilasa",
                    "url": "https://greatvaluerealty.com/vilasa",
                    "logo": "https://greatvaluerealty.com/assets/frontend/images/logo.webp",
                    "contactPoint":[ {
                        "@type": "ContactPoint",
                        "telephone": "+91 7777079770",
                        "contactType": "customer service",
                        "areaServed": "IN",
                        "availableLanguage": "en"
                     }]})}
                </script>
            </Helmet>
            <HeroSection
                desktopBg = "https://res.cloudinary.com/dx3l6id8r/image/upload/f_auto,q_auto/v1739342283/hero_upnmgx.webp"
                mobileBg = "https://res.cloudinary.com/dx3l6id8r/image/upload/f_auto,q_auto/v1739342283/hero_upnmgx.webp"               
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
                actualImages={[actual1, actual2, actual3]}
            />
        </>
    )
}

export default VilasaMicrosite
