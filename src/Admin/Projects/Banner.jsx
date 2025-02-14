import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SideModal from "../components/Modal/SideModal/Index";
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from "common/Portal/Backdrop";
import Loader from "common/Loader/loader";
import ScaleLoader from "react-spinners/ScaleLoader";

import Button from "common/Button/Button";
import Request from "root/config/Request";
import * as CONFIG from "../../../config";

import "../assets/css/admin.css";
import { getSubtypology } from "../../config/Function";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Banner = React.memo(() => {
  const section_id = useParams().section;

  const [checkedCategory, setCheckedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingTableData, setIsLoadingTableData] = useState(false);
  const [isSitebarFormButtonLoading, setIsSitebarFormButtonLoading] =
    useState(false);

  const [showAddSidebar, setShowAddSidebar] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSidebar, setShowSidebar] = useState(false);
  const projectid = useParams().projectid;
  const [enableEdit, setenableEdit] = useState(false);
  const [priceListType, setPriceListType] = useState([]);
  const [projectdata, setProjectdata] = useState([]);
  const [subTypologyList, setSubTypologyList] = useState([]);
  const [sizeListType, setSizeListType] = useState([]);
  const [list, setList] = useState([]);

  const navigate = useNavigate();
  const desktopbanner = useRef(null);
  const mobilebanner = useRef(null);

  const [editId, setEditId] = useState(false);

  const [sectionFormdata, setSectionFormdata] = useState({
    // Initialize your form data state
    alt_text: null,
    desktopbanner_preview: "",
    mobilebanner_preview: "",
    project_id: "",
  });

  const resetfields = () => {
    setSectionFormdata({
      alt_text: null,
      desktopbanner_preview: "",
      mobilebanner_preview: "",
      project_id: "",
    });
  };

  const handleSectionChange = (e) => {
    setSectionFormdata({ ...sectionFormdata, [e.target.name]: e.target.value });
  };

  const addDataSidebar = () => {
    setShowAddSidebar(!showSidebar);
  };
  const cancelHandler = () => {
    setShowSidebar(false);
    setShowAddSidebar(false);
    resetfields();
  };

  const addSubmitHandler = async (e) => {
    e.preventDefault();
    setIsSitebarFormButtonLoading(true);
    const formData = new FormData();
    formData.append("alt_text", sectionFormdata.alt_text);
    formData.append("project_id", projectid);
    formData.append("desktop_image", desktopbanner.current.files[0]);
    formData.append("mobile_image", mobilebanner.current.files[0]);

    var response = await Request("admin/projectdata/banner", "POST", formData);
    if (response.status && response.statusCode === 403) {
      setErrors(response.errors);
      toast.error(response.message);
    } else if (response.status && response.statusCode === 200) {
      getlist();
      cancelHandler();
      resetfields();
      toast.success(response.message);
    }
    setIsSitebarFormButtonLoading(false);
  };

  const updateSubmitHandler = async (e) => {
    e.preventDefault();
    setIsSitebarFormButtonLoading(true);
    const formData = new FormData();
    formData.append("alt_text", sectionFormdata.alt_text);
    if (desktopbanner.current.files[0]) {
      formData.append("desktop_image", desktopbanner.current.files[0]);
    }

    if (mobilebanner.current.files[0]) {
      formData.append("mobile_image", mobilebanner.current.files[0]);
    }

    var response = await Request(
      "admin/projectdata/banner/" + editId + "/update",
      "POST",
      formData
    );
    if (response.status && response.statusCode === 403) {
      toast.error(response.message);
      setErrors(response.errors);
    } else if (response.status && response.statusCode === 200) {
      getlist();
      cancelHandler();
      resetfields();

      setShowSidebar(false);
      setShowAddSidebar(false);
      toast.success(response.message);
    }

    setIsSitebarFormButtonLoading(false);
  };
  const editHandler = async (id) => {
    setShowSidebar(true);
    setShowAddSidebar(true);

    var response = await Request(
      "admin/projectdata/banner/" + id + "/edit",
      "GET"
    );
    if (response.status && response.statusCode === 200) {
      setenableEdit(true);
      setEditId(id);
      var result = response.data;
      setSectionFormdata({
        alt_text: result.alt_text,
        desktopbanner_preview: CONFIG.VITE_APP_STORAGE + result.desktop_image,
        mobilebanner_preview: CONFIG.VITE_APP_STORAGE + result.mobile_image,
      });
    }
  };

  const deleteHandler = async (id) => {
    setIsLoading(true);
    var response = await Request(
      "admin/projectdata/bannerdelete/" + id,
      "POST"
    );
    if (response.status && response.statusCode === 200) {
      getlist();
      setIsLoading(false);
      toast.success(response.message);
    } else {
      setIsLoading(false);
      toast.error(response.message);
    }
  };

  const backHandler = () => {};

  const listpricetype = async () => {
    var response = await Request("pricetype", "GET");
    setPriceListType(response);
  };

  const listsizetype = async () => {
    var response = await Request("sizetype", "GET");
    setSizeListType(response);
  };
  const getSubtypologyhandle = async (typologie_id) => {
    const response = await getSubtypology(typologie_id);
    if (response.status && response.statusCode === 200) {
      setSubTypologyList(response.data.data);
    }
  };

  const getProjectData = async () => {
    var response = await Request("admin/project/" + projectid + "/edit", "GET");
    if (response.status && response.statusCode === 200) {
      setProjectdata(response.data);
      getSubtypologyhandle(response.data.typologie_id);
    }
  };

  const getlist = async () => {
    setIsLoadingTableData(true);
    var response = await Request(
      "admin/projectdata/banner?project_id=" + projectid,
      "GET"
    );
    if (response.status && response.statusCode == 200) {
      setList(response.data.data);
    }
    setIsLoadingTableData(false);
  };

  useEffect(() => {
    listpricetype();
    listsizetype();
    getProjectData();
    getlist();
  }, []);

  if (isLoading) {
    return <Loader />; // Use the Loader component
  }

  return (
    <>
      <div className="px-12 form_col">
        <button className="btn btn-outline" onClick={backHandler}>
          Back
        </button>

        <div className="card card_style1 mt-10 p-4">
          <div className="flex justify-between items-center mb-4">
            <h5 className="text-lg font-semibold">Project Banner</h5>
            <button className="btn btn-primary btn-sm" onClick={addDataSidebar}>
              Add Banner
            </button>
          </div>

          <table className="w-full border mt-4">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="p-2 text-left">Desktop Image</th>
                <th className="p-2 text-left">Mobile Image</th>
                <th className="p-2 text-left">Alt Text</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {isLoadingTableData ? (
                <tr>
                  <td colSpan={4} className="text-center p-4">
                    <ScaleLoader color="#ddd" />
                  </td>
                </tr>
              ) : list?.length ? (
                list.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-2">
                      <div className="thumb icon">
                        <img
                          src={CONFIG.VITE_APP_STORAGE + item.desktop_image}
                          alt={item.alt_text || "Desktop Image"}
                          className="w-24 h-auto rounded-md"
                        />
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="thumb icon">
                        <img
                          src={CONFIG.VITE_APP_STORAGE + item.mobile_image}
                          alt={item.alt_text || "Mobile Image"}
                          className="w-24 h-auto rounded-md"
                        />
                      </div>
                    </td>
                    <td className="p-2">{item.alt_text}</td>
                    <td className="p-2 flex gap-2">
                      <button
                        className="btn action_btn"
                        onClick={() => editHandler(item.id)}
                      >
                        <FaRegEdit />
                      </button>

                      <button
                        className="btn action_btn"
                        onClick={() => deleteHandler(item.id)}
                      >
                        <RiDeleteBin5Fill />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-4 text-gray-500">
                    No Banner Found!
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
              <form className="space-y-4">
                <div className="w-full">
                  <label className="block text-sm font-medium">
                    Desktop Image *
                  </label>
                  <input
                    className="w-full border rounded-md p-2"
                    name="desktopbanner"
                    type="file"
                    ref={desktopbanner}
                    onChange={handleSectionChange}
                  />
                  {errors.image}
                  {sectionFormdata.desktopbanner_preview && (
                    <img
                      width="100"
                      src={sectionFormdata.desktopbanner_preview}
                      alt="Preview"
                      className="mt-2 rounded-md"
                    />
                  )}
                </div>

                <div className="w-full">
                  <label className="block text-sm font-medium">
                    Mobile Image *
                  </label>
                  <input
                    className="w-full border rounded-md p-2"
                    name="mobilebanner"
                    type="file"
                    ref={mobilebanner}
                    onChange={handleSectionChange}
                  />
                  {errors.image}
                  {sectionFormdata.mobilebanner_preview && (
                    <img
                      width="100"
                      src={sectionFormdata.mobilebanner_preview}
                      alt="Preview"
                      className="mt-2 rounded-md"
                    />
                  )}
                </div>

                <div className="w-full">
                  <label className="block text-sm font-medium">Alt Text</label>
                  <input
                    className="w-full border rounded-md p-2"
                    placeholder="Enter Alt text"
                    name="alt_text"
                    type="text"
                    value={sectionFormdata.alt_text}
                    onChange={handleSectionChange}
                  />
                  {errors.alt_text}
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

export default Banner;
