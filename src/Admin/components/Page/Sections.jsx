
import React, { useRef, useState,useEffect } from "react";

import ReactQuill from 'react-quill';
import * as CONFIG from '../../../../config';
import Button from 'common/Button/Button'
import Request from 'root/config/Request';
import JsonRequest from 'root/config/JsonRequest';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScaleLoader from "react-spinners/ScaleLoader";

const Sections = React.memo((props)=>{
    const page_section=props.page_section;
    const sectiontitle=props.title;

    const [isLoading, setIsLoading] = useState(true);
    const [enableUpdate, setEnableUpdate] = useState(false);
    const [submitLoading, setSubmitLoading] = useState(false);
    const [sectionSequence, setSectionSequence] = useState('');

 

    
    const [errors, setErrors] = useState({});

    const page_id=props.page_id;
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
        formData.append('page_section', page_section);
        formData.append('page_id', page_id);

        if (e.target['sub_heading']) {
            formData.append('sub_heading', e.target['sub_heading'].value);
        }
     
        if (e.target['image']) {
            if(e.target['image'].files[0]){
                formData.append('image', e.target['image'].files[0]); 
            }
        }
        if (e.target['image_alt']) {
            formData.append('image_alt', e.target['image_alt'].value);
        }
        formData.append('description', content?.replace(/<[^>]+>/g, ""));
        var response=await Request(`admin/page/page-sections`,'POST',formData);
        if(response.status && response.statusCode === 200){
            getsectionHandler()
        }else if (response.status && response.statusCode === 403) {
            setErrors(response.errors);
        }

        setSubmitLoading(false);
        toast.success(response.message);
    }

   



    const getsectionHandler=async ()=>{
        // setIsLoading(true);
        setSubmitLoading(true);
        var object={
            'page_id':page_id,
        }
        var response=await JsonRequest('admin/page/page-sections/'+page_section,'GET');
      
        // setIsLoading(false);

        if(response.status && response.statusCode==200){
            setEnableUpdate(true);
            var data=response.data;
            
           
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
        toast.error(response.message);
    }

    return(
        <>
        <div className="card mt-3 bg-white shadow-md rounded-lg">
          <div className="card-body p-6">
            <form onSubmit={basicSubmitHandler}>
              <h6 className="labelTitle text-lg font-semibold mb-4">{sectiontitle}</h6>
      
              <div className="flex flex-wrap -mx-4">
                {/* Heading Field */}
                <div className="w-full md:w-1/2 px-4 mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {props.fields.heading}*
                  </label>
                  <input
                    type="text"
                    name="heading"
                    value={sectionFormdata.heading}
                    placeholder="Enter section heading"
                    onChange={handleSectionChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                  {errors.heading && (
                    <p className="text-red-500 text-sm mt-1">{errors.heading}</p>
                  )}
                </div>
      
                {/* Sub-Heading Field */}
                {props.sub_heading && (
                  <div className="w-full md:w-1/2 px-4 mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {props.fields.sub_heading}
                    </label>
                    <input
                      type="text"
                      name="sub_heading"
                      value={sectionFormdata.sub_heading}
                      placeholder="Enter section sub heading"
                      onChange={handleSectionChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                    />
                    {errors.sub_heading && (
                      <p className="text-red-500 text-sm mt-1">{errors.sub_heading}</p>
                    )}
                  </div>
                )}
      
                {/* Textarea Field */}
                {props.textarea && (
                  <div className="w-full px-4 mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {props.fields.description}*
                    </label>
                    <ReactQuill
                      ref={props.ref}
                      name="description"
                      value={content}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md shadow-sm"
                    />
                    {errors.description && (
                      <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                    )}
                  </div>
                )}
      
                {/* Image Field */}
                {props.image && (
                  <>
                    <div className="w-full md:w-1/2 px-4 mb-5">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {props.fields.image}*
                      </label>
                      <input
                        type="file"
                        name="image"
                        onChange={handleSectionChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                      />
                      {errors.image && (
                        <p className="text-red-500 text-sm mt-1">{errors.image}</p>
                      )}
      
                      {sectionFormdata.image_preview && (
                        <img
                          width="100"
                          src={sectionFormdata.image_preview}
                          alt="Preview"
                          className="mt-2 rounded-md shadow-sm border"
                        />
                      )}
                    </div>
      
                    {/* Image Alt Field */}
                    <div className="w-full md:w-1/2 px-4 mb-5">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Image Alt
                      </label>
                      <input
                        type="text"
                        name="image_alt"
                        value={sectionFormdata.image_alt}
                        placeholder="Enter image alt text"
                        onChange={handleSectionChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                      />
                      {errors.image_alt && (
                        <p className="text-red-500 text-sm mt-1">{errors.image_alt}</p>
                      )}
                    </div>
                  </>
                )}
              </div>
      
              {/* Submit Button */}
              {submitLoading ? (
                <button
                  className="btn_primary mt_20 bg-blue-500 text-white px-6 py-2 rounded-md shadow-sm hover:bg-blue-600 transition disabled:opacity-50"
                  type="button"
                  disabled
                >
                  Please Wait ..
                </button>
              ) : (
                <button
                  className="btn_primary mt_20 bg-blue-500 text-white px-6 py-2 rounded-md shadow-sm hover:bg-blue-600 transition"
                  type="submit"
                >
                  Save Section
                </button>
              )}
            </form>
          </div>
        </div>
      </>
    )
})

export default Sections;