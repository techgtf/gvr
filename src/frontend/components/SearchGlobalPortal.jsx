import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { BASE_ROOT } from '../../../config';

const defaultResults = [
    { text: 'sharanam', pageLink: "sharanam" },
    { text: 'Anandam', pageLink: "anandam" },
    { text: 'Gv Homez', pageLink: "gv-homes" },
    { text: 'VILASA', pageLink: "vilasa" },
]

export default function SearchGlobalPortal({ isOpen, onClose, headerFixed }) {
    if (!isOpen) return null;
    const [searchQuery, setSearchQuery] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [queryResult, setQueryResult] = useState(defaultResults);

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (!searchQuery.trim()) {
                setQueryResult(defaultResults);
                return;
            }
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
                const data = await response.json()
                console.log(data);

                // filter data
                const filteredResults = data
                    .filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
                    .slice(0, 5); // Limit results

                setQueryResult(filteredResults.length > 0 ? filteredResults : defaultResults);
            } catch (err) {
                console.log('catch error');
                setError("Failed to fetch results. Please try again.");
            } finally {
                setLoading(false);
            }
        }
        const debounceTimer = setTimeout(fetchSearchResults, 300);

        return () => clearTimeout(debounceTimer);
    }, [searchQuery]);

    return ReactDOM.createPortal(
        <div className={`fixed ${headerFixed ? "lg:top-[93px] top-[78px]" : "top-[0]"} bottom-0 left-0 right-0 h-full w-full z-[20] bg-[#EFF5FA]`}>
            <div className='close cursor-pointer absolute top-[15px] right-[15px] h-[45px] w-[45px] bg-white rounded-full flex justify-center items-center'
                onClick={onClose}
            ><IoCloseOutline className='text-[20px]' /></div>
            <div className='max-w-[500px] m-auto p-5'>
                <div className='head_div'>
                    <input
                        className='w-full px-5 py-2 rounded-[8px] rounded-b-none'
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value)
                        }} placeholder='Search here...' />
                </div>
                {/* Search Results */}
                <ul className="mt-0 border-t border-gray-200 max-h-[70vh] overflow-auto">
                    {loading && <li className="py-2 px-4 text-gray-500">Loading...</li>}
                    {error && <li className="py-2 px-4 text-red-500">{error}</li>}

                    {!loading &&
                        !error &&
                        queryResult.map((item, index) => (
                            <li
                                key={index}
                                className="bg-white py-2 px-4 border-b border-gray-200 transition-all hover:pl-3 last:border-b-0"
                            >
                                <Link
                                    to={`${BASE_ROOT}${item.pageLink || item.id}`} // Use pageLink if available
                                    className="text-gray-500"
                                    onClick={onClose}
                                >
                                    {item.text || item.title} {/* Use default text or API title */}
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        </div>,
        document.body
    )
}