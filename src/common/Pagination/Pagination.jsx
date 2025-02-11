import React from 'react';
import PropTypes from 'prop-types';
import './pagination.css';
import * as CONFIG from 'root/config'

// var chevronLeftIcon = '../../frontend/assets/images/icons/chevron_left.svg';
// var chevronRightIcon = '../../frontend/assets/images/icons/chevron_right.svg';

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Generate an array of page numbers from 1 to totalPages
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav>
      <ul className="pagination">
        <li className='page-item'>
          <button className={`page-link ${currentPage === 1 ? 'disabled' : ''}`}>
            {/* <img src={chevronLeftIcon} alt="left icon" className='img-fluid' /> */}
            <FaAngleLeft />
          </button>
        </li>
        {pages.map((page) => (
          <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
        <li className='page-item'>
          <button className={`page-link ${currentPage === totalPages ? 'disabled' : ''}`}>
            {/* <img src={chevronRightIcon} alt="right icon" className='img-fluid' /> */}
            <FaAngleRight />
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
