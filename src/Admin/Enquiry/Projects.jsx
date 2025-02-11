import React, { useEffect, useRef, useState } from "react"
import Loader from "common/Loader/loader";
import Request from "root/config/JsonRequest";
import ScaleLoader from "react-spinners/ScaleLoader";
import Pagination from 'common/Pagination/Pagination';
import { Link } from "react-router-dom";
import * as CONFIG from 'root/config'


const ProjectsQuery = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [dataLoading, setDataLoading] = useState(false)
    const [data, setData] = useState([]);
    const [notFound, setnotFound] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); // Current page state
    const [lastPage, setLastPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0)

    useEffect(()=>{

        const loadEnquiries = async () => {
            setDataLoading(true)
            const response = await Request(`enquiry?page=${currentPage}`, 'GET');
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
        loadEnquiries()

    }, [currentPage, totalPage])

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    if (isLoading) {
        return <Loader />; // Use the Loader component
    } 

    return(
        <>
            <div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">Projects Query</h4>
            </div>

            <div className="card mt-4 card_style1">
                <div className="d-flex">
                    <h5>All Projects Queries</h5>
                </div>

                <table className="mt_40">
                    <thead>
                        <tr>
                            <th>
                                Builder Name
                            </th>
                            <th>
                                Total Queries	
                            </th>
                            <th>
                                View
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
                                    {item.email}
                                </td>
                                <td>
                                    <Link className="btn btn_sm btn_primary" to={`${CONFIG.ADMIN_ROOT}projects-query/${item.id}`}>View</Link>
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

export default ProjectsQuery