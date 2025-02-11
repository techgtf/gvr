import React, {useEffect, useState,useRef } from "react";
import { useNavigate,useParams } from "react-router-dom";
import ReactQuill from 'react-quill';
import Form from 'react-bootstrap/Form';
import {getAmenities} from '../../config/Function';




// toast 
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// end toast 
import JsonRequest from 'root/config/JsonRequest';

import Sections from '../components/Project/Sections';

import ProjectSteps from '../components/ProjectSteps/Index'
import Col from 'react-bootstrap/Col';
import Button from 'common/Button/Button'
import 'react-quill/dist/quill.snow.css';
import '../assets/css/admin.css';


const sizeOptions = [
    { label: 'sq.mt.', value: 'active' },
    { label: 'sq.ft.', value: 'hide' },
    { label: 'sq.yd.', value: 'hide' },
];

const priceOptions = [
    { label: 'lacs', value: 'active' },
    { label: 'cr', value: 'hide' },
]

const Amenities = ()=>{
    const projectid=useParams().projectid;
    const section_id=useParams().section;

    const [subAmenitiesList, setSubAmenitiesList] = useState([]);
    const [projectAmenitiesList, setProjectAmenitiesList] = useState([]);
    const [tottalAmenitiespage, setTottalAmenitiespage] = useState(1);
    const [amenitiespagePage, setAmenitiespagePage] = useState(1);









    const navigate = useNavigate();

    

    const backHandler = ()=>{
        
    }




    const getAmenitiesListhandle=async(amenitiespagePage)=>{
        const response=await getAmenities(amenitiespagePage);
        if (response.status && response.statusCode === 200) {
             
             var result=response.data.data;
             setSubAmenitiesList(prevList => [...result]);

             
             

             setTottalAmenitiespage(response.data.last_page);
        }
     
    }
    

const updatehandleAmenitiesChange=async(value)=>{
   
    var response=await JsonRequest('admin/projectdata/amenities/'+value,'DELETE');
    
    if (response.status && response.statusCode === 200) {
        getProjectAmenitieshandle();
        
        toast.success(response.message);
    }else{
        toast.error(response.message);
    }
}
    const handleAmenitiesChange=async(e)=>{
        // alert(e.target.checked);
        const objectdata={
            'amenities_id':e.target.value
        } 

        var response=await JsonRequest('admin/projectdata/amenities?project_id='+projectid,'POST',objectdata);
          
        if (response.status && response.statusCode === 200) {
            toast.success(response.message);
            getProjectAmenitieshandle();


        }else{
            toast.error(response.message);
        }
   
    }
    const getProjectAmenitieshandle=async()=>{

        var response=await JsonRequest('admin/projectdata/amenities?project_id='+projectid,'GET');
        if (response.status && response.statusCode === 200) {
            
          
            setProjectAmenitiesList(response.data);

        }
    }
    useEffect(() => {
        getAmenitiesListhandle(amenitiespagePage)
        
        getProjectAmenitieshandle()
    }, []);


    const loadmoreamenities=()=>{
        setAmenitiespagePage(amenitiespagePage+1);
        setTottalAmenitiespage(tottalAmenitiespage-1);
        getAmenitiesListhandle(amenitiespagePage);
    }

    



    return(
        <>
          

            <div className="px_50 form_col">
                <Button className="btn btn_outline" onClick={backHandler}>Back</Button>

                <Sections projectid={projectid} image  section_type={section_id} textarea  title="Amenities" sub_heading  />

                <div className="card mt-3">
                    <div className="card-header">
                        Amenities List  
                    </div>
                    <div className="card-body">
                        {
                        subAmenitiesList ? (
                            subAmenitiesList.map((item, key) => (
                                <label key={key} htmlFor={`amenities${key}`} className="btn mr-1">
                                <input 
                                    type="checkbox" 
                                    value={item.id} 
                                    id={`amenities${key}`} 
                                    checked={projectAmenitiesList.some(dataItem => dataItem.amenities_id === item.id)} 
                                    onChange={event => {
                                        if (projectAmenitiesList.some(dataItem => dataItem.amenities_id === item.id)) {
                                            const matchedItem = projectAmenitiesList.find(dataItem => dataItem.amenities_id === item.id);
                                            updatehandleAmenitiesChange(matchedItem.id);
                                        } else {
                                            handleAmenitiesChange(event);
                                        }
                                    }} 
                                />
                                <span style={{paddingLeft:'8px'}}>{item.title}</span>
                            </label>
                            
                            ))



                        ) : null
                        }

                        {tottalAmenitiespage !== 1 ? <button type="button" onClick={loadmoreamenities}>Load  More</button> : null}
                    </div>
                </div>



            </div>

        </>
    )
}

export default Amenities;