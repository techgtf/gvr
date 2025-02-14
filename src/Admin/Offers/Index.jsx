import React, { useEffect, useRef, useState } from "react";
import Button from 'common/Button/Button'
import CustomDropdown from 'common/Custom_Dropdown/CustomDropdown';
import Loader from "common/Loader/loader";

import SidebarPortal from "common/Portal/SidebarPortal";
import SideModal from "../components/Modal/SideModal/Index";
import BackdropPortal from 'common/Portal/Backdrop'
import {  toast } from 'react-toastify';
import Request from "root/config/Request";
import ScaleLoader from "react-spinners/ScaleLoader";
import * as CONFIG from '../../../config'
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
            <div className="flex justify-between items-center">
                <h4 className="text-xl font-semibold">Offers</h4>
                <Button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addOfferHandler}>Add Offer</Button>
            </div>

            <div className="bg-white shadow-md rounded p-4 mt-4">
                <h5 className="text-lg font-semibold">All Offers</h5>

                <table className="w-full mt-4 border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 border">Image (Desktop)</th>
                            <th className="p-2 border">Image (Mobile)</th>
                            <th className="p-2 border">Alt Text</th>
                            <th className="p-2 border">Status</th>
                            <th className="p-2 border">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {isLoading ? (
                            <tr>
                                <td colSpan="5" className="text-center py-4">
                                    <ScaleLoader color="#ddd" />
                                </td>
                            </tr>
                        ) : data.length ? (
                            data.map(item => (
                                <tr key={item.id} className="border">
                                    <td className="p-2 border">
                                        <img src={CONFIG.VITE_APP_STORAGE + item.md_image} alt="property" className="w-24 h-16 object-cover" />
                                    </td>
                                    <td className="p-2 border">
                                        <img src={CONFIG.VITE_APP_STORAGE + item.sm_image} alt="property" className="w-16 h-16 object-cover" />
                                    </td>
                                    <td className="p-2 border">{item.alt}</td>
                                    <td className="p-2 border">
                                        <CustomDropdown className="w-full" defaultVal={item.status} options={statusOptions} onSelect={(selectedValue) => handleStatusSelect(selectedValue, item.id)} />
                                    </td>
                                    <td className="p-2 border flex gap-2">
                                        <button className="bg-yellow-500 text-white p-2 rounded" onClick={() => editOfferHandler(item.id)}>Edit</button>
                                        <button className="bg-red-500 text-white p-2 rounded" onClick={() => deleteOfferHandler(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr><td colSpan="5" className="text-center py-4">No Offers Found!</td></tr>
                        )}
                    </tbody>
                </table>
                {data.length > 0 && <Pagination currentPage={currentPage} totalPages={lastPage} onPageChange={setCurrentPage} />}
            </div>

            {showAddSidebar && (
                <>
                    <SidebarPortal>
                        <SideModal onCancel={() => setShowAddSidebar(false)}>
                            <div className="p-4">
                                <label className="block">Select Desktop Image</label>
                                <input type="file" ref={desktopImage} className="border p-2 w-full" />
                                {showEditEnableImage.desktopImage && <img src={showEditEnableImage.desktopImage} className="w-24 mt-2" alt="Preview" />}

                                <label className="block mt-4">Select Mobile Image</label>
                                <input type="file" ref={mobileImage} className="border p-2 w-full" />
                                {showEditEnableImage.mobileImage && <img src={showEditEnableImage.mobileImage} className="w-24 mt-2" alt="Preview" />}
                            </div>
                        </SideModal>
                    </SidebarPortal>
                    <BackdropPortal className="fixed inset-0 bg-black bg-opacity-50" />
                </>
            )}
        </>
    )
}

export default Offers;