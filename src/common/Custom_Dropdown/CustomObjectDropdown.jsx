import React, { useEffect, useRef, useState } from 'react';
import './CustomDropdown.css'

const CustomObjectDropdown = (props) => {
    
    const options=props.options;
    const onSelect=props.onSelect;
    const className=props.className;
    const defaultVal=props.defaultVal;

  
    const handleSelect = (event) => {
        const selectedValue = event.target.value;
        onSelect(selectedValue, event);
    };
    
    return(
        <>
            <select className={className} defaultValue={defaultVal} name='optionName' onChange={handleSelect}>
                
                {Object.entries(options).map(([key, value]) => {
                    
                    return (
                        <option value={key} key={key}>{value}</option>
                    );
                    
                })}
            </select>

        </>
    )
}

export default CustomObjectDropdown;