import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from '../../Sidebar/Index'
import * as actionTypes from 'root/store/actions'
import './contentLayout.css'
import { useLocation } from "react-router-dom";

const ContentLayout = (props)=>{
  console.log(props);
  return;
    const dispatch = useDispatch();
    const location = useLocation()
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [menuClasses, setMenuClasses] = useState('');
    const currentMenuCount = useSelector(state=>state.sideMenu.currentMenuCount)

    useEffect(()=>{
        switch(currentMenuCount){
          case 0:
            setMenuClasses('')
          break;
      
          case 1:
            setMenuClasses('test');
          break;
          
          case 2:
            setMenuClasses('test test1')
          break;
      
          default:
            setMenuClasses('')
        }
      }, [currentMenuCount]);

    useEffect(()=>{
      setIsSubMenuOpen(false)
      setMenuClasses('test')
    }, [location.pathname])

    const toggleSubMenusHandler = (e, menu)=>{
        e.stopPropagation();
        setIsSubMenuOpen(true)
        setMenuClasses('test test1')
        dispatch(actionTypes.setCurrentPage(menu))
    }

    return(
        <>
            <div className={`content_layout  ${menuClasses}`}>
                <Sidebar onclick={props.onclick} toggleSubMenusHandler={toggleSubMenusHandler} isSubMenuOpen={isSubMenuOpen} />
                <div className="layout_content">
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default ContentLayout