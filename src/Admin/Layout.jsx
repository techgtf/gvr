import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Index";
import ContentLayout from './components/ContentLayout/ContentLayout'
import Request from 'root/config/Request';
import * as actionTypes from 'root/store/actions'

import { useDispatch, useSelector } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';
import '../Admin/assets/css/admin.css'


const AdminLayout = ()=>{
  const dispatch = useDispatch()

  const location = useLocation();

  useEffect(()=>{
    // Add 'admin_body' class when on admin routes
    document.body.classList.add('admin_body');

    // Cleanup function to remove the class when leaving admin routes
    return()=>{
      document.body.classList.remove('admin_body');
    }
  }, [location]);


  async function getAllCity() {
    try{
        var response=await Request(`getAllCity`,'GET');
        if (response.status &&  response.statusCode == 200) {
          console.log('actionTypes',actionTypes);
            dispatch(actionTypes.setAllCities(response.data))
        }
    }catch(err){
    }finally{
    }
}

useEffect(()=>{
  getAllCity();
});


  return(
    <>
    
      <Header />
      <ContentLayout>
        <Outlet />
      </ContentLayout>
      <ToastContainer />
    </>
  )
}

export default AdminLayout