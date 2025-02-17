import React, { useEffect, useRef, useState } from "react";
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from "common/Portal/Backdrop";
import SideModal from "../../Modal/SideModal/Index";
import Button from "common/Button/Button";
import Loader from "common/Loader/loader";
import Request from "root/config/JsonRequest";
import { toast } from "react-toastify";
import ScaleLoader from "react-spinners/ScaleLoader";
import Pagination from "common/Pagination/Pagination";
import * as CONFIG from "../../../../../config";

const statusOptions = [
  { label: "Active", value: "active" },
  { label: "Hide", value: "hide" },
];

const PageMeta = () => {
  const [data, setData] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [errors, setErrors] = useState({});
  const [enableEdit, setenableEdit] = useState(false);
  const [editId, setEditId] = useState(false);

  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [totalPage, setTotalPage] = useState(0);
  const [checkboxes, setCheckboxes] = useState([]);
  const [lastPage, setLastPage] = useState(1);
  const [isLoadingTableData, setIsLoadingTableData] = useState(false);
  const [isSitebarFormButtonLoading, setIsSitebarFormButtonLoading] =
    useState(false);
  const [distinctPageList, setDistinctsetPageList] = useState([]);

  const [formFields, setFormFields] = useState({
    page: "",
    meta_title: "",
    meta_keyword: "",
    meta_description: "",
    head_data: "",
    footer_data: "",
  });

  const typologyRef = useRef(null);
  const imageRef = useRef(null);

  const loadList = async (search = "") => {
    setIsLoadingTableData(true);
    const response = await Request(
      `admin/page-meta?search=${search}&page=${currentPage}`,
      "GET"
    );
    if (response.status && response.statusCode == 200) {
      setData(response.data.data);
      setTotalPage(response.data.last_page);
    }
    setIsLoadingTableData(false);
  };

  const getDistinctpages = async () => {
    const response = await Request(`admin/distinct-pages`, "GET");
    if (response.status && response.statusCode == 200) {
      setDistinctsetPageList(response.data);
    }
  };

  useEffect(() => {
    loadList();
    getDistinctpages();
  }, [currentPage, totalPage]);

  const addDeveloperHandler = () => {
    setShowSidebar(!showSidebar);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const cancelHandler = () => {
    setShowSidebar(false);
    resetFields();
  };

  const resetFields = () => {
    setFormFields({
      page: "",
      meta_title: "",
      meta_keyword: "",
      meta_description: "",
      head_data: "",
      footer_data: "",
    });
    setErrors({});
    setenableEdit(false);
    setEditId(false);
  };

  const addSubmitHandler = async (e) => {
    e.preventDefault();

    setIsSitebarFormButtonLoading(true);

    try {
      const response = await Request("admin/page-meta", "POST", formFields);
      if (response.status && response.statusCode == 403) {
        setErrors(response.errors);
        throw new Error("Please fill required fields");
      } else if (!response.status) {
        throw new Error(response.message);
      } else if (response.status && response.statusCode == 200) {
        toast.success(response.message);
        loadList();
        resetFields();
        setShowSidebar(false);
        return;
      }
    } catch (err) {
      toast.error(err.message);
    }
    setIsSitebarFormButtonLoading(false);
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    // setIsSitebarFormButtonLoading(true);

    try {
      const response = await Request(
        "admin/page-meta/" + editId,
        "PATCH",
        formFields
      );

      if (response.status && response.statusCode == 403) {
        setErrors(response.errors);
        throw new Error("Please fill required fields");
      } else if (!response.status) {
        throw new Error(response.message);
      } else if (response.status && response.statusCode == 200) {
        toast.success(response.message);
        resetFields();
        setShowSidebar(false);
        loadList();

        return;
      }
    } catch (err) {
      toast.error(err.message);
    }
    // setIsSitebarFormButtonLoading(false);
  };

  const deleteHandler = async (id) => {
    var response = await Request("admin/page-meta/" + id, "DELETE");
    if (response.status && response.statusCode == 200) {
      toast.success(response.message);
      loadList();
    } else {
      toast.error(response.message);
    }
  };

  const primaryHandle = async (e, id) => {
    var response = await Request("admin/typology/makeprimary/" + id, "POST");
    if (response.status && response.statusCode == 200) {
      setCheckboxes((prevCheckboxes) =>
        prevCheckboxes.map((checkbox) =>
          checkbox.id === id
            ? { ...checkbox, isChecked: !checkbox.isChecked }
            : checkbox
        )
      );
    }

    // checkboxes.map((checkbox)=>checkbox.id === id && {...checkbox, isChecked:!checkbox.isChecked})
  };
  const editHandler = async (id) => {
    setShowSidebar(true);
    setIsSitebarFormButtonLoading(true);
    var response = await Request("admin/page-meta/" + id + "/edit", "GET");
    if (response.status && response.statusCode === 200) {
      setenableEdit(true);
      setEditId(id);
      var result = response.data;
      setFormFields({
        meta_title: result.meta_title,
        meta_keyword: result.meta_keyword,
        meta_description: result.meta_description,
        head_data: result.head_data,
        footer_data: result.footer_data,
      });
    }
    setIsSitebarFormButtonLoading(false);
  };

  const findHandler = async (e) => {
    const searchTerm = e.target.value.toLowerCase();
    loadList(searchTerm);
  };

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="flex title_col justify-between items-center">
        <h4 className="page_title">Page Meta</h4>
        <button
          className="ms-auto btn_primary btn-sm bg-blue-500 text-white px-4 py-2 rounded"
          onClick={addDeveloperHandler}
        >
          Add Page Meta
        </button>
      </div>

      <div className="card mt-4 card_style1 bg-white shadow rounded-lg p-4">
        <div className="flex items-center justify-between">
          <h5 className="mb-0">Page Meta</h5>
          <div className="searchInput ml-auto">
            <input
              type="text"
              className="border rounded px-3 py-2 w-full"
              placeholder="Search by name"
              onChange={findHandler}
            />
          </div>
        </div>

        <table className="mt_40 w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border border-gray-300">Page Name</th>
              <th className="p-3 border border-gray-300">Meta Title</th>
              <th className="p-3 border border-gray-300">Meta Keyword</th>
              <th className="p-3 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoadingTableData ? (
              <tr>
                <td colSpan={4} className="text-center p-4">
                  <ScaleLoader color="#ddd" className="w-full" />
                </td>
              </tr>
            ) : data.length ? (
              data.map((item, index) => (
                <tr key={index} className="border border-gray-300">
                  <td className="p-3">{item.page_name.name}</td>
                  <td className="p-3">{item.meta_title}</td>
                  <td className="p-3">{item.meta_keyword}</td>
                  <td className="p-3 flex gap-2">
                    <button
                      className="action_btn"
                      onClick={() => editHandler(item.id)}
                    >
                      <img
                        src={CONFIG.ADMIN_IMG_URL + "icons/edit.svg"}
                        alt="edit icon"
                        className="w-5 h-5"
                      />
                    </button>
                    <button
                      className="action_btn"
                      onClick={() => deleteHandler(item.id)}
                    >
                      <img
                        src={CONFIG.ADMIN_IMG_URL + "icons/delete_color.svg"}
                        alt="delete icon"
                        className="w-5 h-5"
                      />
                    </button>
                    <input
                      hidden
                      type="checkbox"
                      value={item.id}
                      onChange={(e) => primaryHandle(e, item.id)}
                      checked={
                        checkboxes.find((checkbox) => checkbox.id === item.id)
                          ?.isChecked || false
                      }
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-4 font-semibold">
                  No Data Found!
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {!isLoadingTableData && data.length ? (
          <Pagination
            currentPage={currentPage}
            totalPages={lastPage}
            onPageChange={handlePageChange}
          />
        ) : null}
      </div>

      {showSidebar && (
        <>
          <SidebarPortal className="portal">
            <SideModal
              onCancel={cancelHandler}
              onSubmit={enableEdit ? updateHandler : addSubmitHandler}
              isLoading={isSitebarFormButtonLoading}
            >
              <form>
                {!enableEdit && (
                  <div className="mb_15">
                    <label>Select Page*</label>
                    <select
                      name="page"
                      value={formFields.page}
                      className="border rounded px-3 py-2 w-full"
                      onChange={handleChange}
                    >
                      <option value="">Select Page</option>
                      {!isLoadingTableData &&
                        distinctPageList.length &&
                        distinctPageList.map((item, index) => (
                          <option value={item.id} key={index}>
                            {item.name}
                          </option>
                        ))}
                    </select>
                    {errors.page && (
                      <div className="text-red-500">{errors.page}</div>
                    )}
                  </div>
                )}

                {[
                  {
                    name: "meta_title",
                    label: "Meta Title *",
                    placeholder: "Enter Meta Title",
                  },
                  {
                    name: "meta_keyword",
                    label: "Meta Keyword",
                    placeholder: "Enter Meta Keyword",
                  },
                  {
                    name: "meta_description",
                    label: "Meta Description",
                    placeholder: "Enter Meta Description",
                  },
                  {
                    name: "head_data",
                    label: "Head Data",
                    placeholder: "Head Data",
                  },
                  {
                    name: "footer_data",
                    label: "Footer Data/ Body",
                    placeholder: "Footer Data",
                  },
                ].map(({ name, label, placeholder }) => (
                  <div className="mb_15" key={name}>
                    <label>{label}</label>
                    <input
                      name={name}
                      value={formFields[name]}
                      className="border rounded px-3 py-2 w-full"
                      placeholder={placeholder}
                      type="text"
                      onChange={handleChange}
                    />
                    {errors[name] && (
                      <div className="text-red-500">{errors[name]}</div>
                    )}
                  </div>
                ))}
              </form>
            </SideModal>
          </SidebarPortal>
          <BackdropPortal className="show" />
        </>
      )}
    </>
  );
};

export default PageMeta;
