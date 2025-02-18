import React, { useState } from 'react'



import { IoIosSearch } from "react-icons/io";
import SearchGlobalPortal from './SearchGlobalPortal';


export default function SearchGlobal({
    headerFixed
}) {
    const [toggleModal, setToggleModal] = useState(false);

    return (
        <>
            <button
                className="search_icon focus-visible:outline-none focus-visible:ring-0"
                onClick={() => setToggleModal(true)}
                aria-label="Open search"
                title="Open search"
            >
                <IoIosSearch className={`cursor-pointer text-[20px] ${headerFixed ? 'text-black' : 'text-white'}`} />
            </button>



            {toggleModal && <SearchGlobalPortal
                isOpen={toggleModal}
                onClose={() => setToggleModal(false)}
                headerFixed={headerFixed}
            />}
        </>
    )
}
