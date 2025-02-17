import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin:false,
  token:null,
}

const userSlice = createSlice({
  name:'user',
  initialState,
  reducers:{
    setLogin:()=>{

    },
    setLogout:()=>{

    },
  }
})

export const {setLogin, setLogout} = userSlice.actions;

export default userSlice.reducer;

