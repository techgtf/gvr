import React, { useEffect, useRef, useState } from "react"
import Loader from "common/Loader/loader";
import Request from "root/config/JsonRequest";
import ScaleLoader from "react-spinners/ScaleLoader";
import Pagination from 'common/Pagination/Pagination';


const ProjectQuery = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [dataLoading, setDataLoading] = useState(false)
    const [data, setData] = useState([]);
    const [notFound, setnotFound] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); // Current page state
    const [lastPage, setLastPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0)
    const loadEnquiries = async (search="") => {
        setDataLoading(true)
        const response = await Request(`enquiry?search=${search}&page=${currentPage}`, 'GET');
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
            <div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">Project Queries</h4>
            </div>

            <div className="card mt-4 card_style1">
              
                <div className="d-flex align-items-center">
                    <h5 className="mb-0">Project Queries </h5>

                    <div className="searchInput ms-auto">
                        <input type="text" className="form-control" placeholder="Search by name" onChange={findHandler} />
                    </div>
                </div>



                <table className="mt_40">
                    <thead>
                        <tr>
                            <th>
                                Builder/Project Name
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Phone
                            </th>
                            <th>
                                Message
                            </th>
                            <th>
                                Date
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {!data.length && dataLoading ? 
                        <tr>
                            <td colSpan={4}>
                                <div className="text-center">
                                <ScaleLoader 
                                    color="#ddd"
                                    className="w-100"
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

export default ProjectQuery