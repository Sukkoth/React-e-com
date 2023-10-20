import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

export const getWishList = createAsyncThunk(
    'wishlist/getAllWishList',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/wishList?populate=products');
            return response.data;
        } catch (error) {
            return error?.response
                ? rejectWithValue(error?.response?.data)
                : rejectWithValue(error);
        }
    }
);

export const addToWishList = createAsyncThunk(
    'wishlist/addToWishList',
    async (item, { dispatch, rejectWithValue }) => {
        try {
            const response = await axios.post('/wishlist', item);
            dispatch(getWishList());
            return response.data;
        } catch (error) {
            return error?.response
                ? rejectWithValue(error?.response?.data)
                : rejectWithValue(error);
        }
    }
);

export const removeFromWishList = createAsyncThunk(
    'wishlist/removeFromWishList',
    async (itemId, { dispatch, rejectWithValue }) => {
        try {
            const response = await axios.delete(`/wishlist/${itemId}`);
            dispatch(getWishList());
            return response.data;
        } catch (error) {
            return error?.response
                ? rejectWithValue(error?.response?.data)
                : rejectWithValue(error);
        }
    }
);
