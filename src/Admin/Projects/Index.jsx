import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import CustomDropdown from "common/Custom_Dropdown/CustomDropdown";
import SidebarPortal from "common/Portal/SidebarPortal";
import SideModal from "../components/Modal/SideModal/Index";
import Request from "root/config/Request";
import Loader from "common/Loader/loader";
import ScaleLoader from "react-spinners/ScaleLoader";
import CustomSwitch from "common/CustomSwitch/Index";
import Button from "common/Button/Button";
import Pagination from "common/Pagination/Pagination";
import "../assets/css/admin.css";
import * as CONFIG from "../../../config";
import { toast } from "react-toastify";

const statusOptions = [
  { label: "Active", value: "active" },
  { label: "Hide", value: "hide" },
];

const Projects = () => {
  // pagination1
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [lastPage, setLastPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // end paggination 1

  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [categoryid, setCategoryid] = useState("");

  const category = useParams().category;
  const [list, setList] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [showAddSidebar, setShowAddSidebar] = useState(false);
  const [enableEdit, setenableEdit] = useState(false);
  const [projectCategoryId, setProjectCategoryId] = useState(null);
  const [isChecked, setIsChecked] = useState(null);

  useEffect(() => {
    getlist();
  }, [currentPage, categoryData]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // getCategoryData()
        var response = await Request(
          "admin/category/getbyslug/" + category,
          "GET"
        );
        if (response.status && response.statusCode == 200) {
          setCategoryid(response.data.id);
          await getlist(response.data.id);
          setProjectCategoryId(response.data.id);
          setCategoryData(response.data);
        } else {
          setList([]);
          setCategoryData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [category]);

  const getlist = async (search = "") => {
    var response = await Request(
      `admin/project?page=${currentPage}&category=${projectCategoryId}&search=${search}`,
      "GET"
    );
    if (response.status && response.statusCode == 200) {
      setList(response.data.data);
      setLastPage(response.data.last_page);
      setTotalPage(response.data.total);
    } else {
      setList([]);
    }
  };

  const handleImageError = (event) => {
    if (!imageError) {
      setImageError(true);
      event.target.src = CONFIG.ADMIN_ASSETS + "default_offer.jpg";
    }
  };

  const toggleSwitch = async (e) => {
    try {
      const changeId = parseInt(e.target.id);
      const formData = new FormData();
      formData.append("is_feature", e.target.checked ? 1 : 0);
      const response = await Request(
        `admin/project/${changeId}/feature`,
        "POST",
        formData
      );

      if (response.status && response.statusCode === 200) {
        toast.success(response.message);
        getlist(projectCategoryId);
      } else {
        toast.error(response.message);
      }
    } catch (err) {}
  };

  // const getCategoryData=async ()=>{
  //     var response=await Request('admin/category/getbyslug/'+category,'GET');
  //     if(response.status && response.statusCode==200){
  //         getlist(response.data.id)
  //         setCategoryData(response.data);

  //     }
  // }

  const findHandler = async (e) => {
    setCurrentPage(1);
    const searchTerm = e.target.value.toLowerCase();
    getlist(searchTerm);
  };

  const handleStatusSelect = () => {};

  return (
    <>
      <div className="flex title_col justify-between items-center">
        <h4 className="page_title">{categoryData.name} Projects</h4>
        <Link
          className="btn btn_primary"
          to={`${CONFIG.ADMIN_ROOT}project/add`}
        >
          Add New Project
        </Link>
      </div>

      <div className="card mt-4 card_style1">
        <div className="flex items-center">
          <h5 className="mb-0">{categoryData.name} Projects</h5>
          <div className="searchInput ml-auto">
            <input
              type="text"
              className="form-input"
              placeholder="Search by name"
              onChange={findHandler}
            />
          </div>
        </div>

        <table className="mt-10 w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2">Project</th>
              <th className="p-2">Status</th>
              <th className="p-2">Featured</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={4} className="text-center p-4">
                  <ScaleLoader color="#ddd" className="w-full" />
                </td>
              </tr>
            )}

            {!isLoading && list.length ? (
              list.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-2">
                    <div className="flex items-center">
                      <div className="thumb w-16 h-16 overflow-hidden">
                        <img
                          src={CONFIG.VITE_APP_STORAGE + item.feature_image}
                          alt="property"
                          className="w-full h-full object-cover"
                          onError={handleImageError}
                        />
                      </div>
                      <div className="ml-4">
                        <h6 className="pr_name text-lg font-semibold">
                          {item.name}
                        </h6>
                        <h5 className="price text-sm text-gray-600">
                          {item.category.name}
                        </h5>
                      </div>
                    </div>
                  </td>
                  <td className="p-2">
                    <CustomDropdown
                      className="form-input"
                      defaultVal="Select --"
                      options={statusOptions}
                      onSelect={handleStatusSelect}
                    />
                  </td>
                  <td className="p-2">
                    <CustomSwitch
                      id={item.id}
                      toggleSwitch={toggleSwitch}
                      isChecked={item.is_feature}
                    />
                  </td>
                  <td className="p-2">
                    <NavLink
                      to={`${CONFIG.ADMIN_ROOT}project/${item.id}/edit`}
                      className="action_btn"
                    >
                      <img
                        src={CONFIG.ADMIN_IMG_URL + "icons/edit.svg"}
                        alt="edit icon"
                        className="w-5 h-5"
                      />
                    </NavLink>
                  </td>
                </tr>
              ))
            ) : !isLoading ? (
              <tr>
                <td colSpan="4" className="text-center p-4">
                  <h5 className="text-lg font-semibold">No Projects Found!</h5>
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>

        {!isLoading && totalPage > 0 ? (
          <Pagination
            currentPage={currentPage}
            totalPages={lastPage}
            onPageChange={handlePageChange}
          />
        ) : null}
      </div>

      {showAddSidebar && (
        <>
          <SidebarPortal className="portal">
            <SideModal
              onCancel={cancelHandler}
              onSubmit={enableEdit ? updateAmenityHandler : addSubmitHandler}
            >
              <form>
                <div className="mb-4">
                  <label className="block font-semibold">Select Icon</label>
                  <input className="form-input w-full" required type="file" />
                  {errors.image}
                </div>

                <div className="mb-4">
                  <label className="block font-semibold">Title</label>
                  <input
                    className="form-input w-full"
                    required
                    type="text"
                    placeholder="Enter Amenity Title"
                  />
                  {errors.title}
                </div>
              </form>
            </SideModal>
          </SidebarPortal>
          <BackdropPortal />
        </>
      )}
    </>
  );
};

export default Projects;
