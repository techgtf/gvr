import React, {useEffect, useState,useRef } from "react";
import { useNavigate,useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import CustomRadio from 'common/CustomRadio/Index'
import Col from 'react-bootstrap/Col';
import Button from 'common/Button/Button'
import '../assets/css/admin.css';
import Loader from "common/Loader/loader";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Request from 'root/config/Request';
import {getTypologyByCategory,getAllSubTypologyByTypology,projectStatusList} from '../../config/Function';
import * as CONFIG from 'root/config';

const EditProject = ()=>{
const [isLoading, setIsLoading] = useState(true);


const [submitLoading, setSubmitLoading] = useState(true);

    const projectid=useParams().projectid;
    const [categorylist, setCategorylist] = useState([]);

    const [typologyList, setTypologyList] = useState([]);
    const [projectStatus, setProjectStatus] = useState([]);

    const [subtypologyList, setSubtypologyList] = useState([]);

    const [checkedCategory, setCheckedCategory] = useState('');
    const [checkedTypology, setCheckedTypology] = useState('');
    const [checkedSubTypology, setCheckedSubTypology] = useState('');
    const [checkedStatus, setCheckedStatus] = useState('');

    const [errors, setErrors] = useState({});
    const [sectionFormdata, setSectionFormdata] = useState({
        image_preview:"",
        ivr: "",
        whatsapp: "",
        paymentplan: "",
        rera_no: "",
        nameRef: "",
        short_description: "",
        logo_preview: "",
        meta_title:"",
        meta_keyword:"",
        meta_description:"",
        brochure_preview:"",
        head_data:"",
        footer_data:""
    });

    const updateSubmitHandler =async (e)=>{
        e.preventDefault();
        setSubmitLoading(true);

        var formData = new FormData();

        formData.append('categorie_id', checkedCategory);
        formData.append('typologie_id', checkedTypology);
        formData.append('ivr_no', sectionFormdata.ivr);
        formData.append('name', sectionFormdata.nameRef);
        formData.append('payment_plan', sectionFormdata.paymentplan);
        formData.append('rera_no', (sectionFormdata.rera_no ? sectionFormdata.rera_no : ""));
        if(checkedSubTypology){

            formData.append('sub_typologie_id', checkedSubTypology);
        }
        formData.append('whatsapp_no', (sectionFormdata.whatsapp ? sectionFormdata.whatsapp : ""));
        formData.append('project_status', checkedStatus);
        formData.append('short_description', sectionFormdata.short_description);
        if(sectionFormdata.meta_title){
            formData.append('meta_title', sectionFormdata.meta_title);
        }
        if(sectionFormdata.meta_keyword){
        formData.append('meta_keyword', sectionFormdata.meta_keyword);
        }
        if(sectionFormdata.meta_description){
        formData.append('meta_description', sectionFormdata.meta_description);
        }


      
        if(sectionFormdata.head_data){
        formData.append('head_data', sectionFormdata.head_data);
        }
        if(sectionFormdata.footer_data){
        formData.append('footer_data', sectionFormdata.footer_data);
        }
        if (e.target['image']) {
            if(e.target['image'].files[0]){
                formData.append('image', e.target['image'].files[0]); 
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


        



        var response=await Request('admin/project/'+projectid+'/update','POST',formData);

        if (response.status && response.statusCode === 403) {
            setErrors(response.errors);
        toast.error(response.message);

        }else{
          toast.success(response.message);
          getProjectData();

        }
        setSubmitLoading(false);

    }



    const listcategory = async () => {
        var response=await Request('admin/category','GET');
        if (response.status && response.statusCode === 200) {
            setCategorylist(response.data.data);
        }
    }
    
    const listProjectStatus = async () => {
        var response =await projectStatusList();
        if (response.status && response.statusCode === 200 ) {
            setProjectStatus(response.data);
        }
    }
   
    const getTypologyByCategoryList=async(category)=>{
        var response =await getTypologyByCategory(category);
        if (response.status && response.statusCode === 200 && response.data.data.length >0) {
            setTypologyList(response.data.data);
        }else{
             setCheckedTypology("");
             setTypologyList([]);
            setSubtypologyList([]);
         }
    }
    const fetchtypologyHandle=async (event)=>{
        setCheckedCategory(event.target.value);
        getTypologyByCategoryList(event.target.value)
       
    }
    const getSubTypologyByTypologyList=async(typology)=>{
        var response =await getAllSubTypologyByTypology(typology);
        if (response.status && response.statusCode === 200 && response.data.length > 0) {
            setSubtypologyList(response.data);
         }else{
            setSubtypologyList([]);
            setCheckedSubTypology("");
         }
    }
    const getSubTypologyByTypologyListHandler=async(event)=>{
        setCheckedTypology(event.target.value);
        getSubTypologyByTypologyList(event.target.value);
    }

    const handleCheckedStatus=(event)=>{
        setCheckedStatus(event.target.value);
    }

       
    const getProjectData = async () => {
      
        var response=await Request('admin/project/'+projectid+'/edit','GET');
        if (response.status && response.statusCode === 200) {
           
            var result=response.data;
            setCheckedCategory(result.categorie_id);
            getTypologyByCategoryList(result.categorie_id);
            setCheckedTypology(result.typologie_id);
            setCheckedStatus(result.project_status);
            getSubTypologyByTypologyList(result.typologie_id);
            setCheckedSubTypology(result.sub_typologie_id);


            // const [sectionFormdata, setSectionFormdata] = useState({
            //     // Initialize your form data state
            //     developerid: "",
            //     image_preview:"",
            //     ivr: "",
            //     whatsapp: "",
            //     paymentplan: "",
            //     rera_no: "",
            //     nameRef: "",
            //     short_description: "",
            //     logo_preview: "",
            //     meta_title:"",
            //     meta_keyword:"",
            //     meta_description:"",
            //     head_data:"",
            //     footer_data:""
            // });

            setSectionFormdata({
                sectionFormdata,
                ivr:result.ivr_no,
                whatsapp:result.whatsapp_no,
                paymentplan:result.payment_plan,
                rera_no:result.rera_no,
                nameRef:result.name,
                short_description:result.short_description,
                meta_title:result.meta_title,
                meta_keyword:result.meta_keyword,
                meta_description:result.meta_description,
                head_data:result.head_data,
                footer_data:result.footer_data,
                image_preview:CONFIG.VITE_APP_STORAGE + result.feature_image,
                brochure_preview:CONFIG.VITE_APP_STORAGE + result.brochure,

                
                logo_preview:CONFIG.VITE_APP_STORAGE + result.logo,
            })


            // sectionFormdata.developerid=result.developer_id;
            // sectionFormdata.ivr=result.ivr_no;
            // sectionFormdata.whatsapp=result.whatsapp_no;
            
            // sectionFormdata.paymentplan=result.payment_plan;
          
            // sectionFormdata.rera_no=result.rera_no;
            // sectionFormdata.nameRef=result.name;
            // sectionFormdata.short_description=result.short_description;


            if(result.meta_title){
              
                    sectionFormdata.meta_title=result.meta_title
              
            }
            if(result.meta_keyword){
                    sectionFormdata.meta_keyword=result.meta_keyword
              
            }
            if(result.meta_description){
      
                    sectionFormdata.meta_description=result.meta_description
             
            }
            if(result.head_data){
          
                    sectionFormdata.head_data=result.head_data
             
            }
            if(result.footer_data){
               
                sectionFormdata.footer_data=result.footer_data
                
            }

            if(result.feature_image){
                sectionFormdata.image_preview=CONFIG.VITE_APP_STORAGE+result.feature_image
            }

            if(result.logo){
                sectionFormdata.logo_preview=CONFIG.VITE_APP_STORAGE+result.logo;
            }
        }

    }

    useEffect(() => {

        const fetchData = async () => {
            try {
                await listcategory(),
                await listProjectStatus()
                await getProjectData();
                setIsLoading();
            } catch (error) {
              console.error('Error fetching data:', error);
              
            }
            setSubmitLoading(false);
          };

       
          fetchData();
    }, []);

   

    // if (isLoading) {
    //     return <Loader />; // Use the Loader component
    // } 


    const handleChange=(e)=>{
        setSectionFormdata({ ...sectionFormdata, [e.target.name]: e.target.value });
    }

    return(
        <>
          <div className="px_50 form_col">

            {(isLoading ?  
            
            <div className="title w-100 min_height_600 skeleton_box"></div>
                        
                :
          
                <Form onSubmit={updateSubmitHandler}>
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
                                <CustomRadio className="optionItem" name="typology" id={`typology${item.id}`} label={`${item.typology}`}  key={key}  value={item.typologies_id}  checked={checkedTypology == item.typologies_id}  onChange={getSubTypologyByTypologyListHandler} />
                            )) :''
                            )
                        }
                    {errors.typologie_id}

                    </div>

                    <div className="radio_design1 mb_20">
                        {
                            (subtypologyList ? subtypologyList && subtypologyList.map((item,key) => (
                                <CustomRadio className="optionItem" name="subtypology" id={`subtypology${key}`} label={`${item.sub_typology}`} key={key} value={item.sub_typologies_id}  checked={checkedSubTypology == item.sub_typologies_id}   onChange={(event) => setCheckedSubTypology(event.target.value)}   />
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
                      

                        <Form.Group as={Col} md="6" className="mb_20">
                            <Form.Label>Project Name*</Form.Label>
                            <Form.Control  type="text" placeholder="Enter project name" value={sectionFormdata.nameRef} name="nameRef" onChange={handleChange} />
                            {errors.name}
                        </Form.Group>

                        <Form.Group as={Col} md="6" className="mb_20">
                            <Form.Label>Project IVR No.</Form.Label>
                            <Form.Control type="text" placeholder="Enter IVR no." value={sectionFormdata?.ivr || ''} name="ivr" onChange={handleChange}/>
                            {errors.ivr_no}
                        </Form.Group>

                        <Form.Group as={Col} md="6" className="mb_20">
                            <Form.Label>Project Whatsapp No.</Form.Label>
                            <Form.Control type="text" placeholder="Enter whatsapp no." value={sectionFormdata?.whatsapp || ''}   name="whatsapp" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} md="6" className="mb_20">
                            <Form.Label>Payment Plan</Form.Label>
                            <Form.Control type="text" placeholder="Enter payment plan" value={sectionFormdata?.paymentplan || ''}  name="paymentplan" onChange={handleChange}  />
                        </Form.Group>

                        <Form.Group as={Col} md="6" className="mb_20">
                            <Form.Label>RERA No.</Form.Label>
                            <Form.Control type="text" placeholder="Enter Rera No" value={sectionFormdata?.rera_no || ''} onChange={handleChange}  name="rera_no"  />
                        </Form.Group>

                        <Form.Group as={Col} md="6" className="mb_20">
                            <Form.Label>Featured Image*
                            <small className="size">(Size 800px x 650px)</small>
                            </Form.Label>
                            <Form.Control className="form-control"  type="file" name="image" />
                            {(sectionFormdata.image_preview ? <img width="100" src={`${sectionFormdata.image_preview}`} /> : null)}
                            {errors.image}
                        </Form.Group>

                        <Form.Group as={Col} md="6" className="mb_20">
                            <Form.Label>Project Logo*
                            <small className="size">(Size 450px x 200px)</small>

                            </Form.Label>
                            <Form.Control className="form-control"  type="file" name="logo"   />
                            {errors.logo}

                            {(sectionFormdata.logo_preview ? <img width="100" src={`${sectionFormdata.logo_preview}`} /> : null)}
                        </Form.Group>


                        
                        <Form.Group as={Col} md="6" className="mb_20">
                            <Form.Label>Project Brochure*
                            <small className="size">(Pdf Should be less than 4 MB)</small>

                            </Form.Label>
                            <Form.Control className="form-control"  type="file" name="brochure"   />
                            {errors.brochure}

                            {(sectionFormdata.brochure_preview ? <a target="__blank" href={`${sectionFormdata.brochure_preview}`} >View PDF </a> : null)}
                        </Form.Group>



                        <Form.Group as={Col} md="12" className="mb_20">
                            <Form.Label>Short Description</Form.Label>
                            <Form.Control type="text" placeholder="Short Description" value={sectionFormdata?.short_description || ''} onChange={handleChange} name="short_description" />
                        </Form.Group>

                        <h6 className="labelTitle mt_30">Page Details</h6>

                        <Form.Group as={Col} md="6" className="mb_20">
                            <Form.Label>Meta Title</Form.Label>
                            <Form.Control type="text" placeholder="Meta Title" value={sectionFormdata?.meta_title}   name="meta_title" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} md="6" className="mb_20">
                            <Form.Label>Meta Keyword</Form.Label>
                            <Form.Control type="text" placeholder="Meta Keyword" value={sectionFormdata?.meta_keyword}   name="meta_keyword" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} md="12" className="mb_20">
                            <Form.Label>Meta Descriptions</Form.Label>
                            <Form.Control type="text" placeholder="Meta Descriptions" value={sectionFormdata?.meta_description}   name="meta_description" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} md="12" className="mb_20">
                            <Form.Label>Head Tags</Form.Label>
                            <textarea className="form-control meta_txtarea" name="head_data" placeholder="Enter Head Data" value={sectionFormdata?.head_data} onChange={handleChange}></textarea>
                            {/* <Form.Control type="text" placeholder="Head Tags" value={sectionFormdata?.head_data} name="head_data" onChange={handleChange} /> */}
                        </Form.Group>

                        <Form.Group as={Col} md="12" className="mb_20">
                            <Form.Label>Body Tags</Form.Label>
                            <Form.Control type="text" placeholder="Body Tags" value={sectionFormdata?.footer_data} name="footer_data" onChange={handleChange} />
                        </Form.Group>

                    </Row>

                    {
                        
                        submitLoading ? <>    <Button className="btn btn_primary mt_20" type="button" disabled>Please Wait ..</Button></>  :    <Button className="btn btn_primary mt_20" type="submit">Update</Button>
                          
                        }


                </Form>
           
             )}
              </div>

        </>
    )
}

export default EditProject;