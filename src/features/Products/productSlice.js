import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

const initialState = {
    products: {
        isLoading: false,
        error: {},
        data: [],
        queryOptions: {
            page: 1,
            limit: 6,
        },
    },
    featuredProducts: {
        isLoading: false,
        error: {},
        data: [],
    },
};

export const fetchProducts = createAsyncThunk(
    'blogs/fetchBlogs',
    async (_, { getState }) => {
        const response = await axios.get(`/products`);
        return response.data;
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder.addCase();
    },
});
