import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openEnquiryForm = () => {
    setShowEnquiryForm(true);
  };

  const closeEnquiryForm = () => {
    setShowEnquiryForm(false);
  };

  return (
    <Context.Provider
      value={{
        showEnquiryForm,
        openEnquiryForm,
        closeEnquiryForm,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
