import React, { useState } from 'react'
import "./styles.css"
import { FaChevronDown } from 'react-icons/fa';

const areaUnits = {
    "Square Meters": 1,
    "Square Inches": 0.00064516,
    "Square Feet": 0.092903,
    "Square Yards": 0.836127,
    "Square Rods": 25.2929,
    "Square Chains": 404.686,
    "Roods": 1011.71,
    "Acres": 4046.86,
    "Square Miles": 2.59e+6, // 1 square mile = 2.59 million square meters
};

export default function Index() {
    const [inputValue, setInputValue] = useState(100);
    const [fromUnit, setFromUnit] = useState("Square Miles");
    const [toUnit, setToUnit] = useState("Square Inches");
    const [openDropdown, setOpenDropdown] = useState(null);
    const [result, setResult] = useState("");

    const convertArea = () => {
        if (!inputValue || inputValue < 0) return setResult("Please enter a valid number");

        const fromFactor = areaUnits[fromUnit]; // Get conversion factor for "from" unit
        const toFactor = areaUnits[toUnit]; // Get conversion factor for "to" unit

        const convertedValue = (inputValue * fromFactor) / toFactor; // Convert to target unit
        setResult(`${inputValue} ${fromUnit} is equal to ${convertedValue.toLocaleString()} ${toUnit}`);
    };

    return (
        <div className='area_converter_in lg:py-[80px] py-[20px] uppercase'>
            <div className='wrapper lg:max-w-[496px] lg:p-0 p-[15px] m-auto'>
                <div className='lg:p-[40px] rounded-[10px] w-full bg-white'>
                    <div className='heading_div lg:tracking-[1px] text-center lg:text-[15px] bg-[#EFF5FA] p-2 rounded-[4px] mb-5'>Type the number you wish to convert here:</div>
                    <div className='in_box'>
                        <label className='lg:text-[14px] lg:tracking-[1px]'>Enter value</label>
                        <input
                            type="number"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="w-full px-4 py-[6px] appearance-none rounded mt-4 text-[15px]"
                            placeholder="Enter value"
                            style={{ border: "1px solid #ddd" }}
                        />
                    </div>

                    <div className="relative">
                        <label className="block font-[400] mt-4 mb-2">From Unit</label>
                        <button
                            onClick={() => setOpenDropdown(openDropdown === "from" ? null : "from")}
                            className="w-full border border-solid border-[#ddd] rounded px-4 py-[6px] flex justify-between items-center text-[14px] hover:bg-gray-100 uppercase"
                        >
                            {fromUnit} <FaChevronDown />
                        </button>
                        {openDropdown === "from" && (
                            <ul className="absolute z-10 w-full border rounded mt-1 max-h-52 overflow-y-auto shadow-lg bg-white">
                                {Object.keys(areaUnits).map((unit) => (
                                    <li
                                        key={unit}
                                        onClick={() => {
                                            setFromUnit(unit);
                                            setOpenDropdown(null);
                                        }}
                                        className="p-2 cursor-pointer hover:bg-gray-200"
                                    >
                                        {unit}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="relative">
                        <label className="block font-[400] mt-4 mb-2">To Unit:</label>
                        <button
                            onClick={() => setOpenDropdown(openDropdown === "to" ? null : "to")}
                            className="w-full border border-solid border-[#ddd] rounded px-4 py-[6px] flex justify-between items-center text-[14px] hover:bg-gray-100 uppercase"
                        >
                            {toUnit} <FaChevronDown />
                        </button>
                        {openDropdown === "to" && (
                            <ul className="absolute z-10 w-full border rounded mt-1 max-h-52 overflow-y-auto shadow-lg bg-white">
                                {Object.keys(areaUnits).map((unit) => (
                                    <li
                                        key={unit}
                                        onClick={() => {
                                            setToUnit(unit);
                                            setOpenDropdown(null);
                                        }}
                                        className="p-2 cursor-pointer hover:bg-gray-200"
                                    >
                                        {unit}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <button
                        onClick={convertArea}
                        className="w-full bg-[#33638b] text-white p-2 rounded hover:bg-[#274f70] mt-6 uppercase"
                    >
                        Convert
                    </button>
                    {result && <div className="mt-4 p-3 text-center rounded shadow text-[13px]">{result}</div>}
                </div>
            </div>
        </div>
    )
}