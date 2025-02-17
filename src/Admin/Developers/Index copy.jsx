import React, { useRef, useState } from "react"
import CustomDropdown from 'common/Custom_Dropdown/CustomDropdown';
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from 'common/Portal/Backdrop'
import SideModal from "admin/components/Modal/SideModal/Index";
import Form from 'react-bootstrap/Form';
import Button from 'common/Button/Button';
import Loader from "common/Loader/loader";
import Request from "root/config/Request";
import {  toast } from 'react-toastify';
import * as CONFIG from 'root/config';

const statusOptions = [
    { label: 'Active', value: 'active' },
    { label: 'Hide', value: 'hide' },
];

const Developers = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [showAddSidebar, setShowAddSidebar] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [errors, setErrors] = useState({
        name:'',
        mobile:'',
        address:'',
        rera:'',
        description:'',
        image:'',
    });
    const [enableEdit, setenableEdit] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const developerRef = useRef(null);
    const developerMobileRef = useRef(null);
    const developerAddressRef = useRef(null);
    const developerReraRef = useRef(null);
    const developerDescriptionRef = useRef(null);
    const developerLogoRef = useRef(null);

    const addDeveloperHandler = ()=>{
        setShowSidebar(!showSidebar)
    }

    const handleStatusSelect = ()=>{

    }

    const cancelHandler = ()=>{

    }

    const addSubmitHandler = async(e)=>{
        e.preventDefault();
        var nameVal = developerRef.current.value
        var mobileVal = developerMobileRef.current.value
        var addressVal = developerAddressRef.current.value
        var reraVal = developerReraRef.current.value
        var descriptionVal = developerDescriptionRef.current.value
        var logoVal = developerLogoRef.current.files[0]
        
        try{
            setErrors((prevErrors)=>(
                {
                    ...prevErrors,
                    name:'',
                    mobile:'',
                    address:'',
                    rera:'',
                    description:'',
                    image:'',
                }
            ))

            setErrors((prevErrors) => ({
                ...prevErrors,
                name: !nameVal && 'Please enter developer name',
                mobile: !mobileVal && 'Please enter developer mobile',
                address: !addressVal && 'Please enter address',
                rera: !reraVal && 'Please enter RERA',
                description: !descriptionVal && 'Please enter description',
                image: !logoVal && 'Please select an image',
            }));

            // Check if any error exists

            const hasErrors = Object.values(errors).some(error=>error)

            if(hasErrors){
                setFormSubmitted(true);
                throw new Error('Please fill required fields')
            }

            // Reset form submission state
            setFormSubmitted(false);

            const formData = new FormData()
            formData.append('developer', nameVal);
            formData.append('mobile', mobileVal);
            formData.append('address', addressVal);
            formData.append('rera', reraVal);
            formData.append('description', descriptionVal);
            formData.append('image', logoVal);

            // hit api

            const response = await Request('admin/developer', 'POST', formData);
            setIsLoading(false);

            if(response.status !== true){
                throw new Error(response.message)
            }

            return toast.success(response.message);
        }catch(err){
            toast.error(err.message)
        }
    }

    if (isLoading) {
        return <Loader />; // Use the Loader component
    } 

    return(
        <>
            <div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">Developers</h4>
                <Button className="btn ms-auto btn_primary btn-sm" onClick={addDeveloperHandler}>Add Developer</Button>
            </div>

            <div className="card mt-4 card_style1">
                <div className="d-flex">
                    <h5>All Amenities</h5>
                </div>

                {/* <form >
                    <input ref={fileRef} type="file" className="form-control" />
                    <input type="text" className="form-control" placeholder="Enter Amenity Name" />
                    <button type="submit" className="btn btn_primary">Save</button>
                </form> */}

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
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                test
                            </td>
                            <td>
                                <div className="thumb icon">
                                    <img src={CONFIG.VITE_APP_STORAGE} alt="" className="img-fluid" />
                                </div>
                            </td>

                            <td>
                                <CustomDropdown className="form-control" defaultVal="Select --" options={statusOptions} onSelect={handleStatusSelect()}  />
                            </td>

                            <td>
                                <button className="btn action_btn" >
                                    <img src={CONFIG.ADMIN_IMG_URL + 'icons/edit.svg'} alt="edit icon" className="img-fluid icon"  />
                                </button>

                                <button className="btn action_btn" >
                                    <img src={CONFIG.ADMIN_IMG_URL + 'icons/delete_color.svg'} alt="delete icon"  className="img-fluid icon delete"  />
                                </button>
                            </td>
                        </tr>
                    
                        <tr><td colspan="2"><h5 className="no_record">No  More  Found!</h5></td></tr>

                    </tbody>

                </table>


                <h5 className="no_record">No  More Record Found!</h5>
            </div>

            {showSidebar && (
                <>
                    <SidebarPortal className="portal">
                        <SideModal onCancel={cancelHandler} onSubmit={(enableEdit ? updateAmenityHandler : addSubmitHandler)}>
                            <Form >
                                <Form.Group className="mb_15">
                                    <Form.Label>Developer Name*</Form.Label>
                                    <Form.Control ref={developerRef} className="form-control" placeholder="Enter developer name" required type="text" />
                                    {formSubmitted && errors.name && <div className="errMsg">{errors.name}</div>}
                                </Form.Group>

                                <Form.Group className="mb_15">
                                    <Form.Label>Mobile No.</Form.Label>
                                    <Form.Control ref={developerMobileRef} className="form-control" placeholder="Enter mobile no." type="number" />
                                    {formSubmitted && errors.mobile && <div className="errMsg">{errors.mobile}</div>}
                                </Form.Group>

                                <Form.Group className="mb_15">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control ref={developerAddressRef} className="form-control" placeholder="Enter address" type="text" />
                                    {formSubmitted && errors.address && <div className="errMsg">{errors.address}</div>}
                                </Form.Group>

                                <Form.Group className="mb_15">
                                    <Form.Label>RERA</Form.Label>
                                    <Form.Control ref={developerReraRef} className="form-control" placeholder="Enter rera" type="text" />
                                    {formSubmitted && errors.rera && <div className="errMsg">{errors.rera}</div>}

                                </Form.Group>

                                <Form.Group className="mb_15">
                                    <Form.Label>Developer Logo*</Form.Label>
                                    <Form.Control ref={developerLogoRef} className="form-control" required type="file" />
                                    {formSubmitted && errors.image && <div className="errMsg">{errors.image}</div>}
                                </Form.Group>

                                <Form.Group className="mb_15">
                                    <Form.Label>About Developer*</Form.Label>
                                    <textarea ref={developerDescriptionRef} className="form-control textarea_sm" name="" id="" rows="5" placeholder="Enter about developer" />
                                    {formSubmitted && errors.description && <div className="errMsg">{errors.description}</div>}
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

export default Developers