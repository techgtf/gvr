import { createSlice } from '@reduxjs/toolkit';

const toggelSlice = createSlice({
    name: 'toggel',
    initialState: {
        toggelPage: 'project1',
    },
    reducers: {
        setToggelPage: (state, action) => {
            state.toggelPage = action.payload;
        },
    },
});


export const { setToggelPage } = toggelSlice.actions;

export default toggelSlice.reducer;
