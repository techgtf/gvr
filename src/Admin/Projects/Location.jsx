import React, {useEffect, useState,useRef  } from "react";

import {getCityBystate,getLocalityByCity} from 'root/config/function';
import {useParams, useNavigate  } from "react-router-dom";
import SearchLocation from '../components/SearchLocation/Index';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Sections from '../components/Project/Sections';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ProjectSteps from '../components/ProjectSteps/Index'
import Col from 'react-bootstrap/Col';
import Button from 'common/Button/Button'
import '../assets/css/admin.css';
import Request from 'root/config/Request';
import JsonRequest from 'root/config/JsonRequest';


import Loader from "common/Loader/loader";




const ProjectLocation = ()=>{
    const [submitLoading, setSubmitLoading] = useState(false);

    const [isLoading, setIsLoading] = useState(true);
    const projectid=useParams().projectid;
    const section_id=useParams().section;
    const [stateList, setStateList] = useState([]);
    const [locationData, setlocationData] = useState([]);

    const [cityList, setCityList] = useState([]);
    const [localityList, setLocality] = useState([]);
    const [checkedState, setCheckedState] = useState('');
    const [checkedCity, setCheckedCity] = useState('');
    const [checkedLocality, setCheckedLocality] = useState('');
    const [enableEdit, setEnableEdit] = useState(false);
    const [editId, setEditId] = useState(false);


    const [sectionFormdata, setSectionFormdata] = useState({
        // Initialize your form data state
    
        address: null,
        project_id: projectid,
        latitude: null,
        longtitude: null,
        state: null,
        city: null,
        locality:null
    });
    

    
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                await allState(),
               await locationdata()
            setIsLoading(false);
            } catch (error) {
              console.error('Error fetching data:', error);
              
            }
          };

          fetchData();
    }, []);




    const handlePlaceSelect = async (data) => {
        setSubmitLoading(true);

   
        if(data.status &&  data.statusCode==200){
            const result=data.data;
            var locations=result.locations;
    
            setSectionFormdata({
                address: result.address,
                latitude: locations.latitude,
                longtitude: locations.longtitude,
                state: result.state.id,
                city: result.city.selected,
                locality:result.locatlity.selected,
                project_id:projectid
             });
            setCheckedCity(result.city.selected)
            setCityList(result.city.list);
            setLocality(result.locatlity.list);
            setCheckedLocality(result.locatlity.selected);
            setStateList([result.state]);
            setCheckedState(result.state.id);

        }
        setSubmitLoading(false);

    };
    

    const basicSubmitHandler =async (e)=>{
        e.preventDefault();
        setSubmitLoading(true);
        var response=await JsonRequest('admin/projectdata/location','POST',sectionFormdata);
        if (response.status && response.statusCode === 200) {
            toast.success(response.message);
        }else{
            toast.error(response.message);
        }
        setSubmitLoading(false);

    }

    const updateSubmitHandler=async (e)=>{
        e.preventDefault();
        setSubmitLoading(true);

        var response=await JsonRequest('admin/projectdata/location/'+editId+'/update','POST',sectionFormdata);
        if (response.status && response.statusCode === 200) {
            toast.success(response.message);
        }else{
            toast.error(response.message);
        }
        setSubmitLoading(false);

    }

  
    const backHandler = ()=>{
        
    }

    const allState = async () => {
        var response=await Request('admin/state','GET');
        if (response.status && response.statusCode === 200) {
            setStateList(response.data.data);
        }
    }


    const getcity=async(stateid)=>{
        setSubmitLoading(true);
        var response =await getCityBystate(stateid);
        if (response.status && response.statusCode === 200 && response.data.length >0) {
            setCityList(response.data);
        }else{
            setCityList([]);
         }
         setLocality([]);
        setSubmitLoading(false);

    }
    const handleSelectState=async (event)=>{
        sectionFormdata.state=event.target.value;
        getcity(event.target.value);
    }

    const getLocality=async(cityid)=>{
        setSubmitLoading(true);

        var response =await getLocalityByCity(cityid);
        if (response.status && response.statusCode === 200 && response.data.length >0) {
            setLocality(response.data);
        }else{
            setLocality([]);
         }
        setSubmitLoading(false);

    }
    const handleSelectCity=async (event)=>{
        sectionFormdata.city=event.target.value;
        getLocality(event.target.value);
    }

    const locationdata=async ()=>{
        var response=await Request('admin/projectdata/location/getByProject/'+projectid,'GET');

        if (response.status && response.statusCode === 200) {
      
            // setlocationData(response.data.data);
            setEnableEdit(true);
            const result=response.data;
            setEditId(result.id);

            allState();
            getcity(result.state);
            getLocality(result.city);
            sectionFormdata.address= result.address;
            sectionFormdata.project_id= projectid;                
            sectionFormdata.latitude= result.latitude;
            sectionFormdata.longtitude= result.longtitude;
            sectionFormdata.state= result.state;
            sectionFormdata.city= result.city;
            sectionFormdata.locality=result.locality;  
        }
    }

    const changeHandler = (e)=>{
        setSubmitLoading(true);

        setSectionFormdata({
            ...sectionFormdata,
            address:e.target.value
        })
        setSubmitLoading(false);

    }

    if (isLoading) {
        return  <Loader />; // Use the Loader component
    } 

    return(
        <>
         

            {isLoading ? 'Loading.....' :
             <div className="px_50 form_col">
             <Button className="btn btn_outline" onClick={backHandler}>Back</Button>
             {/* <div className=" mb-5 mt-2">
                 <Sections projectid={projectid}  section_type="5"   />
             </div> */}

             <div className="card mt-4">
                 <div className="card-body">
                 <Form   onSubmit={(enableEdit ? updateSubmitHandler : basicSubmitHandler)}>
                 
                 <h6 className="labelTitle">Where is your property located?</h6>

                 <Row>
                 <Form.Group as={Col} md="6" className="mb_20">
                     <Form.Label>Project City*</Form.Label>
                         <SearchLocation onLocationSelect={handlePlaceSelect} value={sectionFormdata.address} changeHandler={changeHandler} />
                     </Form.Group>

                     

                     <Form.Group as={Col} md="6" className="mb_20">
                         <Form.Label>Project State*</Form.Label>
                            
                             <select name="" id="" className="form-control" onChange={handleSelectState}>
                                 <option value="">Select State</option>
                             {
                                 (stateList ? stateList && stateList.map((item,key) => (
                                     <option key={key} value={item.id} selected={sectionFormdata.state == item.id}>{item.state}</option>
                                 )) :''
                             )
                         }
                         </select>
                     </Form.Group>
                     <Form.Group as={Col} md="6" className="mb_20">
                         <Form.Label>Project City*</Form.Label>

                         {/* cityList */}
                         <select name="" id="" className="form-control" onChange={handleSelectCity}>
                             <option value="">Select City</option>
                             {
                             (cityList ? cityList && cityList.map((item,key) => (
                                 <option  key={key} value={item.id} selected={sectionFormdata.city == item.id}>{item.city}</option>
                             )) :''
                             )
                         }
                         </select>
                     </Form.Group>

                     <Form.Group as={Col} md="6" className="mb_20">
                         <Form.Label>Locality*</Form.Label>

                         {/* cityList */}
                         <select name="" id="" className="form-control">
                             <option value="">Select Locality</option>
                             {
                             (localityList ? localityList && localityList.map((item,key) => (
                                 <option  key={key} value={item.id} selected={sectionFormdata.locality == item.id}>{item.locality}</option>
                             )) :''
                             )
                         }
                         </select>
                     </Form.Group>


                     

                 </Row>



                 {
                        
                        submitLoading ? <>    <Button className="btn btn_primary mt_20" type="button" disabled>Please Wait ..</Button></>  :    <Button className="btn btn_primary mt_20" type="submit">Save Location</Button>
                          
                        }





             </Form>
                 </div>
             </div>
         </div>


            }

               

        </>
    )
}

export default ProjectLocation;