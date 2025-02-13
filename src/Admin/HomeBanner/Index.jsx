import React, { useEffect, useRef, useState } from "react";
import CustomDropdown from 'common/Custom_Dropdown/CustomDropdown';
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from 'common/Portal/Backdrop'
import SideModal from "../components/Modal/SideModal/Index";
import Form from 'react-bootstrap/Form';
import Loader from "common/Loader/loader";
import {  toast } from 'react-toastify';
import Pagination from 'common/Pagination/Pagination';
import {useNavigate } from 'react-router-dom';
import Request from 'root/config/Request';
import ReactQuill from 'react-quill';
import Button from 'common/Button/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAsyncError } from "react-router-dom";
import * as CONFIG from '../../../config';
import ScaleLoader from "react-spinners/ScaleLoader";




const statusOptions = [
    { label: 'Active', value: '1' },
    { label: 'Hide', value: '0' },
];

const HomeBanner = () => {

   
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

    
    const addBannerImgHandler = ()=>{
        setShowAddSidebar(true)
        setEnableEdit(false)
    }


    const editBannerImgHandler = async (id)=>{
        setShowAddSidebar(true)
        setEnableEdit(true)
        setEditId(id);
        try{
            const response = await Request('admin/home-banner/'+id,'GET');
            if (response.status && response.statusCode === 200) {
                setEditEnableImage(prevState => ({
                    ...prevState,
                    desktopImage: CONFIG.VITE_APP_STORAGE + response.data.desktop_image,
                    mobileImage: CONFIG.VITE_APP_STORAGE + response.data.mobile_image
                }));
                
                altText.current.value = response.data.image_alt;
            }
        }catch(err){
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
        var response = await Request('admin/home-banner/'+id+'/status', 'POST', formData);

        // setIsLoading(false);

        if(response.status && response.statusCode==403){

            setErrors(response.errors);
            toast.error(response.message);

        }else if(response.status && response.statusCode==200){
            toast.success(response.message);
        } 

    };


    const deleteBannerImgHandler = async (id) => {
         setIsLoading(true);
         var response = await Request('admin/home-banner/'+id, 'DELETE');
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
        desktopImage.current.files = ''
        moblieImage.current.files = ''
        altText.current.value = ''
    }
      
 
 

    const addSubmitHandler = async (e) => {
        e.preventDefault();
   
        try{
 
            const formData=new FormData();
            if(desktopImage.current.files[0]){
                formData.append('desktop_image',desktopImage.current.files[0]);
            }
            if(moblieImage.current.files[0]){
                formData.append('mobile_image',moblieImage.current.files[0]);
            }
            formData.append('image_alt',altText.current.value);


            const response = await Request('admin/home-banner', 'POST', formData);


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

    
    const updateBannerImgHandler = async (e)=>{
        e.preventDefault();
 
        try{
 
            const formData=new FormData();
            if(desktopImage.current.files[0]){
                formData.append('desktop_image',desktopImage.current.files[0]);
            }
            if(moblieImage.current.files[0]){
                formData.append('mobile_image',moblieImage.current.files[0]);
            }
            formData.append('image_alt',altText.current.value);


            const response = await Request('admin/home-banner/'+editId+'/update', 'POST', formData);

            setIsLoading(false);
            if(response.status && response.statusCode == 403){
                setErrors(response.errors);
                throw new Error('Please fill required fields')

            }else if(!response.status){
                
                throw new Error(response.message);

            }else if(response.status && response.statusCode==200){
                
                toast.success(response.message);
                resetFields()
                setShowAddSidebar(false)
            } 

        }catch(err){
            toast.error(err.message)
        }
    }


    const loadOfferList = async () => {
        setDataLoading(true)
        
        const response = await Request(`admin/home-banner?page=${currentPage}`, 'GET');
       
        if(response.status && response.statusCode==200)
        {
            if(!response.data.data.length){
                setnotFound(true);
          
            }
            setData(response.data.data)
            setLastPage(response.data.last_page);
        }
        setDataLoading(false)
    
    }

    
    useEffect(()=>{
        loadOfferList()

    }, [currentPage, totalPage])
    
    
    if (isLoading) {
        return <Loader />; // Use the Loader component
    } 


    const handlePageChange = (page) => {
        setCurrentPage(page);
    };



    return(
        <>
            <div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">Home Banner Detail</h4>
            </div>

            <div className="card mt-4 card_style1">
                <div className="d-flex">
                    <h5>All Banner Images</h5>
                    <button className="btn ms-auto btn_primary btn-sm"  onClick={addBannerImgHandler}>Add Image</button>
                </div>
 
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
                                Alt
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
                            data.map(item => (
                                <tr key={item.id}>
                                    <td>
                                        <div className="thumb">
                                            <img src={CONFIG.VITE_APP_STORAGE + item.desktop_image} alt="property" className="img-fluid" />
                                        </div>
                                    </td>

                                    <td>
                                        <div className="thumb">
                                            <img src={CONFIG.VITE_APP_STORAGE + item.mobile_image} alt="property" className="img-fluid" />
                                        </div>
                                    </td>

                                    <td>
                                        {item.image_alt}
                                    </td>

                                    <td>
                                        <CustomDropdown className="form-control" defaultVal={item.status} options={statusOptions} onSelect={(selectedValue) => handleStatusSelect(selectedValue, item.id)} />
                                    </td>

                                    <td>
                                        <button className="btn action_btn" onClick={() => editBannerImgHandler(item.id)}>
                                            <img src={CONFIG.ADMIN_IMG_URL + 'icons/edit.svg'} alt="edit icon" className="img-fluid icon"  />
                                        </button>

                                        <button className="btn action_btn" onClick={() => deleteBannerImgHandler(item.id)}>
                                            <img src={CONFIG.ADMIN_IMG_URL + 'icons/delete_color.svg'} alt="delete icon"  className="img-fluid icon delete" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <Pagination currentPage={currentPage} totalPages={lastPage} onPageChange={handlePageChange} />

            </div>

            {showAddSidebar && (
                <>
                    <SidebarPortal className="portal">
                        <SideModal onCancel={cancelHandler} onSubmit={(enableEdit ? updateBannerImgHandler : addSubmitHandler)} isEnableEdit={enableEdit}>
                            <Form >
                                <Form.Group className="mb_20">
                                    <Form.Label>Select Desktop Image*</Form.Label>
                                    <Form.Control ref={desktopImage} className="form-control" required type="file" />
                                    {errors.md_image && <div className="errMsg text-danger">{errors.md_image}</div>}
                                    {showEditEnableImage.desktopImage ? <img width="100" src={showEditEnableImage.desktopImage}/> : null }
                                </Form.Group>

                                <Form.Group className="mb_20">
                                    <Form.Label>Select Mobile Image*</Form.Label>
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
                    <BackdropPortal />
                </>
            )}
        </>
    )
}

export default HomeBanner;