import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { BASE_ROOT } from '../../../config';

const defaultResults = [
    // { text: 'sharnam', pageLink: "sharanam" },
    // { text: 'Anandam', pageLink: "anandam" },
    // { text: 'Gv Homez', pageLink: "gv-homes" },
    // { text: 'VILASA', pageLink: "vilasa" },
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
        <div className={`fixed ${headerFixed ? "lg:top-[93px] top-[78px]" : "top-[0]"} left-0 right-0 lg:h-[60%] h-[100%] w-full z-[20] bg-[#EFF5FAF7]`}>
            <div className='close lg:opacity-[.8] opacity-[.7] cursor-pointer absolute lg:top-[15px] lg:bottom-[auto] bottom-[16%] lg:right-[15px] right-0 lg:left-[unset] left-0 lg:w-fit w-full rounded-full flex justify-center items-center'
                onClick={onClose}
            ><IoCloseOutline className='lg:text-[40px] text-[35px] font-[300]' /></div>
            <div className='max-w-[500px] m-auto p-5 lg:pt-[90px]'>
                <div className='head_div'>
                    <input
                        className='w-full px-5 py-3 pl-[55px] rounded-[8px]'
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value)
                        }} placeholder='Search Properties, Blogs, News etc'
                        style={{
                            backgroundImage: 'url(/assets/frontend/images/icons/search.png)',
                            backgroundPosition: '20px center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '25px'

                        }}
                    />
                </div>
                {/* Search Results */}
                <ul className="mt-[-5px] z-[1] border-t border-gray-200 lg:max-h-[150px] max-h-[250px]  overflow-auto">
                    {loading && <li className="py-2 px-4 text-gray-500">Loading...</li>}
                    {error && <li className="py-2 px-4 text-red-500">{error}</li>}

                    {!loading &&
                        !error &&
                        queryResult.map((item, index) => (
                            <li
                                key={index}
                                aria-label={item.title}
                                className="bg-white py-2 px-4 border-b border-gray-200 transition-all hover:pl-3 last:border-b-0"
                            >
                                <Link
                                    to={`${BASE_ROOT}${item.pageLink || item.id}`}
                                    className="text-gray-500"
                                    onClick={onClose}
                                >{item.text || item.title}</Link>
                            </li>
                        ))}
                </ul>
            </div>
        </div>,
        document.body
    )
}