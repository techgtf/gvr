import React, { useState, useContext, createContext, useEffect } from "react";
import ReactDOM from "react-dom";
import { DATA_ASSET_URL } from "../../../config";
import axios from "axios";

export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [allProfile, setAllProfile] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(`${DATA_ASSET_URL}team`) 
      .then((response) => {
        setAllProfile(response.data.data); // Set the blog data
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

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

  console.log(allProfile,"allProfile")
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
