import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SideModal from "../components/Modal/SideModal/Index";
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from "common/Portal/Backdrop";
import CustomDropdown from "common/Custom_Dropdown/CustomDropdown";

import CustomRadio from "common/CustomRadio/Index";
import Button from "common/Button/Button";
import Request from "root/config/Request";
import * as CONFIG from "../../../config";
import numDifferentiation from "common/NumberConversion";
import ScaleLoader from "react-spinners/ScaleLoader";

import "../assets/css/admin.css";
import Sections from "../components/Project/Sections";
import { getSubtypology } from "../../config/Function";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const statusOptions = [
  { label: "Active", value: "1" },
  { label: "Hide", value: "0" },
];

const planTypeOptions = [
  { label: "Unit 1", value: "unit1" },
  { label: "Unit 2", value: "unit2" },
  { label: "Unit 3", value: "unit3" },
  { label: "Unit 4", value: "unit4" },
  { label: "Unit 5", value: "unit5" },
];

const FloorPlan = React.memo(() => {
  const projectid = useParams().projectid;
  const section_id = useParams().section;

  const [isLoadingTableData, setIsLoadingTableData] = useState(false);
  const [isSitebarFormButtonLoading, setIsSitebarFormButtonLoading] =
    useState(false);

  const [showAddSidebar, setShowAddSidebar] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSidebar, setShowSidebar] = useState(false);

  const [enableEdit, setenableEdit] = useState(false);
  const [editId, setEditId] = useState(false);

  const [subTypologyList, setSubTypologyList] = useState([]);
  const [sizeListType, setSizeListType] = useState([]);
  const [list, setList] = useState([]);

  const navigate = useNavigate();
  const image = useRef(null);

  const [sectionFormdata, setSectionFormdata] = useState({
    // Initialize your form data state
    sub_typology: null,
    size: null,
    size_type: null,
    image: null,
    project_id: null,
    image_preview: null,
    image: null,
    price: null,
    type:null,
    carpet_area:null,
    balcony_area:null,
    super_area:null,
    more_typology:null
  });

  const resetfields = () => {
    setSectionFormdata({
      sub_typology: null,
      size: null,
      size_type: null,
      image: null,
      image_preview: null,
      more_typology:null,
      project_id: null,
    });
  };

  const handleSectionChange = (e) => {
    setSectionFormdata({ ...sectionFormdata, [e.target.name]: e.target.value });
    if (e.target.name == "sub_typology") {
      // setCheckedCategory(e.target.value);
    }
  };

  const handleStatusSelect = async (selectedValue, id) => {
    setSelectedStatus(selectedValue);
    await updateStatusHandler(id, selectedValue);
  };

  const updateStatusHandler = async (id, selectedStatus) => {
    setIsSitebarFormButtonLoading(true);

    const formData = new FormData();
    formData.append("status", selectedStatus);

    var response = await Request(
      "admin/projectdata/floor-plan/" + id + "/status",
      "POST",
      formData
    );

    if (response.status && response.statusCode == 403) {
      setErrors(response.errors);
      toast.error(response.message);
    } else if (response.status && response.statusCode == 200) {
      toast.success(response.message);
    }
    setIsSitebarFormButtonLoading(false);
  };

  const addAmenityHandler = () => {
    setShowAddSidebar(!showSidebar);
  };
  const cancelHandler = () => {
    resetfields();

    setShowSidebar(false);
    setShowAddSidebar(false);
  };

  const addSubmitHandler = async (e) => {
    e.preventDefault();
    setIsSitebarFormButtonLoading(true);
    debugger

    const formData = new FormData();
    formData.append("sub_typology", sectionFormdata.sub_typology);
    formData.append("type", sectionFormdata.type);
    formData.append("carpet_area", sectionFormdata.carpet_area);
    formData.append("balcony_area", sectionFormdata.balcony_area);
    formData.append("super_area", sectionFormdata.super_area);
    formData.append("more_typology", sectionFormdata.more_typology);
    formData.append("build_up_area", sectionFormdata.build_up_area);
    if (sectionFormdata.size) {
      formData.append("size", sectionFormdata.size);
    }
    if (sectionFormdata.size_type) {
      formData.append("size_type", sectionFormdata.size_type);
    }
    if (sectionFormdata.price) {
      formData.append("price", sectionFormdata.price);
    }

    formData.append("project_id", projectid);
    if (image.current.files[0]) {
      formData.append("image", image.current.files[0]);
    }
    var response = await Request(
      "admin/projectdata/floor-plan",
      "POST",
      formData
    );
    if (response.status && response.statusCode === 403) {
      toast.error(response.message);

      setErrors(response.errors);
    } else if (response.status && response.statusCode === 200) {
      getlist();
      cancelHandler();
      toast.success(response.message);

      resetfields();
    } else {
      toast.error(response.message);
    }
    setIsSitebarFormButtonLoading(false);
  };

  const updateSubmitHandler = async (e) => {
    e.preventDefault();
    setIsSitebarFormButtonLoading(true);
    debugger

    const formData = new FormData();
    formData.append("sub_typology", sectionFormdata.sub_typology);
    formData.append("type", sectionFormdata.type);
    formData.append("carpet_area", sectionFormdata.carpet_area);
    formData.append("balcony_area", sectionFormdata.balcony_area);
    formData.append("super_area", sectionFormdata.super_area);
    formData.append("more_typology", sectionFormdata.more_typology);
    formData.append("build_up_area", sectionFormdata.build_up_area);

    if (sectionFormdata.size) {
      formData.append("size", sectionFormdata.size);
    }
    if (sectionFormdata.size_type) {
      formData.append("size_type", sectionFormdata.size_type);
    }
    if (sectionFormdata.price) {
      formData.append("price", sectionFormdata.price);
    }
    // if (image.current.files[0]) {
    //   formData.append("image", image.current.files[0]);
    // }
    var response = await Request(
      "admin/projectdata/floor-plan/" + editId + "/update",
      "POST",
      formData
    );
    if (response.status && response.statusCode === 403) {
      setErrors(response.errors);
    } else if (response.status && response.statusCode == 200) {
      getlist();
      cancelHandler();
      resetfields();
    }
    toast.success(response.message);
    setIsSitebarFormButtonLoading(false);
  };
  const editHandler = async (id) => {
    setShowSidebar(true);
    setShowAddSidebar(true);

    var response = await Request(
      "admin/projectdata/floor-plan/" + id + "/edit",
      "GET"
    );
    if (response.status && response.statusCode === 200) {
      setenableEdit(true);
      setEditId(id);

      var result = response.data;

      setSectionFormdata({
        sub_typology: result.sub_typology,
        size: result.size,
        size_type: result.size_type,
        image_preview: CONFIG.VITE_APP_STORAGE + result.image,
        price: result.price,
        type:result.type,
        carpet_area: result.carpet_area,
        balcony_area: result.balcony_area,
        super_area: result.super_area,
        more_typology: result.more_typology,
        build_up_area: result.build_up_area,
      });

      // setCheckedCategory(result.size_type);
    }
  };

  const deleteHandler = async (id) => {
    var response = await Request(
      "admin/projectdata/floor-plan/" + id + "/delete",
      "POST"
    );
    if (response.status && response.statusCode) {
      getlist();
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

  const backHandler = () => {};

  const listsizetype = async () => {
    var response = await Request("sizetype", "GET");
    setSizeListType(response);
  };
  const getSubtypologyhandle = async (typologie_id) => {
    // const response=await getSubtypologyBytypology(typologie_id);
    const response = await Request(
      "admin/get-all-subtyplogy-by-typology/" + typologie_id,
      "GET"
    );
    if (response.status && response.statusCode === 200) {
      setSubTypologyList(response.data);
    }
  };

  const getProjectData = async () => {
    var response = await Request("admin/project/" + projectid + "/edit", "GET");
    if (response.status && response.statusCode === 200) {
      getSubtypologyhandle(response.data.typologie_id);
    }
  };

  const getlist = async () => {
    // setIsLoading(true);
    setIsLoadingTableData(true);
    var response = await Request(
      "admin/projectdata/floor-plan?project_id=" + projectid,
      "GET"
    );
    if (response.status && response.statusCode == 200) {
      setList(response.data.data);
    }
    setIsLoadingTableData(false);
  };

  useEffect(() => {
    listsizetype();
    getProjectData();
    getlist();
  }, []);

  return (
    <>
      <div className="px_50 form_col">
        <Button className="btn btn_outline" onClick={backHandler}>
          Back
        </Button>
        <Sections
          projectid={projectid}
          section_type={section_id}
          title="Floor Plans"
        />
        <div className="card bg-white mt-6 card_style1">
          <div className="flex items-center">
            <h5 className="mb-0">All Floor Plans</h5>
            <button
              className="btn ml-auto btn_primary btn-sm"
              onClick={addAmenityHandler}
            >
              Add Floor Plans
            </button>
          </div>

          <table className="mt_40 w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">Floor Plan Image</th>
                <th className="border border-gray-300 p-2 text-left">Total Super Area</th>
                {/* <th className="border border-gray-300 p-2 text-left">Price</th> */}
                <th className="border border-gray-300 p-2 text-left">Status</th>
                <th className="border border-gray-300 p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoadingTableData && (
                <tr>
                  <td colSpan={4}>
                    <div className="text-center">
                      <ScaleLoader color="#ddd" className="w-full" />
                    </div>
                  </td>
                </tr>
              )}

              {list ? (
                list.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="thumb icon">
                        {item.image ? (
                          <img
                            src={CONFIG.VITE_APP_STORAGE + item.image}
                            alt=""
                            className="img-fluid"
                          />
                        ) : (
                          "No Image "
                        )}
                      </div>
                    </td>
                    <td>{item.super_area ? item.super_area : "On Request"}</td>
                    {/* <td>{item.price ? item.price : "On Request"}</td> */}
                    <td>
                      <CustomDropdown
                        className="border rounded px-3 py-2 w-full"
                        defaultVal={item.status}
                        options={statusOptions}
                        onSelect={(selectedValue) =>
                          handleStatusSelect(selectedValue, item.id)
                        }
                      />
                    </td>
                    <td>
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
                        <RiDeleteBin6Line size={18} className="text-red-500" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2">
                    <h5 className="no_record">No More Found!</h5>
                  </td>
                </tr>
              )}
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
              <form>
                <div className="radio_design mb_20">
                  {subTypologyList
                    ? subTypologyList.map((item, key) => (
                        <CustomRadio
                          checked={
                            sectionFormdata.sub_typology ==
                            item.sub_typologies_id
                          }
                          className="radioItem mr_20"
                          onChange={handleSectionChange}
                          name="sub_typology"
                          id={`sub_typology${item.sub_typologies_id}`}
                          label={item.sub_typology}
                          key={key}
                          value={item.sub_typologies_id}
                        />
                      ))
                    : null}
                  {errors.sub_typology}
                </div>

                <div className="mb-2">
                  <label className="block font-medium">Floor Plan Image*</label>
                  <input
                    type="file"
                    className="border rounded px-3 py-2 w-full"
                    name="image"
                    ref={image}
                    onChange={handleSectionChange}
                  />
                  {errors.image}
                  {sectionFormdata.image_preview ? (
                    <img width="100" src={`${sectionFormdata.image_preview}`} />
                  ) : null}
                </div>

                <div className="mb-2">
                    <label className="block font-medium">Title*</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        placeholder="Enter Title"
                        value={sectionFormdata.more_typology}
                        name="more_typology"
                        onChange={handleSectionChange}
                        className="border rounded px-3 py-2 w-full"
                      />
                    </div>
                    {errors.size}
                  </div>

                <div className="mb-2">
                    <label className="block font-medium">Plan Type</label>
                    
                    <select
                        className="border rounded px-3 py-2 w-full"
                        name="type"
                        onChange={handleSectionChange}
                      >
                        <option value="">Select Type</option>
                        {planTypeOptions.map((item, index) => (
                          <option
                            value={item.value}
                            key={index}
                            selected={sectionFormdata.type == item.value}
                          >
                            {item.label}
                          </option>
                        ))}
                      </select>
                    {errors.size}
                    {errors.type}
                  </div>

                <div className="grid grid-cols-1 gap-2">
                  <div className="mb-2">
                    <label className="block font-medium">Carpet Area</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        placeholder="Enter floor size"
                        value={sectionFormdata.carpet_area}
                        name="carpet_area"
                        onChange={handleSectionChange}
                        className="border rounded px-3 py-2 w-full"
                      />
                    </div>
                    {errors.carpet_area}
                  </div>

                  <div className="mb-2">
                    <label className="block font-medium">Balcony Area</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        placeholder="Enter floor size"
                        value={sectionFormdata.balcony_area}
                        name="balcony_area"
                        onChange={handleSectionChange}
                        className="border rounded px-3 py-2 w-full"
                      />
                    </div>
                    {errors.balcony_area}
                  </div>

                  <div className="mb-2">
                    <label className="block font-medium">Total Super Area</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        placeholder="Enter floor size"
                        value={sectionFormdata.super_area}
                        name="super_area"
                        onChange={handleSectionChange}
                        className="border rounded px-3 py-2 w-full"
                      />
                    </div>
                    {errors.super_area}
                  </div>

                  <div className="mb-2">
                    <label className="block font-medium">Built Up Area</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        placeholder="Enter Built Up Area"
                        value={sectionFormdata.build_up_area}
                        name="build_up_area"
                        onChange={handleSectionChange}
                        className="border rounded px-3 py-2 w-full"
                      />
                    </div>
                    {errors.build_up_area}
                  </div>

                  <div className="mb-2">
                    <label className="block font-medium">Floor Price</label>
                    <input
                      type="number"
                      placeholder="Enter floor price"
                      name="price"
                      value={sectionFormdata.price}
                      onChange={handleSectionChange}
                      className="border rounded px-3 py-2 w-full"
                    />
                    {errors.price}
                    {sectionFormdata.price
                      ? numDifferentiation(sectionFormdata.price)
                      : null}
                  </div>
                </div>
              </form>
            </SideModal>
          </SidebarPortal>
          <BackdropPortal className="show" />
        </>
      )}
    </>
  );
});

export default FloorPlan;
