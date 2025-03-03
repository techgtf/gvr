import React, { useEffect, useRef, useState } from "react"
import Loader from "common/Loader/loader";
import Request from "root/config/JsonRequest";
import ScaleLoader from "react-spinners/ScaleLoader";
import Pagination from 'common/Pagination/Pagination';
import * as CONFIG from '../../../config'


const JobApplications = ()=>{
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [notFound, setnotFound] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); // Current page state
    const [lastPage, setLastPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0)

    useEffect(()=>{
        const loadEnquiries = async () => {
            setIsLoading(true)
            const response = await Request(`admin/job-application`, 'GET');
            if(response.status && response.statusCode==200)
            {
                setData(response.data.data)
                setFilteredData(response.data.data)
                setTotalPage(response.data.last_page)
                setIsLoading(false)
            }else{
                setData(response.data.data)
                setFilteredData(response.data.data)
                setIsLoading(false)
            }
        }

        loadEnquiries()

    }, [currentPage, totalPage])

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const findHandler = async(e)=>{
        const searchTerm = e.target.value.toLowerCase();
        try{
            const filteredJobApplications = data.filter(item=>item.name.toLowerCase().includes(searchTerm))
            setFilteredData(filteredJobApplications)
        }catch(err){
            toast.error(err.message)
        }
    }

    return(
        <>
            <div className="flex title_col justify-between items-center">
                <h4 className="page_title">Job Applications</h4>
            </div>

            <div className="card bg-white mt-4 card_style1">
                <div className="flex items-center">
                    <h5 className="mb-0">All Job Applications</h5>

                    <div className="searchInput ml-auto">
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
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2 text-left">
                                Candidate Name
                            </th>
                            <th className="border border-gray-300 p-2 text-left">
                                Email
                            </th>
                            <th className="border border-gray-300 p-2 text-left">
                                Phone
                            </th>
                            <th className="border border-gray-300 p-2 text-left">
                                Designation
                            </th>
                            <th className="border border-gray-300 p-2 text-left">
                                Experience
                            </th>
                            <th className="border border-gray-300 p-2 text-left">
                                Message
                            </th>
                            <th className="border border-gray-300 p-2 text-left">
                                CV
                            </th>
                            <th className="border border-gray-300 p-2 text-left">
                                Date
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {isLoading && 
                        <tr className="border-b border-gray-200">
                            <td colSpan={8}>
                                <div className="text-center py-4">
                                    <ScaleLoader 
                                        color="#ddd"
                                        className="w-full"
                                    /> 
                                </div>
                            </td>
                        </tr>
                        }
                        
                        {!isLoading && filteredData?.length ? (
                            filteredData.map((item)=>(
                                <tr key={item.id} className="border-b">
                                    <td className="py-2 px-4">
                                        {item.name}
                                    </td>
                                    <td className="py-2 px-4">
                                        {item.email}
                                    </td>
                                    <td className="py-2 px-4">
                                        {item.phone}
                                    </td>
                                    <td className="py-2 px-4">
                                        {item.designation}
                                    </td>
                                    <td className="py-2 px-4">
                                        {item.experience + " Years"}
                                    </td>
                                    <td className="py-2 px-4">
                                        {item.message}
                                    </td>
                                    <td className="py-2 px-4">
                                        <a href={CONFIG.VITE_APP_STORAGE + item.resume} download={item.name + '-resume'} target="_blank">
                                            <img src={CONFIG.ADMIN_IMG_URL + 'icons/pdf.svg'} alt="pdf icon" className="img-fluid" width="40" />
                                        </a>
                                    </td>
                                    <td className="py-2 px-4">
                                        {new Date(item.created_at).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour:'2-digit', minute: '2-digit', second: '2-digit' })}
                                    </td>
                                </tr>
                            ))
                        ) : !isLoading ? <tr><td colSpan={8} className="text-center">No Record Found</td></tr> : null}

                        
                    </tbody>

                </table>

                {filteredData.length ? (
                    <Pagination currentPage={currentPage} totalPages={lastPage} onPageChange={handlePageChange} />
                ) : null}
                
                {notFound && (
                    <h5 className="no_record">No Record Found!</h5>
                )}
            </div>
        </>
    )
}

export default JobApplications