import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import CustomRadio from 'common/CustomRadio/Index'
import Col from 'react-bootstrap/Col';
import Button from 'common/Button/Button'
import ProjectSteps from '../components/ProjectSteps/Index'

import '../assets/css/admin.css';
import Loader from "common/Loader/loader";

import Request from 'root/config/JsonRequest';
import * as CONFIG from '../../../config'

import {getTypologyByCategory,getSubTypologyByTypology,projectStatusList} from 'root/config/function';
import { useSelector } from "react-redux";


const AddPlatter = ()=>{
    const [isLoading, setIsLoading] = useState(true);
  
    const [categorylist, setCategorylist] = useState([]);

    const [typologyList, setTypologyList] = useState([]);
    const [projectStatus, setProjectStatus] = useState([]);
    const [subtypologyList, setSubtypologyList] = useState([]);
    const [checkedCategory, setCheckedCategory] = useState('');
    const [checkedTypology, setCheckedTypology] = useState('');
    const [checkedSubTypology, setCheckedSubTypology] = useState('');
    const [checkedStatus, setCheckedStatus] = useState('');

    const [formFields, setFormFields] = useState({
        // Initialize your form data state
        category: "",
        typology: "",
        cities: "",
        sub_typology: "",
        name: "",
        meta_title: "",
        meta_description: "",
        meta_keyword : ""
      });




    const navigate = useNavigate()
    const [errors, setErrors] = useState({});


    const cities = useSelector(state=>state.projects.allCities)

    const basicSubmitHandler =async (e)=>{
        e.preventDefault();
        var response=await Request('admin/platter-page','POST',formFields);
        if (response.status && response.statusCode === 403) {
            setErrors(response.errors);
        }else if (response.status && response.statusCode === 200) {
          navigate(CONFIG.ADMIN_ROOT+'platter-page/'+response.data.id+ '/edit');
        }
    }



    const listcategory = async () => {
        var response=await Request('admin/category','GET');
        if (response.status && response.statusCode === 200) {
            setCategorylist(response.data.data);
        }
        setIsLoading(false);
    }
    
    const listProjectStatus = async () => {
        var response =await projectStatusList();
        if (response.status && response.statusCode === 200 ) {
            setProjectStatus(response.data);
        }
    }
    
    const fetchtypologyHandle=async (event)=>{
        formFields.category=event.target.value;
        var response =await getTypologyByCategory(event.target.value);
        if (response.status && response.statusCode === 200 && response.data.data.length >0) {
            setTypologyList(response.data.data);
        }else{
            
             setTypologyList([]);
            
         }
    }
    const getSubTypologyByTypologyList=async(event)=>{
        formFields.typology=event.target.value;

        var response =await getSubTypologyByTypology(event.target.value);
        if (response.status && response.statusCode === 200 && response.data.data.length > 0) {
            setSubtypologyList(response.data.data);
         }else{
            setSubtypologyList([]);
         }
    }

    const handleCheckedStatus=(event)=>{
        setCheckedStatus(event.target.value);
    }




    useEffect(() => {
       

        const fetchData = async () => {
            try {
                listcategory(),
                listProjectStatus()
             
             
           
            } catch (error) {
              console.error('Error fetching data:', error);
              
            }
          };
          fetchData();



    }, []);


    const handleChange=(e)=>{
        setFormFields({ ...formFields, [e.target.name]: e.target.value });
    }



 
    if (isLoading) {
        return <Loader />; // Use the Loader component
    } 
    
    return(
        <>
            <div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">Add Project</h4>
            </div>

            <div className="property_wizard_listing d-flex">
                <ProjectSteps />

                <div className="px_50 form_col">
                    <Form onSubmit={basicSubmitHandler}>
                        <div className="card mb-4">
                            <div className="card-body ">
                                <Row>
                                <Form.Group as={Col} md="6" className="mb_20">
                            <Form.Label>Category</Form.Label>
                          
                                <select  className="form-control" id="" onChange={fetchtypologyHandle} >
                                <option value="">Select Category</option>
                                {
                                (categorylist ? categorylist && categorylist.map((item,key) => (

                                    <option className="radioItem mr_20"   key={key}  value={item.id}   >{item.name}</option>
                                )) :''
                                )
                                }
                                </select>
                         {errors.developer_id}

                            </Form.Group>



                           


                            
                            <Form.Group as={Col} md="6" className="mb_20">
                            <Form.Label>Typology</Form.Label>
                          
                                <select  className="form-control" id="" onChange={getSubTypologyByTypologyList}>
                                <option value="">Select Typology</option>
                                {
                                (typologyList ? typologyList && typologyList.map((item,key) => (

                                    <option className="radioItem mr_20" name="propertyType"  key={key}  value={item.typologies_id}   >{item.typology}</option>
                                )) :''
                                )
                                }
                                </select>
                         {errors.developer_id}
                                        
                            </Form.Group>

                           
                            <Form.Group as={Col} md="6" className="mb_20">
                            <Form.Label>Sub Typology</Form.Label>
                          
                                <select name="sub_typology" className="form-control" id="" value={formFields.sub_typology} onChange={handleChange} >
                                <option value="">Select Sub Typology</option>
                                {
                                (subtypologyList ? subtypologyList && subtypologyList.map((item,key) => (

                                    <option className="radioItem mr_20" name="propertyType"  key={key}  value={item.sub_typologies_id}   >{item.sub_typology}</option>
                                )) :''
                                )
                                }
                                </select>
                         {errors.developer_id}
                                        
                            </Form.Group>

                            <Form.Group as={Col} md="6" className="mb_20">
                            <Form.Label>Cities</Form.Label>
                          
                                <select name="cities" className="form-control" id=""   value={formFields.cities} onChange={handleChange}>
                                <option value="">Select Cities</option>
                                {
                                (cities ? cities && cities.map((item,key) => (

                                    <option className="radioItem mr_20" name="propertyType"  key={key}  value={item.id}   >{item.city}</option>
                                )) :''
                                )
                                }
                                </select>
                         {errors.developer_id}
                                        
                            </Form.Group>

                                </Row>
                            </div>
                        </div>

                                <div className="card">
                                    <div className="card-body">
                                    <Row>


                            

<Form.Group as={Col} md="12" className="mb_20">
    <Form.Label>Platter Name*</Form.Label>
    <Form.Control  type="text" placeholder="Enter Platter name" value={formFields.name}   name="name"  onChange={handleChange} />
        {errors.name}

</Form.Group>

<Form.Group as={Col} md="6" className="mb_20">
    <Form.Label>Meta Title.</Form.Label>
    <Form.Control type="text" placeholder="Meta Title" value={formFields.meta_title}   name="meta_title"  onChange={handleChange}  />
{errors.ivr_no}

</Form.Group>

<Form.Group as={Col} md="6" className="mb_20">
    <Form.Label>Meta Keyword</Form.Label>
    <Form.Control type="text" placeholder="Enter Meta Keyword." value={formFields.meta_keyword}   name="meta_keyword"  onChange={handleChange}    />

</Form.Group>

<Form.Group as={Col} md="12" className="mb_20">
    <Form.Label>Enter Meta Description</Form.Label>
    <Form.Control type="text" placeholder="Enter Meta Description" value={formFields.meta_description}   name="meta_description"  onChange={handleChange}   />
</Form.Group>


</Row>
                                    </div>
                                </div>

                        <Button className="btn btn_primary mt_20" type="submit">Next</Button>
                    </Form>
                </div>
            </div>

        </>
    )
}

export default AddPlatter;