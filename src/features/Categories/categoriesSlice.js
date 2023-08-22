import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

const initialState = {
    isLoading: false,
    error: {},
    data: [],
};

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const response = await axios.get(`/categories`);
        return response.data;
    }
);

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.isLoading = true;
            state.error = {};
        });
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload?.categories || [];
        });
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    },
});

export const categoriesSelector = (state) => state.categories.data;
export const categoriesLoadingSelector = (state) => state.categories.isLoading;
export const categoriesErrorSelector = (state) => state.categories.error;

export default categoriesSlice;
