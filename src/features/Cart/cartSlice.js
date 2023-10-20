import { createSlice } from '@reduxjs/toolkit';
import { cartBuilder } from './cartBuilder';
import { cartReducer } from './cartReducers';

const initialState = {
    tempCart: null,
    isLoading: false,
    error: null,
    data: {},
    cart: {
        isLoading: false,
        error: null,
        data: {},
    },
    grandTotal: 0,
    subTotal: 0,
    shipmentPrice: 0,
    paymentMethod: 'stripe',
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: cartReducer,
    extraReducers: cartBuilder,
});

export const cartSelector = (state) => state.cart.data;
export const tempCartSelector = (state) => state.cart.tempCart;
export const cartIsLoadingSelector = (state) => state.cart.isLoading;
export const cartErrorSelector = (state) => state.cart.error;

export const {
    grandTotalCalculation,
    subTotalCalculation,
    calculateShippingPrice,
    setPaymentMethod,
} = cartSlice.actions;

export default cartSlice;
