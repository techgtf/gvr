import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import { getAmenities } from "../../config/Function";
import Pagination from "../../common/Pagination/Pagination";
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from "common/Portal/Backdrop";
import SideModal from "../components/Modal/SideModal/Index";
import Request from "../../config/Request";
import CustomDropdown from "../../common/Custom_Dropdown/CustomDropdown";
import ScaleLoader from "react-spinners/ScaleLoader";

import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

// toast
import { toast } from "react-toastify";

// end toast
import JsonRequest from "root/config/JsonRequest";
import * as CONFIG from "../../../config";

import Sections from "../components/Project/Sections";

import ProjectSteps from "../components/ProjectSteps/Index";
import Button from "common/Button/Button";
import "react-quill/dist/quill.snow.css";
import "../assets/css/admin.css";
import "react-toastify/dist/ReactToastify.css";


const sizeOptions = [
  { label: "sq.mt.", value: "active" },
  { label: "sq.ft.", value: "hide" },
  { label: "sq.yd.", value: "hide" },
];

const priceOptions = [
  { label: "lacs", value: "active" },
  { label: "cr", value: "hide" },
];

const Amenities = () => {
  const [data, setData] = useState([]);
  const projectid = useParams().projectid;
  const section_id = useParams().section;

    const [enableEdit, setenableEdit] = useState(false);
  const [showAddSidebar, setShowAddSidebar] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [subAmenitiesList, setSubAmenitiesList] = useState([]);
  const [projectAmenitiesList, setProjectAmenitiesList] = useState([]);
  const [tottalAmenitiespage, setTottalAmenitiespage] = useState(1);
  const [amenitiespagePage, setAmenitiespagePage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadingTableData, setIsLoadingTableData] = useState(false);
  const [isSitebarFormButtonLoading, setIsSitebarFormButtonLoading] = useState(false);
  const [lastPage, setLastPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [errors, setErrors] = useState({});
  const [editId, setEditId] = useState(false);
  const [showEditEnableImage, setEditEnableImage] = useState(null);

  const fileRef = useRef(null);
  const altRef = useRef(null);

  const navigate = useNavigate();

  const backHandler = () => {};

  const getAmenitiesListhandle = async (amenitiespagePage) => {
    const response = await getAmenities(amenitiespagePage);
    if (response.status && response.statusCode === 200) {
      var result = response.data.data;
      setSubAmenitiesList((prevList) => [...prevList, ...result]);

      setTottalAmenitiespage(response.data.last_page);
    }
  };

  const updatehandleAmenitiesChange = async (value) => {
    var response = await JsonRequest(
      "admin/projectdata/amenities/" + value,
      "DELETE"
    );

    if (response.status && response.statusCode === 200) {
      getProjectAmenitieshandle();

      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };
  const handleAmenitiesChange = async (e) => {
    // alert(e.target.checked);
    const objectdata = {
      amenities_id: e.target.value,
    };

    var response = await JsonRequest(
      "admin/projectdata/amenities?project_id=" + projectid,
      "POST",
      objectdata
    );

    if (response.status && response.statusCode === 200) {
      toast.success(response.message);
      getProjectAmenitieshandle();
    } else {
      toast.error(response.message);
    }
  };
  const getProjectAmenitieshandle = async () => {
    var response = await JsonRequest(
      "admin/projectdata/amenities?project_id=" + projectid,
      "GET"
    );
    if (response.status && response.statusCode === 200) {
      setProjectAmenitiesList(response.data);
    }
  };
  useEffect(() => {
    getAmenitiesListhandle(amenitiespagePage);

    getProjectAmenitieshandle();
  }, [amenitiespagePage]);

  const loadmoreamenities = () => {
    setAmenitiespagePage((state) => state + 1);
    setCurrentPage((state) => state + 1);
    // setTottalAmenitiespage(tottalAmenitiespage - 1);
    // getAmenitiesListhandle(amenitiespagePage);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const addAmenityHandler = () => {
    setShowAddSidebar(!showSidebar);
  };

  const resetFields = () => {
    fileRef.current = null;
    altRef.current = null;
    setErrors({});
    setEditId(false);
    setenableEdit(false);
  };

  const cancelHandler = () => {
    setShowSidebar(false);
    setShowAddSidebar(false);
    resetFields();
  };

  useEffect(() => {
      listHandler();
    }, [currentPage, totalPage]);

  const listHandler = async (search = "") => {
    setIsLoadingTableData(true);
    var response = await Request(
      "admin/projectdata/amenities-gallery?project_id="+projectid+"&search=" + search + "&page=" + currentPage,
      "GET"
    );
    if (response.status && response.statusCode === 200) {
      setData(response.data.data);
      setLastPage(response.data.last_page);
    }
    setIsLoadingTableData(false);
  };

  const addSubmitHandler = async (event) => {
      event.preventDefault();
      setIsSitebarFormButtonLoading(true);
      const formData = new FormData();
      formData.append("project_id", projectid);
      formData.append("image", fileRef.current.files[0]);
      formData.append("alt_text", altRef.current.value);
      var response = await Request("admin/projectdata/amenities-gallery", "POST", formData);
      if (response.status && response.statusCode == 403) {
        setErrors(response.errors);
        toast.error(response.message);
      } else if (response.status && response.statusCode == 200) {
        listHandler();
        cancelHandler();
        resetFields();
        toast.success(response.message);
      }
      setIsSitebarFormButtonLoading(false);
    };

    const deleteHandler = async (id) => {
        var response = await Request("admin/projectdata/amenities-gallerydelete/" + id, "POST");
        if (response.status && response.statusCode === 200) {
          toast.success(response.message);
    
          listHandler();
        } else {
          toast.error(response.message);
        }
      };

    const findHandler = async (e) => {
      const searchTerm = e.target.value.toLowerCase();
      listHandler(searchTerm);
    };

     const editHandler = async (id) => {
        setShowSidebar(true);
        setShowAddSidebar(true);
        setIsSitebarFormButtonLoading(true);
    
        var response = await Request("admin/projectdata/amenities-gallery/" + id + "/edit", "GET");
        if (response.status && response.statusCode === 200) {
          setenableEdit(true);
          setEditId(id);
          if (response.data.image) {
            setEditEnableImage(CONFIG.VITE_APP_STORAGE + response.data.image);
          }
          altRef.current.value = response.data.alt_text;
        }
        setIsSitebarFormButtonLoading(false);
      };

      const updateAmenityHandler = async (event) => {
          event.preventDefault();
          setIsSitebarFormButtonLoading(true);
      
          const formData = new FormData();
          if (fileRef.current.files[0]) {
            formData.append("image", fileRef.current.files[0]);
          }
          formData.append("alt_text", altRef.current.value);
      
          var response = await Request(
            "admin/projectdata/amenities-gallery/" + editId + "/update",
            "POST",
            formData
          );
          setIsSitebarFormButtonLoading(false);
      
          if (response.status && response.statusCode === 200) {
            listHandler();
            cancelHandler();
          } else if (response.status && response.statusCode === 403) {
            setErrors(response.errors);
          }
        };

  return (
    <>
      <div className="px-12 form_col">
        <Button className="btn btn_outline" onClick={backHandler}>
          Back
        </Button>

        <Sections
          projectid={projectid}
          section_type={section_id}
          title="Amenities"
        />

        <div className="card rounded-lg shadow-md bg-white p-6 mt-5">
          <div className="card-header text-lg font-semibold mb-4">
            Amenities List
          </div>
          <div className="card-body flex flex-wrap gap-2">
            {subAmenitiesList &&
              subAmenitiesList.map((item, key) => (
                <label
                  key={key}
                  htmlFor={`amenities${key}`}
                  className="flex items-center border px-3 py-2 rounded-md cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={item.id}
                    id={`amenities${key}`}
                    className="mr-2"
                    checked={projectAmenitiesList.some(
                      (dataItem) => dataItem.amenities_id === item.id
                    )}
                    onChange={(event) => {
                      if (
                        projectAmenitiesList.some(
                          (dataItem) => dataItem.amenities_id === item.id
                        )
                      ) {
                        const matchedItem = projectAmenitiesList.find(
                          (dataItem) => dataItem.amenities_id === item.id
                        );
                        updatehandleAmenitiesChange(matchedItem.id);
                      } else {
                        handleAmenitiesChange(event);
                      }
                    }}
                  />
                  <span>{item.title}</span>
                </label>
              ))}

            {tottalAmenitiespage !== 1 &&
              currentPage !== tottalAmenitiespage && (
                <button
                  type="button"
                  onClick={loadmoreamenities}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Load More
                </button>
              )}
          </div>
        </div>

        <div className="card bg-white mt-4 card_style1">
          <div className="flex items-center  mb-6">
            <div className="card-header text-lg font-semibold">
              Amenities Gallery
            </div>

            <div className="flex align-center ml-auto gap-6">
              <div className="searchInput ml-auto">
                <input
                  type="text"
                  className="border rounded px-3 py-2 w-full"
                  placeholder="Search by name"
                  onChange={findHandler}
                />
              </div>

              <button
                className="btn ml-auto btn_primary btn-sm"
                onClick={addAmenityHandler}
              >
                Add Gallery Image
              </button>
            </div>
          </div>

          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">Image</th>
                <th className="border border-gray-300 p-2 text-left">Alt Text</th>
                <th className="border border-gray-300 p-2 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {isLoadingTableData ? (
                <tr className="border-b border-gray-200">
                  <td colSpan={3}>
                    <div className="text-center py-4">
                      <ScaleLoader color="#ddd" className="w-full" />
                    </div>
                  </td>
                </tr>
              ) : (
                <>
                  {data && Array.isArray(data) && data.length > 0 ? (
                    data.map((item) => (
                      <tr key={item.id} className="border-b">
                        
                        <td className="py-2 px-4">
                          <div className="thumb icon bg-primary p-2 rounded">
                            <img
                              src={CONFIG.VITE_APP_STORAGE+item.image}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </td>
                        <td className="py-2 px-4">{item.alt_text}</td>
                        <td className="py-2 px-4 ">
                          <button
                            className="btn action_btn"
                            onClick={() => editHandler(item.id)}
                          >
                            <AiOutlineEdit size={22} />
                          </button>
                          <button
                            className="btn action_btn"
                            onClick={() => deleteHandler(item.id)}
                          >
                            <RiDeleteBin6Line
                              size={18}
                              className="text-red-500"
                            />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3">
                        <h5 className="no_record text-center py-4">
                          No Amenities Gallery Found!
                        </h5>
                      </td>
                    </tr>
                  )}
                </>
              )}
            </tbody>
          </table>

          {!isLoadingTableData && data && (
            <Pagination
              currentPage={currentPage}
              totalPages={lastPage}
              onPageChange={handlePageChange}
            />
          )}
        </div>

        {showAddSidebar && (
          <>
            <SidebarPortal className="portal">
              <SideModal
                onCancel={cancelHandler}
                onSubmit={enableEdit ? updateAmenityHandler : addSubmitHandler}
                isLoading={isSitebarFormButtonLoading}
              >
                <form>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Select Image
                    </label>
                    <input
                      ref={fileRef}
                      className="border rounded px-3 py-2 w-full"
                      type="file"
                    />
                    {errors.image && (
                      <span className="text-red-500">{errors.image && "Image Field is Required"}</span>
                    )}
                    {showEditEnableImage && (
                      <img src={showEditEnableImage} width="100" />
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Enter Alt Text
                    </label>
                    <input
                      ref={altRef}
                      className="border rounded px-3 py-2 w-full"
                      type="text"
                      placeholder="Enter Alt Text"
                    />
                    {errors.alt_text && (
                      <span className="text-red-500">{errors.alt_text}</span>
                    )}
                  </div>
                </form>
              </SideModal>
            </SidebarPortal>
            <BackdropPortal className="show" />
          </>
        )}
      </div>
    </>
  );
};

export default Amenities;
