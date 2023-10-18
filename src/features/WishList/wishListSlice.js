import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

const initialState = {
    isLoading: false,
    error: {},
    data: {},
    item: {
        isLoading: false,
        error: {},
        data: {},
    },
};
export const getWishList = createAsyncThunk(
    'wishlist/getAllWishList',
    async () => {
        const response = await axios.get('/wishList?populate=products');
        return response.data;
    }
);

export const addToWishList = createAsyncThunk(
    'wishlist/addToWishList',
    async (item, { dispatch }) => {
        const response = await axios.post('/wishlist', item);
        dispatch(getWishList());
        return response.data;
    }
);

export const removeFromWishList = createAsyncThunk(
    'wishlist/removeFromWishList',
    async (itemId, { dispatch }) => {
        const response = await axios.delete(`/wishlist/${itemId}`);
        dispatch(getWishList());
        return response.data;
    }
);

const wishListSlice = createSlice({
    name: 'wishlist',
    initialState,
    extraReducers: (builder) => {
        //get all items in users wishlist
        builder.addCase(getWishList.pending, (state) => {
            state.isLoading = true;
            state.error = {};
        });

        builder.addCase(getWishList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });

        builder.addCase(getWishList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        //add item to wishlist

        builder.addCase(addToWishList.pending, (state) => {
            state.item.isLoading = true;
            state.item.error = {};
        });
        builder.addCase(addToWishList.fulfilled, (state, action) => {
            state.item.isLoading = false;
            state.item.data = action.payload;
        });

        builder.addCase(addToWishList.rejected, (state, action) => {
            state.item.isLoading = false;
            state.item.error = action.payload;
        });

        //remove item from wishlist

        builder.addCase(removeFromWishList.pending, (state) => {
            state.item.isLoading = true;
            state.item.error = {};
        });
        builder.addCase(removeFromWishList.fulfilled, (state) => {
            state.item.isLoading = false;
            state.item.data = {};
        });

        builder.addCase(removeFromWishList.rejected, (state, action) => {
            state.item.isLoading = false;
            state.item.error = action.payload;
        });
    },
});

export const wishItemSelector = (state) => state.wishlist?.data?.wishList;
export const wishItemStatusSelector = (state) =>
    state?.wishlist?.item?.isLoading;

export default wishListSlice;
