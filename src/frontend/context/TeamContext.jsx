import React, { useState, useContext, createContext } from "react";
import ReactDOM from "react-dom";

const profiles = [
  {
    isModalOpen: false,
    image: "team-2.webp",
    name: "Payas Agarwal",
    position: "Director",
    bio: "An MBA graduate from Babson College, he brings over five years of hands-on experience in leading and managing the Group. A visionary strategist and analytical leader, he is deeply committed to staying informed about the latest industry developments and market trends. His forward-thinking approach and ability to adapt to dynamic environments have been instrumental in driving growth and fostering innovation within the organization.",
  },
  {
    isModalOpen: false,
    image: "team-3.webp",
    name: "Amit Goel",
    position: "Fund Manager",
    bio: "Amit Goel an engineer, MBA, CFA, & MRICS brings 25+ years of experience. With a specialty in distressed asset turnarounds. Has worked with leading global firms like Millenium Global, Viridian Partners, and WTC has raised and managed $350 Mn+ AUM.",
  },
  {
    isModalOpen: false,
    image: "team-1.webp",
    name: "Manoj Agarwal",
    position: "Chairman & MD, GV Group",
    bio: "Mr. Manoj Agarwal stands as the cornerstone of the Great Value Group, steering its transformation from a modest glassware enterprise to a diverse and thriving conglomerate over the past three decades. With a keen business instinct and an unwavering vision, he has led the Group to remarkable success across multiple industries. After completing his education in Bangalore, Mr. Agarwal joined the family business, which became the foundation for his entrepreneurial journey. He seized an opportunity to venture into food processing for the Uttar Pradesh Government, establishing a stable and successful foothold in the food industry. Building on this success, he expanded into real estate, acquiring assets that have led to the development of prominent projects, enriching the lives of countless buyers. Driven by his motto of adding value to people’s lives, Mr. Agarwal ensures that his efforts have a positive impact, both directly and indirectly. Committed to social responsibility, he dedicates 10% of his personal income to extensive CSR initiatives and welfare activities across India. He is actively involved with organizations such as Divya Prem Seva Mission and Bhaurav Devras Seva Nyas. Additionally, he has independently established five dispensaries and a primary school in Delhi NCR, underscoring his commitment to community development.Mr. Manoj Agarwal’s journey is a testament to visionary leadership, innovation, and a deep sense of responsibility toward society.",
  },
  {
    isModalOpen: false,
    image: "team-4.webp",
    name: "Goldie Kapoor",
    position: "Sales and Marketing Head",
    bio: "Goldie is a seasoned and dedicated professional in the group with over 23 years of expertise in residential sales, retail, warehousing, and industrial leasing alongside significant experience in evaluating and analyzing stressed asset investments. A result-driven individual with a proven history of identifying opportunities and delivering strategies that optimize financial growth and operational efficiency.",
  },

  {
    isModalOpen: false,
    image: "team-5.webp",
    name: "Nakul Goel",
    position: "CFO",
    bio: "Experienced financial professional with over 25 years of expertise in financial management, corporate financial law, investment operations, banking practices, and risk management. Possesses extensive knowledge in assessing the financial health of investments through advanced data analysis and forecasting, driving strategic financial decision-making and sustainable growth.",
  },
];
export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [allProfile, setAllProfile] = useState(profiles);

  const handleNext = () => {
    setAllProfile((prev) => {
      const newPictures = [...prev];
      const firstPicture = newPictures.shift();
      newPictures.push(firstPicture);
      return newPictures;
    });
  };

  const handlePrev = () => {
    setAllProfile((prev) => {
      const newPictures = [...prev];
      const lastPicture = newPictures.pop();
      newPictures.unshift(lastPicture);
      return newPictures;
    });
  };

  const handleImageClick = (index) => {
    setAllProfile((prev) => {
      const newPictures = [...prev];
      const clickedImage = newPictures.splice(index, 1)[0];
      newPictures.splice(2, 0, clickedImage);
      return newPictures;
    });
  };

  const handleBio = (index) => {
    setAllProfile((prev) =>
      prev.map((profile, i) => ({
        ...profile,
        isModalOpen: i === index,
      }))
    );
  };

  const handleCloseModal = () => {
    setAllProfile((prev) =>
      prev.map((profile) => ({
        ...profile,
        isModalOpen: false,
      }))
    );
  };

  return (
    <TeamContext.Provider
      value={{
        allProfile,
        handleNext,
        handlePrev,
        handleImageClick,
        handleBio,
        handleCloseModal,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};
