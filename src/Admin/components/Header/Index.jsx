import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  toast } from 'react-toastify';
import './header.css';
import * as CONFIG from '../../../../config';
import * as actionTypes from 'root/store/actions'
import { Link, useNavigate } from 'react-router-dom';


const Header = (props)=>{
    const toggleCount = useSelector(state=>state.sideMenu.toggleCount)
    const currentMenuCount = useSelector(state=>state.sideMenu.currentMenuCount)
    const isAscending = useSelector(state=>state.sideMenu.isAscending)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const toggleMenuHandler = ()=>{
        if(currentMenuCount === toggleCount.length - 1){
            dispatch(actionTypes.toggleAscending())
            dispatch(actionTypes.toggleMenuCount(currentMenuCount - 1))
            // setCurrentMenuCount((state)=>state - 1);
            // setIsAscending(!isAscending);
        }
          
        else if(currentMenuCount === 0){
              dispatch(actionTypes.toggleAscending())
              dispatch(actionTypes.toggleMenuCount(currentMenuCount + 1))
            // setCurrentMenuCount(state=>state + 1)
            // setIsAscending(!isAscending)
        }
      
        else{
            if(isAscending){
                dispatch(actionTypes.toggleMenuCount(currentMenuCount + 1))
            }else{
                dispatch(actionTypes.toggleMenuCount(currentMenuCount - 1))
            }
            // dispatch(actionTypes.toggleMenuCount(currentMenuCount + 1))
            // setCurrentMenuCount(state=>{
            //   if(isAscending){
            //     return state + 1
            //   }else{
            //     return state - 1
            //   }
            // })
        }
    }

    const logoutHandler = ()=>{
        localStorage.removeItem('token')
        dispatch(actionTypes.logout())
        navigate(CONFIG.ADMIN_ROOT+'login')
        return toast.success('Logout Successful')
    }

    return(
        <>
            <nav className="fixed top-0 left-0 w-full h-[90px] flex items-center shadow-md bg-white z-50 px-6">
                <div className="flex items-center gap-5 cursor-pointer" onClick={toggleMenuHandler}>
                    <span className="block h-[1px] w-[6px] bg-gray-800 relative before:absolute before:content-[''] before:block before:h-[1px] before:w-[6px] before:bg-gray-800 before:-top-[5px] after:absolute after:content-[''] after:block after:h-[1px] after:w-[6px] after:bg-gray-800 after:-bottom-[5px]"></span>
                    <span className="block h-[1px] w-[14px] bg-gray-800 relative before:absolute before:content-[''] before:block before:h-[1px] before:w-[14px] before:bg-gray-800 before:-top-[5px] after:absolute after:content-[''] after:block after:h-[1px] after:w-[14px] after:bg-gray-800 after:-bottom-[5px]"></span>
                </div>

                <div className="ml-auto flex items-center gap-6">
                    <div className="max-w-[100px]">
                        <img src={CONFIG.ADMIN_ASSETS + "images/logo.png"} alt="logo" className="w-full" />
                    </div>

                    <Menu as="div" className="relative">
                        <Menu.Button className="flex items-center gap-3 text-gray-600 font-medium focus:outline-none">
                            <span>Admin</span>
                            <img src={CONFIG.ADMIN_ASSETS + "images/default/default_user.png"} alt="user" className="w-[35px] h-[35px] rounded-full" />
                            <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                        </Menu.Button>
                        <Menu.Items className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 shadow-lg rounded-md overflow-hidden">
                            <MenuItem>
                                {({ active }) => (
                                    <button
                                        onClick={logoutHandler}
                                        className={`w-full px-4 py-2 text-left text-gray-700 ${active ? "bg-gray-100" : ""}`}
                                    >
                                        Logout
                                    </button>
                                )}
                            </MenuItem>
                        </Menu.Items>
                    </Menu>
                </div>
            </nav>
        </>
    );
}

export default Header;
