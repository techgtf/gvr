import React, { useEffect, useRef, useState } from "react";
import Button from 'common/Button/Button'
import CustomDropdown from 'common/Custom_Dropdown/CustomDropdown';
import Loader from "common/Loader/loader";

import SidebarPortal from "common/Portal/SidebarPortal";
import SideModal from "../components/Modal/SideModal/Index";
import BackdropPortal from 'common/Portal/Backdrop'
import Form from 'react-bootstrap/Form';
import {  toast } from 'react-toastify';
import Request from "root/config/Request";
import ScaleLoader from "react-spinners/ScaleLoader";
import * as CONFIG from 'root/config'
import Pagination from 'common/Pagination/Pagination';


const statusOptions = [
    { label: 'Active', value: '1' },
    { label: 'Hide', value: '0' },
];

const Offers = ()=>{
    const [isLoading, setIsLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1); // Current page state
    const [totalPage, setTotalPage] = useState(0);
    const [dataLoading, setDataLoading] = useState(false);
    const [data, setData] = useState([]);

    const [showAddSidebar, setShowAddSidebar] = useState(false);
    const [enableEdit, setEnableEdit] = useState(false);
    const [errors, setErrors] = useState({});
    const [lastPage, setLastPage] = useState(1);
    const [showEditEnableImage, setEditEnableImage] = useState({
        desktopImage : '',
        mobileImage : '',
    });
    const [editId, setEditId] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);

    const desktopImage = useRef('');
    const moblieImage = useRef('');
    const altText = useRef(null);

    useEffect(()=>{
        loadOfferList()

    }, [currentPage, totalPage])


    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    
    const addOfferHandler = ()=>{
        setShowAddSidebar(true)
        setEnableEdit(false)
    }

    const editOfferHandler = async (id)=>{
        setShowAddSidebar(true)
        setEnableEdit(true)
        setEditId(id);
        try{
            const response = await Request('admin/offer/'+id,'GET');
            if (response.status && response.statusCode === 200) {
                setEditEnableImage(prevState => ({
                    ...prevState,
                    desktopImage: CONFIG.VITE_APP_STORAGE + response.data.md_image,
                    mobileImage: CONFIG.VITE_APP_STORAGE + response.data.sm_image
                }));
                
                altText.current.value = response.data.alt;
            }
        }catch(err){
            console.log(err);
        }

    }

    const handleStatusSelect = async (selectedValue, id) => {
        setSelectedStatus(selectedValue);
        await updateStatusHandler(id, selectedValue);
    };

    const updateStatusHandler = async (id, selectedStatus) => {
        // setIsLoading(true);

        const formData=new FormData();
        formData.append('status',selectedStatus);
        var response = await Request('admin/offer/'+id+'/status', 'POST', formData);

        // setIsLoading(false);

        if(response.status && response.statusCode==403){

            setErrors(response.errors);
            toast.error(response.message);

        }else if(response.status && response.statusCode==200){
            toast.success(response.message);
        } 

    };


    const deleteOfferHandler = async (id) => {
         setIsLoading(true);
         var response = await Request('admin/offer/'+id, 'DELETE');
         if(response.status && response.statusCode==403){
             setErrors(response.errors);
             toast.error(response.message);
 
         }else if(response.status && response.statusCode==200){
            loadOfferList();
             toast.success(response.message);
         } 
          setIsLoading(false);
    }


    const cancelHandler = ()=>{
        setShowAddSidebar(false)
        setEditEnableImage({
            desktopImage: null,
            mobileImage: null
        });
    }


    const resetFields=()=>{
        desktopImage.current = ''
        moblieImage.current = ''
        altText.current.value = ''
    }

    const addSubmitHandler = async (e) => {
        e.preventDefault();
   
        try{
 
            const formData=new FormData();
            if(desktopImage.current.files[0]){
                formData.append('md_image',desktopImage.current.files[0]);
            }
            if(moblieImage.current.files[0]){
                formData.append('sm_image',moblieImage.current.files[0]);
            }
            formData.append('alt',altText.current.value);

            const response = await Request('admin/offer', 'POST', formData);

            if(response.status && response.statusCode==403){
                setErrors(response.errors);
                setIsLoading(false);
                throw new Error('Please fill required fields')

            }else if(!response.status){
                setIsLoading(false);
                throw new Error(response.message);
            }else if(response.status && response.statusCode==200){
                resetFields()
                await loadOfferList()
                setShowAddSidebar(false)
                setIsLoading(false);
                toast.success(response.message);
            } 

        }catch(err){
            toast.error(err.message)
        }
    }
    
    const updateOfferHandler = async (e)=>{
        e.preventDefault();

        try{
 
            const formData=new FormData();
            if(desktopImage.current.files[0]){
                formData.append('md_image',desktopImage.current.files[0]);
            }
            if(moblieImage.current.files[0]){
                formData.append('sm_image',moblieImage.current.files[0]);
            }
            formData.append('alt',altText.current.value);


            const response = await Request('admin/offer/'+editId+'/update', 'POST', formData);

            setIsLoading(false);
            if(response.status && response.statusCode==403){
                setErrors(response.errors);
                throw new Error('Please fill required fields')

            }else if(!response.status){
                
                throw new Error(response.message);

            }else if(response.status && response.statusCode==200){
                
                toast.success(response.message);
                resetFields()
                setShowAddSidebar(false)
                return 
            } 

        }catch(err){
            toast.error(err.message)
        }
    }
    const loadOfferList = async () => {
        setIsLoading(true)
        try{
            const response = await Request(`admin/offer?page=${currentPage}`, 'GET');
       
            if(response.status && response.statusCode==200)
            {
                // if(!response.data.data.length){
                //     setnotFound(true);
              
                // }
                setData(response.data.data)
                setLastPage(response.data.last_page);
                setIsLoading(false)
            }else{
                setData([])
                setLastPage(0);
                setIsLoading(false)
            }
        }
        catch(err){
            setIsLoading(false)
            toast.error(err.message)
        }
    }

    return(
        <>
            <div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">Offers</h4>
                <Button className="btn btn_primary" onClick={addOfferHandler}>Add Offer</Button>
            </div>

            <div className="card mt-4 card_style1">
                <h5>All Offers</h5>

                <table className="mt_40">
                    <thead>
                        <tr>
                            <th>
                                Image (Desktop)
                            </th>
                            <th>
                                Image (Mobile)
                            </th>
                            <th>
                                Alt Text
                            </th>
                            <th>
                                Status
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
                            data.map(item => (
                                <tr key={item.id}>
                                    <td>
                                        <div className="thumb">
                                            <img src={CONFIG.VITE_APP_STORAGE + item.md_image} alt="property" className="img-fluid" />
                                        </div>
                                    </td>

                                    <td>
                                        <div className="thumb">
                                            <img src={CONFIG.VITE_APP_STORAGE + item.sm_image} alt="property" className="img-fluid" />
                                        </div>
                                    </td>

                                    <td>
                                        {item.alt}
                                    </td>

                                    <td>
                                        <CustomDropdown className="form-control" defaultVal={item.status} options={statusOptions} onSelect={(selectedValue) => handleStatusSelect(selectedValue, item.id)} />
                                    </td>

                                    <td>
                                        <button className="btn action_btn" onClick={() => editOfferHandler(item.id)}>
                                            <img src={CONFIG.ADMIN_IMG_URL + 'icons/edit.svg'} alt="edit icon" className="img-fluid icon"  />
                                        </button>

                                        <button className="btn action_btn" onClick={() => deleteOfferHandler(item.id)}>
                                            <img src={CONFIG.ADMIN_IMG_URL + 'icons/delete_color.svg'} alt="delete icon"  className="img-fluid icon delete" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : !isLoading && <tr><td colSpan="5"><h5 className="no_record">No Offers Found!</h5></td></tr>}
                        
                    </tbody>
                </table>

                {(data.length ? <Pagination currentPage={currentPage} totalPages={lastPage} onPageChange={handlePageChange} /> : null)}
            </div>

            {showAddSidebar && (
                <>
                    <SidebarPortal className="portal">
                        <SideModal onCancel={cancelHandler} onSubmit={(enableEdit ? updateOfferHandler : addSubmitHandler)} isEnableEdit={enableEdit}>
                            <Form >
                                <Form.Group className="mb_20">
                                    <Form.Label>Select Desktop Image* <small className="size">(Size 1600px x 400px)</small></Form.Label>
                                    <Form.Control ref={desktopImage} className="form-control" required type="file" />
                                    {errors.md_image && <div className="errMsg text-danger">{errors.md_image}</div>}
                                    {showEditEnableImage.desktopImage ? <img width="100" src={showEditEnableImage.desktopImage}/> : null }
                                </Form.Group>

                                <Form.Group className="mb_20">
                                    <Form.Label>Select Mobile Image* <small className="size">(Size 500px x 700px)</small></Form.Label>
                                    <Form.Control ref={moblieImage} className="form-control" required type="file" />
                                    {errors.sm_image && <div className="errMsg text-danger">{errors.sm_image}</div>}
                                    {showEditEnableImage.mobileImage ? <img width="100" src={showEditEnableImage.mobileImage}/> : null }
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Alt Text*</Form.Label>
                                    <Form.Control ref={altText} className="" required type="text" placeholder="Enter Alt Text" />

                                </Form.Group>
                            </Form>
                        </SideModal>
                    </SidebarPortal>
                    <BackdropPortal  className="show"/>
                </>
            )}
        </>
    )
}

export default Offers;