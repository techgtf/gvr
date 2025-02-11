import React, {useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from 'common/Portal/Backdrop'
import CustomDropdown from 'common/Custom_Dropdown/CustomDropdown';
import SideModal from "../components/Modal/SideModal/Index";
import ProjectSteps from '../components/ProjectSteps/Index'
import Sections from '../components/Project/Sections';
import {  toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'common/Button/Button'
import SearchLocation from "../components/SearchLocation/Index";
import * as CONFIG from 'root/config';
import JsonRequest from 'root/config/JsonRequest';  
import Loader from "common/Loader/loader";



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

    const LocationAdvantage = ()=>{


    const projectid=useParams().projectid;
    const section_id=useParams().section;


    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingTableData, setIsLoadingTableData] = useState(false);
    const [boxLoding, setBoxLoding] = useState(false);
    const [boxLodingSearch, setBoxLodingSearch] = useState(false);
    const [enableEdit, setenableEdit] = useState(false);
    const [showEditEnableImage, setEditEnableImage] = useState(null);
    const [places, setPlaces] = useState([]);
    const [locationTypes, setLocationTypes] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [allLocationAdvantage, setAllLocationAdvantage] = useState([]);
    const [locationtype, setLocationtype] = useState([]);
    const [isSitebarFormButtonLoading, setIsSitebarFormButtonLoading] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [showAddSidebar, setShowAddSidebar] = useState(false);
    const [errors, setErrors] = useState({});
    const [searchLocationdata, setSearchLocationdata] = useState({
        // Initialize your form data state
        type: "",
        search:"",
        radius: "",
        lat: "",
        long: "",
        nextPageToken:""
      });

    const [locationData, setLocationData] = useState({
        type:'',
        distance:'',
        name:''
    });
    const navigate = useNavigate();
    const searchLocation=async ()=>{
        setBoxLodingSearch(true);
        var response=await JsonRequest('admin/location/nearerst-place','POST',searchLocationdata);

        // setSearchResult(prevSearchResult => [...prevSearchResult, ...response.results]);

        setSearchResult(prevSearchResult => {
        
            return [...prevSearchResult, ...response.results];
        });

        if(response.next_page_token){
            
            searchLocationdata.nextPageToken=response.next_page_token;
       
        }
        setBoxLodingSearch(false);

    }
    const fetchNearbyPlaces = async (e) => {
   
        e.preventDefault(0);
        setSearchResult([]);
        searchLocationdata.nextPageToken="";
        searchLocation();
       
       
        
    };

    
    const locationdata=async ()=>{
       
        var response=await JsonRequest('admin/projectdata/location/getByProject/'+projectid,'GET');

        if (response.status && response.statusCode === 200) {
            searchLocationdata.lat=response.data.latitude;
            searchLocationdata.long=response.data.longtitude;
        }
    }

    const locationAdvntge=async ()=>{
        setIsLoadingTableData(true);
        
        try{
            var response=await JsonRequest('admin/projectdata/location-advantage?project_id='+projectid,'GET');
            if (response.status && response.statusCode === 200) {
                setAllLocationAdvantage(response.data.data);
                setIsLoadingTableData(false);
            }else{
                setAllLocationAdvantage([]);
                setIsLoadingTableData(false);
            }
        }
        catch(err){
            console.log(err)
            setIsLoadingTableData(false);
        }

    }

    const getLocationType=async ()=>{
        setBoxLoding(true);
        var response=await JsonRequest('location-type','GET');
       
        if (response.status && response.statusCode === 200) {
            setLocationtype(response.data);
        }
        setBoxLoding(false);

    }

    const getLocationTypes = async()=>{
        try{
            var response=await JsonRequest('location-advantage-type','GET');

            if(response.status && response.statusCode == 200){
                setLocationTypes(response.data);
            }else{
                setLocationTypes([])
            }

        }catch(err){
            console.log('error while fetching location types', err);
        }
    }



    useEffect(() => {
        // locationdata()
        locationAdvntge()
        getLocationTypes();
        // getLocationType()

    
    }, []);

    const basicSubmitHandler = (e)=>{
        e.preventDefault();
        navigate('/admin/projects/location');
    }

    const backHandler = ()=>{
        
    }

    
    const handleChange=(e)=>{
        setSearchLocationdata({ ...searchLocationdata, [e.target.name]: e.target.value });
        
    }
   

    // const addLocationAdvantafe=async (place_id,distance,name)=>{
    //     setIsLoadingTableData(true);


    //     const objecdata={
    //         place_id:place_id,
    //         project_id:projectid,
    //         distance:distance,
    //         type:searchLocationdata.type,
    //         name:name

    //     }
    //     var response=await JsonRequest('admin/projectdata/location-advantage','POST',objecdata);
      
    //     if (response.status && response.statusCode === 200) {
    //         locationAdvntge();
    //     }
    //     setIsLoadingTableData(false);



    // }

    const deleteLocationAdvantafe=async (id)=>{
        setIsLoading(true);

        var response=await JsonRequest('admin/projectdata/location-advantage/'+id+'/delete','POST');
        if (response.status && response.statusCode === 200) {
            locationAdvntge();
        }
        setIsLoading(false);

    }

    const addLocationHandler = async()=>{
        setIsSitebarFormButtonLoading(true);
        try{
            var response=await JsonRequest('location-advantage-type','GET');

            if(response.status && response.statusCode == 200){
                setLocationTypes(response.data);
                setShowAddSidebar(!showSidebar);
                setIsSitebarFormButtonLoading(false);
            }else{
                setLocationTypes([])
                setShowAddSidebar(!showSidebar)
            }

        }catch(err){
            console.log('error while fetching location types', err);
        }finally{
            setIsSitebarFormButtonLoading(false);
        }

    }

    const emptyLocationData = async()=>{
        setLocationData({
            type:'',
            distance:'',
            name:''
        })
    }

    const addSubmitHandler = async(event)=>{
        event.preventDefault();
        setIsSitebarFormButtonLoading(true);
        const updatedData = {...locationData, project_id:projectid};

        try{
            var response=await JsonRequest('admin/projectdata/location-advantage','POST',updatedData);

            if(response.status && response.statusCode == 200){
                await emptyLocationData();
                setIsSitebarFormButtonLoading(false);
                setShowAddSidebar(false)
                await locationAdvntge();
                toast.success(response.message);
            }else{
                setLocationTypes([])
                setShowAddSidebar(!showSidebar)
                setShowAddSidebar(false)
            }


            setIsSitebarFormButtonLoading(false);
        }catch(err){
            console.log(err);
            toast.error(response.err);
        }
    }

    const changeHandler = (e)=>{
        const { name, value } = e.target;
        setLocationData(prevState =>({
            ...prevState,
            [name]: value
        }))
    }

    const updateSubmitHandler = async(event)=>{
        event.preventDefault();
    }

    const cancelHandler = ()=>{
        setShowSidebar(false)
        setShowAddSidebar(false);
    }

    if (isLoading) {
        return <Loader />; // Use the Loader component
    } 



    return(
        <>
            {/* <div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">Add Project</h4>
            </div>

            <div className="property_wizard_listing d-flex">
          

                <div className="px_50 form_col">
                    <Button className="btn btn_outline" onClick={backHandler}>Back</Button>
                    <Sections projectid={projectid} image  section_type={section_id}   />

                    <div className="card card_style1 mt_40">
                        <div className="d-flex">
                            <h5>All Project Locations</h5>
                        </div>

                        <table className="w-100 mt_30">
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

                            </tbody>

                        </table>
                    </div>
                </div>
            </div> */}

            <div className="px_50 form_col">
                <Button className="btn btn_outline" onClick={backHandler}>Back</Button>
            <Sections projectid={projectid} image  section_type={section_id} sub_heading   />

                {/* <div className="card card_style1 mt_40">
                    <div className="d-flex">
                        <h5>Add Location Points</h5>
                    </div>

                    <Form onSubmit={fetchNearbyPlaces}>
                    <Row className="mt_30 location_filter_row">
                        <Form.Group className="mb_20" >
                            <Form.Label>Location Type</Form.Label>
                            
                            <select className="form-control" name="type" value={searchLocationdata.type}  onChange={handleChange}>

                            {

                                (locationtype ? locationtype && locationtype.map((item,key) => (

                                    <option value={item.name}>{item.name}</option>
                                )) :''
                                )
                            }
                              
                            </select>
                        </Form.Group>

                        <Form.Group className="mb_20" >
                            <Form.Label>Search By</Form.Label>
                            <Form.Control  type="text" name="search" value={searchLocationdata.search}  placeholder="Search Location"  onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb_20" >
                            <Form.Label>Location Range</Form.Label>
                            <select className="form-control" name="radius" value={searchLocationdata.radius}   onChange={handleChange}>
                                <option value="">Select Radius</option>
                                <option value="5">5 Km</option>
                                <option value="10">10 Km</option>
                                <option value="15">15 Km</option>
                                <option value="20">20 Km</option>
                                <option value="30">30 Km</option>
                                <option value="40">40 Km</option>
                                <option value="50">50 Km</option>

                            </select>
                        </Form.Group>

                        <Form.Group className="mb_20 filter_group" >
                            <Form.Label></Form.Label>
                            <Button className="btn btn_primary filter_btn">Search</Button>
                        </Form.Group>

                    </Row>
                    </Form>

                    <table className="w-100 mt_30">
                        <thead>
                            <tr>
                                <th>
                                    Title
                                </th>
                                
                                <th>
                                    Rating
                                </th>
                                <th>
                                    Distance
                                </th>

                                <th>
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                        
                        {




                                (searchResult ? searchResult && searchResult.map((item,key) => (

                                    <tr key={key}>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.rating}
                                        </td>
                                        <td>
                                            {item.distance}
                                        </td>

                                        <td >
                                           <button type="button" onClick={()=>addLocationAdvantafe(item.place_id,item.distance,item.name)}>Add </button>
                                        </td>



                                    </tr>
                                )) :''
                                )
                            }
                           {boxLodingSearch && (
                            <tr>
                            <td colSpan={4}>
                                <div className="text-center">
                                    <ScaleLoader 
                                        color="#ddd"
                                        className="w-100"
                                    /> 
                                </div>
                            </td>
                        </tr>  
                        )}


                        </tbody>

                    </table>

                    {
                        searchLocationdata.nextPageToken ? <button onClick={searchLocation}>Load More</button> :null
                    }

                    <ul>
                        {places.map((place) => (
                            <li key={place.place_id}>{place.name}</li>
                        ))}
                    </ul>
                </div> */}

                <div className="card card_style1 mt_40">
                    <div className="d-flex align-items-center">
                        <h5>All Project Locations</h5>
                        <button className="btn ms-auto btn_primary btn-sm" onClick={addLocationHandler}>Add Location Advantage</button>
                    </div>

                    <table className="w-100 mt_30">
                        <thead>
                        <tr>
                                <th>
                                    Title
                                </th>
                                <th>
                                    Distance
                                </th>
                                <th>
                                    Type
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody> 



                        {isLoadingTableData && (
                            <tr>
                                <td colSpan={4}>
                                    <div className="text-center">
                                        <ScaleLoader 
                                            color="#ddd"
                                            className="w-100"
                                        /> 
                                    </div>
                                </td>
                            </tr>  
                        )}


                        {!isLoadingTableData && allLocationAdvantage.length ? allLocationAdvantage.map((item,key) => (
                            <tr key={key++}>
                                
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.distance}
                                </td>
                                <td>
                                {
                                        locationTypes?.find(type => type.id == item.type) ? (
                                            <span key={item.type}>
                                            {
                                                locationTypes.find(type => type.id == item.type)?.name
                                            }
                                            </span>
                                        ) : ""
                                        }
                                </td>

                                <td >
                                    <button type="button" onClick={()=>deleteLocationAdvantafe(item.id)}>Delete </button>
                                </td>

                            </tr>
                            )) : !isLoadingTableData ? 'not found' : null
                            
                        }

                        </tbody>

                    </table>
                </div>
            </div>

            {showAddSidebar && (
                <>
                    <SidebarPortal className="portal">
                        <SideModal onCancel={cancelHandler} onSubmit={(enableEdit ? updateSubmitHandler : addSubmitHandler)} isLoading={isSitebarFormButtonLoading}>
                            <Form >
                                <Form.Group className="mb_20">
                                    <Form.Label>Location Type*</Form.Label>
                                    <select defaultValue={locationData.type} className="form-control" name="type" onChange={changeHandler}>
                                        <option value="">Select Location Type</option>
                                        {locationTypes.length && (
                                            locationTypes.map(item=>(
                                                <option value={item.id}>{item.name}</option>
                                            ))
                                        )}
                                    </select>
                                    {errors.distance && <span className="text-danger" >{errors.distance}</span>}
                                </Form.Group>

                                <Form.Group className="mb_20">
                                    <Form.Label>Name*</Form.Label>
                                    <Form.Control className="" type="text" placeholder="Enter Location Name" name="name" value={locationData.name} onChange={changeHandler} />
                                    {errors.name && <span className="text-danger" >{errors.name}</span>}
                                </Form.Group>

                                <Form.Group className="mb_20">
                                    <Form.Label>Distance</Form.Label>
                                    <Form.Control className="" type="text" placeholder="Enter Distance" name="distance" value={locationData.distance} onChange={changeHandler}/>
                                    {errors.distance && <span className="text-danger" >{errors.distance}</span>}
                                </Form.Group>
                            </Form>
                        </SideModal>
                    </SidebarPortal>

                    <BackdropPortal className="show"/>
                </>
            )}

        </>
    )
}

export default LocationAdvantage;