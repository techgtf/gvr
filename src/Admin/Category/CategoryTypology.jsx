import React, { useEffect, useRef, useState } from "react"
import { useNavigate ,useParams} from "react-router-dom";

import CustomDropdown from 'common/Custom_Dropdown/CustomDropdown';
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from 'common/Portal/Backdrop'
import SideModal from "../components/Modal/SideModal/Index";
import Form from 'react-bootstrap/Form';
import Button from 'common/Button/Button';
import Loader from "common/Loader/loader";
import JsonRequest from "root/config/JsonRequest";
import Request from "root/config/Request";

import {  toast } from 'react-toastify';
import ScaleLoader from "react-spinners/ScaleLoader";
import ReactPaginate from 'react-paginate';

const statusOptions = [
    { label: 'Active', value: 'active' },
    { label: 'Hide', value: 'hide' },
];

const CategoryTypology = ()=>{
    const category_id=useParams().id;
    const [categorydata, setCategorydata] = useState([]);
    const [selectedTypology, setSelectedTypology] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [dataLoading, setDataLoading] = useState(false)
    const [dictictTypology, setDictictTypology] = useState([]);
    const [showSidebar, setShowSidebar] = useState(false);
    const [errors, setErrors] = useState({});
    const [enableEdit, setenableEdit] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isTargeting, setIsTargeting] = useState("");

    
    const [notFound, setnotFound] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); // Current page state
    const [totalPage, setTotalPage] = useState(0)


    const typologyRef = useRef(null);
    const getTyplology = async () => {
        var response=await Request('admin/category/'+category_id,'GET');
        if (response.status && response.statusCode === 200) {
            setCategorydata(response.data);

        }
    }



    const list = async () => {
        setDataLoading(true)
        const response = await Request(`admin/getTypologyDistinctByCategory/${category_id}`, 'GET');
        if(response.status && response.statusCode==200)
        {
            if(!response.data.length){
                setnotFound(true);
          
            }
            setDictictTypology(response.data)
      
        }
        setDataLoading(false)
    }


    const getselcteTypology = async () => {
        setDataLoading(true);
        const response = await Request(`admin/category-typology?categories_id=${category_id}`, 'GET');
        if(response.status && response.statusCode==200)
        {
            setSelectedTypology(response.data.data);
        }
        setDataLoading(false)
    }




    useEffect(()=>{
        getTyplology()
        list()
        getselcteTypology()

    }, [currentPage, totalPage])

    

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected + 1);
    }

    const handleStatusSelect = ()=>{

    }

    const cancelHandler = ()=>{
        setShowSidebar(false)
    }

    const resetFields=()=>{
        typologyRef.current.value = ''
    }

    const addSubmitHandler = async(e)=>{
        e.preventDefault();
        var typologyVal = typologyRef.current.value
         setIsLoading(true);
        try{
            const formData = new FormData()
            formData.append('typology', typologyVal);
            const response = await Request('admin/sub-typology', 'POST', formData);
          

            if(response.status && response.statusCode==403){
                setErrors(response.message);
                throw new Error('Please fill required fields')
            }else if(!response.status){
                throw new Error(response.message)
            }else if(response.status && response.statusCode==200){
                toast.success(response.message);
                resetFields()
                setShowSidebar(false);
                
                list();
                return 
            } 

        }catch(err){
            toast.error(err.message)
        }
        setIsLoading(false);

    }

    
    const deleteHandler=async(id)=>{
        setIsTargeting(id);
        
        var response=await JsonRequest('admin/category-typology/'+id,'DELETE');
        if(response.status && response.statusCode==200){
            list();
            getselcteTypology();
            toast.success(response.message);
            setIsTargeting("id");

        }else{
            toast.success(response.message);

        }
       
      setIsLoading(false);


    
}
const addInCategory=async (typologies_id)=>{
    setIsTargeting(typologies_id);
    const object={
        categories_id:category_id,
        typologies_id:typologies_id,
    }
    const response = await JsonRequest('admin/category-typology', 'POST', object);

    if(response.status && response.statusCode==200){
        list();
        setIsTargeting("");
        getselcteTypology();
        
    }
   
  
}






    if (isLoading) {
        return <Loader />; // Use the Loader component
    } 

    return(
        <>
            <div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">{categorydata.name}</h4>
            </div>

            <div className="row">

                <div className="col-md-6">
                    <div className="card mt-4 card_style1">
                        <div className="d-flex">
                            <h5>All Typology </h5>
                        </div>
                        <table className="mt_40">
                            <thead>
                                <tr>
                                    <th>
                                        Name
                                    </th>
                                   
                                    <th>
                                        Transfer
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {!dictictTypology.length && dataLoading ? 
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
                                dictictTypology.map((item, index)=>(
                                    <tr key={index}>
                                        <td>
                                            {item.typology}
                                        </td>
                                        

                                        <td>
                                          <button className="btn btn_primary btn_sm" onClick={()=>addInCategory(item.id)}>
                                            {isTargeting === item.id ? "loading" :  "Add to " +categorydata.name}
                                          </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>

                        {!dataLoading && !notFound && (
                            <ReactPaginate 
                                breakLabel="..."
                                nextLabel="next"
                                pageCount={totalPage}
                                onPageChange={handlePageChange}
                            />
                        )}
                        
                        {notFound && (
                            <h5 className="no_record">No  More Record Found!</h5>
                        )}
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card mt-4 card_style1">
                        <div className="d-flex">
                            <h5>Selected Typologies</h5>
                        </div>

                        <table className="mt_40">
                            <thead>
                                <tr>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {!selectedTypology.length && dataLoading ? 
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
                                selectedTypology.map((item, index)=>(
                                    <tr key={index}>
                                        <td>
                                            {item.typology}
                                        </td>

                                        <td>
                                        

                                            <button className="btn btn_primary btn_sm" onClick={()=>deleteHandler(item.id)}>
                                            {isTargeting === item.id ? "loading" :  "Remove " +categorydata.categoty}
                                          </button>


                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>

                        {!dataLoading && !notFound && (
                            <ReactPaginate 
                                breakLabel="..."
                                nextLabel="next"
                                pageCount={totalPage}
                                onPageChange={handlePageChange}
                            />
                        )}
                        
                        {notFound && (
                            <h5 className="no_record">No  More Record Found!</h5>
                        )}
                    </div>
                </div>
            </div>

            {showSidebar && (
                <>
                    <SidebarPortal className="portal">
                        <SideModal onCancel={cancelHandler} onSubmit={(enableEdit ? updateAmenityHandler : addSubmitHandler)}>
                            <Form >
                                <Form.Group className="mb_15">
                                    <Form.Label>Sub Typology Name*</Form.Label>
                                    <Form.Control ref={typologyRef} className="form-control" placeholder="Enter sub typology name" required type="text" />
                                    {errors.typology && <div className="errMsg">{errors.typology}</div>}
                                </Form.Group>
                            </Form>
                        </SideModal>
                    </SidebarPortal>
                    <BackdropPortal />
                </>
            )}
        </>
    )
}

export default CategoryTypology