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

const sizeType = [
  { label: "sq.ft.", value: "1" },
  { label: "sq.yd.", value: "2" },
  { label: "sq.mt.", value: "3" },
];

const PriceList = React.memo(() => {
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
  });

  const resetfields = () => {
    setSectionFormdata({
      sub_typology: null,
      size: null,
      size_type: null,
      image: null,
      image_preview: null,

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
    formData.append("size", sectionFormdata.size);
    formData.append("size_type", sectionFormdata.size_type);
    formData.append("price", sectionFormdata.price);
    formData.append("project_id", projectid);
    
    var response = await Request(
      "admin/projectdata/price",
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

    if (sectionFormdata.size) {
      formData.append("size", sectionFormdata.size);
    }
    if (sectionFormdata.size_type) {
      formData.append("size_type", sectionFormdata.size_type);
    }
    if (sectionFormdata.price) {
      formData.append("price", sectionFormdata.price);
    }

    var response = await Request(
      "admin/projectdata/price/" + editId + "/update",
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
      "admin/projectdata/price/" + id + "/edit",
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
        price: result.price,
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
      "admin/projectdata/price?project_id=" + projectid,
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
          title="Price List"
        />
        <div className="card bg-white mt-6 card_style1">
          <div className="flex items-center">
            <h5 className="mb-0">All Price List</h5>
            <button
              className="btn ml-auto btn_primary btn-sm"
              onClick={addAmenityHandler}
            >
              Add Price
            </button>
          </div>

          <table className="mt_40 w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">Sub Typology</th>
                <th className="border border-gray-300 p-2 text-left">Size</th>
                <th className="border border-gray-300 p-2 text-left">Price</th>
                {/* <th className="border border-gray-300 p-2 text-left">Status</th> */}
                <th className="border border-gray-300 p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoadingTableData && (
                <tr>
                  <td colSpan={5}>
                    <div className="text-center">
                      <ScaleLoader color="#ddd" className="w-full" />
                    </div>
                  </td>
                </tr>
              )}

              {!isLoadingTableData && list.length < 1 && (
                <tr>
                  <td colSpan={5}>
                    <div className="text-center">
                      <h5 className="no_record">No Price List Found!</h5>
                    </div>
                  </td>
                </tr>
              )}

              {list && list.length > 0 && (
                list.map((item) => (
                  <tr key={item.id}>
                    <td>{item.sub_typology.typology}</td>
                    <td>{item.size}</td>
                    <td>{item.price}</td>
                    {/* <td>
                      <CustomDropdown
                        className="border rounded px-3 py-2 w-full"
                        defaultVal={item.status}
                        options={statusOptions}
                        onSelect={(selectedValue) =>
                          handleStatusSelect(selectedValue, item.id)
                        }
                      />
                    </td> */}
                    <td>
                      <button
                        className="btn action_btn"
                        onClick={() => editHandler(item.id)}
                      >
                        <AiOutlineEdit size={22} />
                      </button>
                      {/* <button
                        className="btn action_btn"
                        onClick={() => deleteHandler(item.id)}
                      >
                        <RiDeleteBin6Line size={18} className="text-red-500" />
                      </button> */}
                    </td>
                  </tr>
                ))
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
                    <label className="block font-medium">Size Type*</label>
                    
                    <select
                        className="border rounded px-3 py-2 w-full"
                        name="size_type"
                        onChange={handleSectionChange}
                        value={sectionFormdata.size_type}
                      >
                        <option value="">Select Type</option>
                        {sizeType.map((item, index) => (
                          <option
                            value={item.value}
                            key={index}
                            selected={sectionFormdata.type == item.value}
                          >
                            {item.label}
                          </option>
                        ))}
                      </select>
                    {errors.type}
                  </div>

                <div className="grid grid-cols-1 gap-2">
                  <div className="mb-2">
                    <label className="block font-medium">Size*</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        placeholder="Enter Size"
                        value={sectionFormdata.size}
                        name="size"
                        onChange={handleSectionChange}
                        className="border rounded px-3 py-2 w-full"
                      />
                    </div>
                    {errors.size}
                  </div>

                  <div className="mb-2">
                    <label className="block font-medium">Price*</label>
                    <input
                      type="number"
                      placeholder="Enter Price"
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

export default PriceList;
