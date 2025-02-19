import React, { useState } from 'react'



import { IoIosSearch } from "react-icons/io";
import SearchGlobalPortal from './SearchGlobalPortal';


export default function SearchGlobal({
    headerFixed
}) {
    const [toggleModal, setToggleModal] = useState(false);

    return (
        <>
            <div
                className='search_icon '
                onClick={() => setToggleModal(true)}
            ><IoIosSearch className={`cursor-pointer text-[20px] ${headerFixed ? 'text-black' : 'text-white'}`} />
            </div>

            {toggleModal && <SearchGlobalPortal
                isOpen={toggleModal}
                onClose={() => setToggleModal(false)}
                headerFixed={headerFixed}
            />}
        </>
    )
}
