
import React, { useRef, useState,useEffect } from "react";

import Form from 'react-bootstrap/Form';
import ReactQuill from 'react-quill';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as CONFIG from '../../../../config';
import Button from 'common/Button/Button'
import Request from 'root/config/Request';
import JsonRequest from 'root/config/JsonRequest';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScaleLoader from "react-spinners/ScaleLoader";

const Sections = React.memo((props)=>{
    const section_type=props.section_type;
    const sectiontitle=props.title;

    const [isLoading, setIsLoading] = useState(true);
    const [enableUpdate, setEnableUpdate] = useState(false);
    const [submitLoading, setSubmitLoading] = useState(false);
    const [sectionSequence, setSectionSequence] = useState('');

 

    
    const [errors, setErrors] = useState({});

    const projectid=props.projectid;
    const [content, setContent] = useState('');
    const handleChange = (value) => {
        setContent(value);
    };
    const [sectionFormdata, setSectionFormdata] = useState({
        // Initialize your form data state
        heading: "",
        seq: "",
        id: "",
        sub_heading: "",
        description: "",
        image_preview: "",
        image_alt: "",
        editid: "",

      });

    const basicSubmitHandler = async (e)=>{
        e.preventDefault();
        setSubmitLoading(true);

        const formData = new FormData();
        formData.append('heading', e.target['heading'].value);
        if (e.target['sub_heading']) {
        formData.append('sub_heading', e.target['sub_heading'].value);
        }
        formData.append('project_id',projectid);
        formData.append('section_type', section_type);
        if (e.target['image']) {
            if(e.target['image'].files[0]){
                formData.append('image', e.target['image'].files[0]); 
            }
        }
        if (e.target['image_alt']) {
            formData.append('image_alt', e.target['image_alt'].value);
        }
        formData.append('description', content);
        var response=await Request('admin/project-section','POST',formData);
        if(response.status && response.statusCode === 200){
            getsectionHandler()
        }else if (response.status && response.statusCode === 403) {
            setErrors(response.errors);
            toast.error(response.message);
        }

        setSubmitLoading(false);
        toast.success(response.message);
    }

    const updateSubmitHandler = async (e)=>{
        e.preventDefault();
        
        setSubmitLoading(true);
        const formData = new FormData();

        if(sectionFormdata.seq){
        formData.append('seq',sectionFormdata.seq);

        }
        formData.append('heading', e.target['heading'].value);
        if (e.target['sub_heading']) {
        formData.append('sub_heading', e.target['sub_heading'].value);
        }
        formData.append('project_id',projectid);
        if (e.target['image']) {
            if(e.target['image'].files[0]){
                formData.append('image', e.target['image'].files[0]); 
            }
            }
            if (e.target['image_alt']) {
            formData.append('image_alt', e.target['image_alt'].value);
        }

        formData.append('description', content);
        var response=await Request('admin/project-section/'+sectionFormdata.editid+'/update','POST',formData);
        if (response.status && response.statusCode === 403 ||  response.statusCode === 500) {
            setErrors(response.errors);
            toast.error(response.message);
        }else{
            getsectionHandler();
        }
        setSubmitLoading(false);

        toast.success(response.message);
    }



    const getsectionHandler=async ()=>{
        // setIsLoading(true);
        setSubmitLoading(true);
        var object={
            'project_id':projectid,
            'section_type':section_type,
        }
        var response=await JsonRequest('admin/show-by-project-with-sectionType','POST',object);
      
      
        // setIsLoading(false);

        if(response.status && response.statusCode==200){
            setEnableUpdate(true);
            var data=response.data
           
            setContent(data.description);
            setSectionSequence(data.seq)
            setSectionFormdata(state=>({
                ...state,
                heading: data.heading,
                sub_heading: data.sub_heading,
                image_alt: data.image_alt,
                description: data.description, 
                editid:data.id,
                seq:data.seq,

            }));
            if(data.image){
                sectionFormdata.image_preview=CONFIG.VITE_APP_STORAGE+data.image;
            }
        }
        setSubmitLoading(false);

    }

    const handleSectionChange=(e)=>{
        
        setSectionFormdata({ ...sectionFormdata, [e.target.name]: e.target.value });
    }



    useEffect(() => {

        const fetchData = async () => {
            try {
               await  getsectionHandler();

            setIsLoading(false);
            } catch (error) {
              console.error('Error fetching data:', error);
              
            }
          };

          fetchData();

    }, []);


    const handleSeq=(e)=>{

    }   


    const handleSectionSequenceChange=async (e)=>{
        
        setSectionSequence(e.target.value);
        var formdata={
            'section_id':sectionFormdata.editid,
            'seq':e.target.value,
        }
        var response=await JsonRequest('admin/project-section-sequence','POST',formdata);
        if (response.status && response.statusCode === 200) {
            toast.success(response.message);
           
        }
        else{
            toast.error(response.message);
        }
    }

    return(
        <>
        <div className="card mt-3">
            <div className="card-body ">

            <Form onSubmit={ (enableUpdate ? updateSubmitHandler : basicSubmitHandler ) }>
                        
                        <h6 className="labelTitle">{sectiontitle}</h6>
                        {sectionFormdata.editid ?  (
                            <Form.Group className="mb_20" >
                                <Form.Label>Section Order</Form.Label>
                                <Form.Control type="number" name="seq" value={sectionSequence}  placeholder="Enter sequence number" onChange={handleSectionSequenceChange}  />
                                {errors.heading}
                            </Form.Group>
                        )  : null}
                     
            
                        <Row>
                            <Form.Group as={Col} md="6" className="mb_20" >
                                <Form.Label>Section Heading*</Form.Label>
                                <Form.Control  type="text" name="heading" value={sectionFormdata.heading}  placeholder="Enter section heading" onChange={handleSectionChange}  />
                                {errors.heading}
                            </Form.Group>

                            {props.sub_heading && (
                           <>
                            <Form.Group as={Col} md="6" className="mb_20">
                                <Form.Label>Section Sub-Heading</Form.Label>
                                <Form.Control  type="text" name="sub_heading" value={sectionFormdata.sub_heading} placeholder="Enter section sub heading" onChange={handleSectionChange}  />
                                {errors.sub_heading}

                            </Form.Group>
                            </>
                            )  }
            
                            {props.textarea && (
                                <>
                                <Form.Group  as={Col} md="12" className="mb_20" >
                                    <Form.Label>Project Overview*</Form.Label>
                                    <ReactQuill ref={props.ref} name="description"   value={content} onChange={handleChange}   />
                                 {errors.description}
                                </Form.Group>
                              
                                 
                                </>
                            )}
            
                            {props.image && (
            
                          <>
                            <Form.Group as={Col} md="6" className="mb_20">
                                <Form.Label> Image*</Form.Label>
                                <Form.Control className="form-control"  type="file" name="image"  />
                                {errors.image}

                              

                                {sectionFormdata.image_preview && (
    <img width="100" src={sectionFormdata.image_preview} alt="Preview" />
)}


                            </Form.Group>

                                <Form.Group as={Col} md="6" className="mb_20">
                                <Form.Label>Image Alt</Form.Label>
                                <Form.Control  type="text" name="image_alt" value={sectionFormdata.image_alt} placeholder="Enter section sub heading" onChange={handleSectionChange}  />
                                {errors.image_alt}

                                </Form.Group>
                                
                                </>
                            )}
            
                        </Row>
                        {
                        
                        submitLoading ? <>    <Button className="btn btn_primary mt_20" type="button" disabled>Please Wait ..</Button></>  :    <Button className="btn btn_primary mt_20" type="submit">Save Section</Button>
                          
                        }



                     
                    </Form>



            </div>
               
           </div>
        </>
    )
})

export default Sections;