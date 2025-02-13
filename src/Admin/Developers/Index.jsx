import React, { useEffect, useRef, useState } from "react"
import CustomDropdown from 'common/Custom_Dropdown/CustomDropdown';
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from 'common/Portal/Backdrop'
import SideModal from "../components/Modal/SideModal/Index";
import Form from 'react-bootstrap/Form';
import Button from 'common/Button/Button';
import Loader from "common/Loader/loader";
import Request from "root/config/Request";
import CustomSwitch from "common/CustomSwitch/Index";
import {  toast } from 'react-toastify';
import ScaleLoader from "react-spinners/ScaleLoader";
import * as CONFIG from '../../../config';
import Pagination from 'common/Pagination/Pagination';

const statusOptions = [
    { label: 'Active', value: '1' },
    { label: 'Hide', value: '0' },
];

const Developers = ()=>{
       // pagination  
       const [totalPage, setTotalPage] = useState(0);
       const [currentPage, setCurrentPage] = useState(1); // Current page state
       const [lastPage, setLastPage] = useState(1);
       // end Pagination 

       
    const [isLoading, setIsLoading] = useState(false);
    const [dataLoading, setDataLoading] = useState(false)
    const [data, setData] = useState([]);
    const [showSidebar, setShowSidebar] = useState(false);
    const [errors, setErrors] = useState({});
    const [isEnableEdit, setIsEnableEdit] = useState(false);
    const [isSitebarFormButtonLoading, setIsSitebarFormButtonLoading] = useState(false);


    const [formSubmitted, setFormSubmitted] = useState(false);
    const [notFound, setnotFound] = useState(false);

 
    const [developerImageShow, setDeveloperImageShow] = useState('')
    const [selectedStatus, setSelectedStatus] = useState(null);
    
    const [editId, setEditId] = useState(false);

    const developerRef = useRef(null);
    const developerMobileRef = useRef(null);
    const developerAddressRef = useRef(null);
    const developerReraRef = useRef(null);
    const developerDescriptionRef = useRef(null);
    const developerLogoRef = useRef(null);
    
    useEffect(()=>{
        loadDevelopers()
    }, [currentPage, totalPage])

    const updateStatusHandler = async (id, selectedStatus) => {
        const formData = new FormData();
        formData.append('status', selectedStatus);
        var response = await Request('admin/developer/'+id+'/status', 'POST', formData);
        if(response.status && response.statusCode==403){
            setErrors(response.errors);
            toast.error(response.message);
        }else if(response.status && response.statusCode==200){
            toast.success(response.message);

        } 

    };
    
    const loadDevelopers = async (search="") => {
        setIsLoading(true)
        const response = await Request(`admin/developer?search=${search}&page=${currentPage}`, 'GET');
        if(response.status && response.statusCode==200)
        {
            if(!response.data.data.length){
                setnotFound(true);
            }
            setData(response.data.data)
            setLastPage(response.data.last_page)
        }
        setIsLoading(false)
    
    }

    const handleStatusSelect = async (selectedValue, id) => {
        setSelectedStatus(selectedValue);
        await updateStatusHandler(id, selectedValue);
    };

    const addDeveloperHandler = ()=>{
        setShowSidebar(!showSidebar)
    }

    const editDeveloperHandler = async(id)=>{
        setIsEnableEdit(true)
        setShowSidebar(true);
        setEditId(id)
        setIsSitebarFormButtonLoading(true);
        try{
            const response = await Request('admin/developer/'+id,'GET');
            if (response.status && response.statusCode === 200) {
                developerRef.current.value = response.data.developer;
                developerMobileRef.current.value = response.data.mobile;
                developerAddressRef.current.value = response.data.address;
                developerReraRef.current.value = response.data.rera;
                setDeveloperImageShow(CONFIG.VITE_APP_STORAGE+response.data.logo);
                developerDescriptionRef.current.value = response.data.description;
                 setIsSitebarFormButtonLoading(false);
            }
        }catch(err){
        }
    }

    const deleteDeveloperHandler = async(id) => {

      
  

        var response = await Request('admin/developer/'+id, 'DELETE');
        if(response.status && response.statusCode==403){
            setErrors(response.errors);
            toast.error(response.message);

        }else if(response.status && response.statusCode==200){
            loadDevelopers();
            toast.success(response.message);
        } 

     
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
 

    const cancelHandler = ()=>{
        setShowSidebar(false);
        setDeveloperImageShow(null);
    }

    const resetFields=()=>{
        developerRef.current.value = ''
        developerMobileRef.current.value = ''
        developerAddressRef.current.value = ''
        developerReraRef.current.value = ''
        developerDescriptionRef.current.value = ''
        developerLogoRef.current.value = ''
    }

    const addSubmitHandler = async(e)=>{
        e.preventDefault();
        setIsSitebarFormButtonLoading(true);
        var nameVal = developerRef.current.value
        var mobileVal = developerMobileRef.current.value
        var addressVal = developerAddressRef.current.value
        var reraVal = developerReraRef.current.value
        var descriptionVal = developerDescriptionRef.current.value
        var logoVal = developerLogoRef.current.files[0]
         
        
        try{
            const formData = new FormData()
            formData.append('developer', nameVal);
            formData.append('mobile', mobileVal);
            formData.append('address', addressVal);
            formData.append('rera', reraVal);
            formData.append('description', descriptionVal);
            formData.append('image', logoVal);
             

            const response = await Request('admin/developer', 'POST', formData);

            if(response.status && response.statusCode==403){
                setErrors(response.errors);
                throw new Error('Please fill required fields')
            }else if(!response.status){
                throw new Error(response.message)
            }else if(response.status && response.statusCode==200){
                toast.success(response.message);
                resetFields()
                setShowSidebar(false)
                loadDevelopers();
                return 
            } 

        }catch(err){
            toast.error(err.message)
        }
        setIsSitebarFormButtonLoading(false);

    }

    const updateDeveloperHandler = async (e)=>{
        e.preventDefault();

        setIsEnableEdit(true);
        setShowSidebar(true);

        try{
 
            const formData = new FormData();

            if(developerLogoRef.current.files[0]){
                formData.append('image', developerLogoRef.current.files[0]);
            }
            
            formData.append('developer', developerRef.current.value);
            formData.append('mobile', developerMobileRef.current.value);
            formData.append('address', developerAddressRef.current.value);
            formData.append('rera', developerReraRef.current.value);
            formData.append('description', developerDescriptionRef.current.value);

            const response = await Request('admin/developer/'+editId+'/update', 'POST', formData);

            setIsLoading(false);
            if(response.status && response.statusCode==403){
                setErrors(response.errors);
                throw new Error('Please fill required fields')

            }else if(!response.status){
                
                throw new Error(response.message);

            }else if(response.status && response.statusCode==200){
                
                toast.success(response.message);
                resetFields()
                setShowSidebar(false)
                return 
            } 

        }catch(err){
            toast.error(err.message)
        }

    }

    const toggleSwitch = async(e)=>{
        try{
            const changeId = parseInt(e.target.id);
            const formData = new FormData()
            formData.append('is_popular',e.target.checked ? 1 : 0)
            const response = await Request(`admin/developer/${changeId}/is-popular`,'POST', formData);

            if(response.status && response.statusCode === 200){
                await loadDevelopers();
                toast.success(response.message);
            }else{
                toast.error(response.message);
            }
            
        }catch(err){

        }
    }

    
    const findHandler = async(e)=>{
        const searchTerm = e.target.value.toLowerCase();
        loadDevelopers(searchTerm);
    }

    

    return(
        <>
            <div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">Developers</h4>
                <Button className="btn ms-auto btn_primary btn-sm" onClick={addDeveloperHandler}>Add Developer</Button>
            </div>

            <div className="card mt-4 card_style1">
               
                <div className="d-flex align-items-center">
                    <h5 className="mb-0">Developers </h5>

                    <div className="searchInput ms-auto">
                        <input type="text" className="form-control" placeholder="Search by name" onChange={findHandler} />
                    </div>
                </div>



                <table className="mt_40">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Icons
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Is Popular
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {isLoading && (
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
                        )}

                        {!isLoading && data.length ? (
                            data.map(item=>(
                                <tr key={item.id}>
                                    <td>
                                        {item.developer}
                                    </td>
                                    <td>
                                        <div className="thumb icon">
                                            <img src={CONFIG.VITE_APP_STORAGE + item.logo} alt="" className="img-fluid" />
                                        </div>
                                    </td>
    
                                    <td>
                                        <CustomDropdown className="form-control" defaultVal={item.status} options={statusOptions} onSelect={(selectedValue) => handleStatusSelect(selectedValue, item.id)}  />
                                    </td>

                                    <td>
                                        <CustomSwitch id={item.id} toggleSwitch={toggleSwitch} isChecked={item.is_popular} />
                                    </td>
    
                                    <td>
                                        <button className="btn action_btn" onClick={()=>editDeveloperHandler(item.id)} >
                                            <img src={CONFIG.ADMIN_IMG_URL + 'icons/edit.svg'} alt="edit icon" className="img-fluid icon"  />
                                        </button>
    
                                        <button className="btn action_btn" onClick={() => deleteDeveloperHandler(item.id)} >
                                            <img src={CONFIG.ADMIN_IMG_URL + 'icons/delete_color.svg'} alt="delete icon"  className="img-fluid icon delete"  />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : !isLoading ? <tr><td colSpan="5"><h5 className="no_record">No Developers Found!</h5></td></tr> : null}
                    </tbody>

                </table>

                {!isLoading && <Pagination currentPage={currentPage} totalPages={lastPage} onPageChange={handlePageChange} />}

            </div>

            {showSidebar && (
                <>
                    <SidebarPortal className="portal">
                        <SideModal onCancel={cancelHandler} isEnableEdit={isEnableEdit}   onSubmit={(isEnableEdit ? updateDeveloperHandler : addSubmitHandler)} isLoading={isSitebarFormButtonLoading}>
                            <Form >
                                <Form.Group className="mb_15">
                                    <Form.Label>Developer Name*</Form.Label>
                                    <Form.Control ref={developerRef} className="form-control" placeholder="Enter developer name" required type="text" />
                                    {errors.developer && <div className="errMsg">{errors.developer}</div>}
                                </Form.Group>

                                <Form.Group className="mb_15">
                                    <Form.Label>Mobile No.</Form.Label>
                                    <Form.Control ref={developerMobileRef} className="form-control" placeholder="Enter mobile no." type="number" />
                                </Form.Group>

                                <Form.Group className="mb_15">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control ref={developerAddressRef} className="form-control" placeholder="Enter address" type="text" />
                                </Form.Group>

                                <Form.Group className="mb_15">
                                    <Form.Label>RERA</Form.Label>
                                    <Form.Control ref={developerReraRef} className="form-control" placeholder="Enter rera" type="text" />
                                </Form.Group>

                                <Form.Group className="mb_15">
                                    <Form.Label>Developer Logo*
                                        <small className="size">(Size 180px x 60px)</small>
                                    </Form.Label>
                                    <Form.Control ref={developerLogoRef} className="form-control" required type="file" />
                                    {errors.image && <div className="errMsg">{errors.image}</div>}
                                        {developerImageShow ? <img width="100" src={developerImageShow}/> : null }
                                </Form.Group>

                                <Form.Group className="mb_15">
                                    <Form.Label>About Developer*</Form.Label>
                                    <textarea ref={developerDescriptionRef} className="form-control textarea_sm" name="" id="" rows="5" placeholder="Enter about developer" />
                                    {errors.description && <div className="errMsg">{errors.description}</div>}
                                </Form.Group>

                            </Form>
                        </SideModal>
                    </SidebarPortal>
                    <BackdropPortal className="show" />
                </>
            )}
        </>
    )
}

export default Developers