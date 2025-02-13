import React, {useEffect, useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import CustomRadio from 'common/CustomRadio/Index'
import Col from 'react-bootstrap/Col';
import Button from 'common/Button/Button'
import ProjectSteps from '../components/ProjectSteps/Index'
import '../assets/css/admin.css';
import Loader from "common/Loader/loader";

import Request from 'root/config/Request';
import * as CONFIG from '../../../config'

import {getTypologyByCategory,getAllSubTypologyByTypology,projectStatusList} from 'root/config/function';



const cityOptions = [
    { label: 'Noida', value: 'active' },
    { label: 'Haryana', value: 'hide' },
];
const statusOptions = [
    { label: 'Active', value: 'active' },
    { label: 'Hide', value: 'hide' },
];

const AddProjects = ()=>{
    const [isLoading, setIsLoading] = useState(true);
  
    const [categorylist, setCategorylist] = useState([]);

    const [typologyList, setTypologyList] = useState([]);
    const [projectStatus, setProjectStatus] = useState([]);

    const [subtypologyList, setSubtypologyList] = useState([]);

    const [checkedCategory, setCheckedCategory] = useState('');
    const [checkedTypology, setCheckedTypology] = useState('');
    const [checkedSubTypology, setCheckedSubTypology] = useState('');
    const [checkedStatus, setCheckedStatus] = useState('');

    const name = useRef('');
    const ivr = useRef('');
    const whatsapp = useRef('');
    const paymentplan = useRef('');
    const rera_no = useRef('');
    const short_description = useRef('');
    const meta_title  = useRef('');
    const meta_description  = useRef('');
    const meta_keyword  = useRef('');
    const footer_data  = useRef('');
    const head_data  = useRef('');




    const navigate = useNavigate()
    const [errors, setErrors] = useState({});


    const basicSubmitHandler =async (e)=>{
        e.preventDefault();
       
        var formData = new FormData();
        formData.append('categorie_id', checkedCategory);
        formData.append('typologie_id', checkedTypology);
        formData.append('ivr_no', ivr.current.value);
        formData.append('name', name.current.value);
        formData.append('whatsapp', whatsapp.current.value);
        formData.append('payment_plan', paymentplan.current.value);

        formData.append('meta_title', meta_title.current.value);
        formData.append('meta_keyword', meta_keyword.current.value);
        formData.append('meta_description', meta_description.current.value);
        formData.append('footer_data', footer_data.current.value);
        formData.append('head_data', head_data.current.value);

        formData.append('rera_no', rera_no.current.value);
        formData.append('sub_typologie_id', checkedSubTypology);
        formData.append('project_status', checkedStatus);
        formData.append('short_description', short_description.current.value);

        if (e.target['image']) {
            if(e.target['image'].files[0]){
                formData.append('image', e.target['image'].files[0]); 
            }
        }

        if (e.target['brochure']) {
            if(e.target['brochure'].files[0]){
                formData.append('brochure', e.target['brochure'].files[0]); 
            }
        }

        if (e.target['logo']) {
            if(e.target['logo'].files[0]){
                formData.append('logo', e.target['logo'].files[0]); 
            }
        }
        if (e.target['brochure']) {
            if(e.target['brochure'].files[0]){
                formData.append('brochure', e.target['brochure'].files[0]); 
            }
        }

        


        var response=await Request('admin/project','POST',formData);
        if (response.status && response.statusCode === 403) {
            setErrors(response.errors);
        }else if (response.status && response.statusCode === 200) {
          navigate(CONFIG.ADMIN_ROOT+'project/'+response.data.id+ '/location/'+5);

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
        setCheckedTypology('');
        setCheckedCategory(event.target.value);
        setSubtypologyList([]);
        setTypologyList([]);

        var response =await getTypologyByCategory(event.target.value);
        if (response.status && response.statusCode === 200 && response.data.data.length >0) {
            setTypologyList(response.data.data);
        }
    }
    const getSubTypologyByTypologyList=async(event)=>{
        setCheckedTypology(event.target.value);
        debugger;

        var response =await getAllSubTypologyByTypology(event.target.value);
        if (response.status && response.statusCode === 200 ) {
            setSubtypologyList(response.data.data);
         }else{
         
            setCheckedSubTypology("");
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
 
    if (isLoading) {
        return <Loader />; // Use the Loader component
    } 
    
    return(
        <>
            <div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">Add Project</h4>
            </div>

            <div className="property_wizard_listing">
                <div className="px-0 form_col w-100">
                    <Form onSubmit={basicSubmitHandler}>
                        <h6 className="labelTitle">What kind of property do you have?</h6>

                        <div className="radio_design mb_20 d-flex">
                        {
                            (categorylist ? categorylist && categorylist.map((item,key) => (
                                <CustomRadio className="radioItem mr_20" name="propertyType" id={`propertyType${item.id}`} label={`${item.name}`}  key={key}  value={item.id}  checked={checkedCategory == item.id}  onChange={fetchtypologyHandle} />
                            )) :''
                            )
                        }
                         {errors.categorie_id}

                        </div>
                        <div className="radio_design1 mb_20">
                            {
                                (typologyList ? typologyList && typologyList.map((item,key) => (
                                    <CustomRadio className="optionItem" name="typology" id={`typology${item.id}`} label={`${item.typology}`}  key={key}  value={item.typologies_id}  checked={checkedTypology == item.typologies_id}  onChange={getSubTypologyByTypologyList} />
                                )) :''
                                )
                            }
                         {errors.typologie_id}

                        </div>

                        <div className="radio_design1 mb_20">
                            {
                                (subtypologyList ? subtypologyList && subtypologyList.map((item,key) => (
                                    <CustomRadio className="optionItem" name="subtypology" id={`subtypology${key}`} label={`${item.sub_typology}`}  key={key}  value={item.sub_typologies_id}  checked={checkedSubTypology == item.sub_typologies_id}   onChange={(event) => setCheckedSubTypology(event.target.value)} />
                                )) :''
                                )
                            }

                        </div>
                     

                        <h6 className="labelTitle">Enter basic project details</h6>
                            <div className="radio_design1 mb_20">
                                {
                                    (projectStatus ? projectStatus && Object.entries(projectStatus).map(([key, value]) => (
                                        <CustomRadio className="optionItem" name="projectstatus" id={`projectstatus${key}`} label={`${value.title}`}  key={key}  value={key}  checked={checkedStatus == key}   onChange={handleCheckedStatus}   />
                                    )) :''
                                    )
                                }
                         {errors.project_status}

                            </div>
                        <Row>
                           


                            <Form.Group as={Col} md="4" className="mb_20">
                                <Form.Label>Project Name*</Form.Label>
                                <Form.Control  type="text" placeholder="Enter project name" ref={name}  />
                                {errors.name ? <div className="errMsg">{errors.name}</div> : null}
                            </Form.Group>

                            <Form.Group as={Col} md="4" className="mb_20">
                                <Form.Label>Project IVR No.*</Form.Label>
                                <Form.Control type="text" placeholder="Enter IVR no."  ref={ivr} />
                                {errors.ivr_no ? <div className="errMsg">{errors.ivr_no}</div> : null}
                            </Form.Group>

                            <Form.Group as={Col} md="4" className="mb_20">
                                <Form.Label>Project Whatsapp No.</Form.Label>
                                <Form.Control type="text" placeholder="Enter whatsapp no."   ref={whatsapp} />
                            </Form.Group>

                            <Form.Group as={Col} md="4" className="mb_20">
                                <Form.Label>Payment Plan</Form.Label>
                                <Form.Control type="text" placeholder="Enter payment plan"  ref={paymentplan} />
                            </Form.Group>

                            <Form.Group as={Col} md="4" className="mb_20">
                                <Form.Label>RERA No.</Form.Label>
                                <Form.Control type="text" placeholder="Enter Rera No" ref={rera_no} />
                            </Form.Group>

                            <Form.Group as={Col} md="4" className="mb_20">
                                <Form.Label>Featured Image* 
                                    <small className="size">(Size 800px x 650px)</small>
                                </Form.Label>
                                <Form.Control className="form-control"  type="file" name="image"   />
                                {errors.image ? <div className="errMsg">{errors.image}</div> : null}
                            </Form.Group>

                            <Form.Group as={Col} md="4" className="mb_20">
                                <Form.Label>Project Logo* 
                                    <small className="size">(Size 450px x 200px)</small>
                                </Form.Label>
                                <Form.Control className="form-control"  type="file" name="logo"   />
                                {errors.logo ? <div className="errMsg">{errors.logo}</div> : null}
                            </Form.Group>

                            <Form.Group as={Col} md="4" className="mb_20">
                                <Form.Label>Upload Brochure 
                                    <small className="size">(Max Size 4 Mb)</small>
                                </Form.Label>
                                <Form.Control className="form-control"  type="file" name="brochure"   />
                                {errors.brochure ? <div className="errMsg">{errors.brochure}</div> : null}
                            </Form.Group>

                            <Form.Group as={Col} md="12" className="mb_20">
                                <Form.Label>Short Description 
                                </Form.Label>
                                <Form.Control className="form-control" ref={short_description}  type="text" placeholder="Short Description" />
                            </Form.Group>

                            <h6 className="labelTitle mt_30">Page Details</h6>

                            <Form.Group as={Col} md="6" className="mb_20">
                                <Form.Label>Meta Title</Form.Label>
                                <Form.Control type="text" placeholder="Meta Title"  ref={meta_title}   name="meta_title"  />
                            </Form.Group>

                            <Form.Group as={Col} md="6" className="mb_20">
                                <Form.Label>Meta Keyword</Form.Label>
                                <Form.Control type="text" placeholder="Meta Keyword"  ref={meta_keyword} name="meta_keyword"  />
                            </Form.Group>

                            <Form.Group as={Col} md="12" className="mb_20">
                                <Form.Label>Meta Descriptions</Form.Label>
                                <Form.Control type="text" placeholder="Meta Descriptions" ref={meta_description} name="meta_description"  />
                            </Form.Group>

                            <Form.Group as={Col} md="12" className="mb_20">
                                <Form.Label>Head Tags</Form.Label>
                                <textarea className="form-control meta_txtarea" name="head_data"  ref={head_data} placeholder="Enter Head Data" ></textarea>
                                {/* <Form.Control type="text" placeholder="Head Tags" value={sectionFormdata?.head_data} name="head_data"  /> */}
                            </Form.Group>

                            <Form.Group as={Col} md="12" className="mb_20">
                                <Form.Label>Body Tags</Form.Label>
                                <Form.Control type="text" placeholder="Body Tags"  ref={footer_data} name="footer_data"  />
                            </Form.Group>

                        </Row>

                        <Button className="btn btn_primary mt_20" type="submit">Next</Button>
                    </Form>
                </div>
            </div>

        </>
    )
}

export default AddProjects;