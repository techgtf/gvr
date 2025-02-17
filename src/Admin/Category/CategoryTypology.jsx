import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CustomDropdown from "common/Custom_Dropdown/CustomDropdown";
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from "common/Portal/Backdrop";
import SideModal from "../components/Modal/SideModal/Index";
import Button from "common/Button/Button";
import Loader from "common/Loader/loader";
import JsonRequest from "root/config/JsonRequest";
import Request from "root/config/Request";

import { toast } from "react-toastify";
import ScaleLoader from "react-spinners/ScaleLoader";
import ReactPaginate from "react-paginate";

const statusOptions = [
  { label: "Active", value: "active" },
  { label: "Hide", value: "hide" },
];

const CategoryTypology = () => {
  const category_id = useParams().id;
  const [categorydata, setCategorydata] = useState([]);
  const [selectedTypology, setSelectedTypology] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [dictictTypology, setDictictTypology] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [errors, setErrors] = useState({});
  const [enableEdit, setenableEdit] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isTargeting, setIsTargeting] = useState("");

  const [notFound, setnotFound] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [totalPage, setTotalPage] = useState(0);

  const typologyRef = useRef(null);
  const getTyplology = async () => {
    var response = await Request("admin/category/" + category_id, "GET");
    if (response.status && response.statusCode === 200) {
      setCategorydata(response.data);
    }
  };

  const list = async () => {
    setDataLoading(true);
    const response = await Request(
      `admin/getTypologyDistinctByCategory/${category_id}`,
      "GET"
    );
    if (response.status && response.statusCode == 200) {
      if (!response.data.length) {
        setnotFound(true);
      }
      setDictictTypology(response.data);
    }
    setDataLoading(false);
  };

  const getselcteTypology = async () => {
    setDataLoading(true);
    const response = await Request(
      `admin/category-typology?categories_id=${category_id}`,
      "GET"
    );
    if (response.status && response.statusCode == 200) {
      setSelectedTypology(response.data.data);
    }
    setDataLoading(false);
  };

  useEffect(() => {
    getTyplology();
    list();
    getselcteTypology();
  }, [currentPage, totalPage]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const handleStatusSelect = () => {};

  const cancelHandler = () => {
    setShowSidebar(false);
  };

  const resetFields = () => {
    typologyRef.current.value = "";
  };

  const addSubmitHandler = async (e) => {
    e.preventDefault();
    var typologyVal = typologyRef.current.value;
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("typology", typologyVal);
      const response = await Request("admin/sub-typology", "POST", formData);

      if (response.status && response.statusCode == 403) {
        setErrors(response.message);
        throw new Error("Please fill required fields");
      } else if (!response.status) {
        throw new Error(response.message);
      } else if (response.status && response.statusCode == 200) {
        toast.success(response.message);
        resetFields();
        setShowSidebar(false);

        list();
        return;
      }
    } catch (err) {
      toast.error(err.message);
    }
    setIsLoading(false);
  };

  const deleteHandler = async (id) => {
    setIsTargeting(id);

    var response = await JsonRequest("admin/category-typology/" + id, "DELETE");
    if (response.status && response.statusCode == 200) {
      list();
      getselcteTypology();
      toast.success(response.message);
      setIsTargeting("id");
    } else {
      toast.success(response.message);
    }

    setIsLoading(false);
  };
  const addInCategory = async (typologies_id) => {
    setIsTargeting(typologies_id);
    const object = {
      categories_id: category_id,
      typologies_id: typologies_id,
    };
    const response = await JsonRequest(
      "admin/category-typology",
      "POST",
      object
    );

    if (response.status && response.statusCode == 200) {
      list();
      setIsTargeting("");
      getselcteTypology();
    }
  };

  if (isLoading) {
    return <Loader />; // Use the Loader component
  }

  return (
    <>
      <div className="title_col flex justify-between items-center">
        <h4 className="page_title">{categorydata.name}</h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column: All Typology */}
        <div className="card mt-4 card_style1">
          <div className="flex">
            <h5>All Typology</h5>
          </div>

          <table className="mt_40 w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">Name</th>
                <th className="border border-gray-300 p-2 text-left">
                  Transfer
                </th>
              </tr>
            </thead>

            <tbody>
              {!dictictTypology.length && dataLoading ? (
                <tr>
                  <td colSpan={4} className="text-center p-4">
                    <ScaleLoader color="#ddd" className="w-full" />
                  </td>
                </tr>
              ) : (
                dictictTypology.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="p-2">{item.typology}</td>
                    <td className="p-2">
                      <button
                        className="btn btn_primary btn_sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
                        onClick={() => addInCategory(item.id)}
                      >
                        {isTargeting === item.id
                          ? "loading"
                          : `Add to ${categorydata.name}`}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {!dataLoading && !notFound && (
            <ReactPaginate
              breakLabel="..."
              nextLabel="next"
              pageCount={totalPage}
              onPageChange={handlePageChange}
            />
          )}

          {notFound && (
            <h5 className="no_record text-center py-4">
              No More Records Found!
            </h5>
          )}
        </div>

        {/* Right Column: Selected Typologies */}
        <div className="card mt-4 card_style1">
          <div className="flex">
            <h5>Selected Typologies</h5>
          </div>

          <table className="mt_40 w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">Name</th>
                <th className="border border-gray-300 p-2 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {!selectedTypology.length && dataLoading ? (
                <tr>
                  <td colSpan={4} className="text-center p-4">
                    <ScaleLoader color="#ddd" className="w-full" />
                  </td>
                </tr>
              ) : (
                selectedTypology.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="p-2">{item.typology}</td>
                    <td className="p-2">
                      <button
                        className="btn btn_primary btn_sm bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"
                        onClick={() => deleteHandler(item.id)}
                      >
                        {isTargeting === item.id
                          ? "loading"
                          : `Remove ${categorydata.categoty}`}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {!dataLoading && !notFound && (
            <ReactPaginate
              breakLabel="..."
              nextLabel="next"
              pageCount={totalPage}
              onPageChange={handlePageChange}
            />
          )}

          {notFound && (
            <h5 className="no_record text-center py-4">
              No More Records Found!
            </h5>
          )}
        </div>
      </div>

      {showSidebar && (
        <>
          <SidebarPortal className="portal">
            <SideModal
              onCancel={cancelHandler}
              onSubmit={enableEdit ? updateAmenityHandler : addSubmitHandler}
            >
              <form>
                <div className="mb-4">
                  <label className="block font-medium">
                    Sub Typology Name*
                  </label>
                  <input
                    ref={typologyRef}
                    required
                    type="text"
                    placeholder="Enter sub typology name"
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.typology && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.typology}
                    </div>
                  )}
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

export default CategoryTypology;
