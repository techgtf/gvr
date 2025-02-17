import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAscending:true,
  toggleCount:[0, 1, 2],
  currentMenuCount:1,
  currentPage:null
}

const sidebarSlice = createSlice({
  name:'sideMenu',
  initialState,
  reducers:{
    shortCount:(state, action)=>{
      return{
        ...state,
        toggleCount:[0, 1]
      }
    },
    normalCount:(state, action)=>{
      return{
        ...state,
        toggleCount:[0, 1, 2]
      }
    },
    toggleMenuCount:(state,action)=>{
      return{
        ...state,
        currentMenuCount:action.payload
      }
    },
    toggleAscending:(state)=>{
      return{
        ...state,
        isAscending:!state.isAscending
      }
    },
    setCurrentPage:(state, action)=>{
      console.log('working');
      return {
        ...state,
        currentPage:action.payload
      }
    },
  }
})

export const {shortCount, normalCount, toggleMenuCount, toggleAscending, setCurrentPage} = sidebarSlice.actions;

export default sidebarSlice.reducer;

