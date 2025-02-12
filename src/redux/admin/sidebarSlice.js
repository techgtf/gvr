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
    shortCount:()=>{

    },
    normalCount:()=>{

    },
    toggleMenuCount:()=>{

    },
    toggleAscending:()=>{

    },
    setCurrentPage:()=>{

    },
  }
})

export const {shortCount, normalCount, toggleMenuCount, toggleAscending, setCurrentPage} = sidebarSlice.actions;

export default sidebarSlice.reducer;

