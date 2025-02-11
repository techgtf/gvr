import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk(
    'api/fetchData',
    async (endpoint, { rejectWithValue }) => {
        try {
            const response = await axios.get(endpoint);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Something went wrong');
        }
    }
);

const apiSlice = createSlice({
    name: 'api',
    initialState: {
        resdata: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.resdata = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.resdata = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const apiReducer = apiSlice.reducer;