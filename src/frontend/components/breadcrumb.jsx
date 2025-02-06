import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumb({ currentPage, linkPath }) {
  return (
    <div className="breadcrumb py-3 md:hidden text-center text-[15px] w-full bg-transparent border-b border-black-rgba px-3">
      HOME - <Link to={linkPath} className="text-primary text-[14px]">{currentPage}</Link>
    </div>
  );
}

export default Breadcrumb;
