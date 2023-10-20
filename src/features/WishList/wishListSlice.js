import { createSlice } from '@reduxjs/toolkit';
import { wishlistBuilder } from './wishistBuilder';

const initialState = {
    isLoading: false,
    error: null,
    data: {},
    item: {
        isLoading: false,
        error: {},
        data: {},
    },
};

const wishListSlice = createSlice({
    name: 'wishlist',
    initialState,
    extraReducers: wishlistBuilder,
});

export const wishItemSelector = (state) => state.wishlist?.data?.wishList;
export const wishItemStatusSelector = (state) =>
    state?.wishlist?.item?.isLoading;

export default wishListSlice;
