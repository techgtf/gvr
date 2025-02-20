import React, { useEffect, useRef, useState } from "react";
import CustomDropdown from "../../../common/Custom_Dropdown/CustomDropdown";
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from "../../../common/Portal/Backdrop";
import SideModal from "../../components/Modal/SideModal/Index";
import * as CONFIG from "../../../../config";
import Loader from "common/Loader/loader";
import { toast } from "react-toastify";
import Pagination from "../../../common/Pagination/Pagination";
import Request from "root/config/JsonRequest";

const statusOptions = [
  { label: "Active", value: "1" },
  { label: "Hide", value: "0" },
];

const BlogCategory = () => {
  const [selectedStatus, setSelectedStatus] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);
  const [enableEdit, setenableEdit] = useState(false);

  const nameRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [editId, setEditId] = useState(false);

  const resetFields = () => {
    nameRef.current = null;
    setErrors({});
    setEditId(false);
    setenableEdit(false);
  };

  const handleStatusSelect = async (selectedValue, id) => {
    setSelectedStatus(selectedValue);
    await updateStatusHandler(id, selectedValue);
  };

  const updateStatusHandler = async (id, selectedStatus) => {
    setIsLoading(true);

    var response = await Request(
      "admin/blog-category/" + id + "/status",
      "POST",
      {
        status: selectedStatus,
      }
    );

    setIsLoading(false);

    if (response.status && response.statusCode == 403) {
      setErrors(response.errors);
      toast.error(response.message);
    } else if (response.status && response.statusCode == 200) {
      toast.success(response.message);
    }
  };

  const addCategoryHandler = () => {
    setShowSidebar(!showSidebar);
  };

  const addSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    // const formData = new FormData();
    // formData.append('image', fileRef.current.files[0]);
    // formData.append('title', titleRef.current.value);
    var response = await Request("admin/blog-category", "POST", {
      name: nameRef.current.value,
    });

    setIsLoading(false);
    if (response.status && response.statusCode == 403) {
      setErrors(response.errors);
      toast.error(response.message);
    } else if (response.status && response.statusCode == 200) {
      listHandler();
      cancelHandler();
      resetFields();
      toast.success(response.message);
    }
  };

  const editHandler = async (id) => {
    setShowSidebar(true);

    var response = await Request("admin/blog-category/" + id, "GET");

    if (response.status && response.statusCode === 200) {
      setenableEdit(true);
      setEditId(id);
      nameRef.current.value = response.data.name;
    }
  };

  const cancelHandler = () => {
    setShowSidebar(false);
  };

  const deleteHandler = async (id) => {
    setIsLoading(true);
    var response = await Request("admin/blog-category/" + id, "DELETE");
    if (response.status && response.statusCode === 200) {
      toast.success(response.message);
      listHandler();
    } else {
      toast.error(response.message);
    }
    setIsLoading(false);
  };
  const listHandler = async () => {
    var response = await Request(
      "admin/blog-category?page=" + currentPage,
      "GET"
    );
    if (!response.status && response.statusCode !== 200) {
      setIsLoading(false);
      return;
    }

    setData(response.data.data);
    setLastPage(response.data.last_page);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const updateHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    var response = await Request(
      "admin/blog-category/" + editId + "/update",
      "POST",
      {
        name: nameRef.current.value,
      }
    );
    setIsLoading(false);

    if (response.status && response.statusCode === 200) {
      listHandler();
      cancelHandler();
    } else if (response.status && response.statusCode === 403) {
      setErrors(response.errors);
    }
  };

  useEffect(() => {
    listHandler();
  }, [currentPage]);

  if (isLoading) {
    return <Loader />; // Use the Loader component
  }

  return (
    <>
      <div className="title_col flex justify-between items-center">
        <h4 className="page_title">Blogs Categories</h4>
        <button
          className="btn btn_primary btn-sm ml-auto"
          onClick={addCategoryHandler}
        >
          Add Blog Category
        </button>
      </div>

      <div className="card mt-4 card_style1 bg-white">
        <div className="flex">
          <h5>All Categories</h5>
        </div>

        {/* 
    <form>
      <input ref={fileRef} type="file" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-transparent" />
      <input type="text" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-transparent" placeholder="Enter Amenity Name" />
      <button type="submit" className="btn btn_primary px-4 py-2 rounded text-white bg-blue-600 hover:bg-blue-700">
        Save
      </button>
    </form> 
    */}

        <table className="mt_40 w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left">Name</th>
              <th className="border border-gray-300 p-2 text-left">Show</th>
              <th className="border border-gray-300 p-2 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {!isLoading && data.length ? (
              data.map((item) => (
                <tr key={item.id} className="border-b border-gray-200">
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">
                    <CustomDropdown
                      className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-transparent"
                      defaultVal={item.status}
                      options={statusOptions}
                      onSelect={(selectedValue) =>
                        handleStatusSelect(selectedValue, item.id)
                      }
                    />
                  </td>
                  <td className="p-2 flex gap-2">
                    <button
                      className="btn action_btn p-1 bg-gray-200 hover:bg-gray-300 rounded"
                      onClick={() => editHandler(item.id)}
                    >
                      <img
                        src={CONFIG.ADMIN_IMG_URL + "icons/edit.svg"}
                        alt="edit icon"
                        className="w-5 h-5"
                      />
                    </button>

                    <button
                      className="btn action_btn p-1 bg-red-200 hover:bg-red-300 rounded"
                      onClick={() => deleteHandler(item.id)}
                    >
                      <img
                        src={CONFIG.ADMIN_IMG_URL + "icons/delete_color.svg"}
                        alt="delete icon"
                        className="w-5 h-5"
                      />
                    </button>
                  </td>
                </tr>
              ))
            ) : !isLoading ? (
              <tr>
                <td colSpan="3">
                  <h5 className="no_record text-center py-4">No Data Found!</h5>
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>

        <Pagination
          currentPage={currentPage}
          totalPages={lastPage}
          onPageChange={handlePageChange}
        />
      </div>

      {showSidebar && (
        <>
          <SidebarPortal className="portal">
            <SideModal
              onCancel={cancelHandler}
              onSubmit={enableEdit ? updateHandler : addSubmitHandler}
            >
              <form>
                <div className="mb-4">
                  <label className="block font-medium">Name</label>
                  <input
                    ref={nameRef}
                    required
                    type="text"
                    placeholder="Enter Category Name"
                    className="w-full !border !border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-transparent"
                  />
                  {errors.name}
                </div>
              </form>
            </SideModal>
          </SidebarPortal>
          <BackdropPortal className="show" />
        </>
      )}
    </>
  );
};

export default BlogCategory;
