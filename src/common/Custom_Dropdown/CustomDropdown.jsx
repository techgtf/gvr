import React, { useEffect, useRef, useState } from "react";
import "./CustomDropdown.css";

const CustomDropdown = (props) => {
  const options = props.options;
  const onSelect = props.onSelect;
  const className = props.className;
  const defaultVal = props.defaultVal;
  const disabled = props.disabled;
  const selectedValue = props.select

  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    onSelect(selectedValue, event);
  };

  return (
    <>
      <select
        className={className}
        value={selectedValue}
        name="optionName"
        onChange={handleSelect}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default CustomDropdown;
