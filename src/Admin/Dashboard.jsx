import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ADMIN_ASSETS } from "../../config";
import Request from "root/config/Request";
import "./assets/css/admin.css";

import * as CONFIG from "../../config";

const Dashboard = () => {
  const [data, setData] = useState({});

  const listHandler = async () => {
    var response = await Request("admin/dashboard", "GET");
    try {
      if (response.status && response.statusCode == 200) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listHandler();
  }, []);

  return (
    <>
      {/* Title Section */}
      <div className="title_col flex justify-between items-center">
        <h4 className="page_title text-xl font-semibold">Dashboard</h4>
      </div>

      {/* Cards Row */}
      <div className="cards_row flex flex-wrap -mx-4">
        <div className="single_col w-full md:w-1/3 px-4 mb-8">
          <div className="card_style1 color_card p-6 rounded-lg shadow-md text-left">
            <img
              src={ADMIN_ASSETS + "images/icons/project.svg"}
              alt="project"
              className="icon w-12 h-12 mb-4"
            />
            <h4 className="count text-2xl font-bold">{data?.project?.count}</h4>
            <p className="title text-gray-600">Total {data?.project?.name}</p>
          </div>
        </div>

        <div className="single_col w-full md:w-1/3 px-4 mb-8">
          <div className="card_style1 color_card p-6 rounded-lg shadow-md text-left">
            <img
              src={ADMIN_ASSETS + "images/icons/blogs.svg"}
              alt="blogs"
              className="icon w-12 h-12 mb-4"
            />
            <h4 className="count text-2xl font-bold">{data?.blog?.count}</h4>
            <p className="title text-gray-600">Total {data?.blog?.name}</p>
          </div>
        </div>

        <div className="single_col w-full md:w-1/3 px-4 mb-8">
          <div className="card_style1 color_card p-6 rounded-lg shadow-md text-left">
            <img
              src={ADMIN_ASSETS + "images/icons/enquire.svg"}
              alt="enquire"
              className="icon w-12 h-12 mb-4"
            />
            <h4 className="count text-2xl font-bold">
              {data?.total_enquiry?.count}
            </h4>
            <p className="title text-gray-600">
              Total {data?.total_enquiry?.name}
            </p>
          </div>
        </div>
      </div>

      {/* Small Cards Section */}
      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4">
          <div className="flex flex-wrap -mx-4">

            <div className="w-full md:w-1/4 px-4 mb-8">
              <div className="card_style1 card_sm p-6 rounded-lg shadow-md bg-white">
                <h4 className="count text-2xl font-bold">
                  {data?.amenities?.count}
                </h4>
                <p className="text-gray-600">Total {data?.amenities?.name}</p>
                <Link
                  to={CONFIG.ADMIN_ROOT + "amenities"}
                  className="mt-2 inline-block underline uppercase"
                >
                  View
                </Link>
              </div>
            </div>

            <div className="w-full md:w-1/4 px-4 mb-8">
              <div className="card_style1 card_sm p-6 rounded-lg shadow-md bg-white">
                <h4 className="count text-2xl font-bold">
                  {data?.blog?.count}
                </h4>
                <p className="text-gray-600">Total {data?.blog?.name}</p>
                <Link
                  to={CONFIG.ADMIN_ROOT + "blogs"}
                  className="mt-2 inline-block underline uppercase "
                >
                  View
                </Link>
              </div>
            </div>

            <div className="w-full md:w-1/4 px-4 mb-8">
              <div className="card_style1 card_sm p-6 rounded-lg shadow-md bg-white">
                <h4 className="count text-2xl font-bold">
                  {data?.testimonials?.count}
                </h4>
                <p className="text-gray-600">
                  Total {data?.testimonials?.name}
                </p>
                <Link
                  to={CONFIG.ADMIN_ROOT + "testimonials"}
                  className="mt-2 inline-block underline uppercase"
                >
                  View
                </Link>
              </div>
            </div>

            <div className="w-full md:w-1/4 px-4 mb-8">
              <div className="card_style1 card_sm p-6 rounded-lg shadow-md bg-white">
                <h4 className="count text-2xl font-bold">
                  {data?.jobApplication?.count}
                </h4>
                <p className="text-gray-600">
                  Total {data?.jobApplication?.name}
                </p>
                <Link
                  to={CONFIG.ADMIN_ROOT + "job-application"}
                  className="mt-2 inline-block underline uppercase"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
