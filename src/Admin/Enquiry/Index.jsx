import React, { useEffect, useRef, useState } from "react"
import Loader from "common/Loader/loader";
import Request from "root/config/JsonRequest";
import ScaleLoader from "react-spinners/ScaleLoader";
import Pagination from 'common/Pagination/Pagination';


const Enquiry = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [dataLoading, setDataLoading] = useState(false)
    const [data, setData] = useState([]);
    const [notFound, setnotFound] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); // Current page state
    const [lastPage, setLastPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0)
    const loadEnquiries = async (search="") => {
        setDataLoading(true)
        const response = await Request(`admin/contact?search=${search}&page=${currentPage}`, 'GET');
        if(response.status && response.statusCode==200)
        {
            if(!response.data.data.length){
                setnotFound(true);
            }
            setData(response.data.data)
            setTotalPage(response.data.last_page)
        }
        setDataLoading(false)
    }
    useEffect(()=>{

        
        loadEnquiries()

    }, [currentPage, totalPage])

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    if (isLoading) {
        return <Loader />; // Use the Loader component
    } 

    
    const findHandler = async(e)=>{
        const searchTerm = e.target.value.toLowerCase();
        loadEnquiries(searchTerm);
    }



    return(
        <>
            <div className="flex title_col justify-between items-center">
                <h4 className="page_title">Contact Query</h4>
            </div>

            <div className="card bg-white mt-4 card_style1">
               
                <div className="flex items-center">
                    <h5 className="mb-0">Contact Queries </h5>

                    <div className="searchInput ms-auto">
                    <input
              type="text"
              className="border rounded px-3 py-2 w-full"
              placeholder="Search by name"
              onChange={findHandler}
            />
                    </div>
                </div>




                <table className="mt_40 w-full border-collapse border border-gray-200">
                    <thead>
                        <tr  className="bg-gray-100">
                            <th className="border border-gray-300 p-2 text-left">
                                Name
                            </th>
                            <th className="border border-gray-300 p-2 text-left">
                                Email
                            </th>
                            <th className="border border-gray-300 p-2 text-left">
                                Phone
                            </th>
                            <th className="border border-gray-300 p-2 text-left">
                                Message
                            </th>
                            <th className="border border-gray-300 p-2 text-left">
                                Date
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {!data.length && dataLoading ? 
                        <tr className="border-b border-gray-200">
                            <td colSpan={5}>
                                <div className="text-center py-4">
                                <ScaleLoader 
                                    color="#ddd"
                                    className="w-full"
                                /> 
                                </div>
                            </td>
                        </tr>
                        : 
                        data.map((item)=>(
                            <tr key={item.id}>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td>
                                    {item.phone}
                                </td>
                                <td>
                                    {item.message}
                                </td>
                                <td>
                                    {new Date(item.created_at).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour:'2-digit', minute: '2-digit', second: '2-digit' })}
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

                {!dataLoading && !notFound && (
                    <Pagination currentPage={currentPage} totalPages={lastPage} onPageChange={handlePageChange} />
                )}
                
                {notFound && (
                    <h5 className="no_record">No Record Found!</h5>
                )}
            </div>
        </>
    )
}

export default Enquiry