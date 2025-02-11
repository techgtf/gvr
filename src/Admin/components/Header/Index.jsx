import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  toast } from 'react-toastify';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './header.css';
import * as CONFIG from 'root/config';
import Button from 'common/Button/Button'
import Dropdown from 'react-bootstrap/Dropdown';
import * as actionTypes from 'root/store/actions'
import { Link, useNavigate } from 'react-router-dom';


const Header = (props)=>{
    const toggleCount = useSelector(state=>state.adminSideMenu.toggleCount)
    const currentMenuCount = useSelector(state=>state.adminSideMenu.currentMenuCount)
    const isAscending = useSelector(state=>state.adminSideMenu.isAscending)
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
            <Navbar className="">
                <Container fluid>
                    {/* <Navbar.Brand href="#home">Brand link</Navbar.Brand> */}
                    <div className="hamburger" onClick={toggleMenuHandler}>
                        <span className='sm'></span>
                        <span className='lg'></span>
                    </div>

                    <div className='logo'>
                        <img src={CONFIG.ADMIN_ASSETS+'project-logo-img-png.png'} alt="logo" className='img-fluid logo' />
                    </div>

                    <div className="user">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <span className="name">Admin</span>
                                <img src={CONFIG.ADMIN_ASSETS + 'default/default_user.png'} alt="user" className='user_img' />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                    </div>

                    

                    {/* <Button onClick={logoutHandler}>Logout</Button> */}
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
