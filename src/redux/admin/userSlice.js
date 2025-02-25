import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin:false,
  token:null,
}

const userSlice = createSlice({
  name:'user',
  initialState,
  reducers:{
    setLogin:(state, action)=>{
      return {
        ...state,
        isLogin: true,
      }
    },
    setLogout:(state)=>{
      return{
        ...state,
        isLogin:false,
      }
    },
  }
})

export const {setLogin, setLogout} = userSlice.actions;

export default userSlice.reducer;

