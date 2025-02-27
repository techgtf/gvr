import React from "react";
import FadeIn from "../../Animations/FadeIn";
import CommonHeading from "../../commonHeading";
import SlideIn from "../../Animations/SlideIn";
import { useImageReveal } from "../../useImageReveal";
import CommonPera from '../../commonPera'

function SocialDetails() {
    useImageReveal(".reveal")
    const tabData = {
        social: {
            heading: "SOCIAL",
            description: "At Great Value Realty, we believe in building not just homes, but also thriving communities. Our commitment is to drive our social initiatives, ensuring access to healthcare, education, and skill development for all.",
            details: [
                { title: "GVR Accessible Healthcare Program", content: "RSD Dispensaries in Sangam Vihar, Tughlakabad, Dakshin Puri, and Ratiya Marg offer free or affordable medical treatments, including X-rays, pathology, physiotherapy, and multi-specialist consultations.", img: "assets/frontend/images/csr/social/social/1.webp" },
                { title: "GVR Health & Wellness Camps", content: "Eye camps, blood donation drives, and dental health programs are organised through RSD Charitable Trust, collaborating with Divya Prem Seva Mission, Seva Bharti, and Khushali Foundation to reach underserved communities.", img: "assets/frontend/images/csr/social/social/2.webp" },
                { title: "GVR Early Learning Program", content: "Through RSD Play School, primary education is provided that fosters early cognitive development and learning skills, creating brighter opportunities for children.", img: "assets/frontend/images/csr/social/social/3.webp" },
                { title: "GVR Digital Literacy Initiative", content: "Computer education to 400+ students is offered in Sangam Vihar and Pushpa Vihar, while the RSD Computer Centre provides basic IT training for young adults, empowering them for future careers.", img: "assets/frontend/images/csr/social/social/4.webp" },
                { title: "GVR Community Empowerment Program", content: "Through partnerships with Divya Prem Seva Mission, Khushali Foundation, and Seva Bharti, we provide vocational training and women’s empowerment programs, fostering independence and self-sufficiency.", img: "assets/frontend/images/csr/social/social/5.webp" },
            ],
        },
        environment: {
            heading: "ENVIRONMENT",
            description: "At Great Value Realty, sustainability is at the core of our vision. With trust, value, and emotion as our pillars, eco-friendly practices are integrated to build healthier, greener, and more sustainable communities.",
            details: [
                { title: "Green Certified Buildings", content: "Every Great Value Realty project is green-certified, ensuring energy efficiency, reduced carbon emissions, and environmentally responsible construction.", img: "assets/frontend/images/csr/social/environment/1.webp" },
                { title: "Sustainable Materials in All Projects", content: "We use eco-friendly materials, energy-efficient fixtures, and low-emission construction techniques, reducing environmental impact while maintaining durability.", img: "assets/frontend/images/csr/social/environment/2.webp" },
                { title: "Water Conservation Strategies", content: "Our developments feature rainwater harvesting, water-efficient plumbing, and smart irrigation systems, ensuring responsible water usage.", img: "assets/frontend/images/csr/social/environment/3.webp" },
                { title: "Waste Management Initiatives", content: "We implement strict waste segregation, recycling programs, and sustainable disposal methods, promoting cleaner and greener communities.", img: "assets/frontend/images/csr/social/environment/4.webp" },
                { title: "CO2 Emission Reduction", content: "By integrating solar energy, smart insulation, and energy-efficient designs, we actively reduce CO2 emissions and promote sustainable living.", img: "assets/frontend/images/csr/social/environment/5.webp" },
            ],
        },
        governance: {
            heading: "GOVERNANCE",
            description: "At Great Value Realty, we prioritize ethical business practices, regulatory compliance, and transparent leadership. Our governance framework is built on accountability, integrity, and responsible decision-making, ensuring long-term success and stakeholder confidence.",
            details: [
                { title: "Code of Ethics & Business Conduct", content: "Our Code of Ethics & Business Conduct Policy ensures fair business practices, anti-corruption measures, and compliance with legal and regulatory frameworks, promoting a culture of honesty.", img: "assets/frontend/images/csr/social/governance/1.webp" },
                { title: "Corporate Transparency & Compliance Policy", content: "We adhere to strict corporate governance norms, financial transparency regulations, and risk management protocols, ensuring compliance with national and international real estate laws.", img: "assets/frontend/images/csr/social/governance/2.webp" },
                { title: "Data Privacy & Cybersecurity Policy", content: "Our Data Privacy & Cybersecurity Policy enforces strict data encryption, customer confidentiality, and digital security measures to prevent unauthorized access and cyber threats.", img: "assets/frontend/images/csr/social/governance/3.webp" },
                { title: "Diversity & Inclusion Policy", content: "Our Diversity & Inclusion Policy promotes equal opportunities, anti-discrimination practices, and gender diversity at all organizational levels, ensuring an inclusive work culture.", img: "assets/frontend/images/csr/social/governance/4.webp" },
                { title: "Stakeholder Engagement & CSR Policy", content: "We implement the Stakeholder Engagement & CSR Policy, ensuring open communication with investors, ethical supply chain management, and community-driven corporate social responsibility initiatives.", img: "assets/frontend/images/csr/social/governance/5.webp" },
            ],
        },
    };

    return (
        <section className="social_details ">
            {/* Social Section */}
            <div className="details bg-[#EFF5FA] py-10 px-5 md:px-12 ">
                <div className="tab_details">
                    <div className="heading text-center flex justify-center py-5 flex-col items-center">
                        <FadeIn duration={2} delay={0.7}>
                            <CommonHeading HeadingText={tabData.social.heading} />
                        </FadeIn>
                        <SlideIn duration={0.8} delay={0.2}>
                            <p className="md:w-[45%] mx-auto py-5">{tabData.social.description}</p>
                        </SlideIn>
                    </div>
                    <div className="pipeline relative h-[12vh] flex justify-center">
                        <div className="absolute top-0 w-[2px] bg-gray-400 h-[8vh]"></div>
                    </div>

                    {/* Social Content Mapping */}
                    <div className="grid grid-cols-1 !sm:grid-cols-2 !flex !flex-wrap justify-center md:grid-cols-3 gap-4 py-5">
                        {tabData.social.details.map((item, index) => (
                            <div key={index} className="card max-w-sm overflow-hidden reveal_cut_effect">
                                <div className="relative group reveal">
                                    <img className="w-full" src={item.img} alt={item.title} />
                                    <div className="content absolute bottom-0 left-0 bg-white/70 backdrop-blur-md text-center p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <CommonPera PeraText={item.content} />
                                    </div>
                                </div>
                                <div className="py-4">
                                    <div className="text-[8px] text-center tracking-[3.5px] leading-[3] midlandfontmedium uppercase">{item.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Environment Section */}
            <div className="details bg-white py-10 px-5 md:px-12">
                <div className="tab_details">
                    <div className="heading text-center flex justify-center py-5 flex-col items-center">
                        <FadeIn duration={2} delay={0.7}>
                            <CommonHeading HeadingText={tabData.environment.heading} />
                        </FadeIn>
                        <SlideIn duration={0.8} delay={0.2}>
                            <p className="md:w-[45%] mx-auto py-5">{tabData.environment.description}</p>
                        </SlideIn>
                    </div>

                    <div className="pipeline relative h-[12vh] flex justify-center">
                        <div className="absolute top-0 w-[2px] bg-gray-400 h-[8vh]"></div>
                    </div>
                    {/* Environment Content Mapping */}
                    <div className="grid grid-cols-1 !sm:grid-cols-2 !flex !flex-wrap justify-center md:grid-cols-3 gap-4 py-5">
                        {tabData.environment.details.map((item, index) => (
                            <div key={index} className="card max-w-sm overflow-hidden reveal_cut_effect">
                                <div className="relative group reveal">
                                    <img className="w-full" src={item.img} alt={item.title} />
                                    <div className="content absolute bottom-0 left-0 bg-white/70 backdrop-blur-md p-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <CommonPera PeraText={item.content} />
                                    </div>
                                </div>
                                <div className="py-4">
                                    <div className="text-[8px] text-center tracking-[3.5px] leading-[3] midlandfontmedium uppercase">{item.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="governance bg-[#EFF5FA] px-5 md:px-12 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 py-5 md:grid-cols-3 gap-5">
                    <div className="heading flex flex-col p-4 justify-center">
                        <FadeIn duration={2} delay={0.7}>
                            <CommonHeading HeadingText={tabData.governance.heading} />
                        </FadeIn>
                        <SlideIn duration={0.8} delay={0.2}>
                            <p className="text-justify py-5">{tabData.governance.description}</p>
                        </SlideIn>
                    </div>

                    {tabData.governance.details.map((item, index) => (<div key={index} className="card bg-white p-5">
                        <div className="icon py-3 reveals">
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className="heading w-[90%] text-[8px] py-4 tracking-[3.5px] leading-[3] midlandfontmedium uppercase">
                            {item.title}
                        </div>
                        <SlideIn duration={0.8} delay={0.2}>
                            <p className="desc py-4 text-justify">
                                 <CommonPera PeraText={item.content} /> </p>
                        </SlideIn>
                    </div>))}
                </div>
            </div>
        </section>
    );
}

export default SocialDetails;
