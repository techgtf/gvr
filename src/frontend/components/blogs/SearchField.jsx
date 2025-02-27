import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchField = ({ searchTerm, setSearchTerm , customClass}) => {
  return (
    <div className={`relative w-full max-w-md ${customClass}`}>
      <input
        type="text"
        placeholder="SEARCH HERE"
        className="w-full h-[50px] px-4 pr-10 text-[14px] border-[0.5px] border-solid border-[#ddd] rounded text-[#615B5B] placeholder:uppercase"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
      />

      <CiSearch className="absolute w-[24px] h-[24px] right-3 top-1/2 transform -translate-y-1/2 text-[#000] text-xl bg-transparent" />
    </div>
  );
};

export default SearchField;
