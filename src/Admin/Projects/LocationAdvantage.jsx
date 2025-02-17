import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from "common/Portal/Backdrop";
import CustomDropdown from "common/Custom_Dropdown/CustomDropdown";
import SideModal from "../components/Modal/SideModal/Index";
import ProjectSteps from "../components/ProjectSteps/Index";
import Sections from "../components/Project/Sections";
import { toast } from "react-toastify";
import Button from "common/Button/Button";
import SearchLocation from "../components/SearchLocation/Index";
import JsonRequest from "root/config/JsonRequest";
import Loader from "common/Loader/loader";

import "react-quill/dist/quill.snow.css";
import "../assets/css/admin.css";

const sizeOptions = [
  { label: "sq.mt.", value: "active" },
  { label: "sq.ft.", value: "hide" },
  { label: "sq.yd.", value: "hide" },
];

const priceOptions = [
  { label: "lacs", value: "active" },
  { label: "cr", value: "hide" },
];

const LocationAdvantage = () => {
  const projectid = useParams().projectid;
  const section_id = useParams().section;

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
  const [isSitebarFormButtonLoading, setIsSitebarFormButtonLoading] =
    useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showAddSidebar, setShowAddSidebar] = useState(false);
  const [errors, setErrors] = useState({});
  const [searchLocationdata, setSearchLocationdata] = useState({
    // Initialize your form data state
    type: "",
    search: "",
    radius: "",
    lat: "",
    long: "",
    nextPageToken: "",
  });

  const [locationData, setLocationData] = useState({
    type: "",
    distance: "",
    name: "",
  });
  const navigate = useNavigate();
  const searchLocation = async () => {
    setBoxLodingSearch(true);
    var response = await JsonRequest(
      "admin/location/nearerst-place",
      "POST",
      searchLocationdata
    );

    // setSearchResult(prevSearchResult => [...prevSearchResult, ...response.results]);

    setSearchResult((prevSearchResult) => {
      return [...prevSearchResult, ...response.results];
    });

    if (response.next_page_token) {
      searchLocationdata.nextPageToken = response.next_page_token;
    }
    setBoxLodingSearch(false);
  };
  const fetchNearbyPlaces = async (e) => {
    e.preventDefault(0);
    setSearchResult([]);
    searchLocationdata.nextPageToken = "";
    searchLocation();
  };

  const locationdata = async () => {
    var response = await JsonRequest(
      "admin/projectdata/location/getByProject/" + projectid,
      "GET"
    );

    if (response.status && response.statusCode === 200) {
      searchLocationdata.lat = response.data.latitude;
      searchLocationdata.long = response.data.longtitude;
    }
  };

  const locationAdvntge = async () => {
    setIsLoadingTableData(true);

    try {
      var response = await JsonRequest(
        "admin/projectdata/location-advantage?project_id=" + projectid,
        "GET"
      );
      if (response.status && response.statusCode === 200) {
        setAllLocationAdvantage(response.data.data);
        setIsLoadingTableData(false);
      } else {
        setAllLocationAdvantage([]);
        setIsLoadingTableData(false);
      }
    } catch (err) {
      console.log(err);
      setIsLoadingTableData(false);
    }
  };

  const getLocationType = async () => {
    setBoxLoding(true);
    var response = await JsonRequest("location-type", "GET");

    if (response.status && response.statusCode === 200) {
      setLocationtype(response.data);
    }
    setBoxLoding(false);
  };

  const getLocationTypes = async () => {
    try {
      var response = await JsonRequest("location-advantage-type", "GET");

      if (response.status && response.statusCode == 200) {
        setLocationTypes(response.data);
      } else {
        setLocationTypes([]);
      }
    } catch (err) {
      console.log("error while fetching location types", err);
    }
  };

  useEffect(() => {
    // locationdata()
    locationAdvntge();
    getLocationTypes();
    // getLocationType()
  }, []);

  const basicSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/admin/projects/location");
  };

  const backHandler = () => {};

  const handleChange = (e) => {
    setSearchLocationdata({
      ...searchLocationdata,
      [e.target.name]: e.target.value,
    });
  };

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

  const deleteLocationAdvantafe = async (id) => {
    setIsLoading(true);

    var response = await JsonRequest(
      "admin/projectdata/location-advantage/" + id + "/delete",
      "POST"
    );
    if (response.status && response.statusCode === 200) {
      locationAdvntge();
    }
    setIsLoading(false);
  };

  const addLocationHandler = async () => {
    setIsSitebarFormButtonLoading(true);
    try {
      var response = await JsonRequest("location-advantage-type", "GET");

      if (response.status && response.statusCode == 200) {
        setLocationTypes(response.data);
        setShowAddSidebar(!showSidebar);
        setIsSitebarFormButtonLoading(false);
      } else {
        setLocationTypes([]);
        setShowAddSidebar(!showSidebar);
      }
    } catch (err) {
      console.log("error while fetching location types", err);
    } finally {
      setIsSitebarFormButtonLoading(false);
    }
  };

  const emptyLocationData = async () => {
    setLocationData({
      type: "",
      distance: "",
      name: "",
    });
  };

  const addSubmitHandler = async (event) => {
    event.preventDefault();
    setIsSitebarFormButtonLoading(true);
    const updatedData = { ...locationData, project_id: projectid };

    try {
      var response = await JsonRequest(
        "admin/projectdata/location-advantage",
        "POST",
        updatedData
      );

      if (response.status && response.statusCode == 200) {
        await emptyLocationData();
        setIsSitebarFormButtonLoading(false);
        setShowAddSidebar(false);
        await locationAdvntge();
        toast.success(response.message);
      } else {
        setLocationTypes([]);
        setShowAddSidebar(!showSidebar);
        setShowAddSidebar(false);
      }

      setIsSitebarFormButtonLoading(false);
    } catch (err) {
      console.log(err);
      toast.error(response.err);
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLocationData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const updateSubmitHandler = async (event) => {
    event.preventDefault();
  };

  const cancelHandler = () => {
    setShowSidebar(false);
    setShowAddSidebar(false);
  };

  if (isLoading) {
    return <Loader />; // Use the Loader component
  }

  return (
    <>
      <div className="px_50 form_col">
        <Button className="btn btn_outline" onClick={backHandler}>
          Back
        </Button>
        <Sections
          projectid={projectid}
          image
          section_type={section_id}
          sub_heading
        />

        <div className="card card_style1 mt_40">
          <div className="d-flex align-items-center">
            <h5>All Project Locations</h5>
            <button
              className="btn ms-auto btn_primary btn-sm"
              onClick={addLocationHandler}
            >
              Add Location Advantage
            </button>
          </div>

          <table className="w-100 mt_30">
            <thead>
              <tr>
                <th>Title</th>
                <th>Distance</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {isLoadingTableData && (
                <tr>
                  <td colSpan={4}>
                    <div className="text-center">
                      <ScaleLoader color="#ddd" className="w-100" />
                    </div>
                  </td>
                </tr>
              )}

              {!isLoadingTableData && allLocationAdvantage.length
                ? allLocationAdvantage.map((item, key) => (
                    <tr key={key++}>
                      <td>{item.name}</td>
                      <td>{item.distance}</td>
                      <td>
                        {locationTypes?.find((type) => type.id == item.type) ? (
                          <span key={item.type}>
                            {
                              locationTypes.find((type) => type.id == item.type)
                                ?.name
                            }
                          </span>
                        ) : (
                          ""
                        )}
                      </td>

                      <td>
                        <button
                          type="button"
                          onClick={() => deleteLocationAdvantafe(item.id)}
                        >
                          Delete{" "}
                        </button>
                      </td>
                    </tr>
                  ))
                : !isLoadingTableData
                ? "not found"
                : null}
            </tbody>
          </table>
        </div>
      </div>

      {showAddSidebar && (
        <>
          <SidebarPortal className="portal">
            <SideModal
              onCancel={cancelHandler}
              onSubmit={enableEdit ? updateSubmitHandler : addSubmitHandler}
              isLoading={isSitebarFormButtonLoading}
            >
              <div>
                <div className="mb_20">
                  <label className="block font-medium">Location Type*</label>
                  <select
                    defaultValue={locationData.type}
                    className="w-full border p-2"
                    name="type"
                    onChange={changeHandler}
                  >
                    <option value="">Select Location Type</option>
                    {locationTypes.length &&
                      locationTypes.map((item) => (
                        <option value={item.id}>{item.name}</option>
                      ))}
                  </select>
                  {errors.distance && (
                    <span className="text-danger">{errors.distance}</span>
                  )}
                </div>

                <div className="mb_20">
                  <label className="block font-medium">Name*</label>
                  <input
                    className="w-full border p-2"
                    type="text"
                    placeholder="Enter Location Name"
                    name="name"
                    value={locationData.name}
                    onChange={changeHandler}
                  />
                  {errors.name && (
                    <span className="text-danger">{errors.name}</span>
                  )}
                </div>

                <div className="mb_20">
                  <label className="block font-medium">Distance</label>
                  <input
                    className="w-full border p-2"
                    type="text"
                    placeholder="Enter Distance"
                    name="distance"
                    value={locationData.distance}
                    onChange={changeHandler}
                  />
                  {errors.distance && (
                    <span className="text-danger">{errors.distance}</span>
                  )}
                </div>
              </div>
            </SideModal>
          </SidebarPortal>

          <BackdropPortal className="show" />
        </>
      )}
    </>
  );
};

export default LocationAdvantage;
