import React, {useEffect, useState } from "react";
import { useNavigate,useParams,NavLink } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import CustomRadio from 'common/CustomRadio/Index'
import Col from 'react-bootstrap/Col';
import Button from 'common/Button/Button'
import ProjectSteps from '../components/ProjectSteps/Index'
import '../assets/css/admin.css';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Request from 'root/config/JsonRequest';
import * as CONFIG from 'root/config'

import {getTypologyByCategory,getSubTypologyByTypology,projectStatusList} from 'root/config/function';
import { useSelector } from "react-redux";


const EditPlatter = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const platterid=useParams().platterid;
  
    const [categorylist, setCategorylist] = useState([]);
    const [developerList, setDeveloperList] = useState([]);

    const [typologyList, setTypologyList] = useState([]);
    const [subtypologyList, setSubtypologyList] = useState([]);


    const [formFields, setFormFields] = useState({
        // Initialize your form data state
        category: "",
        developer:"",
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

    const UpdateSubmitHandler =async (e)=>{
        e.preventDefault();
        
        var response=await Request(`admin/platter-page/${platterid}/update`,'POST',formFields);
        if (response.status && response.statusCode === 403) {
            setErrors(response.errors);
            toast.error(response.message);
        }else if (response.status && response.statusCode === 200) {
            toast.success(response.message);
          navigate(CONFIG.ADMIN_ROOT+'platter-page/'+response.data.id+ '/edit');
        }
    }



    const listcategory = async () => {
        var response=await Request('admin/category','GET');
        if (response.status && response.statusCode === 200) {
            setCategorylist(response.data.data);
        }
       
    }
    
  
    const listDeveloper = async () => {
        var response=await Request('admin/developer','GET');
        if (response.status && response.statusCode === 200) {
            setDeveloperList(response.data.data);
        }
    }
    const getTypology=async (categories)=>{
        var response =await getTypologyByCategory(categories);
        if (response.status && response.statusCode === 200 && response.data.data.length >0) {
            setTypologyList(response.data.data);
        }else{
            
             setTypologyList([]);
            
         }
    }
    const fetchtypologyHandle=async (event)=>{
        formFields.category=event.target.value;
        getTypology(event.target.value)
        
    }
    const getSubtypology=async (typology)=>{
        var response =await getSubTypologyByTypology(typology);
        if (response.status && response.statusCode === 200 && response.data.data.length > 0) {
            setSubtypologyList(response.data.data);
         }else{
            setSubtypologyList([]);
         }

    }
    const getSubTypologyByTypologyList=async(event)=>{
        formFields.typology=event.target.value;
        getSubtypology(event.target.value);

       
    }


    const getPlatterDetails=async(event)=>{
        var response=await Request(`admin/platter-page/${platterid}/edit`,'GET');
        if (response.status && response.statusCode === 200) {
           
            getTypology(response.data.category);
            getSubtypology(response.data.typology);
            formFields.category=response.data.category;
            formFields.developer=response.data.developer;
            formFields.typology=response.data.typology;
            formFields.sub_typology=response.data.sub_typology;
            formFields.cities=response.data.cities;
            formFields.name=response.data.name;
            formFields.meta_title=response.data.meta_title;
            formFields.meta_keyword=response.data.meta_keyword;
            formFields.meta_description=response.data.meta_description;




        }

    }
 
  


  



    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                await listcategory();
                await listDeveloper();

                await getPlatterDetails();
                setIsLoading(false);
            } catch (error) {
              console.error('Error fetching data:', error);
              
            }
          };
          fetchData();
    }, []);


    const handleChange=(e)=>{
        setFormFields({ ...formFields, [e.target.name]: e.target.value });
    }

    
 
  
    
    return(
        <>
            <div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">Add Project</h4>
            </div>

            <div className="property_wizard_listing d-flex">
            <div className="steps_area">
                <div className="steps_col">
                    <div className="step filled ">
                        <NavLink to={`${CONFIG.ADMIN_ROOT}platter-page/${platterid}/edit`} className="step-trigger"> 
                            <span className="circle"><i className="mdi mdi-check"></i></span><span className="content">
                            <span className="title">Basic Details</span><span className="subtitle">Step 1</span>
                            </span>
                        </NavLink>   
                    </div>

                    <div className="step  ">
                          <NavLink to={`${CONFIG.ADMIN_ROOT}platter-page/${platterid}/banner`} className="step-trigger"> 
                            <span className="circle"><i className="mdi mdi-check"></i></span><span className="content">
                            <span className="title">Banner</span><span className="subtitle">Step 2</span>
                            </span>
                            </NavLink>   
                    </div>

                </div>
                </div>
                
                {isLoading ? 'Loading ..... ' : 
                <div className="px_50 form_col">
                    <Form onSubmit={UpdateSubmitHandler}>
                        <div className="card mb-4">
                            <div className="card-body ">
                                <Row>
                                <Form.Group as={Col} md="6" className="mb_20">
                            <Form.Label>Category</Form.Label>
                          
                                <select  className="form-control" id="" value={formFields.category} onChange={fetchtypologyHandle} >
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
                            <Form.Label>Developer</Form.Label>
                          
                                <select className="form-control" id="" name="developer"  value={formFields.developer}   onChange={handleChange}>
                                <option value="">Select Developer</option>
                                {
                                (developerList ? developerList && developerList.map((item,key) => (

                                    <option className="radioItem mr_20"  key={key}  value={item.id}  >{item.name}</option>
                                )) :''
                                )
                                }
                                </select>




                         {errors.developer_id}

                            </Form.Group>


                            
                            <Form.Group as={Col} md="6" className="mb_20">
                            <Form.Label>Typology</Form.Label>
                          
                                <select  className="form-control" id="" value={formFields.typology} onChange={getSubTypologyByTypologyList}>
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
                          
                                <select name="sub_typology" className="form-control" value={formFields.sub_typology}   onChange={handleChange} >
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
    <Form.Label>Project Name*</Form.Label>
    <Form.Control  type="text" placeholder="Enter project name" value={formFields.name}   name="name"  onChange={handleChange} />
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
                }
            </div>

        </>
    )
}

export default EditPlatter;