import { createSlice } from '@reduxjs/toolkit';
import OrderBuilder from './orderBuilder';

const initialState = {
    isLoading: false,
    error: null,
    data: null,
    order: {
        isLoading: false,
        error: null,
        data: null,
    },
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    extraReducers: OrderBuilder,
});

export const orderSelector = (state) => state?.order?.data;
export const orderLoadingSelector = (state) => state?.order.isLoading;
export const orderErrorSelector = (state) => state?.order.error;

export default orderSlice;
