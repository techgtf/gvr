import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/admin/userSlice'
import sidebarReducer from '../redux/admin/sidebarSlice';
import projectReducer from '../redux/admin/projectsSlice';

const store = configureStore({
  reducer:{
    user:userReducer,
    sideMenu:sidebarReducer,
    projects:projectReducer
  }
})

export default store;