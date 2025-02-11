import React from "react";
import './search.css'

const public_url = import.meta.env.VITE_PUBLIC_URL;

const Search = ()=>{
    return(
        <>
            <div className="custom_search">
                <input type="text" className="form-control" placeholder="Search" />
                <img src={public_url + 'Admin/images/icons/search.svg'} alt="search icon" className="img-fluid" />
            </div>
        </>
    )
}

export default Search;