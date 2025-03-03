import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SideModal from "../components/Modal/SideModal/Index";
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from "common/Portal/Backdrop";
import Loader from "common/Loader/loader";
import ScaleLoader from "react-spinners/ScaleLoader";

import CustomRadio from "common/CustomRadio/Index";
import ProjectSteps from "../components/ProjectSteps/Index";
import Button from "common/Button/Button";
import Request from "root/config/Request";
import * as CONFIG from "../../../config";

import "../assets/css/admin.css";
import Sections from "../components/Project/Sections";
import { getSubtypology } from "../../config/Function";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Gallery = React.memo(() => {
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
  const image = useRef(null);
  const [editId, setEditId] = useState(false);

  const [sectionFormdata, setSectionFormdata] = useState({
    // Initialize your form data state
    alt_text: null,
    image: "",
    image_preview: "",
    project_id: "",
  });

  const resetfields = () => {
    setSectionFormdata({
      alt_text: null,
      image: "",
      image_preview: "",
      project_id: "",
    });
  };

  const handleSectionChange = (e) => {
    setSectionFormdata({ ...sectionFormdata, [e.target.name]: e.target.value });
  };

  const addAmenityHandler = () => {
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
    formData.append("image", image.current.files[0]);
    formData.append("type", 'image');

    var response = await Request("admin/projectdata/gallery", "POST", formData);
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
    formData.append("type", "image");
    if (image.current.files[0]) {
      formData.append("image", image.current.files[0]);
    }
    var response = await Request(
      "admin/projectdata/gallery/" + editId + "/update",
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
      "admin/projectdata/gallery/" + id + "/edit",
      "GET"
    );
    if (response.status && response.statusCode === 200) {
      setenableEdit(true);
      setEditId(id);
      var result = response.data;
      setSectionFormdata({
        alt_text: result.alt_text,
        image_preview: CONFIG.VITE_APP_STORAGE + result.image,
      });
    }
  };

  const deleteHandler = async (id) => {
    setIsLoading(true);
    var response = await Request(
      "admin/projectdata/gallerydelete/" + id,
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
      "admin/projectdata/gallery?project_id=" + projectid,
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
        <Sections
          projectid={projectid}
          section_type={section_id}
          title="Gallery"
        />

        <div className="card bg-white card_style1 mt-10 p-4">
          <div className="flex justify-between items-center mb-4">
            <h5 className="text-lg font-semibold">Project Gallery</h5>
            <button
              className="btn ml-auto btn_primary btn-sm"
              onClick={addAmenityHandler}
            >
              Add Gallery
            </button>
          </div>

          <table className="mt_40 w-full border-collapse border border-gray-200">
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
              ) : list?.length ? (
                list.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2 px-4">
                      <div className="thumb icon">
                        <img
                          src={CONFIG.VITE_APP_STORAGE + item.image}
                          alt={item.alt_text || "Gallery Image"}
                          className="w-24 h-auto rounded-md"
                        />
                      </div>
                    </td>
                    <td className="py-2 px-4">{item.alt_text}</td>
                    <td className="py-2 px-4">
                      <button
                        className="btn action_btn"
                        onClick={() => editHandler(item.id)}
                      >
                        <img
                          src={CONFIG.ADMIN_IMG_URL + "icons/edit.svg"}
                          alt="Edit"
                          className="w-6 h-6"
                        />
                      </button>

                      <button
                        className="btn action_btn"
                        onClick={() => deleteHandler(item.id)}
                      >
                        <img
                          src={CONFIG.ADMIN_IMG_URL + "icons/delete_color.svg"}
                          alt="Delete"
                          className="w-6 h-6"
                        />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center p-4 text-gray-500">
                    No More Found!
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
                    Thumbnail*
                  </label>
                  <input
                    className="w-full border rounded-md p-2"
                    name="image"
                    type="file"
                    ref={image}
                    onChange={handleSectionChange}
                  />
                  {errors.image}
                  {sectionFormdata.image_preview && (
                    <img
                      width="100"
                      src={sectionFormdata.image_preview}
                      alt="Preview"
                      className="mt-2 rounded-md"
                    />
                  )}
                </div>

                <div className="w-full">
                  <label className="block text-sm font-medium">Alt Text*</label>
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

export default Gallery;
