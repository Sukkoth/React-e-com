import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

export const fetchCartData = createAsyncThunk('cart/fetchData', async () => {
    const response = await axios.get('/carts');
    return response.data;
});

export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async (
        { productId, variationIndex = 0 },
        { dispatch, rejectWithValue }
    ) => {
        const newCart = {
            product: productId,
            variationIndex: variationIndex,
            quantity: 1,
        };
        try {
            const response = await axios.post('/carts', newCart);
            dispatch(fetchCartData());
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const removeCartItem = createAsyncThunk(
    'cart/removeFromCart',
    async (cartItemId, { dispatch }) => {
        const response = await axios.delete(`/carts/${cartItemId}`);
        dispatch(fetchCartData());
        return response.data;
    }
);

export const updateCartItem = createAsyncThunk(
    'cart/updateCartItem',
    async (item) => {
        const response = await axios.put(`/cart/${item._id}`, item);
        return response.data;
    }
);
