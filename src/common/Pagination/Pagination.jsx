import React from 'react';
import PropTypes from 'prop-types';
import './pagination.css';

// var chevronLeftIcon = '../../frontend/assets/images/icons/chevron_left.svg';
// var chevronRightIcon = '../../frontend/assets/images/icons/chevron_right.svg';

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Generate an array of page numbers from 1 to totalPages
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div>
  <ul className="pagination flex items-center space-x-2">
    <li className="page-item">
      <button
        className={`page-link flex items-center justify-center w-10 h-10 border rounded bg-none ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
        }`}
        disabled={currentPage === 1}
      >
        <FaAngleLeft />
      </button>
    </li>
    {pages.map((page) => (
      <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
        <button
          className={`page-link flex items-center justify-center w-10 h-10 border rounded ${
            currentPage === page ? "bg-blue-500 text-white" : "hover:bg-gray-200"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      </li>
    ))}
    <li className="page-item">
      <button
        className={`page-link flex items-center justify-center w-10 h-10 border rounded ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
        }`}
        disabled={currentPage === totalPages}
      >
        <FaAngleRight />
      </button>
    </li>
  </ul>
</div>

  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
