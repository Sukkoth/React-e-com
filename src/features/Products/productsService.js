import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import parseProductQueryParams from '../../utils/parseProductQueryParams';

export const fetchproductById = createAsyncThunk(
    'products/fetchProductById',
    async (productId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`/products/${productId}`);
            return response.data;
        } catch (error) {
            return error?.response
                ? rejectWithValue(error.response.data)
                : rejectWithValue(error);
        }
    }
);

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { getState, rejectWithValue }) => {
        try {
            const response = await axios.get(
                `/products/?${parseProductQueryParams(
                    getState().products.products.queryOptions
                )}`
            );
            return response.data;
        } catch (error) {
            return error?.response
                ? rejectWithValue(error.response.data)
                : rejectWithValue(error);
        }
    }
);

export const fetchFeaturedProducts = createAsyncThunk(
    'products/fetchFeaturedProducts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`/products/featured`);
            return response.data;
        } catch (error) {
            return error?.response
                ? rejectWithValue(error.response.data)
                : rejectWithValue(error);
        }
    }
);
