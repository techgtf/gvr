import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFormFill:false,
  allProjects:[],
  allCities:[],
  allTypology:[],
  propertyTypes:[]
}

const projectsSlice = createSlice({
  name:'projects',
  initialState,
  reducers:{
    toggleFormFill:()=>{

    },
    setPropertyTypes:()=>{

    },
  }
})

export const {toggleFormFill, setPropertyTypes} = projectsSlice.actions;

export default projectsSlice.reducer;

