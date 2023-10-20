import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

const initialState = {
    isLoading: false,
    error: null,
    data: [],
};

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`/categories`);
            return response.data;
        } catch (error) {
            return error?.response
                ? rejectWithValue(error?.response?.data)
                : rejectWithValue(error);
        }
    }
);

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload?.categories || [];
        });
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const categoriesSelector = (state) => state.categories.data;
export const categoriesLoadingSelector = (state) => state.categories.isLoading;
export const categoriesErrorSelector = (state) => state.categories.error;

export default categoriesSlice;
